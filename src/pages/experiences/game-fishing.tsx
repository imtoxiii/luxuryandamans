import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Fish, Anchor, Clock, Users, Trophy } from 'lucide-react';

const GameFishingPage = () => {
  const charters = [
    {
      name: 'Half-Day Offshore Charter',
      duration: '4 hours',
      price: '₹18,000 up to 4',
      includes: [
        'Professional crew',
        'All fishing gear & bait',
        'Soft drinks & snacks',
        'Catch-and-release encouraged'
      ],
      description:
        'Perfect for beginners and families. Target species include trevally, snapper, and barracuda.',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Full-Day Big Game Charter',
      duration: '8 hours',
      price: '₹32,000 up to 4',
      includes: [
        'Trolling and jigging setup',
        'Expert captain & deckhand',
        'Lunch & refreshments',
        'Fuel and permits'
      ],
      description:
        'Head into deeper waters for GT, tuna, and sailfish. Ideal for enthusiasts.',
      image:
        'https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const advice = [
    'Peak season: Oct–May; monsoon trips are weather-dependent',
    'We practice sustainable fishing; some species are strictly catch-and-release',
    'Wear sun protection and non-slip footwear',
    'Motion sickness tablets recommended if needed'
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Game Fishing in Andaman | Offshore Charters | Book Private Boat"
        description="Book game fishing charters in Andaman. Half-day and full-day private boats with crew, gear, and refreshments. Target GT, tuna, barracuda, and more."
        keywords="game fishing andaman, fishing charter andaman, big game havelock, sport fishing andaman, trolling jigging andaman"
        targetAudience="adventure"
        pathname="/experiences/game-fishing"
      />
      <Header />

      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Game Fishing Andaman"
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
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">Game Fishing Charters</h1>
              <p className="text-xl text-pearl/90 mb-8">
                Chase trophy fish in the pristine Andaman waters with expert crews and premium gear.
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Game Fishing Charters',
                      source: 'experience',
                      slug: 'game-fishing'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Enquire for Availability
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Highlights */}
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
                <Fish className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Rich Fishery</h3>
              <p className="text-night/70">GT, tuna, barracuda, sailfish</p>
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
              <h3 className="text-lg font-semibold text-night mb-2">Modern Boats</h3>
              <p className="text-night/70">Well-equipped, safety compliant</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Expert Crews</h3>
              <p className="text-night/70">Local captains with years of experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Charters */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Charter Options</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">Select the ideal trip length and style</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charters.map((c, index) => (
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
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">{c.price}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{c.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {c.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Up to 4 guests
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{c.description}</p>
                  <ul className="space-y-2 mb-6">
                    {c.includes.map((item, i) => (
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
                          packageName: 'Game Fishing Charters',
                          source: 'experience',
                          slug: 'game-fishing',
                          selectedActivities: [c.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Check Dates
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advice */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Trip Advice</h2>
            <p className="text-night/70">Quick tips to make the most of your charter</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              {advice.map((a, i) => (
                <li key={i} className="flex items-start text-night/80">
                  <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                  <span>{a}</span>
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

export default GameFishingPage;


