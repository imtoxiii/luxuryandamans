import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Clock, Users, MapPin, Camera, CheckCircle, Heart, Star, Waves } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const SeaWalkPage = () => {
  const experiences = [
    {
      name: 'North Bay Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹3,500 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Photos & videos',
        'Boat transfers',
        'Safety briefing'
      ],
      description:
        'Walk on the seabed and witness colorful corals and friendly fish at North Bay Island.',
      image:
        'https://images.unsplash.com/photo-1522071740424-8b337d0dfa46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Beginners, Families',
      departure: 'Port Blair',
      highlights: ['Shallow waters', 'Rich marine life', 'Professional photography', 'Easy access'],
      depth: '5-7 meters',
      visibility: 'Excellent'
    },
    {
      name: 'Elephant Beach Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹4,500 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Complimentary snorkel session',
        'Refreshments',
        'Beach transfer'
      ],
      description:
        'A scenic sea walk at Havelock’s Elephant Beach with excellent visibility and reefs.',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Adventure seekers, Couples',
      departure: 'Havelock Island',
      highlights: ['Pristine beach', 'Diverse coral formations', 'Snorkeling combo', 'Beach relaxation'],
      depth: '6-8 meters',
      visibility: 'Excellent'
    },
    {
      name: 'Jolly Buoy Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹5,000 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Photos & videos',
        'Protected area permit',
        'Boat transfers'
      ],
      description:
        'Experience sea walking in the protected marine park with pristine coral gardens.',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Nature enthusiasts, Photographers',
      departure: 'Port Blair',
      highlights: ['Protected marine park', 'Pristine corals', 'Abundant marine life', 'Conservation area'],
      depth: '5-7 meters',
      visibility: 'Outstanding'
    }
  ];

  const whatToExpect = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Underwater Walking',
      description: 'Walk on the ocean floor with a specialized helmet providing oxygen'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photography Service',
      description: 'Professional underwater photographers capture your experience'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Marine Encounters',
      description: 'Get up close with colorful fish and vibrant coral formations'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety First',
      description: 'Certified guides ensure a safe and comfortable experience'
    }
  ];

  const marineLife = [
    {
      name: 'Clownfish',
      description: 'The iconic orange and white fish made famous by Finding Nemo',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Butterflyfish',
      description: 'Beautiful, disk-shaped fish with striking patterns',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Angelfish',
      description: 'Elegant fish with vibrant colors and long fins',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Sea Turtles',
      description: 'Gentle giants of the sea, occasionally spotted during walks',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Priya & Rohan',
      rating: 5,
      comment: 'The sea walk was incredible! We saw so many colorful fish and corals. The guides were very patient and made us feel safe throughout.',
      location: 'Mumbai'
    },
    {
      name: 'Emily Johnson',
      rating: 5,
      comment: 'As someone who can\'t swim, the sea walk was perfect! I could walk on the ocean floor and see everything up close. A truly magical experience!',
      location: 'London'
    },
    {
      name: 'The Patel Family',
      rating: 5,
      comment: 'Our kids loved the sea walk! It was educational and fun. The underwater photos they took are amazing memories we\'ll cherish forever.',
      location: 'Ahmedabad'
    }
  ];

  const notes = [
    'Suitable for non-swimmers; no prior experience needed',
    'Medical restrictions apply (e.g., asthma, heart conditions)',
    'Children above 10 years are allowed with consent',
    'Weather and sea conditions can affect availability',
    'Wear comfortable swimwear and bring a change of clothes',
    'Remove jewelry and accessories before the walk',
    'Follow all safety instructions from your guide',
    'Avoid touching marine life and coral formations'
  ];

  const faqs = [
    {
      question: "Is sea walking safe for non-swimmers?",
      answer: "Yes, sea walking is perfect for non-swimmers. The specialized helmet provides oxygen and keeps your head dry, allowing you to breathe normally while walking on the ocean floor."
    },
    {
      question: "How deep is the sea walk?",
      answer: "Sea walks are conducted in shallow waters, typically 5-8 meters deep. The depth is safe and comfortable for beginners, with constant guide supervision."
    },
    {
      question: "Are there any medical restrictions?",
      answer: "Yes, conditions like asthma, heart problems, high blood pressure, epilepsy, and pregnancy may restrict participation. Please consult your doctor and inform us of any medical conditions."
    },
    {
      question: "What should I wear for the sea walk?",
      answer: "Wear comfortable swimwear and bring a change of clothes. Avoid wearing jewelry, accessories, or makeup. We provide all necessary equipment including the helmet."
    },
    {
      question: "Can I wear glasses during the sea walk?",
      answer: "Unfortunately, regular glasses cannot be worn inside the helmet. If you have vision correction, consider wearing contact lenses or consult with our team for alternatives."
    },
    {
      question: "What marine life can we expect to see?",
      answer: "You'll encounter colorful coral formations, clownfish, butterflyfish, angelfish, and various other tropical fish. Occasionally, you might spot sea turtles or rays."
    },
    {
      question: "Is underwater photography included?",
      answer: "Yes, professional underwater photography is included in most packages. Our photographers capture your experience, and you receive digital copies after the tour."
    },
    {
      question: "What happens if I feel claustrophobic?",
      answer: "The helmet is designed for comfort with good visibility. If you feel uncomfortable, our trained guides will assist you immediately. You can surface at any time if needed."
    },
    {
      question: "Can children participate in sea walking?",
      answer: "Children above 10 years can participate with parental consent. They must be comfortable in water and able to follow safety instructions. Parental supervision is required."
    },
    {
      question: "What if the weather is bad on the day of my booking?",
      answer: "Sea walks are weather-dependent for safety. In case of bad weather, we offer rescheduling options or full refunds. We monitor conditions closely and make decisions in your best interest."
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Sea Walk in Andaman | North Bay & Elephant Beach | Book Now"
        description="Experience walking on the sea bed in Andaman. Sea walk at North Bay and Elephant Beach with helmet oxygen supply, photos, and guides. Perfect for non-swimmers."
        keywords="sea walk andaman, north bay sea walk, elephant beach sea walk, sea bed walk andaman, underwater walking andaman"
        targetAudience="family"
        pathname="/experiences/sea-walk"
      />
      <Header />

      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Sea Walk Andaman"
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
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">Sea Walk</h1>
              <p className="text-xl text-pearl/90 mb-8">
                Step onto the ocean floor and meet the marine world—no swimming needed.
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Sea Walk',
                      source: 'experience',
                      slug: 'sea-walk'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Reserve Your Slot
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

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
              Discover the magical experience of walking on the ocean floor
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

      {/* Marine Life */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Marine Life You'll See</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Get up close with the fascinating underwater creatures of Andaman
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marineLife.map((creature, index) => (
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
                    src={creature.image}
                    alt={creature.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{creature.name}</h3>
                  <p className="text-night/70">{creature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Sea Walk Options</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose your preferred location and package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
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
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {exp.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {exp.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{exp.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.departure}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{exp.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-night mb-1">Depth:</h4>
                      <p className="text-night/60 text-sm">{exp.depth}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-night mb-1">Visibility:</h4>
                      <p className="text-night/60 text-sm">{exp.visibility}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {exp.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {exp.includes.length > 3 && (
                        <div className="text-xs text-azure">+{exp.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Sea Walk',
                          source: 'experience',
                          slug: 'sea-walk',
                          selectedActivities: [exp.name]
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-azure/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Guest Experiences
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              See what our guests have to say about their sea walk experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-sunset fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-night/70 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-night">{testimonial.name}</h4>
                    <p className="text-night/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Know Before You Go</h2>
            <p className="text-night/70">Important information for a safe and enjoyable sea walk</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 mr-2 text-azure" />
                <span className="font-semibold text-night">Safety & Preparation</span>
              </div>
              <ul className="space-y-3 text-night/80">
                {notes.slice(0, 4).map((note, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure flex-shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 mr-2 text-azure" />
                <span className="font-semibold text-night">During the Experience</span>
              </div>
              <ul className="space-y-3 text-night/80">
                {notes.slice(4, 8).map((note, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure flex-shrink-0" />
                    <span>{note}</span>
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
        description="Everything you need to know about sea walking in Andaman"
        faqs={faqs}
      />

      <Footer />
    </div>
  );
};

export default SeaWalkPage;


