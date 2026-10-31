import React from 'react';
import Hero from '../sections/Hero';
import PartnersMarquee from '../components/PartnersMarquee';
import WhyKarka from '../sections/WhyKarka';
import AudienceSection from '../sections/AudienceSection';
import TracksSection from '../sections/TracksSection';
import PayAfterPlacement from '../sections/PayAfterPlacement';
import StudentPlacementsSection from '../sections/StudentPlacementsSection';
import RealInternshipProjectsSection from '../sections/RealInternshipProjectsSection';
import InstagramEvidenceSection from '../sections/InstagramEvidenceSection';
import TrackQuiz from '../sections/TrackQuiz';
import TestimonialSection from '../sections/TestimonialSection';
import FAQSection from '../sections/FAQSection';
import ContactSection from '../sections/ContactSection';
import FinalCTA from '../sections/FinalCTA';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Home() {
  usePageMeta({
    title: 'Learn with AI. Build Real Projects. Pay After Placement',
    description: 'Empowering the next generation of developers with GenAI-infused tech education, real commercial client projects, and placement-focused mentorship. Pay after you get hired.',
    canonical: 'https://karka.academy/',
  });

  return (
    <div className="home-page-container">
      <Hero />
      <PartnersMarquee />
      <AudienceSection />
      <WhyKarka />
      <TracksSection />
      <PayAfterPlacement />
      <StudentPlacementsSection />
      <RealInternshipProjectsSection />
      <InstagramEvidenceSection />
      <TrackQuiz />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </div>
  );
}
