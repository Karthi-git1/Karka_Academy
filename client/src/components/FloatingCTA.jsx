import React from 'react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <>
      {/* Floating Free Career Call Button - Neat Round Shape with Glow & Mild Sparkles */}
      <Link
        to="/contact"
        className="floating-orb-btn"
        aria-label="Book a free career call with mentors"
        title="Book a Free Career Call"
      >
        {/* Animated glowing ripple rings */}
        <span className="orb-ripple ring-1" aria-hidden="true" />
        <span className="orb-ripple ring-2" aria-hidden="true" />


        {/* Center Content: Phone icon + Free Call text */}
        <div className="orb-inner">
          <svg
            className="orb-phone-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 0 1 9 4.31c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-.99-1.02z" />
          </svg>
          <span className="orb-label">Free Call</span>
        </div>

        {/* Tooltip on hover */}
        <span className="orb-tooltip">Book Free Career Call ↗</span>
      </Link>

      {/* Sticky Mobile CTA Bar */}
      <div className="sticky-cta">
        <Link to="/contact" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}>
          Free Call
        </Link>
        <Link to="/enroll" className="btn btn-primary" style={{ flex: 1.5, justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}>
          Apply Free ✦
        </Link>
      </div>
    </>
  );
}
