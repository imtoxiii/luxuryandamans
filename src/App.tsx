import { Suspense, lazy } from 'react';
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
// Static destination pages for SEO-friendly unique content per page
const CellularJail = lazy(() => import('./pages/destinations/cellular-jail'));
const RossIsland = lazy(() => import('./pages/destinations/ross-island'));
const NorthBayIsland = lazy(() => import('./pages/destinations/north-bay-island'));
const RadhanagarBeach = lazy(() => import('./pages/destinations/radhanagar-beach'));
const ElephantBeach = lazy(() => import('./pages/destinations/elephant-beach'));
const BharatpurBeach = lazy(() => import('./pages/destinations/bharatpur-beach'));
const NaturalBridge = lazy(() => import('./pages/destinations/natural-bridge'));
const LimestoneCaves = lazy(() => import('./pages/destinations/limestone-caves'));
const MudVolcano = lazy(() => import('./pages/destinations/mud-volcano'));
const RossSmithIslands = lazy(() => import('./pages/destinations/ross-smith-islands'));
const SaddlePeak = lazy(() => import('./pages/destinations/saddle-peak'));
const CinqueIsland = lazy(() => import('./pages/destinations/cinque-island'));
const BarrenIsland = lazy(() => import('./pages/destinations/barren-island'));
// Destination category hub pages
const PortBlairDestinations = lazy(() => import('./pages/destinations/PortBlairDestinations'));
const HavelockDestinations = lazy(() => import('./pages/destinations/HavelockDestinations'));
const NeilDestinations = lazy(() => import('./pages/destinations/NeilDestinations'));
const BaratangDestinations = lazy(() => import('./pages/destinations/BaratangDestinations'));
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
const BioluminescenceKayakingPage = lazy(() => import('./pages/experiences/bioluminescence-kayaking'));
const SeaWalkPage = lazy(() => import('./pages/experiences/sea-walk'));
const GameFishingPage = lazy(() => import('./pages/experiences/game-fishing'));
const SnorkelingPage = lazy(() => import('./pages/experiences/snorkeling'));
const TrekkingPage = lazy(() => import('./pages/experiences/trekking'));
const CulturalToursPage = lazy(() => import('./pages/experiences/cultural-tours'));

function App() {
  const { isTransitioning, displayLocation } = usePageTransition();
  useScrollTop();

  return (
    <>
      {/* Page Content - shows the displayLocation (delayed during transition) */}
      <Suspense fallback={<PageTransition />}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          {/* Category hub pages */}
          <Route path="/destinations/port-blair-destinations" element={<PortBlairDestinations />} />
          <Route path="/destinations/havelock-destinations" element={<HavelockDestinations />} />
          <Route path="/destinations/neil-destinations" element={<NeilDestinations />} />
          <Route path="/destinations/baratang-destinations" element={<BaratangDestinations />} />
          {/* Static routes first for specific destinations */}
          <Route path="/destinations/cellular-jail" element={<CellularJail />} />
          <Route path="/destinations/ross-island" element={<RossIsland />} />
          <Route path="/destinations/north-bay-island" element={<NorthBayIsland />} />
          <Route path="/destinations/radhanagar-beach" element={<RadhanagarBeach />} />
          <Route path="/destinations/elephant-beach" element={<ElephantBeach />} />
          <Route path="/destinations/bharatpur-beach" element={<BharatpurBeach />} />
          <Route path="/destinations/natural-bridge" element={<NaturalBridge />} />
          <Route path="/destinations/limestone-caves" element={<LimestoneCaves />} />
          <Route path="/destinations/mud-volcano" element={<MudVolcano />} />
          <Route path="/destinations/ross-smith-islands" element={<RossSmithIslands />} />
          <Route path="/destinations/saddle-peak" element={<SaddlePeak />} />
          <Route path="/destinations/cinque-island" element={<CinqueIsland />} />
          <Route path="/destinations/barren-island" element={<BarrenIsland />} />

          {/* Fallback dynamic route */}
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
          <Route path="/experiences/bioluminescence-kayaking" element={<BioluminescenceKayakingPage />} />
          <Route path="/experiences/sea-walk" element={<SeaWalkPage />} />
          <Route path="/experiences/game-fishing" element={<GameFishingPage />} />
          <Route path="/experiences/snorkeling" element={<SnorkelingPage />} />
          <Route path="/experiences/trekking" element={<TrekkingPage />} />
          <Route path="/experiences/cultural-tours" element={<CulturalToursPage />} />
          
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