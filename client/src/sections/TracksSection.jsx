import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Globe, 
  Calendar, 
  ArrowRight, 
  Briefcase, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ALL_COURSES = [
  // ─── TOP 6 MOST POPULAR TRACKS ───
  {
    id: 'mern-fullstack',
    slug: 'mern-fullstack',
    title: 'MERN Fullstack Development',
    category: 'Full Stack',
    categoryLabel: 'Full Stack Track',
    isInternship: true,
    duration: '6 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🔥 Most Popular',
    description: 'Master full-stack web development using MongoDB, Express, React, and Node.js with real-world deployments, Git collaboration, and automated testing.',
    skills: ['MongoDB', 'Express.js', 'React 19', 'Node.js', 'REST APIs'],
  },
  {
    id: 'generative-ai',
    slug: 'generative-ai',
    title: 'Generative AI & LLM Orchestration',
    category: 'Gen AI & Python',
    categoryLabel: 'AI-First Track',
    isInternship: false,
    duration: '4 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🤖 AI-First',
    description: 'Master prompt engineering, Claude/OpenAI APIs, custom LangChain agents, vector search, RAG pipelines, and modern AI automation.',
    skills: ['Claude & GPT APIs', 'LangChain', 'RAG Pipelines', 'Vector DBs', 'AI Agents'],
  },
  {
    id: 'full-stack-dev-internship',
    slug: 'full-stack-developer-internship',
    title: 'Full Stack Developer Internship',
    category: 'Internships',
    categoryLabel: 'Practical Internship',
    isInternship: true,
    duration: '6 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🚀 Live Internship',
    description: 'Work on live commercial client products, collaborate in Agile team sprints, and graduate with a deployable portfolio recruiters can test.',
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'CI/CD Deploy'],
  },
  {
    id: 'data-science-foundations',
    slug: 'data-science-foundations',
    title: 'Data Science Foundations',
    category: 'Data & SQL',
    categoryLabel: 'Practical Internship',
    isInternship: true,
    duration: '4 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '📊 Practical Internship',
    description: 'Master exploratory data analysis, statistical modeling, Pandas, predictive ML algorithms, and deploy live data science pipelines.',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Pipelines'],
  },
  {
    id: 'uiux-design-internship',
    slug: 'uiux-design-internship',
    title: 'UI/UX Design Internship',
    category: 'Design',
    categoryLabel: 'Design Track',
    isInternship: true,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🎨 Design Track',
    description: 'Design modern user interfaces in Figma, build scalable design systems, conduct UX research, and review designs with real clients.',
    skills: ['Figma', 'UX Research', 'Design Systems', 'Wireframing', 'Prototyping'],
  },
  {
    id: 'react-java-fullstack',
    slug: 'react-java-fullstack',
    title: 'React + Java Full Stack Development',
    category: 'Full Stack',
    categoryLabel: 'Enterprise Track',
    isInternship: false,
    duration: '6 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '☕ Enterprise Track',
    description: 'Build enterprise-grade applications with React and Spring Boot microservices. Master JPA/Hibernate, Spring Security, and scalable systems.',
    skills: ['React', 'Java 21', 'Spring Boot', 'Hibernate', 'PostgreSQL'],
  },

  // ─── REMAINING 12 SPECIALIZED TRACKS ───
  {
    id: 'advanced-python-automation',
    slug: 'advanced-python-automation',
    title: 'Advanced Python for Automation',
    category: 'Gen AI & Python',
    categoryLabel: 'Python Track',
    isInternship: false,
    duration: '2 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '⚡ Python Track',
    description: 'Automate repetitive workflows, scrape dynamic data, build autonomous AI bot scripts, and boost developer velocity by 10x.',
    skills: ['Python 3', 'Web Scraping', 'Automation Bots', 'APIs', 'AI Scripting'],
  },
  {
    id: 'sql-database-mastery',
    slug: 'sql-database-mastery',
    title: 'SQL & Database Architecture Mastery',
    category: 'Data & SQL',
    categoryLabel: 'Database Track',
    isInternship: false,
    duration: '2 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🗄️ Database Core',
    description: 'Master high-scale SQL queries, indexing strategies, normalization, database performance tuning, and robust PostgreSQL schemas.',
    skills: ['PostgreSQL', 'Complex Queries', 'Indexing', 'Schema Design', 'Optimization'],
  },
  {
    id: 'react-python-fullstack',
    slug: 'react-python-fullstack',
    title: 'React + Python Full Stack Development',
    category: 'Full Stack',
    categoryLabel: 'Full Stack Track',
    isInternship: false,
    duration: '6 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🐍 Python Web',
    description: 'Develop modern, high-performance web applications with React frontend and Python FastAPI/Django backend with native AI integrations.',
    skills: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AI Integrations'],
  },
  {
    id: 'web-designing',
    slug: 'web-designing',
    title: 'Web Designing with Modern CSS',
    category: 'Design',
    categoryLabel: 'Design Track',
    isInternship: false,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '✨ Creative Tech',
    description: 'Craft pixel-perfect responsive layouts, micro-animations, modern glassmorphism web interfaces, and clean component structures.',
    skills: ['Modern CSS', 'CSS Grid', 'Micro-Animations', 'Responsive UI', 'Figma to Code'],
  },
  {
    id: 'java-backend-spring-boot',
    slug: 'java-backend-spring-boot',
    title: 'Java Backend with Spring Boot',
    category: 'Full Stack',
    categoryLabel: 'Enterprise Track',
    isInternship: false,
    duration: '2 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '⚙️ Enterprise Backend',
    description: 'Build enterprise microservices with Spring Boot, Spring Security, Hibernate ORM, Docker containers, and high-performance REST APIs.',
    skills: ['Java 21', 'Spring Boot', 'Hibernate', 'Microservices', 'Docker'],
  },
  {
    id: 'advanced-react-architecture',
    slug: 'advanced-react-architecture',
    title: 'Advanced React Architecture',
    category: 'Full Stack',
    categoryLabel: 'Frontend Track',
    isInternship: false,
    duration: '2 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '⚛️ Frontend Mastery',
    description: 'Deep dive into state management, performance profiling, custom hooks, Next.js modern architecture, and scalable design libraries.',
    skills: ['React 19', 'Next.js', 'State Machines', 'Performance', 'Custom Hooks'],
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud DevOps & CI/CD Pipelines',
    category: 'Full Stack',
    categoryLabel: 'Cloud Track',
    isInternship: false,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '☁️ Cloud Architecture',
    description: 'Master Docker containers, Kubernetes orchestration, AWS/GCP cloud, GitHub Actions CI/CD automation, and Terraform IaC.',
    skills: ['Docker', 'Kubernetes', 'AWS & GCP', 'CI/CD Pipelines', 'Terraform'],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development (Flutter & React Native)',
    category: 'Full Stack',
    categoryLabel: 'Mobile Track',
    isInternship: false,
    duration: '4 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '📱 Cross-Platform',
    description: 'Build cross-platform iOS and Android mobile apps with Flutter and React Native, device APIs, and app store deployment.',
    skills: ['Flutter', 'React Native', 'Firebase', 'State Management', 'App Store Deploy'],
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    category: 'Full Stack',
    categoryLabel: 'Security Track',
    isInternship: false,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🛡️ Security Core',
    description: 'Master network penetration testing, OWASP Top 10 vulnerabilities, Linux hardening, and ethical hacking defensive strategies.',
    skills: ['Network Security', 'OWASP Top 10', 'Burp Suite', 'Linux Hardening', 'Pen Testing'],
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    category: 'Design',
    categoryLabel: 'Media Track',
    isInternship: false,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '🎬 Creative Media',
    description: 'Premiere Pro, After Effects, cinematic cuts, color grading, dynamic reels production, and AI video workflow acceleration.',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Sound Design', 'Showreels'],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing with AI Tools',
    category: 'Gen AI & Python',
    categoryLabel: 'Marketing Track',
    isInternship: false,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '📈 Growth Marketing',
    description: 'SEO growth strategies, performance marketing, Meta Ads, and AI-powered copy and campaign automation.',
    skills: ['SEO Strategy', 'Meta & Google Ads', 'AI Copywriting', 'Analytics', 'Conversion'],
  },
  {
    id: 'business-analyst',
    slug: 'business-analyst',
    title: 'Business Analyst & Agile Management',
    category: 'Full Stack',
    categoryLabel: 'Agile Track',
    isInternship: false,
    duration: '3 Months',
    mode: 'Online / In-Person Labs',
    batch: 'Batch Starts Soon',
    badge: '📋 Agile Leadership',
    description: 'Bridge the gap between business and tech. Requirements elicitation, user stories, Jira, sprint planning, and functional specifications.',
    skills: ['User Stories', 'Jira Sprints', 'SQL Analytics', 'Stakeholders', 'Case Studies'],
  },
];

