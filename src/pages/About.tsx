import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Plane, 
  Compass, 
  Sun, 
  Users, 
  BookOpen, 
  Clock,
  Thermometer,
  Cloud,
  Umbrella,
  Wind,
  History,
  Globe,
  Languages,
  ChevronRight,
  Navigation,
  Map,
  Timer,
  Activity,
  Star,
  CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const GuidePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Local image paths - Add your images to src/assets/images/about/
  const localImages = {
    // andamanOverview: '/src/assets/images/about/andaman-overview.jpg',
    // cellularJail: '/src/assets/images/about/cellular-jail.jpg',
    // Replace these with your local image paths
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'how-to-reach', label: 'How to Reach', icon: <Plane className="w-5 h-5" /> },
    { id: 'best-time', label: 'Best Time to Visit', icon: <Calendar className="w-5 h-5" /> },
    { id: 'things-to-do', label: 'Things to Do', icon: <Activity className="w-5 h-5" /> },
    { id: 'history', label: 'Island History', icon: <History className="w-5 h-5" /> },
    { id: 'weather', label: 'Weather', icon: <Sun className="w-5 h-5" /> },
    { id: 'people-language', label: 'People & Language', icon: <Users className="w-5 h-5" /> }
  ];

  // Scroll to section when nav item is clicked
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Complete Andaman Islands Travel Guide - Everything You Need to Know"
        description="Comprehensive guide to Andaman Islands covering how to reach, best time to visit, things to do, weather, history, people and language. Plan your perfect trip."
        keywords="Andaman Islands guide, travel guide, how to reach Andaman, best time visit Andaman, Andaman weather, Andaman history, things to do Andaman"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 sm:pt-24 pb-6 sm:pb-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-night"
            >
            Andaman Islands Guide
            </motion.h1>
        </div>
      </div>



      {/* Navigation Section */}
      <section className="py-4 sm:py-6 bg-white sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile Navigation Title */}
          <div className="block sm:hidden text-center mb-4">
            <h3 className="text-lg font-bold text-night">Guide Sections</h3>
            <p className="text-sm text-night/60">Tap to navigate</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeSection === item.id
                    ? 'bg-azure text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-night hover:bg-gray-200'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="pb-16 sm:pb-20 lg:pb-24">
        {/* Overview Section */}
        <section id="overview" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                Discover the Andaman Islands
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
                <div>
                  <p className="text-base sm:text-lg text-night/80 mb-6 leading-relaxed">
                    The Andaman and Nicobar Islands, a breathtaking archipelago in the Bay of Bengal, comprise 572 pristine islands offering some of the world's most untouched natural beauty. Located approximately 1,200 km from the Indian mainland, these emerald isles are renowned for their crystal-clear waters, coral reefs, and pristine beaches.
                  </p>
                  <p className="text-base sm:text-lg text-night/80 mb-6 leading-relaxed">
                    With a tropical climate, rich marine life, and fascinating history, the Andaman Islands serve as the perfect destination for adventure seekers, nature lovers, and those seeking tranquil escapes. From world-class scuba diving to historical monuments, luxury resorts to untouched wilderness, these islands offer experiences that cater to every traveler.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Capital', value: 'Port Blair' },
                      { label: 'Major Groups', value: 'Andaman & Nicobar' },
                      { label: 'Best Beaches', value: 'Radhanagar, Elephant' },
                      { label: 'Activities', value: 'Diving, Snorkeling' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <div className="text-xs sm:text-sm text-night/60 mb-1">{item.label}</div>
                        <div className="text-sm sm:text-base font-semibold text-night">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-first lg:order-last">
                  {/* LOCAL IMAGE PLACEHOLDER - Replace with your image */}
                  {/* <img
                    src={localImages.andamanOverview}
                    alt="Andaman Islands Overview"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                  /> */}
                  
                  {/* FALLBACK ONLINE IMAGE - Remove when adding local image */}
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Andaman Islands Overview"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: <Compass className="w-8 h-8 text-azure" />,
                    title: 'Geographic Wonder',
                    description: 'Located between 6°-14°N latitude and 92°-94°E longitude, featuring diverse topography from hills to coral reefs.'
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-azure" />,
                    title: 'Biodiversity Hotspot',
                    description: 'Home to 2,200+ plant species, 250+ bird species, and some of the world\'s most pristine coral reefs.'
                  },
                  {
                    icon: <History className="w-8 h-8 text-azure" />,
                    title: 'Rich Heritage',
                    description: 'From ancient indigenous tribes to colonial history, these islands hold fascinating stories spanning millennia.'
                  }
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-azure/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-night mb-3 sm:mb-4">{highlight.title}</h3>
                    <p className="text-sm sm:text-base text-night/70 leading-relaxed">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Island History Section */}
        <section id="history" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                Island History & Heritage
              </h2>

              <div className="space-y-8 sm:space-y-12">
                {/* Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-night mb-6">Historical Timeline</h3>
                    <div className="space-y-6">
                      {[
                        {
                          period: 'Ancient Times',
                          event: 'Indigenous Tribes Settlement',
                          description: 'The Andaman Islands were inhabited by indigenous tribes for over 60,000 years, including the Great Andamanese, Onge, Jarawa, and Sentinelese peoples.'
                        },
                        {
                          period: '1858',
                          event: 'British Colonial Rule',
                          description: 'The British established the Andaman Islands as a penal colony, constructing the infamous Cellular Jail to house political prisoners.'
                        },
                        {
                          period: '1942-1945',
                          event: 'Japanese Occupation',
                          description: 'During World War II, the Japanese occupied the islands, leaving behind bunkers and fortifications that can still be seen today.'
                        },
                        {
                          period: '1947',
                          event: 'Indian Independence',
                          description: 'The islands became part of independent India, later developing into a Union Territory with focus on tourism and conservation.'
                        }
                      ].map((item, index) => (
                <motion.div
                  key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="border-l-4 border-azure pl-6"
                >
                          <div className="text-azure font-bold text-sm sm:text-base">{item.period}</div>
                          <div className="font-semibold text-night text-base sm:text-lg mb-2">{item.event}</div>
                          <div className="text-sm sm:text-base text-night/70">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
                  <div>
                    {/* LOCAL IMAGE PLACEHOLDER - Replace with your image */}
                    {/* <img
                      src={localImages.cellularJail}
                      alt="Cellular Jail Historical Monument"
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                    /> */}
                    
                    {/* FALLBACK ONLINE IMAGE - Remove when adding local image */}
                    <img
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Cellular Jail Historical Monument"
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>

                {/* Indigenous Heritage */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-night mb-6">Indigenous Heritage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-semibold text-night mb-3">Major Tribal Groups</h4>
                      <ul className="space-y-2 text-sm sm:text-base text-night/70">
                        <li>• <strong>Great Andamanese:</strong> The largest tribal group, traditionally nomadic</li>
                        <li>• <strong>Onge:</strong> Hunter-gatherers living in Little Andaman</li>
                        <li>• <strong>Jarawa:</strong> Semi-nomadic tribe in South and Middle Andaman</li>
                        <li>• <strong>Sentinelese:</strong> Isolated tribe on North Sentinel Island</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-night mb-3">Cultural Significance</h4>
                      <ul className="space-y-2 text-sm sm:text-base text-night/70">
                        <li>• Traditional fishing and hunting practices</li>
                        <li>• Unique languages and oral traditions</li>
                        <li>• Sustainable living in harmony with nature</li>
                        <li>• Protected under Indian tribal welfare laws</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

        {/* How to Reach Section */}
        <section id="how-to-reach" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                How to Reach Andaman Islands
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-night mb-4 sm:mb-6 flex items-center gap-3">
                    <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-azure" />
                    By Air (Recommended)
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                      <h4 className="font-semibold text-night mb-2 sm:mb-3">Veer Savarkar International Airport</h4>
                      <p className="text-sm sm:text-base text-night/70 mb-3 sm:mb-4">Located in Port Blair, this is the only commercial airport serving the islands.</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-night/60">From Chennai:</span>
                          <span className="font-medium">2 hours</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-night/60">From Kolkata:</span>
                          <span className="font-medium">2 hours 30 min</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-night/60">From Delhi:</span>
                          <span className="font-medium">3 hours 45 min</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-azure/10 p-4 sm:p-6 rounded-xl">
                      <h4 className="font-semibold text-night mb-2 sm:mb-3">Airlines Operating</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                        <span>• Air India</span>
                        <span>• IndiGo</span>
                        <span>• SpiceJet</span>
                        <span>• Go First</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-night mb-4 sm:mb-6 flex items-center gap-3">
                    <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-azure" />
                    By Sea
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                      <h4 className="font-semibold text-night mb-2 sm:mb-3">Government Ships</h4>
                      <p className="text-sm sm:text-base text-night/70 mb-3 sm:mb-4">Regular passenger ships operate from mainland India.</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-night/60">From Chennai:</span>
                          <span className="font-medium">56-60 hours</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-night/60">From Kolkata:</span>
                          <span className="font-medium">50-54 hours</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-night/60">From Vishakhapatnam:</span>
                          <span className="font-medium">36-40 hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl border border-yellow-200">
                      <h4 className="font-semibold text-night mb-2 sm:mb-3">Booking Information</h4>
                      <p className="text-sm sm:text-base text-night/70">Book through Directorate of Shipping Services or authorized travel agents. Advance booking recommended.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-night mb-4 sm:mb-6">Documents Required</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="font-semibold text-night mb-3 sm:mb-4">For Indian Citizens</h4>
                    <ul className="space-y-2 text-sm sm:text-base text-night/70">
                      <li>• Valid photo identity proof (Aadhaar, Passport, Voter ID, Driving License)</li>
                      <li>• Address proof</li>
                      <li>• Birth certificate for children under 18</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-night mb-3 sm:mb-4">For Foreign Nationals</h4>
                    <ul className="space-y-2 text-sm sm:text-base text-night/70">
                      <li>• Valid passport with Indian visa</li>
                      <li>• Restricted Area Permit (RAP) for certain areas</li>
                      <li>• Registration with local authorities within 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Best Time to Visit Section */}
        <section id="best-time" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                Best Time to Visit
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {[
                  {
                    season: 'Peak Season',
                    period: 'October to February',
                    weather: 'Pleasant & Dry',
                    temperature: '23°C - 30°C',
                    pros: ['Perfect weather', 'Clear skies', 'Ideal for water sports', 'Best visibility for diving'],
                    cons: ['Higher prices', 'Crowded beaches', 'Advance booking required'],
                    color: 'green'
                  },
                  {
                    season: 'Shoulder Season',
                    period: 'March to May',
                    weather: 'Warm & Humid',
                    temperature: '24°C - 37°C',
                    pros: ['Lower prices', 'Fewer crowds', 'Good for water activities', 'Better deals'],
                    cons: ['Higher temperatures', 'Increased humidity', 'Occasional heat waves'],
                    color: 'orange'
                  },
                  {
                    season: 'Monsoon Season',
                    period: 'June to September',
                    weather: 'Wet & Windy',
                    temperature: '25°C - 30°C',
                    pros: ['Lowest prices', 'Lush greenery', 'Dramatic landscapes', 'Cool evenings'],
                    cons: ['Heavy rainfall', 'Rough seas', 'Limited water sports', 'Ferry disruptions'],
                    color: 'blue'
                  }
                ].map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 ${
                      season.color === 'green' ? 'border-green-500' :
                      season.color === 'orange' ? 'border-orange-500' : 'border-blue-500'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      season.color === 'green' ? 'bg-green-100' :
                      season.color === 'orange' ? 'bg-orange-100' : 'bg-blue-100'
                    }`}>
                      <Calendar className={`w-6 h-6 ${
                        season.color === 'green' ? 'text-green-600' :
                        season.color === 'orange' ? 'text-orange-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-night mb-2">{season.season}</h3>
                    <div className="text-sm sm:text-base text-night/60 mb-1">{season.period}</div>
                    <div className="text-sm sm:text-base font-medium text-night mb-1">{season.weather}</div>
                    <div className="text-sm sm:text-base text-night/60 mb-4">{season.temperature}</div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-night mb-2 text-sm">Pros:</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-night/70">
                          {season.pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-green-500" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-night mb-2 text-sm">Cons:</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-night/70">
                          {season.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-red-500" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Monthly Breakdown */}
              <div className="bg-gradient-to-br from-azure/10 to-blue-50 p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-night mb-6 text-center">Monthly Weather Guide</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { month: 'October', temp: '23-30°C', rainfall: 'Low', condition: 'Excellent' },
                    { month: 'November', temp: '23-30°C', rainfall: 'Very Low', condition: 'Perfect' },
                    { month: 'December', temp: '22-29°C', rainfall: 'Minimal', condition: 'Perfect' },
                    { month: 'January', temp: '22-28°C', rainfall: 'Minimal', condition: 'Perfect' },
                    { month: 'February', temp: '23-29°C', rainfall: 'Low', condition: 'Excellent' },
                    { month: 'March', temp: '24-32°C', rainfall: 'Low', condition: 'Good' }
                  ].map((month, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="font-semibold text-night mb-2">{month.month}</div>
                      <div className="text-sm text-night/70 space-y-1">
                        <div>Temp: {month.temp}</div>
                        <div>Rain: {month.rainfall}</div>
                        <div className={`font-medium ${
                          month.condition === 'Perfect' ? 'text-green-600' :
                          month.condition === 'Excellent' ? 'text-blue-600' : 'text-orange-600'
                        }`}>
                          {month.condition}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </motion.div>
        </div>
      </section>

        {/* Things to Do Section */}
        <section id="things-to-do" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                Things to Do in Andaman Islands
              </h2>
              
              <p className="text-lg text-night/70 text-center mb-12 max-w-3xl mx-auto">
                From thrilling underwater adventures to peaceful nature walks, the Andaman Islands offer endless opportunities for every type of traveler. Discover over 50+ unique experiences across pristine islands.
              </p>

              {/* Hero Activity Image */}
              <div className="mb-16">
                <img
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Scuba diving in crystal clear waters of Andaman"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Activity Categories - Enhanced */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    category: 'Water Sports & Marine Adventures',
                    icon: <Activity className="w-8 h-8 text-blue-600" />,
                    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    activities: [
                      'Scuba Diving at Elephant Beach (₹3500)',
                      'Snorkeling at North Bay Island (₹1500)',
                      'Parasailing at Port Blair (₹2000)',
                      'Jet Skiing at Corbyn\'s Cove (₹1200)',
                      'Sea Walking at North Bay (₹3000)',
                      'Kayaking through Mangroves (₹800)',
                      'Banana Boat Rides (₹500)',
                      'Speed Boat Tours (₹1800)',
                      'Glass Bottom Boat Rides (₹800)',
                      'Deep Sea Fishing (₹4000)',
                      'Windsurfing at Havelock (₹1500)',
                      'Stand-up Paddleboarding (₹1000)'
                    ],
                    highlight: 'World-class diving sites with 95% underwater visibility'
                  },
                  {
                    category: 'Adventure & Nature Exploration',
                    icon: <Compass className="w-8 h-8 text-green-600" />,
                    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    activities: [
                      'Trekking to Saddle Peak (₹2000)',
                      'Island Hopping Tours (₹3500)',
                      'Limestone Cave Exploration (₹1500)',
                      'Mud Volcano Visit at Baratang (₹2500)',
                      'Mangrove Creek Safari (₹1800)',
                      'Bird Watching at Parrot Island (₹1200)',
                      'Jungle Trekking in Neil Island (₹800)',
                      'Mount Harriet National Park Trek (₹1000)',
                      'Chidiya Tapu Sunset Point (Free)',
                      'Mahatma Gandhi Marine National Park (₹100)',
                      'Nature Photography Tours (₹2000)',
                      'Camping at Beach (₹3000)'
                    ],
                    highlight: 'Unique biodiversity with 270+ bird species and endemic flora'
                  },
                  {
                    category: 'Cultural & Historical Experiences',
                    icon: <History className="w-8 h-8 text-purple-600" />,
                    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    activities: [
                      'Cellular Jail Light & Sound Show (₹300)',
                      'Ross Island Historical Tour (₹30)',
                      'Anthropological Museum Visit (₹20)',
                      'Fisheries Museum (₹10)',
                      'Samudrika Naval Marine Museum (₹30)',
                      'Japanese Bunkers Exploration (Free)',
                      'Viper Island Prison Ruins (₹50)',
                      'Chatham Saw Mill Tour (₹30)',
                      'Forest Museum Visit (₹10)',
                      'Mini Zoo at Haddo (₹10)',
                      'Local Village Cultural Tours (₹1500)',
                      'Traditional Cooking Classes (₹2000)'
                    ],
                    highlight: 'Rich 150+ years of documented colonial and wartime history'
                  },
                  {
                    category: 'Beach & Relaxation Activities',
                    icon: <Sun className="w-8 h-8 text-orange-600" />,
                    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    activities: [
                      'Radhanagar Beach Sunset (Free)',
                      'Beach Volleyball at Corbyn\'s Cove (Free)',
                      'Beach Yoga Sessions (₹500)',
                      'Elephant Beach Swimming (Free)',
                      'Bharatpur Beach Coral Viewing (Free)',
                      'Kalapathar Beach Photography (Free)',
                      'Laxmanpur Beach Exploration (Free)',
                      'Natural Bridge at Neil Island (Free)',
                      'Sitapur Beach Sunrise (Free)',
                      'Beach Camping (₹2500)',
                      'Beach Massage Services (₹1500)',
                      'Romantic Beach Dinners (₹4000)'
                    ],
                    highlight: 'Pristine beaches with powdery white sand and turquoise waters'
                  },
                  {
                    category: 'Unique & Specialty Experiences',
                    icon: <Star className="w-8 h-8 text-pink-600" />,
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    activities: [
                      'Night Kayaking with Bioluminescence (₹2500)',
                      'Dolphin Watching Tours (₹2000)',
                      'Turtle Nesting Site Visits (₹1500)',
                      'Coral Plantation Programs (₹1000)',
                      'Underwater Photography (₹3500)',
                      'Helicopter Rides (₹15000)',
                      'Seaplane Experiences (₹12000)',
                      'Luxury Yacht Cruises (₹8000)',
                      'Private Island Picnics (₹5000)',
                      'Stargazing Tours (₹800)',
                      'Traditional Fishing with Locals (₹1200)',
                      'Marine Life Research Programs (₹2500)'
                    ],
                    highlight: 'Once-in-a-lifetime experiences unique to Andaman Islands'
                  },
                  {
                    category: 'Wellness & Spa Activities',
                    icon: <Users className="w-8 h-8 text-teal-600" />,
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    activities: [
                      'Ayurvedic Spa Treatments (₹3000)',
                      'Beachside Yoga Classes (₹800)',
                      'Meditation Retreats (₹2500)',
                      'Traditional Thai Massage (₹2000)',
                      'Hot Stone Therapy (₹2500)',
                      'Couples Spa Packages (₹5000)',
                      'Aromatherapy Sessions (₹1800)',
                      'Reflexology Treatments (₹1200)',
                      'Wellness Detox Programs (₹4000)',
                      'Sunrise Meditation (₹500)',
                      'Nature Sound Therapy (₹800)',
                      'Holistic Healing Workshops (₹1500)'
                    ],
                    highlight: 'Rejuvenate your mind, body and soul in paradise settings'
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.category}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-azure/20 to-blue-100 rounded-full flex items-center justify-center mb-4 -mt-12 relative z-10 bg-white shadow-lg">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-night mb-4">{category.category}</h3>
                      <div className="max-h-48 overflow-y-auto mb-4">
                        <ul className="space-y-2">
                          {category.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-night/70">
                              <ChevronRight className="w-3 h-3 text-azure mt-1 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-azure/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-azure">{category.highlight}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Popular Multi-Day Experiences */}
              <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
                <h3 className="text-2xl font-bold text-night mb-6 text-center">Multi-Day Adventure Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      experience: '3-Day Havelock Explorer', 
                      duration: '3 days/2 nights', 
                      price: '₹12,500',
                      includes: ['Scuba diving', 'Beach hopping', 'Sunset cruise', 'Luxury stay'],
                      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
                    },
                    { 
                      experience: '5-Day Island Circuit', 
                      duration: '5 days/4 nights', 
                      price: '₹25,000',
                      includes: ['All major islands', 'Cultural tours', 'Adventure activities', 'Premium resorts'],
                      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
                    },
                    { 
                      experience: '7-Day Ultimate Adventure', 
                      duration: '7 days/6 nights', 
                      price: '₹45,000',
                      includes: ['All activities', 'Luxury accommodation', 'Private transfers', 'Personal guide'],
                      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
                    }
                  ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <img 
                        src={pkg.image} 
                        alt={pkg.experience}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-night mb-2">{pkg.experience}</h4>
                        <div className="text-sm text-night/60 mb-3">
                          <div className="mb-1">Duration: {pkg.duration}</div>
                          <div className="font-medium text-azure text-lg">From {pkg.price}</div>
                        </div>
                        <div className="space-y-1">
                          {pkg.includes.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-night/70">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {item}
                            </div>
                          ))}
                        </div>
                </div>
              </motion.div>
            ))}
          </div>
              </div>

              {/* Quick Must-Try Experiences */}
              <div className="bg-gradient-to-br from-azure/10 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-night mb-6 text-center">Top 10 Must-Try Experiences</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { experience: 'Radhanagar Beach Sunset', duration: '2 hours', price: 'Free', icon: <Sun className="w-5 h-5" /> },
                    { experience: 'Cellular Jail Light Show', duration: '1 hour', price: '₹300', icon: <History className="w-5 h-5" /> },
                    { experience: 'Elephant Beach Scuba', duration: '4 hours', price: '₹3500', icon: <Activity className="w-5 h-5" /> },
                    { experience: 'Neil Island Day Trip', duration: 'Full day', price: '₹2500', icon: <Navigation className="w-5 h-5" /> },
                    { experience: 'Limestone Caves Tour', duration: '6 hours', price: '₹1500', icon: <Compass className="w-5 h-5" /> },
                    { experience: 'Ross Island Heritage', duration: '3 hours', price: '₹30', icon: <MapPin className="w-5 h-5" /> },
                    { experience: 'Mangrove Kayaking', duration: '2 hours', price: '₹800', icon: <Users className="w-5 h-5" /> },
                    { experience: 'Bioluminescence Night', duration: '3 hours', price: '₹2500', icon: <Star className="w-5 h-5" /> },
                    { experience: 'Coral Garden Snorkel', duration: '3 hours', price: '₹1500', icon: <Activity className="w-5 h-5" /> },
                    { experience: 'Sunset Cruise', duration: '2 hours', price: '₹1800', icon: <Navigation className="w-5 h-5" /> }
                  ].map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-12 h-12 bg-azure/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="text-azure">
                          {exp.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-night mb-2 text-sm">{exp.experience}</h4>
                      <div className="text-xs text-night/60 space-y-1">
                        <div>Duration: {exp.duration}</div>
                        <div className="font-medium text-azure">{exp.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Weather Section */}
        <section id="weather" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-azure/10">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                Climate & Weather Conditions
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
                    <Thermometer className="w-8 h-8 text-red-500" />
                    Climate Overview
                  </h3>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-base sm:text-lg text-night/80 mb-6 leading-relaxed">
                      The Andaman Islands enjoy a tropical climate with warm temperatures year-round. The islands experience high humidity due to their oceanic location, with temperatures rarely dropping below 20°C or exceeding 35°C.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">32°C</div>
                        <div className="text-sm text-night/60">Average High</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">24°C</div>
                        <div className="text-sm text-night/60">Average Low</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
                    <Cloud className="w-8 h-8 text-gray-500" />
                    Seasonal Weather Patterns
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        season: 'Winter (Nov-Feb)',
                        icon: <Wind className="w-5 h-5 text-blue-500" />,
                        temp: '22-29°C',
                        humidity: '70-75%',
                        rainfall: 'Minimal',
                        description: 'Pleasant northeast winds, clear skies, perfect for outdoor activities'
                      },
                      {
                        season: 'Summer (Mar-May)',
                        icon: <Sun className="w-5 h-5 text-orange-500" />,
                        temp: '24-37°C',
                        humidity: '75-85%',
                        rainfall: 'Low',
                        description: 'Hot and humid, occasional afternoon showers provide relief'
                      },
                      {
                        season: 'Monsoon (Jun-Oct)',
                        icon: <Umbrella className="w-5 h-5 text-indigo-500" />,
                        temp: '25-30°C',
                        humidity: '85-95%',
                        rainfall: 'Heavy',
                        description: 'Southwest monsoon brings heavy rainfall, rough seas, lush greenery'
                      }
                    ].map((weather, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                          {weather.icon}
                          <span className="font-semibold text-night">{weather.season}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm mb-2">
                          <div>Temp: {weather.temp}</div>
                          <div>Humidity: {weather.humidity}</div>
                          <div>Rain: {weather.rainfall}</div>
                        </div>
                        <p className="text-xs sm:text-sm text-night/70">{weather.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Weather Tips */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-night mb-6 text-center">Weather Preparation Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sun className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-night mb-2">Sun Protection</h4>
                    <p className="text-sm text-night/70">High-SPF sunscreen, hat, sunglasses essential year-round</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Umbrella className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-night mb-2">Rain Gear</h4>
                    <p className="text-sm text-night/70">Waterproof clothing and umbrella for monsoon season</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wind className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-night mb-2">Breathable Clothes</h4>
                    <p className="text-sm text-night/70">Light, cotton clothing for comfort in humidity</p>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

        {/* People & Language Section */}
        <section id="people-language" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6 sm:mb-8 text-center">
                People & Languages
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-purple-600" />
                    Demographics
                  </h3>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">380,581</div>
                        <div className="text-sm text-night/60">Total Population</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">46.3/km²</div>
                        <div className="text-sm text-night/60">Population Density</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-night mb-2">Ethnic Composition</h4>
                        <ul className="space-y-2 text-sm text-night/70">
                          <li>• <strong>Bengalis:</strong> 26% - Largest community from West Bengal</li>
                          <li>• <strong>Tamils:</strong> 15% - Mainly from Tamil Nadu</li>
                          <li>• <strong>Telugu:</strong> 13% - From Andhra Pradesh</li>
                          <li>• <strong>Hindi speakers:</strong> 12% - From various North Indian states</li>
                          <li>• <strong>Indigenous tribes:</strong> 1% - Original inhabitants</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-night mb-6 flex items-center gap-3">
                    <Languages className="w-8 h-8 text-green-600" />
                    Languages Spoken
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h4 className="font-semibold text-night mb-4">Official Languages</h4>
                      <div className="grid grid-cols-2 gap-3">
                                                 <div className="bg-orange-50 p-3 rounded-lg text-center">
                           <div className="font-bold text-orange-600">Hindi</div>
                          <div className="text-xs text-night/60">Primary Official</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="font-bold text-blue-600">English</div>
                          <div className="text-xs text-night/60">Administrative</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h4 className="font-semibold text-night mb-4">Widely Spoken Languages</h4>
                      <div className="space-y-3">
                        {[
                          { language: 'Bengali', percentage: '28%', note: 'Most common regional language' },
                          { language: 'Tamil', percentage: '18%', note: 'Significant in southern areas' },
                          { language: 'Telugu', percentage: '15%', note: 'Common in settlements' },
                          { language: 'Hindi', percentage: '35%', note: 'Lingua franca for tourism' }
                        ].map((lang, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <div>
                              <span className="font-medium text-night">{lang.language}</span>
                              <div className="text-xs text-night/60">{lang.note}</div>
                            </div>
                            <span className="text-azure font-bold">{lang.percentage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-night mb-4 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-orange-600" />
                    Cultural Diversity
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-night/70">
                    <li>• Harmonious blend of different Indian cultures</li>
                    <li>• Major festivals: Durga Puja, Diwali, Christmas, Eid</li>
                    <li>• Rich culinary traditions from various regions</li>
                    <li>• Traditional arts and crafts preserved</li>
                    <li>• Strong community bonds across ethnicities</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-night mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    Local Hospitality
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-night/70">
                    <li>• Warm and welcoming to visitors</li>
                    <li>• English widely understood in tourist areas</li>
                    <li>• Helpful local guides and community leaders</li>
                    <li>• Respect for environmental conservation</li>
                    <li>• Strong maritime and fishing culture</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GuidePage;