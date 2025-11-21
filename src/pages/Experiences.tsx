import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { 
  Search, Clock, MapPin, Star, 
  ArrowRight,
  Compass, Heart, Users, Sun, Palmtree,
  Sparkles
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

  const ExperienceCard = ({ experience }: { experience: Experience }) => {
    const config = categoryConfig[experience.category] || categoryConfig.adventure;
    const Icon = config.icon;

    return (
      <motion.div
        variants={fadeInUp}
        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1 border border-gray-100"
      >
        <Link to={`/experiences/${experience.slug}`} className="relative block overflow-hidden aspect-[4/3] md:aspect-[16/10]">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md bg-white/95 text-gray-900 flex items-center gap-1.5 shadow-sm`}>
              <Icon size={12} className={config.color.split(' ')[0]} />
              {config.label}
            </span>
          </div>
          
          {experience.featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-400 text-white shadow-sm flex items-center gap-1.5">
                <Sparkles size={12} /> Featured
              </span>
            </div>
          )}

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
             <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                {experience.title}
              </h3>
             <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-200 font-medium">
                {experience.duration && (
                  <div className="flex items-center gap-1.5 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                    <Clock size={14} className="text-blue-400" />
                    <span>{experience.duration}</span>
                  </div>
                )}
                {experience.locations && (
                  <div className="flex items-center gap-1.5 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                    <MapPin size={14} className="text-rose-400" />
                    <span className="truncate max-w-[150px]">{experience.locations[0]}</span>
                  </div>
                )}
             </div>
          </div>
        </Link>

        <div className="p-5 flex flex-col flex-grow bg-white">
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-6 flex-grow">
            {experience.shortDescription}
          </p>

          <div className="pt-5 border-t border-gray-100 flex items-end justify-between gap-4">
            <div>
               <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Starting from</p>
               <p className="text-xl font-bold text-gray-900">{experience.price || 'On Request'}</p>
            </div>

            <Link 
              to={`/experiences/${experience.slug}`}
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 group/btn shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30"
            >
              Explore
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SEO 
        title="Andaman Experiences - Adventure, Luxury & Family Activities"
        description="Discover the best experiences in the Andaman Islands. From scuba diving and bioluminescence kayaking to luxury resorts and cultural tours."
        pathname={location.pathname}
      />
      <Header />
      
      {/* Modern Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg" 
            alt="Andaman Experiences" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/20 to-gray-900/30" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-4">
              Explore Paradise
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight leading-tight">
              Curated Adventures in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Andaman Islands
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredAndSortedExperiences.length > 0 ? (
              <motion.div
                key="grid"
                variants={staggerContainer(0.1, 0.1)}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredAndSortedExperiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
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
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
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