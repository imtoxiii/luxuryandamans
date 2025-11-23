import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Mountain, MapPin, Clock, Users, TreePine, Camera, Sun, Compass, Footprints, CheckCircle } from 'lucide-react';
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

  const faqs = [
    {
      question: "How fit do I need to be for trekking?",
      answer: "We offer treks from easy to challenging. Basic fitness is sufficient for easy trails, while peak treks require good stamina and endurance."
    },
    {
      question: "Are the forests safe to trek?",
      answer: "Yes, our trails are safe with experienced guides. We follow designated paths and carry first aid kits for emergencies."
    },
    {
      question: "What wildlife might we see during treks?",
      answer: "You may spot various bird species including endemic ones, butterflies, small mammals, and if lucky, the Andaman wild pig."
    },
    {
      question: "Can children join the treks?",
      answer: "Children above 10 years can join easy treks with parental supervision. We recommend shorter, easier trails for families."
    }
  ];

  return (
    <ExperienceLayout
      title="Jungle Trekking"
      subtitle="Explore the Wild"
      description="Discover the pristine rainforests of the Andaman Islands through our guided trekking experiences. Hike through dense jungles, reach mountain peaks, and witness breathtaking panoramic views."
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "3 Hours - 2 Days",
        location: "Mount Harriet & More",
        price: "From ₹2,500"
      }}
      slug="trekking"
      seo={{
        title: "Jungle Trekking in Andaman | Mount Harriet & Saddle Peak 2025",
        description: "Explore the pristine rainforests of Andaman with guided trekking tours. Trek Mount Harriet, Saddle Peak, and more. Discover endemic wildlife and panoramic views.",
        keywords: "trekking andaman, mount harriet trek, saddle peak andaman, jungle trails andaman, nature walks andaman, bird watching andaman, forest trekking, trekking packages andaman"
      }}
      bookingData={{
        packageName: 'Jungle Trekking Adventures',
        source: 'experience',
        slug: 'trekking'
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
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Knowledgeable naturalists with forest expertise</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <TreePine className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pristine Forests</h3>
              <p className="text-gray-600 text-sm">Explore untouched rainforest ecosystems</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wildlife Spotting</h3>
              <p className="text-gray-600 text-sm">Encounter endemic species and birds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Panoramic Views</h3>
              <p className="text-gray-600 text-sm">Breathtaking vistas from mountain peaks</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trekking Routes */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Popular Trekking Routes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore these incredible trekking trails in the Andaman Islands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trekkingRoutes.map((route, index) => (
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
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {route.difficulty}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{route.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{route.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-gray-400 text-sm">
                    <span className="flex items-center bg-gray-700/50 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      {route.duration}
                    </span>
                    <span className="flex items-center bg-gray-700/50 px-3 py-1 rounded-lg">
                      <Footprints className="w-4 h-4 mr-2 text-green-400" />
                      {route.distance}
                    </span>
                    <span className="flex items-center bg-gray-700/50 px-3 py-1 rounded-lg">
                      <Mountain className="w-4 h-4 mr-2 text-green-400" />
                      {route.elevation}
                    </span>
                    <span className="flex items-center bg-gray-700/50 px-3 py-1 rounded-lg">
                      <MapPin className="w-4 h-4 mr-2 text-green-400" />
                      Trail
                    </span>
                  </div>
                  <div className="space-y-2">
                    {route.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3" />
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

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Trekking Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose the perfect trekking experience for your fitness level
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
                    <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                  </div>
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
                    className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-green-600/30"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Wildlife You Might Encounter</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {wildlife.map((animal, index) => (
                    <div key={index} className="flex items-center text-gray-700 p-2 hover:bg-green-50 rounded-lg transition-colors">
                      <TreePine className="w-4 h-4 mr-3 text-green-500" />
                      <span className="text-sm font-medium">{animal}</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Trekking Essentials</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <ul className="space-y-4">
                  {essentials.slice(0, 6).map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-4 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips & Best Season */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Trekking Tips</h2>
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <ul className="space-y-4">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Best Trekking Season</h2>
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Sun className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="font-bold text-xl text-gray-900">November to April</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The dry season offers the best trekking conditions with pleasant temperatures (20-30°C), lower humidity, and clear trails.
                </p>
                <div className="bg-white p-4 rounded-xl border border-gray-100 text-sm text-gray-500">
                  Note: Monsoon season (May-October) makes trails slippery and challenging.
                </div>
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
            description="Everything you need to know about trekking in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default TrekkingPage;