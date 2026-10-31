import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/video/hero1.mp4';

const STATS = [
  { num: '500+', label: 'Students Placed', icon: '🚀' },
  { num: '4.9 ★', label: 'Student Rating (200+)', icon: '⭐' },
  { num: '100%', label: 'Live Client Internships', icon: '💼' },
  { num: '₹0 Upfront', label: 'Pay After You Get Hired', icon: '💎' },
];

/**
 * Animated counter that counts up smoothly from 0 to target value
 */
function CounterNum({ value, startTrigger }) {
  const [display, setDisplay] = useState(() => {
    if (value.includes('500')) return '0+';
    if (value.includes('4.9')) return '0.0 ★';
    if (value.includes('100%')) return '0%';
    return value;
  });

  useEffect(() => {
    if (!startTrigger) {
      if (value.includes('500')) setDisplay('0+');
      else if (value.includes('4.9')) setDisplay('0.0 ★');
      else if (value.includes('100%')) setDisplay('0%');
      else setDisplay(value);
      return;
    }

    if (value.includes('500')) {
      const target = 500;
      const duration = 1700;
      const start = performance.now();
      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplay(`${Math.floor(ease * target)}+`);
        if (progress < 1) requestAnimationFrame(frame);
        else setDisplay('500+');
      };
      requestAnimationFrame(frame);
    } else if (value.includes('4.9')) {
      const target = 4.9;
      const duration = 1700;
      const start = performance.now();
      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplay(`${(ease * target).toFixed(1)} ★`);
        if (progress < 1) requestAnimationFrame(frame);
        else setDisplay('4.9 ★');
      };
      requestAnimationFrame(frame);
    } else if (value.includes('100%')) {
      const target = 100;
      const duration = 1700;
      const start = performance.now();
      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplay(`${Math.floor(ease * target)}%`);
        if (progress < 1) requestAnimationFrame(frame);
        else setDisplay('100%');
      };
      requestAnimationFrame(frame);
    } else {
      setDisplay(value);
    }
  }, [value, startTrigger]);

  return <span>{display}</span>;
}

