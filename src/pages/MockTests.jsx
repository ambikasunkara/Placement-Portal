import { useState } from 'react'
import { mockTests, dailyPracticeQuestions, aiFeedback } from '../data/practiceData'

export default function MockTests() {
  const [activeTab, setActiveTab] = useState('mock-tests')
  const [activeTest, setActiveTest] = useState(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const startPractice = (test) => {
    setActiveTest(test)
    setCurrentQ(0)
    setAnswers({})
    setShowResult(false)
    setSelectedOption(null)
  }

  const handleSelectOption = (option) => {
    setSelectedOption(option)
  }

  const handleNext = () => {
    setAnswers({ ...answers, [currentQ]: selectedOption })
    if (currentQ < dailyPracticeQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelectedOption(null)
    } else {
      setShowResult(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    dailyPracticeQuestions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++
    })
    return correct
  }

  const resetTest = () => {
    setActiveTest(null)
    setShowResult(false)
    setAnswers({})
    setCurrentQ(0)
    setSelectedOption(null)
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Practice & Mock Tests</h1>
        <p className="page-subtitle">Sharpen your skills with daily practice and company-specific mock tests.</p>

        {/* Tabs */}
        <div className="tabs">
          <button className={`tab ${activeTab === 'daily' ? 'active' : ''}`} onClick={() => { setActiveTab('daily'); resetTest() }}>Daily Practice</button>
          <button className={`tab ${activeTab === 'mock-tests' ? 'active' : ''}`} onClick={() => { setActiveTab('mock-tests'); resetTest() }}>Mock Tests</button>
          <button className={`tab ${activeTab === 'feedback' ? 'active' : ''}`} onClick={() => { setActiveTab('feedback'); resetTest() }}>AI Feedback</button>
        </div>

        {/* Daily Practice Tab */}
        {activeTab === 'daily' && !activeTest && (
          <div className="practice-intro">
            <div className="info-card">
              <h3>📅 Daily Practice Engine</h3>
              <p>10-20 fresh questions every day across Aptitude, Reasoning, Coding and Core CS subjects with auto-scoring and difficulty levels.</p>
              <button className="btn btn-primary" onClick={() => startPractice({ id: 'daily', name: 'Daily Practice Set', totalQuestions: dailyPracticeQuestions.length })}>
                Start Today's Practice ({dailyPracticeQuestions.length} Questions)
              </button>
            </div>
          </div>
        )}

        {/* Mock Tests Tab */}
        {activeTab === 'mock-tests' && !activeTest && (
          <div className="card-grid">
            {mockTests.map((test) => (
              <div key={test.id} className="mock-test-card">
                <div className="mock-test-header">
                  <h3>{test.name}</h3>
                  <span className={`level-tag level-${test.difficulty.toLowerCase()}`}>{test.difficulty}</span>
                </div>
                <p>{test.description}</p>
                <div className="mock-test-meta">
                  <span>⏱️ {test.duration} mins</span>
                  <span>📝 {test.totalQuestions} questions</span>
                </div>
                <div className="mock-test-sections">
                  {test.sections.map((s) => <span key={s} className="section-chip">{s}</span>)}
                </div>
                <button className="btn btn-primary btn-block" onClick={() => startPractice(test)}>Start Test</button>
              </div>
            ))}
          </div>
        )}

        {/* AI Feedback Tab */}
        {activeTab === 'feedback' && (
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>⚠️ Weak Topics</h3>
              {aiFeedback.weakTopics.map((t) => (
                <div key={t.topic} className="feedback-item">
                  <div className="progress-label">
                    <span>{t.topic}</span>
                    <span>{t.accuracy}% accuracy</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill weak" style={{ width: `${t.accuracy}%` }}></div>
                  </div>
                  <p className="suggestion-text">💡 {t.suggestion}</p>
                </div>
              ))}
            </div>

            <div className="dashboard-card">
              <h3>✅ Strong Topics</h3>
              {aiFeedback.strongTopics.map((t) => (
                <div key={t.topic} className="feedback-item">
                  <div className="progress-label">
                    <span>{t.topic}</span>
                    <span>{t.accuracy}% accuracy</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill strong" style={{ width: `${t.accuracy}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-card">
              <h3>🔍 Error Explanations</h3>
              {aiFeedback.errorExplanations.map((e, i) => (
                <div key={i} className="error-explanation">
                  <h4>{e.question}</h4>
                  <p><strong>Your Answer:</strong> <span className="wrong-answer">{e.yourAnswer}</span></p>
                  <p><strong>Correct Answer:</strong> <span className="correct-answer">{e.correctAnswer}</span></p>
                  <p className="suggestion-text">💡 {e.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Test - Question View */}
        {activeTest && !showResult && (
          <div className="quiz-card">
            <div className="quiz-header">
              <h3>{activeTest.name}</h3>
              <span className="quiz-progress">Question {currentQ + 1} of {dailyPracticeQuestions.length}</span>
            </div>
            <div className="quiz-progress-bar">
              <div className="progress-fill" style={{ width: `${((currentQ + 1) / dailyPracticeQuestions.length) * 100}%` }}></div>
            </div>

            <div className="quiz-question">
              <span className={`level-tag level-${dailyPracticeQuestions[currentQ].difficulty.toLowerCase()}`}>
                {dailyPracticeQuestions[currentQ].difficulty}
              </span>
              <h3>{dailyPracticeQuestions[currentQ].question}</h3>
              <div className="quiz-options">
                {dailyPracticeQuestions[currentQ].options.map((opt) => (
                  <button
                    key={opt}
                    className={`quiz-option ${selectedOption === opt ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="quiz-actions">
              <button className="btn btn-outline" onClick={resetTest}>Exit Test</button>
              <button className="btn btn-primary" onClick={handleNext} disabled={selectedOption === null}>
                {currentQ < dailyPracticeQuestions.length - 1 ? 'Next Question' : 'Finish Test'}
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {activeTest && showResult && (
          <div className="quiz-card result-card">
            <h2>🎉 Test Completed!</h2>
            <div className="readiness-circle large">
              <span>{calculateScore()}</span>
              <small>/ {dailyPracticeQuestions.length}</small>
            </div>
            <p className="result-score-text">
              You scored {Math.round((calculateScore() / dailyPracticeQuestions.length) * 100)}% on {activeTest.name}.
            </p>

            <div className="result-summary">
              {dailyPracticeQuestions.map((q, i) => (
                <div key={q.id} className={`result-row ${answers[i] === q.answer ? 'correct' : 'incorrect'}`}>
                  <span>{i + 1}. {q.question}</span>
                  <span>{answers[i] === q.answer ? '✅ Correct' : `❌ Correct: ${q.answer}`}</span>
                </div>
              ))}
            </div>

            <div className="quiz-actions">
              <button className="btn btn-outline" onClick={resetTest}>Back to Tests</button>
              <button className="btn btn-primary" onClick={() => startPractice(activeTest)}>Retake Test</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
