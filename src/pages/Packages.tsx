import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ChevronRight, Filter, Users } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages, Package } from '../data/packages';
import { staggerContainer, fadeInUp } from '../lib/animations';
import PackageCard from '../components/PackageCard';

type Category = 'All' | 'Luxury' | 'Honeymoon' | 'Family' | 'Standard';

const getCategory = (pkg: Package): Exclude<Category, 'All'> => {
  const t = (pkg.title + ' ' + pkg.slug).toLowerCase();
  if (t.includes('luxury')) return 'Luxury';
  if (t.includes('honeymoon')) return 'Honeymoon';
  if (t.includes('family')) return 'Family';
  return 'Standard';
};

const getDays = (duration: string) => {
  // Extract first number found as days (supports formats like "5 days", "5N 6D", etc.)
  const m = duration.match(/(\d+)(?=\s*days?|\s*d|\s*n?\s*\d*\s*d|\b)/i);
  const num = m ? parseInt(m[1], 10) : undefined;
  // Fallback: try total days from patterns like 5N 6D
  if (!num) {
    const nightsDays = duration.match(/(\d+)\s*[nN].*?(\d+)\s*[dD]/);
    if (nightsDays) return parseInt(nightsDays[2], 10);
  }
  return num ?? 0;
};

const PackagesPage = () => {
  // Filters / sorting
  const [category, setCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'priceAsc' | 'priceDesc' | 'durationAsc' | 'durationDesc'>('recommended');

  const filtered = useMemo(() => {
    return packages.filter(p => category === 'All' ? true : getCategory(p) === category);
  }, [category]);

  const displayed = useMemo(() => {
    const arr = [...filtered];
    switch (sortBy) {
      case 'priceAsc':
        return arr.sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return arr.sort((a, b) => b.price - a.price);
      case 'durationAsc':
        return arr.sort((a, b) => getDays(a.duration) - getDays(b.duration));
      case 'durationDesc':
        return arr.sort((a, b) => getDays(b.duration) - getDays(a.duration));
      default:
        return arr; // keep curated order as recommended
    }
  }, [filtered, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <SEO
        title="Luxury Travel Packages"
        description="Choose from our exclusive luxury travel packages in the Andaman Islands. Experience world-class accommodations, personalized service, and unforgettable adventures."
        keywords="luxury packages, andaman travel packages, honeymoon packages, family packages, adventure packages"
      />
      <Header />

      {/* Modern Hero Section with Parallax Feel */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0  z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg"
            alt="Andaman Luxury"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">Curated Experiences</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg font-display">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Perfect Getaway</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our handpicked collection of luxury packages designed for unforgettable memories in the Andaman Islands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {(['All', 'Luxury', 'Honeymoon', 'Family', 'Standard'] as Category[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${category === c
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:border-blue-300 transition-colors group cursor-pointer relative w-full md:w-auto">
                <Filter className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-transparent border-none text-sm font-medium text-gray-700 focus:outline-none cursor-pointer w-full pr-8"
                >
                  <option value="recommended">Recommended</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="durationAsc">Duration: Short to Long</option>
                  <option value="durationDesc">Duration: Long to Short</option>
                </select>
                <ChevronRight className="w-4 h-4 text-gray-400 absolute right-4 rotate-90 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="initial"
            animate="animate"
          >
            {displayed.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {displayed.map((pkg, idx) => (
                  <motion.div key={pkg.slug} variants={fadeInUp} layout>
                    <PackageCard
                      title={pkg.title}
                      description={pkg.description}
                      price={pkg.price}
                      duration={pkg.duration}
                      groupSize={pkg.groupSize}
                      features={pkg.features}
                      image={pkg.image}
                      slug={pkg.slug}
                      delay={idx * 0.05}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-32"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
                  <Filter className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">No packages found</h3>
                <p className="text-gray-500 mb-8 text-lg">We couldn't find any packages matching your criteria.</p>
                <button
                  onClick={() => setCategory('All')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
                >
                  View All Packages
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Experience the Extraordinary
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We go above and beyond to ensure your Andaman journey is nothing short of perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "Premium Experience",
                desc: "Handpicked luxury accommodations and exclusive experiences tailored to your preferences.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Safe & Secure",
                desc: "Fully insured and protected travel experiences with 24/7 on-ground support.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Local Experts",
                desc: "Guided by professional local experts who know every hidden gem of the islands.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Decoration */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;