import React from 'react';
import { Link } from 'react-router-dom';
import mascotSrc from '../assets/images/mascot.png';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: '404 - Page Not Found',
    description: 'The requested page was not found on Karka AI Academy.',
  });

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', textAlign: 'center' }}>
      <img
        src={mascotSrc}
        alt="Karka Mascot Looking Confused"
        width="220"
        height="220"
        loading="lazy"
        decoding="async"
        style={{ width: '220px', height: 'auto', margin: '0 auto 1.5rem', filter: 'drop-shadow(0 15px 35px rgba(139,92,246,0.6))' }}
      />
      <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary-light)', marginBottom: '1rem' }}>
        Oops! Our Mascot couldn't find this page.
      </h2>
      <p style={{ color: 'var(--color-muted)', maxWidth: '450px', margin: '0 auto 2rem' }}>
        The URL you are looking for might have moved, or you might have mistyped the address. Let's get you back on track!
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Back to Home ✦
      </Link>
    </div>
  );
}
