import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Shield, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';
import { staggerContainer, fadeInUp } from '../lib/animations';

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Luxury Travel Packages"
        description="Choose from our exclusive luxury travel packages in the Andaman Islands. Experience world-class accommodations, personalized service, and unforgettable adventures."
        keywords="luxury packages, andaman travel packages, honeymoon packages, family packages, adventure packages"
      />
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-500 text-white pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span className="font-semibold text-white">Packages</span>
          </div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Curated Packages</h1>
            <p className="mt-2 text-lg text-blue-100 max-w-2xl">Explore our handcrafted journeys, designed for every type of traveler.</p>
          </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.slug}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-azure to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ₹{(pkg.price / 1000)}K
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <h3 className="text-white font-bold text-lg mb-1 leading-tight">{pkg.title}</h3>
                    <p className="text-white/90 text-xs line-clamp-2">{pkg.description}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{pkg.groupSize} {pkg.groupSize === "1" ? "person" : "people"}</span>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    {pkg.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-azure rounded-full mr-2" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 3 && (
                      <div className="text-xs text-azure font-medium">
                        +{pkg.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                  <Link
                    to={`/packages/${pkg.slug}`}
                      className="flex-1 py-2.5 bg-gradient-to-r from-azure to-blue-600 text-white text-center rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                  >
                    View Details
                  </Link>
                    <Link
                      to="/enquiry"
                      className="px-4 py-2.5 border-2 border-azure text-azure rounded-lg hover:bg-azure hover:text-white transition-all text-sm font-medium"
                    >
                      Book
                    </Link>
                  </div>
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