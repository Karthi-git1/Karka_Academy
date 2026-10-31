import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/images/karka_logo.png';

const programLinks = [
  { label: 'Home', to: '/' },
  { label: 'All Courses', to: '/courses' },
  { label: 'Placement', to: '/placements' },
  { label: 'Free Roadmap', to: '/contact' },
];

const academyLinks = [
  { label: 'About Us', to: '/contact' },
  { label: 'Success Stories', to: '/placements' },
  { label: 'Pay After Placement', to: '/pay-after-placement' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/karka.ai', icon: '📸' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'Facebook', href: '#', icon: '📘' },
];

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <img
              src={logoSrc}
              alt="Karka Academy logo"
              width="150"
              height="48"
              loading="lazy"
              decoding="async"
              style={{ height: '48px', width: 'auto', marginBottom: '1rem' }}
            />
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '280px', marginBottom: '1.5rem' }}>
              Empowering the next generation of developers with GenAI‑infused education and placement-focused mentorship.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  title={s.name}
                  aria-label={`Visit Karka Academy on ${s.name}`}
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: '#ffffff', border: '1.5px solid var(--color-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', transition: 'var(--transition)',
                    boxShadow: '0 2px 6px rgba(124, 58, 237, 0.06)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.background = 'var(--color-surface2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = '#ffffff'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text)' }}>Our Programs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {programLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{ color: 'var(--color-muted)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text)' }}>Karka Academy</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {academyLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{ color: 'var(--color-muted)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Stay Updated</h4>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Career tips, course drops & industry news — no spam.
            </p>
            {subscribed ? (
              <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}>✅ You're subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label htmlFor="newsletter-email" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="form-input"
                  required
                  aria-label="Email address for newsletter"
                  style={{ fontSize: '0.875rem' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1rem', fontSize: '0.875rem', justifyContent: 'center' }}>
                  Subscribe →
                </button>
              </form>
            )}
            <div style={{ marginTop: '1.5rem', padding: '1.1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-border)', boxShadow: '0 4px 12px rgba(124, 58, 237, 0.05)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>📍 Academy HQ</p>
              <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text)' }}>Nagercoil, Tamil Nadu, India</p>
              <a href="tel:+919487530243" style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 700, display: 'inline-block', marginTop: '0.25rem' }}>
                📞 +91 94875 30243
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>
            © 2026 Karka Academy. All rights reserved. · Built with Passion by Karka ❤️
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
