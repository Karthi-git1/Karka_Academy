import React, { useState } from 'react';
import { faqs } from '../data/testimonials';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [items, setItems] = useState(faqs);

  const toggle = (id) => {
    setItems(items.map(f => f.id === id ? { ...f, open: !f.open } : f));
  };

  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="text-center mb-4">
          <span className="section-label">✦ Clarifications</span>
          <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Still have questions? We've answered the most common ones below.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        <div style={{ marginBottom: '3rem' }}>
          {items.map(f => (
            <div key={f.id} className={'accordion-item' + (f.open ? ' open' : '')}>
              <button
                className="accordion-trigger"
                onClick={() => toggle(f.id)}
                aria-expanded={f.open}
                aria-controls={`faq-answer-${f.id}`}
              >
                <span>{f.question}</span>
                <span style={{ fontSize: '1.25rem', transform: f.open ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }} aria-hidden="true">
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${f.id}`}
                role="region"
                aria-label={f.question}
                className={'accordion-content' + (f.open ? ' open' : '')}
              >
                <p>{f.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-outline btn-lg">
            Talk to Our Team 💬
          </Link>
          <Link to="/enroll" className="btn btn-primary btn-lg">
            Apply Now for Free ✦
          </Link>
        </div>
      </div>
    </section>
  );
}
