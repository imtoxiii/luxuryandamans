import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
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
    <ExperienceLayout
      title="Bioluminescence Kayaking"
      subtitle="Night Glow Tours"
      description="Glide over a sea of stars as plankton light up with every paddle stroke. Experience nature's magical light show in the pristine waters of the Andaman Islands."
      image="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "1.5-2.5 Hours",
        location: "Havelock & Neil",
        price: "From ₹3,500"
      }}
      slug="bioluminescence-kayaking"
      seo={{
        title: "Bioluminescence Kayaking in Andaman | Night Glow Tours | Book Now",
        description: "Witness nature's magic with bioluminescence kayaking in Havelock, Andamans. Guided night tours, beginner friendly, best around new moon. Book glow kayak now.",
        keywords: "bioluminescence andaman, glow kayaking havelock, night kayaking andaman, plankton glow andaman, new moon kayaking"
      }}
      bookingData={{
        packageName: 'Bioluminescence Kayaking',
        source: 'experience',
        slug: 'bioluminescence-kayaking'
      }}
    >
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Moon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Moon Magic</h3>
              <p className="text-gray-600 text-sm">Peak glow around darker nights</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Glow Guaranteed*</h3>
              <p className="text-gray-600 text-sm">Dependent on season and weather</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beginner Friendly</h3>
              <p className="text-gray-600 text-sm">No prior kayaking experience needed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">What to Expect</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover the magical experience of bioluminescence kayaking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Locations */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Best Locations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the top spots for bioluminescence kayaking in Andaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border border-gray-700"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {location.visibility} Visibility
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{location.name}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{location.description}</p>
                  <div className="flex items-center text-cyan-400 bg-gray-700/50 p-3 rounded-xl w-fit">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{location.bestTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Night Glow Tours</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose from our curated night kayaking experiences designed around moon phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold z-20 shadow-lg">
                    {tour.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                      {tour.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{tour.name}</h3>
                  <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                    <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4 mr-2" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <MapPin className="w-4 h-4 mr-2" />
                      {tour.departure}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{tour.description}</p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                    <div className="space-y-2">
                      {tour.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {tour.includes.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium pl-6">+{tour.includes.length - 3} more items</div>
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
                    className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30 mt-auto"
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Best Time to Visit</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Plan your trip around the optimal conditions for bioluminescence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestTimeToVisit.map((time, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{time.month}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{time.description}</p>
                <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg w-fit">
                  <div className={`w-2.5 h-2.5 rounded-full mr-2 ${
                    time.visibility === 'Excellent' ? 'bg-green-500' :
                    time.visibility === 'Good' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{time.visibility} Visibility</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Good to Know</h2>
            <p className="text-gray-500">Helpful notes to plan your glow adventure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">Safety & Preparation</span>
              </div>
              <ul className="space-y-4">
                {tips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">Experience Tips</span>
              </div>
              <ul className="space-y-4">
                {tips.slice(4, 8).map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about bioluminescence kayaking in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default BioluminescenceKayakingPage;
