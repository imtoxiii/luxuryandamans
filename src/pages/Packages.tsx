import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ChevronRight, Filter, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Luxury Travel Packages"
        description="Choose from our exclusive luxury travel packages in the Andaman Islands. Experience world-class accommodations, personalized service, and unforgettable adventures."
        keywords="luxury packages, andaman travel packages, honeymoon packages, family packages, adventure packages"
      />
      <Header />
      
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 pt-32 md:pt-36 pb-16 md:pb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center text-sm text-white/90 mb-4">
              <Link to="/" className="hover:text-white transition-colors font-medium">Home</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="font-bold text-white">Packages</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-2xl mb-4">
              Discover Andaman Packages
            </h1>
            <p className="text-white/95 mt-3 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
              Handcrafted itineraries with premium stays, seamless experiences, and memories that last a lifetime
            </p>
          </motion.div>
        </div>
      </section>      {/* Filter + sort bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {(['All','Luxury','Honeymoon','Family','Standard'] as Category[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-300 ${
                    category === c 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-600 shadow-lg transform scale-105' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto">
              <div className="flex items-center space-x-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Sort by</span>
              </div>
              <div className="relative">
                <ArrowUpDown className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none pl-11 pr-10 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 bg-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[180px] font-medium cursor-pointer transition-all duration-200"
                >
                  <option value="recommended">Recommended</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="durationAsc">Duration: Short to Long</option>
                  <option value="durationDesc">Duration: Long to Short</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <motion.section
        variants={staggerContainer(0.08, 0.15)}
        initial="initial"
        animate="animate"
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4">
          {displayed.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <p className="text-gray-600 text-lg">
                  Showing <span className="font-bold text-gray-900">{displayed.length}</span> {displayed.length === 1 ? 'package' : 'packages'}
                  {category !== 'All' && <span> in <span className="font-bold text-blue-600">{category}</span> category</span>}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {displayed.map((pkg, idx) => (
                  <motion.div key={pkg.slug} variants={fadeInUp}>
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
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
              <button
                onClick={() => setCategory('All')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Show All Packages
              </button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        animate="animate"
        className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Why Choose Our Packages
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Experience the perfect blend of luxury, adventure, and relaxation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-600 shadow-lg" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Experience</h3>
              <p className="text-gray-600 leading-relaxed">Handpicked luxury accommodations and unforgettable experiences</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600 leading-relaxed">Fully insured and protected travel experiences with 24/7 support</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Award className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600 leading-relaxed">Professional and experienced local guides who know every detail</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default PackagesPage;