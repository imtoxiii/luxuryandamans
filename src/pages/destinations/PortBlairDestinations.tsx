import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Navigation, Star, Clock, Camera } from 'lucide-react';
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
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-azure/10 via-pearl to-sunset/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-azure/10 text-azure rounded-full mb-6 text-sm font-medium">
              <MapPin className="w-4 h-4 mr-2" />
              Capital City
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-night mb-6 leading-tight">
              Explore Port Blair Destinations
            </h1>
            <p className="text-xl sm:text-2xl text-night/70 mb-8 leading-relaxed">
              The gateway to Andaman Islands - Discover historic sites, pristine beaches, and cultural landmarks in the capital city
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-night/60">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-sunset mr-2" />
                <span>{portBlairDestinations.length} Destinations</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-azure mr-2" />
                <span>Year-round Access</span>
              </div>
              <div className="flex items-center">
                <Camera className="w-5 h-5 text-sunset mr-2" />
                <span>Perfect for History & Nature</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-6">About Port Blair</h2>
              <div className="prose prose-lg text-night/70 space-y-4">
                <p>
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-4">
                Top Destinations in Port Blair
              </h2>
              <p className="text-night/70 text-lg max-w-2xl mx-auto">
                Explore historic landmarks, beautiful beaches, and cultural attractions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {portBlairDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                      <div className="absolute top-4 left-4">
                        {destination.ticketInfo?.entryFee === 0 ? (
                          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                            Free Entry
                          </span>
                        ) : (
                          <span className="px-3 py-1 glass-sunset-badge text-xs font-semibold">
                            ₹{destination.ticketInfo?.entryFee}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-pearl mb-2 group-hover:text-sunset transition-colors">
                          {destination.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-night/70 mb-4 line-clamp-2 leading-relaxed">
                        {destination.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {destination.quickInfo && (
                          <>
                            {destination.quickInfo['Visiting Time'] && (
                              <div className="flex items-center text-sm text-night/60">
                                <Clock className="w-4 h-4 mr-2 text-azure flex-shrink-0" />
                                <span>{destination.quickInfo['Visiting Time']}</span>
                              </div>
                            )}
                            {destination.quickInfo['Distance from Airport'] && (
                              <div className="flex items-center text-sm text-night/60">
                                <MapPin className="w-4 h-4 mr-2 text-azure flex-shrink-0" />
                                <span>{destination.quickInfo['Distance from Airport']}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-medium text-azure group-hover:text-sunset transition-colors">
                          Explore Now
                        </span>
                        <ArrowRight className="w-5 h-5 text-azure group-hover:text-sunset group-hover:translate-x-1 transition-all" />
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-8">Port Blair Travel Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-azure/5 p-6 rounded-xl border border-azure/20">
                  <h3 className="font-bold text-night mb-3">Best Time to Visit</h3>
                  <p className="text-night/70 text-sm leading-relaxed">
                    October to May offers pleasant weather with temperatures between 23-31°C. 
                    Monsoon season (June-September) experiences heavy rainfall.
                  </p>
                </div>
                <div className="bg-sunset/5 p-6 rounded-xl border border-sunset/20">
                  <h3 className="font-bold text-night mb-3">How to Reach</h3>
                  <p className="text-night/70 text-sm leading-relaxed">
                    Veer Savarkar International Airport connects to major cities. 
                    Passenger ships from Kolkata, Chennai, and Vizag are also available.
                  </p>
                </div>
                <div className="bg-azure/5 p-6 rounded-xl border border-azure/20">
                  <h3 className="font-bold text-night mb-3">Getting Around</h3>
                  <p className="text-night/70 text-sm leading-relaxed">
                    Auto-rickshaws, taxis, and rental scooters are readily available. 
                    Most attractions are within 10-15 km from the city center.
                  </p>
                </div>
                <div className="bg-sunset/5 p-6 rounded-xl border border-sunset/20">
                  <h3 className="font-bold text-night mb-3">Essential Tips</h3>
                  <p className="text-night/70 text-sm leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-night via-night/95 to-azure/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pearl mb-4">
              Ready to Explore Port Blair?
            </h2>
            <p className="text-pearl/80 mb-8 text-lg">
              Let us help you plan the perfect Port Blair experience with expertly crafted itineraries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg font-semibold"
              >
                <Navigation className="w-5 h-5 mr-2" />
                View Tour Packages
              </Link>
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg font-semibold"
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
