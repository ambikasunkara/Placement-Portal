import { Link, useNavigate } from 'react-router-dom'
import { learningModules } from '../data/learningModules'

export default function Home() {
  const navigate = useNavigate()

  const handleStartLearning = () => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Crack Your Dream Placement 🚀</h1>
          <p className="hero-subtitle">Learn • Practice • Simulate Real Interviews • Get Job Ready</p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={handleStartLearning}>
              Start Learning
            </button>
            <Link to="/dashboard" className="btn btn-secondary btn-lg">
              Explore Dashboard
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Practice Questions</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Mock Interviews</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </section>

      {/* CORE LEARNING MODULES */}
      <section className="section">
        <div className="section-header">
          <h2>Core Learning Modules</h2>
          <p>Everything you need to crack your placement, structured into 5 powerful modules.</p>
        </div>
        <div className="card-grid">
          {learningModules.map((mod) => (
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

      {/* FEATURES SECTION */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Why PrepPortal?</h2>
          <p>A complete SaaS-grade placement preparation ecosystem built for serious aspirants.</p>
        </div>
        <div className="features-grid">
          <FeatureCard icon="📚" title="Structured Learning" desc="Curated content across aptitude, coding, core CS, AI and placement prep." />
          <FeatureCard icon="📝" title="Daily Practice Engine" desc="10-20 fresh questions every day with auto-scoring and difficulty levels." />
          <FeatureCard icon="🏢" title="Company-Specific Mock Tests" desc="TCS, Infosys, Wipro and full-length placement test simulations." />
          <FeatureCard icon="🤖" title="AI Feedback System" desc="Identify weak topics, get improvement suggestions and error explanations." />
          <FeatureCard icon="🎭" title="Placement Simulation" desc="Experience the complete hiring flow - Aptitude, Coding, Technical & HR rounds." />
          <FeatureCard icon="📄" title="Resume & ATS Checker" desc="Build ATS-friendly resumes and check your ATS compatibility score." />
          <FeatureCard icon="🏆" title="Gamification" desc="XP points, badges, leaderboards and daily challenges to keep you motivated." />
          <FeatureCard icon="🤝" title="Community Support" desc="Discussion forums, peer mock interviews, mentor chats and study groups." />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready to start your placement journey?</h2>
        <p>Join thousands of students learning, practicing and getting placement-ready with PrepPortal.</p>
        <button className="btn btn-primary btn-lg" onClick={handleStartLearning}>
          Get Started Now
        </button>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
