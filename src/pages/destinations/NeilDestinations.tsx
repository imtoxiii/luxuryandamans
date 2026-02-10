import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Navigation, Heart, Waves } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';
import { destinations } from '../../data/destinations';

const NeilDestinations = () => {
  const neilDestinations = destinations.filter(d => d.category === 'neil');
  
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Neil Island', path: '/destinations/neil-destinations' },
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Neil Island Destinations - Peaceful Paradise & Coral Reef Beaches"
        description="Explore Bharatpur Beach, Natural Bridge, and Neil Island attractions. Complete guide to coral reefs, snorkeling, and serene island life."
        keywords="neil island, bharatpur beach, natural bridge, neil destinations, shaheed dweep, neil island tourism, coral reefs neil, snorkeling neil, peaceful island, neil island guide"
        pathname="/destinations/neil-destinations"
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
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Neil Island" 
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
              <Heart className="w-4 h-4 mr-2 text-pink-400 fill-pink-400" />
              Perfect for Relaxation
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
              Discover Neil Island
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Serene beaches, natural wonders & laid-back charm - Experience the peaceful side of Andaman Islands
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Waves className="w-5 h-5 text-blue-300" />
                <span>{neilDestinations.length} Natural Attractions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-blue-300" />
                <span>Best: Nov-Apr</span>
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
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Tranquil Escape</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-display">About Neil Island</h2>
              <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-display first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                  Neil Island, officially renamed as Shaheed Dweep, is a small but incredibly beautiful island 
                  known for its peaceful atmosphere and stunning natural beauty. With an area of just 13.7 sq km, 
                  this tiny paradise offers an escape from the crowds to pristine beaches and unique geological formations.
                </p>
                <p>
                  The island is famous for Bharatpur Beach with its shallow coral reefs perfect for snorkeling, 
                  and the Natural Bridge (Howrah Bridge), a natural rock formation that's one of the most photographed 
                  spots in the Andamans. Neil Island moves at a slower pace, perfect for honeymooners and those 
                  seeking tranquility.
                </p>
                <p>
                  Located about 40 km from Port Blair and just 20 km from Havelock Island, Neil is easily accessible 
                  by ferry (1-2 hours from Port Blair, 30-45 minutes from Havelock). The island has a charming 
                  village atmosphere with small guesthouses, beach shacks, and coconut groves lining the roads.
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
                Top Attractions
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From coral beaches to natural rock formations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {neilDestinations.map((destination, index) => (
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
                      
                      {destination.name.includes('Natural Bridge') && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-bold tracking-wide shadow-lg">
                            Natural Wonder
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

      {/* Travel Tips Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Travel Guide</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Essential Tips</h2>
              <p className="text-gray-500">Information for your peaceful retreat</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-blue-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Best Time to Visit</h3>
                    <p className="text-gray-600 leading-relaxed">
                      November to April offers calm seas and perfect weather. Natural Bridge is best visited during low tide (early morning or evening).
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-orange-600">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">How to Reach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ferry from Port Blair (1-2 hours) or Havelock (30-45 minutes). Book tickets in advance, especially during peak season.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-green-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Getting Around</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Rent bicycles (₹100-200/day) or scooters (₹400-600/day). The island is small and easy to explore. Auto-rickshaws available for ₹50-100.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-pink-50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-pink-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Essential Tips</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Limited ATMs - carry cash. Book accommodation in advance. Perfect for 1-2 night stays. Combine with Havelock for best experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
          <img 
            src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
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
              Experience Neil's Tranquility
            </h2>
            <p className="text-blue-100 mb-10 text-xl font-light leading-relaxed">
              Book your peaceful island getaway with curated packages
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

export default NeilDestinations;
