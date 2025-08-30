import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Anchor, Sun, Map, Clock, Users } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const IslandHoppingPage = () => {
  const islands = [
    {
      name: "Ross Island",
      description: "Historical ruins and architectural heritage",
      duration: "4-5 hours",
      highlights: ["British Era Ruins", "Light & Sound Show", "Wildlife", "Photography"],
      image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "North Bay Island",
      description: "Perfect for water sports and coral viewing",
      duration: "5-6 hours",
      highlights: ["Snorkeling", "Glass Bottom Boat", "Coral Reefs", "Sea Walking"],
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const packages = [
    {
      name: "Day Explorer",
      duration: "Full Day",
      price: "₹4,500",
      includes: ["2 Islands", "Lunch", "Transfer", "Guide"],
      description: "Perfect for a quick island adventure"
    },
    {
      name: "Island Hopper Premium",
      duration: "2 Days",
      price: "₹8,500",
      includes: ["4 Islands", "All Meals", "Luxury Transfer", "Expert Guide"],
      description: "Comprehensive island exploration experience"
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Island Hopping"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">
                Island Hopping Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Discover hidden beaches and secluded paradise spots across multiple islands
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Island Hopping Adventures',
                      source: 'experience',
                      slug: 'island-hopping'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Adventure
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Expert Guides</h3>
              <p className="text-night/70">Knowledgeable local guides</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Private Boats</h3>
              <p className="text-night/70">Comfortable and safe transfers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Beach Time</h3>
              <p className="text-night/70">Relax on pristine beaches</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Hidden Spots</h3>
              <p className="text-night/70">Discover secret locations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islands Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Featured Islands
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Explore these amazing islands on your hopping adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {islands.map((island, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  <img
                    src={island.image}
                    alt={island.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">
                    {island.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{island.name}</h3>
                  <p className="text-night/70 mb-4">{island.description}</p>
                  <div className="space-y-2">
                    {island.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-night/60">
                        <span className="w-2 h-2 glass-sunset-dot mr-2" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Sample Itineraries</h2>
            <p className="text-night/70 max-w-2xl mx-auto">Pick a ready-made plan or ask us to tailor one for you</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-night mb-2">Half Day Highlights</h3>
              <p className="text-night/70 mb-3">Ross Island + North Bay</p>
              <ul className="space-y-2 text-night/70">
                <li>• Morning boat to Ross Island</li>
                <li>• Explore ruins and deer park</li>
                <li>• Transfer to North Bay for glass-bottom</li>
                <li>• Return by late afternoon</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-night mb-2">Full Day Explorer</h3>
              <p className="text-night/70 mb-3">Neil + Havelock day circuit</p>
              <ul className="space-y-2 text-night/70">
                <li>• Bharatpur Beach snorkel</li>
                <li>• Natural Bridge visit</li>
                <li>• Ferry to Havelock for Radhanagar Beach</li>
                <li>• Evening return</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-night mb-2">Two-Day Premium</h3>
              <p className="text-night/70 mb-3">Private boat with custom route</p>
              <ul className="space-y-2 text-night/70">
                <li>• Hidden coves and snorkeling stops</li>
                <li>• Sunset at Kalapathar</li>
                <li>• Overnight on Havelock</li>
                <li>• Next-day island trio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Travel Tips</h2>
            <p className="text-night/70">Make hopping seamless and comfortable</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-night/80">
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Carry light day-packs and waterproof phone cases</li>
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Pre-book ferry tickets during peak months (Dec–Feb)</li>
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Start early to avoid midday heat</li>
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Respect local regulations and eco zones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Island Hopping Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect package for your island adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-night mb-2">{pkg.name}</h3>
                <div className="flex items-center space-x-4 mb-4 text-night/60">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Small groups
                  </span>
                </div>
                <p className="text-night/70 mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-night/60">
                      <span className="w-2 h-2 glass-sunset-dot mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-night">{pkg.price}</span>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Island Hopping Adventures',
                          source: 'experience',
                          slug: 'island-hopping',
                          selectedActivities: [pkg.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IslandHoppingPage;