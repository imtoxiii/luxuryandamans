import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';
import {
  Search, Clock, MapPin, Star,
  ArrowRight, Compass, Heart, Users, Sun, Palmtree,
  Sparkles, X
} from 'lucide-react';
import { experiences, getExperiencesByCategory, type Experience } from '../data/experiences';

// Modern category configuration
const categoryConfig: Record<string, { color: string; icon: any; label: string; gradient: string }> = {
  adventure: {
    color: 'text-blue-600 bg-blue-50',
    icon: Compass,
    label: 'Adventure',
    gradient: 'from-blue-500 to-cyan-500'
  },
  luxury: {
    color: 'text-purple-600 bg-purple-50',
    icon: Star,
    label: 'Luxury',
    gradient: 'from-purple-500 to-pink-500'
  },
  family: {
    color: 'text-green-600 bg-green-50',
    icon: Users,
    label: 'Family',
    gradient: 'from-green-500 to-emerald-500'
  },
  romantic: {
    color: 'text-rose-600 bg-rose-50',
    icon: Heart,
    label: 'Romantic',
    gradient: 'from-rose-500 to-red-500'
  },
  wellness: {
    color: 'text-teal-600 bg-teal-50',
    icon: Sun,
    label: 'Wellness',
    gradient: 'from-teal-500 to-cyan-500'
  },
  cultural: {
    color: 'text-amber-600 bg-amber-50',
    icon: MapPin,
    label: 'Cultural',
    gradient: 'from-amber-500 to-orange-500'
  },
  nature: {
    color: 'text-emerald-600 bg-emerald-50',
    icon: Palmtree,
    label: 'Nature',
    gradient: 'from-emerald-500 to-green-500'
  }
};

const ExperiencesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAndSortedExperiences = useMemo(() => {
    let filtered = experiences;

    if (selectedCategory !== 'all') {
      filtered = getExperiencesByCategory(selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(exp =>
        exp.title.toLowerCase().includes(query) ||
        exp.shortDescription.toLowerCase().includes(query) ||
        exp.detailedDescription.toLowerCase().includes(query) ||
        exp.locations?.some(loc => loc.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case 'popular':
        return [...filtered].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      case 'price-low':
        return [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price?.replace(/[^\d]/g, '') || '0');
          const priceB = parseInt(b.price?.replace(/[^\d]/g, '') || '0');
          return priceA - priceB;
        });
      case 'price-high':
        return [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price?.replace(/[^\d]/g, '') || '0');
          const priceB = parseInt(b.price?.replace(/[^\d]/g, '') || '0');
          return priceB - priceA;
        });
      case 'duration':
        return [...filtered].sort((a, b) => (a.duration || '').localeCompare(b.duration || ''));
      default:
        return [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) searchParams.set('search', query);
    else searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'all') searchParams.set('category', category);
    else searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const ExperienceCard = ({ experience, index }: { experience: Experience, index: number }) => {
    const config = categoryConfig[experience.category] || categoryConfig.adventure;
    const Icon = config.icon;

    return (
      <motion.div
        variants={fadeInUp}
        className={`group relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full border border-gray-100 ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
      >
        <Link to={`/experiences/${experience.slug}`} className="block h-full">
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />

            {/* Floating Badge */}
            <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white shadow-sm transition-all duration-300 group-hover:bg-black/40">
                <Icon size={12} className="text-white/90" />
                <span className="text-[10px] font-bold tracking-widest uppercase">{config.label}</span>
              </div>
              {experience.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-white shadow-sm">
                  <Sparkles size={12} className="text-amber-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-100">Featured</span>
                </div>
              )}
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className={`font-bold text-white mb-3 font-display leading-tight ${index % 5 === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                {experience.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-gray-200 text-sm font-medium mb-4">
                {experience.duration && (
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                    <Clock size={14} className="text-cyan-300" />
                    <span>{experience.duration}</span>
                  </div>
                )}
                {experience.locations && (
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                    <MapPin size={14} className="text-rose-300" />
                    <span className="truncate max-w-[150px]">{experience.locations[0]}</span>
                  </div>
                )}
              </div>

              <p className="text-gray-300 text-sm md:text-base line-clamp-2 mb-6 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">
                {experience.shortDescription}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Starting from</p>
                  <p className="text-xl font-bold text-white">{experience.price || 'On Request'}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-blue-900 transition-all duration-300 text-white">
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
      <SEO
        title="Things to Do in Andaman 2026 | Activities & Adventures"
        description="Discover 50+ Andaman experiences — scuba diving from ₹3,500, bioluminescence kayaking, sunset cruises, snorkeling & more. Book online with instant confirmation. Call +91 62975 76826."
        pathname={location.pathname}
        keywords="things to do in andaman, andaman activities, scuba diving andaman, snorkeling andaman, bioluminescence kayaking, sea walking andaman, jet skiing andaman, parasailing andaman, sunset cruise andaman, andaman water sports, andaman adventure activities, island hopping andaman"
        targetAudience="all"
        faqData={[
          {
            question: "What are the best experiences in Andaman Islands?",
            answer: "Top Andaman experiences include: Scuba Diving at Havelock (₹3,500-6,000), Snorkeling at Elephant Beach (₹600-1,500), Bioluminescence Kayaking at Havelock (₹2,000), Sea Walking at North Bay (₹3,500), Glass Bottom Boat rides, Sunset Cruises, and Mangrove Kayaking at Baratang. Water activities are best enjoyed from October to May."
          },
          {
            question: "How much do water activities cost in Andaman?",
            answer: "Andaman water activity prices: Scuba Diving ₹3,500-6,000 per person, Snorkeling ₹600-1,500, Sea Walking ₹3,500, Jet Skiing ₹800-1,500, Parasailing ₹800-1,200, Glass Bottom Boat ₹600-800, Bioluminescence Kayaking ₹1,500-2,500, Banana Boat ₹400-600. Prices may vary by season."
          },
          {
            question: "Is scuba diving safe for beginners in Andaman?",
            answer: "Yes, scuba diving in Andaman is very safe for beginners. PADI/SSI certified instructors conduct all dives. No prior experience needed — a 30-minute briefing is provided. Beginners can dive up to 6-12 meters depth. Popular beginner sites include Havelock, North Bay, and Elephant Beach."
          },
          {
            question: "Which is better for activities — Havelock or Neil Island?",
            answer: "Havelock Island is better for adventure activities (scuba diving, bioluminescence kayaking, jet skiing). Neil Island is ideal for relaxed experiences (glass bottom boats, cycling, beach walks). For a complete experience, visit both islands — spend 2-3 days on Havelock and 1-2 on Neil."
          }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Andaman Experiences - Adventure, Luxury & Family Activities",
          "description": "Discover 50+ curated experiences in the Andaman Islands including scuba diving, snorkeling, kayaking, sunset cruises and more.",
          "url": "https://luxuryandamans.com/experiences",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Andaman Island Experiences",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Scuba Diving", "url": "https://luxuryandamans.com/experiences/scuba-diving" },
              { "@type": "ListItem", "position": 2, "name": "Island Hopping", "url": "https://luxuryandamans.com/experiences/island-hopping" },
              { "@type": "ListItem", "position": 3, "name": "Sunset Cruises", "url": "https://luxuryandamans.com/experiences/sunset-cruises" },
              { "@type": "ListItem", "position": 4, "name": "Bioluminescence Kayaking", "url": "https://luxuryandamans.com/experiences/bioluminescence-kayaking" },
              { "@type": "ListItem", "position": 5, "name": "Family Adventures", "url": "https://luxuryandamans.com/experiences/family-adventures" }
            ]
          }
        }}
      />
      <Header />

      {/* Modern Hero Section with Parallax */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />
          <img
            src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg"
            alt="Experiences Hero"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-lg">
              <Compass className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-bold tracking-widest uppercase">Explore Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl font-display">
              Curated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-white">Adventures</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
              From deep sea diving to sunset cruises, discover unforgettable experiences
              tailored just for you in the Andaman Islands.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Filter & Search Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar px-1 snap-x">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap snap-start ${selectedCategory === 'all'
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                All Experiences
              </button>
              {Object.entries(categoryConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 snap-start ${selectedCategory === key
                    ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <config.icon size={14} />
                  {config.label}
                </button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search experiences..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm font-medium cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredAndSortedExperiences.length > 0 ? (
              <motion.div
                key="grid"
                variants={staggerContainer(0.1, 0.1)}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]"
              >
                {filteredAndSortedExperiences.map((experience, index) => (
                  <ExperienceCard key={experience.id} experience={experience} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No experiences found</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                  We couldn't find any experiences matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    handleSearch('');
                    setSortBy('featured');
                  }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperiencesPage;