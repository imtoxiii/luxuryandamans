import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wifi, Coffee, Utensils, Car, Space as Spa, Phone, MapPin, CheckCircle, Waves, Sunset, Users, Award, Heart } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

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
      description: "Experience world-class luxury amidst pristine beaches with stunning ocean views",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 5,
      priceRange: "₹35,000 - ₹1,50,000 per night",
      highlights: ["Private beach access", "Infinity pool", "World-class spa", "Fine dining restaurants", "Water sports"],
      roomTypes: ["Villas", "Luxury Suites", "Beach Cottages"],
      bestFor: "Couples, Honeymooners, Luxury travelers"
    },
    {
      name: "Barefoot at Havelock",
      location: "Beach No. 7, Havelock Island",
      description: "Eco-luxury resort offering unique island experiences with sustainable practices",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹25,000 - ₹75,000 per night",
      highlights: ["Eco-friendly design", "Beachfront location", "Organic cuisine", "Yoga sessions", "Diving center"],
      roomTypes: ["Nicobari Cottages", "Beach Villas", "Duplex Cottages"],
      bestFor: "Nature lovers, Eco-conscious travelers, Families"
    },
    {
      name: "SilverSand Beach Resort",
      location: "Havelock Island",
      description: "Contemporary luxury resort with modern amenities and pristine beachfront",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹20,000 - ₹60,000 per night",
      highlights: ["Beachfront location", "Swimming pool", "Multi-cuisine restaurant", "Spa services", "Water sports"],
      roomTypes: ["Deluxe Rooms", "Beach Front Cottages", "Suites"],
      bestFor: "Families, Couples, Business travelers"
    },
    {
      name: "Jalakara Resort",
      location: "Havelock Island",
      description: "Boutique luxury resort with personalized service and unique design",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹30,000 - ₹80,000 per night",
      highlights: ["Boutique design", "Personalized service", "Infinity pool", "Rooftop restaurant", "Spa"],
      roomTypes: ["Premium Rooms", "Pool Villas", "Suites"],
      bestFor: "Couples, Design enthusiasts, Luxury travelers"
    },
    {
      name: "Munjoh Ocean Resort",
      location: "Havelock Island",
      description: "Intimate luxury resort with stunning ocean views and exceptional service",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹25,000 - ₹70,000 per night",
      highlights: ["Ocean views", "Intimate setting", "Fine dining", "Spa services", "Beach access"],
      roomTypes: ["Deluxe Rooms", "Ocean View Rooms", "Suites"],
      bestFor: "Couples, Honeymooners, Small groups"
    },
    {
      name: "SeaShell Port Blair",
      location: "Port Blair",
      description: "Luxury resort in the capital with modern amenities and easy access to attractions",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹15,000 - ₹45,000 per night",
      highlights: ["City location", "Swimming pool", "Multi-cuisine restaurant", "Spa", "Easy access to attractions"],
      roomTypes: ["Deluxe Rooms", "Premium Rooms", "Suites"],
      bestFor: "Business travelers, Families, City explorers"
    }
  ];

  const experiences = [
    {
      icon: <Sunset className="w-6 h-6" />,
      title: "Private Sunset Dinners",
      description: "Romantic beachfront dining experiences with personalized menus"
    },
    {
      icon: <Spa className="w-6 h-6" />,
      title: "Luxury Spa Treatments",
      description: "Rejuvenating therapies using traditional and modern techniques"
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Water Sports",
      description: "Exclusive access to premium water sports and activities"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Romantic Experiences",
      description: "Special arrangements for couples and honeymooners"
    }
  ];

  const packages = [
    {
      name: "Honeymoon Bliss",
      duration: "5 Nights / 6 Days",
      price: "Starting from ₹1,50,000",
      includes: ["Luxury accommodation", "Private transfers", "Candlelight dinners", "Spa sessions", "Sightseeing"],
      bestFor: "Newly married couples"
    },
    {
      name: "Family Luxury",
      duration: "4 Nights / 5 Days",
      price: "Starting from ₹1,20,000",
      includes: ["Family suites", "All meals", "Kids activities", "Water sports", "Guided tours"],
      bestFor: "Families with children"
    },
    {
      name: "Wellness Retreat",
      duration: "6 Nights / 7 Days",
      price: "Starting from ₹1,80,000",
      includes: ["Premium accommodation", "Daily spa treatments", "Yoga sessions", "Healthy cuisine", "Meditation"],
      bestFor: "Wellness enthusiasts"
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Luxury Beach Resorts in Andaman | 5-Star Accommodation | Book Now"
        description="Stay at world-class luxury resorts in Andaman Islands. Taj Exotica, Barefoot Resort & more. Private beaches, spa services, fine dining. Starting ₹15,000/night."
        keywords="luxury resorts andaman, andaman beach resorts, taj exotica andaman, barefoot resort havelock, 5 star resorts andaman, luxury accommodation andaman, beach resorts havelock island, neil island luxury resorts, andaman spa resorts, private beach resorts, luxury hotel booking andaman"
        targetAudience="luxury"
        pathname="/experiences/luxury-resorts"
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
              Featured Luxury Resorts
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose from our handpicked selection of the finest resorts in the Andamans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {resort.priceRange}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {resort.bestFor}
                    </span>
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
                  <p className="text-night/60 mb-4">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    {resort.location}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {resort.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                      {resort.highlights.length > 3 && (
                        <span className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          +{resort.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Room Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {resort.roomTypes.map((room, i) => (
                        <span key={i} className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          {room}
                        </span>
                      ))}
                    </div>
                  </div>
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
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 w-full justify-center"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Exclusive Luxury Experiences
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Indulge in these curated experiences designed for our luxury guests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 text-azure">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-night mb-2">{exp.title}</h3>
                <p className="text-night/70">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Packages */}
      <section className="py-20 bg-gradient-to-br from-azure/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Curated Luxury Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              All-inclusive luxury packages designed for the ultimate Andaman experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="bg-gradient-to-r from-azure to-blue-600 p-6">
                  <h3 className="text-2xl font-bold text-pearl">{pkg.name}</h3>
                  <p className="text-pearl/80">{pkg.duration}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-night">{pkg.price}</span>
                    <span className="text-sm text-night/60 bg-azure/10 px-3 py-1 rounded-full">
                      {pkg.bestFor}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-night/70">
                        <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Luxury Beach Resorts',
                          source: 'experience',
                          slug: 'luxury-resorts',
                          selectedActivities: [pkg.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 w-full justify-center"
                  >
                    Book Package
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-xl font-semibold text-night mb-2">Best Rate Assurance</h3>
              <p className="text-night/70">We work directly with partner resorts to secure the most competitive rates and inclusions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-xl font-semibold text-night mb-2">Personal Concierge</h3>
              <p className="text-night/70">Airport assistance, private transfers, priority check-ins, and curated experiences.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-xl font-semibold text-night mb-2">Local Expertise</h3>
              <p className="text-night/70">Our Andaman team supports you 24/7 throughout your stay.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Answers to common questions about luxury stays in Andaman"
        faqs={[
          {
            question: "What is the best time to visit?",
            answer: "October to May offers the best weather for beach and water activities. December to February is peak season with pleasant temperatures."
          },
          {
            question: "Do resorts offer private beach access?",
            answer: "Many properties are beachfront with semi-private access; true private beaches are restricted in India. However, luxury resorts offer exclusive beach areas and premium services."
          },
          {
            question: "Can you arrange special celebrations?",
            answer: "Yes—romantic dinners, proposals, anniversaries, and more with bespoke setups. Our team specializes in creating memorable experiences for special occasions."
          },
          {
            question: "Are all-inclusive packages available?",
            answer: "Yes, we offer all-inclusive packages that cover accommodation, meals, transfers, and selected activities. These can be customized based on your preferences."
          },
          {
            question: "Is advance booking required?",
            answer: "Yes, luxury resorts in Andaman have limited availability and are in high demand, especially during peak season. We recommend booking 3-6 months in advance."
          },
          {
            question: "Are children welcome at luxury resorts?",
            answer: "Most luxury resorts welcome children and offer family-friendly amenities. However, some resorts may have age restrictions or specific policies for children."
          }
        ]}
      />

      <Footer />
    </div>
  );
};

export default LuxuryResortsPage;