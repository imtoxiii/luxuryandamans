import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  Plane,
  BookOpen,
  Thermometer,
  Cloud,
  Sun,
  Navigation,
  CheckCircle,
  HelpCircle,
  Wifi,
  CreditCard,
  Shield,
  AlertTriangle,
  FileText,
  Ship,
  ArrowRight,
  IdCard
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FaqAccordion from '../components/FaqAccordion';

/**
 * /guide — Practical logistics only (flights, ferries, permits, documents).
 * Itinerary planning lives on /travel-guide.
 */
const GuidePage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'how-to-reach', label: 'Flights & Ships', icon: <Plane className="w-5 h-5" /> },
    { id: 'ferries', label: 'Island Ferries', icon: <Ship className="w-5 h-5" /> },
    { id: 'documents', label: 'Permits & IDs', icon: <FileText className="w-5 h-5" /> },
    { id: 'best-time', label: 'When to Travel', icon: <Calendar className="w-5 h-5" /> },
    { id: 'travel-tips', label: 'Practical Tips', icon: <Shield className="w-5 h-5" /> },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle className="w-5 h-5" /> }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Travel Logistics Guide',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}${location.pathname}`,
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a passport to visit Andaman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indian citizens do not need a passport; a valid government ID (Aadhaar, Voter ID, etc.) is sufficient. Foreign nationals require a valid passport and an Indian visa (e-Visa accepted for most nationalities). A separate Restricted Area Permit is generally not required for about 30 tourist islands. See luxuryandamans.com/blog/andaman-islands-international-travel-guide-2026 and luxuryandamans.com/blog/india-evisa-andaman-trip-2026.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I book inter-island ferries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Private ferries (Makruzz, Green Ocean, Nautika) and government ferries run between Port Blair, Havelock (Swaraj Dweep), and Neil (Shaheed Dweep). Book 2–4 weeks ahead in peak season. Tickets need the same photo ID you travel with.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is internet available in Andaman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4G is available in Port Blair, Havelock, and Neil Island (Airtel and Jio work best). Speeds can be slower than mainland India, and connectivity may be spotty in remote areas. Download offline maps before you fly.'
        }
      },
      {
        '@type': 'Question',
        name: 'What documents should I carry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carry original photo ID matching your ferry and hotel bookings, flight tickets, and hotel confirmations (digital is fine). Foreign visitors should keep passport and visa accessible for airport registration.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-pearl font-sans selection:bg-azure/20 selection:text-azure">
      <SEO
        title="Andaman Logistics Guide 2026 | Flights, Ferries & Permits"
        description="Practical Andaman logistics for 2026: flights to Port Blair, ship options, inter-island ferry booking, permits & documents, cash & connectivity tips. Plan the how — then build your itinerary."
        pathname={location.pathname}
        keywords="andaman flights, andaman ferry booking, andaman permits, how to reach andaman, andaman documents, andaman logistics, port blair airport, makruzz ferry, andaman travel tips 2026, andaman travel agency help"
        targetAudience="all"
        extraStructuredData={[breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      <div className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: useTransform(useScroll().scrollY, [0, 1000], [0, 400]) }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.pexels.com/photos/33638092/pexels-photo-33638092.jpeg"
            alt="Andaman Islands Aerial"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center h-full pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-azure animate-pulse"></span>
              <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase font-sans">Logistics Handbook 2026</span>
            </div>

            <h1 className="flex flex-col items-center text-white mb-6">
              <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 opacity-90">How to Reach</span>
              <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-2xl">
                Andaman
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed mb-10 px-6">
              Flights, ferries, permits, and documents — the practical side of getting there and getting around.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <button
                onClick={() => scrollToSection('how-to-reach')}
                className="w-full sm:w-auto px-8 py-3.5 bg-azure text-white rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-azure transition-all duration-300 shadow-lg shadow-azure/20"
              >
                Flights & Ships
              </button>
              <Link
                to="/travel-guide"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-full font-bold text-sm tracking-wide hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Need an Itinerary?
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:flex absolute bottom-8 left-0 right-0 max-w-4xl mx-auto py-6 px-10 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl justify-between items-center text-white"
          >
            {[
              { label: 'Best Window', val: 'Oct - May', icon: <Sun className="w-4 h-4 text-yellow-400" /> },
              { label: 'Gateway', val: 'Port Blair (IXZ)', icon: <Plane className="w-4 h-4 text-blue-400" /> },
              { label: 'Ferry Hub', val: 'Havelock & Neil', icon: <Ship className="w-4 h-4 text-teal-300" /> },
              { label: 'ID Needed', val: 'Photo ID / Passport', icon: <IdCard className="w-4 h-4 text-green-400" /> },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/50">{stat.label}</p>
                  <p className="text-sm font-bold font-display tracking-wide">{stat.val}</p>
                </div>
                {i !== 3 && <div className="h-8 w-px bg-white/10 ml-8" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="sticky top-20 z-40 py-2">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="bg-white/95 backdrop-blur-md shadow-md rounded-xl p-1.5 border border-white/20 overflow-x-auto hide-scrollbar">
            <div className="flex items-center md:justify-center gap-1 min-w-max">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold transition-all duration-300 text-sm whitespace-nowrap group ${activeSection === item.id
                    ? 'text-white'
                    : 'text-night/60 hover:text-azure hover:bg-azure/5'
                    }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavBg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-azure to-blue-600 rounded-lg shadow-sm z-0"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 sm:pb-20 lg:pb-24 space-y-16 sm:space-y-24 bg-pearl">
        <section id="overview" className="pt-12 sm:pt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  Before You Book Anything
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-azure to-lagoon mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="space-y-6">
                  <p className="text-lg text-night/80 leading-relaxed">
                    Every Andaman trip starts the same way: a flight (or ship) into Port Blair, valid ID for ferries and hotels, and tickets between islands. This page covers only those logistics — not day-by-day itineraries.
                  </p>
                  <p className="text-lg text-night/80 leading-relaxed">
                    Once flights and ferry windows are clear, use our{' '}
                    <Link to="/travel-guide" className="text-azure font-semibold hover:underline">
                      itinerary planning guide
                    </Link>{' '}
                    to decide how many days you need and which island combo fits your trip.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      { label: 'Airport', value: 'IXZ Port Blair', icon: <Plane className="w-4 h-4" /> },
                      { label: 'Ship Port', value: 'Haddo Wharf', icon: <Navigation className="w-4 h-4" /> },
                      { label: 'Main Ferries', value: 'PB–Havelock–Neil', icon: <Ship className="w-4 h-4" /> },
                      { label: 'RAP (tourists)', value: 'Not required', icon: <Shield className="w-4 h-4" /> }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="flex items-center gap-2 text-azure mb-1">
                          {item.icon}
                          <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                        </div>
                        <div className="text-lg font-bold text-night">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-azure/20 to-lagoon/20 rounded-[2rem] transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Flight to Andaman"
                    className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="how-to-reach" className="bg-gray-50 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Mainland to Islands</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  Flights & Ships
                </h2>
                <p className="text-night/60 max-w-2xl mx-auto">Almost all travelers fly into Port Blair. Ships are cheaper but take 2–3 days each way.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-azure p-6 sm:p-8 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                      <Plane className="w-48 h-48" />
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Plane className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display">By Air</h3>
                        <p className="text-white/80">Fastest & Recommended</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h4 className="font-bold text-night text-lg mb-4">Veer Savarkar International Airport (IXZ)</h4>
                    <p className="text-night/70 mb-6">Direct flights from major Indian cities. Book early for Dec–Jan peak fares.</p>

                    <div className="space-y-4">
                      {[
                        { from: 'Chennai', time: '2h 00m', freq: 'Daily' },
                        { from: 'Kolkata', time: '2h 30m', freq: 'Daily' },
                        { from: 'Delhi', time: '3h 45m', freq: 'Daily' },
                        { from: 'Bangalore', time: '2h 30m', freq: 'Seasonal' },
                        { from: 'Mumbai', time: '3h 15m', freq: 'Seasonal' }
                      ].map((flight, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-azure/5 transition-colors">
                          <div className="font-medium text-night">{flight.from}</div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-night/60">{flight.time}</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">{flight.freq}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-lagoon p-6 sm:p-8 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                      <Navigation className="w-48 h-48" />
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Navigation className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display">By Sea</h3>
                        <p className="text-white/80">Budget / Adventure Only</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h4 className="font-bold text-night text-lg mb-4">Haddo Wharf, Port Blair</h4>
                    <p className="text-night/70 mb-6">Passenger ships from Chennai, Kolkata, and Visakhapatnam. Weather-dependent and slow.</p>

                    <div className="space-y-4">
                      {[
                        { from: 'Chennai', time: '60 hours', freq: 'Weekly' },
                        { from: 'Kolkata', time: '66 hours', freq: 'Weekly' },
                        { from: 'Vishakhapatnam', time: '56 hours', freq: 'Weekly' }
                      ].map((ship, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-lagoon/5 transition-colors">
                          <div className="font-medium text-night">{ship.from}</div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-night/60">{ship.time}</span>
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">{ship.freq}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl flex gap-3">
                      <div className="text-yellow-600 mt-1"><CheckCircle className="w-5 h-5" /></div>
                      <p className="text-sm text-night/80">
                        <strong>Note:</strong> Not recommended for short holidays or anyone prone to seasickness. Book via shipping corporation offices well in advance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="ferries" className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Island Hopping Transport</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                Inter-Island Ferries
              </h2>
              <p className="text-night/60 max-w-2xl mx-auto">
                Port Blair ↔ Havelock (Swaraj Dweep) ↔ Neil (Shaheed Dweep) is the core ferry triangle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Private Ferries', desc: 'Makruzz, Green Ocean, Nautika — faster, AC seating, online booking. Best for most tourists.', tip: 'Book 2–4 weeks ahead in peak season.' },
                { title: 'Government Ferries', desc: 'Cheaper, slower, limited seats. Tickets often released closer to travel dates.', tip: 'Carry cash and arrive early at the counter.' },
                { title: 'Booking Rules', desc: 'Name on ticket must match your photo ID. Same ID is checked at hotel check-in.', tip: 'Keep PDF tickets offline on your phone.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-azure/10 text-azure rounded-xl flex items-center justify-center mb-6">
                    <Ship className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3 font-display">{item.title}</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <div className="bg-azure/5 p-3 rounded-lg text-xs text-azure font-medium">{item.tip}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="documents" className="bg-night py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-lagoon font-bold tracking-wider uppercase text-sm mb-2 block">Entry Requirements</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-6">
                Permits & Documents
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-display">
                  <FileText className="w-6 h-6 text-lagoon" />
                  Indian Citizens
                </h3>
                <ul className="space-y-3 text-white/80">
                  {['Valid photo ID (Aadhaar, Voter ID, Driving Licence, Passport)', 'No Restricted Area Permit for tourist islands', 'Carry original ID matching ferry & hotel names', 'Kids: school ID or birth certificate as needed by ferry'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-display">
                  <IdCard className="w-6 h-6 text-azure" />
                  Foreign Nationals
                </h3>
                <ul className="space-y-3 text-white/80">
                  {['Valid passport + Indian visa', 'RAP no longer required for ~30 major tourist islands', 'Free arrival registration at Port Blair airport (~10 mins)', 'Tribal reserve areas remain off-limits to tourists'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-500/10 border border-red-400/30 rounded-xl flex gap-3 max-w-3xl mx-auto">
              <AlertTriangle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
              <p className="text-sm text-white/80">
                Collecting coral or shells is illegal. Respect all restricted zones and marine protection rules.
              </p>
            </div>
          </div>
        </section>

        <section id="best-time" className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Ferry & Flight Reliability</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  When Travel Runs Smoothly
                </h2>
                <p className="text-night/60 max-w-2xl mx-auto">
                  Season choice affects ferry cancellations and water-activity availability — not just beach weather.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    season: 'Peak Season',
                    period: 'October to February',
                    weather: 'Calm seas',
                    temp: '23°C - 30°C',
                    desc: 'Most reliable ferries and flights. Book hotels and private ferries early — demand is highest.',
                    borderColor: 'border-emerald-500',
                    iconBg: 'bg-emerald-100',
                    iconColor: 'text-emerald-600',
                    icon: <Sun className="w-6 h-6" />
                  },
                  {
                    season: 'Shoulder',
                    period: 'March to May',
                    weather: 'Warm & humid',
                    temp: '24°C - 37°C',
                    desc: 'Ferries still run regularly. Good for travelers who want lower rates with solid logistics.',
                    borderColor: 'border-amber-500',
                    iconBg: 'bg-amber-100',
                    iconColor: 'text-amber-600',
                    icon: <Thermometer className="w-6 h-6" />
                  },
                  {
                    season: 'Monsoon',
                    period: 'June to September',
                    weather: 'Wet & windy',
                    temp: '25°C - 30°C',
                    desc: 'Higher chance of ferry delays or cancellations. Keep buffer days if you must travel then.',
                    borderColor: 'border-blue-500',
                    iconBg: 'bg-blue-100',
                    iconColor: 'text-blue-600',
                    icon: <Cloud className="w-6 h-6" />
                  }
                ].map((season, index) => (
                  <div key={index} className={`bg-white rounded-3xl shadow-lg border-t-8 ${season.borderColor} p-8 hover:shadow-2xl transition-shadow duration-300`}>
                    <div className={`w-14 h-14 ${season.iconBg} ${season.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                      {season.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-night mb-2 font-display">{season.season}</h3>
                    <div className="text-sm font-bold uppercase tracking-wider text-night/50 mb-4">{season.period}</div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-night/80">{season.weather}</div>
                      <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-night/80">{season.temp}</div>
                    </div>
                    <p className="text-night/70 leading-relaxed">{season.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="travel-tips" className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">On the Ground</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  Practical Travel Tips
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3">Mobile & Internet</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">
                    <strong>Airtel and Jio</strong> offer the best 4G in Port Blair, Havelock, and Neil. Expect slower speeds than mainland.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-800 font-medium">
                    Tip: Download offline maps and e-tickets before landing.
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3">ATMs & Cash</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">
                    ATMs exist in Port Blair, Havelock, and Neil but can run dry. UPI works when network allows.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-xs text-green-800 font-medium">
                    Tip: Carry enough cash for ferries, tips, and small vendors.
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3">Safety Basics</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">
                    Tourist areas are generally very safe. Follow marine safety briefings and beach warning signs.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg text-xs text-red-800 font-medium">
                    Tip: Do not collect coral or shells — it is prohibited.
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/travel-guide"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-azure text-white rounded-full font-bold hover:bg-night transition-colors"
                >
                  Plan your days & island combo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="faqs">
          <FaqAccordion
            title="Logistics FAQs"
            description="Documents, ferries, and connectivity — answered."
            faqs={[
              {
                question: "Do I need a passport as an Indian citizen?",
                answer: "No. A valid government photo ID (Aadhaar, Voter ID, Driving Licence, or Passport) is enough for flights, ferries, and hotels. The name on bookings must match your ID."
              },
              {
                question: "How early should I book ferries?",
                answer: "In peak season (Dec–Jan), book private ferries 2–4 weeks ahead. Shoulder season can often be booked closer to travel, but weekend sailings still fill up."
              },
              {
                question: "Can ferries get cancelled?",
                answer: "Yes — especially in monsoon (June–September) due to rough seas. Build a buffer day before your outbound flight if traveling in rainy months."
              },
              {
                question: "What should I pack for logistics day one?",
                answer: "Photo ID, printed or offline ferry tickets, hotel confirmations, power bank, light cotton clothes, and enough cash for the first 48 hours."
              }
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuidePage;
