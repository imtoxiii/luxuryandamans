import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Calendar, Plane, Sun, Users, BookOpen, Thermometer,
  Cloud, History, Languages, ChevronRight,
  Activity, Star, CheckCircle, Droplets,
  Waves, Info, Ship, FileText, Anchor, Mountain, Camera, Utensils
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TravelGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'logistics', label: 'Getting There', icon: <Plane className="w-4 h-4" /> },
    { id: 'seasons', label: 'When to Go', icon: <Calendar className="w-4 h-4" /> },
    { id: 'history', label: 'History', icon: <History className="w-4 h-4" /> },
    { id: 'activities', label: 'To Do', icon: <Activity className="w-4 h-4" /> },
    { id: 'essentials', label: 'Essentials', icon: <Info className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset for header

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

    // Handle initial hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160; // Increased offset to account for header + sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      // Update URL hash without scrolling again
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
        title="Andaman Travel Guide 2026 | Plan Your Perfect Trip"
        description="Ultimate Andaman travel guide for 2026. How to reach Andaman by flight & ship, best time to visit (Oct-May), required documents, ferry booking tips, top places to visit & things to do. Updated weekly."
        pathname={location.pathname}
        type="article"
        keywords="andaman travel guide, how to reach andaman, best time to visit andaman, andaman trip planning, andaman permit requirements, andaman ferry guide, things to do in andaman, andaman itinerary, andaman for first timers, andaman packing list, andaman safety tips"
        author="Luxury Andamans Editorial Team"
        publishedTime="2026-01-01"
        modifiedTime={new Date().toISOString().split('T')[0]}
        faqData={[
          {
            question: "How to reach Andaman Islands?",
            answer: "You can reach Andaman by flight or ship. Flights from Chennai (2h), Kolkata (2.5h), Delhi (3.5h via Chennai), and Bangalore (2.5h) land at Port Blair's Veer Savarkar Airport. Ships from Chennai, Kolkata, and Visakhapatnam take 50-70 hours. Flights are recommended for tourists."
          },
          {
            question: "What is the best time to visit Andaman?",
            answer: "The best time to visit Andaman is October to May. Peak season (Dec-Feb) has perfect weather with 25-30°C temperature and calm seas ideal for water sports. March-May is slightly warmer but less crowded. Avoid monsoon (June-September) as heavy rains may disrupt activities and ferries."
          },
          {
            question: "Do I need a permit to visit Andaman?",
            answer: "Indian citizens don't need any permit for tourist islands (Port Blair, Havelock, Neil). Just carry a valid photo ID. Foreign nationals need to register at the airport on arrival - this is free and takes 10 minutes. Special permits are required only for tribal reserve areas which tourists cannot visit anyway."
          },
          {
            question: "How many days are enough for Andaman trip?",
            answer: "5-6 days is ideal for first-time visitors covering Port Blair (2 days), Havelock Island (2-3 days), and Neil Island (1 day). For a comprehensive trip including Baratang or Diglipur, plan 8-10 days. Minimum 4 days required to cover the essentials without rushing."
          },
          {
            question: "Is Andaman safe for tourists?",
            answer: "Yes, Andaman is one of the safest tourist destinations in India. Crime rate is very low, locals are friendly, and tourist areas are well-patrolled. It's safe for solo travelers, women, and families. Just follow standard travel precautions and respect marine safety guidelines during water activities."
          }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Complete Andaman Travel Guide 2026 - Everything You Need to Know",
          "description": "Comprehensive guide covering how to reach Andaman, best time to visit, documents required, things to do, and essential travel tips.",
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
          "mainEntityOfPage": "https://luxuryandamans.com/guide"
        }}
      />
      <Header />

      {/* Immersive Hero Section */}
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
              alt="Andaman Islands Aerial"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/30 to-pearl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "outCirc" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 text-sm font-medium tracking-wide">
              Updated for 2026 Season
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              The Complete <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-teal-200">Island Guide</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Discover the emerald isles of India. A comprehensive handbook for the modern traveler covering logistics, culture, and hidden gems.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('overview')}
                className="bg-white text-night px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Reading
                <ChevronRight className="w-5 h-5 text-azure" />
              </button>
              <button
                onClick={() => scrollToSection('activities')}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Browse Activities
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Navigation Pill */}
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

        {/* Overview Section */}
        <section id="overview" className="scroll-mt-40 mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-night mb-8 leading-tight">
                India's best kept <span className="text-azure italic">Secret</span>
              </h2>
              <p className="text-lg text-night/70 mb-6 leading-relaxed">
                The Andaman and Nicobar Islands, a breathtaking archipelago in the Bay of Bengal, comprise 572 pristine islands offering some of the world's most untouched natural beauty. Located approximately 1,200 km from the Indian mainland, these emerald isles are renowned for their crystal-clear waters, coral reefs, and pristine beaches.
              </p>
              <p className="text-lg text-night/70 mb-8 leading-relaxed">
                With a tropical climate, rich marine life, and fascinating history, the Andaman Islands serve as the perfect destination for adventure seekers, nature lovers, and those seeking tranquil escapes. From world-class scuba diving to historical monuments, luxury resorts to untouched wilderness, these islands offer experiences that cater to every traveler.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: 'Total Islands', value: '572', icon: <MapPin className="w-5 h-5" /> },
                  { label: 'Inhabited', value: '37', icon: <Users className="w-5 h-5" /> },
                  { label: 'Coastline', value: '1,962 km', icon: <Waves className="w-5 h-5" /> },
                  { label: 'Capital', value: 'Port Blair', icon: <Star className="w-5 h-5" /> },
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
                  alt="Andaman Beach"
                  className="rounded-[2rem] shadow-lg w-full h-64 object-cover mt-12"
                />
                <img
                  src="https://images.unsplash.com/photo-1572331165267-854da2b00ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Coral Reef"
                  className="rounded-[2rem] shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-azure/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        {/* Logistics Section */}
        <section id="logistics" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Getting There">Logistics & Travel</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* By Air */}
            <motion.div
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-azure/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-azure/10 rounded-2xl flex items-center justify-center">
                  <Plane className="w-7 h-7 text-azure" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-night">By Air</h3>
                  <p className="text-night/50 text-sm">Veer Savarkar International Airport (IXZ)</p>
                </div>
              </div>

              <p className="text-night/70 mb-6">
                The fastest way to reach. Direct flights connect Port Blair with major Indian cities.
              </p>

              <div className="space-y-3">
                {[
                  { route: 'Chennai ✈ Port Blair', time: '2h 05m', freq: 'Daily' },
                  { route: 'Kolkata ✈ Port Blair', time: '2h 30m', freq: 'Daily' },
                  { route: 'Delhi ✈ Port Blair', time: '3h 40m', freq: 'Daily' },
                  { route: 'Bangalore ✈ Port Blair', time: '2h 35m', freq: 'Daily' },
                ].map((flight, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-azure/5 transition-colors">
                    <span className="font-semibold text-night text-sm">{flight.route}</span>
                    <div className="text-right">
                      <div className="text-xs font-bold text-azure">{flight.time}</div>
                      <div className="text-[10px] text-night/50">{flight.freq}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* By Sea */}
            <motion.div
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Ship className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-night">By Sea</h3>
                  <p className="text-night/50 text-sm">Haddo Wharf, Port Blair</p>
                </div>
              </div>

              <p className="text-night/70 mb-6">
                For adventure seekers. Regular passenger ships operate from Chennai, Kolkata, and Visakhapatnam.
              </p>

              <div className="space-y-3">
                {[
                  { port: 'Chennai Port', duration: '60 Hours', ship: 'MV Nicobar' },
                  { port: 'Kolkata Port', duration: '66 Hours', ship: 'MV Nancowry' },
                  { port: 'Visakhapatnam', duration: '56 Hours', ship: 'MV Swaraj Dweep' },
                ].map((sea, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                    <span className="font-semibold text-night text-sm">{sea.port}</span>
                    <div className="text-right">
                      <div className="text-xs font-bold text-blue-600">{sea.duration}</div>
                      <div className="text-[10px] text-night/50">{sea.ship}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-orange-600 bg-orange-50 p-2 rounded-lg">
                <Info className="w-4 h-4" />
                <span>Sea travel takes 3-4 days. Not recommended for short trips.</span>
              </div>
            </motion.div>
          </div>

          {/* Documents Section */}
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-600" />
              Required Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-night mb-3 text-lg">For Indian Citizens</h4>
                <ul className="space-y-2">
                  {['Valid Photo ID (Aadhaar, Voter ID, etc.)', 'No permit required for visited islands', 'Carry original documents'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-night/70">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-night mb-3 text-lg">For Foreign Nationals</h4>
                <ul className="space-y-2">
                  {['Valid Passport & Indian Visa', 'RAP (Restricted Area Permit) no longer needed for 30 islands', 'Register at immigration upon arrival'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-night/70">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section id="seasons" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Planning">Best Time to Visit</SectionHeading>

          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -ml-20 -mb-20" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {/* Current Season Highlight */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Recommended Now
                </div>
                <h3 className="text-4xl sm:text-6xl font-display font-bold mb-4">Oct - Feb</h3>
                <p className="text-xl text-blue-100 mb-8">The Peak Season</p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <Thermometer className="w-8 h-8 text-yellow-300" />
                    <div className="text-left">
                      <div className="text-2xl font-bold">25°C</div>
                      <div className="text-sm text-blue-100">Average Temp</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <Droplets className="w-8 h-8 text-blue-300" />
                    <div className="text-left">
                      <div className="text-2xl font-bold">Low</div>
                      <div className="text-sm text-blue-100">Humidity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Season Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Summer',
                    months: 'March - May',
                    icon: <Sun className="w-6 h-6 text-orange-400" />,
                    desc: 'Warm days (24-37°C), perfect for water sports and diving. Fewer crowds, better deals.',
                    color: 'bg-orange-500/20'
                  },
                  {
                    title: 'Monsoon',
                    months: 'June - Sept',
                    icon: <Cloud className="w-6 h-6 text-gray-300" />,
                    desc: 'Heavy rains, lush greenery. Ferries may cancel. Best for nature lovers & spa retreats.',
                    color: 'bg-gray-500/20'
                  },
                ].map((season, i) => (
                  <motion.div
                    key={i}
                    className={`p-6 rounded-3xl border border-white/10 backdrop-blur-md ${season.color} hover:bg-white/10 transition-colors`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white/10 rounded-2xl">
                        {season.icon}
                      </div>
                      <span className="text-sm font-medium text-white/60">{season.months}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{season.title}</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">{season.desc}</p>
                  </motion.div>
                ))}

                {/* Month Grid */}
                <div className="sm:col-span-2 bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/10">
                  <h4 className="font-bold mb-4">Quick Month Guide</h4>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                      <div key={i} className={`text-center p-2 rounded-xl text-sm ${[0, 1, 9, 10, 11].includes(i) ? 'bg-green-400/20 text-green-200 border border-green-400/30' :
                        [5, 6, 7, 8].includes(i) ? 'bg-blue-400/10 text-blue-300' : 'bg-orange-400/10 text-orange-200'
                        }`}>
                        {m}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4 text-xs text-blue-200 justify-center">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400"></div>Best</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-400"></div>Hot</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Rainy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="scroll-mt-40 mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <SectionHeading subtitle="Heritage">Island History</SectionHeading>
              <p className="text-lg text-night/70 mb-8">
                From indigenous tribes living in isolation for millennia to the colonial era of the British Raj, the Andamans have a layered and fascinating history.
              </p>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                {[
                  { year: 'Ancient', title: 'Indigenous Settlement', desc: 'Inhabited by tribes like the Great Andamanese, Onge, Jarawa, and Sentinelese for over 60,000 years.' },
                  { year: '1858', title: 'British Penal Colony', desc: 'Established as a penal settlement for Indian freedom fighters after the First War of Independence.' },
                  { year: '1906', title: 'Cellular Jail', desc: 'Completion of the Cellular Jail (Kaala Paani), a solitary confinement prison.' },
                  { year: '1942', title: 'Japanese Occupation', desc: 'Occupied by Japanese forces during WWII. Subhash Chandra Bose hoisted the Indian flag here in 1943.' },
                  { year: '1947', title: 'Indian Union', desc: 'Became part of independent India, later designated as a Union Territory.' },
                ].map((event, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-2 top-1.5 w-4 h-4 bg-azure rounded-full border-4 border-white shadow-sm" />
                    <span className="text-sm font-bold text-azure bg-azure/10 px-2 py-1 rounded mb-2 inline-block">{event.year}</span>
                    <h4 className="text-xl font-bold text-night mb-1">{event.title}</h4>
                    <p className="text-night/60 text-sm">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 sticky top-32">
              <motion.div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Cellular Jail"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night/90 to-transparent p-8">
                  <h3 className="text-white font-bold text-2xl">Cellular Jail National Memorial</h3>
                  <p className="text-white/80 mt-2">A poignant reminder of India's struggle for freedom.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Things to Do - Bento Grid */}
        <section id="activities" className="scroll-mt-40 mb-24 sm:mb-32">
          <SectionHeading subtitle="Experiences">Things to Do</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Scuba - Large */}
            <motion.div
              className="md:col-span-2 row-span-2 relative group rounded-[2rem] overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 0.98 }}
            >
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Scuba"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-xs font-medium text-white mb-3">Top Rated</div>
                <h3 className="text-3xl font-bold text-white mb-2">Scuba Diving</h3>
                <p className="text-white/80">Havelock & Neil Island offer world-class diving sites with 20m+ visibility.</p>
              </div>
            </motion.div>

            {/* Kayaking */}
            <motion.div
              className="relative group rounded-[2rem] overflow-hidden shadow-lg cursor-pointer bg-teal-900"
              whileHover={{ scale: 0.98 }}
            >
              <img
                src="https://images.unsplash.com/photo-1545562083-a600704fa46e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Kayaking"
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Mangrove Kayaking</h3>
                <p className="text-white/80 text-sm">Explore the dense mangroves.</p>
              </div>
            </motion.div>

            {/* Trekking */}
            <motion.div
              className="relative group rounded-[2rem] overflow-hidden shadow-lg cursor-pointer bg-green-900"
              whileHover={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-teal-800">
                <Mountain className="w-10 h-10 text-white/50" />
                <div>
                  <h3 className="text-xl font-bold text-white">Trekking</h3>
                  <p className="text-white/80 text-sm">Saddle Peak & Mt. Harriet</p>
                </div>
              </div>
            </motion.div>

            {/* Beach */}
            <motion.div
              className="md:col-span-2 relative group rounded-[2rem] overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 0.98 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589330273594-edf1a0ed0a75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Beach"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-night/60 to-transparent p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">Beach Hopping</h3>
                <p className="text-white/80 max-w-sm">Radhanagar, Elephant, and Kalapathar beaches are must-visits for sunset lovers.</p>
              </div>
            </motion.div>

            {/* Cuisine */}
            <motion.div
              className="relative group rounded-[2rem] overflow-hidden shadow-lg cursor-pointer bg-orange-100"
              whileHover={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-night">Seafood Trail</h3>
                <p className="text-night/60 text-sm">Fresh lobster & crab.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Essentials - Tips */}
        <section id="essentials" className="scroll-mt-40">
          <SectionHeading subtitle="Good to Know">Essential Tips</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Connectivity', icon: <Activity />, desc: 'Internet is slow. BSNL/Airtel work best.' },
              { title: 'Currency', icon: <Anchor />, desc: 'ATMs available in Port Blair & Havelock. Carry cash.' },
              { title: 'Language', icon: <Languages />, desc: 'Hindi, Bengali & English are spoken.' },
              { title: 'Safety', icon: <CheckCircle />, desc: 'Very safe. Low crime rate.' },
              { title: 'Transport', icon: <Ship />, desc: 'Ferries for inter-island. Cabs for local.' },
              { title: 'Culture', icon: <Users />, desc: 'Respect local tribes. Photography prohibited.' },
              { title: 'Food', icon: <Utensils />, desc: 'Seafood paradise. Veg options available.' },
              { title: 'Packing', icon: <Camera />, desc: 'Sunscreen, hat, flip-flops, swimwear.' },
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
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default TravelGuide;
