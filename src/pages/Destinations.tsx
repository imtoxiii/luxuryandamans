import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { staggerContainer, fadeInUp } from '../lib/animations';

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Luxury Destinations"
        description="Explore the most beautiful destinations in the Andaman Islands. Discover pristine beaches, crystal-clear waters, and exclusive resorts across Havelock, Neil Island, and more."
        keywords="andaman destinations, havelock island, neil island, port blair, luxury resorts, beach destinations"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Andaman Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">
              Discover Paradise
            </h1>
            <p className="text-xl text-pearl/90">
              Explore the most beautiful destinations in the Andaman Islands
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <motion.section
        variants={staggerContainer(0.1, 0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <motion.div key={dest.slug} variants={fadeInUp}>
                <Link 
                  to={`/destinations/${dest.slug}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 glass-sunset-badge px-3 py-1  flex items-center z-20">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{dest.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-night mb-2">{dest.name}</h3>
                    <p className="text-night/70 mb-4">{dest.description}</p>
                    <div className="space-y-2">
                      {dest.activities.slice(0, 3).map((activity, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <span className="w-2 h-2 glass-sunset-dot mr-2" />
                          <span className="text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DestinationsPage;