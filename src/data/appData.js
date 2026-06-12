// Gamification, Analytics, Community, Interview Simulation mock data

export const userStats = {
  name: 'Aditya Sharma',
  xp: 4250,
  level: 12,
  dailyStreak: 7,
  placementReadiness: 78,
  collegeRank: 15,
  globalRank: 1243,
  skillProgress: [
    { skill: 'Aptitude & Reasoning', progress: 82 },
    { skill: 'Coding & DSA', progress: 65 },
    { skill: 'Core CS Subjects', progress: 70 },
    { skill: 'AI & Emerging Tech', progress: 45 },
    { skill: 'Placement Prep', progress: 90 },
  ],
}

export const badges = [
  { id: 1, name: 'DSA Master', icon: '🏅', description: 'Solved 100+ DSA problems with 80%+ accuracy.', earned: true },
  { id: 2, name: 'Aptitude Expert', icon: '🧠', description: 'Scored 90%+ in 5 consecutive aptitude tests.', earned: true },
  { id: 3, name: 'Interview Ready', icon: '🎤', description: 'Completed 10 mock interviews successfully.', earned: false },
  { id: 4, name: 'Streak Champion', icon: '🔥', description: 'Maintained a 30-day learning streak.', earned: false },
  { id: 5, name: 'Quiz Wizard', icon: '⚡', description: 'Completed 50 daily practice sets.', earned: true },
]

export const leaderboard = [
  { rank: 1, name: 'Priya Verma', xp: 9820, college: 'IIT Delhi' },
  { rank: 2, name: 'Rohan Mehta', xp: 9450, college: 'NIT Trichy' },
  { rank: 3, name: 'Sneha Iyer', xp: 9100, college: 'BITS Pilani' },
  { rank: 4, name: 'Karan Patel', xp: 8760, college: 'IIIT Hyderabad' },
  { rank: 5, name: 'Ananya Gupta', xp: 8520, college: 'VIT Vellore' },
  { rank: 15, name: 'Aditya Sharma', xp: 4250, college: 'Your College', isUser: true },
]

export const dailyChallenges = [
  { id: 1, title: 'Solve 5 DSA Problems', reward: '+50 XP', completed: true },
  { id: 2, title: 'Complete Aptitude Quiz (10 Qs)', reward: '+30 XP', completed: true },
  { id: 3, title: 'Attempt 1 Mock Interview Question', reward: '+40 XP', completed: false },
  { id: 4, title: 'Read 1 Core CS Topic', reward: '+20 XP', completed: false },
]

// Community mock data
export const forumThreads = [
  { id: 1, title: 'How to approach Dynamic Programming problems for beginners?', author: 'Ravi Kumar', replies: 12, tag: 'DSA' },
  { id: 2, title: 'TCS NQT 2026 - Pattern and difficulty discussion', author: 'Megha Singh', replies: 25, tag: 'Mock Tests' },
  { id: 3, title: 'Best resources for DBMS normalization?', author: 'Arjun Rao', replies: 8, tag: 'Core CS' },
  { id: 4, title: 'Tips for HR round - tell me about yourself', author: 'Pooja Nair', replies: 19, tag: 'HR Prep' },
]

export const peerInterviewSlots = [
  { id: 1, peer: 'Vikram Singh', topic: 'Coding Round - Arrays & Strings', time: 'Today, 6:00 PM', status: 'Open' },
  { id: 2, peer: 'Neha Joshi', topic: 'HR Round Practice', time: 'Tomorrow, 5:00 PM', status: 'Open' },
  { id: 3, peer: 'Sahil Khan', topic: 'System Design Basics', time: 'Tomorrow, 8:00 PM', status: 'Booked' },
]

export const mentors = [
  { id: 1, name: 'Anjali Desai', role: 'SDE-2 @ Amazon', expertise: 'DSA, System Design', rating: 4.9 },
  { id: 2, name: 'Rahul Bansal', role: 'Product Manager @ Microsoft', expertise: 'HR, Resume Review', rating: 4.8 },
  { id: 3, name: 'Sandeep Reddy', role: 'SDE-1 @ Google', expertise: 'Coding Interviews', rating: 4.7 },
]

export const studyGroups = [
  { id: 1, name: 'DSA Daily Grind', members: 142, focus: 'Daily DSA problem solving and discussion' },
  { id: 2, name: 'Aptitude Warriors', members: 98, focus: 'Quant and reasoning practice sessions' },
  { id: 3, name: 'Core CS Revision Squad', members: 76, focus: 'OS, DBMS, CN revision in groups' },
]

