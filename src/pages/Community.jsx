import { forumThreads, peerInterviewSlots, mentors, studyGroups } from '../data/appData'

export default function Community() {
  return (
    <div className="page">
      <div className="container">
        <h1>Community</h1>
        <p className="page-subtitle">Connect, discuss and grow together with peers and mentors.</p>

        <div className="dashboard-grid">
          {/* Forum */}
          <div className="dashboard-card">
            <h3>💬 Doubt Discussion Forum</h3>
            {forumThreads.map((t) => (
              <div key={t.id} className="forum-thread">
                <div className="forum-thread-header">
                  <h4>{t.title}</h4>
                  <span className="section-chip">{t.tag}</span>
                </div>
                <p>By {t.author} • {t.replies} replies</p>
              </div>
            ))}
            <button className="btn btn-outline btn-block">View All Threads</button>
          </div>

          {/* Peer Mock Interviews */}
          <div className="dashboard-card">
            <h3>🎤 Peer Mock Interviews</h3>
            {peerInterviewSlots.map((s) => (
              <div key={s.id} className="peer-slot">
                <div>
                  <h4>{s.peer}</h4>
                  <p>{s.topic}</p>
                  <small>{s.time}</small>
                </div>
                <span className={`tag tag-${s.status === 'Open' ? 'high' : 'medium'}`}>{s.status}</span>
              </div>
            ))}
            <button className="btn btn-outline btn-block">Schedule New Slot</button>
          </div>

          {/* Mentor Chat */}
          <div className="dashboard-card">
            <h3>🧑‍🏫 Mentor Chat</h3>
            {mentors.map((m) => (
              <div key={m.id} className="mentor-item">
                <div className="mentor-avatar">{m.name.charAt(0)}</div>
                <div className="mentor-info">
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                  <small>Expertise: {m.expertise} • ⭐ {m.rating}</small>
                </div>
                <button className="btn btn-outline btn-sm">Chat</button>
              </div>
            ))}
          </div>

          {/* Study Groups */}
          <div className="dashboard-card">
            <h3>👥 Study Groups</h3>
            {studyGroups.map((g) => (
              <div key={g.id} className="study-group-item">
                <h4>{g.name}</h4>
                <p>{g.focus}</p>
                <div className="mock-test-meta">
                  <span>👤 {g.members} members</span>
                </div>
                <button className="btn btn-outline btn-sm">Join Group</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
