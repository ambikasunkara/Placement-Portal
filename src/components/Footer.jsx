import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="navbar-logo">
            <span className="logo-icon">🎓</span>
            <span>PrepPortal</span>
          </div>
          <p className="footer-tagline">
            Your all-in-one platform to learn, practice and simulate real placement interviews.
          </p>
        </div>

        <div className="footer-col">
          <h4>Learning</h4>
          <Link to="/course/aptitude">Aptitude & Reasoning</Link>
          <Link to="/course/coding-dsa">Coding & DSA</Link>
          <Link to="/course/core-cs">Core CS Subjects</Link>
          <Link to="/course/ai-emerging-tech">AI & Emerging Tech</Link>
          <Link to="/course/placement-prep">Placement Prep</Link>
        </div>

        <div className="footer-col">
          <h4>Practice</h4>
          <Link to="/mock-tests">Mock Tests</Link>
          <Link to="/interview">Interview Simulator</Link>
          <Link to="/resume-builder">Resume Builder</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Smart Placement Preparation Portal. All rights reserved.
      </div>
    </footer>
  )
}
