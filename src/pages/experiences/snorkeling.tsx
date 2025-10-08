import React from 'react';
import { motion } from 'framer-motion';
import { Fish, MapPin, Clock, Users, Shield, Camera, Sun, Waves } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const SnorkelingPage = () => {
  const snorkelingSites = [
    {
      name: "North Bay Island",
      description: "Crystal clear waters with abundant coral formations",
      depth: "2-8m",
      visibility: "15-25m",
      highlights: ["Coral gardens", "Colorful reef fish", "Easy access", "Photography friendly"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Elephant Beach",
      description: "Pristine beach with excellent snorkeling right from shore",
      depth: "2-6m",
      visibility: "10-20m",
      highlights: ["Beach access", "Shallow waters", "Family friendly", "Marine life"],
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Jolly Buoy Island",
      description: "Protected marine park with spectacular coral reefs",
      depth: "3-10m",
      visibility: "20-30m",
      highlights: ["Protected area", "Pristine corals", "No plastic zone", "Rich biodiversity"],
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Red Skin Island",
      description: "Hidden gem with vibrant coral formations",
      depth: "2-8m",
      visibility: "15-25m",
      highlights: ["Less crowded", "Healthy corals", "Turtle sightings", "Peaceful waters"],
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const packages = [
    {
      name: "Discovery Snorkeling",
      duration: "3 hours",
      price: "₹2,000 per person",
      includes: ["Snorkeling gear", "Guide", "Boat transfers", "Light refreshments"],
      description: "Perfect for beginners wanting to explore underwater life",
      sites: ["1 snorkeling site"]
    },
    {
      name: "Island Hopper Snorkeling",
      duration: "Full day",
      price: "₹3,500 per person",
      includes: ["Snorkeling gear", "Guide", "Boat transfers", "Lunch", "Multiple sites"],
      description: "Explore multiple snorkeling sites in one day",
      sites: ["2-3 snorkeling sites"]
    },
    {
      name: "Private Snorkeling Charter",
      duration: "4-6 hours",
      price: "₹12,000 for 4 people",
      includes: ["Private boat", "Snorkeling gear", "Personal guide", "Custom itinerary", "Refreshments"],
      description: "Exclusive snorkeling experience tailored to your preferences",
      sites: ["Custom sites based on preference"]
    }
  ];

  const marineLife = [
    "Clownfish (Nemo)",
    "Angelfish",
    "Butterflyfish",
    "Parrotfish",
    "Sea Turtles",
    "Stingrays",
    "Moray Eels",
    "Coral formations"
  ];

  const tips = [
    "Apply reef-safe sunscreen 30 minutes before entering water",
    "Touch only sand and avoid stepping on corals",
    "Maintain safe distance from marine life",
    "Practice proper breathing to conserve energy",
    "Stay hydrated before and after snorkeling",
    "Follow your guide's instructions at all times"
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Snorkeling in Andaman | Best Snorkeling Sites | Book Now"
        description="Discover the underwater paradise of Andaman with guided snorkeling tours. Explore vibrant coral reefs, tropical fish, and sea turtles at North Bay, Elephant Beach, and more."
        keywords="snorkeling andaman, north bay snorkeling, elephant beach snorkeling, jolly buoy snorkeling, red skin island snorkeling, coral reefs andaman, underwater life andaman"
        targetAudience="adventure"
        pathname="/experiences/snorkeling"
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Snorkeling in Andaman"
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
                Snorkeling Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Discover the vibrant underwater world of the Andaman Islands with our guided snorkeling experiences
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Snorkeling Adventures',
                      source: 'experience',
                      slug: 'snorkeling'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Snorkeling Tour
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
                <Shield className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Safe for All</h3>
              <p className="text-night/70">Life jackets and professional guides ensure safety</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Clear Waters</h3>
              <p className="text-night/70">Excellent visibility up to 30 meters</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Rich Marine Life</h3>
              <p className="text-night/70">Encounter colorful fish and corals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Photo Friendly</h3>
              <p className="text-night/70">Underwater cameras available for rent</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Snorkeling Sites */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Best Snorkeling Sites
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Explore these incredible snorkeling locations in the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {snorkelingSites.map((site, index) => (
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
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {site.visibility} visibility
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{site.name}</h3>
                  <p className="text-night/70 mb-4">{site.description}</p>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Waves className="w-4 h-4 mr-2" />
                      Depth: {site.depth}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {site.highlights.map((highlight, i) => (
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
              Snorkeling Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect package for your snorkeling adventure
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
                    {pkg.sites}
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
                          packageName: 'Snorkeling Adventures',
                          source: 'experience',
                          slug: 'snorkeling',
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

      {/* Marine Life & Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Marine Life You'll See</h2>
              <div className="grid grid-cols-2 gap-3">
                {marineLife.map((creature, index) => (
                  <div key={index} className="flex items-center text-night/70">
                    <Fish className="w-4 h-4 mr-2 text-azure" />
                    {creature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Snorkeling Tips</h2>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-night/70">
                    <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                    {tip}
                  </li>
                ))}
              </ul>
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
            <p className="text-night/70">Everything you need to know about snorkeling in Andaman</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Do I need to know swimming for snorkeling?</h3>
              <p className="text-night/70 mt-2">Basic swimming skills are helpful but not mandatory. Life jackets are provided and mandatory for all participants.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">What is the best time for snorkeling in Andaman?</h3>
              <p className="text-night/70 mt-2">October to May offers the best conditions with calm seas and excellent visibility. December to February is peak season.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Is snorkeling equipment provided?</h3>
              <p className="text-night/70 mt-2">Yes, we provide mask, snorkel, fins, and life jacket. Underwater cameras are available for rent separately.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Is it safe for children?</h3>
              <p className="text-night/70 mt-2">Yes, snorkeling is safe for children above 8 years with parental supervision. We have special sites with shallow waters.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SnorkelingPage;