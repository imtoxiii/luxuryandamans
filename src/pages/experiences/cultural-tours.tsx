import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Camera, Calendar, Globe, Music, Utensils, Camera as ImageIcon } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const CulturalToursPage = () => {
  const culturalExperiences = [
    {
      name: "Indigenous Tribal Visit",
      description: "Respectful visit to selected tribal areas to learn about ancient traditions",
      duration: "Full day",
      highlights: ["Jarawa tribe (viewing from distance)", "Onge tribe visit", "Traditional lifestyle", "Ancient knowledge"],
      image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Photography restricted in some areas"
    },
    {
      name: "Cellular Jail Light & Sound Show",
      description: "Historical journey through India's freedom struggle",
      duration: "2 hours",
      highlights: ["Historical significance", "Emotional narrative", "Sound and light effects", "Architectural marvel"],
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Evening show only"
    },
    {
      name: "Anthropological Museum Tour",
      description: "Comprehensive insight into Andaman's tribal heritage",
      duration: "2-3 hours",
      highlights: ["Tribal artifacts", "Photographs", "Cultural exhibits", "Educational experience"],
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Museum timings: 9:00 AM - 1:00 PM, 1:30 PM - 4:30 PM"
    },
    {
      name: "Local Village Experience",
      description: "Immerse in the lifestyle of Andaman's local communities",
      duration: "4-5 hours",
      highlights: ["Traditional homes", "Local crafts", "Agricultural practices", "Community interaction"],
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Modest dress required"
    }
  ];

  const packages = [
    {
      name: "Heritage Day Tour",
      duration: "Full day",
      price: "₹3,000 per person",
      includes: ["Transportation", "Guide", "Entry fees", "Lunch", "Museum visit"],
      description: "Comprehensive tour of historical sites and museums",
      experiences: ["Cellular Jail", "Anthropological Museum", "Fisheries Museum", "Samudrika Museum"]
    },
    {
      name: "Cultural Immersion Package",
      duration: "2 days",
      price: "₹7,500 per person",
      includes: ["Transportation", "Expert guide", "Entry fees", "All meals", "Cultural show", "Craft workshop"],
      description: "Deep dive into Andaman's cultural heritage",
      experiences: ["Tribal visit", "Village experience", "Cultural performance", "Craft demonstration"]
    },
    {
      name: "Custom Cultural Tour",
      duration: "Flexible",
      price: "On request",
      includes: ["Customized itinerary", "Private guide", "Transportation", "Entry fees"],
      description: "Tailored cultural experience based on your interests",
      experiences: ["Customized to preferences"]
    }
  ];

  const culturalAttractions = [
    "Cellular Jail National Memorial",
    "Anthropological Museum",
    "Samudrika Naval Museum",
    "Fisheries Museum",
    "Chatham Saw Mill",
    "Forest Museum",
    "Zoological Survey of India Museum",
    "Mini Zoo"
  ];

  const culturalPerformances = [
    "Traditional Nicobarese dance",
    "Andamanese folk music",
    "Bengali cultural performances",
    "Tamil cultural events",
    "Tribal craft demonstrations",
    "Traditional cooking demonstrations"
  ];

  const localCuisine = [
    "Seafood preparations",
    "Coconut-based dishes",
    "Tribal food specialties",
    "Bengali influences",
    "Tamil delicacies",
    "Tropical fruits"
  ];

  const etiquette = [
    "Dress modestly, especially when visiting tribal areas",
    "Always ask permission before photographing people",
    "Respect local customs and traditions",
    "Do not touch tribal artifacts without permission",
    "Maintain appropriate distance from tribal communities",
    "Follow your guide's instructions at all times",
    "Avoid giving money or food directly to tribal members",
    "Support local artisans by purchasing authentic crafts"
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Cultural Tours in Andaman | Heritage & Tribal Experiences | Book Now"
        description="Discover the rich heritage of Andaman Islands with guided cultural tours. Visit museums, tribal areas, historical sites, and experience traditional performances."
        keywords="cultural tours andaman, cellular jail andaman, tribal visit andaman, anthropological museum andaman, andaman heritage tours, andaman culture"
        targetAudience="family"
        pathname="/experiences/cultural-tours"
        image="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Cultural Tours in Andaman"
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
                Cultural Heritage Tours
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Immerse yourself in the fascinating culture and history of the Andaman Islands
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Cultural Heritage Tours',
                      source: 'experience',
                      slug: 'cultural-tours'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Cultural Tour
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
                <Globe className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Expert Guides</h3>
              <p className="text-night/70">Knowledgeable cultural historians and anthropologists</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Authentic Experiences</h3>
              <p className="text-night/70">Respectful visits to tribal areas and local communities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Cultural Performances</h3>
              <p className="text-night/70">Traditional dances, music and craft demonstrations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Local Cuisine</h3>
              <p className="text-night/70">Taste authentic Andaman dishes and delicacies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Cultural Experiences
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Discover these incredible cultural attractions in the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalExperiences.map((experience, index) => (
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
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {experience.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{experience.name}</h3>
                  <p className="text-night/70 mb-4">{experience.description}</p>
                  <div className="space-y-2 mb-4">
                    {experience.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-night/60">
                        <span className="w-2 h-2 glass-sunset-dot mr-2" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  {experience.restrictions && (
                    <div className="text-sm text-azure bg-azure/10 p-2 rounded">
                      <strong>Note:</strong> {experience.restrictions}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
              Cultural Tour Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect cultural experience for your interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <MapPin className="w-4 h-4 mr-2" />
                    Multiple sites
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
                <div className="mb-4">
                  <p className="text-sm text-night/60 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.experiences.map((exp, i) => (
                      <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-night">{pkg.price}</span>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Cultural Heritage Tours',
                          source: 'experience',
                          slug: 'cultural-tours',
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

      {/* Cultural Attractions & Performances */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Cultural Attractions</h2>
              <div className="grid grid-cols-1 gap-3">
                {culturalAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center text-night/70">
                    <MapPin className="w-4 h-4 mr-2 text-azure" />
                    {attraction}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Cultural Performances</h2>
              <div className="grid grid-cols-1 gap-3">
                {culturalPerformances.map((performance, index) => (
                  <div key={index} className="flex items-center text-night/70">
                    <Music className="w-4 h-4 mr-2 text-azure" />
                    {performance}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Cuisine & Etiquette */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Local Cuisine</h2>
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center mb-4">
                  <Utensils className="w-5 h-5 mr-2 text-sunset" />
                  <span className="font-semibold text-night">Taste of Andaman</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {localCuisine.map((dish, index) => (
                    <div key={index} className="flex items-center text-night/70">
                      <span className="w-2 h-2 glass-sunset-dot mr-2" />
                      {dish}
                    </div>
                  ))}
                </div>
                <p className="text-night/70 mt-4 text-sm">
                  Our tours include opportunities to taste authentic local dishes at carefully selected restaurants.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Cultural Etiquette</h2>
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center mb-4">
                  <Globe className="w-5 h-5 mr-2 text-sunset" />
                  <span className="font-semibold text-night">Respectful Tourism</span>
                </div>
                <ul className="space-y-3">
                  {etiquette.slice(0, 6).map((tip, index) => (
                    <li key={index} className="flex items-start text-night/70">
                      <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-night mb-2">Frequently Asked Questions</h2>
            <p className="text-night/70">Everything you need to know about cultural tours in Andaman</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Can we take photographs of tribal communities?</h3>
              <p className="text-night/70 mt-2">Photography is restricted in most tribal areas to protect their privacy and culture. Your guide will inform you where photography is permitted.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Are the tribal visits ethical?</h3>
              <p className="text-night/70 mt-2">Yes, we follow strict ethical guidelines with proper permissions. We maintain respectful distance and do not interfere with their lifestyle.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">What is the best time to visit cultural sites?</h3>
              <p className="text-night/70 mt-2">October to May is ideal for cultural tours. The Cellular Jail light and sound show runs every evening in English and Hindi.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Are these tours suitable for children?</h3>
              <p className="text-night/70 mt-2">Yes, most cultural tours are family-friendly. However, tribal visits may not be suitable for very young children due to the walking involved.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CulturalToursPage;