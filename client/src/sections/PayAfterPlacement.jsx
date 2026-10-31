import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Check, X } from 'lucide-react';

export default function PayAfterPlacement() {

  return (
    <section className="section" id="pay-after-placement" aria-labelledby="pap-heading">
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-label">✦ Financial Peace of Mind</span>
          <h2 id="pap-heading" className="section-title">Zero Upfront Risk. Pay After Placement.</h2>
          <p className="section-subtitle">
            We invest in you first. Learn from elite mentors, build industry projects, and only pay tuition fees once you secure a tech role with a guaranteed baseline salary.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Interactive Comparison: Traditional vs Karka with Thunder Break Divider */}
        <div className="pap-comparison">
          <div className="pap-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🏛️</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-muted)' }}>Traditional Coaching Institutes</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-muted)', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-wrong"><X size={15} strokeWidth={3.8} /></span>
                <span>Upfront fee of ₹50,000 to ₹1,50,000 charged before day 1</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-wrong"><X size={15} strokeWidth={3.8} /></span>
                <span>Outdated syllabus without hands-on Generative AI</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-wrong"><X size={15} strokeWidth={3.8} /></span>
                <span>Theoretical classes with slide decks and generic dummy assignments</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-wrong"><X size={15} strokeWidth={3.8} /></span>
                <span>Placement assistance often ends with forwarded email links</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-wrong"><X size={15} strokeWidth={3.8} /></span>
                <span>Zero accountability if you do not get a job</span>
              </li>
            </ul>
          </div>

          {/* Electric Thunder Break in Between Traditional and Karka */}
          <div className="pap-thunder-break-wrap">
            <div className="thunder-vertical-line" aria-hidden="true"></div>
            <div className="thunder-bolt-hub" aria-hidden="true">
              <Zap size={26} className="thunder-zap-svg" fill="var(--color-lime, #B9F500)" />
            </div>
            <div className="thunder-vertical-line" aria-hidden="true"></div>
          </div>

          <div className="pap-col highlight">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)' }}>Karka AI Academy</h3>
              </div>
              <span className="badge badge-green">Zero Upfront</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text)', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-check"><Check size={15} strokeWidth={3.8} /></span>
                <span><strong>₹0 tuition fee</strong> until you get hired with guaranteed minimum salary</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-check"><Check size={15} strokeWidth={3.8} /></span>
                <span>100% GenAI-infused curriculum (LLMs, RAG pipelines, Prompting)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-check"><Check size={15} strokeWidth={3.8} /></span>
                <span>Real production apps deployed live to your personal GitHub portfolio</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-check"><Check size={15} strokeWidth={3.8} /></span>
                <span>Dedicated placement manager, mock technical interviews &amp; direct partner drives</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span className="pap-status-icon pap-icon-check"><Check size={15} strokeWidth={3.8} /></span>
                <span>Mutual skin in the game: we succeed only when you succeed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Step Process with Glowing Diamond Badges & Connected Dotted Line */}
        <div className="diamond-timeline-section">
          <div className="diamond-connecting-dotted-line" aria-hidden="true"></div>
          <div className="diamond-steps-grid">
            <div className="diamond-step-card">
              <div className="diamond-glow-wrapper">
                <div className="diamond-shape">
                  <span className="diamond-inner-number">1</span>
                </div>
              </div>
              <span className="step-phase-pill">PHASE 01</span>
              <h4 className="step-title">Learn &amp; Build</h4>
              <p className="step-desc">
                Intensive mentor-guided cohorts focused on shipping real-world apps with modern GenAI and full-stack stacks.
              </p>
            </div>

            <div className="diamond-step-card">
              <div className="diamond-glow-wrapper">
                <div className="diamond-shape">
                  <span className="diamond-inner-number">2</span>
                </div>
              </div>
              <span className="step-phase-pill">PHASE 02</span>
              <h4 className="step-title">Get Hired</h4>
              <p className="step-desc">
                Direct campus and partner recruitment drives across Amazon, TCS, HCL, Novac, and high-growth tech startups.
              </p>
            </div>

            <div className="diamond-step-card">
              <div className="diamond-glow-wrapper">
                <div className="diamond-shape">
                  <span className="diamond-inner-number">3</span>
                </div>
              </div>
              <span className="step-phase-pill highlight-pill">PHASE 03</span>
              <h4 className="step-title">Pay Transparently</h4>
              <p className="step-desc">
                Pay only through comfortable monthly installments after your very first salary hits your bank account.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/enroll" className="btn btn-primary btn-lg glow-btn">
            Apply with Pay After Placement ✦
          </Link>
        </div>
      </div>
    </section>
  );
}
