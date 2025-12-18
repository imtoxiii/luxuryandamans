import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, ChevronDown, Filter, Users, Search, X } from 'lucide-react';

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
  const m = duration.match(/(\d+)(?=\s*days?|\s*d|\s*n?\s*\d*\s*d|\b)/i);
  const num = m ? parseInt(m[1], 10) : undefined;
  if (!num) {
    const nightsDays = duration.match(/(\d+)\s*[nN].*?(\d+)\s*[dD]/);
    if (nightsDays) return parseInt(nightsDays[2], 10);
  }
  return num ?? 0;
};

const PackagesPage = () => {
  const [category, setCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'priceAsc' | 'priceDesc' | 'durationAsc' | 'durationDesc'>('recommended');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Handle scroll for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        return arr;
    }
  }, [filtered, sortBy]);

  const categories: Category[] = ['All', 'Luxury', 'Honeymoon', 'Family', 'Standard'];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <SEO
        title="Andaman Tour Packages 2025 with Price | Honeymoon, Family & Luxury Packages"
        description="Browse all Andaman tour packages with prices. Honeymoon packages from ₹35,000, Family packages from ₹25,000, Luxury villa packages from ₹60,000. Includes ferry, hotels, meals & all activities. Compare & book online."
        keywords="andaman packages with price, andaman tour packages 2025, andaman honeymoon packages, andaman family packages, luxury andaman packages, cheap andaman packages, andaman packages for couples, 4 nights andaman package, 5 days andaman package, 6 days andaman package, andaman packages from delhi with flights, best andaman deals, andaman package booking, havelock package, neil island package, all inclusive andaman package, customized andaman package"
        pathname="/packages"
        targetAudience="all"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Andaman Tour Packages",
          "description": "Browse our collection of Andaman tour packages for honeymoon, family, and adventure travel.",
          "url": "https://luxuryandamans.com/packages",
          "numberOfItems": "10+",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Andaman Honeymoon Package"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Andaman Family Package"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Luxury Andaman Package"
            }
          ]
        }}
      />
      <Header />

      {/* Modern Hero Section with Parallax Feel */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
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
      <div className={`sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Desktop Categories */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${category === c
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden w-full flex items-center justify-between">
              <span className="text-gray-900 font-semibold">
                {category} Packages <span className="text-gray-400 font-normal">({displayed.length})</span>
              </span>
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="p-2 bg-gray-100 rounded-full text-gray-700"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-gray-100 border-none pl-4 pr-10 py-2 rounded-full text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <option value="recommended">Recommended</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="durationAsc">Duration: Short to Long</option>
                  <option value="durationDesc">Duration: Long to Short</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filters Expandable */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-4 border-t border-gray-100 mt-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((c) => (
                        <button
                          key={c}
                          onClick={() => { setCategory(c); setShowMobileFilters(false); }}
                          className={`px-4 py-2 rounded-full text-sm transition-colors ${category === c
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                            }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Sort By</p>
                    <select
                      value={sortBy}
                      onChange={(e) => { setSortBy(e.target.value as any); setShowMobileFilters(false); }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                    >
                      <option value="recommended">Recommended</option>
                      <option value="priceAsc">Price: Low to High</option>
                      <option value="priceDesc">Price: High to Low</option>
                      <option value="durationAsc">Duration: Short to Long</option>
                      <option value="durationDesc">Duration: Long to Short</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {displayed.length > 0 ? (
                displayed.map((pkg, idx) => (
                  <motion.div
                    key={pkg.slug}
                    variants={fadeInUp}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PackageCard
                      title={pkg.title}
                      description={pkg.description}
                      price={pkg.price}
                      duration={pkg.duration}
                      groupSize={pkg.groupSize}
                      features={pkg.features}
                      image={pkg.image}
                      slug={pkg.slug}
                      id={pkg.id}
                      delay={idx * 0.05}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No packages found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                  <button
                    onClick={() => setCategory('All')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Experience the Extraordinary
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We go above and beyond to ensure your Andaman journey is nothing short of perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Premium Experience",
                desc: "Handpicked luxury accommodations and exclusive experiences tailored to your preferences.",
                color: "bg-blue-500"
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Safe & Secure",
                desc: "Fully insured and protected travel experiences with 24/7 on-ground support.",
                color: "bg-green-500"
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Local Experts",
                desc: "Guided by professional local experts who know every hidden gem of the islands.",
                color: "bg-purple-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
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