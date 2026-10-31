# Karka AI Academy – Official Web Platform

> **"Learn with AI. Build Real Projects. Pay After You Get Hired."**

Welcome to the official web application for **Karka AI Academy**, located in Nagercoil, Tamil Nadu. Built with **React 19, Vite, Framer Motion, Vanilla CSS Design System**, and an **Express REST API**.

---

## 🚀 Key Features

- **Cinematic Hero**: Autoplaying background video showcase (`hero.mp4`), vibrant glowing Neon AI mascot, dynamic headline animations, and live interactive counters.
- **Where Graduates Work**: Continuous infinite-scrolling marquee featuring hiring partners (Amazon, TCS, HCL, Matrimony.com, Novac, Capecom, Flow, Sodisys).
- **Target Audience Section**: Tailored pathways for College Students, Fresh Graduates, Career Switchers, and Working Professionals.
- **18+ Career Programs**: Filterable by career track (AI & Tech, Design, Digital Media, Content & Marketing, Other Tech, Non Tech) and target audience, with detailed syllabus view.
- **Pay After Placement Interactive Explainer**: Side-by-side comparison matrix of Traditional Institutes vs. Karka AI Academy's zero-risk model.
- **60-Second "Find My Track" Quiz**: Interactive 3-question guided compass recommending optimal courses and driving direct admissions.
- **Student Success & Testimonials**: Real alumni reviews, ratings, and career trajectory stories.
- **FAQ Accordion**: Search-optimized, collapsible frequently asked questions with transparent placement guidance.
- **Career Consultation & Multi-Step Admissions**:
  - Direct 1-on-1 Free Career Call booking with phone validation.
  - 3-step admission application form with instant feedback.
- **Gen-Z Interactions**:
  - Smooth desktop cursor glow follower.
  - Sticky mobile navigation & Quick Call CTA buttons.
  - Floating career hotline trigger.
  - Seamless route transitions with scroll-to-top.

---

## 🛠️ Project Structure

\`\`\`
Karka_web/
├── client/                      # Vite + React Frontend
│   ├── src/
│   │   ├── assets/              # Logo, Mascot image, Video MP4
│   │   ├── components/          # Navbar, Footer, CourseCard, Marquee, CursorGlow, FloatingCTA
│   │   ├── sections/            # Hero, Audience, WhyKarka, Tracks, PayAfterPlacement, Quiz, FAQ, Contact, FinalCTA
│   │   ├── pages/               # Home, Courses, CourseDetail, Placements, Contact, Enroll, NotFound
│   │   ├── data/                # courses.js, heroTimeline.js, testimonials.js
│   │   ├── lib/                 # api.js (graceful fallback client)
│   │   ├── index.css            # Custom design tokens & animations
│   │   └── App.jsx
│   └── package.json
├── server/                      # Node.js + Express REST API
│   ├── index.js                 # API endpoints & JSON persistence
│   ├── submissions.json         # Local form submissions storage
│   └── package.json
└── resource for making/         # Raw assets provided by Karka Academy
\`\`\`

---

## 💻 Running Locally

### 1. Start the Express Backend
\`\`\`bash
cd server
npm install
npm run dev
\`\`\`
*Server runs at `http://localhost:5000`*

### 2. Start the Vite Frontend
\`\`\`bash
cd client
npm install
npm run dev
\`\`\`
*Client runs at `http://localhost:5173`*

---

## 📞 Academy HQ
- **Location**: Nagercoil, Tamil Nadu, India
- **Phone**: +91 94875 30243
- **Instagram**: [@karka.ai](https://instagram.com/karka.ai)
