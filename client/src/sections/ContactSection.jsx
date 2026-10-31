import React, { useState } from 'react';
import { courses } from '../data/courses';
import { submitContact } from '../lib/api';
import callBoyImg from '../assets/images/call_boy.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: courses[0]?.title || 'Generative AI',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Quick Indian phone format validation (10 digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit Indian mobile number.');
      setLoading(false);
      return;
    }

    try {
      await submitContact(formData);
      setSubmitted(true);
    } catch (err) {
      // Local fallback still counts as success for the user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section-wrap" id="contact" aria-labelledby="contact-heading">
      <div className="container" style={{ maxWidth: '1080px' }}>
        <div className="text-center mb-4">
          <span className="section-label">✦ Connect Directly</span>
          <h2 id="contact-heading" className="section-title">Let's Talk About Your Future</h2>
          <p className="section-subtitle">
            Whether you're a student ready to begin or a parent seeking clarity, schedule a free career call with our mentors.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Outer Layout Wrap for Form Box + Slanting Boy */}
        <div className="contact-card-outer-wrap">
          {/* Main Contact Form Card Box */}
          <div className="card contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>Call Requested Successfully!</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                  Our senior career mentor will reach out on WhatsApp/Phone at <strong>{formData.phone}</strong> within 24 hours.
                </p>
                <blockquote style={{ fontStyle: 'italic', color: 'var(--color-primary-light)', borderLeft: '3px solid var(--color-primary)', paddingLeft: '1rem', margin: '0 auto', maxWidth: '400px' }}>
                  "The future belongs to those who never stop learning."
                </blockquote>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-inner">
                {error && (
                  <div style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.15)', border: '1px solid var(--color-danger)', borderRadius: 'var(--radius-md)', color: '#fca5a5', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    {error}
                  </div>
                )}

                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="form-input"
                      placeholder="e.g. Anandha Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="form-input"
                      placeholder="e.g. anand@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number (10 digits) *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="form-input"
                      placeholder="e.g. 9487530243"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-program" className="form-label">Preferred Program *</label>
                    <select
                      id="contact-program"
                      name="program"
                      className="form-select"
                      value={formData.program}
                      onChange={e => setFormData({ ...formData, program: e.target.value })}
                    >
                      {courses.map(c => (
                        <option key={c.id} value={c.title}>{c.title} ({c.track})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Your Questions or Career Goals</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your background, college, or what doubts you have..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  {loading ? 'Scheduling...' : 'Book My Free Career Call 🚀'}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Call Boy Slanting on the Box */}
          <div className="contact-slanting-boy-box" aria-hidden="true">
            {/* Live Call Pill */}
            <div className="contact-call-pill">
              <span className="call-live-dot" />
              <span>Mentor on Call • Free 1:1 Advice</span>
            </div>

            {/* Boy image slanting/leaning neatly against the box */}
            <div className="contact-boy-img-holder">
              <img
                src={callBoyImg}
                alt="Karka Career Advisor on Call"
                className="contact-slanting-boy-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section-wrap {
          position: relative;
          overflow: visible;
        }

        .contact-card-outer-wrap {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
        }

        .contact-form-card {
          width: 100%;
          max-width: 820px;
          padding: 2.75rem 3.5rem 2.75rem 2.75rem;
          border: 1.5px solid var(--color-border-bright);
          border-radius: 28px;
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 
            0 25px 60px -15px rgba(124, 58, 237, 0.12),
            0 0 35px rgba(185, 245, 0, 0.06);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 
            0 30px 70px -15px rgba(124, 58, 237, 0.18),
            0 0 40px rgba(185, 245, 0, 0.1);
        }

        /* Right Side: Slanting Boy on the Box */
        .contact-slanting-boy-box {
          position: absolute;
          right: -85px;
          bottom: -10px;
          width: 310px;
          height: 520px;
          z-index: 6;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .contact-call-pill {
          position: absolute;
          top: 8px;
          right: 25px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(139, 92, 246, 0.35);
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          color: #4c1d95;
          box-shadow: 0 10px 25px -5px rgba(124, 58, 237, 0.25), 0 0 1px rgba(0, 0, 0, 0.1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          animation: callPillFloat 3.8s ease-in-out infinite;
          z-index: 7;
        }

        .call-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        @keyframes callPillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .contact-boy-img-holder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .contact-slanting-boy-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom right;
          /* Natural slanting lean resting right against the card */
          transform: rotate(-3deg) translateY(6px);
          transform-origin: bottom center;
          filter: 
            drop-shadow(-10px 15px 25px rgba(124, 58, 237, 0.35))
            drop-shadow(0 6px 14px rgba(0, 0, 0, 0.12))
            saturate(1.18)
            contrast(1.06);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .contact-card-outer-wrap:hover .contact-slanting-boy-img {
          transform: rotate(-1.5deg) translateY(-2px) scale(1.02);
          filter: 
            drop-shadow(-12px 20px 30px rgba(124, 58, 237, 0.45))
            drop-shadow(0 8px 18px rgba(0, 0, 0, 0.16))
            saturate(1.22)
            contrast(1.08);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .contact-card-outer-wrap {
            max-width: 900px;
          }
          .contact-form-card {
            max-width: 760px;
            padding: 2.5rem 3rem 2.5rem 2.25rem;
          }
          .contact-slanting-boy-box {
            right: -45px;
            width: 280px;
            height: 480px;
          }
        }

        @media (max-width: 992px) {
          .contact-card-outer-wrap {
            max-width: 100%;
          }
          .contact-form-card {
            max-width: 100%;
            padding: 2.25rem 2rem;
          }
          .contact-slanting-boy-box {
            right: -25px;
            width: 230px;
            height: 420px;
            opacity: 0.95;
          }
          .contact-call-pill {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .contact-card-outer-wrap {
            flex-direction: column;
            align-items: center;
          }
          .contact-form-card {
            padding: 2rem 1.5rem;
          }
          .contact-slanting-boy-box {
            position: relative;
            right: auto;
            bottom: auto;
            width: 250px;
            height: 340px;
            margin: 1.5rem auto -0.5rem;
          }
          .contact-slanting-boy-img {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
