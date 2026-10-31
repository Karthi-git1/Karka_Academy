import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    title: 'What excites you the most?',
    options: [
      { text: 'Building smart web apps, automation & AI models', track: 'AI & Tech', rec: 'Generative AI & Full Stack' },
      { text: 'Designing beautiful UI/UX, graphics & interactive screens', track: 'Design', rec: 'UI/UX & Web Design' },
      { text: 'Editing cinematic videos, 3D graphics & animations', track: 'Digital Media', rec: 'Video Editing & Multimedia' },
      { text: 'Growing online brands, SEO, writing & campaign strategy', track: 'Content & Marketing', rec: 'Digital Marketing & Content' }
    ]
  },
  {
    id: 2,
    title: 'What is your current background?',
    options: [
      { text: 'Computer Science / Engineering student or graduate', boost: 'Tech' },
      { text: 'Non-CS degree (Arts, Science, Commerce, Diploma)', boost: 'Any' },
      { text: 'Working in non-IT or support and want a tech salary jump', boost: 'CareerSwitch' },
      { text: 'Creative thinker looking for visual digital careers', boost: 'Creative' }
    ]
  },
  {
    id: 3,
    title: 'What is your dream job goal?',
    options: [
      { text: 'Software Developer or AI Engineer at a top company', goal: 'Dev' },
      { text: 'Product Designer / UI UX Specialist in high demand', goal: 'Design' },
      { text: 'Digital Growth Specialist / Social Media Strategist', goal: 'Marketing' },
      { text: 'Cloud, Data Engineer or Business Analyst', goal: 'Data' }
    ]
  }
];

export default function TrackQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (idx) => {
    const nextAnswers = { ...answers, [step]: idx };
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate Recommendation based on answers[0]
      const firstPick = questions[0].options[nextAnswers[0]];
      setResult(firstPick);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section className="section" id="quiz" aria-labelledby="quiz-heading">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card quiz-card" style={{ padding: '3rem 2rem' }}>
          <div className="text-center mb-3">
            <span className="section-label">⚡ 60-Second Career Compass</span>
            <h2 id="quiz-heading" className="section-title" style={{ fontSize: '2rem' }}>Not Sure Which Track to Pick?</h2>
            <p className="section-subtitle">Answer 3 quick questions to discover your personalized career roadmap.</p>
          </div>

          {!result ? (
            <div>
              {/* Progress dots */}
              <div
                role="progressbar"
                aria-valuenow={step + 1}
                aria-valuemin={1}
                aria-valuemax={questions.length}
                aria-label={`Quiz question ${step + 1} of ${questions.length}`}
                style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2rem' }}
              >
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    style={{
                      width: i === step ? '28px' : '10px',
                      height: '10px',
                      borderRadius: 'var(--radius-full)',
                      background: i === step ? 'var(--color-primary)' : 'var(--color-border)',
                      transition: 'var(--transition)'
                    }}
                  />
                ))}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
                Question {step + 1} of {questions.length}: {questions[step].title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="quiz-option"
                  >
                    <span style={{ color: 'var(--color-primary-light)', marginRight: '0.6rem' }}>●</span>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <span className="badge badge-green" style={{ marginBottom: '1rem' }}>Recommended Track for You</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {result.track}
              </h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Best match courses: <strong style={{ color: 'var(--color-primary-light)' }}>{result.rec}</strong>
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/enroll" className="btn btn-primary btn-lg">
                  Apply for this Track ✦
                </Link>
                <button onClick={reset} className="btn btn-secondary btn-lg">
                  Retake Quiz ↺
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
