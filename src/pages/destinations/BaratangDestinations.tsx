import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Navigation, Mountain, AlertTriangle, Clock } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';
import { destinations } from '../../data/destinations';

const BaratangDestinations = () => {
  const baratangDestinations = destinations.filter(d => d.category === 'baratang');
  
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Baratang Island', path: '/destinations/baratang-destinations' },
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Baratang Island Destinations - Limestone Caves & Mud Volcano Adventure"
        description="Explore Limestone Caves, Mud Volcano, and Baratang's natural wonders. Complete guide to convoy travel, tribal reserves, and unique geological formations."
        keywords="baratang island, limestone caves, mud volcano, baratang destinations, baratang tourism, jarawa reserve, baratang convoy, mangrove creek, parrot island, baratang adventure"
        pathname="/destinations/baratang-destinations"
      />
      
      <Header />
      
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-sunset/20 via-pearl to-azure/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-sunset/20 text-sunset rounded-full mb-6 text-sm font-medium">
              <Mountain className="w-4 h-4 mr-2" />
              Adventure Awaits
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-night mb-6 leading-tight">
              Discover Baratang Island
            </h1>
            <p className="text-xl sm:text-2xl text-night/70 mb-8 leading-relaxed">
              Ancient caves, volcanic mud pools & mangrove mysteries - Experience the wild side of Andaman Islands
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-night/60">
              <div className="flex items-center">
                <Mountain className="w-5 h-5 text-sunset mr-2" />
                <span>{baratangDestinations.length} Natural Wonders</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-azure mr-2" />
                <span>Best: Oct-May</span>
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-sunset mr-2" />
                <span>Convoy Travel Required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-6">About Baratang Island</h2>
              <div className="prose prose-lg text-night/70 space-y-4">
                <p>
                  Baratang Island is a remote and adventurous destination located about 100 km north of Port Blair. 
                  Known for its unique geological formations including limestone caves formed millions of years ago 
                  and active mud volcanoes, Baratang offers experiences unlike anywhere else in the Andamans.
                </p>
                <p>
                  The journey to Baratang is an adventure itself - you must travel through the Jarawa Tribal Reserve 
                  in a police-escorted convoy. The tribe is protected, and strict rules apply (no photography, no 
                  stopping). After reaching Nilambur Jetty, a thrilling speedboat ride through dense mangrove creeks 
                  takes you to the limestone caves.
                </p>
                <p>
                  Baratang is perfect for adventure seekers and nature enthusiasts. The island sees fewer tourists, 
                  making it ideal for those seeking off-the-beaten-path experiences. The journey requires careful 
                  planning - convoy times are fixed (usually 6 AM, 9 AM, 2 PM from Port Blair), and it's typically 
                  done as a long day trip or overnight stay.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                Must-Visit Destinations in Baratang
              </h2>
              <p className="text-night/70 text-lg max-w-2xl mx-auto">
                From ancient caves to volcanic formations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {baratangDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
                      {destination.name.includes('Limestone') && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-sunset text-pearl rounded-full text-sm font-bold">
                            Ancient Wonder
                          </span>
                        </div>
                      )}
                      {destination.name.includes('Mud Volcano') && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-azure text-pearl rounded-full text-sm font-bold">
                            Active Volcano
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-pearl mb-3 group-hover:text-sunset transition-colors">
                          {destination.name}
                        </h3>
                        <p className="text-pearl/90 line-clamp-2 mb-4">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {destination.activities.slice(0, 3).map((activity, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-pearl/20 backdrop-blur-sm text-pearl text-xs rounded-full"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-azure group-hover:text-sunset transition-colors flex items-center">
                          Explore Destination
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {destination.ticketInfo?.entryFee === 0 ? (
                          <span className="text-sm font-semibold text-green-600">Free Entry</span>
                        ) : destination.ticketInfo?.entryFee && (
                          <span className="text-sm font-semibold text-night/60">
                            From ₹{destination.ticketInfo.entryFee}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-sunset/5 to-azure/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-night mb-4">Essential Travel Information</h2>
              <p className="text-night/70">Important guidelines for your Baratang adventure</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-sunset"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sunset/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-sunset" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">Convoy Timings</h3>
                    <p className="text-night/70 leading-relaxed mb-3">
                      Travel through Jarawa Reserve in police-escorted convoy:
                    </p>
                    <ul className="text-night/70 text-sm space-y-1 list-disc list-inside">
                      <li>From Port Blair: 6:00 AM, 9:00 AM, 2:00 PM</li>
                      <li>From Baratang: 8:00 AM, 11:00 AM, 4:00 PM</li>
                      <li>Journey: 2.5-3 hours one way</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-azure"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">Jarawa Reserve Rules</h3>
                    <p className="text-night/70 leading-relaxed mb-3">
                      Strict guidelines for tribal protection:
                    </p>
                    <ul className="text-night/70 text-sm space-y-1 list-disc list-inside">
                      <li>No photography or videography</li>
                      <li>No stopping or interaction with tribe</li>
                      <li>Stay inside vehicle at all times</li>
                      <li>Heavy fines for violations</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sunset/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Navigation className="w-6 h-6 text-sunset" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">How to Plan</h3>
                    <p className="text-night/70 leading-relaxed">
                      Start early (5:30 AM from Port Blair recommended). Book speedboat in advance (₹500-700 per person). 
                      Hire local guide at Nilambur Jetty. Can be done as day trip or stay overnight in basic accommodations.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">What to Bring</h3>
                    <p className="text-night/70 leading-relaxed">
                      Comfortable shoes for cave walking, torch/headlamp, water bottles, snacks, insect repellent, 
                      motion sickness medicine (for boat ride), and cash (limited ATM availability).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-gradient-to-r from-sunset/10 to-azure/10 p-8 rounded-2xl"
            >
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-sunset mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-night mb-2">Important Advisory</h3>
                  <p className="text-night/70 leading-relaxed">
                    Baratang requires physical fitness (boat ride, cave walking). Not recommended during monsoon (June-September) 
                    due to rough seas and heavy rain. Always check weather and convoy schedules before planning. Consider booking 
                    through tour operators for hassle-free experience with permits and transportation arranged.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-night via-night/95 to-sunset/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pearl mb-4">
              Experience Baratang's Wilderness
            </h2>
            <p className="text-pearl/80 mb-8 text-lg">
              Book your adventure with expert-guided tours and complete arrangements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg font-semibold"
              >
                <Navigation className="w-5 h-5 mr-2" />
                View Packages
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

export default BaratangDestinations;
