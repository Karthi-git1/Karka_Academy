import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-card-header">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span className="course-icon">{course.icon}</span>
          {course.badge && (
            <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
              {course.badge}
            </span>
          )}
        </div>
        <p style={{ color: 'var(--color-primary-light)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {course.track}
        </p>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '0.25rem' }}>
          {course.title}
        </h3>
      </div>

      <div className="course-card-body">
        <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem', minHeight: '44px' }}>
          {course.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {course.highlights.slice(0, 3).map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.2rem 0.5rem',
                color: 'var(--color-text)'
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            ⏱️ {course.duration}
          </span>
          <Link
            to={`/courses/${course.slug}`}
            className="btn btn-outline"
            style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
            aria-label={`View details for ${course.title}`}
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
