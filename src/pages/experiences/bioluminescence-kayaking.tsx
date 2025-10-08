import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Moon, Sparkles, Clock, Users, MapPin, Camera, CheckCircle, Calendar, Shield, Waves } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const BioluminescenceKayakingPage = () => {
  const tours = [
    {
      name: 'Standard Glow Tour',
      duration: '1.5 hours',
      price: '₹3,500 per person',
      includes: [
        'Kayak and safety gear',
        'Certified guide',
        'Basic paddling briefing',
        'Photos and videos (subject to visibility)',
        'Safety equipment and life jacket'
      ],
      description:
        'Paddle through glowing waters near Havelock on a guided night tour, ideal for beginners and families.',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Beginners, Families',
      departure: 'Havelock Island',
      highlights: ['Small group experience', 'Expert guidance', 'Safety equipment', 'Photography']
    },
    {
      name: 'Private Glow Experience',
      duration: '2 hours',
      price: '₹9,000 for 2',
      includes: [
        'Private guide',
        'Single or tandem kayak',
        'Refreshments',
        'Flexible timing around peak glow',
        'Professional photography service'
      ],
      description:
        'An intimate private experience designed around moon phases for the best glow visibility.',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Couples, Special occasions',
      departure: 'Havelock Island',
      highlights: ['Complete privacy', 'Flexible timing', 'Professional photos', 'Refreshments']
    },
    {
      name: 'Full Moon Glow Tour',
      duration: '2.5 hours',
      price: '₹4,500 per person',
      includes: [
        'Kayak and safety gear',
        'Certified guide',
        'Moon phase education',
        'Photos and videos',
        'Post-tour refreshments'
      ],
      description:
        'Experience the unique combination of moonlight and bioluminescence on this special tour.',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Nature enthusiasts, Photographers',
      departure: 'Neil Island',
      highlights: ['Moon phase education', 'Unique experience', 'Photography opportunities', 'Refreshments']
    }
  ];

  const locations = [
    {
      name: 'Havelock Island',
      description: 'The most popular location for bioluminescence kayaking with consistent glow',
      bestTime: 'November to April',
      visibility: 'High',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Neil Island',
      description: 'Less crowded location with excellent bioluminescence conditions',
      bestTime: 'November to April',
      visibility: 'High',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Port Blair',
      description: 'Convenient location with moderate bioluminescence visibility',
      bestTime: 'November to April',
      visibility: 'Moderate',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const whatToExpect = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Glowing Waters',
      description: 'Watch the water light up with blue-green glow as you paddle through it'
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: 'Moon Phase Magic',
      description: 'Experience the phenomenon at its peak during new moon phases'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photo Opportunities',
      description: 'Capture the magical glow (though challenging, our guides help)'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety First',
      description: 'Expert guides ensure a safe and comfortable experience'
    }
  ];

  const bestTimeToVisit = [
    {
      month: 'November - December',
      description: 'Peak season with excellent visibility and calm waters',
      visibility: 'Excellent'
    },
    {
      month: 'January - February',
      description: 'Great conditions with optimal glow intensity',
      visibility: 'Excellent'
    },
    {
      month: 'March - April',
      description: 'Good visibility with warmer water temperatures',
      visibility: 'Good'
    },
    {
      month: 'May - October',
      description: 'Limited tours due to monsoon conditions',
      visibility: 'Poor'
    }
  ];

  const tips = [
    'Best during new moon phases (low ambient light)',
    'Wear quick-dry clothing and avoid bright lights',
    'Children above 6 years can join with guardians',
    'Subject to weather and tidal conditions',
    'Bring a waterproof bag for electronics',
    'Apply insect repellent before departure',
    'Avoid using flashlights or phone lights during the tour',
    'Listen carefully to your guide\'s instructions'
  ];

  const faqs = [
    {
      question: "What causes the bioluminescence in Andaman waters?",
      answer: "The glow is caused by bioluminescent plankton called dinoflagellates that emit light when disturbed. These tiny organisms create the magical blue-green glow when you paddle through the water."
    },
    {
      question: "Is it safe to kayak at night?",
      answer: "Yes, our tours are completely safe. We provide life jackets, trained guides, and maintain small group sizes. All guides are certified in first aid and water safety."
    },
    {
      question: "What is the best time to see bioluminescence?",
      answer: "The phenomenon is most visible during new moon phases when there's minimal light pollution. The peak season is from November to April, with the best visibility from December to February."
    },
    {
      question: "Can children participate in the bioluminescence kayaking?",
      answer: "Yes, children above 6 years can join with parental supervision. We ensure proper safety equipment and provide tandem kayaks for families with young children."
    },
    {
      question: "What should I wear and bring for the tour?",
      answer: "Wear quick-dry clothing and bring a change of clothes. Avoid bright colors and bring a waterproof bag for electronics. Insect repellent is recommended. All kayaking equipment is provided."
    },
    {
      question: "Is photography possible during the tour?",
      answer: "Photography is challenging due to low light conditions, but our guides help you capture the glow. We provide photography service with special equipment for the best results."
    },
    {
      question: "What happens if the weather is bad?",
      answer: "Tours are weather-dependent for safety. In case of bad weather, we offer rescheduling options or full refunds. We monitor weather conditions closely."
    },
    {
      question: "Do I need kayaking experience to participate?",
      answer: "No prior experience is needed. Our tours are beginner-friendly with basic paddling instruction provided before departure. Our guides ensure everyone is comfortable."
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Bioluminescence Kayaking in Andaman | Night Glow Tours | Book Now"
        description="Witness nature's magic with bioluminescence kayaking in Havelock, Andamans. Guided night tours, beginner friendly, best around new moon. Book glow kayak now."
        keywords="bioluminescence andaman, glow kayaking havelock, night kayaking andaman, plankton glow andaman, new moon kayaking"
        targetAudience="adventure"
        pathname="/experiences/bioluminescence-kayaking"
      />
      <Header />

      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Bioluminescence Kayaking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 to-night/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">
                Bioluminescence Kayaking
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Glide over a sea of stars as plankton light up with every paddle stroke.
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Bioluminescence Kayaking',
                      source: 'experience',
                      slug: 'bioluminescence-kayaking'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Night Tour
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Moon className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">New Moon Magic</h3>
              <p className="text-night/70">Peak glow around darker nights</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Glow Guaranteed*</h3>
              <p className="text-night/70">Dependent on season and weather</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Beginner Friendly</h3>
              <p className="text-night/70">No prior kayaking experience needed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">What to Expect</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Discover the magical experience of bioluminescence kayaking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 text-azure">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-night mb-2">{item.title}</h3>
                <p className="text-night/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Locations */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Best Locations</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Discover the top spots for bioluminescence kayaking in Andaman
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {location.visibility} Visibility
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{location.name}</h3>
                  <p className="text-night/70 mb-4">{location.description}</p>
                  <div className="flex items-center text-night/60">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{location.bestTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Night Glow Tours</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose from our curated night kayaking experiences designed around moon phases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
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
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {tour.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {tour.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{tour.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {tour.departure}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{tour.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {tour.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {tour.includes.length > 3 && (
                        <div className="text-xs text-azure">+{tour.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Bioluminescence Kayaking',
                          source: 'experience',
                          slug: 'bioluminescence-kayaking',
                          selectedActivities: [tour.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-4 py-2 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all w-full justify-center"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-gradient-to-br from-azure/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Best Time to Visit</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Plan your trip around the optimal conditions for bioluminescence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestTimeToVisit.map((time, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-night mb-2">{time.month}</h3>
                <p className="text-night/70 mb-4">{time.description}</p>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    time.visibility === 'Excellent' ? 'bg-green-500' :
                    time.visibility === 'Good' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <span className="text-sm text-night/60">{time.visibility} Visibility</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Good to Know</h2>
            <p className="text-night/70">Helpful notes to plan your glow adventure</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 mr-2 text-azure" />
                <span className="font-semibold text-night">Safety & Preparation</span>
              </div>
              <ul className="space-y-3 text-night/80">
                {tips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2 text-azure" />
                <span className="font-semibold text-night">Experience Tips</span>
              </div>
              <ul className="space-y-3 text-night/80">
                {tips.slice(4, 8).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Everything you need to know about bioluminescence kayaking in Andaman"
        faqs={faqs}
      />

      <Footer />
    </div>
  );
};

export default BioluminescenceKayakingPage;


