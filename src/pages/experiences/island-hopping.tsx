import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Anchor, Sun, Map, Clock, Users, MapPin, Camera, CheckCircle, Waves, Calendar, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const IslandHoppingPage = () => {
  const islands = [
    {
      name: "Ross Island",
      description: "Historical ruins and architectural heritage from the British colonial era",
      duration: "4-5 hours",
      highlights: ["British Era Ruins", "Light & Sound Show", "Wildlife", "Photography"],
      image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "History enthusiasts, Photographers",
      activities: ["Historical tour", "Light & Sound Show", "Wildlife spotting", "Photography"]
    },
    {
      name: "North Bay Island",
      description: "Perfect for water sports and coral viewing with vibrant marine life",
      duration: "5-6 hours",
      highlights: ["Snorkeling", "Glass Bottom Boat", "Coral Reefs", "Sea Walking"],
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Adventure seekers, Families",
      activities: ["Snorkeling", "Glass Bottom Boat", "Sea Walking", "Underwater Photography"]
    },
    {
      name: "Neil Island",
      description: "Pristine beaches and natural rock formations in a tranquil setting",
      duration: "Full day",
      highlights: ["Bharatpur Beach", "Natural Bridge", "Laxmanpur Beach", "Coral Gardens"],
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Beach lovers, Nature enthusiasts",
      activities: ["Beachcombing", "Snorkeling", "Rock formation visit", "Photography"]
    },
    {
      name: "Havelock Island",
      description: "Famous for Radhanagar Beach and world-class diving experiences",
      duration: "Full day",
      highlights: ["Radhanagar Beach", "Elephant Beach", "Scuba Diving", "Kayaking"],
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Beach lovers, Diving enthusiasts",
      activities: ["Beach relaxation", "Scuba diving", "Kayaking", "Sunset viewing"]
    },
    {
      name: "Baratang Island",
      description: "Unique limestone caves and mangrove creeks with tribal culture",
      duration: "Full day",
      highlights: ["Limestone Caves", "Mangrove Creeks", "Mud Volcano", "Jarawa Tribe (viewing)"],
      image: "https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Adventure seekers, Nature lovers",
      activities: ["Cave exploration", "Mangrove boat ride", "Mud volcano visit", "Tribal culture"]
    },
    {
      name: "Long Island",
      description: "Secluded paradise with pristine beaches and untouched natural beauty",
      duration: "2 days",
      highlights: ["Lalaji Bay Beach", "Mercury Bay", "Turtle Nesting", "Island Camping"],
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Adventure travelers, Nature enthusiasts",
      activities: ["Beach camping", "Turtle watching", "Island exploration", "Photography"]
    }
  ];

  const packages = [
    {
      name: "Day Explorer",
      duration: "Full Day",
      price: "₹4,500 per person",
      includes: ["2 Islands", "Lunch", "Transfer", "Guide", "Snorkeling equipment"],
      description: "Perfect for a quick island adventure",
      bestFor: "Day trippers, Budget travelers"
    },
    {
      name: "Island Hopper Premium",
      duration: "2 Days",
      price: "₹8,500 per person",
      includes: ["4 Islands", "All Meals", "Luxury Transfer", "Expert Guide", "Water activities"],
      description: "Comprehensive island exploration experience",
      bestFor: "Adventure seekers, Small groups"
    },
    {
      name: "Andaman Island Circuit",
      duration: "5 Days",
      price: "₹18,000 per person",
      includes: ["7 Islands", "All Meals", "Accommodation", "All Transfers", "Activities"],
      description: "Complete Andaman island exploration with accommodation",
      bestFor: "Travelers, Island enthusiasts"
    },
    {
      name: "Private Island Hopping",
      duration: "3 Days",
      price: "₹25,000 per person",
      includes: ["Custom route", "Private boat", "All Meals", "Luxury stays", "Personal guide"],
      description: "Exclusive private island hopping experience",
      bestFor: "Luxury travelers, Honeymooners"
    }
  ];

  const itineraries = [
    {
      name: "Half Day Highlights",
      duration: "4-5 hours",
      islands: ["Ross Island", "North Bay Island"],
      description: "Perfect introduction to Andaman islands",
      activities: ["Historical tour", "Snorkeling", "Glass bottom boat"]
    },
    {
      name: "Neil Island Explorer",
      duration: "Full day",
      islands: ["Neil Island"],
      description: "Relaxed day at pristine beaches",
      activities: ["Beachcombing", "Natural Bridge visit", "Snorkeling"]
    },
    {
      name: "Havelock Beach Paradise",
      duration: "Full day",
      islands: ["Havelock Island"],
      description: "Experience world-class beaches",
      activities: ["Radhanagar Beach", "Elephant Beach", "Water activities"]
    },
    {
      name: "Three Island Adventure",
      duration: "2 days",
      islands: ["Neil Island", "Havelock Island", "Ross Island"],
      description: "Perfect mix of beaches and history",
      activities: ["Beach hopping", "Historical tour", "Water sports"]
    }
  ];

  const travelTips = [
    "Carry light day-packs and waterproof phone cases",
    "Pre-book ferry tickets during peak months (Dec–Feb)",
    "Start early to avoid midday heat and crowds",
    "Respect local regulations and eco zones",
    "Carry sun protection, hat, and comfortable footwear",
    "Keep cash handy for smaller islands with limited ATMs",
    "Stay hydrated and pack light snacks",
    "Follow your guide's instructions for safety"
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Island Hopping in Andaman | Multi-Island Tours | Book Now"
        description="Explore multiple Andaman Islands with guided tours. Visit Ross, North Bay, Neil, Havelock & more. Custom packages from ₹4,500 per person."
        keywords="island hopping andaman, andaman island tour, ross island tour, north bay island, neil island tour, havelock island tour, baratang island, andaman island hopping packages, multi island tour andaman, andaman ferry booking"
        targetAudience="all"
        pathname="/experiences/island-hopping"
        image="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Island Hopping"
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
                Island Hopping Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Discover hidden beaches and secluded paradise spots across multiple islands
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Island Hopping Adventures',
                      source: 'experience',
                      slug: 'island-hopping'
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
                <Compass className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Expert Guides</h3>
              <p className="text-night/70">Knowledgeable local guides</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Private Boats</h3>
              <p className="text-night/70">Comfortable and safe transfers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Beach Time</h3>
              <p className="text-night/70">Relax on pristine beaches</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Hidden Spots</h3>
              <p className="text-night/70">Discover secret locations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islands Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Featured Islands
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Explore these amazing islands on your hopping adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islands.map((island, index) => (
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
                    src={island.image}
                    alt={island.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {island.duration}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {island.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{island.name}</h3>
                  <p className="text-night/70 mb-4">{island.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {island.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                      {island.highlights.length > 3 && (
                        <span className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          +{island.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Activities:</h4>
                    <div className="space-y-1">
                      {island.activities.slice(0, 3).map((activity, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{activity}</span>
                        </div>
                      ))}
                      {island.activities.length > 3 && (
                        <div className="text-xs text-azure">+{island.activities.length - 3} more activities</div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Sample Itineraries</h2>
            <p className="text-night/70 max-w-2xl mx-auto">Pick a ready-made plan or ask us to tailor one for you</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-night mb-2">Half Day Highlights</h3>
              <p className="text-night/70 mb-3">Ross Island + North Bay</p>
              <ul className="space-y-2 text-night/70">
                <li>• Morning boat to Ross Island</li>
                <li>• Explore ruins and deer park</li>
                <li>• Transfer to North Bay for glass-bottom</li>
                <li>• Return by late afternoon</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-night mb-2">Full Day Explorer</h3>
              <p className="text-night/70 mb-3">Neil + Havelock day circuit</p>
              <ul className="space-y-2 text-night/70">
                <li>• Bharatpur Beach snorkel</li>
                <li>• Natural Bridge visit</li>
                <li>• Ferry to Havelock for Radhanagar Beach</li>
                <li>• Evening return</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-night mb-2">Two-Day Premium</h3>
              <p className="text-night/70 mb-3">Private boat with custom route</p>
              <ul className="space-y-2 text-night/70">
                <li>• Hidden coves and snorkeling stops</li>
                <li>• Sunset at Kalapathar</li>
                <li>• Overnight on Havelock</li>
                <li>• Next-day island trio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Travel Tips</h2>
            <p className="text-night/70">Make hopping seamless and comfortable</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-night/80">
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Carry light day-packs and waterproof phone cases</li>
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Pre-book ferry tickets during peak months (Dec–Feb)</li>
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Start early to avoid midday heat</li>
              <li className="flex"><span className="w-2 h-2 glass-sunset-dot mt-2 mr-3" />Respect local regulations and eco zones</li>
            </ul>
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
              Island Hopping Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect package for your island adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="bg-gradient-to-r from-azure to-blue-600 p-4">
                  <h3 className="text-xl font-bold text-pearl">{pkg.name}</h3>
                  <p className="text-pearl/80 text-sm">{pkg.duration}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-night">{pkg.price}</span>
                    <span className="text-sm text-night/60 bg-azure/10 px-3 py-1 rounded-full">
                      {pkg.bestFor}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {pkg.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {pkg.includes.length > 3 && (
                        <div className="text-xs text-azure">+{pkg.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Island Hopping Adventures',
                          source: 'experience',
                          slug: 'island-hopping',
                          selectedActivities: [pkg.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-4 py-2 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all w-full justify-center"
                  >
                    Book Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Everything you need to know about island hopping in Andaman"
        faqs={[
          {
            question: "What is the best time for island hopping?",
            answer: "October to May offers the best weather conditions with calm seas. December to February is peak season with pleasant temperatures."
          },
          {
            question: "Are ferry tickets included in the packages?",
            answer: "Yes, all necessary ferry tickets between islands are included in our packages. We also arrange private transfers where applicable."
          },
          {
            question: "Can we customize the island hopping itinerary?",
            answer: "Absolutely! We offer customizable itineraries based on your interests, time constraints, and budget. Just let us know your preferences."
          },
          {
            question: "Is island hopping suitable for children?",
            answer: "Yes, island hopping is family-friendly. We recommend shorter itineraries with less boat travel for families with young children."
          },
          {
            question: "What should we carry for island hopping?",
            answer: "Light daypack, sunscreen, hat, comfortable footwear, swimwear, towel, waterproof phone case, and cash for small purchases."
          },
          {
            question: "Are meals included during island hopping?",
            answer: "Most packages include meals. For day trips, lunch is typically included. Multi-day packages include all meals as specified in the itinerary."
          }
        ]}
      />

      <Footer />
    </div>
  );
};

export default IslandHoppingPage;