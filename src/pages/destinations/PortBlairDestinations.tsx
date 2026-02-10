import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Navigation, Star } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';
import { destinations } from '../../data/destinations';

const PortBlairDestinations = () => {
  const portBlairDestinations = destinations.filter(d => d.category === 'port-blair');
  
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Port Blair', path: '/destinations/port-blair-destinations' },
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Port Blair Destinations - Explore the Capital of Andaman Islands"
        description="Discover top attractions in Port Blair including Cellular Jail, Ross Island, North Bay Island, and more. Complete travel guide with activities, timings, and tips."
        keywords="port blair destinations, port blair attractions, cellular jail, ross island, north bay island, port blair sightseeing, places to visit port blair, port blair tourism, andaman capital, port blair travel guide"
        pathname="/destinations/port-blair-destinations"
      />
      
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1630569688747-0e3b60f6430f?q=80&w=1214&auto=format&fit=crop" 
            alt="Port Blair" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full mb-6 text-sm font-medium tracking-wider uppercase">
              <MapPin className="w-4 h-4 mr-2" />
              Capital City
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
              Explore Port Blair
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              The gateway to Andaman Islands - Discover historic sites, pristine beaches, and cultural landmarks
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{portBlairDestinations.length} Destinations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-blue-300" />
                <span>Year-round Access</span>
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
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">About The City</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-display">Gateway to Paradise</h2>
              <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-display first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                  Port Blair, the capital of Andaman and Nicobar Islands, serves as the main entry point to this tropical paradise. 
                  Rich in history and natural beauty, Port Blair offers a perfect blend of colonial heritage, pristine beaches, 
                  and vibrant marine life.
                </p>
                <p>
                  Named after Lieutenant Archibald Blair, Port Blair is home to the iconic Cellular Jail, a testament to India's 
                  freedom struggle. The city also serves as a base for exploring nearby islands like Ross Island and North Bay Island, 
                  each offering unique experiences from historical ruins to thrilling water sports.
                </p>
                <p>
                  With Veer Savarkar International Airport connecting Port Blair to major Indian cities, it's easily accessible 
                  and offers excellent infrastructure including hotels, restaurants, and shopping areas. The city's Aberdeen Bazaar 
                  is a bustling market where you can find local handicrafts, pearls, and shell jewelry.
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
                Explore historic landmarks, beautiful beaches, and cultural attractions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portBlairDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
                      <div className="absolute top-4 left-4">
                        {destination.ticketInfo?.entryFee === 0 ? (
                          <span className="px-4 py-1.5 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-xs font-bold tracking-wide shadow-lg">
                            Free Entry
                          </span>
                        ) : (
                          <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-bold tracking-wide shadow-lg">
                            ₹{destination.ticketInfo?.entryFee}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white mb-2 font-display">
                          {destination.name}
                        </h3>
                        <div className="flex items-center text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <MapPin className="w-4 h-4 mr-1" />
                          {destination.quickInfo?.['Distance from Airport'] || 'Port Blair'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {destination.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                          Explore Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Travel Guide</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">Essential Tips</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Best Time to Visit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    October to May offers pleasant weather with temperatures between 23-31°C. 
                    Monsoon season (June-September) experiences heavy rainfall.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">How to Reach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Veer Savarkar International Airport connects to major cities. 
                    Passenger ships from Kolkata, Chennai, and Vizag are also available.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Getting Around</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Auto-rickshaws, taxis, and rental scooters are readily available. 
                    Most attractions are within 10-15 km from the city center.
                  </p>
                </div>
                <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Local Tips</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Carry sufficient cash as ATMs can be crowded. Book island ferries in advance 
                    during peak season. Respect local customs and environment.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Ready to Explore Port Blair?
            </h2>
            <p className="text-blue-100 mb-10 text-xl font-light leading-relaxed">
              Let us help you plan the perfect Port Blair experience with expertly crafted itineraries
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 text-lg font-bold shadow-xl"
              >
                <Navigation className="w-5 h-5 mr-2" />
                View Tour Packages
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

export default PortBlairDestinations;
