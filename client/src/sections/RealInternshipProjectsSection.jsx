import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

import genomeImg from '../assets/images/internships/project_genome.jpg';
import logisticsImg from '../assets/images/internships/project_logistics.jpg';
import docmindImg from '../assets/images/internships/project_docmind.jpg';
import carepulseImg from '../assets/images/internships/project_carepulse.jpg';
import finflowImg from '../assets/images/internships/project_finflow.jpg';
import skillmatrixImg from '../assets/images/internships/project_skillmatrix.jpg';

export const INTERNSHIP_PROJECTS = [
  {
    id: 'genome-ai',
    title: 'Genome AI — PR Reviewer & Sprint Copilot',
    tagline: 'Automated GitHub PR code reviews and AI sprint velocity tracking for agile enterprise teams.',
    category: 'Commercial GenAI Studio',
    partner: 'AgileTribers Studio',
    image: genomeImg,
    badge: 'Live in Production',
    techStack: ['React 19', 'FastAPI', 'Claude 3.5', 'Docker'],
  },
  {
    id: 'logisticspro',
    title: 'LogisticsPro — Real-time Fleet Telemetry Hub',
    tagline: 'Real-time GPS vehicle tracking and automated warehouse dispatch telemetry across South India.',
    category: 'Enterprise IoT & Logistics',
    partner: 'Novac Partner Network',
    image: logisticsImg,
    badge: 'Enterprise Tested',
    techStack: ['Node.js', 'WebSockets', 'Leaflet MapGL', 'Redis'],
  },
  {
    id: 'docmind-rag',
    title: 'DocMind RAG — Legal & Compliance Query Engine',
    tagline: 'High-accuracy semantic search engine querying 100,000+ pages of legal contracts with zero hallucinations.',
    category: 'FinTech Document AI',
    partner: 'Karka AI Research Lab',
    image: docmindImg,
    badge: 'Cloud Deployed',
    techStack: ['Next.js', 'pgvector', 'FastAPI', 'Llama-3'],
  },
  {
    id: 'carepulse-health',
    title: 'CarePulse — Telehealth Queue & Smart Clinical Records',
    tagline: 'Real-time clinical queue management portal with automated patient reminders and telehealth consultations.',
    category: 'Healthcare Cloud Tech',
    partner: 'Healthcare Client Network',
    image: carepulseImg,
    badge: 'Client Prototype',
    techStack: ['React 19', 'Express.js', 'PostgreSQL', 'WebRTC'],
  },
  {
    id: 'finflow-neo',
    title: 'FinFlow Neo — Transaction Fraud Detection & Risk Scoring',
    tagline: 'AI-powered real-time transaction fraud detection and automated anti-money laundering risk scoring engine.',
    category: 'CyberSecurity & FinTech',
    partner: 'Fintech Solutions Studio',
    image: finflowImg,
    badge: 'Partner Validated',
    techStack: ['Python', 'Scikit-Learn', 'FastAPI', 'React'],
  },
  {
    id: 'skillmatrix-360',
    title: 'SkillMatrix 360 — In-Browser Code Sandbox & Testing',
    tagline: 'In-browser technical assessment sandbox with automated code execution and instant grading.',
    category: 'DevTools & Testing',
    partner: 'EdTech Partner Lab',
    image: skillmatrixImg,
    badge: 'Live Sandbox',
    techStack: ['React 19', 'Docker Sandbox', 'Node.js', 'Go'],
  },
];

