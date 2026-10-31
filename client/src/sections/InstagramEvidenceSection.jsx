import React from 'react';
import { CheckCircle2, Heart, MessageCircle, Send, Bookmark, ShieldCheck, Play } from 'lucide-react';

import karkaAvatarImg from '../assets/images/instagram/perfect_avatar.jpg';
import agiletribersImg from '../assets/images/instagram/real_post_agiletribers.jpg';
import seniorOfficeImg from '../assets/images/instagram/real_post_senior_office.jpg';
import csiEventImg from '../assets/images/instagram/real_post_csi_event.jpg';
import hiringDriveImg from '../assets/images/instagram/real_post_hiring_drive.jpg';
import xavierEventImg from '../assets/images/instagram/real_post_xavier_event.jpg';
import digitribersImg from '../assets/images/instagram/real_post_digitribers.jpg';

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export const REAL_INSTAGRAM_POSTS = [
  {
    id: 'post-agiletribers',
    type: 'Partnership Announcement',
    image: agiletribersImg,
    tag: 'INTERNSHIP PARTNER',
    title: 'Karka Infini AI × AgileTribers Onboarding',
    likes: '1,532',
    comments: '94',
    date: '3d ago',
    isReel: false,
  },
  {
    id: 'post-hiring-drive',
    type: 'Walk-In Recruitment Drive',
    image: hiringDriveImg,
    tag: 'WE ARE HIRING',
    title: 'Walk-In Drive: Software, AI & Mentors',
    likes: '2,410',
    comments: '168',
    date: '5d ago',
    isReel: false,
  },
  {
    id: 'post-csi-event',
    type: 'Campus Tech Event',
    image: csiEventImg,
    tag: 'CAMPUS HIGHLIGHTS',
    title: 'Karka Infini AI at CSI Institute of Technology',
    likes: '1,894',
    comments: '112',
    date: '1w ago',
    isReel: false,
  },
  {
    id: 'post-senior-office',
    type: 'Studio Culture Reel',
    image: seniorOfficeImg,
    tag: 'STUDIO LIFE REEL',
    title: 'That One Senior in Office 😅',
    likes: '3,840',
    comments: '245',
    date: '1w ago',
    isReel: true,
  },
  {
    id: 'post-xavier-event',
    type: 'College Tech Fest',
    image: xavierEventImg,
    tag: 'CAMPUS HIGHLIGHTS',
    title: 'Event Highlights at St. Xavier’s Catholic College',
    likes: '2,150',
    comments: '138',
    date: '2w ago',
    isReel: false,
  },
  {
    id: 'post-digitribers',
    type: 'Media Partner Onboarding',
    image: digitribersImg,
    tag: 'MEDIA PARTNER',
    title: 'DigiTribers (Own The Digital) Partner Onboarding',
    likes: '1,420',
    comments: '82',
    date: '2w ago',
    isReel: false,
  },
];

const FLOWING_INSTAGRAM_POSTS = [
  ...REAL_INSTAGRAM_POSTS,
  ...REAL_INSTAGRAM_POSTS,
];

