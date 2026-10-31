import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const audiences = [
  {
    title: 'College Students & Final Years',
    badge: 'Campus to Career',
    icon: '🎓',
    themeClass: 'card-theme-lavender',
    badgeClass: 'badge-purple',
    btnClass: 'btn-primary',
    btnText: 'Explore Suitable Tracks →',
    desc: 'Skip generic textbook projects. Build high-impact GenAI web apps, gain portfolio proofs, and graduate with job offers in hand.',
    benefits: ['Flexible evening batches', 'Internship completion certificate', 'Final-year capstone support'],
    ctaTrack: 'Full Stack Development',
    ctaLink: '/courses?audience=college-students'
  },
  {
    title: 'Fresh Graduates',
    badge: 'Immediate Placement',
    icon: '⚡',
    themeClass: 'card-theme-cyan',
    badgeClass: 'badge-cyan',
    btnClass: 'btn-secondary',
    btnText: 'Explore Suitable Tracks →',
    desc: 'B.E, B.Tech, BCA, B.Sc or Non-Tech degree holders struggling with campus offers. Upskill directly in in-demand AI stacks.',
    benefits: ['Zero upfront fees (Pay After Placement)', 'Direct hiring partner interviews', 'Daily 1-on-1 mentor guidance'],
    ctaTrack: 'Generative AI',
    ctaLink: '/courses?audience=freshers'
  },
  {
    title: 'Career Switchers (Non-IT to IT)',
    badge: 'Smooth Transition',
    icon: '🔄',
    themeClass: 'card-theme-mint',
    badgeClass: 'badge-green',
    btnClass: 'btn-secondary',
    btnText: 'Explore Suitable Tracks →',
    desc: 'From mechanical, civil, commerce, BPO or sales into tech. We start from ground zero logic and build your tech confidence.',
    benefits: ['Beginner-friendly pedagogy', 'Portfolio building from week 2', 'Dedicated career mentor'],
    ctaTrack: 'UI/UX Design',
    ctaLink: '/courses?audience=career-switchers'
  },
  {
    title: 'Working Professionals',
    badge: 'Level-Up & Salary Leap',
    icon: '🚀',
    themeClass: 'card-theme-peach',
    badgeClass: 'badge-peach',
    btnClass: 'btn-primary',
    btnText: 'Explore Suitable Tracks →',
    desc: 'Stuck in low-paying IT or service roles? Upgrade into GenAI, Cloud & DevOps, or Full Stack for high-growth tech positions.',
    benefits: ['Weekend/Evening project sprints', 'Advanced GenAI & Cloud modules', 'Resume & salary negotiation coaching'],
    ctaTrack: 'Cloud & DevOps',
    ctaLink: '/courses?audience=working-professionals'
  }
];

export default function AudienceSection() {
  return (
    <section className="section" id="audience" aria-labelledby="audience-heading">
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-label">✦ Who Is This For</span>
          <h2 id="audience-heading" className="section-title">Designed For Every Stage of Ambition</h2>
          <p className="section-subtitle">
            Whether you are writing your first line of code or switching into tech, Karka gives you the exact blueprint.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        <div className="grid-2">
          {audiences.map((aud, index) => (
            <motion.div
              key={aud.title}
              className={`audience-card card ${aud.themeClass}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="audience-emoji-icon">{aud.icon}</span>
                  <span className={`badge ${aud.badgeClass}`}>{aud.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.65rem', color: 'var(--color-primary-dark)' }}>
                  {aud.title}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '1.4rem' }}>
                  {aud.desc}
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-primary-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                    Key Advantages
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0 }}>
                    {aud.benefits.map((b, i) => (
                      <li key={i} className="audience-benefit-item">
                        <span className="audience-check-circle">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to={aud.ctaLink}
                className={`btn ${aud.btnClass} btn-lg`}
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}
              >
                {aud.btnText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

