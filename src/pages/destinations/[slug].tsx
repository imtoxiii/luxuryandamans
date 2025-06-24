import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Compass, Activity } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { destinations } from '../../data/destinations';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const DestinationPage = () => {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="min-h-screen bg-pearl">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={destination.image}
          alt={destination.name}
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
                {destination.name}
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                {destination.description}
              </p>
              <Link
                to="/enquiry"
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Plan Your Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Overview</h2>
              <p className="text-night/70 mb-8">{destination.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-sunset" />
                  <div>
                    <h3 className="font-semibold text-night">Best Time to Visit</h3>
                    <p className="text-night/70">{destination.bestTimeToVisit}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Compass className="w-6 h-6 text-sunset" />
                  <div>
                    <h3 className="font-semibold text-night">How to Reach</h3>
                    <p className="text-night/70">{destination.howToReach}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-night mb-4">Popular Activities</h3>
              {destination.activities.map((activity, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <Activity className="w-5 h-5 text-sunset" />
                  <span className="text-night">{activity}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-night"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-pearl mb-12 text-center"
          >
            Highlights
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.2, 0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {destination.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{highlight.title}</h3>
                  <p className="text-night/70">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DestinationPage;