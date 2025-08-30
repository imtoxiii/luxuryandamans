import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Clock, Users } from 'lucide-react';

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
        'Boat transfers'
      ],
      description:
        'Walk on the seabed and witness colorful corals and friendly fish at North Bay Island.',
      image:
        'https://images.unsplash.com/photo-1522071740424-8b337d0dfa46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Elephant Beach Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹4,500 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Complimentary snorkel session',
        'Refreshments'
      ],
      description:
        'A scenic sea walk at Havelock’s Elephant Beach with excellent visibility and reefs.',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const notes = [
    'Suitable for non-swimmers; no prior experience needed',
    'Medical restrictions apply (e.g., asthma, heart conditions)',
    'Children above 10 years are allowed with consent',
    'Weather and sea conditions can affect availability'
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Sea Walk in Andaman | North Bay & Elephant Beach | Book Now"
        description="Experience walking on the sea bed in Andaman. Sea walk at North Bay and Elephant Beach with helmet oxygen supply, photos, and guides. Perfect for non-swimmers."
        keywords="sea walk andaman, north bay sea walk, elephant beach sea walk, sea bed walk andaman, underwater walking andaman"
        targetAudience="family"
        url="https://luxuryandaman.com/experiences/sea-walk"
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

      {/* Safety & Highlights */}
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
                <Shield className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Safe For Beginners</h3>
              <p className="text-night/70">Constant guide support and training</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Top Locations</h3>
              <p className="text-night/70">North Bay and Elephant Beach</p>
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
              <h3 className="text-lg font-semibold text-night mb-2">Great For Families</h3>
              <p className="text-night/70">Memorable for all age groups</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Sea Walk Options</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose your preferred location and package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">
                    {exp.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{exp.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-6">
                    {exp.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-night/60">
                        <span className="w-2 h-2 glass-sunset-dot mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              {notes.map((n, i) => (
                <li key={i} className="flex items-start text-night/80">
                  <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeaWalkPage;


