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
      
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-azure/20 via-pearl to-sunset/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-sunset/20 text-sunset rounded-full mb-6 text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Most Popular Island
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-night mb-6 leading-tight">
              Discover Havelock Island
            </h1>
            <p className="text-xl sm:text-2xl text-night/70 mb-8 leading-relaxed">
              Home to Asia's Best Beach & pristine underwater paradise - Experience world-class diving, stunning beaches, and tropical beauty
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-night/60">
              <div className="flex items-center">
                <Waves className="w-5 h-5 text-azure mr-2" />
                <span>{havelockDestinations.length} Beach Destinations</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-azure mr-2" />
                <span>Best: Oct-May</span>
              </div>
              <div className="flex items-center">
                <Camera className="w-5 h-5 text-sunset mr-2" />
                <span>Perfect for Adventure</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-6">About Havelock Island</h2>
              <div className="prose prose-lg text-night/70 space-y-4">
                <p>
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
                Must-Visit Destinations in Havelock
              </h2>
              <p className="text-night/70 text-lg max-w-2xl mx-auto">
                From pristine beaches to underwater adventures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {havelockDestinations.map((destination, index) => (
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
                      {destination.name.includes('Radhanagar') && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-sunset text-pearl rounded-full text-sm font-bold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Asia's Best Beach
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

      <section className="py-12 sm:py-16 bg-gradient-to-br from-azure/5 to-sunset/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-night mb-4">Popular Activities</h2>
              <p className="text-night/70">Make the most of your Havelock experience</p>
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
                  className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <h3 className="font-bold text-night mb-2">{activity.title}</h3>
                  <p className="text-sm text-night/60">{activity.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-night via-night/95 to-azure/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pearl mb-4">
              Experience Havelock's Paradise
            </h2>
            <p className="text-pearl/80 mb-8 text-lg">
              Book your Havelock adventure with expert-curated packages
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

export default HavelockDestinations;