const CATEGORIES = [
  'All Programs',
  'Internships',
  'Full Stack',
  'Gen AI & Python',
  'Data & SQL',
  'Design',
];

export default function TracksSection() {
  const [selectedFilter, setSelectedFilter] = useState('All Programs');
  const [showAll, setShowAll] = useState(false);

  const filteredCourses = selectedFilter === 'All Programs'
    ? ALL_COURSES
    : ALL_COURSES.filter((c) => c.category === selectedFilter || (selectedFilter === 'Internships' && c.isInternship));

  // Show top 6 initially if 'All Programs' is selected, or all if showAll is true or category is filtered
  const displayedCourses = (selectedFilter === 'All Programs' && !showAll)
    ? filteredCourses.slice(0, 6)
    : filteredCourses;

  const hasMoreThanSix = selectedFilter === 'All Programs' && filteredCourses.length > 6;

  return (
    <section className="section karka-courses-clean-section" id="tracks" aria-labelledby="tracks-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="section-label">✦ EXPLORE OUR PROGRAMS ✦</span>
          <h2 id="tracks-heading" className="section-title">
            Industry-Aligned <span className="highlight">Courses &amp; Internships</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', maxWidth: '680px' }}>
            Practical commercial internships and specialized skill-building tracks. Master modern tech stacks with ₹0 upfront tuition.
          </p>
          <div className="divider" style={{ marginTop: '1.25rem' }} />
        </div>

        {/* Clean Filter Tabs Bar */}
        <div className="karka-clean-filter-bar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedFilter(cat);
                  setShowAll(false);
                }}
                className={`clean-filter-pill ${isActive ? 'active' : ''}`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Status Text (Showing Top 6 or All 18) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary-dark, #2B004F)' }}>
              {selectedFilter === 'All Programs' 
                ? (showAll ? `All ${filteredCourses.length} Career Tracks` : `Top 6 Most Popular Tracks`) 
                : `${selectedFilter} Programs (${filteredCourses.length})`}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--color-muted)' }}>
              {selectedFilter === 'All Programs' && !showAll
                ? 'Showing our 6 most popular flagship career tracks.'
                : `Browsing ${displayedCourses.length} specialized career programs.`}
            </p>
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', background: '#ede2f8', padding: '4px 12px', borderRadius: '100px' }}>
            Showing {displayedCourses.length} of {filteredCourses.length} Tracks
          </span>
        </div>

        {/* Clean Unified Course Cards Grid */}
        <div className="clean-course-cards-grid">
          <AnimatePresence mode="popLayout">
            {displayedCourses.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="clean-course-card"
              >
                {/* Top Badge & Category */}
                <div className="clean-card-header">
                  <span className={`clean-type-tag ${c.isInternship ? 'internship' : 'course'}`}>
                    {c.isInternship ? <Briefcase size={13} /> : <BookOpen size={13} />}
                    {c.badge || c.categoryLabel}
                  </span>
                  <span className="clean-academy-tag">Karka Academy</span>
                </div>

                {/* Course Title */}
                <h3 className="clean-course-title">
                  {c.title}
                </h3>

                {/* Course Description */}
                <p className="clean-course-description">
                  {c.description}
                </p>

                {/* Meta details (Duration, Mode, Batch) */}
                <div className="clean-meta-details-row">
                  <span className="clean-meta-item">
                    <Clock size={14} className="meta-icon" />
                    <strong>{c.duration}</strong>
                  </span>
                  <span className="clean-meta-item">
                    <Globe size={14} className="meta-icon" />
                    <span>{c.mode}</span>
                  </span>
                  <span className="clean-meta-item highlight-batch">
                    <Calendar size={14} className="meta-icon" />
                    <span>{c.batch}</span>
                  </span>
                </div>

                {/* Skills tags */}
                <div className="clean-skills-tags-row">
                  {c.skills.map((skill, i) => (
                    <span key={i} className="clean-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="clean-card-action">
                  <Link
                    to={`/courses/${c.slug}`}
                    className="clean-card-btn"
                    aria-label={`Explore course details for ${c.title}`}
                  >
                    <span>Explore Course Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* "View all 18" Interactive Action Button */}
        {hasMoreThanSix && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '3.5rem' }}>
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
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
                  : `View All 18 Career Tracks (${filteredCourses.length - 6} More)`}
              </span>
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}

        {/* Bottom Clean Callout */}
        <div className="clean-courses-bottom-cta">
          <div className="bottom-cta-text">
            <h4>Not sure which track is right for your background?</h4>
            <p>Our senior engineering mentors will review your resume and help you choose the best roadmap.</p>
          </div>
          <div className="bottom-cta-actions">
            <Link to="/contact" className="btn btn-primary btn-md glow-btn">
              <span>Book Free 1:1 Mentorship Call →</span>
            </Link>
            <Link to="/courses" className="btn btn-secondary btn-md">
              <span>Explore Course Directory (18 Tracks)</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
