import React from 'react';
import ContactSection from '../sections/ContactSection';
import FAQSection from '../sections/FAQSection';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Schedule Free Career Call | Mentorship & Campus',
    description: 'Get in touch with Karka AI Academy mentors in Nagercoil, Tamil Nadu. Book a free 1-on-1 career guidance call or visit our lab.',
  });

  return (
    <div style={{ paddingTop: '5rem' }}>
      <ContactSection />
      <FAQSection />
    </div>
  );
}
