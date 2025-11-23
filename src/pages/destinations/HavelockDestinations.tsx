import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Navigation, Star, Waves, Camera } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';
import { destinations } from '../../data/destinations';

const HavelockDestinations = () => {
  const havelockDestinations = destinations.filter(d => d.category === 'havelock');
  
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Havelock Island', path: '/destinations/havelock-destinations' },
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Havelock Island Destinations - Asia's Best Beach & Water Sports Paradise"
        description="Explore Radhanagar Beach (Asia's Best), Elephant Beach, and top Havelock attractions. Complete guide to water sports, diving, and island activities."
        keywords="havelock island, radhanagar beach, elephant beach, havelock destinations, asia best beach, havelock water sports, scuba diving havelock, snorkeling havelock, havelock tourism, swaraj dweep"
        pathname="/destinations/havelock-destinations"
      />
      
      <Header />
      
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Havelock Island" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full mb-6 text-sm font-medium tracking-wider uppercase">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
              Most Popular Island
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
              Discover Havelock
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Home to Asia's Best Beach & pristine underwater paradise - Experience world-class diving and tropical beauty
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Waves className="w-5 h-5 text-blue-300" />
                <span>{havelockDestinations.length} Beach Destinations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-blue-300" />
                <span>Best: Oct-May</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Island Paradise</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-display">About Havelock Island</h2>
              <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-display first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                  Havelock Island, officially known as Swaraj Dweep, is the crown jewel of the Andaman Islands. 
                  This 113 sq km paradise is famous for the spectacular Radhanagar Beach, consistently ranked as 
                  one of Asia's best beaches, and Elephant Beach, a snorkeling haven.
                </p>
                <p>
                  The island offers an incredible blend of pristine white-sand beaches, crystal-clear turquoise waters, 
                  and lush tropical forests. Havelock is a diver's paradise with some of the world's best dive sites, 
                  featuring vibrant coral reefs teeming with marine life.
                </p>
                <p>
                  Located about 70 km northeast of Port Blair, Havelock is easily accessible by ferry (2-3 hours) or 
                  fast catamaran (1 hour). The island has developed excellent tourism infrastructure while maintaining 
                  its natural charm, with beach resorts, dive centers, and restaurants catering to all budgets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Must Visit</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-display">
                Top Destinations
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From pristine beaches to underwater adventures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {havelockDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
                      {destination.name.includes('Radhanagar') && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-1.5 bg-yellow-500 text-white rounded-full text-xs font-bold tracking-wide shadow-lg flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" /> Asia's Best Beach
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-white mb-3 font-display">
                          {destination.name}
                        </h3>
                        <p className="text-white/90 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {destination.activities.slice(0, 3).map((activity, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full border border-white/30"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex items-center justify-between">
                      <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                        Explore Destination <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {destination.ticketInfo?.entryFee === 0 ? (
                        <span className="text-sm font-bold text-green-600">Free Entry</span>
                      ) : destination.ticketInfo?.entryFee && (
                        <span className="text-sm font-bold text-gray-500">
                          From ₹{destination.ticketInfo.entryFee}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Things To Do</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Popular Activities</h2>
              <p className="text-gray-500">Make the most of your Havelock experience</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Scuba Diving', desc: 'Explore vibrant coral reefs', icon: '🤿' },
                { title: 'Snorkeling', desc: 'Shallow reef exploration', icon: '🏊' },
                { title: 'Beach Hopping', desc: 'Visit pristine beaches', icon: '🏖️' },
                { title: 'Sea Walking', desc: 'Walk on ocean floor', icon: '👣' },
              ].map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-5xl mb-4">{activity.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
          <img 
            src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-cyan-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">
              Experience Havelock's Paradise
            </h2>
            <p className="text-blue-100 mb-10 text-xl font-light leading-relaxed">
              Book your Havelock adventure with expert-curated packages
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 text-lg font-bold shadow-xl"
              >
                <Navigation className="w-5 h-5 mr-2" />
                View Packages
              </Link>
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all transform hover:scale-105 text-lg font-bold backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Your Trip
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HavelockDestinations;
