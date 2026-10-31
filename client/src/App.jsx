import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import FloatingCTA from './components/FloatingCTA';
import ErrorBoundary from './components/ErrorBoundary';

// Front page is imported directly so it loads instantly with zero loading screen
import Home from './pages/Home';

// Secondary pages are loaded on demand to keep bundle size light
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const PlacementsPage = lazy(() => import('./pages/PlacementsPage'));
const PayAfterPlacementPage = lazy(() => import('./pages/PayAfterPlacementPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EnrollPage = lazy(() => import('./pages/EnrollPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app-layout">
      {/* Keyboard Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <ScrollToTop />
      <CursorGlow />
      <Navbar />

      <main id="main-content" tabIndex="-1" className="main-content" style={{ outline: 'none' }}>
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              {/* Home page renders immediately with NO loading screen */}
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/for-school-students" element={<CoursesPage defaultAudience="school-students" />} />
              <Route path="/for-college-students" element={<CoursesPage defaultAudience="college-students" />} />
              <Route path="/for-graduates" element={<CoursesPage defaultAudience="graduates" />} />
              <Route path="/for-professionals" element={<CoursesPage defaultAudience="professionals" />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/success-stories" element={<PlacementsPage />} />
              <Route path="/pay-after-placement" element={<PayAfterPlacementPage />} />
              <Route path="/faq" element={<PayAfterPlacementPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/enroll" element={<EnrollPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
}
