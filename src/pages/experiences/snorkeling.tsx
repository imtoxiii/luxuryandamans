import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Fish, Clock, Shield, Camera, Waves, CheckCircle } from 'lucide-react';
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

  const faqs = [
    {
      question: "Do I need to know swimming for snorkeling?",
      answer: "Basic swimming skills are helpful but not mandatory. Life jackets are provided and mandatory for all participants."
    },
    {
      question: "What is the best time for snorkeling in Andaman?",
      answer: "October to May offers the best conditions with calm seas and excellent visibility. December to February is peak season."
    },
    {
      question: "Is snorkeling equipment provided?",
      answer: "Yes, we provide mask, snorkel, fins, and life jacket. Underwater cameras are available for rent separately."
    },
    {
      question: "Is it safe for children?",
      answer: "Yes, snorkeling is safe for children above 8 years with parental supervision. We have special sites with shallow waters."
    }
  ];

  return (
    <ExperienceLayout
      title="Snorkeling Adventures"
      subtitle="Explore the Reefs"
      description="Discover the vibrant underwater world of the Andaman Islands with our guided snorkeling experiences. Swim alongside colorful fish and explore pristine coral gardens in crystal clear waters."
      image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "3-6 Hours",
        location: "Multiple Islands",
        price: "From ₹2,000"
      }}
      slug="snorkeling"
      seo={{
        title: "Snorkeling in Andaman | Best Snorkeling Sites & Packages 2026",
        description: "Discover the underwater paradise of Andaman with guided snorkeling tours. Explore vibrant coral reefs, tropical fish, and sea turtles at North Bay, Elephant Beach, and more.",
        keywords: "snorkeling andaman, north bay snorkeling, elephant beach snorkeling, jolly buoy snorkeling, red skin island snorkeling, coral reefs andaman, underwater life andaman, snorkeling price andaman"
      }}
      bookingData={{
        packageName: 'Snorkeling Adventures',
        source: 'experience',
        slug: 'snorkeling'
      }}
      faqData={faqs}
    >
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Experience the Magic</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Immerse yourself in the crystal-clear waters of the Andaman Islands. Our snorkeling adventures offer a window into a vibrant underwater world teeming with colorful coral reefs and exotic marine life. Whether you're a beginner or an experienced swimmer, our guided tours ensure a safe and unforgettable journey beneath the waves.
            </p>
          </div>
        </div>
      </section>

      {/* Snorkeling Sites */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Best Snorkeling Sites
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore these incredible snorkeling locations in the Andaman Islands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {snorkelingSites.map((site, index) => (
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
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {site.visibility} visibility
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{site.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{site.description}</p>
                  <div className="flex items-center space-x-4 mb-6 text-gray-400 text-sm">
                    <span className="flex items-center bg-gray-700/50 px-3 py-1 rounded-lg">
                      <Waves className="w-4 h-4 mr-2 text-cyan-400" />
                      Depth: {site.depth}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {site.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Safe for All</h3>
              <p className="text-gray-600 text-sm">Life jackets and professional guides ensure safety</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Waves className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clear Waters</h3>
              <p className="text-gray-600 text-sm">Excellent visibility up to 30 meters</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Fish className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rich Marine Life</h3>
              <p className="text-gray-600 text-sm">Encounter colorful fish and corals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Photo Friendly</h3>
              <p className="text-gray-600 text-sm">Underwater cameras available for rent</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Snorkeling Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose the perfect package for your snorkeling adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                  <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pkg.description}</p>

                <div className="mb-8 flex-grow">
                  <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                  </div>
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
                      } catch { /* no-op */ }
                    }}
                    className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Marine Life You'll See</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {marineLife.map((creature, index) => (
                    <div key={index} className="flex items-center text-gray-700 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <Fish className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="text-sm font-medium">{creature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Snorkeling Tips</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <ul className="space-y-4">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about snorkeling in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default SnorkelingPage;