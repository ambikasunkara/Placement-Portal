# Smart Placement Preparation Portal

A complete production-ready React (Vite) frontend for a SaaS-style placement preparation platform — combining learning modules, daily practice, mock tests, placement simulation, resume building, gamification, and community features.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 🔐 Authentication (Mock)

This project uses **mock localStorage-based authentication**:

- Visit `/signup` or `/login` and submit the form (any values work).
- A `token` is stored in `localStorage`.
- `/dashboard` is a protected route — without a token you'll be redirected to `/login`.
- "Start Learning" on the home page checks for the token: if present → `/dashboard`, else → `/login`.
- Logout (in the navbar) clears the token.

## 🗂️ Project Structure

```
src/
├── components/       # Navbar, Footer, Layout, ProtectedRoute
├── data/             # Hardcoded mock data (modules, practice, gamification, etc.)
├── pages/            # Home, Login, Signup, Dashboard, Course, MockTests,
│                      ResumeBuilder, Interview, Community, NotFound
├── styles/index.css  # Global pure CSS styling (responsive, SaaS design)
├── App.jsx           # Routing setup
└── main.jsx          # Entry point
```

## 🧭 Routes

| Route             | Description                          |
|-------------------|---------------------------------------|
| `/`               | Home page (hero, modules, features)   |
| `/login`          | Login page                            |
| `/signup`         | Signup page                           |
| `/dashboard`      | Analytics dashboard (protected)       |
| `/course/:module` | Course detail page per learning module |
| `/mock-tests`     | Daily practice, mock tests, AI feedback |
| `/resume-builder` | Resume builder, ATS checker, portfolio |
| `/interview`      | Placement simulation & HR interview simulator |
| `/community`      | Forums, peer interviews, mentors, study groups |

## 🧩 Features

- 5 Core Learning Modules with full structured topic data
- Daily Practice Engine with auto-scoring quiz
- Company-specific Mock Tests (TCS, Infosys, Wipro, Full-Length)
- AI Feedback Simulation (weak topics, suggestions, error explanations)
- Placement Simulation (hiring rounds + HR interview text/voice-UI simulator with confidence score)
- Resume Builder with ATS score checker and portfolio preview
- Analytics Dashboard (XP, level, streaks, readiness score, leaderboard, skill progress)
- Gamification (badges, leaderboard, daily challenges)
- Community (forum, peer mock interviews, mentor chat, study groups)
- AI Career Roadmap Generator, Auto Study Timetable, Interview Question Predictor

## 🎨 Tech Stack

- React 18 + Vite
- React Router DOM v6
- Pure CSS (fully responsive, mobile-first)
- LocalStorage-based mock authentication
