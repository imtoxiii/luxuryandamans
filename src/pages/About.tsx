import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Plane, 
  Compass, 
  Sun, 
  Users, 
  BookOpen, 
  Thermometer,
  Cloud,
  History,
  Globe,
  Languages,
  Navigation,
  Activity,
  Star,
  CheckCircle,
  HelpCircle,
  Wifi,
  CreditCard,
  Shield,
  AlertTriangle
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FaqAccordion from '../components/FaqAccordion';

const GuidePage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'how-to-reach', label: 'How to Reach', icon: <Plane className="w-5 h-5" /> },
    { id: 'best-time', label: 'Best Time', icon: <Calendar className="w-5 h-5" /> },
    { id: 'things-to-do', label: 'Activities', icon: <Activity className="w-5 h-5" /> },
    { id: 'travel-tips', label: 'Travel Tips', icon: <Shield className="w-5 h-5" /> },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle className="w-5 h-5" /> }
  ];

  // Scroll to section when nav item is clicked
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [activeSection]);

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
        name: 'Travel Guide',
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
        name: 'What is the best time to visit Andaman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to visit Andaman is between October and May. The weather is pleasant, perfect for sightseeing and water sports. Avoid the monsoon season (June to September) if you want to enjoy outdoor activities.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a passport to visit Andaman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indian citizens do not need a passport; a valid government ID (Aadhaar, Voter ID, etc.) is sufficient. Foreign nationals require a valid passport and an Indian Visa. The Restricted Area Permit (RAP) is no longer required for 30 inhabited islands.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is internet available in Andaman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Internet connectivity has improved with the undersea cable project (CANI). 4G is available in Port Blair, Havelock, and Neil Island (Airtel and Jio work best). However, speeds can be slower than mainland India, and connectivity might be spotty in remote areas.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many days are sufficient for an Andaman trip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 5-night/6-day trip is ideal to cover the main highlights: Port Blair, Havelock Island (Swaraj Dweep), and Neil Island (Shaheed Dweep). For a more relaxed vacation covering North Andaman, plan for 7-9 days.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-pearl font-sans selection:bg-azure/20 selection:text-azure">
      <SEO 
        title="Ultimate Andaman Islands Travel Guide 2025 | Tourism, Tips & Itinerary"
        description="Plan your perfect Andaman trip with our comprehensive 2025 guide. Discover best time to visit, how to reach, top places like Havelock & Neil, scuba diving spots, and essential travel tips. Expert advice for couples and families."
        pathname={location.pathname}
        keywords="Andaman Islands travel guide 2025, Andaman tourism, best time to visit Andaman, how to reach Port Blair, Havelock Island guide, Neil Island tourism, Andaman scuba diving, Andaman honeymoon guide, Andaman family trip, Andaman travel tips, Andaman ferry booking, Port Blair sightseeing"
        extraStructuredData={[breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />
      
      {/* Hero Section - Redesigned */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Andaman Islands Aerial View" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/40 to-pearl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-4 tracking-wider uppercase">
                The Ultimate Travel Guide
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6 drop-shadow-lg">
                Discover Andaman
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                Your comprehensive guide to the emerald islands of India. Plan your perfect escape to paradise.
              </p>
            </motion.div>
        </div>
      </div>

      {/* Navigation Section - Sticky & Glassmorphism */}
      <section className="sticky top-20 z-40 py-4 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-2 border border-white/50 overflow-x-auto hide-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 min-w-max md:min-w-0">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-azure text-white shadow-md transform scale-105'
                      : 'bg-transparent text-night/70 hover:bg-azure/10 hover:text-azure'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="pb-16 sm:pb-20 lg:pb-24 space-y-16 sm:space-y-24">
        
        {/* Overview Section */}
        <section id="overview" className="pt-8 sm:pt-12">
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
                  Welcome to Paradise
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-azure to-lagoon mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <p className="text-lg text-night/80 leading-relaxed">
                    The Andaman and Nicobar Islands, a breathtaking archipelago in the Bay of Bengal, comprise 572 pristine islands offering some of the world's most untouched natural beauty. Located approximately 1,200 km from the Indian mainland, these emerald isles are renowned for their crystal-clear waters, coral reefs, and pristine beaches.
                  </p>
                  <p className="text-lg text-night/80 leading-relaxed">
                    With a tropical climate, rich marine life, and fascinating history, the Andaman Islands serve as the perfect destination for adventure seekers, nature lovers, and those seeking tranquil escapes. From world-class scuba diving to historical monuments, luxury resorts to untouched wilderness.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      { label: 'Capital', value: 'Port Blair', icon: <MapPin className="w-4 h-4" /> },
                      { label: 'Islands', value: '572 (37 Inhabited)', icon: <Globe className="w-4 h-4" /> },
                      { label: 'Best Beach', value: 'Radhanagar', icon: <Star className="w-4 h-4" /> },
                      { label: 'Activity', value: 'Scuba Diving', icon: <Activity className="w-4 h-4" /> }
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
                    src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Andaman Islands Overview"
                    className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Key Highlights Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Compass className="w-8 h-8 text-white" />,
                    title: 'Geographic Wonder',
                    description: 'Located between 6°-14°N latitude, featuring diverse topography from hills to coral reefs.',
                    bg: 'bg-gradient-to-br from-blue-500 to-blue-600'
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-white" />,
                    title: 'Biodiversity Hotspot',
                    description: 'Home to 2,200+ plant species, 250+ bird species, and pristine coral reefs.',
                    bg: 'bg-gradient-to-br from-teal-500 to-teal-600'
                  },
                  {
                    icon: <History className="w-8 h-8 text-white" />,
                    title: 'Rich Heritage',
                    description: 'From ancient indigenous tribes to colonial history, stories spanning millennia.',
                    bg: 'bg-gradient-to-br from-purple-500 to-purple-600'
                  }
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${highlight.bg} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150`}></div>
                    <div className={`w-16 h-16 ${highlight.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold text-night mb-3 font-display">{highlight.title}</h3>
                    <p className="text-night/70 leading-relaxed">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Reach Section */}
        <section id="how-to-reach" className="bg-gray-50 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Travel Logistics</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  How to Reach
                </h2>
                <p className="text-night/60 max-w-2xl mx-auto">Most travelers arrive by air, landing in Port Blair, the capital city.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* By Air */}
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
                    <p className="text-night/70 mb-6">Direct flights available from major Indian cities. Connecting flights from other metros.</p>
                    
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
                
                {/* By Sea */}
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
                        <p className="text-white/80">For the Adventurous</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h4 className="font-bold text-night text-lg mb-4">Haddo Wharf, Port Blair</h4>
                    <p className="text-night/70 mb-6">Regular passenger ships operate from Chennai, Kolkata, and Vishakhapatnam. This is a long journey.</p>
                    
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
                        <strong>Note:</strong> Sea travel is time-consuming and weather-dependent. Not recommended for short trips or those prone to seasickness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Best Time to Visit Section */}
        <section id="best-time" className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Seasonal Guide</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  Best Time to Visit
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    season: 'Peak Season',
                    period: 'October to February',
                    weather: 'Pleasant & Dry',
                    temp: '23°C - 30°C',
                    desc: 'The weather is perfect with clear skies and calm seas. Ideal for water sports, beach hopping, and sightseeing.',
                    borderColor: 'border-emerald-500',
                    iconBg: 'bg-emerald-100',
                    iconColor: 'text-emerald-600',
                    icon: <Sun className="w-6 h-6" />
                  },
                  {
                    season: 'Shoulder Season',
                    period: 'March to May',
                    weather: 'Warm & Humid',
                    temp: '24°C - 37°C',
                    desc: 'Temperatures rise but crowds thin out. Great for budget travelers and those who don\'t mind the heat.',
                    borderColor: 'border-amber-500',
                    iconBg: 'bg-amber-100',
                    iconColor: 'text-amber-600',
                    icon: <Thermometer className="w-6 h-6" />
                  },
                  {
                    season: 'Monsoon Season',
                    period: 'June to September',
                    weather: 'Wet & Windy',
                    temp: '25°C - 30°C',
                    desc: 'Heavy rainfall and strong winds. Ferries may be cancelled. Lush greenery but limited water activities.',
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

        {/* Things to Do Section - Grid */}
        <section id="things-to-do" className="bg-night py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-lagoon font-bold tracking-wider uppercase text-sm mb-2 block">Experiences</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-6">
                Things to Do
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">From thrilling underwater adventures to peaceful nature walks, discover over 50+ unique experiences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Scuba Diving',
                  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                  desc: 'Explore vibrant coral reefs and marine life in Havelock and Neil Island.'
                },
                {
                  title: 'Beach Hopping',
                  image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                  desc: 'Visit Radhanagar, Elephant, and Kalapathar beaches for pristine white sands.'
                },
                {
                  title: 'Historical Tours',
                  image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                  desc: 'Walk through history at Cellular Jail and Ross Island ruins.'
                },
                {
                  title: 'Water Sports',
                  image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                  desc: 'Jet skiing, parasailing, and sea walking at North Bay and Elephant Beach.'
                },
                {
                  title: 'Trekking',
                  image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                  desc: 'Hike to Saddle Peak or through the limestone caves of Baratang.'
                },
                {
                  title: 'Sunset Watching',
                  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                  desc: 'Witness magical sunsets at Chidiya Tapu and Radhanagar Beach.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{item.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section - Timeline */}
        <section id="history" className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Time Travel</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-8">
                  Island History
                </h2>
                <p className="text-night/70 text-lg mb-12 leading-relaxed">
                  The history of the Andaman Islands is as deep as the ocean surrounding them. From indigenous tribes who have lived here for thousands of years to the colonial era that left an indelible mark.
                </p>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {[
                    {
                      year: 'Ancient Times',
                      title: 'Indigenous Settlement',
                      desc: 'Inhabited by indigenous tribes like the Great Andamanese, Onge, Jarawa, and Sentinelese for over 60,000 years.'
                    },
                    {
                      year: '1858',
                      title: 'British Penal Colony',
                      desc: 'The British established a penal colony for Indian freedom fighters, constructing the infamous Cellular Jail.'
                    },
                    {
                      year: '1942-1945',
                      title: 'Japanese Occupation',
                      desc: 'Occupied by Japanese forces during WWII. Bunkers and ruins from this era can still be found.'
                    },
                    {
                      year: '1947',
                      title: 'Indian Union',
                      desc: 'Became part of independent India, developing into a Union Territory focused on conservation and tourism.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-azure text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-slate-900">{item.title}</div>
                          <time className="font-caveat font-medium text-azure">{item.year}</time>
                        </div>
                        <div className="text-slate-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="sticky top-32">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Cellular Jail" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h3 className="text-white font-bold text-xl">Cellular Jail National Memorial</h3>
                    <p className="text-white/80 text-sm">A poignant reminder of India's struggle for freedom.</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Indigenous Heritage
                  </h4>
                  <p className="text-orange-800/80 text-sm leading-relaxed">
                    The islands are home to some of the most isolated tribal groups in the world. The Jarawa and Sentinelese tribes live in protected reserves, and interaction with them is strictly prohibited to preserve their way of life and health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* People & Language Section */}
        <section id="people-language" className="bg-gradient-to-br from-azure/5 to-lagoon/5 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-6">
                People & Culture
              </h2>
              <p className="text-night/70 text-lg">
                Often called "Mini India," the Andamans are a melting pot of cultures, languages, and religions living in harmony.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
                  <Languages className="w-6 h-6 text-azure" />
                  Languages
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-bold text-night">Hindi & English</div>
                      <div className="text-sm text-night/60">Official Languages</div>
                    </div>
                    <span className="px-3 py-1 bg-azure/10 text-azure rounded-full text-sm font-bold">Primary</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-bold text-night">Bengali</div>
                      <div className="text-sm text-night/60">Widely Spoken</div>
                    </div>
                    <span className="px-3 py-1 bg-gray-200 text-night/60 rounded-full text-sm font-bold">28%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-bold text-night">Tamil, Telugu, Malayalam</div>
                      <div className="text-sm text-night/60">Regional Communities</div>
                    </div>
                    <span className="px-3 py-1 bg-gray-200 text-night/60 rounded-full text-sm font-bold">Mixed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-lagoon" />
                  Demographics
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-lagoon/5 rounded-xl">
                    <div className="text-3xl font-bold text-lagoon mb-1">3.8L+</div>
                    <div className="text-sm text-night/60">Population</div>
                  </div>
                  <div className="text-center p-4 bg-lagoon/5 rounded-xl">
                    <div className="text-3xl font-bold text-lagoon mb-1">89%</div>
                    <div className="text-sm text-night/60">Literacy Rate</div>
                  </div>
                </div>
                <p className="text-night/70 text-sm leading-relaxed">
                  The islands have a unique culture where festivals of all religions—Durga Puja, Diwali, Christmas, Eid, and Pongal—are celebrated with equal enthusiasm by everyone, reflecting true secularism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Travel Tips Section */}
        <section id="travel-tips" className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-azure font-bold tracking-wider uppercase text-sm mb-2 block">Plan Smart</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night font-display mb-4">
                  Essential Travel Tips
                </h2>
                <p className="text-night/60 max-w-2xl mx-auto">
                  Key information to ensure a smooth and hassle-free vacation in the islands.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Connectivity */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3">Mobile & Internet</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">
                    Network connectivity can be patchy. <strong>Airtel and Jio</strong> offer the best 4G coverage in Port Blair, Havelock, and Neil. BSNL is reliable for calls.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-800 font-medium">
                    Tip: Download offline maps and content before arrival.
                  </div>
                </div>

                {/* Money */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3">ATMs & Cash</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">
                    ATMs are available in Port Blair, Havelock, and Neil, but can run out of cash. Digital payments (UPI) work but depend on the network.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-xs text-green-800 font-medium">
                    Tip: Carry sufficient cash for small vendors and remote areas.
                  </div>
                </div>

                {/* Safety */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-night mb-3">Safety & Permits</h3>
                  <p className="text-night/70 text-sm mb-4 leading-relaxed">
                    Andaman is very safe for tourists. Foreign nationals no longer need a Restricted Area Permit (RAP) for major islands.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg text-xs text-red-800 font-medium">
                    Tip: Do not collect corals or shells; it is strictly prohibited and punishable.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="faqs">
          <FaqAccordion 
            title="Frequently Asked Questions"
            description="Common queries answered to help you plan better."
            faqs={[
              {
                question: "What is the best itinerary for a 5-day trip?",
                answer: "A classic 5-day itinerary includes: Day 1 - Arrival in Port Blair & Cellular Jail; Day 2 - Ferry to Havelock & Radhanagar Beach; Day 3 - Elephant Beach Water Sports; Day 4 - Return to Port Blair via Neil Island (optional) or Chidiya Tapu sunset; Day 5 - Departure. This covers the essentials without rushing."
              },
              {
                question: "Is vegetarian food easily available?",
                answer: "Yes, absolutely. While Andaman is famous for seafood, all hotels and restaurants serve excellent North Indian, South Indian, and Continental vegetarian dishes. Pure veg restaurants are also available in Port Blair and Havelock."
              },
              {
                question: "Can we rent bikes in Andaman?",
                answer: "Yes, renting two-wheelers is the most popular way to explore Havelock and Neil Islands. Cost ranges from ₹500-₹800 per day. You will need a valid driving license. In Port Blair, cabs or auto-rickshaws are preferred due to traffic and distances."
              },
              {
                question: "Are there crocodiles in Andaman beaches?",
                answer: "Saltwater crocodiles inhabit the mangroves and creeks of Andaman. However, popular tourist beaches like Radhanagar, Elephant Beach, and Bharatpur are safe and monitored. Always heed warning signs and avoid swimming in restricted areas or near mangroves."
              },
              {
                question: "What should I pack for the trip?",
                answer: "Pack light cotton clothes, swimwear, comfortable flip-flops/sandals, sunglasses, a hat, and high SPF sunscreen. Don't forget your personal medication, a power bank, and a waterproof bag for your electronics during boat rides."
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
