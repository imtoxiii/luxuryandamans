import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin, Check, X, Calendar } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { packages } from '../../data/packages';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const PackagePage = () => {
  const { slug } = useParams();
  const packageData = packages.find(p => p.slug === slug);

  if (!packageData) {
    return <div>Package not found</div>;
  }

  return (
    <div className="min-h-screen bg-pearl">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={packageData.image}
          alt={packageData.title}
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
                {packageData.title}
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                {packageData.description}
              </p>
              <div className="flex items-center space-x-6 text-pearl/90 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {packageData.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {packageData.groupSize} guests
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Premium Experience
                </div>
              </div>
              <Link
                to="/enquiry"
                className="inline-flex items-center px-8 py-4 glass-sunset-button"
              >
                Book Now - ₹{packageData.price.toLocaleString('en-IN')}
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-night mb-4">Overview</h2>
              <p className="text-night/70">{packageData.longDescription}</p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.2, 0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Inclusions */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-night mb-6">Includes</h3>
                {packageData.includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-night">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Exclusions */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-night mb-6">Excludes</h3>
                {packageData.excludes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-night">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Itinerary Section */}
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
            Itinerary
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {packageData.itinerary.map((day, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night">{day.day} - {day.title}</h3>
                    <p className="text-night/70 mt-2 mb-4">{day.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {day.activities.map((activity, i) => (
                        <div key={i} className="flex items-center space-x-2 text-night/60">
                          <span className="w-2 h-2 glass-sunset-dot" />
                          <span className="text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-night mb-12 text-center"
          >
            Package Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packageData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
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
          </div>
        </div>
      </motion.section>

      {/* Terms Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-night/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-night mb-12 text-center"
            >
              Terms & Conditions
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packageData.terms.map((term, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 glass-sunset-dot" />
                    <span className="text-night">{term}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default PackagePage;