export default function Hero() {
  const videoRef = useRef(null);
  // Stage 0: Avatar enters from left and runs to right (text hidden)
  // Stage 1: Avatar reaches right side -> Badge and Line 1 appear in slow-motion
  // Stage 2: Typewriter effect on "Pay After You Get Hired." with last word in lime
  // Stage 3: Subtitle, perks, CTAs, and counting stat cards reveal
  const [stage, setStage] = useState(0);

  // Typewriter state for "Pay After You Get Hired."
  const prefixTarget = "Pay After You Get ";
  const suffixTarget = "Hired.";
  const fullLength = prefixTarget.length + suffixTarget.length;
  const [typeIndex, setTypeIndex] = useState(0);

  useEffect(() => {
    // If user prefers reduced motion, skip introductory delay immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage(3);
      setTypeIndex(fullLength);
      return;
    }

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }

    const t1 = setTimeout(() => setStage((s) => Math.max(s, 1)), 2400);
    const t2 = setTimeout(() => setStage((s) => Math.max(s, 2)), 3000);
    const t3 = setTimeout(() => setStage((s) => Math.max(s, 3)), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [fullLength]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const t = videoRef.current.currentTime;
    if (t >= 4.0) {
      setStage(3);
    } else if (t >= 2.9) {
      setStage((s) => Math.max(s, 2));
    } else if (t >= 2.3) {
      setStage((s) => Math.max(s, 1));
    }
  };

  // Run typewriter effect when Stage >= 2
  useEffect(() => {
    if (stage < 2) {
      setTypeIndex(0);
      return;
    }

    if (typeIndex < fullLength) {
      const timer = setTimeout(() => {
        setTypeIndex((i) => i + 1);
      }, 42);
      return () => clearTimeout(timer);
    }
  }, [stage, typeIndex, fullLength]);

  const handleReplay = () => {
    if (videoRef.current) {
      setStage(0);
      setTypeIndex(0);
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  // Compute typed substrings
  const typedPrefix = prefixTarget.slice(0, Math.min(typeIndex, prefixTarget.length));
  const typedSuffix =
    typeIndex > prefixTarget.length
      ? suffixTarget.slice(0, typeIndex - prefixTarget.length)
      : '';
  const isTyping = stage >= 2 && typeIndex < fullLength;

  return (
    <section className="hero" id="hero" aria-label="Karka Academy Hero">
      {/* 3D Mascot Background Video covering entire hero section */}
      <div className="hero-video-bg-container" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-mascot-video"
          src={heroVideo}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setStage(3)}
        />
        {/* Soft bottom blend to pale lavender background */}
        <div className="hero-video-fade-bottom" />

        {/* Replay intro pill button */}
        {stage >= 3 && (
          <button
            type="button"
            className="hero-replay-btn"
            onClick={handleReplay}
            title="Replay mascot intro animation"
            aria-label="Replay mascot intro"
          >
            <span>↻</span> Replay Intro
          </button>
        )}
      </div>

      <div className="container hero-container">
        <div className="hero-content-col">

          {/* Heading with Bubble Font & Typewriter effect */}
          <h1 className="hero-headline">
            <span
              className="hero-headline-line1"
              style={{
                opacity: stage >= 1 ? 1 : 0,
                transform: stage >= 1 ? 'translateX(0)' : 'translateX(-32px)',
                transition: 'opacity 1.3s cubic-bezier(0.16, 1, 0.3, 1), transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Skills That Build Your Future.
            </span>

            {/* Typewriter Line with Last Word Highlighted in Lime */}
            <span
              className="hero-headline-line2"
              style={{
                opacity: stage >= 2 ? 1 : 0,
                transform: stage >= 2 ? 'translateX(0)' : 'translateX(-32px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                display: 'block',
                minHeight: '1.25em',
              }}
            >
              <span>{typedPrefix}</span>
              {typedSuffix && (
                <span className="hero-lime-highlight">
                  {typedSuffix}
                </span>
              )}
              {isTyping && <span className="typewriter-cursor">|</span>}
            </span>
          </h1>

          {/* Subtitle, Perks & CTA: Appear in slow-motion when avatar settles on right */}
          <div
            className="hero-revealed-details"
            style={{
              opacity: stage >= 3 ? 1 : 0,
              transform: stage >= 3 ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              pointerEvents: stage >= 3 ? 'auto' : 'none',
            }}
          >
            <p className="hero-subtitle">
              Empowering ambitious developers and creatives with production-grade GenAI stacks,
              1:1 industry mentors, and guaranteed Pay After Placement in Nagercoil.
            </p>

            {/* Core Offer Perks (Clean typography, no box, no emoji) */}
            <div className="hero-perks-list">
              <div className="hero-perk-item">
                <span><strong>Zero Upfront Tuition Fees</strong> (100% Risk Free)</span>
              </div>
              <div className="hero-perk-item">
                <span><strong>Real Client Projects</strong> &amp; Verified GitHub Proof</span>
              </div>
              <div className="hero-perk-item">
                <span><strong>Daily 1:1 In-Person Lab Mentorship</strong> in Nagercoil</span>
              </div>
            </div>

            {/* Vibrant CTA Buttons */}
            <div className="hero-cta-row">
              <Link to="/enroll" className="btn btn-primary btn-lg glow-btn">
                <span>Start Your Journey (₹0 Upfront)</span>
                <span className="cta-arrow">→</span>
              </Link>
              <Link to="/courses" className="btn btn-secondary btn-lg">
                Explore 18+ Courses
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Stats Bar: Counts up from 0 when entering view */}
        <div
          className="hero-stats-row"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="hero-stat-card">
              <span className="hero-stat-icon">{s.icon}</span>
              <div className="hero-stat-info">
                <div className="hero-stat-num">
                  <CounterNum value={s.num} startTrigger={stage >= 3} />
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