export default function InstagramEvidenceSection() {
  return (
    <section className="section insta-feed-dark-section" id="instagram-evidence" aria-labelledby="insta-evidence-title">
      <div className="container">
        {/* Section Header with Instagram Vibe */}
        <div className="text-center mb-4">
          <div className="insta-eyebrow-pill">
            <InstagramIcon size={15} />
            <span>OFFICIAL CAMPUS FEED</span>
          </div>
          <h2 id="insta-evidence-title" className="section-title insta-title-glow">
            Life at the Academy: <span className="insta-gradient-text">Live Projects, Hiring Drives &amp; Tech Fests</span>
          </h2>
          <p className="section-subtitle insta-subtitle-dim">
            Direct from our live social stream. Explore partner onboardings with <strong>AgileTribers</strong>, walk-in recruitment drives, and student tech fests across Tamil Nadu.
          </p>
          <div className="insta-header-cta-row">
            <a
              href="https://www.instagram.com/karka.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-insta-gradient"
            >
              <InstagramIcon size={18} /> Follow @karka.ai on Instagram ↗
            </a>
          </div>
        </div>

        {/* Flowing Window Posts Marquee */}
        <div className="insta-flow-window-wrap">
          <div className="insta-flow-badge-hint dark-hint">
            <span className="live-dot-pulse"></span>
            <span>Official Campus Social Stream</span>
          </div>
 
          <div className="insta-flow-window" aria-label="Flowing Instagram Posts Feed">
            <div className="insta-flow-track">
              {FLOWING_INSTAGRAM_POSTS.map((post, idx) => (
                <div key={`${post.id}-${idx}`} className="insta-flow-card">
                  {/* Authentic Instagram Post Header */}
                  <div className="post-header-bar">
                    <div className="post-author-info">
                      <div className="post-author-avatar-ring">
                        <img
                          src={karkaAvatarImg}
                          alt="karka.ai avatar"
                          width="34"
                          height="34"
                          loading="lazy"
                          decoding="async"
                          className="post-author-avatar-img"
                        />
                      </div>
                      <div>
                        <div className="post-author-name">
                          karka.ai <CheckCircle2 size={13} fill="#0095F6" color="#fff" />
                        </div>
                        <span className="post-time-ago">Nagercoil • {post.date}</span>
                      </div>
                    </div>
                    <div className="post-header-right">
                      <span className="post-tag-badge">{post.tag}</span>
                      <span className="post-dots-icon">•••</span>
                    </div>
                  </div>

                  {/* Real Post Image with Overlay */}
                  <div className="post-image-container">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="post-main-img"
                      loading="lazy"
                      decoding="async"
                    />
                    {post.isReel && (
                      <div className="reel-badge-indicator" title="Instagram Reel">
                        <Play size={12} fill="#ffffff" /> REEL
                      </div>
                    )}
                    <div className="post-hover-overlay">
                      <div className="overlay-metrics">
                        <span>
                          <Heart size={16} fill="#ffffff" /> {post.likes}
                        </span>
                        <span>
                          <MessageCircle size={16} fill="#ffffff" /> {post.comments}
                        </span>
                      </div>
                      <a
                        href="https://www.instagram.com/karka.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-on-insta-pill"
                      >
                        View Post on Instagram ↗
                      </a>
                    </div>
                  </div>

                  {/* Authentic Instagram Action Bar */}
                  <div className="post-flow-footer">
                    <div className="post-insta-action-icons">
                      <div className="action-icons-left">
                        <Heart size={18} fill="#ED4956" color="#ED4956" className="insta-action-svg liked" />
                        <MessageCircle size={18} color="#e5e7eb" className="insta-action-svg" />
                        <Send size={17} color="#e5e7eb" className="insta-action-svg" />
                      </div>
                      <Bookmark size={17} color="#e5e7eb" className="insta-action-svg" />
                    </div>
                    <div className="post-flow-likes-row">
                      <span className="post-bold-likes">{post.likes} likes</span>
                      <span className="post-view-tag">karka.ai</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust & Verification Callout */}
        <div className="instagram-trust-callout dark-callout">
          <div className="callout-badge-icon">
            <ShieldCheck size={28} color="#B9F500" />
          </div>
          <div className="callout-text-wrap">
            <h4 className="callout-heading">Want to verify any placement offer letter or student certificate?</h4>
            <p className="callout-desc">
              For complete transparency, all placement offer letters, recruitment drive dates, and student internship demos are archived in our Instagram highlights. Send a direct message to <strong>@karka.ai</strong> for any batch queries.
            </p>
          </div>
          <a
            href="https://www.instagram.com/karka.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-insta-gradient btn-md"
          >
            Open @karka.ai on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
