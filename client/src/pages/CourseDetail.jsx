import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { usePageMeta } from '../hooks/usePageMeta';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  usePageMeta({
    title: course ? `${course.title} (${course.duration}) | Pay After Placement` : 'Course Details',
    description: course ? course.description : 'Explore tech training tracks at Karka Academy.',
    schema: course ? {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Karka AI Academy",
        "url": "https://karka.academy"
      },
      "timeRequired": course.duration,
      "educationalCredentialAwarded": "Commercial Internship Certificate & Placement Guarantee"
    } : null,
  });

  if (!course) {
    return (
      <div className="container" style={{ paddingTop: '8rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Course Not Found</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: '1rem' }}>The course you are looking for does not exist.</p>
        <Link to="/courses" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>View All Courses</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '950px' }}>
        <Link to="/courses" style={{ color: 'var(--color-primary-light)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
          ← Back to All Courses
        </Link>

        {/* Course Header */}
        <div className="card" style={{ padding: '2.75rem 2.5rem', marginBottom: '2rem', background: '#ffffff', border: '1.5px solid rgba(90, 24, 154, 0.16)', boxShadow: '0 10px 30px rgba(43, 0, 79, 0.07)', borderRadius: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '3rem', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(90, 24, 154, 0.08)', borderRadius: '16px' }}>{course.icon || '💻'}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <span className="badge" style={{ background: 'var(--color-primary, #5A189A)', color: '#ffffff', fontWeight: 800, padding: '4px 14px', borderRadius: '100px', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                  {course.track}
                </span>
                {course.badge && (
                  <span className="badge" style={{ background: 'var(--color-lime, #B9F500)', color: '#121212', fontWeight: 800, padding: '4px 14px', borderRadius: '100px', fontSize: '0.78rem' }}>
                    {course.badge}
                  </span>
                )}
              </div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-primary-dark, #2B004F)', lineHeight: 1.2 }}>
                {course.title}
              </h1>
            </div>
          </div>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-muted, #4e3d66)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '820px' }}>
            {course.description}
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(90, 24, 154, 0.12)', paddingTop: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-muted, #4e3d66)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Duration</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-dark, #2B004F)', marginTop: '2px' }}>⏱️ {course.duration}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-muted, #4e3d66)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Training Mode</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-dark, #2B004F)', marginTop: '2px' }}>🌐 {course.mode || 'Online / In-Person Labs'}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-muted, #4e3d66)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Fee Structure</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2e8b00', marginTop: '2px' }}>💰 ₹0 Upfront (Pay After Hired)</p>
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-muted, #4e3d66)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Mentorship</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary, #5A189A)', marginTop: '2px' }}>🎯 1-on-1 Code Reviews</p>
            </div>
          </div>
        </div>

        {/* Syllabus / Highlights */}
        <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
          <div className="card">
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem' }}>What You Will Learn & Build</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {course.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>✓</span> {h} Core Concept & Practical Capstone
                </li>
              ))}
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> GenAI Tooling Integration (ChatGPT, Claude, Cursor)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> Live GitHub Deployment & Portfolio Documentation
              </li>
            </ul>
          </div>

          <div className="card highlight" style={{ background: '#ffffff', border: '2px solid rgba(90, 24, 154, 0.2)', borderRadius: '20px', boxShadow: '0 8px 24px rgba(43, 0, 79, 0.06)' }}>
            <span className="badge badge-green" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
              ₹0 Upfront Risk-Free
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--color-primary-dark, #2B004F)' }}>
              Pay After Placement Guarantee
            </h2>
            <p style={{ color: 'var(--color-muted, #4e3d66)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              You don't pay any tuition fees until you secure an offer letter with our guaranteed minimum salary. We handle mock interviews, resume optimization, and hiring partner introductions.
            </p>
            <Link to="/enroll" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}>
              Enroll in {course.title} ✦
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