export default function RealInternshipProjectsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth auto-rotation carousel every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % INTERNSHIP_PROJECTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? INTERNSHIP_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % INTERNSHIP_PROJECTS.length);
  };

  // Helper to calculate circular relative offset (-2 to +3)
  const getOffset = (idx) => {
    let diff = idx - currentIdx;
    if (diff > 3) diff -= 6;
    if (diff < -2) diff += 6;
    return diff;
  };

  const getCardStyle = (idx) => {
    const diff = getOffset(idx);

    if (diff === 0) {
      return {
        transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
        zIndex: 10,
        opacity: 1,
        pointerEvents: 'auto',
      };
    }
    if (diff === 1) {
      return {
        transform: 'translateX(58%) translateZ(-140px) rotateY(-16deg) scale(0.86)',
        zIndex: 5,
        opacity: 0.72,
        cursor: 'pointer',
      };
    }
    if (diff === -1) {
      return {
        transform: 'translateX(-58%) translateZ(-140px) rotateY(16deg) scale(0.86)',
        zIndex: 5,
        opacity: 0.72,
        cursor: 'pointer',
      };
    }
    if (diff === 2) {
      return {
        transform: 'translateX(102%) translateZ(-280px) rotateY(-28deg) scale(0.72)',
        zIndex: 2,
        opacity: 0.35,
        cursor: 'pointer',
      };
    }
    if (diff === -2) {
      return {
        transform: 'translateX(-102%) translateZ(-280px) rotateY(28deg) scale(0.72)',
        zIndex: 2,
        opacity: 0.35,
        cursor: 'pointer',
      };
    }
    return {
      transform: 'translateX(0%) translateZ(-400px) scale(0.5)',
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
    };
  };

  return (
    <section
      className="section"
      id="internship-projects"
      aria-labelledby="internship-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="section-label">✦ 100% Client-Tested Experience</span>
          <h2 id="internship-title" className="section-title">
            Real Internship Projects
          </h2>
          <p className="section-subtitle">
            Zero toy projects. Every Karka student ships commercial production software with client code reviews.
          </p>
          <div className="divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* 3D Smooth Rotating Carousel Slider */}
        <div className="internship-carousel-3d-wrap">
          {/* Previous Arrow Button */}
          <button
            className="carousel-rot-btn rot-prev-btn"
            onClick={prevSlide}
            aria-label="Previous Internship Project"
            title="Previous project"
          >
            <ChevronLeft size={28} />
          </button>

          {/* 3D Stage with 6 Slides */}
          <div className="carousel-3d-stage">
            {INTERNSHIP_PROJECTS.map((p, idx) => {
              const diff = getOffset(idx);
              const isActive = diff === 0;

              return (
                <div
                  key={p.id}
                  className={`carousel-3d-slide ${isActive ? 'is-active-slide' : ''}`}
                  style={getCardStyle(idx)}
                  onClick={() => {
                    if (!isActive) setCurrentIdx(idx);
                  }}
                >
                  <div className="project-slide-card">
                    {/* Mockup Preview with Ultra-Smooth Rounded Corners */}
                    <div className="project-slide-img-box">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="project-slide-img"
                        loading="lazy"
                      />
                      <div className="project-slide-badges">
                        <span className="badge badge-green">
                          <Sparkles size={12} /> {p.badge}
                        </span>
                        <span className="project-partner-pill">
                          {p.partner}
                        </span>
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="project-slide-info">
                      <div className="project-slide-header-row">
                        <span className="project-cat-chip">{p.category}</span>
                        <span className="project-slide-num">0{idx + 1} / 06</span>
                      </div>

                      <h3 className="project-slide-title">{p.title}</h3>

                      {/* Single Line Short Tagline as Requested */}
                      <p className="project-slide-tagline">
                        “{p.tagline}”
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="project-slide-tech-row">
                        {p.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="project-tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            className="carousel-rot-btn rot-next-btn"
            onClick={nextSlide}
            aria-label="Next Internship Project"
            title="Next project"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Carousel Slide Indicators & Counter */}
        <div className="carousel-controls-bottom">
          <div className="carousel-dots-list">
            {INTERNSHIP_PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                className={`carousel-dot-btn ${idx === currentIdx ? 'active' : ''}`}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to project slide ${idx + 1}: ${p.title}`}
              >
                <span className="dot-inner"></span>
              </button>
            ))}
          </div>
          <span className="carousel-slide-counter">
            0{currentIdx + 1} / 06
          </span>
        </div>

        {/* Bottom Action CTA */}
        <div className="internship-bottom-cta">
          <p>Want verified commercial projects on your resume before interview day?</p>
          <Link to="/enroll" className="btn btn-primary btn-md glow-btn">
            <span>Join Next Internship Cohort</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
