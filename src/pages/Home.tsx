import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star, Calendar, CreditCard } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import FeaturedPackages from '../components/FeaturedPackages';
import PopularIslands from '../components/PopularIslands';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CardSlider from '../components/CardSlider';
import ExperienceCard from '../components/ExperienceCard';
import SectionIntro from '../components/SectionIntro';
import {
  HOME_HERO_DESKTOP,
  HOME_HERO_MOBILE,
  HOME_HERO_DESKTOP_DIMENSIONS,
} from '../lib/heroImages';
import { removeLoader } from '../lib/loader';

// Prerender bot (Puppeteer) must capture the hero fully visible — skip animations
const heroInstant =
  typeof navigator !== 'undefined' && (navigator as { webdriver?: boolean }).webdriver === true;

// Masked line reveal for the headline
const heroLine = {
  hidden: { y: '112%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.13 },
  }),
};

// Staggered fade-up for badge / copy / CTAs
const heroFade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.14 },
  }),
};

// Marquee band content — repeated twice for a seamless loop
const marqueeItems = [
  'Radhanagar Beach',
  'Scuba Diving',
  'Havelock Island',
  'Bioluminescence',
  'Neil Island',
  'Island Hopping',
  'Sunset Cruises',
  'Cellular Jail',
];

const Home = () => {
  const location = useLocation();

  // Hero entrance is choreographed with the preloader's exit sweep:
  // - preloader present  -> wait for its `luxal:reveal` event
  // - no preloader (prerendered / repeat SPA nav) -> animate immediately
  const [revealed, setRevealed] = useState(
    () => heroInstant || (typeof document !== 'undefined' && !document.getElementById('loading-skeleton'))
  );

  // Scroll choreography: the hero image is pinned behind the page while the
  // white "sheet" below slides over it. Hero copy drifts up and fades faster
  // than the scroll for depth.
  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 600], [0, -160]);
  const heroContentOpacity = useTransform(scrollY, [0, 440], [1, 0]);
  const heroImgScale = useTransform(scrollY, [0, 900], [1, 1.12]);

  // Gentle parallax on the CTA background image
  const ctaRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  });
  const ctaImgY = useTransform(ctaProgress, [0, 1], ['-10%', '10%']);

  // Hero is preloaded in index.html — let the preloader play its exit and
  // start the hero choreography when its reveal sweep begins.
  useEffect(() => {
    const onReveal = () => setRevealed(true);
    window.addEventListener('luxal:reveal', onReveal);

    removeLoader();
    if (!document.getElementById('loading-skeleton')) setRevealed(true);

    // Failsafe: never leave the hero hidden
    const failsafe = window.setTimeout(() => setRevealed(true), 4500);

    return () => {
      window.removeEventListener('luxal:reveal', onReveal);
      window.clearTimeout(failsafe);
    };
  }, []);

  const heroState = revealed ? 'show' : 'hidden';
  const heroInitial = heroInstant ? false : 'hidden';

  const experiences = [
    {
      title: "Budget Beach Resorts",
      description: "Affordable luxury accommodation starting from ₹2,000/night",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/luxury-resorts"
    },
    {
      title: "Scuba Diving",
      description: "Explore vibrant coral reefs and marine life",
      image: "https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg",
      link: "/experiences/scuba-diving"
    },
    {
      title: "Island Hopping",
      description: "Discover hidden beaches and secluded coves",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/island-hopping"
    },
    {
      title: "Sunset Cruises",
      description: "Unforgettable evenings on the Andaman Sea",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/sunset-cruises"
    },
    {
      title: "Wellness Retreats",
      description: "Rejuvenate your mind, body, and soul",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/wellness-retreats"
    }
  ];



  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <SEO
        title="Andaman Tour Packages 2026 | From ₹14,999"
        description="Port Blair travel agency for Andaman tour packages from ₹14,999. Honeymoon, family & budget trips to Havelock, Neil & Port Blair. Ferries locked, 4.9★ from 1200+ travellers."
        pathname={location.pathname}
        includeSiteSchemas={true}
        keywords="andaman tour packages, andaman tour packages 2026, best travel agency in andaman, best andaman travel agent, andaman travel agency port blair, andaman honeymoon packages, andaman family packages, andaman packages from delhi, andaman packages from mumbai, andaman packages from bangalore, andaman packages from chennai, havelock island packages, neil island tour, port blair tour, scuba diving andaman, andaman trip cost, budget andaman packages, luxury andaman trip, best time to visit andaman, best andaman tour operator"
        targetAudience="all"
        faqData={[
          {
            question: "How much does an Andaman tour package cost?",
            answer: "Andaman tour packages start from ₹14,999 per person for 4 nights/5 days budget packages. Standard packages cost ₹20,000-30,000, premium packages ₹35,000-50,000, and luxury packages ₹60,000+ per person. This includes accommodation, meals, ferry tickets, airport transfers, and sightseeing. Call Luxury Andamans at +91 62975 76826 for personalized quotes."
          },
          {
            question: "What is the best time to book Andaman packages?",
            answer: "The best time to visit Andaman is October to May. Book 2-3 months in advance for peak season (Dec-Jan) to get better hotel rates and ferry availability. Monsoon (June-September) offers 30-40% discounts but some water activities may be closed."
          },
          {
            question: "What is included in Andaman tour packages?",
            answer: "Most Andaman packages include: Airport transfers, inter-island ferry tickets (Port Blair-Havelock-Neil), accommodation with breakfast, sightseeing tours, and guide. Premium packages also include water activities like scuba diving, snorkeling, and sea walking. Flights are usually not included."
          },
          {
            question: "Which is the best Andaman package for couples?",
            answer: "For couples, we recommend our 5N/6D Honeymoon Package starting at ₹35,000/person. It includes romantic stays in Havelock beach resorts, private candlelight dinner, couple spa, snorkeling at Elephant Beach, and sunset cruise. Perfect for honeymoon and anniversary celebrations."
          },
          {
            question: "Which is the best travel agency in Andaman?",
            answer: "A good Andaman travel agency is based in Port Blair, books named ferry operators (Makruzz/Nautika), gives GST invoices, and has someone on the islands if a boat cancels. Luxury Andamans is a local Port Blair operator — call +91 62975 76826 for a written itinerary, not a generic brochure."
          }
        ]}
      />

      <Header />

      {/* Hero — butterflies sit in the bright center; copy lives top-left / bottom so they stay visible */}
      <section className="relative h-screen min-h-[640px] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft edge vignettes only — leave the butterfly center open */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#041018]/55 via-transparent to-[#041018]/70" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#041018]/45 via-transparent to-transparent md:from-[#041018]/50" />
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ scale: heroImgScale }}
          >
            <motion.div
              className="absolute inset-0 will-change-transform"
              initial={heroInstant ? false : { scale: 1.14 }}
              animate={{ scale: revealed ? 1.04 : 1.14 }}
              transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={HOME_HERO_MOBILE} type="image/webp" />
                <img
                  src={HOME_HERO_DESKTOP}
                  alt="Blue Morpho butterflies over crystal turquoise Andaman water"
                  className="w-full h-full object-cover"
                  width={HOME_HERO_DESKTOP_DIMENSIONS.width}
                  height={HOME_HERO_DESKTOP_DIMENSIONS.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{ objectPosition: 'center' }}
                />
              </picture>
            </motion.div>
          </motion.div>
        </div>

        {/* Top copy — clear of the butterflies */}
        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-36 lg:pt-40"
          style={{ y: heroContentY, opacity: heroContentOpacity }}
        >
          <div className="max-w-xl md:max-w-2xl text-left">
            <motion.div
              variants={heroFade}
              custom={0}
              initial={heroInitial}
              animate={heroState}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white mb-5 md:mb-7 shadow-lg"
            >
              <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase">
                #1 Rated Andaman Agency
              </span>
            </motion.div>

            <h1 className="mb-4 md:mb-5">
              <span className="sr-only">
                Andaman Tour Packages 2026 — Honeymoon, Family & Luxury Trips from ₹14,999
              </span>
              <span aria-hidden="true" className="block">
                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    variants={heroLine}
                    custom={0}
                    initial={heroInitial}
                    animate={heroState}
                    className="block will-change-transform font-serif font-semibold text-white text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight drop-shadow-[0_2px_24px_rgba(4,16,24,0.45)]"
                  >
                    Paradise
                  </motion.span>
                </span>
                <span className="block overflow-hidden mt-1 md:mt-2">
                  <motion.span
                    variants={heroLine}
                    custom={1}
                    initial={heroInitial}
                    animate={heroState}
                    className="block will-change-transform font-script text-white/95 text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl leading-none drop-shadow-[0_2px_20px_rgba(4,16,24,0.4)]"
                  >
                    Found Here
                  </motion.span>
                </span>
              </span>
            </h1>

            <motion.p
              variants={heroFade}
              custom={2}
              initial={heroInitial}
              animate={heroState}
              className="text-base md:text-lg text-white/90 max-w-md leading-relaxed font-light drop-shadow-md"
            >
              Curated Andaman journeys — turquoise lagoons, quiet beaches, and luxury stays made for you.
            </motion.p>
          </div>
        </motion.div>

        {/* Spacer keeps butterflies visible in the middle of the frame */}
        <div className="flex-1 relative z-10 pointer-events-none" aria-hidden="true" />

        {/* Bottom CTAs — sit under the butterfly cluster */}
        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-28"
          style={{ opacity: heroContentOpacity }}
        >
          <motion.div
            variants={heroFade}
            custom={3}
            initial={heroInitial}
            animate={heroState}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            <Link
              to="/packages"
              className="px-7 py-3.5 md:px-8 md:py-4 bg-white text-[#0a2740] rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_8px_40px_-8px_rgba(255,255,255,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Explore Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/enquiry"
              className="px-7 py-3.5 md:px-8 md:py-4 bg-white/10 border border-white/50 text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
            >
              Plan My Trip
              <Calendar className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: heroContentOpacity }}
          className="absolute bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            initial={heroInstant ? false : { opacity: 0 }}
            animate={{ opacity: revealed ? 1 : 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex flex-col items-center gap-2 text-white/75"
          >
            <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
            <div className="relative w-px h-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent" />
              <div className="scroll-cue-dot absolute left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-white" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The white "sheet" — slides over the hero with a rounded cut */}
      <div className="relative z-10 bg-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-10 shadow-[0_-24px_48px_-24px_rgba(4,13,23,0.4)]">
        {/* Island marquee — editorial ticker along the top of the sheet */}
        <div className="overflow-hidden pt-6 pb-3 md:pt-8 md:pb-5 select-none" aria-hidden="true">
          <div className="marquee-track flex w-max items-center">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center shrink-0 pr-8 md:pr-14">
                <span
                  className={`font-display font-bold uppercase tracking-tight whitespace-nowrap text-3xl md:text-5xl ${
                    i % 2 ? 'text-outline-ink' : 'text-gray-900'
                  }`}
                >
                  {item}
                </span>
                <span className="ml-8 md:ml-14 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-600/60 shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Featured Packages with improved spacing */}
        <section className="py-6 md:py-8">
          <FeaturedPackages />
        </section>

        <section className="py-6 md:py-8">
          <PopularIslands />
        </section>

        <section className="py-6 md:py-8">
          <Destinations />
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <SectionIntro title="Curated" script="Experiences">
              Dives, hops, and evenings on the water.
            </SectionIntro>

            <CardSlider showDots={true} autoScroll={false}>
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.link}
                  title={exp.title}
                  description={exp.description}
                  image={exp.image}
                  delay={index * 0.08}
                  link={exp.link}
                  reverse={index % 2 === 1}
                />
              ))}
            </CardSlider>

            <div className="mt-5 text-center">
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a2740] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#041018]"
              >
                View all experiences
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews + offers + CTA on the same white sheet */}
        <Testimonials />

        <div className="container mx-auto px-4 pb-6 md:pb-8">
          <Newsletter />
        </div>

        <div className="container mx-auto px-4 pb-6 md:pb-8">
          <section
            ref={ctaRef}
            className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem]"
          >
            <div className="absolute inset-0">
              <motion.img
                src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Andaman island coastline at sunset for tour package booking"
                className="h-full w-full scale-125 object-cover will-change-transform"
                loading="lazy"
                style={{ y: ctaImgY }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:max-w-2xl lg:px-14">
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl">
                Ready for your{' '}
                <span className="font-script text-[1.15em] font-normal">island chapter?</span>
              </h2>

              <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-white/80">
                Share your dates. We send a written itinerary with named ferries and hotels.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/enquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0a2740] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Start Planning
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  Calculate Costs
                  <CreditCard className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
