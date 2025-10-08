import { motion } from 'framer-motion';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { ChevronRight, Search, Filter, Clock, Users, MapPin, Star, DollarSign, Calendar } from 'lucide-react';
import { experiences, getExperiencesByCategory, getFeaturedExperiences, getPopularExperiences, type Experience } from '../data/experiences';

const categoryColors = {
  adventure: 'bg-blue-100 text-blue-800',
  luxury: 'bg-purple-100 text-purple-800',
  family: 'bg-green-100 text-green-800',
  romantic: 'bg-pink-100 text-pink-800',
  wellness: 'bg-teal-100 text-teal-800',
  cultural: 'bg-orange-100 text-orange-800',
  nature: 'bg-emerald-100 text-emerald-800'
};

const categoryIcons = {
  adventure: '🏃',
  luxury: '💎',
  family: '👨‍👩‍👧‍👦',
  romantic: '💕',
  wellness: '🧘',
  cultural: '🏛️',
  nature: '🌿'
};

const ExperiencesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');

  const filteredAndSortedExperiences = useMemo(() => {
    let filtered = experiences;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = getExperiencesByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(exp => 
        exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.locations?.some(loc => loc.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort experiences
    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      case 'price-low':
        return filtered.sort((a, b) => {
          const priceA = parseInt(a.price?.replace(/[^\d]/g, '') || '0');
          const priceB = parseInt(b.price?.replace(/[^\d]/g, '') || '0');
          return priceA - priceB;
        });
      case 'price-high':
        return filtered.sort((a, b) => {
          const priceA = parseInt(a.price?.replace(/[^\d]/g, '') || '0');
          const priceB = parseInt(b.price?.replace(/[^\d]/g, '') || '0');
          return priceB - priceA;
        });
      case 'duration':
        return filtered.sort((a, b) => (a.duration || '').localeCompare(b.duration || ''));
      default: // featured
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiences',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}${location.pathname}`,
      },
    ],
  };

  const ExperienceCard = ({ experience }: { experience: Experience }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      <Link to={`/experiences/${experience.slug}`}>
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent z-10" />
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[experience.category]}`}>
              {categoryIcons[experience.category]} {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
            </span>
          </div>

          {/* Featured/Popular Badge */}
          {experience.featured && (
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-sunset to-orange-500 text-white">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Price Badge */}
          {experience.price && (
            <div className="absolute bottom-4 right-4 z-20">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-night/80 text-pearl">
                {experience.price}
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-bold text-pearl mb-2 leading-tight">
              {experience.title}
            </h3>
            <p className="text-pearl/90 text-sm leading-relaxed">
              {experience.shortDescription}
            </p>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center justify-between text-night/60 text-sm mb-3">
          {experience.duration && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{experience.duration}</span>
            </div>
          )}
          {experience.difficulty && (
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-azure mr-1" />
              <span>{experience.difficulty}</span>
            </div>
          )}
        </div>
        
        {experience.locations && experience.locations.length > 0 && (
          <div className="flex items-center text-night/60 text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{experience.locations.slice(0, 2).join(', ')}{experience.locations.length > 2 ? ' & more' : ''}</span>
          </div>
        )}
        
        {experience.highlights && (
          <div className="flex flex-wrap gap-1 mb-3">
            {experience.highlights.slice(0, 3).map((highlight, index) => (
              <span key={index} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Andaman Experiences - Adventure, Luxury & Family Activities"
        description="Discover the best experiences in the Andaman Islands. From scuba diving and bioluminescence kayaking to luxury resorts and cultural tours. Find your perfect adventure."
        pathname={location.pathname}
        keywords="andaman experiences, scuba diving andaman, island hopping, luxury resorts, bioluminescence kayaking, family adventures, romantic getaways, cultural tours"
        extraStructuredData={[breadcrumbStructuredData]}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-azure via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 to-night/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-pearl max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center text-sm text-pearl/80 mb-4">
                <Link to="/" className="hover:text-pearl transition-colors">Home</Link>
                <ChevronRight size={16} className="mx-1" />
                <span className="font-semibold text-pearl">Experiences</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Discover Andaman's Best Experiences
              </h1>
              <p className="text-lg md:text-xl text-pearl/90 max-w-3xl mx-auto mb-8">
                From thrilling underwater adventures to serene wellness retreats, find your perfect island experience
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-night/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search experiences, locations, or activities..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg text-night bg-white/90 backdrop-blur-sm placeholder-night/50 focus:outline-none focus:ring-2 focus:ring-azure"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-pearl/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-5 h-5 text-night/60 mr-2" />
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'all' 
                    ? 'bg-azure text-pearl' 
                    : 'bg-night/10 text-night/60 hover:bg-night/20'
                }`}
              >
                All Experiences
              </button>
              {Object.keys(categoryColors).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? 'bg-azure text-pearl' 
                      : 'bg-night/10 text-night/60 hover:bg-night/20'
                  }`}
                >
                  {categoryIcons[category as keyof typeof categoryIcons]} {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-night/60">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-3 py-2 rounded-lg text-sm bg-night/10 text-night/60 focus:outline-none focus:ring-2 focus:ring-azure"
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

      {/* Featured Experiences */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="py-16 bg-gradient-to-br from-azure/5 to-blue-600/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-night mb-4">Featured Experiences</h2>
              <p className="text-night/70 max-w-2xl mx-auto">
                Handpicked adventures that showcase the best of the Andaman Islands
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFeaturedExperiences().slice(0, 6).map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Experiences Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-night mb-4">
              {selectedCategory !== 'all' 
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Experiences`
                : searchQuery 
                  ? `Search Results for "${searchQuery}"`
                  : 'All Experiences'
              }
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              {filteredAndSortedExperiences.length} experiences found
            </p>
          </motion.div>

          {filteredAndSortedExperiences.length > 0 ? (
            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredAndSortedExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-night/70 text-lg mb-4">No experiences found matching your criteria.</p>
              <button
                onClick={() => {
                  handleCategoryChange('all');
                  handleSearch('');
                  handleSortChange('featured');
                }}
                className="px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-20 bg-gradient-to-br from-night/5 to-azure/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-night mb-4">Explore by Category</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Find experiences that match your interests and travel style
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.keys(categoryColors).map((category) => {
              const categoryExperiences = getExperiencesByCategory(category);
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category)}
                  className={`p-6 rounded-xl ${categoryColors[category as keyof typeof categoryColors]} hover:shadow-lg transition-all text-center`}
                >
                  <div className="text-3xl mb-2">{categoryIcons[category as keyof typeof categoryIcons]}</div>
                  <h3 className="font-semibold capitalize">{category}</h3>
                  <p className="text-sm mt-1 opacity-80">{categoryExperiences.length} experiences</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperiencesPage;