import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Video, 
  Search, 
  MoreVertical, 
  CheckCheck, 
  Smile, 
  Send, 
  Lock,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import mascotImg from '../assets/images/mascot.png';
import karkaLogo from '../assets/images/karka_logo.png';

const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Priya',
    role: 'Frontend Developer',
    quote: "Karka's hands-on approach completely changed my career path. The mentors are incredibly supportive and the curriculum is up-to-date with industry standards.",
    stars: 5,
    time: '10:14 AM',
    color: '#8b5cf6',
    initials: 'P',
    reactions: { '❤️': 38, '🔥': 24, '👏': 15 },
  },
  {
    id: 2,
    name: 'Arun',
    role: 'React Developer',
    quote: 'I loved the ReactJS training! The live projects were challenging but very rewarding. A huge shoutout to the placement team.',
    stars: 5,
    time: '10:18 AM',
    color: '#06b6d4',
    initials: 'A',
    reactions: { '🚀': 42, '👏': 19, '💯': 16 },
  },
  {
    id: 3,
    name: 'Vikram',
    role: 'Full Stack Engineer',
    quote: 'Hands down the best decision I made for my career. The project-based learning really helped me build confidence.',
    stars: 5,
    time: '10:23 AM',
    color: '#3b82f6',
    initials: 'V',
    reactions: { '💯': 31, '🔥': 27, '❤️': 18 },
  },
  {
    id: 4,
    name: 'Rahul',
    role: 'Python & AI Developer',
    quote: 'I was new to programming, but the Python course here made it so easy to understand. The instructors take the time to explain every concept clearly.',
    stars: 5,
    time: '10:29 AM',
    color: '#10b981',
    initials: 'R',
    reactions: { '❤️': 29, '👏': 16, '🚀': 21 },
  },
  {
    id: 5,
    name: 'Karthik',
    role: 'Data Analyst',
    quote: 'The transition from non-tech to tech was smooth thanks to Karka. The SQL and Data Analytics bootcamp was comprehensive and practical.',
    stars: 5,
    time: '10:35 AM',
    color: '#f59e0b',
    initials: 'K',
    reactions: { '🚀': 35, '🔥': 22, '💯': 19 },
  },
  {
    id: 6,
    name: 'Divya',
    role: 'Associate Software Engineer',
    quote: 'Amazing support system. Even after placement, the mentors are available to help. Truly grateful for Karka.',
    stars: 5,
    time: '10:42 AM',
    color: '#ec4899',
    initials: 'D',
    reactions: { '❤️': 45, '🤩': 20, '👏': 28 },
  },
  {
    id: 7,
    name: 'Sneha',
    role: 'Java & Spring Boot Engineer',
    quote: "The depth of knowledge in the advanced Java and Spring Boot modules is impressive. It's not just about coding; they teach you how to think like a software engineer.",
    stars: 5,
    time: '10:48 AM',
    color: '#a855f7',
    initials: 'S',
    reactions: { '💯': 39, '👏': 18, '🔥': 25 },
  },
  {
    id: 8,
    name: 'Anitha',
    role: 'Software Engineer',
    quote: "It's a fantastic place to learn. The environment is positive and motivates you to keep learning. The technicians are very knowledgeable.",
    stars: 5,
    time: '10:54 AM',
    color: '#14b8a6',
    initials: 'A',
    reactions: { '🔥': 33, '❤️': 25, '🚀': 17 },
  },
  {
    id: 9,
    name: 'Sandeep',
    role: 'Cloud Associate',
    quote: 'The mock interviews prepared me so well for the real thing. I cracked my first interview thanks to the rigorous training.',
    stars: 5,
    time: '10:59 AM',
    color: '#f97316',
    initials: 'S',
    reactions: { '🚀': 50, '💯': 41, '👏': 30 },
  },
];

const AVAILABLE_REACTIONS = ['❤️', '🔥', '🚀', '👏', '💯', '🤩'];

