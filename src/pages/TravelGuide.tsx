import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Calendar, Users, BookOpen, ChevronRight,
  Activity, Star, CheckCircle, Info, Anchor, Camera,
  Route, Clock, Compass, ArrowRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

/**
 * /travel-guide — Itinerary planning only (days, islands, combos).
 * Flights, ferries, permits live on /guide.
 */
const TravelGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();

  const navigationItems = [
    { id: 'overview', label: 'Islands', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'duration', label: 'How Many Days', icon: <Clock className="w-4 h-4" /> },
    { id: 'combos', label: 'Best Combos', icon: <Compass className="w-4 h-4" /> },
    { id: 'itineraries', label: 'Sample Plans', icon: <Route className="w-4 h-4" /> },
    { id: 'fit-in', label: 'What to Fit In', icon: <Activity className="w-4 h-4" /> },
    { id: 'tips', label: 'Planning Tips', icon: <Info className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <div className="text-center mb-12 sm:mb-16">
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-azure font-bold tracking-wider text-sm uppercase mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-night"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="h-1 w-20 bg-azure mx-auto mt-6 rounded-full"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-pearl font-sans selection:bg-azure selection:text-white">
      <SEO
        title="Andaman Itinerary Guide 2026 | Days, Islands & Combos"
        description="Plan your Andaman itinerary for 2026: how many days you need, which islands to visit, and the best Port Blair–Havelock–Neil combos. Sample 4, 6 & 8-day plans."
        pathname={location.pathname}
        type="article"
        keywords="andaman itinerary, how many days andaman, how many days in andaman, 6 day andaman itinerary, 5 day andaman itinerary, 7 day andaman itinerary, andaman island hopping plan, havelock neil itinerary, port blair itinerary, andaman trip plan 2026, best andaman combo"
        author="Luxury Andamans Editorial Team"
        publishedTime="2026-01-01"
        modifiedTime={new Date().toISOString().split('T')[0]}
        faqData={[
          {
            question: "How many days are enough for Andaman?",
            answer: "5–6 days is ideal for first-timers covering Port Blair, Havelock, and Neil without rushing. Minimum 4 days covers Port Blair + Havelock. Add 2–3 more days for Baratang or Diglipur."
          },
          {
            question: "Which islands should I visit first?",
            answer: "Most travelers do Port Blair (arrival + history) → Havelock/Swaraj Dweep (beaches & diving) → Neil/Shaheed Dweep (slower pace) → back to Port Blair for departure."
          },
          {
            question: "Is Neil Island worth it on a short trip?",
            answer: "On a 4-day trip, skip Neil and spend more time in Havelock. From 5–6 days onward, Neil is worth a night for Bharatpur Beach and Natural Bridge."
          },
          {
            question: "What is the best Andaman combo for couples?",
            answer: "5N/6D with 1 night Port Blair, 3 nights Havelock, 1 night Neil — balance of romance, beaches, and light sightseeing. See our honeymoon packages for ready-made versions."
          }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Andaman Itinerary Guide 2026 — Days, Islands & Combos",
          "description": "How to plan Andaman days and island combinations: Port Blair, Havelock, Neil, and longer explorer routes.",
          "author": {
            "@type": "Organization",
            "name": "Luxury Andamans"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Luxury Andamans",
            "url": "https://luxuryandamans.com"
          },
          "datePublished": "2026-01-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "mainEntityOfPage": "https://luxuryandamans.com/travel-guide"
        }}
      />
      <Header />

      <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Andaman Islands"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/30 to-pearl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 text-sm font-medium tracking-wide">
              Itinerary Planning · 2026
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Plan Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-teal-200">Island Days</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              How many days, which islands, and which combos work — so your trip feels full without feeling rushed.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('duration')}
                className="bg-white text-night px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                How Many Days?
                <ChevronRight className="w-5 h-5 text-azure" />
              </button>
              <Link
                to="/guide"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Flights & Permits
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="sticky top-24 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          className="bg-white/80 backdrop-blur-xl shadow-glass border border-white/40 rounded-full p-2 pointer-events-auto overflow-x-auto max-w-full"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ul className="flex items-center gap-1 sm:gap-2 min-w-max">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'bg-night text-white shadow-lg scale-105'
                    : 'text-night/60 hover:bg-gray-100 hover:text-night'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">

        <section id="overview" className="scroll-mt-40 mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-night mb-8 leading-tight">
                The islands that <span className="text-azure italic">matter</span>
              </h2>
              <p className="text-lg text-night/70 mb-6 leading-relaxed">
                You do not need all 572 islands. Almost every first trip is built from three hubs: Port Blair (gateway + history), Havelock / Swaraj Dweep (beaches & diving), and Neil / Shaheed Dweep (slower beaches).
              </p>
              <p className="text-lg text-night/70 mb-8 leading-relaxed">
                Longer trips add Baratang (caves) or Diglipur (Ross & Smith). For flights, ferries, and documents, use our{' '}
                <Link to="/guide" className="text-azure font-semibold hover:underline">logistics guide</Link>.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: 'Core trio', value: 'PB + HV + Neil', icon: <MapPin className="w-5 h-5" /> },
                  { label: 'Sweet spot', value: '5–6 days', icon: <Calendar className="w-5 h-5" /> },
                  { label: 'Rush trip', value: '4 days min', icon: <Clock className="w-5 h-5" /> },
                  { label: 'Explorer', value: '8–10 days', icon: <Star className="w-5 h-5" /> },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-azure/10 p-2 rounded-lg text-azure">{stat.icon}</div>
                    <div>
                      <div className="text-lg font-bold text-night">{stat.value}</div>
                      <div className="text-xs font-medium text-night/50">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 grid grid-cols-2 gap-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1589330273594-edf1a0ed0a75?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Havelock Beach"
                  className="rounded-[2rem] shadow-lg w-full h-64 object-cover mt-12"
                />
                <img
                  src="https://images.unsplash.com/photo-1572331165267-854da2b00ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Neil Island"
                  className="rounded-[2rem] shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-azure/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        <section id="duration" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Trip Length">How Many Days?</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                days: '4 Days',
                title: 'Quick Escape',
                best: 'Long weekend',
                plan: 'Port Blair (1N) + Havelock (2N). Skip Neil. Focus on Cellular Jail + Radhanagar.',
                skip: 'Neil, Baratang, Diglipur'
              },
              {
                days: '5–6 Days',
                title: 'Classic Route',
                best: 'First-timers',
                plan: 'Port Blair + Havelock + Neil. The most balanced pace for beaches, ferries, and one light activity day.',
                skip: 'North Andaman add-ons'
              },
              {
                days: '7–10 Days',
                title: 'Island Explorer',
                best: 'Relaxed / returners',
                plan: 'Classic trio plus Baratang or Diglipur (Ross & Smith). Extra beach days in Havelock.',
                skip: 'Nothing essential'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100"
              >
                <div className="text-azure font-bold text-sm uppercase tracking-wider mb-2">{card.days}</div>
                <h3 className="text-2xl font-bold text-night mb-2 font-display">{card.title}</h3>
                <p className="text-sm text-night/50 mb-4">Best for: {card.best}</p>
                <p className="text-night/70 mb-6 leading-relaxed">{card.plan}</p>
                <div className="text-xs bg-gray-50 rounded-xl p-3 text-night/60">
                  <strong className="text-night">Usually skip:</strong> {card.skip}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="combos" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Routing">Best Island Combos</SectionHeading>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                name: 'PB → Havelock → Neil → PB',
                nights: '5N/6D classic',
                why: 'Standard first-timer loop. One night Neil keeps ferries efficient without backtracking twice.'
              },
              {
                name: 'PB → Havelock → PB',
                nights: '3N/4D or 4N/5D',
                why: 'Best short trip. More Havelock beach time beats a rushed Neil day-trip.'
              },
              {
                name: 'PB → Havelock → Neil → Baratang → PB',
                nights: '7N/8D+',
                why: 'Add limestone caves after the beach circuit. Needs an early Port Blair morning for Baratang.'
              },
              {
                name: 'PB → Diglipur → Havelock → PB',
                nights: '8–10 days',
                why: 'For Ross & Smith sandbar seekers. Diglipur is a long road day — only worth it with buffer nights.'
              }
            ].map((combo, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="sm:w-48 shrink-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-azure mb-1">{combo.nights}</div>
                  <h3 className="text-lg font-bold text-night font-display leading-snug">{combo.name}</h3>
                </div>
                <p className="text-night/70 flex-1">{combo.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="itineraries" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Ready Templates">Sample Itineraries</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { days: '3N / 4D', title: 'Quick Escape', desc: 'Port Blair + Havelock. Perfect long weekend.', link: '/packages/family-fun-4n5d-quick-getaway' },
              { days: '5N / 6D', title: 'Classic Andaman', desc: 'Port Blair + Havelock + Neil. Most popular plan.', link: '/packages/standard-andaman-package-5n6d' },
              { days: '7N / 8D', title: 'Island Explorer', desc: 'Extended stay with Baratang or extra beach days.', link: '/packages/grand-andaman-tour' }
            ].map((plan, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-azure transition-colors group">
                <div className="text-azure font-bold text-sm uppercase tracking-wider mb-2">{plan.days}</div>
                <h3 className="text-2xl font-bold text-night mb-4 group-hover:text-azure transition-colors font-display">{plan.title}</h3>
                <p className="text-night/60 mb-8">{plan.desc}</p>
                <Link to={plan.link} className="inline-flex items-center gap-2 text-night font-medium hover:text-azure transition-colors">
                  View package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="fit-in" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Build Your Days">What to Fit In</SectionHeading>
          <p className="text-center text-night/60 max-w-2xl mx-auto mb-12 -mt-8">
            Treat these as itinerary building blocks — not a checklist to finish in one day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { island: 'Port Blair', items: 'Cellular Jail, Ross Island / North Bay day, Chidiya Tapu sunset' },
              { island: 'Havelock', items: 'Radhanagar sunset, Elephant Beach / scuba, one free beach morning' },
              { island: 'Neil', items: 'Bharatpur snorkeling, Natural Bridge at low tide, slow café afternoon' },
              { island: 'Couples', items: 'Keep one empty evening for dinner; avoid stacking water sports every day' },
              { island: 'Families', items: 'Shorter transfers, midday rest, prefer glass-bottom / easy snorkel over advanced dives' },
              { island: 'Adventure', items: 'Block a full day for scuba; do not ferry the same afternoon' },
            ].map((block, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <div className="w-10 h-10 bg-azure/10 rounded-xl flex items-center justify-center text-azure mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-night mb-2">{block.island}</h4>
                <p className="text-sm text-night/60 leading-relaxed">{block.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tips" className="scroll-mt-40">
          <SectionHeading subtitle="Pace Matters">Planning Tips</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Ferry first', icon: <Anchor />, desc: 'Lock island ferry times before hotel nights — routes drive the itinerary.' },
              { title: 'One move/day', icon: <Route />, desc: 'Avoid ferry + heavy sightseeing the same morning. Travel days stay light.' },
              { title: 'Buffer night', icon: <Users />, desc: 'Keep last night in Port Blair before your flight out.' },
              { title: 'Photo timing', icon: <Camera />, desc: 'Natural Bridge and Radhanagar need tide/sunset windows — plan around them.' },
              { title: 'Do not overpack days', icon: <CheckCircle />, desc: 'Two highlights per day beats five rushed stops.' },
              { title: 'Match trip type', icon: <Star />, desc: 'Honeymoon = more Havelock nights. Family = fewer boat hops.' },
              { title: 'Monsoon buffer', icon: <Info />, desc: 'In June–Sept, add a spare day for weather delays.' },
              { title: 'Logistics next', icon: <Compass />, desc: 'When the day plan is set, finish flights & permits on /guide.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-azure/10 rounded-xl flex items-center justify-center text-azure mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-night mb-1">{item.title}</h4>
                <p className="text-sm text-night/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 px-8 py-4 bg-azure text-white rounded-full font-bold hover:bg-night transition-colors"
            >
              Next: flights, ferries & permits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default TravelGuide;
