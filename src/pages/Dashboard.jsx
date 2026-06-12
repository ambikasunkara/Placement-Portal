import { Link } from 'react-router-dom'
import { userStats, badges, leaderboard, dailyChallenges, careerRoadmaps, predictedQuestions, studyTimetableTemplate } from '../data/appData'
import { learningModules } from '../data/learningModules'

export default function Dashboard() {
  const userName = localStorage.getItem('userName') || userStats.name

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {userName.split(' ')[0]} 👋</h1>
            <p>Here's your placement preparation overview.</p>
          </div>
          <div className="streak-badge">
            🔥 {userStats.dailyStreak}-Day Streak
          </div>
        </div>

        {/* Top Stats */}
        <div className="stats-grid">
          <StatCard label="XP Points" value={userStats.xp} icon="⚡" color="#6366f1" />
          <StatCard label="Level" value={userStats.level} icon="🎮" color="#22c55e" />
          <StatCard label="Placement Readiness" value={`${userStats.placementReadiness}%`} icon="🎯" color="#f59e0b" />
          <StatCard label="College Rank" value={`#${userStats.collegeRank}`} icon="🏆" color="#ec4899" />
        </div>

        <div className="dashboard-grid">
          {/* Skill Progress */}
          <div className="dashboard-card">
            <h3>Skill Progress</h3>
            {userStats.skillProgress.map((skill) => (
              <div key={skill.skill} className="progress-row">
                <div className="progress-label">
                  <span>{skill.skill}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Readiness Score */}
          <div className="dashboard-card readiness-card">
            <h3>Placement Readiness Score</h3>
            <div className="readiness-circle">
              <span>{userStats.placementReadiness}</span>
              <small>/ 100</small>
            </div>
            <p>You're doing great! Focus on Coding & DSA and AI/Emerging Tech to boost your score further.</p>
          </div>

          {/* Daily Challenges */}
          <div className="dashboard-card">
            <h3>Daily Challenges</h3>
            <ul className="challenge-list">
              {dailyChallenges.map((c) => (
                <li key={c.id} className={c.completed ? 'completed' : ''}>
                  <span className="challenge-check">{c.completed ? '✅' : '⬜'}</span>
                  <span className="challenge-title">{c.title}</span>
                  <span className="challenge-reward">{c.reward}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Badges */}
          <div className="dashboard-card">
            <h3>Your Badges</h3>
            <div className="badges-grid">
              {badges.map((b) => (
                <div key={b.id} className={`badge-item ${b.earned ? 'earned' : 'locked'}`} title={b.description}>
                  <span className="badge-icon">{b.icon}</span>
                  <span className="badge-name">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="dashboard-card">
            <h3>Leaderboard</h3>
            <table className="leaderboard-table">
              <thead>
                <tr><th>Rank</th><th>Name</th><th>College</th><th>XP</th></tr>
              </thead>
              <tbody>
                {leaderboard.map((u) => (
                  <tr key={u.rank} className={u.isUser ? 'highlight-row' : ''}>
                    <td>#{u.rank}</td>
                    <td>{u.name}</td>
                    <td>{u.college}</td>
                    <td>{u.xp.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Links */}
          <div className="dashboard-card">
            <h3>Continue Learning</h3>
            <div className="quick-links">
              {learningModules.map((mod) => (
                <Link to={`/course/${mod.id}`} key={mod.id} className="quick-link" style={{ borderLeftColor: mod.color }}>
                  <span>{mod.icon}</span> {mod.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Differentiators */}
        <h2 className="section-title-spaced">AI-Powered Career Tools</h2>
        <div className="dashboard-grid">
          {/* Career Roadmap */}
          <div className="dashboard-card">
            <h3>🗺️ AI Career Roadmap Generator</h3>
            {careerRoadmaps.map((r) => (
              <div key={r.company} className="roadmap-block">
                <h4>{r.company} — {r.role}</h4>
                <ol>
                  {r.steps.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>
            ))}
          </div>

          {/* Study Timetable */}
          <div className="dashboard-card">
            <h3>🗓️ Auto Study Timetable</h3>
            <div className="timetable">
              {studyTimetableTemplate.map((d) => (
                <div key={d.day} className="timetable-row">
                  <strong>{d.day}</strong>
                  <ul>
                    {d.slots.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Predicted Questions */}
          <div className="dashboard-card">
            <h3>🔮 Interview Question Predictor</h3>
            <table className="leaderboard-table">
              <thead>
                <tr><th>Company</th><th>Predicted Question</th><th>Frequency</th></tr>
              </thead>
              <tbody>
                {predictedQuestions.map((q, i) => (
                  <tr key={i}>
                    <td>{q.company}</td>
                    <td>{q.question}</td>
                    <td><span className={`tag tag-${q.frequency.toLowerCase()}`}>{q.frequency}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: color + '22', color }}>{icon}</div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label-small">{label}</div>
      </div>
    </div>
  )
}
