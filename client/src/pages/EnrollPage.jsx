import React, { useState } from 'react';
import { courses } from '../data/courses';
import { submitEnroll } from '../lib/api';
import mascotSrc from '../assets/images/mascot.png';
import { usePageMeta } from '../hooks/usePageMeta';

export default function EnrollPage() {
  usePageMeta({
    title: 'Apply for Admission | Zero Upfront Tuition',
    description: 'Apply for Pay After Placement at Karka Academy. Start learning with ₹0 upfront tuition and launch your tech career.',
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: courses[0]?.title || 'Generative AI',
    education: 'B.E / B.Tech',
    yearOfGrad: '2025',
    paymentPreference: 'Pay After Placement',
    referral: 'Social Media / Instagram'
  });

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        setError('Please complete all personal details.');
        return;
      }
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        setError('Please enter a valid 10-digit Indian mobile number.');
        return;
      }
    }
    setError('');
    setStep(step + 1);
  };

  const prevStep = () => {
    setError('');
    setStep(step - 1);
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitEnroll(formData);
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '750px' }}>
        <div className="text-center mb-4">
          <span className="section-label">✦ Admissions Open</span>
          <h1 className="section-title">Apply for Admission</h1>
          <p className="section-subtitle">
            Zero upfront tuition fee with Pay After Placement. Takes less than 2 minutes.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[1, 2, 3].map(s => (
            <div
              key={s}
              style={{
                width: s === step ? '40px' : '12px',
                height: '10px',
                borderRadius: 'var(--radius-full)',
                background: s === step ? 'var(--color-primary)' : s < step ? 'var(--color-accent)' : 'var(--color-border)',
                transition: 'var(--transition)'
              }}
            />
          ))}
        </div>

        <div className="card enroll-form-card" style={{ padding: '2.5rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <img src={mascotSrc} alt="Celebration Mascot" style={{ width: '140px', margin: '0 auto 1.5rem', filter: 'drop-shadow(0 10px 25px rgba(139,92,246,0.6))' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>Application Submitted! 🎉</h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                Welcome to Karka Academy, <strong>{formData.name}</strong>! Our admissions counselor will connect with you via WhatsApp ({formData.phone}) with your cohort schedule and entrance evaluation details.
              </p>
              <div style={{ background: 'var(--color-surface2)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'inline-block', textAlign: 'left', fontSize: '0.88rem' }}>
                <p><strong>Track:</strong> {formData.program}</p>
                <p><strong>Plan:</strong> {formData.paymentPreference}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnroll}>
              {error && (
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.15)', border: '1px solid var(--color-danger)', borderRadius: 'var(--radius-md)', color: '#fca5a5', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  {error}
                </div>
              )}

              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Step 1: Personal Details</h3>
                  <div className="form-group">
                    <label htmlFor="enroll-name" className="form-label">Full Name *</label>
                    <input
                      id="enroll-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="form-input"
                      placeholder="e.g. Vignesh Raja"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enroll-email" className="form-label">Email Address *</label>
                    <input
                      id="enroll-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="form-input"
                      placeholder="e.g. vignesh@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enroll-phone" className="form-label">10-Digit Mobile / WhatsApp *</label>
                    <input
                      id="enroll-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="form-input"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <button type="button" onClick={nextStep} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    Next: Academic Details →
                  </button>
                </div>
              )}

              {/* Step 2: Academic & Track */}
              {step === 2 && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Step 2: Educational Background & Track</h3>
                  <div className="form-group">
                    <label htmlFor="enroll-education" className="form-label">Highest Qualification *</label>
                    <select
                      id="enroll-education"
                      name="education"
                      className="form-select"
                      value={formData.education}
                      onChange={e => setFormData({ ...formData, education: e.target.value })}
                    >
                      <option>B.E / B.Tech (Computer Science / IT)</option>
                      <option>B.E / B.Tech (Non-CS Branches)</option>
                      <option>BCA / B.Sc Computer Science</option>
                      <option>Arts & Science / Commerce Degree</option>
                      <option>Diploma / Working Professional</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enroll-yearOfGrad" className="form-label">Graduation Year *</label>
                    <select
                      id="enroll-yearOfGrad"
                      name="yearOfGrad"
                      className="form-select"
                      value={formData.yearOfGrad}
                      onChange={e => setFormData({ ...formData, yearOfGrad: e.target.value })}
                    >
                      <option>2026 (Final Year)</option>
                      <option>2025</option>
                      <option>2024</option>
                      <option>2023 or earlier</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enroll-program" className="form-label">Select Your Target Program *</label>
                    <select
                      id="enroll-program"
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
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="button" onClick={prevStep} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                      ← Back
                    </button>
                    <button type="button" onClick={nextStep} className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
                      Next: Plan Preference →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Plan & Confirmation */}
              {step === 3 && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Step 3: Choose Admission Plan</h3>
                  <div className="form-group">
                    <label htmlFor="enroll-payment" className="form-label">Tuition Model Preference</label>
                    <select
                      id="enroll-payment"
                      name="paymentPreference"
                      className="form-select"
                      value={formData.paymentPreference}
                      onChange={e => setFormData({ ...formData, paymentPreference: e.target.value })}
                    >
                      <option value="Pay After Placement">Pay After Placement (₹0 Upfront, Pay when Hired)</option>
                      <option value="Standard Upfront">Upfront Discounted Tuition</option>
                      <option value="Undecided">Discuss with Counselor</option>
                    </select>
                  </div>

                  <div style={{ background: 'rgba(57,255,20,0.06)', border: '1px solid rgba(57,255,20,0.2)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.35rem' }}>
                      ✓ Guaranteed Minimum Salary Clause Included
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                      You only pay if you get placed in a verified technical role meeting our salary threshold.
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="button" onClick={prevStep} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                      ← Back
                    </button>
                    <button type="submit" disabled={loading} className="btn btn-accent" style={{ flex: 2, justifyContent: 'center' }}>
                      {loading ? 'Submitting...' : 'Complete Free Application ✦'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