export default function TestimonialSection() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [userReactions, setUserReactions] = useState({});
  const [activePickerId, setActivePickerId] = useState(null);
  const [customMessages, setCustomMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingName, setTypingName] = useState('Karka Mascot');
  const chatScrollRef = useRef(null);

  // Toggle emoji reaction
  const handleReaction = (reviewId, emoji) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id !== reviewId) return r;
        const currentCount = r.reactions[emoji] || 0;
        const hasReacted = userReactions[`${reviewId}-${emoji}`];
        const newCount = hasReacted ? Math.max(0, currentCount - 1) : currentCount + 1;
        return {
          ...r,
          reactions: {
            ...r.reactions,
            [emoji]: newCount,
          },
        };
      })
    );

    setUserReactions((prev) => ({
      ...prev,
      [`${reviewId}-${emoji}`]: !prev[`${reviewId}-${emoji}`],
    }));
    setActivePickerId(null);
  };

  // Handle visitor sending a message
  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'You',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true,
    };

    setCustomMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Trigger Mascot Reply after user sends
    setIsTyping(true);
    setTypingName('Karka Mascot 🤖');

    setTimeout(() => {
      setIsTyping(false);
      setCustomMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'Karka Mascot 🤖 (Admin)',
          text: '“Your turn!” Ready to build your dream tech career with ₹0 upfront tuition? Start your journey with the Karka Alumni tribe today! 🚀',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMascot: true,
        },
      ]);
    }, 1200);
  };

  // Auto-scroll on new messages
  useEffect(() => {
    if (customMessages.length > 0 && chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [customMessages, isTyping]);

  return (
    <section className="section bg-grid testimonial-whatsapp-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="section-label">✦ STUDENT VOICES · GEN-Z EDITION ✦</span>
          <h2 id="testimonials-heading" className="section-title">
            The <span className="highlight">Karka Alumni</span> Group Chat
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', maxWidth: '680px' }}>
            Live uncensored reviews from real students in Nagercoil who landed full-time tech roles with Pay After Placement.
          </p>
          <div className="divider" style={{ marginTop: '1.25rem' }} />
        </div>

        {/* WhatsApp Group Phone / Desktop Window Mockup */}
        <div className="whatsapp-window-wrapper">
          {/* WhatsApp Header Bar */}
          <div className="whatsapp-header-bar">
            <div className="whatsapp-header-left">
              <div className="whatsapp-back-btn">
                <ArrowLeft size={19} />
              </div>
              <div className="whatsapp-group-avatar-wrap">
                <img src={karkaLogo} alt="Karka Logo" width="36" height="36" loading="lazy" decoding="async" className="whatsapp-group-avatar" />
                <span className="whatsapp-online-dot" />
              </div>
              <div className="whatsapp-group-meta">
                <div className="whatsapp-group-name">
                  <span>Karka Alumni</span>
                  <span className="whatsapp-verified-badge" title="Verified Alumni Group">✓</span>
                </div>
                <div className="whatsapp-group-status">
                  500+ members · 9 online · tapping reviews
                </div>
              </div>
            </div>

            <div className="whatsapp-header-actions">
              <button className="whatsapp-icon-btn" title="Group Video Call" aria-label="Video Call">
                <Video size={19} />
              </button>
              <button className="whatsapp-icon-btn" title="Group Voice Call" aria-label="Voice Call">
                <Phone size={18} />
              </button>
              <button className="whatsapp-icon-btn" title="Search Reviews" aria-label="Search">
                <Search size={18} />
              </button>
              <button className="whatsapp-icon-btn" title="More options" aria-label="Menu">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* Chat Canvas / Messages Area */}
          <div className="whatsapp-chat-canvas" ref={chatScrollRef}>
            {/* End-to-End Encryption / Verified Notice */}
            <div className="whatsapp-notice-pill">
              <Lock size={12} style={{ display: 'inline', marginRight: '6px' }} />
              Messages are verified reviews from placed Karka students across Nagercoil, Chennai & Bangalore.
            </div>

            {/* Date Separator */}
            <div className="whatsapp-date-divider">
              <span>TODAY</span>
            </div>

            {/* Render Student Reviews as WhatsApp Chat Bubbles */}
            {reviews.map((rev) => {
              const isPickerOpen = activePickerId === rev.id;

              return (
                <div key={rev.id} className="whatsapp-message-row">
                  {/* Sender Avatar */}
                  <div
                    className="whatsapp-sender-avatar"
                    style={{ backgroundColor: rev.color }}
                  >
                    {rev.initials}
                  </div>

                  {/* Message Bubble */}
                  <div className="whatsapp-bubble">
                    {/* Sender Name + Role */}
                    <div className="whatsapp-bubble-sender-row">
                      <span className="whatsapp-bubble-sender-name" style={{ color: rev.color }}>
                        ~ {rev.name}
                      </span>
                      <span className="whatsapp-bubble-sender-role">
                        {rev.role}
                      </span>
                    </div>

                    {/* Star Rating Badge */}
                    <div className="whatsapp-bubble-stars">
                      {'★'.repeat(rev.stars)}
                    </div>

                    {/* Quote Text */}
                    <p className="whatsapp-bubble-text">
                      "{rev.quote}"
                    </p>

                    {/* Timestamp & Double Checkmarks */}
                    <div className="whatsapp-bubble-meta">
                      <span className="whatsapp-bubble-time">{rev.time}</span>
                      <span className="whatsapp-bubble-checkmarks">
                        <CheckCheck size={14} color="#53bdeb" />
                      </span>
                    </div>

                    {/* Emoji Reaction Chips Row */}
                    <div className="whatsapp-reactions-bar">
                      {Object.entries(rev.reactions)
                        .filter(([_, count]) => count > 0)
                        .map(([emoji, count]) => {
                          const hasReacted = userReactions[`${rev.id}-${emoji}`];
                          return (
                            <button
                              key={emoji}
                              className={`whatsapp-reaction-chip ${hasReacted ? 'active' : ''}`}
                              onClick={() => handleReaction(rev.id, emoji)}
                              title={`Reacted by ${count} students`}
                            >
                              <span>{emoji}</span>
                              <span className="reaction-count">{count}</span>
                            </button>
                          );
                        })}

                      {/* Add Reaction Button */}
                      <button
                        className="whatsapp-add-reaction-btn"
                        onClick={() => setActivePickerId(isPickerOpen ? null : rev.id)}
                        title="Add reaction"
                      >
                        <Smile size={14} />
                      </button>

                      {/* Floating Emoji Picker Popover */}
                      <AnimatePresence>
                        {isPickerOpen && (
                          <motion.div
                            className="whatsapp-floating-picker"
                            initial={{ scale: 0.8, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {AVAILABLE_REACTIONS.map((emoji) => (
                              <button
                                key={emoji}
                                className="picker-emoji-btn"
                                onClick={() => handleReaction(rev.id, emoji)}
                              >
                                {emoji}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Custom Sent Messages by Visitor */}
            {customMessages.map((msg) => (
              <div
                key={msg.id}
                className={`whatsapp-message-row ${msg.isSelf ? 'row-self' : 'row-mascot'}`}
              >
                {!msg.isSelf && (
                  <div className="whatsapp-mascot-avatar-small">
                    <img src={mascotImg} alt="Mascot Avatar" width="32" height="32" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className={`whatsapp-bubble ${msg.isSelf ? 'bubble-self' : 'bubble-mascot-interactive'}`}>
                  <div className="whatsapp-bubble-sender-row">
                    <span className="whatsapp-bubble-sender-name" style={{ color: msg.isSelf ? '#075e54' : '#5A189A' }}>
                      {msg.sender}
                    </span>
                  </div>
                  <p className="whatsapp-bubble-text">{msg.text}</p>
                  <div className="whatsapp-bubble-meta">
                    <span className="whatsapp-bubble-time">{msg.time}</span>
                    <span className="whatsapp-bubble-checkmarks">
                      <CheckCheck size={14} color="#53bdeb" />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                className="whatsapp-message-row row-typing"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="whatsapp-mascot-avatar-small">
                  <img src={mascotImg} alt="Mascot Avatar" width="32" height="32" loading="lazy" decoding="async" />
                </div>
                <div className="whatsapp-bubble bubble-typing">
                  <span className="typing-name">{typingName} is typing</span>
                  <div className="typing-dots">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Final Featured Mascot Reply Bubble: “Your turn?” */}
            <motion.div
              className="whatsapp-message-row row-mascot-grand"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="whatsapp-mascot-avatar-large">
                <img src={mascotImg} alt="Karka AI Mascot" width="56" height="56" loading="lazy" decoding="async" />
              </div>

              <div className="whatsapp-bubble bubble-mascot-grand">
                <div className="whatsapp-bubble-sender-row">
                  <span className="whatsapp-bubble-sender-name" style={{ color: '#5A189A' }}>
                    Karka AI Mascot ⚡ (Admin)
                  </span>
                  <span className="whatsapp-admin-badge">OFFICIAL</span>
                </div>

                <div className="mascot-grand-content">
                  <h4 className="mascot-grand-heading">
                    “Your turn?” 🚀
                  </h4>
                  <p className="mascot-grand-desc">
                    Over <strong>500+ ambitious learners</strong> from Nagercoil have transformed into high-paid software engineers. You start learning with <strong>₹0 upfront tuition</strong>—you only pay once you get hired!
                  </p>

                  {/* Quick Action Buttons inside Chat Bubble */}
                  <div className="mascot-chat-cta-row">
                    <Link to="/enroll" className="btn btn-primary btn-sm glow-btn">
                      <span>Claim Your Spot (₹0 Upfront) →</span>
                    </Link>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      <span>Book Free 1:1 Lab Visit 📍</span>
                    </Link>
                  </div>
                </div>

                <div className="whatsapp-bubble-meta">
                  <span className="whatsapp-bubble-time">Just now</span>
                  <span className="whatsapp-bubble-checkmarks">
                    <CheckCheck size={14} color="#53bdeb" />
                  </span>
                </div>

                {/* Mascot Reaction Chips */}
                <div className="whatsapp-reactions-bar">
                  <button className="whatsapp-reaction-chip active">
                    <span>⚡</span>
                    <span className="reaction-count">500+ Placed</span>
                  </button>
                  <button className="whatsapp-reaction-chip active">
                    <span>₹0</span>
                    <span className="reaction-count">Upfront Tuition</span>
                  </button>
                  <button className="whatsapp-reaction-chip active">
                    <span>🎓</span>
                    <span className="reaction-count">100% Practical</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* WhatsApp Interactive Input Bar at Bottom */}
          <form className="whatsapp-input-bar" onSubmit={handleSendMessage}>
            <button
              type="button"
              className="whatsapp-input-icon-btn"
              title="Add Emoji"
              onClick={() => setInputText((prev) => prev + ' 🔥 ')}
            >
              <Smile size={20} />
            </button>

            <input
              type="text"
              className="whatsapp-text-input"
              placeholder="Type a message or cheer for the alumni... (Press Enter)"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <button
              type="submit"
              className="whatsapp-send-btn"
              title="Send message"
              disabled={!inputText.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
