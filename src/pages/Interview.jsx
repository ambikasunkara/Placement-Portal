import { useState } from 'react'
import { hiringRounds, hrInterviewQuestions } from '../data/appData'

export default function Interview() {
  const [activeRound, setActiveRound] = useState(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [response, setResponse] = useState('')
  const [responses, setResponses] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const startRound = (round) => {
    setActiveRound(round)
    setCurrentQ(0)
    setResponses([])
    setResponse('')
    setShowResult(false)
    setIsRecording(false)
  }

  const handleSubmitAnswer = () => {
    const newResponses = [...responses, { question: hrInterviewQuestions[currentQ].question, answer: response }]
    setResponses(newResponses)
    setResponse('')
    setIsRecording(false)
    if (currentQ < hrInterviewQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateConfidenceScore = () => {
    // Mock confidence score based on average response length
    if (responses.length === 0) return 0
    const avgLength = responses.reduce((sum, r) => sum + r.answer.length, 0) / responses.length
    let score = Math.min(Math.round((avgLength / 150) * 100), 100)
    if (score < 30) score = 30 + Math.floor(Math.random() * 10)
    return score
  }

  const resetInterview = () => {
    setActiveRound(null)
    setShowResult(false)
    setResponses([])
    setCurrentQ(0)
    setResponse('')
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Placement Simulation System</h1>
        <p className="page-subtitle">Experience a virtual hiring flow with realistic interview rounds.</p>

        {!activeRound && (
          <>
            <section className="course-section">
              <h2>Virtual Hiring Flow</h2>
              <div className="card-grid">
                {hiringRounds.map((round) => (
                  <div key={round.id} className="round-card">
                    <div className="round-icon">{round.icon}</div>
                    <h3>{round.name}</h3>
                    <p>{round.description}</p>
                    <div className="mock-test-meta">
                      <span>⏱️ {round.duration}</span>
                    </div>
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => round.name === 'HR Round' ? startRound(round) : alert(`${round.name} simulation coming soon! Try the HR Round for now.`)}
                    >
                      {round.name === 'HR Round' ? 'Start Round' : 'Start Round'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* HR Interview Simulator */}
        {activeRound && !showResult && (
          <div className="quiz-card">
            <div className="quiz-header">
              <h3>🤝 HR Round - Text Interview Simulator</h3>
              <span className="quiz-progress">Question {currentQ + 1} of {hrInterviewQuestions.length}</span>
            </div>
            <div className="quiz-progress-bar">
              <div className="progress-fill" style={{ width: `${((currentQ + 1) / hrInterviewQuestions.length) * 100}%` }}></div>
            </div>

            <div className="interview-question">
              <h3>"{hrInterviewQuestions[currentQ].question}"</h3>
              <p className="suggestion-text">💡 Tip: {hrInterviewQuestions[currentQ].tip}</p>
            </div>

            <div className="voice-sim-box">
              <button
                className={`voice-btn ${isRecording ? 'recording' : ''}`}
                onClick={() => setIsRecording(!isRecording)}
              >
                {isRecording ? '⏹️ Stop Recording' : '🎙️ Start Voice Answer (Simulated)'}
              </button>
              {isRecording && <p className="recording-indicator">🔴 Recording... speak your answer (this is a UI simulation only)</p>}
            </div>

            <div className="form-group">
              <label>Your Answer (Text)</label>
              <textarea
                rows="5"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Type your answer here..."
              ></textarea>
            </div>

            <div className="quiz-actions">
              <button className="btn btn-outline" onClick={resetInterview}>Exit Simulation</button>
              <button className="btn btn-primary" onClick={handleSubmitAnswer} disabled={response.trim().length === 0}>
                {currentQ < hrInterviewQuestions.length - 1 ? 'Next Question' : 'Finish Interview'}
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {activeRound && showResult && (
          <div className="quiz-card result-card">
            <h2>🎉 Interview Round Completed!</h2>
            <div className="readiness-circle large">
              <span>{calculateConfidenceScore()}</span>
              <small>/ 100</small>
            </div>
            <p className="result-score-text">Your Confidence Score: {calculateConfidenceScore()} / 100</p>
            <p className="suggestion-text">
              💡 {calculateConfidenceScore() >= 70
                ? 'Great job! Your answers were detailed and confident.'
                : 'Try to elaborate more with specific examples using the STAR method to boost your confidence score.'}
            </p>

            <div className="result-summary">
              {responses.map((r, i) => (
                <div key={i} className="result-row">
                  <div>
                    <strong>{i + 1}. {r.question}</strong>
                    <p>{r.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="quiz-actions">
              <button className="btn btn-outline" onClick={resetInterview}>Back to Hiring Flow</button>
              <button className="btn btn-primary" onClick={() => startRound(activeRound)}>Retake Round</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
