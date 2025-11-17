import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Navigation, Heart, Waves, Sunrise } from 'lucide-react';
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
      
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-sunrise/20 via-pearl to-azure/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-sunrise/20 text-sunrise rounded-full mb-6 text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Perfect for Relaxation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-night mb-6 leading-tight">
              Discover Neil Island
            </h1>
            <p className="text-xl sm:text-2xl text-night/70 mb-8 leading-relaxed">
              Serene beaches, natural wonders & laid-back charm - Experience the peaceful side of Andaman Islands
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-night/60">
              <div className="flex items-center">
                <Waves className="w-5 h-5 text-azure mr-2" />
                <span>{neilDestinations.length} Natural Attractions</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-azure mr-2" />
                <span>Best: Nov-Apr</span>
              </div>
              <div className="flex items-center">
                <Sunrise className="w-5 h-5 text-sunrise mr-2" />
                <span>Perfect for Couples</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-6">About Neil Island</h2>
              <div className="prose prose-lg text-night/70 space-y-4">
                <p>
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
                Must-Visit Destinations in Neil Island
              </h2>
              <p className="text-night/70 text-lg max-w-2xl mx-auto">
                From coral beaches to natural rock formations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {neilDestinations.map((destination, index) => (
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
                      {destination.name.includes('Natural Bridge') && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-sunrise text-pearl rounded-full text-sm font-bold">
                            Natural Wonder
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-pearl mb-3 group-hover:text-sunrise transition-colors">
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
                        <span className="text-sm font-semibold text-azure group-hover:text-sunrise transition-colors flex items-center">
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

      <section className="py-12 sm:py-16 bg-gradient-to-br from-sunrise/5 to-azure/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-night mb-4">Travel Tips for Neil Island</h2>
              <p className="text-night/70">Essential information for your peaceful retreat</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">Best Time to Visit</h3>
                    <p className="text-night/70 leading-relaxed">
                      November to April offers calm seas and perfect weather. Natural Bridge is best visited during low tide (early morning or evening).
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sunset/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Navigation className="w-6 h-6 text-sunset" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">How to Reach</h3>
                    <p className="text-night/70 leading-relaxed">
                      Ferry from Port Blair (1-2 hours) or Havelock (30-45 minutes). Book tickets in advance, especially during peak season.
                    </p>
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
                  <div className="w-12 h-12 bg-sunrise/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sunrise" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">Getting Around</h3>
                    <p className="text-night/70 leading-relaxed">
                      Rent bicycles (₹100-200/day) or scooters (₹400-600/day). The island is small and easy to explore. Auto-rickshaws available for ₹50-100.
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
                    <Heart className="w-6 h-6 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night mb-2">Essential Tips</h3>
                    <p className="text-night/70 leading-relaxed">
                      Limited ATMs - carry cash. Book accommodation in advance. Perfect for 1-2 night stays. Combine with Havelock for best experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-night via-night/95 to-sunrise/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pearl mb-4">
              Experience Neil's Tranquility
            </h2>
            <p className="text-pearl/80 mb-8 text-lg">
              Book your peaceful island getaway with curated packages
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

export default NeilDestinations;
