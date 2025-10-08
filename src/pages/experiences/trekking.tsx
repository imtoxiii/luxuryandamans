import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, MapPin, Clock, Users, TreePine, Camera, Sun, Compass, Footprints } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const TrekkingPage = () => {
  const trekkingRoutes = [
    {
      name: "Mount Harriet National Park",
      description: "Panoramic views of surrounding islands and diverse flora and fauna",
      difficulty: "Moderate",
      duration: "4-5 hours",
      distance: "8 km round trip",
      elevation: "365m",
      highlights: ["Historical significance", "Bird watching", "Panoramic views", "Forest trails"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Saddle Peak",
      description: "Highest point in North Andaman with breathtaking 360-degree views",
      difficulty: "Challenging",
      duration: "6-7 hours",
      distance: "12 km round trip",
      elevation: "732m",
      highlights: ["Highest peak", "Rare bird species", "Pristine forests", "Adventure trek"],
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Madhuban to Mount Harriet",
      description: "Historical trail through dense forests connecting important landmarks",
      difficulty: "Moderate",
      duration: "5-6 hours",
      distance: "15 km one way",
      elevation: "365m",
      highlights: ["Historical trail", "Dense forests", "Wildlife spotting", "Camping option"],
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Chidiya Tapu to Munda Pahad",
      description: "Coastal and forest trail with stunning sunset views",
      difficulty: "Easy to Moderate",
      duration: "3-4 hours",
      distance: "6 km round trip",
      elevation: "200m",
      highlights: ["Coastal views", "Bird paradise", "Sunset point", "Beach access"],
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const packages = [
    {
      name: "Nature Trail Walk",
      duration: "3 hours",
      price: "₹2,500 per person",
      includes: ["Naturalist guide", "Forest permits", "Water bottle", "Light snacks"],
      description: "Easy guided walk through forest trails perfect for beginners",
      routes: ["Chidiya Tapu", "Mount Harriet base"]
    },
    {
      name: "Peak Trekking Adventure",
      duration: "Full day",
      price: "₹4,000 per person",
      includes: ["Expert guide", "Forest permits", "Packed lunch", "First aid", "Trekking poles"],
      description: "Challenging trek to mountain peaks with rewarding views",
      routes: ["Saddle Peak", "Mount Harriet summit"]
    },
    {
      name: "Multi-Day Trekking Expedition",
      duration: "2 days",
      price: "₹8,500 per person",
      includes: ["Expert guide", "Forest permits", "All meals", "Camping equipment", "Porter support"],
      description: "Overnight trekking experience with camping in the wilderness",
      routes: ["Madhuban to Mount Harriet", "Custom routes"]
    }
  ];

  const wildlife = [
    "Andaman wild pig",
    "Andaman hill myna",
    "Andaman woodpecker",
    "Butterflies",
    "Monitor lizards",
    "Crabs",
    "Various bird species",
    "Endemic flora"
  ];

  const essentials = [
    "Comfortable hiking shoes with good grip",
    "Lightweight, breathable clothing",
    "Rain jacket (seasonal)",
    "Sun hat and sunscreen",
    "Insect repellent",
    "Personal water bottle",
    "Energy snacks",
    "Personal medications",
    "Camera with zoom lens",
    "Binoculars for bird watching"
  ];

  const tips = [
    "Start early to avoid midday heat",
    "Stay on marked trails to protect the ecosystem",
    "Carry sufficient water to stay hydrated",
    "Inform your guide about any medical conditions",
    "Respect wildlife and maintain safe distance",
    "Pack light but include all essentials",
    "Follow Leave No Trace principles",
    "Check weather conditions before trekking"
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Jungle Trekking in Andaman | Mountain Trails | Book Now"
        description="Explore the pristine rainforests of Andaman with guided trekking tours. Trek Mount Harriet, Saddle Peak, and more. Discover endemic wildlife and panoramic views."
        keywords="trekking andaman, mount harriet trek, saddle peak andaman, jungle trails andaman, nature walks andaman, bird watching andaman, forest trekking"
        targetAudience="adventure"
        pathname="/experiences/trekking"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Jungle Trekking in Andaman"
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
                Jungle Trekking Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Discover the pristine rainforests of the Andaman Islands through our guided trekking experiences
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Jungle Trekking Adventures',
                      source: 'experience',
                      slug: 'trekking'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Trek
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
                <Compass className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Expert Guides</h3>
              <p className="text-night/70">Knowledgeable naturalists with forest expertise</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Pristine Forests</h3>
              <p className="text-night/70">Explore untouched rainforest ecosystems</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Wildlife Spotting</h3>
              <p className="text-night/70">Encounter endemic species and birds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Panoramic Views</h3>
              <p className="text-night/70">Breathtaking vistas from mountain peaks</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trekking Routes */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Popular Trekking Routes
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Explore these incredible trekking trails in the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trekkingRoutes.map((route, index) => (
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
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {route.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{route.name}</h3>
                  <p className="text-night/70 mb-4">{route.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {route.duration}
                    </span>
                    <span className="flex items-center">
                      <Footprints className="w-4 h-4 mr-2" />
                      {route.distance}
                    </span>
                    <span className="flex items-center">
                      <Mountain className="w-4 h-4 mr-2" />
                      {route.elevation}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Trail
                    </span>
                  </div>
                  <div className="space-y-2">
                    {route.highlights.map((highlight, i) => (
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
              Trekking Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect trekking experience for your fitness level
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
                    {pkg.routes.join(", ")}
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
                          packageName: 'Jungle Trekking Adventures',
                          source: 'experience',
                          slug: 'trekking',
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

      {/* Wildlife & Essentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Wildlife You Might Encounter</h2>
              <div className="grid grid-cols-2 gap-3">
                {wildlife.map((animal, index) => (
                  <div key={index} className="flex items-center text-night/70">
                    <TreePine className="w-4 h-4 mr-2 text-azure" />
                    {animal}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Trekking Essentials</h2>
              <ul className="space-y-3">
                {essentials.slice(0, 6).map((item, index) => (
                  <li key={index} className="flex items-start text-night/70">
                    <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips & Best Season */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Trekking Tips</h2>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-night/70">
                    <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Best Trekking Season</h2>
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center mb-4">
                  <Sun className="w-5 h-5 mr-2 text-sunset" />
                  <span className="font-semibold text-night">November to April</span>
                </div>
                <p className="text-night/70 mb-4">
                  The dry season offers the best trekking conditions with:
                </p>
                <ul className="space-y-2 text-night/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 glass-sunset-dot mr-2" />
                    Pleasant temperatures (20-30°C)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 glass-sunset-dot mr-2" />
                    Lower humidity levels
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 glass-sunset-dot mr-2" />
                    Clear trails and better visibility
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 glass-sunset-dot mr-2" />
                    Active wildlife and bird spotting
                  </li>
                </ul>
                <p className="text-night/70 mt-4 text-sm">
                  Monsoon season (May-October) makes trails slippery and challenging.
                </p>
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
            <p className="text-night/70">Everything you need to know about trekking in Andaman</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">How fit do I need to be for trekking?</h3>
              <p className="text-night/70 mt-2">We offer treks from easy to challenging. Basic fitness is sufficient for easy trails, while peak treks require good stamina and endurance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Are the forests safe to trek?</h3>
              <p className="text-night/70 mt-2">Yes, our trails are safe with experienced guides. We follow designated paths and carry first aid kits for emergencies.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">What wildlife might we see during treks?</h3>
              <p className="text-night/70 mt-2">You may spot various bird species including endemic ones, butterflies, small mammals, and if lucky, the Andaman wild pig.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Can children join the treks?</h3>
              <p className="text-night/70 mt-2">Children above 10 years can join easy treks with parental supervision. We recommend shorter, easier trails for families.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrekkingPage;