import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import images from assets/images
import payAfterImg from '../assets/images/pay after placement.png';
import genAiImg from '../assets/images/genai.png';
import projectImg from '../assets/images/project.png';
import mentorImg from '../assets/images/industry mentor.png';
import placementImg from '../assets/images/placement focused.png';
import infinityImg from '../assets/images/infinity.png';

const PILLARS = [
  {
    id: 1,
    num: '01',
    shortTitle: 'Pay After Hired',
    color: '#5A189A',
    title: 'Pay After You Get Hired',
    tagline: 'Start with ₹0 Upfront Tuition — Pay Only After Securing a Tech Job',
    image: payAfterImg,
    badge: 'ZERO RISK TUITION',
    description: (
      <>
        Traditional institutes demand heavy upfront fees regardless of your job outcome. At Karka, you start learning with <strong>₹0 upfront tuition</strong> because we carry the <strong>financial risk</strong>—you only pay your course fees <strong>after you successfully secure a tech job</strong>.
      </>
    ),
    points: [
      <><strong>₹0 Upfront Tuition:</strong> Pay nothing until you secure your tech job.</>,
      <><strong>Shared Financial Risk:</strong> We carry the risk and invest in your outcome.</>,
      <><strong>Transparent Terms:</strong> Simple agreement with zero hidden charges.</>,
    ],
    ctaText: 'Learn About Pay After Placement →',
    ctaLink: '/pay-after-placement',
  },
  {
    id: 2,
    num: '02',
    shortTitle: 'AI-First Curriculum',
    color: '#7b2cbf',
    title: 'An "AI-First" Future-Proof Curriculum',
    tagline: 'Build with Claude, ChatGPT, Cursor & AI Automation from Day One',
    image: genAiImg,
    badge: 'AI-FIRST CURRICULUM',
    description: (
      <>
        Instead of wasting time on decade-old coding syntax, Karka natively integrates <strong>Generative AI workflows</strong>, <strong>Prompt Engineering</strong>, and <strong>AI Automation</strong> across all our tracks. You will learn how to build software and design interfaces with AI, exactly how <strong>modern tech companies build today</strong>.
      </>
    ),
    points: [
      <><strong>Native AI Workflows:</strong> Daily hands-on mastery with Claude, ChatGPT & Cursor.</>,
      <><strong>Modern Tech Stack:</strong> Skip legacy syntax and learn how top companies build today.</>,
      <><strong>10x Developer Speed:</strong> Build, test, and ship production software faster with AI.</>,
    ],
    ctaText: 'Explore AI Curriculum →',
    ctaLink: '/courses',
  },
  {
    id: 3,
    num: '03',
    shortTitle: 'Live Internships',
    color: '#00897b',
    title: 'Live Internships Over Paper Certificates',
    tagline: 'Work on Real Client Projects & Graduate with a Live Deployable Portfolio',
    image: projectImg,
    badge: '100% PRODUCTION CODE',
    description: (
      <>
        Employers ignore generic print certificates; they <strong>hire proof</strong>. Karka functions as a <strong>hands-on, AI-powered internship platform</strong> where you work on <strong>real client projects</strong>, graduating with a <strong>live, deployable portfolio</strong> and an official <strong>Internship Certificate</strong>.
      </>
    ),
    points: [
      <><strong>Real Client Work:</strong> Build live commercial products, not dummy tutorials.</>,
      <><strong>Live Deployments:</strong> Graduate with a live GitHub portfolio recruiters can test.</>,
      <><strong>Official Certificate:</strong> Credible internship experience on your resume.</>,
    ],
    ctaText: 'View Project Showcase →',
    ctaLink: '/courses',
  },
  {
    id: 4,
    num: '04',
    shortTitle: 'On-Site Mentorship',
    color: '#d81b60',
    title: 'Continuous On-Site Expert Mentorship',
    tagline: 'Daily Physical Labs & Direct Face-to-Face Guidance from Senior Engineers',
    image: mentorImg,
    badge: 'DAILY LAB SUPPORT',
    description: (
      <>
        You gain <strong>daily access to fully equipped physical labs</strong> and <strong>direct, face-to-face guidance</strong> from <strong>industry mentors</strong> who track your progress and solve your technical bugs in real time, ensuring you <strong>never get stuck or lose learning momentum</strong>.
      </>
    ),
    points: [
      <><strong>Physical Labs in Nagercoil:</strong> High-speed workstations and focused environment.</>,
      <><strong>Daily 1:1 Desk Guidance:</strong> Senior tech leads review your code in person.</>,
      <><strong>Real-Time Bug Solving:</strong> Never get stuck waiting for online forum replies.</>,
    ],
    ctaText: 'Meet Our Mentors & Campus →',
    ctaLink: '/contact',
  },
  {
    id: 5,
    num: '05',
    shortTitle: 'Hiring Pipelines',
    color: '#0288d1',
    title: 'Direct Regional & Global Hiring Pipelines',
    tagline: 'Bypass Crowded Job Portals with Direct Hiring Partner Access',
    image: placementImg,
    badge: 'EXCLUSIVE HIRING NETWORK',
    description: (
      <>
        We completely bypass crowded online job portals by sending your completed portfolio <strong>directly to our network of hiring partners</strong>, local tech companies, and startup ecosystems that look to us to <strong>fill their open roles immediately</strong>.
      </>
    ),
    points: [
      <><strong>Direct to Hiring Managers:</strong> Bypass crowded job boards and resume filters.</>,
      <><strong>40+ Hiring Partners:</strong> Regional and global tech firms seeking Karka grads.</>,
      <><strong>Portfolio-First Matching:</strong> Hired based on verified code and live apps.</>,
    ],
    ctaText: 'Explore Placement Records →',
    ctaLink: '/placements',
  },
  {
    id: 6,
    num: '06',
    shortTitle: 'Job Readiness',
    color: '#5a189a',
    title: 'The 4-Pillar Job Readiness System',
    tagline: 'Core Tech Stack + AI Speed + Business Communication + Mock Interviews',
    image: infinityImg,
    badge: '4-PILLAR ACCELERATOR',
    description: (
      <>
        We transform you into a <strong>complete professional</strong> by systematically building your <strong>core technical stack</strong>, optimizing your speed using <strong>AI tools</strong>, training you in <strong>corporate business communication</strong>, and mastering <strong>technical mock interviews</strong>.
      </>
    ),
    points: [
      <><strong>Core Stack & AI Speed:</strong> Master modern full-stack engineering accelerated by AI tools.</>,
      <><strong>Corporate Communication:</strong> Professional client demos, standups & email etiquette.</>,
      <><strong>Technical Mock Rounds:</strong> Unlimited 1:1 live interview practice with senior engineers.</>,
    ],
    ctaText: 'Join Job Readiness Program →',
    ctaLink: '/enroll',
  },
];

