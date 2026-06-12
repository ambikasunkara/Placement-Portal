import { useParams, Link, Navigate } from 'react-router-dom'
import { getModuleById, learningModules } from '../data/learningModules'

export default function Course() {
  const { module } = useParams()
  const courseData = getModuleById(module)

  if (!courseData) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="course-header" style={{ background: `linear-gradient(135deg, ${courseData.color}22, transparent)` }}>
          <div className="course-icon-large" style={{ background: courseData.color + '22', color: courseData.color }}>
            {courseData.icon}
          </div>
          <div>
            <h1>{courseData.title}</h1>
            <p>{courseData.description}</p>
          </div>
        </div>

        {/* Topics */}
        {courseData.topics.map((topicGroup) => (
          <section key={topicGroup.category} className="course-section">
            <h2>{topicGroup.category}</h2>
            <div className="topic-grid">
              {topicGroup.items.map((item) => (
                <div key={item.name} className="topic-card">
                  <div className="topic-card-header">
                    <h4>{item.name}</h4>
                    <span className={`level-tag level-${item.level.toLowerCase()}`}>{item.level}</span>
                  </div>
                  <p>{item.desc}</p>
                  <button className="btn btn-outline btn-sm">Start Topic</button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Other Modules */}
        <section className="course-section">
          <h2>Explore Other Modules</h2>
          <div className="card-grid">
            {learningModules.filter((m) => m.id !== module).map((mod) => (
              <Link to={`/course/${mod.id}`} key={mod.id} className="module-card" style={{ borderTopColor: mod.color }}>
                <div className="module-icon" style={{ background: mod.color + '22', color: mod.color }}>
                  {mod.icon}
                </div>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
                <span className="module-link" style={{ color: mod.color }}>Explore →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
