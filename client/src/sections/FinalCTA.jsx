import React from 'react';
import { Link } from 'react-router-dom';
import mascotCutout from '../assets/images/mascot_cutout.png';

export default function FinalCTA() {
  return (
    <section className="section final-cta-section" style={{ position: 'relative', overflow: 'hidden' }} aria-label="Final call to action">
      <div className="container">
        <div className="card cta-hero-card">
          {/* Ambient Background Gradient Meshes */}
          <div className="cta-ambient-mesh" aria-hidden="true" />

          {/* Left Content Column */}
          <div className="cta-content-col">
            <div className="cta-badge-row">
              <span className="badge badge-green">Limited Cohort Seats</span>
              <span className="cta-live-batch-pill">
                <span className="cta-pulse-dot" />
                <span>Next Cohort Enrolling Now</span>
              </span>
            </div>

            <h2 className="cta-headline">
              Ready to Future-Proof Your <span className="cta-gradient-accent">Career?</span>
            </h2>

            <p className="cta-description">
              Join the AI revolution with Karka Academy today. Master real tech stacks, deploy production apps, and launch your dream career with Pay After Placement.
            </p>

            <div className="cta-perks-grid">
              <div className="cta-perk-badge">
                <span className="cta-perk-check">✓</span>
                <span><strong>₹0 Upfront</strong> Tuition Fees</span>
              </div>
              <div className="cta-perk-badge">
                <span className="cta-perk-check">✓</span>
                <span><strong>1:1 Industry</strong> Mentorship</span>
              </div>
              <div className="cta-perk-badge">
                <span className="cta-perk-check">✓</span>
                <span><strong>Real Production</strong> Client Proof</span>
              </div>
            </div>

            <div className="cta-actions-row">
              <Link to="/enroll" className="btn btn-accent btn-lg cta-primary-btn">
                Apply for Admission ✦
              </Link>
              <Link to="/courses" className="btn btn-outline btn-lg cta-secondary-btn">
                Explore All Courses →
              </Link>
            </div>
          </div>

          {/* Right Column: Avatar Correctly Fit & Vibrant */}
          <div className="cta-mascot-showcase" aria-hidden="true">
            {/* Vibrant Multi-layer Glow Behind Mascot */}
            <div className="cta-mascot-glow-core" />
            <div className="cta-mascot-glow-lime" />

            {/* Floating Trust Pills */}
            <div className="cta-mascot-chip chip-top">
              <span className="chip-sparkle">🤖</span>
              <span>AI-First Mentorship</span>
            </div>
            <div className="cta-mascot-chip chip-bottom">
              <span className="chip-sparkle">🚀</span>
              <span>100% Placement Focus</span>
            </div>

            {/* High-Res Transparent Mascot Character (Full right side alignment) */}
            <div className="cta-mascot-img-box">
              <img
                src={mascotCutout}
                alt="Karka AI Mascot"
                className="cta-mascot-vibrant-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          padding: 5rem 0;
        }

        .cta-hero-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-xl, 36px);
          background: var(--clay-surface-marshmallow);
          border: 2.5px solid rgba(255, 255, 255, 0.95);
          box-shadow: var(--clay-card-shadow);
          display: flex;
          align-items: stretch;
          min-height: 490px;
          padding: 0;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.35s ease;
        }

        .cta-hero-card:hover {
          border-color: rgba(139, 92, 246, 0.45);
          box-shadow: 
            0 30px 75px -15px rgba(124, 58, 237, 0.28),
            0 0 55px rgba(185, 245, 0, 0.2);
        }

        .cta-ambient-mesh {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(185, 245, 0, 0.12) 0%, transparent 45%);
          pointer-events: none;
          z-index: 1;
        }

        /* Left Content Column */
        .cta-content-col {
          flex: 1 1 56%;
          max-width: 630px;
          padding: 4.25rem 3.5rem;
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cta-badge-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .cta-live-batch-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(139, 92, 246, 0.1);
          color: #6d28d9;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(139, 92, 246, 0.25);
          letter-spacing: 0.02em;
        }

        .cta-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: ctaPulse 1.8s infinite;
        }

        @keyframes ctaPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .cta-headline {
          font-size: clamp(2.1rem, 3.8vw, 3.1rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1.15rem;
          color: #0f172a;
          letter-spacing: -0.025em;
        }

        .cta-gradient-accent {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 540px;
        }

        .cta-perks-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem 1.25rem;
          margin-bottom: 2.25rem;
        }

        .cta-perk-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.92rem;
          color: #334155;
          font-weight: 500;
        }

        .cta-perk-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: #B9F500;
          color: #121212;
          font-size: 0.72rem;
          font-weight: 900;
          box-shadow: 0 2px 6px rgba(185, 245, 0, 0.4);
        }

        .cta-actions-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .cta-primary-btn {
          background: #B9F500 !important;
          color: #0d0d11 !important;
          font-weight: 800 !important;
          padding: 0.9rem 1.85rem !important;
          border-radius: 14px !important;
          border: 1px solid #a3e635 !important;
          box-shadow: 0 8px 24px rgba(185, 245, 0, 0.45) !important;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .cta-primary-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(185, 245, 0, 0.6) !important;
        }

        .cta-secondary-btn {
          background: linear-gradient(145deg, #7B2CBF 0%, #5A189A 100%) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
          padding: 0.9rem 1.85rem !important;
          border-radius: 14px !important;
          border: 2px solid rgba(255, 255, 255, 0.45) !important;
          box-shadow: 0 8px 24px rgba(90, 24, 154, 0.35), inset 2px 2px 4px rgba(255, 255, 255, 0.5) !important;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .cta-secondary-btn:hover {
          background: linear-gradient(145deg, #8B38D4 0%, #681BA8 100%) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 30px rgba(90, 24, 154, 0.5) !important;
          color: #ffffff !important;
        }

        /* Right Column: Avatar Fit Fully & Vibrant */
        .cta-mascot-showcase {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 44%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .cta-mascot-glow-core {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.38) 0%, rgba(124, 58, 237, 0.18) 45%, transparent 70%);
          bottom: -20px;
          right: 20px;
          filter: blur(40px);
          z-index: 1;
        }

        .cta-mascot-glow-lime {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(185, 245, 0, 0.32) 0%, rgba(163, 230, 53, 0.12) 50%, transparent 70%);
          top: 20px;
          right: 60px;
          filter: blur(45px);
          z-index: 1;
        }

        .cta-mascot-img-box {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          z-index: 2;
        }

        .cta-mascot-vibrant-img {
          width: auto;
          height: 106%;
          max-height: 520px;
          object-fit: contain;
          object-position: bottom right;
          /* Vibrant 3D glow & saturation punch */
          filter: 
            drop-shadow(0 20px 45px rgba(124, 58, 237, 0.4))
            drop-shadow(0 0 30px rgba(185, 245, 0, 0.35))
            saturate(1.22)
            contrast(1.08)
            brightness(1.03);
          transform: translateY(2px) translateX(12px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .cta-hero-card:hover .cta-mascot-vibrant-img {
          transform: translateY(-4px) translateX(12px) scale(1.03);
          filter: 
            drop-shadow(0 25px 55px rgba(124, 58, 237, 0.55))
            drop-shadow(0 0 45px rgba(185, 245, 0, 0.5))
            saturate(1.28)
            contrast(1.1)
            brightness(1.05);
        }

        /* Floating Trust Chips */
        .cta-mascot-chip {
          position: absolute;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 25px -5px rgba(124, 58, 237, 0.22), 0 0 1px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          font-size: 0.82rem;
          font-weight: 800;
          color: #1e1b4b;
          white-space: nowrap;
          animation: chipFloat 4s ease-in-out infinite;
        }

        .cta-mascot-chip.chip-top {
          top: 18%;
          left: -15px;
          animation-delay: 0s;
        }

        .cta-mascot-chip.chip-bottom {
          bottom: 22%;
          left: 10px;
          animation-delay: 2s;
        }

        .chip-sparkle {
          font-size: 1rem;
        }

        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .cta-content-col {
            padding: 3.5rem 2.5rem;
            max-width: 540px;
          }
          .cta-mascot-showcase {
            width: 42%;
          }
          .cta-mascot-chip.chip-top {
            left: -40px;
          }
        }

        @media (max-width: 900px) {
          .cta-hero-card {
            flex-direction: column;
            min-height: auto;
          }
          .cta-content-col {
            max-width: 100%;
            padding: 3rem 2rem 1.5rem;
          }
          .cta-mascot-showcase {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            width: 100%;
            height: 380px;
            justify-content: center;
            align-items: flex-end;
          }
          .cta-mascot-img-box {
            justify-content: center;
          }
          .cta-mascot-vibrant-img {
            height: 100%;
            max-height: 380px;
            transform: translateY(0);
            object-position: bottom center;
          }
          .cta-mascot-chip.chip-top {
            top: 10%;
            left: 10%;
          }
          .cta-mascot-chip.chip-bottom {
            bottom: 15%;
            right: 10%;
            left: auto;
          }
        }

        @media (max-width: 480px) {
          .cta-content-col {
            padding: 2.25rem 1.25rem 1rem;
          }
          .cta-headline {
            font-size: 1.85rem;
          }
          .cta-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .cta-primary-btn, .cta-secondary-btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .cta-mascot-showcase {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
