import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Sun, Zap, Mountain, Clock, Users } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const FamilyAdventuresPage = () => {
  // Local image paths - Add your images to src/assets/images/experiences/family-adventures/
  const localImages = {
    // heroImage: '/src/assets/images/experiences/family-adventures/hero.jpg',
    // glassBottomBoat: '/src/assets/images/experiences/family-adventures/glass-bottom-boat.jpg',
    // jungleSafari: '/src/assets/images/experiences/family-adventures/jungle-safari.jpg',
    // Replace these with your local image paths
  };

  const activities = [
    {
      name: "Glass-Bottom Boat Tour",
      duration: "2 hours",
      price: "₹8,000 for 4",
      includes: [
        "Coral reef viewing",
        "Fish feeding",
        "Safety gear for all ages",
        "On-board guide"
      ],
      description: "Explore the underwater world without getting wet.",
      // localImage: localImages.glassBottomBoat, // Uncomment when adding local image
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Jungle Safari & Trekking",
      duration: "4 hours",
      price: "₹12,000 for 4",
      includes: [
        "Guided jungle trek",
        "Bird watching",
        "Packed lunch & refreshments",
        "Safe for kids"
      ],
      description: "Discover the lush green forests of the Andamans.",
      // localImage: localImages.jungleSafari, // Uncomment when adding local image
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* LOCAL IMAGE PLACEHOLDER - Replace with your image */}
        {/* <img 
          src={localImages.heroImage}
          alt="Family Adventures"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        
        {/* FALLBACK ONLINE IMAGE - Remove when adding local image */}
        <img 
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Family Adventures"
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
                Family Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Fun-filled activities and adventures for the whole family.
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Family Adventures',
                      source: 'experience',
                      slug: 'family-adventures'
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
                <Ship className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Safe Boating</h3>
              <p className="text-night/70">Certified and safe for families</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Beach Fun</h3>
              <p className="text-night/70">Sandcastles, games, and more</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Easy Treks</h3>
              <p className="text-night/70">Kid-friendly nature trails</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Engaging Activities</h3>
              <p className="text-night/70">Fun for all ages</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Family Activities
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose an adventure that your family will cherish forever.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  {/* 
                  TO USE LOCAL IMAGES:
                  1. Save your images to: src/assets/images/experiences/family-adventures/
                  2. Uncomment the line below and replace 'activity.localImage' with your local path
                  3. Comment out or remove the fallback image below
                  
                  <img
                    src={activity.localImage}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  */}
                  
                  {/* FALLBACK ONLINE IMAGE - Remove when adding local images */}
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">
                    {activity.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{activity.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {activity.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Family-friendly
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{activity.description}</p>
                  <div className="space-y-2 mb-6">
                    {activity.includes.map((item, i) => (
                      <div key={i} className="flex items-center text-night/60">
                        <span className="w-2 h-2 glass-sunset-dot mr-2" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Family Adventures',
                          source: 'experience',
                          slug: 'family-adventures',
                          selectedActivities: [activity.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Good to Know</h2>
            <p className="text-night/70">Helpful information for families traveling with kids</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-3">Best Season</h3>
              <p className="text-night/70">October to May offers calm seas and great visibility for outdoor fun.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-3">What to Pack</h3>
              <p className="text-night/70">Sun hats, reef-safe sunscreen, quick-dry clothing, water shoes, and snacks.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-3">Age Guidance</h3>
              <p className="text-night/70">Most activities are suitable for 5+ with parental supervision; ask us for details.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyAdventuresPage; 