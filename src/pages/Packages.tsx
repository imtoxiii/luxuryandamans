import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';
import { staggerContainer, fadeInUp } from '../lib/animations';

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Luxury Travel Packages"
        description="Choose from our exclusive luxury travel packages in the Andaman Islands. Experience world-class accommodations, personalized service, and unforgettable adventures."
        keywords="luxury packages, andaman travel packages, honeymoon packages, family packages, adventure packages"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-pearl mb-6"
            >
              Luxury Travel Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-pearl/90"
            >
              Curated experiences for the discerning traveler
            </motion.p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <motion.section
        variants={staggerContainer(0.1, 0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.slug}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 glass-sunset-badge px-3 py-1 z-20">
                    <span className="text-xs font-medium">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-night mb-2">{pkg.title}</h3>
                  <p className="text-night/70 text-sm mb-3">{pkg.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-night/60">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5 glass-sunset-text" />
                      {pkg.duration}
                    </div>
                                          <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1.5 glass-sunset-text" />
                        {pkg.groupSize}
                      </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-night/60">
                        <span className="w-1.5 h-1.5 glass-sunset-dot mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="inline-block w-full py-2.5 bg-azure text-white text-center rounded-lg hover:bg-opacity-90 transition-all text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-night mb-4"
            >
              Why Choose Our Packages
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-night/70 max-w-2xl mx-auto"
            >
              Experience the perfect blend of luxury, adventure, and relaxation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-xl font-semibold text-night mb-2">Premium Experience</h3>
              <p className="text-night/70">Handpicked luxury accommodations and experiences</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-xl font-semibold text-night mb-2">Safe & Secure</h3>
              <p className="text-night/70">Fully insured and protected travel experiences</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-xl font-semibold text-night mb-2">Expert Guides</h3>
              <p className="text-night/70">Professional and experienced local guides</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default PackagesPage;