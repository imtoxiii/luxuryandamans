import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Moon, Sparkles, Clock, Users } from 'lucide-react';

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
        'Photos and videos (subject to visibility)'
      ],
      description:
        'Paddle through glowing waters near Havelock on a guided night tour, ideal for beginners and families.',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Private Glow Experience',
      duration: '2 hours',
      price: '₹9,000 for 2',
      includes: [
        'Private guide',
        'Single or tandem kayak',
        'Refreshments',
        'Flexible timing around peak glow'
      ],
      description:
        'An intimate private experience designed around moon phases for the best glow visibility.',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const tips = [
    'Best during new moon phases (low ambient light)',
    'Wear quick-dry clothing and avoid bright lights',
    'Children above 6 years can join with guardians',
    'Subject to weather and tidal conditions'
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

      {/* Tours */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Night Glow Tours</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose from our curated night kayaking experiences designed around moon phases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-night/30 group-hover:bg-night/50 transition-all duration-500 z-10" />
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">
                    {tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{tour.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Small groups
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{tour.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tour.includes.map((item, i) => (
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
                          packageName: 'Bioluminescence Kayaking',
                          source: 'experience',
                          slug: 'bioluminescence-kayaking',
                          selectedActivities: [tour.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Enquire Now
                  </Link>
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
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start text-night/80">
                  <span className="w-2 h-2 glass-sunset-dot mr-3 mt-2" />
                  <span>{tip}</span>
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

export default BioluminescenceKayakingPage;


