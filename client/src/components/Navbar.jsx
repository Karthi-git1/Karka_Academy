import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import logoSrc from '../assets/images/karka_logo.png';
import { courseCategories } from '../data/courses';
import { ChevronDown, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Courses', to: '/courses', isDropdown: true },
  { label: 'Placements', to: '/placements' },
  { label: 'Pay After Placement', to: '/pay-after-placement' },
  { label: 'Contact', to: '/contact' },
];

/**
 * Magnetic button wrapper that attracts towards the cursor with spring physics
 */
function MagneticButton({ children, to, className, style }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 16, stiffness: 180, mass: 0.12 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.32);
    y.set((e.clientY - centerY) * 0.32);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 4px 14px rgba(185, 245, 0, 0.42)',
            '0 6px 24px rgba(185, 245, 0, 0.72)',
            '0 4px 14px rgba(185, 245, 0, 0.42)',
          ],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ borderRadius: 'var(--radius-full)' }}
      >
        <Link to={to} className={className} style={style}>
          {children}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(courseCategories[0]?.id || 'fullstack');
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Scroll Progress tracking for bottom lime line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [location]);

  // Click outside and Escape key listener for Mega Menu & Mobile Menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCoursesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCoursesDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const activeCategory = courseCategories.find((c) => c.id === activeCategoryId) || courseCategories[0];

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
      animate={{
        paddingTop: scrolled ? '0.45rem' : '0.85rem',
        paddingBottom: scrolled ? '0.45rem' : '0.85rem',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: scrolled ? 'blur(26px)' : 'blur(16px)',
        boxShadow: scrolled
          ? '0 8px 30px rgba(43, 0, 79, 0.09)'
          : '0 2px 14px rgba(43, 0, 79, 0.04)',
      }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        WebkitBackdropFilter: scrolled ? 'blur(26px)' : 'blur(16px)',
        borderBottom: '1px solid rgba(90, 24, 154, 0.12)',
      }}
    >
      <div className="container flex-between" style={{ position: 'relative', zIndex: 2 }}>
        {/* Logo & Brand Text */}
        <Link
          to="/"
          className="nav-brand"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
        >
          <img
            src={logoSrc}
            alt="Karka Academy logo"
            width="44"
            height="44"
            loading="eager"
            decoding="async"
            style={{
              height: scrolled ? '38px' : '44px',
              width: 'auto',
              display: 'block',
              transition: 'height 0.25s ease',
            }}
          />
          <div
            className="nav-brand-text"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              lineHeight: '1.1',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: scrolled ? '1.16rem' : '1.26rem',
                fontWeight: '800',
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: '1.1',
                transition: 'font-size 0.25s ease',
              }}
            >
              AI &amp; TECH
            </span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: scrolled ? '0.86rem' : '0.92rem',
                fontWeight: '600',
                color: '#3d3d3d',
                letterSpacing: '0.02em',
                lineHeight: '1.1',
                transition: 'font-size 0.25s ease',
              }}
            >
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop Links with Framer Motion layoutId sliding pill highlight */}
        <div className="flex gap-2" style={{ display: 'flex', alignItems: 'center' }}>
          <ul
            className="desktop-nav"
            style={{
              display: 'flex',
              gap: '0.35rem',
              listStyle: 'none',
              alignItems: 'center',
              position: 'relative',
              padding: '4px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(90, 24, 154, 0.03)',
            }}
            onMouseLeave={() => {
              setHoveredPath(null);
            }}
            ref={dropdownRef}
          >
            {navLinks.map((l) => {
              const isActive = location.pathname === l.to;
              const isHovered = (hoveredPath || location.pathname) === l.to;

              if (l.isDropdown) {
                return (
                  <li
                    key={l.to}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => {
                      setHoveredPath(l.to);
                      setCoursesDropdownOpen(true);
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setCoursesDropdownOpen((prev) => !prev)}
                      aria-expanded={coursesDropdownOpen}
                      aria-haspopup="true"
                      aria-controls="courses-dropdown-menu"
                      aria-label="Toggle courses mega menu"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: scrolled ? '0.38rem 0.95rem' : '0.45rem 1.1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.92rem',
                        fontWeight: '700',
                        color: isActive || coursesDropdownOpen ? 'var(--color-primary-dark)' : '#2B004F',
                        position: 'relative',
                        zIndex: 2,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {isActive && (
                        <span
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: 'var(--color-lime)',
                            boxShadow: '0 0 8px var(--color-lime)',
                            display: 'inline-block',
                          }}
                        />
                      )}
                      <span>{l.label}</span>
                      <ChevronDown
                        size={15}
                        style={{
                          transform: coursesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>

                    {/* Sliding Pill Highlight */}
                    {isHovered && (
                      <motion.div
                        layoutId="navbar-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(90, 24, 154, 0.11)',
                          border: '1.5px solid rgba(90, 24, 154, 0.22)',
                          boxShadow: '0 2px 10px rgba(90, 24, 154, 0.08)',
                          zIndex: 1,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}

                    {/* "Our Courses" Dropdown Mega-Menu Panel */}
                    <AnimatePresence>
                      {coursesDropdownOpen && (
                        <motion.div
                          id="courses-dropdown-menu"
                          role="region"
                          aria-label="Courses directory"
                          className="karka-mega-menu-panel"
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          onMouseLeave={() => setCoursesDropdownOpen(false)}
                        >
                          {/* Left Column: Categories List */}
                          <div className="mega-menu-left-categories">
                            {courseCategories.map((cat) => {
                              const isCatActive = activeCategoryId === cat.id;
                              return (
                                <button
                                  key={cat.id}
                                  type="button"
                                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                                  onClick={() => setActiveCategoryId(cat.id)}
                                  className={`mega-category-item-btn ${isCatActive ? 'active' : ''}`}
                                >
                                  <span className="cat-icon">{cat.icon}</span>
                                  <span className="cat-name">{cat.name}</span>
                                  <ChevronRight size={15} className="cat-arrow" />
                                </button>
                              );
                            })}
                          </div>

                          {/* Right Column: Courses of Active Category */}
                          <div className="mega-menu-right-courses">
                            <div className="mega-courses-header">
                              <h4 className="mega-category-title">{activeCategory.name}</h4>
                              <Link
                                to="/courses"
                                className="mega-view-all-link"
                                onClick={() => setCoursesDropdownOpen(false)}
                              >
                                <span>View All Courses</span>
                                <ArrowRight size={14} />
                              </Link>
                            </div>

                            <div className="mega-courses-list">
                              {activeCategory.courses.map((course) => (
                                <Link
                                  key={course.id}
                                  to={`/courses/${course.slug}`}
                                  className="mega-course-card-link"
                                  onClick={() => setCoursesDropdownOpen(false)}
                                >
                                  <div className="mega-course-icon-wrap">
                                    <BookOpen size={17} color="var(--color-primary)" />
                                  </div>
                                  <div className="mega-course-details">
                                    <div className="mega-course-name">{course.title}</div>
                                    <p className="mega-course-snippet">{course.desc}</p>
                                    <div className="mega-course-meta">
                                      <span>⏱ {course.duration}</span>
                                      <span>🌐 {course.mode}</span>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li
                  key={l.to}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => {
                    setHoveredPath(l.to);
                    setCoursesDropdownOpen(false);
                  }}
                >
                  <Link
                    to={l.to}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: scrolled ? '0.38rem 0.95rem' : '0.45rem 1.1rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.92rem',
                      fontWeight: '700',
                      color: isActive ? 'var(--color-primary-dark)' : '#2B004F',
                      position: 'relative',
                      zIndex: 2,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {/* Active Route Pulse Dot */}
                    {isActive && (
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: 'var(--color-lime)',
                          boxShadow: '0 0 8px var(--color-lime)',
                          display: 'inline-block',
                        }}
                      />
                    )}
                    {l.label}
                  </Link>

                  {/* Motion layoutId Sliding Pill Highlight */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(90, 24, 154, 0.11)',
                        border: '1.5px solid rgba(90, 24, 154, 0.22)',
                        boxShadow: '0 2px 10px rgba(90, 24, 154, 0.08)',
                        zIndex: 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Magnetic "Apply Free ✦" Button with Ambient Pulse (Restored) */}
          <MagneticButton
            to="/enroll"
            className="btn btn-lime-vibrant"
            style={{
              marginLeft: '0.65rem',
              padding: scrolled ? '0.5rem 1.25rem' : '0.6rem 1.45rem',
              fontSize: '0.92rem',
              fontWeight: '800',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-lime)',
              color: '#121212',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'padding 0.25s ease',
            }}
          >
            <span>Apply Free ✦</span>
          </MagneticButton>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{ display: 'none' }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="mobile-link">
                {l.label}
              </Link>
            ))}
            <Link
              to="/enroll"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
            >
              Apply Free ✦
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll-Progress Line in Lime Along the Bottom Edge */}
      <motion.div
        className="navbar-scroll-progress"
        style={{
          scaleX,
          transformOrigin: '0%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2.5px',
          background: 'linear-gradient(90deg, #38B000 0%, #B9F500 100%)',
          boxShadow: '0 0 10px rgba(185, 245, 0, 0.85), 0 0 20px rgba(185, 245, 0, 0.4)',
          zIndex: 102,
        }}
      />

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
          .hamburger span { display: block; width: 24px; height: 2px; background: var(--color-primary-dark); border-radius: 2px; transition: var(--transition); }
        }
        .mobile-menu {
          display: flex; flex-direction: column; gap: 0.5rem;
          padding: 1.25rem 1.5rem 1.75rem;
          background: rgba(245, 238, 252, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid var(--color-border);
          box-shadow: 0 10px 25px rgba(90, 24, 154, 0.12);
        }
        .mobile-link {
          padding: 0.85rem 1rem;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: var(--transition);
        }
        .mobile-link:hover { background: rgba(90, 24, 154, 0.1); color: var(--color-primary); }
      `}</style>
    </motion.nav>
  );
}
