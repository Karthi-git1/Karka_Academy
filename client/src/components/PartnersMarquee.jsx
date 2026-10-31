import React from 'react';
import { COMPANY_LOGOS_ROW1, COMPANY_LOGOS_ROW2 } from '../data/companyLogos';

export default function PartnersMarquee() {
  const row1 = [...COMPANY_LOGOS_ROW1, ...COMPANY_LOGOS_ROW1];
  const row2 = [...COMPANY_LOGOS_ROW2, ...COMPANY_LOGOS_ROW2];

  return (
    <section
      className="section company-marquee-section"
      style={{
        padding: '3.5rem 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'rgba(237, 232, 252, 0.45)',
        overflow: 'hidden',
      }}
      aria-label="Hiring Partners"
    >
      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <p
          style={{
            color: 'var(--color-primary-dark)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 800,
          }}
        >
          ✦ WHERE OUR KARKA GRADUATES WORK ✦
        </p>
        <p
          style={{
            color: 'var(--color-muted)',
            fontSize: '0.98rem',
            marginTop: '0.4rem',
            fontWeight: 600,
          }}
        >
          From classrooms in Nagercoil to top engineering and product teams across India
        </p>
      </div>

      {/* Marquee Wrapper with Edge Fade Gradient Mask */}
      <div className="marquee-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Row 1: Scrolling Left, pauses on hover */}
        <div className="marquee-track-left">
          {row1.map((item, idx) => (
            <div
              key={`row1-${item.name}-${idx}`}
              className="company-logo-card"
              title={`${item.name} hires from Karka Academy`}
              aria-label={item.name}
            >
              {item.svg}
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right (opposite direction), pauses on hover */}
        <div className="marquee-track-right">
          {row2.map((item, idx) => (
            <div
              key={`row2-${item.name}-${idx}`}
              className="company-logo-card"
              title={`${item.name} hires from Karka Academy`}
              aria-label={item.name}
            >
              {item.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
