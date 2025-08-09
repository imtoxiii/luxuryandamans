import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useScrollTop } from './hooks/useScrollTop';
import { usePageTransition } from './hooks/usePageTransition';
import PageTransition from './components/LoadingSpinner';
import Home from './pages/Home'; // Keep Home page eager for faster initial load
import ChatWidget from './components/ChatWidget';
import PrefetchManager from './components/PrefetchManager';

// Lazy load non-critical pages
const DestinationsPage = lazy(() => import('./pages/Destinations'));
const PackagesPage = lazy(() => import('./pages/Packages'));
const ExperiencesPage = lazy(() => import('./pages/Experiences'));
const ContactPage = lazy(() => import('./pages/Contact'));
const Enquiry = lazy(() => import('./components/Enquiry'));
const PricingCalculatorPage = lazy(() => import('./pages/PricingCalculator'));
const DestinationDetail = lazy(() => import('./pages/destinations/[slug]'));
const PackageDetailPage = lazy(() => import('./pages/packages/[slug]'));
const LocationPage = lazy(() => import('./pages/locations/[slug]'));
const GuidePage = lazy(() => import('./pages/About'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/blog/[slug]'));
const TravelGuide = lazy(() => import('./pages/TravelGuide'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Lazy load experience pages
const LuxuryResortsPage = lazy(() => import('./pages/experiences/luxury-resorts'));
const ScubaDivingPage = lazy(() => import('./pages/experiences/scuba-diving'));
const IslandHoppingPage = lazy(() => import('./pages/experiences/island-hopping'));
const SunsetCruisesPage = lazy(() => import('./pages/experiences/sunset-cruises'));
const WellnessRetreatsPage = lazy(() => import('./pages/experiences/wellness-retreats'));
const RomanticGetawaysPage = lazy(() => import('./pages/experiences/romantic-getaways'));
const FamilyAdventuresPage = lazy(() => import('./pages/experiences/family-adventures'));

function App() {
  const { isTransitioning, displayLocation } = usePageTransition();
  useScrollTop();

  useEffect(() => {
    // Future: place light, one-time boot-time logic here if needed
  }, []);

  return (
    <>
      {/* Page Content - shows the displayLocation (delayed during transition) */}
      <Suspense fallback={<PageTransition />}>
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
      </Suspense>
      <ChatWidget />
      <PrefetchManager />
      
      {/* Transition walls - appear over the page content */}
      {isTransitioning && <PageTransition />}
    </>
  );
}

export default App;