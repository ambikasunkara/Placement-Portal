import { useState } from 'react'
import { resumeTemplates } from '../data/appData'

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    summary: '',
    skills: '',
    education: '',
    experience: '',
  })
  const [selectedTemplate, setSelectedTemplate] = useState(resumeTemplates[0].id)
  const [atsScore, setAtsScore] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const checkAtsScore = () => {
    // Mock ATS scoring logic based on filled fields and keyword presence
    let score = 0
    const fields = ['name', 'email', 'phone', 'summary', 'skills', 'education', 'experience']
    fields.forEach((f) => { if (form[f].trim().length > 0) score += 10 })
    if (form.github) score += 5
    if (form.linkedin) score += 5
    if (form.skills.split(',').length >= 5) score += 10
    score = Math.min(score, 100)
    setAtsScore(score)
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Resume & Profile Builder</h1>
        <p className="page-subtitle">Build an ATS-friendly resume and check your compatibility score.</p>

        <div className="resume-grid">
          {/* Form */}
          <div className="dashboard-card">
            <h3>Your Details</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>GitHub Profile</label>
                <input type="text" name="github" value={form.github} onChange={handleChange} placeholder="github.com/username" />
              </div>
              <div className="form-group">
                <label>LinkedIn Profile</label>
                <input type="text" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="linkedin.com/in/username" />
              </div>
            </div>
            <div className="form-group">
              <label>Professional Summary</label>
              <textarea name="summary" rows="3" value={form.summary} onChange={handleChange} placeholder="A brief summary about yourself..."></textarea>
            </div>
            <div className="form-group">
              <label>Skills (comma separated)</label>
              <textarea name="skills" rows="2" value={form.skills} onChange={handleChange} placeholder="React, JavaScript, DSA, SQL, Communication"></textarea>
            </div>
            <div className="form-group">
              <label>Education</label>
              <textarea name="education" rows="2" value={form.education} onChange={handleChange} placeholder="B.Tech Computer Science, XYZ University, 2026"></textarea>
            </div>
            <div className="form-group">
              <label>Experience / Projects</label>
              <textarea name="experience" rows="3" value={form.experience} onChange={handleChange} placeholder="Describe your internships, projects..."></textarea>
            </div>

            <button className="btn btn-primary btn-block" onClick={checkAtsScore}>Check ATS Score</button>
          </div>

          {/* Preview & Templates */}
          <div>
            <div className="dashboard-card">
              <h3>Resume Templates</h3>
              <div className="template-grid">
                {resumeTemplates.map((t) => (
                  <div
                    key={t.id}
                    className={`template-card ${selectedTemplate === t.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTemplate(t.id)}
                  >
                    <div className="template-preview">{t.preview}</div>
                    <h4>{t.name}</h4>
                    <p>{t.bestFor}</p>
                  </div>
                ))}
              </div>
            </div>

            {atsScore !== null && (
              <div className="dashboard-card">
                <h3>ATS Compatibility Score</h3>
                <div className="readiness-circle">
                  <span>{atsScore}</span>
                  <small>/ 100</small>
                </div>
                <p>
                  {atsScore >= 80
                    ? '🎉 Excellent! Your resume is highly ATS-compatible.'
                    : atsScore >= 50
                    ? '👍 Good start. Add more details and skills to improve your score.'
                    : '⚠️ Your resume needs more information to pass ATS filters effectively.'}
                </p>
              </div>
            )}

            <div className="dashboard-card">
              <h3>Resume Preview</h3>
              <div className="resume-preview">
                <h2>{form.name || 'Your Name'}</h2>
                <p className="resume-contact">
                  {form.email || 'email@example.com'} | {form.phone || '+91 XXXXXXXXXX'}
                  {form.github && <> | {form.github}</>}
                  {form.linkedin && <> | {form.linkedin}</>}
                </p>
                {form.summary && (
                  <>
                    <h4>Summary</h4>
                    <p>{form.summary}</p>
                  </>
                )}
                {form.skills && (
                  <>
                    <h4>Skills</h4>
                    <p>{form.skills}</p>
                  </>
                )}
                {form.education && (
                  <>
                    <h4>Education</h4>
                    <p>{form.education}</p>
                  </>
                )}
                {form.experience && (
                  <>
                    <h4>Experience / Projects</h4>
                    <p>{form.experience}</p>
                  </>
                )}
              </div>
            </div>

            <div className="dashboard-card">
              <h3>🌐 Portfolio Generator Preview</h3>
              <p>Your personal portfolio website will showcase your projects, skills, GitHub repos and resume in one place.</p>
              <div className="portfolio-preview">
                <div className="portfolio-header">{form.name || 'Your Name'}</div>
                <div className="portfolio-section">About: {form.summary || 'Your professional summary will appear here.'}</div>
                <div className="portfolio-section">Skills: {form.skills || 'Your skills will appear here.'}</div>
                <div className="portfolio-section">Links: {form.github || 'GitHub'} • {form.linkedin || 'LinkedIn'}</div>
              </div>
              <button className="btn btn-outline btn-block">Generate Portfolio (Coming Soon)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