export default function WhyKarka() {
  // Active expanded panel: defaults to Pillar 1, changes on hover or tap
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="section why-karka-accordion-section" id="why-karka" aria-labelledby="why-karka-heading">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="section-label">✦ WHY KARKA HITS DIFFERENT ✦</span>
          <h2 id="why-karka-heading" className="section-title">
            Why Karka?
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', maxWidth: '680px' }}>
            Six reasons ambitious learners in Nagercoil choose Karka over every other institute.
          </p>
          <div className="divider" style={{ marginTop: '1.25rem' }} />
        </div>

        {/* Expanding Accordion Panels: Six tall panels side by side */}
        <div className="why-karka-panels-wrapper">
          {PILLARS.map((p) => {
            const isExpanded = activeId === p.id;

            return (
              <div
                key={p.id}
                className={`accordion-strip-panel ${isExpanded ? 'panel-expanded' : 'panel-collapsed'}`}
                onMouseEnter={() => setActiveId(p.id)}
                onClick={() => setActiveId(p.id)}
                role="region"
                aria-expanded={isExpanded}
                aria-label={p.title}
              >
                {/* Collapsed State View: Light shade of theme with Number at Top, Vertical Title, NO avatar, NO emoji below */}
                {!isExpanded && (
                  <div className="strip-collapsed-inner">
                    <div className="strip-num-badge" style={{ backgroundColor: p.color }}>
                      {p.num}
                    </div>
                    <div className="strip-vertical-title">
                      {p.shortTitle}
                    </div>
                  </div>
                )}

                {/* Expanded State View: Fully Visible Image at Top (Outer Box Removed) + Context Details */}
                {isExpanded && (
                  <motion.div
                    className="strip-expanded-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {/* Hero Image at Top: Fully visible, outer box removed, natural soft glow backdrop */}
                    <div className="stack-hero-image-wrap">
                      <div
                        className="stack-hero-image-backdrop"
                        style={{
                          background: `radial-gradient(circle, ${p.color}26 0%, rgba(185, 245, 0, 0.12) 45%, transparent 72%)`,
                        }}
                      />
                      <img
                        src={p.image}
                        alt={p.title}
                        className="stack-hero-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Context Details beneath Image */}
                    <div className="expanded-text-details">
                      <div className="expanded-tag-row">
                        <span className="pillar-num-pill" style={{ background: p.color, color: '#ffffff' }}>
                          PILLAR {p.num}
                        </span>
                        <span className="pillar-badge-text">{p.badge}</span>
                      </div>

                      <h3 className="expanded-pillar-title">
                        {p.title}
                      </h3>

                      <p className="expanded-pillar-tagline" style={{ color: p.color }}>
                        {p.tagline}
                      </p>

                      <p className="expanded-pillar-desc">
                        {p.description}
                      </p>

                      {/* Simple Note / Highlights Grid with Bolded Keywords */}
                      <div className="expanded-highlights-grid">
                        {p.points.map((pt, i) => (
                          <div key={i} className="highlight-item">
                            <span className="highlight-check">✓</span>
                            <span className="highlight-text">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Action Button */}
                      <div className="expanded-action-row">
                        <a href={p.ctaLink} className="btn btn-primary btn-md glow-btn">
                          <span>{p.ctaText}</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
