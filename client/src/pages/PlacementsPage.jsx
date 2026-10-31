import React from 'react';
import PartnersMarquee from '../components/PartnersMarquee';
import TestimonialSection from '../sections/TestimonialSection';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PlacementsPage() {
  usePageMeta({
    title: '500+ Student Placements & Verified Hiring Proof',
    description: 'Explore verified student placements from Karka Academy at top companies like TCS, HCL, Novac, and tech startups. 100% interview guarantee.',
  });

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-label">✦ Career Outcomes</span>
          <h1 className="section-title">Our Placement Record Speaks</h1>
          <p className="section-subtitle">
            500+ successful alumni now driving technology teams at leading tech giants and innovative Indian startups.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Highlight stats */}
        <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
          <div className="card placement-stat-card" style={{ textAlign: 'center' }}>
            <span className="counter-num">100%</span>
            <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>Interview Guarantee</p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Multiple hiring partner rounds until you secure an offer</p>
          </div>
          <div className="card placement-stat-card" style={{ textAlign: 'center' }}>
            <span className="counter-num">500+</span>
            <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>Graduates Placed</p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Across Tamil Nadu, Bangalore, Hyderabad &amp; Remote</p>
          </div>
          <div className="card placement-stat-card" style={{ textAlign: 'center' }}>
            <span className="counter-num">₹0</span>
            <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>Upfront Tuition</p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Pay only after landing a verified tech role</p>
          </div>
        </div>
      </div>

      <PartnersMarquee />
      <TestimonialSection />

      <div className="container text-center" style={{ marginTop: '3rem' }}>
        <Link to="/enroll" className="btn btn-accent btn-lg">
          Launch Your Tech Career Now ✦
        </Link>
      </div>
    </div>
  );
}
