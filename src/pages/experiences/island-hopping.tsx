import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Compass, Anchor, Sun, Map, Clock, Users, MapPin, Camera, CheckCircle, Waves, Calendar, Shield } from 'lucide-react';
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

  const faqs = [
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
  ];

  return (
    <ExperienceLayout
      title="Island Hopping"
      subtitle="Discover Paradise"
      description="Discover hidden beaches and secluded paradise spots across multiple islands. From historical ruins to pristine coral reefs, experience the diversity of the Andaman archipelago."
      image="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "1-5 Days",
        location: "Multiple Islands",
        price: "From ₹4,500"
      }}
      slug="island-hopping"
      seo={{
        title: "Island Hopping in Andaman | Multi-Island Tour Packages 2025",
        description: "Explore the best of Andaman Islands with our island hopping tours. Visit Havelock, Neil, Ross & North Bay. Custom itineraries, ferry bookings, and guided tours.",
        keywords: "island hopping andaman, andaman island hopping packages, havelock neil island tour, ross and north bay island tour, andaman ferry booking, multi island tour andaman, best island hopping itinerary"
      }}
      bookingData={{
        packageName: 'Island Hopping Adventures',
        source: 'experience',
        slug: 'island-hopping'
      }}
      faqData={faqs}
    >
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Knowledgeable local guides</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Anchor className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Private Boats</h3>
              <p className="text-gray-600 text-sm">Comfortable and safe transfers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beach Time</h3>
              <p className="text-gray-600 text-sm">Relax on pristine beaches</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hidden Spots</h3>
              <p className="text-gray-600 text-sm">Discover secret locations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Islands Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Featured Islands
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore these amazing islands on your hopping adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islands.map((island, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={island.image}
                    alt={island.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {island.duration}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                      {island.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{island.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{island.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {island.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg font-medium border border-blue-500/30">
                          {highlight}
                        </span>
                      ))}
                      {island.highlights.length > 3 && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-lg font-medium">
                          +{island.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-3">Activities:</h4>
                    <div className="space-y-2">
                      {island.activities.slice(0, 3).map((activity, i) => (
                        <div key={i} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          <span>{activity}</span>
                        </div>
                      ))}
                      {island.activities.length > 3 && (
                        <div className="text-xs text-blue-400 font-medium pl-6">+{island.activities.length - 3} more activities</div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Sample Itineraries</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Pick a ready-made plan or ask us to tailor one for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Half Day Highlights</h3>
              <p className="text-blue-600 font-medium mb-4">Ross Island + North Bay</p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Morning boat to Ross Island</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Explore ruins and deer park</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Transfer to North Bay for glass-bottom</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Return by late afternoon</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Full Day Explorer</h3>
              <p className="text-blue-600 font-medium mb-4">Neil + Havelock day circuit</p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Bharatpur Beach snorkel</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Natural Bridge visit</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Ferry to Havelock for Radhanagar Beach</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Evening return</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Two-Day Premium</h3>
              <p className="text-blue-600 font-medium mb-4">Private boat with custom route</p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Hidden coves and snorkeling stops</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Sunset at Kalapathar</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Overnight on Havelock</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />Next-day island trio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Travel Tips</h2>
            <p className="text-gray-500">Make hopping seamless and comfortable</p>
          </div>
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-[2rem] p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelTips.map((tip, index) => (
                <div key={index} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Island Hopping Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose the perfect package for your island adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-100"
              >
                <div className="bg-gray-900 p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1 font-display">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm">{pkg.duration}</p>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  </div>

                  <div className="mb-6 text-center">
                    <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wide">
                      {pkg.bestFor}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm text-center leading-relaxed">{pkg.description}</p>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-gray-900 text-sm mb-3 text-center">Includes:</h4>
                    <div className="space-y-2">
                      {pkg.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center justify-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {pkg.includes.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium text-center">+{pkg.includes.length - 3} more</div>
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
                    className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30 mt-auto"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about island hopping in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default IslandHoppingPage;