// Interview Simulator mock data
export const hrInterviewQuestions = [
  { id: 1, question: 'Tell me about yourself.', tip: 'Keep it under 2 minutes, focus on education, skills, and career goals.' },
  { id: 2, question: 'What are your strengths and weaknesses?', tip: 'Pick a real weakness and show how you are improving on it.' },
  { id: 3, question: 'Why should we hire you?', tip: 'Connect your skills directly to the job requirements.' },
  { id: 4, question: 'Where do you see yourself in 5 years?', tip: 'Show ambition aligned with the company growth path.' },
  { id: 5, question: 'Describe a challenge you faced and how you overcame it.', tip: 'Use the STAR method: Situation, Task, Action, Result.' },
]

export const hiringRounds = [
  { id: 1, name: 'Aptitude Round', icon: '📊', description: 'Quantitative, logical and verbal ability test.', duration: '45 mins' },
  { id: 2, name: 'Coding Round', icon: '💻', description: 'Solve 2-3 DSA problems within the time limit.', duration: '60 mins' },
  { id: 3, name: 'Technical Round', icon: '🛠️', description: 'In-depth discussion on CS fundamentals and projects.', duration: '30 mins' },
  { id: 4, name: 'HR Round', icon: '🤝', description: 'Behavioral and culture-fit questions.', duration: '20 mins' },
]

// Resume builder mock data
export const resumeTemplates = [
  { id: 1, name: 'Modern Minimal', preview: '🟦', bestFor: 'Software Engineering roles' },
  { id: 2, name: 'Professional Classic', preview: '⬜', bestFor: 'Core/Analyst roles' },
  { id: 3, name: 'Creative Edge', preview: '🟪', bestFor: 'Design & Product roles' },
  { id: 4, name: 'ATS Optimized', preview: '🟩', bestFor: 'Maximizing ATS pass rate' },
]

// Career roadmap mock data
export const careerRoadmaps = [
  {
    company: 'Google',
    role: 'SDE-1',
    steps: ['Master DSA (Trees, Graphs, DP)', 'Build 2-3 strong projects', 'System Design basics', 'Mock interviews with peers', 'Apply via referrals & campus drives'],
  },
  {
    company: 'Amazon',
    role: 'SDE-1',
    steps: ['Strong DSA fundamentals', 'Learn Leadership Principles', 'Practice behavioral questions (STAR)', 'OOP & Low-Level Design basics', 'Take Amazon-style mock tests'],
  },
  {
    company: 'TCS / Infosys / Wipro',
    role: 'Graduate Trainee',
    steps: ['Aptitude & Reasoning mastery', 'Verbal ability practice', 'Basic coding (any language)', 'Resume & GD preparation', 'Attempt company-specific mock tests'],
  },
]

export const studyTimetableTemplate = [
  { day: 'Monday', slots: ['Aptitude (1 hr)', 'DSA - Arrays (1.5 hr)', 'Core CS - OS (1 hr)'] },
  { day: 'Tuesday', slots: ['Verbal Ability (1 hr)', 'DSA - Linked List (1.5 hr)', 'Mock Test Review (1 hr)'] },
  { day: 'Wednesday', slots: ['Logical Reasoning (1 hr)', 'DSA - Stack/Queue (1.5 hr)', 'Core CS - DBMS (1 hr)'] },
  { day: 'Thursday', slots: ['Data Interpretation (1 hr)', 'DSA - Trees (1.5 hr)', 'HR Question Prep (1 hr)'] },
  { day: 'Friday', slots: ['Full Mock Test (2 hr)', 'AI Feedback Review (1 hr)'] },
  { day: 'Saturday', slots: ['DSA - Graphs/DP (2 hr)', 'Group Discussion Practice (1 hr)'] },
  { day: 'Sunday', slots: ['Revision Day', 'Mock Interview with Peer (1 hr)'] },
]

export const predictedQuestions = [
  { company: 'TCS', question: 'What is the difference between abstract class and interface?', frequency: 'High' },
  { company: 'Infosys', question: 'Explain normalization with an example.', frequency: 'High' },
  { company: 'Wipro', question: 'Write a program to reverse a string.', frequency: 'Medium' },
  { company: 'Amazon', question: 'Design a parking lot system (LLD).', frequency: 'Medium' },
  { company: 'Google', question: 'Find the shortest path in a weighted graph.', frequency: 'High' },
]
