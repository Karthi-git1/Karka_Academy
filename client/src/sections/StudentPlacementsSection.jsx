import React, { useState, useEffect } from 'react';
import { MapPin, CheckCircle2, Building2, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';

import arunImg from '../assets/images/placements/student_arun.jpg';
import priyaImg from '../assets/images/placements/student_priya.jpg';
import santhoshImg from '../assets/images/placements/student_santhosh.jpg';
import vijayImg from '../assets/images/placements/student_vijay.jpg';

export const PLACED_STUDENTS = [
  {
    id: 'arun-kumar',
    name: 'Arun Kumar',
    photo: arunImg,
    role: 'Software Engineer',
    company: 'TCS',
    companyColor: '#004F9F',
    companyBg: 'rgba(0, 79, 159, 0.08)',
    location: 'Siruseri SIPCOT, Chennai',
    package: '₹7.2 LPA',
    track: 'Full Stack Development',
    background: 'Non-IT (B.Com) Graduate',
    quote: 'From zero programming to clearing TCS technical rounds in 6 months. Pay After Placement gave me complete financial freedom to focus on coding.',
    linkedin: 'https://linkedin.com',
    verifiedInstagram: true,
  },
  {
    id: 'priya-dharshini',
    name: 'Priya Dharshini',
    photo: priyaImg,
    role: 'UI/UX Product Designer',
    company: 'Novac',
    companyColor: '#E63946',
    companyBg: 'rgba(230, 57, 70, 0.08)',
    location: 'Chennai & Nagercoil Hub',
    package: '₹6.8 LPA',
    track: 'UI/UX Design',
    background: 'Fresher from Tier-3 College',
    quote: 'The design internship at Karka gave me real client projects for my portfolio. In my interview at Novac, they spent 20 minutes reviewing my live prototypes!',
    linkedin: 'https://linkedin.com',
    verifiedInstagram: true,
  },
  {
    id: 'vijay-anand',
    name: 'Vijay Anand',
    photo: vijayImg,
    role: 'Cloud & DevOps Associate',
    company: 'Amazon',
    companyColor: '#FF9900',
    companyBg: 'rgba(255, 153, 0, 0.08)',
    location: 'Bangalore Tech Campus',
    package: '₹12.5 LPA',
    track: 'Cloud & DevOps Engineering',
    background: 'Career Transition from Non-Tech',
    quote: 'The AWS and Kubernetes modules are 100% hands-on. The live mock interviews prepared me specifically for Amazon leadership principles.',
    linkedin: 'https://linkedin.com',
    verifiedInstagram: true,
  },
  {
    id: 'santhosh-raj',
    name: 'Santhosh Raj',
    photo: santhoshImg,
    role: 'Data Analyst & AI Associate',
    company: 'HCL',
    companyColor: '#0085FF',
    companyBg: 'rgba(0, 133, 255, 0.08)',
    location: 'Chennai OMR Campus',
    package: '₹7.8 LPA',
    track: 'Data Science Foundations',
    background: 'BCA Graduate (2024 Batch)',
    quote: 'Karka taught me how to automate dashboards and integrate LLM agents with Python. HCL hired me within 2 weeks of our batch recruitment drive.',
    linkedin: 'https://linkedin.com',
    verifiedInstagram: true,
  },
  {
    id: 'deepak-raghavan',
    name: 'Deepak Raghavan',
    photo: arunImg,
    role: 'Frontend Engineer',
    company: 'Zoho',
    companyColor: '#1C9F48',
    companyBg: 'rgba(28, 159, 72, 0.08)',
    location: 'Tenkasi / Chennai Hub',
    package: '₹8.4 LPA',
    track: 'React & Frontend Engineering',
    background: 'Self-Taught Beginner',
    quote: 'Zero corporate fluff. We spent everyday coding real web apps with Git PR reviews just like actual engineering teams at Zoho.',
    linkedin: 'https://linkedin.com',
    verifiedInstagram: true,
  },
  {
    id: 'kavitha-selvaraj',
    name: 'Kavitha Selvaraj',
    photo: priyaImg,
    role: 'Digital Tech Lead',
    company: 'Matrimony.com',
    companyColor: '#9333EA',
    companyBg: 'rgba(147, 51, 234, 0.08)',
    location: 'Chennai Head Office',
    package: '₹6.5 LPA',
    track: 'Digital Growth & MarTech',
    background: '2-Year Career Gap Break',
    quote: 'Restarting my career was intimidating, but Karka gave me mentorship, confidence, and direct access to company interview schedules.',
    linkedin: 'https://linkedin.com',
    verifiedInstagram: true,
  },
];

export default function StudentPlacementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % PLACED_STUDENTS.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + PLACED_STUDENTS.length) % PLACED_STUDENTS.length);
  };

  // Keyboard navigation when focused/interacting
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStudent = PLACED_STUDENTS[currentIndex];

  return (
    <section className="section bg-light student-placements-section" id="student-placements" aria-labelledby="placements-title">
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="section-label">✦ Verified Career Transformations</span>
          <h2 id="placements-title" className="section-title">
            Student Placements
          </h2>
          <p className="section-subtitle">
            Real graduates who started with zero coding experience, built live projects during their cohorts, and successfully landed full-time tech roles with Pay After Placement.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Pile of Cards Info Pill */}
        <div className="pile-header-bar">
          <div className="pile-counter-chip">
            <Layers size={15} className="pile-chip-icon" />
            <span>Card <strong>{currentIndex + 1}</strong> of <strong>{PLACED_STUDENTS.length}</strong></span>
            <span className="pile-divider">•</span>
            <span className="pile-company-hint">{currentStudent.company} ({currentStudent.package})</span>
          </div>
        </div>

        {/* 3D Stacked Pile of Cards Container */}
        <div className="cards-pile-stage" aria-label="Stacked Pile of Placed Students Cards">
          <div className="cards-pile-deck">
            {PLACED_STUDENTS.map((student, i) => {
              // Calculate relative depth index in the circular pile (0 is top)
              const relIndex = (i - currentIndex + PLACED_STUDENTS.length) % PLACED_STUDENTS.length;

              // Styles for visual pile of cards stacking
              let transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
              let zIndex = 10;
              let opacity = 1;
              let pointerEvents = 'auto';
              let shadow = '0 25px 65px -12px rgba(90, 24, 154, 0.22), 0 0 30px rgba(185, 245, 0, 0.12)';

              if (relIndex === 0) {
                // Front active card
                transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
                zIndex = 10;
                opacity = 1;
                pointerEvents = 'auto';
                shadow = '0 25px 65px -12px rgba(90, 24, 154, 0.22), 0 0 30px rgba(185, 245, 0, 0.12)';
              } else if (relIndex === 1) {
                // 2nd card peeking to the right
                transform = 'translate3d(12px, 16px, -30px) scale(0.96) rotate(2.4deg)';
                zIndex = 9;
                opacity = 0.94;
                pointerEvents = 'auto';
                shadow = '0 18px 40px -10px rgba(43, 0, 79, 0.14)';
              } else if (relIndex === 2) {
                // 3rd card peeking to the left
                transform = 'translate3d(-12px, 32px, -60px) scale(0.92) rotate(-2.6deg)';
                zIndex = 8;
                opacity = 0.82;
                pointerEvents = 'auto';
                shadow = '0 12px 30px -10px rgba(43, 0, 79, 0.12)';
              } else if (relIndex === 3) {
                // 4th card peeking behind
                transform = 'translate3d(6px, 46px, -90px) scale(0.88) rotate(1.2deg)';
                zIndex = 7;
                opacity = 0.6;
                pointerEvents = 'none';
                shadow = '0 8px 24px -10px rgba(43, 0, 79, 0.08)';
              } else if (relIndex === 4) {
                // 5th card deep in pile
                transform = 'translate3d(-6px, 58px, -120px) scale(0.84) rotate(-1.2deg)';
                zIndex = 6;
                opacity = 0.35;
                pointerEvents = 'none';
                shadow = 'none';
              } else {
                // 6th card hidden at bottom of deck
                transform = 'translate3d(0, 68px, -150px) scale(0.8) rotate(0deg)';
                zIndex = 5;
                opacity = 0;
                pointerEvents = 'none';
                shadow = 'none';
              }

              return (
                <div
                  key={student.id}
                  className={`student-pile-card glass-card ${relIndex === 0 ? 'card-active-front' : 'card-in-pile'}`}
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    pointerEvents,
                    boxShadow: shadow,
                  }}
                  onClick={() => {
                    if (relIndex === 0) {
                      nextCard();
                    } else {
                      // Click any peeking card to bring to front
                      setCurrentIndex(i);
                    }
                  }}
                >
                  {/* LEFT SIDE: Circular Frame with Student Picture & LinkedIn-Style Name Inside */}
                  <div className="student-circle-col">
                    <div className="student-circle-frame">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="student-circle-img"
                        loading="lazy"
                      />
                      {/* LinkedIn Name Badge Inside Circle */}
                      <div className="student-circle-name-overlay">
                        <svg className="linkedin-tiny-icon" viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span className="student-circle-name-text">{student.name}</span>
                      </div>
                    </div>

                    {/* Hired Status Pill */}
                    <span className="student-hired-pill">
                      <CheckCircle2 size={12} strokeWidth={3} /> HIRED
                    </span>
                  </div>

                  {/* RIGHT SIDE: Company & Where They Got Placed Information */}
                  <div className="student-placement-info-col">
                    {/* Header Row: Company Badge & Package */}
                    <div className="placement-header-row">
                      <div
                        className="placement-company-badge"
                        style={{ background: student.companyBg, borderColor: student.companyColor }}
                      >
                        <Building2 size={15} style={{ color: student.companyColor }} />
                        <span className="company-badge-name" style={{ color: student.companyColor }}>
                          {student.company}
                        </span>
                      </div>
                      <span className="placement-package-tag">{student.package}</span>
                    </div>

                    {/* Placed Designation */}
                    <h3 className="placement-role-title">{student.role}</h3>

                    {/* Where Placed Information */}
                    <div className="placement-location-row">
                      <MapPin size={14} className="placement-loc-icon" />
                      <span className="placement-loc-text">
                        Placed at: <strong>{student.company}</strong> ({student.location})
                      </span>
                    </div>

                    {/* Prior Background Tag */}
                    <div className="placement-background-tag">
                      <span className="bg-label">Background:</span> {student.background}
                    </div>

                    {/* Student Quote / Review */}
                    <p className="placement-quote-text">
                      "{student.quote}"
                    </p>

                    {/* Bottom Verification */}
                    <div className="placement-card-footer">
                      <span className="verified-instagram-badge">
                        <span className="insta-dot"></span> Verified Career Placement
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pile Navigation Controls */}
        <div className="pile-controls-wrap">
          <button
            className="pile-nav-btn prev-btn"
            onClick={prevCard}
            aria-label="Previous student card"
            title="Previous card"
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          {/* 6 Interactive Indicator Dots */}
          <div className="pile-dots-row">
            {PLACED_STUDENTS.map((s, idx) => (
              <button
                key={s.id}
                className={`pile-dot-btn ${idx === currentIndex ? 'active-dot' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to student ${s.name}`}
              >
                <span className="dot-inner" />
              </button>
            ))}
          </div>

          <button
            className="pile-nav-btn next-btn"
            onClick={nextCard}
            aria-label="Next student card"
          >
            <span>Next Card</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .student-placements-section {
          position: relative;
          overflow: hidden;
          padding-bottom: 4rem;
        }

        .pile-header-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding: 0 0.5rem;
        }

        .pile-counter-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          border: 1.5px solid rgba(90, 24, 154, 0.18);
          padding: 0.45rem 1rem;
          border-radius: 999px;
          font-size: 0.85rem;
          color: #2B004F;
          box-shadow: 0 4px 12px rgba(90, 24, 154, 0.06);
        }

        .pile-chip-icon {
          color: #5A189A;
        }

        .pile-divider {
          color: rgba(90, 24, 154, 0.3);
        }

        .pile-company-hint {
          font-weight: 800;
          color: #5A189A;
        }

        .pile-tap-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #6b7280;
        }

        /* 3D Stack Stage */
        .cards-pile-stage {
          position: relative;
          width: 100%;
          min-height: 380px;
          perspective: 1200px;
          display: flex;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .cards-pile-deck {
          position: relative;
          width: 100%;
          max-width: 820px;
          height: 100%;
          min-height: 340px;
        }

        /* Individual Card inside the Pile */
        .student-pile-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--clay-surface-marshmallow);
          border: 2px solid rgba(255, 255, 255, 0.95);
          border-radius: var(--radius-lg, 30px);
          padding: 2rem 2.25rem;
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 1.75rem;
          align-items: center;
          transform-origin: center bottom;
          transition: 
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.45s ease,
            box-shadow 0.45s ease,
            border-color 0.3s ease;
          cursor: pointer;
          user-select: none;
          box-shadow: var(--clay-card-shadow);
        }

        .student-pile-card:hover {
          border-color: rgba(90, 24, 154, 0.4);
        }

        .student-pile-card.card-active-front:hover {
          transform: translateY(-4px) scale(1.01) !important;
        }

        .student-pile-card.card-in-pile:hover {
          opacity: 1 !important;
          border-color: #B9F500 !important;
        }

        /* Pile Navigation Controls */
        .pile-controls-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .pile-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.35rem;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 800;
          border: 1.5px solid rgba(90, 24, 154, 0.2);
          background: #ffffff;
          color: #2B004F;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(43, 0, 79, 0.06);
        }

        .pile-nav-btn:hover {
          border-color: #5A189A;
          color: #5A189A;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(90, 24, 154, 0.14);
        }

        .pile-nav-btn.next-btn {
          background: var(--color-lime, #B9F500);
          color: #121212;
          border-color: #a3e635;
          box-shadow: 0 4px 16px rgba(185, 245, 0, 0.4);
        }

        .pile-nav-btn.next-btn:hover {
          background: #c3ff0a;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 24px rgba(185, 245, 0, 0.55);
        }

        /* 6 Dot indicators */
        .pile-dots-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pile-dot-btn {
          background: transparent;
          border: none;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(90, 24, 154, 0.22);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pile-dot-btn:hover .dot-inner {
          background: rgba(90, 24, 154, 0.5);
          transform: scale(1.2);
        }

        .pile-dot-btn.active-dot .dot-inner {
          width: 28px;
          height: 10px;
          border-radius: 999px;
          background: #5A189A;
          box-shadow: 0 0 10px rgba(90, 24, 154, 0.4);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .pile-header-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .cards-pile-stage {
            min-height: 440px;
            margin-bottom: 2.5rem;
          }

          .cards-pile-deck {
            min-height: 400px;
          }

          .student-pile-card {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 1.5rem;
            gap: 1rem;
          }

          .student-circle-col {
            margin: 0 auto;
          }

          .placement-header-row {
            justify-content: center;
          }

          .placement-location-row {
            justify-content: center;
          }

          .placement-background-tag {
            align-self: center;
          }

          .placement-card-footer {
            flex-direction: column;
            gap: 0.5rem;
          }

          .pile-controls-wrap {
            flex-wrap: wrap;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .cards-pile-stage {
            min-height: 480px;
          }

          .cards-pile-deck {
            min-height: 450px;
          }

          .student-pile-card {
            padding: 1.25rem 1rem;
          }

          .pile-nav-btn {
            padding: 0.55rem 1rem;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
