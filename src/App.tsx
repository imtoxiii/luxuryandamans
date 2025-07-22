import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useScrollTop } from './hooks/useScrollTop';
import { usePageTransition } from './hooks/usePageTransition';
import PageTransition from './components/LoadingSpinner';
import Home from './pages/Home';
import DestinationsPage from './pages/Destinations';
import PackagesPage from './pages/Packages';
import ExperiencesPage from './pages/Experiences';
import ContactPage from './pages/Contact';
import Enquiry from './components/Enquiry';
import LuxuryResortsPage from './pages/experiences/luxury-resorts';
import ScubaDivingPage from './pages/experiences/scuba-diving';
import IslandHoppingPage from './pages/experiences/island-hopping';
import SunsetCruisesPage from './pages/experiences/sunset-cruises';
import WellnessRetreatsPage from './pages/experiences/wellness-retreats';
import PricingCalculatorPage from './pages/PricingCalculator';
import ChatWidget from './components/ChatWidget';
import DestinationDetail from './pages/destinations/[slug]';
import PackageDetailPage from './pages/packages/[slug]';
import LocationPage from './pages/locations/[slug]';
import GuidePage from './pages/About';
import BlogPage from './pages/Blog';
import BlogPost from './pages/blog/[slug]';
import TravelGuide from './pages/TravelGuide';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import RomanticGetawaysPage from './pages/experiences/romantic-getaways';
import FamilyAdventuresPage from './pages/experiences/family-adventures';
import SEO from './components/SEO';

function App() {
  const { isTransitioning, displayLocation } = usePageTransition();
  const [isMobile, setIsMobile] = useState(false);
  
  useScrollTop();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Page Content - shows the displayLocation (delayed during transition) */}
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />
        <Route path="/locations/:slug" element={<LocationPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:slug" element={<PackageDetailPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/about" element={<Navigate to="/guide" replace />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/calculator" element={<PricingCalculatorPage />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Experience Detail Pages */}
        <Route path="/experiences/luxury-resorts" element={<LuxuryResortsPage />} />
        <Route path="/experiences/luxury-beach-resorts" element={<Navigate to="/experiences/luxury-resorts" replace />} />
        <Route path="/experiences/scuba-diving" element={<ScubaDivingPage />} />
        <Route path="/experiences/island-hopping" element={<IslandHoppingPage />} />
        <Route path="/experiences/sunset-cruises" element={<SunsetCruisesPage />} />
        <Route path="/experiences/wellness-retreats" element={<WellnessRetreatsPage />} />
        <Route path="/experiences/romantic-getaways" element={<RomanticGetawaysPage />} />
        <Route path="/experiences/family-adventures" element={<FamilyAdventuresPage />} />
        
        {/* 404 Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ChatWidget />
      
      {/* Transition walls - appear over the page content */}
      {isTransitioning && <PageTransition />}
    </>
  );
}

export default App;