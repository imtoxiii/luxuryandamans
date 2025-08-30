import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wifi, Coffee, Utensils, Car, Space as Spa, Phone, MapPin } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const LuxuryResortsPage = () => {
  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "High-speed WiFi" },
    { icon: <Coffee className="w-6 h-6" />, name: "24/7 Room Service" },
    { icon: <Utensils className="w-6 h-6" />, name: "Fine Dining" },
    { icon: <Car className="w-6 h-6" />, name: "Airport Transfer" },
    { icon: <Spa className="w-6 h-6" />, name: "Luxury Spa" },
    { icon: <Star className="w-6 h-6" />, name: "Concierge Service" }
  ];

  const resorts = [
    {
      name: "Taj Exotica Resort & Spa",
      location: "Radhanagar Beach, Havelock Island",
      description: "Experience world-class luxury amidst pristine beaches",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 5,
      priceRange: "₹35,000 - ₹1,50,000 per night"
    },
    {
      name: "Barefoot at Havelock",
      location: "Beach No. 7, Havelock Island",
      description: "Eco-luxury resort offering unique island experiences",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹25,000 - ₹75,000 per night"
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Luxury Beach Resorts in Andaman | 5-Star Accommodation | Book Now"
        description="Stay at world-class luxury resorts in Andaman Islands. Taj Exotica, Barefoot Resort & more. Private beaches, spa services, fine dining. Starting ₹15,000/night."
        keywords="luxury resorts andaman, andaman beach resorts, taj exotica andaman, barefoot resort havelock, 5 star resorts andaman, luxury accommodation andaman, beach resorts havelock island, neil island luxury resorts, andaman spa resorts, private beach resorts, luxury hotel booking andaman"
        targetAudience="luxury"
        url="https://luxuryandaman.com/experiences/luxury-resorts"
        image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Beach Resorts"
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
                Luxury Beach Resorts
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Experience world-class hospitality in paradise with our carefully curated selection of luxury beach resorts
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Luxury Beach Resorts',
                      source: 'experience',
                      slug: 'luxury-resorts'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Contact for Booking</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              World-Class Amenities
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Indulge in premium facilities and services designed for your ultimate comfort
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 text-azure">
                  {amenity.icon}
                </div>
                <p className="text-night font-medium">{amenity.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resorts */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Featured Resorts
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose from our handpicked selection of the finest resorts in the Andamans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resorts.map((resort, index) => (
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
                    src={resort.image}
                    alt={resort.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">
                    {resort.priceRange}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{resort.name}</h3>
                  <p className="text-night/70 mb-4">{resort.description}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < resort.rating
                            ? 'text-sunset fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-night/60 mb-6">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    {resort.location}
                  </p>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Luxury Beach Resorts',
                          source: 'experience',
                          slug: 'luxury-resorts',
                          selectedActivities: [resort.name]
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

      {/* Why Book With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Why Book With Us</h2>
            <p className="text-night/70 max-w-2xl mx-auto">Exclusive benefits and on-ground support for a seamless luxury stay</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-2">Best Rate Assurance</h3>
              <p className="text-night/70">We work directly with partner resorts to secure the most competitive rates and inclusions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-2">Personal Concierge</h3>
              <p className="text-night/70">Airport assistance, private transfers, priority check-ins, and curated experiences.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-2">Local Expertise</h3>
              <p className="text-night/70">Our Andaman team supports you 24/7 throughout your stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">FAQs</h2>
            <p className="text-night/70">Answers to common questions about luxury stays</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">What is the best time to visit?</h3>
              <p className="text-night/70 mt-2">October to May offers the best weather for beach and water activities.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Do resorts offer private beach access?</h3>
              <p className="text-night/70 mt-2">Many properties are beachfront with semi-private access; true private beaches are restricted in India.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Can you arrange special celebrations?</h3>
              <p className="text-night/70 mt-2">Yes—romantic dinners, proposals, anniversaries, and more with bespoke setups.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LuxuryResortsPage;