import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../data/courses';
import { usePageMeta } from '../hooks/usePageMeta';
import { 
  Briefcase, 
  BookOpen, 
  Clock, 
  Globe, 
  Calendar, 
  ArrowRight, 
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AUDIENCE_TABS = [
  { id: 'college-students', label: 'College Students' },
  { id: 'school-students', label: 'School Students' },
  { id: 'graduates', label: 'Graduates' },
  { id: 'professionals', label: 'Professionals' },
];

const CATEGORY_FILTERS = [
  'All Programs',
  'Internships',
  'Full Stack',
  'Gen AI & Python',
  'Data & SQL',
  'Design',
  'Cloud & DevOps',
];

export default function CoursesPage({ defaultAudience }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlAudience = searchParams.get('audience');

  const [activeAudience, setActiveAudience] = useState(
    defaultAudience || urlAudience || 'college-students'
  );
  const [selectedCategory, setSelectedCategory] = useState('All Programs');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  usePageMeta({
    title: `${selectedCategory !== 'All Programs' ? selectedCategory : 'Industry-Ready Tech Tracks'} | Courses`,
    description: `Explore Karka Academy's industry-aligned tech tracks: MERN Fullstack, Generative AI, Java microservices, Data Science, and UI/UX design with live internships and Pay After Placement.`,
  });

  // Audience Title Helper
  const audienceHeading = useMemo(() => {
    switch (activeAudience) {
      case 'school-students':
        return 'School Student Foundations & Coding Programs';
      case 'graduates':
        return 'Graduate Job-Ready Internships & Stacks';
      case 'professionals':
        return 'Professional Upskilling & Enterprise Stacks';
      default:
        return 'College Student Internships & Tech Courses';
    }
  }, [activeAudience]);

  // Filtered courses based on search, audience, and category
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      // Search match
      const matchSearch =
        !searchQuery ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.highlights && c.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));

      // Category match
      let matchCategory = true;
      if (selectedCategory === 'Internships') {
        matchCategory = c.badge?.toLowerCase().includes('internship') || c.title.toLowerCase().includes('internship');
      } else if (selectedCategory === 'Full Stack') {
        matchCategory = c.track === 'Fullstack Courses';
      } else if (selectedCategory === 'Gen AI & Python') {
        matchCategory = c.track === 'Gen AI Courses';
      } else if (selectedCategory === 'Data & SQL') {
        matchCategory = c.track === 'Data & ML Courses';
      } else if (selectedCategory === 'Design') {
        matchCategory = c.track === 'Design Courses';
      } else if (selectedCategory === 'Cloud & DevOps') {
        matchCategory = c.slug === 'cloud-devops' || c.slug === 'cybersecurity';
      }

      return matchSearch && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Show top 6 initially, or all if searching or toggled
  const displayedCourses = useMemo(() => {
    if (searchQuery.trim().length > 0 || showAll) {
      return filteredCourses;
    }
    return filteredCourses.slice(0, 6);
  }, [filteredCourses, searchQuery, showAll]);

  const hasMoreThanSix = !searchQuery.trim() && filteredCourses.length > 6;

  return (
    <div className="courses-page-layout" style={{ paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="section-label">✦ KARKA AI ACADEMY · CURRICULUM ✦</span>
          <h1 className="section-title">
            {audienceHeading.split('&')[0]} &amp; <span className="highlight">{audienceHeading.split('&')[1] || 'Tech Programs'}</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', maxWidth: '680px' }}>
            Empowering the next generation of developers with GenAI-infused education, real client projects, and placement-focused mentorship.
          </p>
          <div className="divider" style={{ marginTop: '1.25rem' }} />
        </div>

        {/* Audience Navigation Tabs */}
        <div className="karka-audience-nav-bar" style={{ marginBottom: '2rem' }}>
          {AUDIENCE_TABS.map((tab) => {
            const isActive = activeAudience === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveAudience(tab.id);
                  setShowAll(false);
                }}
                className={`karka-audience-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* "For Students: Learn from the best" Hero Banner */}
        <div className="karka-for-students-banner" style={{ marginBottom: '2.5rem' }}>
          <div className="banner-text-left">
            <span className="banner-badge">FOR {activeAudience.replace('-', ' ').toUpperCase()}</span>
            <h3 className="banner-heading" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.35)' }}>
              Learn from the best, with industry aligned programs
            </h3>
          </div>
          <div className="banner-benefits-pills">
            <div className="benefit-pill">
              <span className="benefit-check">✓</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Hands on industry projects</span>
            </div>
            <div className="benefit-pill">
              <span className="benefit-check">✓</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Future ready curriculum</span>
            </div>
            <div className="benefit-pill">
              <span className="benefit-check">✓</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Certificate from top institutes</span>
            </div>
          </div>
        </div>

        {/* Search bar & Category Filter Row */}
        <div className="courses-search-bar-wrap" style={{ marginBottom: '1.75rem' }}>
          <div className="search-input-box">
            <Search size={18} color="var(--color-primary)" />
            <input
              type="text"
              placeholder="Search 18 tracks (e.g., MERN, GenAI, Python, UI/UX, Spring Boot, DevOps)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-field"
              aria-label="Search courses by keyword or tech stack"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: 'var(--color-muted)', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Clean Filter Tabs Bar */}
        <div className="karka-clean-filter-bar" style={{ marginBottom: '2.5rem' }}>
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`clean-filter-pill ${isActive ? 'active' : ''}`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Section Header: Showing Popular Tracks */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-dark, #2B004F)' }}>
              {searchQuery ? `Search Results (${filteredCourses.length})` : showAll ? `All ${filteredCourses.length} Career Tracks` : `Top 6 Most Popular Tracks`}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', marginTop: '2px' }}>
              {showAll || searchQuery 
                ? `Showing all available specialized tracks and internships.`
                : `Showing our 6 most popular flagship career programs.`}
            </p>
          </div>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary)', background: '#ede2f8', padding: '4px 12px', borderRadius: '100px' }}>
            Showing {displayedCourses.length} of {filteredCourses.length} Tracks
          </span>
        </div>

        {/* Unified Cards Grid - Symmetrical & Clean */}
        <div className="clean-course-cards-grid">
          {displayedCourses.map((course) => (
            <div key={course.slug} className="clean-course-card">
              {/* Top Header Badge */}
              <div className="clean-card-header">
                <span className={`clean-type-tag ${course.badge?.toLowerCase().includes('internship') ? 'internship' : 'course'}`}>
                  {course.badge?.toLowerCase().includes('internship') ? <Briefcase size={13} /> : <BookOpen size={13} />}
                  {course.badge || course.track}
                </span>
                <span className="clean-academy-tag">Karka Academy</span>
              </div>

              {/* Course Title */}
              <h3 className="clean-course-title">
                {course.title}
              </h3>

              {/* Course Description */}
              <p className="clean-course-description">
                {course.description}
              </p>

              {/* Meta details */}
              <div className="clean-meta-details-row">
                <span className="clean-meta-item">
                  <Clock size={14} className="meta-icon" />
                  <strong>{course.duration}</strong>
                </span>
                <span className="clean-meta-item">
                  <Globe size={14} className="meta-icon" />
                  <span>{course.mode || 'Online / In-Person'}</span>
                </span>
                <span className="clean-meta-item highlight-batch">
                  <Calendar size={14} className="meta-icon" />
                  <span>{course.batch || 'Starts Soon'}</span>
                </span>
              </div>

              {/* Skills Highlights */}
              <div className="clean-skills-tags-row">
                {course.highlights?.slice(0, 4).map((h, i) => (
                  <span key={i} className="clean-skill-pill">
                    {h}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="clean-card-action">
                <Link
                  to={`/courses/${course.slug}`}
                  className="clean-card-btn"
                >
                  <span>Explore Course Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* "View all 18" Interactive Action Button */}
        {hasMoreThanSix && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '3.5rem' }}>
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn btn-primary btn-lg glow-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0.95rem 2.6rem',
                fontSize: '1.05rem',
                fontWeight: 800,
                borderRadius: '100px',
                cursor: 'pointer',
              }}
            >
              <span>
                {showAll 
                  ? 'Showing All 18 Tracks · Show Top 6 Only' 
                  : `View All 18 Tracks (${filteredCourses.length - 6} More)`}
              </span>
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="karka-future-proof-cta-card" style={{ marginTop: hasMoreThanSix ? '2rem' : '4.5rem' }}>
          <div className="cta-card-content">
            <span className="section-label" style={{ color: '#121212', background: 'var(--color-lime, #B9F500)', border: '1px solid #B9F500', fontWeight: 800 }}>✦ READY TO FUTURE-PROOF YOUR CAREER? ✦</span>
            <h3 className="cta-card-heading" style={{ color: '#ffffff', textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)' }}>
              Join the AI revolution with Karka Academy today and start your journey with industry mentors.
            </h3>
            <p className="cta-card-sub" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Empowering the next generation of developers with GenAI-infused education and placement-focused mentorship.
            </p>
            <div className="cta-card-buttons">
              <Link to="/enroll" className="btn btn-primary btn-lg glow-btn">
                <span>Apply for Admission →</span>
              </Link>
              <Link to="/pay-after-placement" className="btn btn-outline-white btn-lg">
                <span>Pay After Placement (₹0 Upfront)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
