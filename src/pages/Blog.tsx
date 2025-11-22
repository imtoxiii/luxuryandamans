import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, SlidersHorizontal, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];
  
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const categoryStats = useMemo(() => {
    return categories.map(category => ({
      name: category,
      count: category === 'all' 
        ? blogPosts.length 
        : blogPosts.filter(post => post.category.toLowerCase() === category).length
    }));
  }, [categories]);

  return (
    <div className="relative min-h-screen bg-pearl font-sans selection:bg-azure selection:text-white">
      <SEO 
        title="The Journal - Luxury Andamans"
        description="Explore our curated collection of stories, guides, and insights about the Andaman Islands."
        keywords="andaman blog, travel stories, luxury travel, island guide"
        targetAudience="all"
      />
      <Header />
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-pearl" />
        </div>
      </div>

      <main className="relative pt-32 pb-20 px-4 md:px-8 lg:px-12 max-w-[1600px]  mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-white/80" />
              <span className="text-white/90 font-medium tracking-widest text-sm uppercase">The Journal</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight mb-8"
            >
              Stories from <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">Paradise</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl"
            >
              Curated guides, local secrets, and travel tips for your perfect island getaway.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto bg-white p-2 rounded-3xl shadow-glass border border-white/50 backdrop-blur-sm"
          >
            <div className="relative group flex-grow sm:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-night/30 group-focus-within:text-azure transition-colors" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-72 pl-12 pr-4 py-3 bg-transparent border-none text-night placeholder:text-night/30 focus:outline-none focus:ring-0"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                showFilters 
                  ? 'bg-night text-white shadow-lg' 
                  : 'bg-gray-50 text-night hover:bg-gray-100'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {selectedCategory !== 'all' && (
                <span className="ml-1 bg-azure text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
              )}
            </button>
          </motion.div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginBottom: 0 }}
              animate={{ height: 'auto', opacity: 1, marginBottom: 64 }}
              exit={{ height: 0, opacity: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-glass">
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Categories */}
                  <div className="flex-grow">
                    <h3 className="text-xs font-bold text-night/40 uppercase tracking-widest mb-6">Filter by Category</h3>
                    <div className="flex flex-wrap gap-3">
                      {categoryStats.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                            selectedCategory === category.name
                              ? 'bg-azure border-azure text-white shadow-lg shadow-azure/20'
                              : 'bg-transparent border-black/5 text-night/60 hover:border-azure/30 hover:text-azure'
                          }`}
                        >
                          <span className="capitalize">{category.name}</span>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                            selectedCategory === category.name ? 'bg-white/20 text-white' : 'bg-black/5 text-night/40'
                          }`}>
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div className="min-w-[250px]">
                    <h3 className="text-xs font-bold text-night/40 uppercase tracking-widest mb-6">Sort Articles</h3>
                    <div className="space-y-2">
                      {[
                        { value: 'newest', label: 'Newest First' },
                        { value: 'oldest', label: 'Oldest First' },
                        { value: 'readTime', label: 'Read Time' }
                      ].map((option) => (
                        <label 
                          key={option.value}
                          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                            sortBy === option.value ? 'bg-azure/5 border border-azure/20' : 'hover:bg-gray-50 border border-transparent'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            sortBy === option.value ? 'border-azure' : 'border-gray-300'
                          }`}>
                            {sortBy === option.value && (
                              <div className="w-2.5 h-2.5 rounded-full bg-azure" />
                            )}
                          </div>
                          <input
                            type="radio"
                            name="sort"
                            value={option.value}
                            checked={sortBy === option.value}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="hidden"
                          />
                          <span className={`text-sm font-medium ${
                            sortBy === option.value ? 'text-night' : 'text-night/60'
                          }`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog Grid */}
        {filteredAndSortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredAndSortedPosts.map((post, index) => {
              // Featured layout logic: First post spans 2 columns if it's the first page/no search
              const isFeatured = index === 0 && !searchTerm && selectedCategory === 'all';
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group flex flex-col ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                >
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="block relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3] lg:aspect-auto lg:h-full shadow-lg group-hover:shadow-2xl transition-all duration-500"
                  >
                    <div className={`w-full h-full bg-gray-100 ${isFeatured ? 'min-h-[400px] lg:min-h-[600px]' : ''}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Overlay Tags */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-night px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                      {isFeatured && (
                        <span className="bg-azure/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Tag className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                  </Link>

                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-4 text-xs font-medium text-night/40 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-night/20" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`} className="group-hover:text-azure transition-colors duration-300">
                      <h2 className={`font-display font-bold text-night leading-[1.1] mb-4 ${
                        isFeatured ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl'
                      }`}>
                        {post.title}
                      </h2>
                    </Link>

                    <p className={`text-night/60 leading-relaxed mb-6 line-clamp-3 ${
                      isFeatured ? 'text-lg md:text-xl max-w-2xl' : 'text-base'
                    }`}>
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full object-cover border border-black/5"
                        />
                        <div>
                          <p className="text-sm font-bold text-night">{post.author.name}</p>
                          <p className="text-xs text-night/40 font-medium">Author</p>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-night/40 group-hover:bg-azure group-hover:border-azure group-hover:text-white transition-all duration-300 group-hover:scale-110"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-night/20" />
            </div>
            <h3 className="text-2xl font-display font-bold text-night mb-2">No stories found</h3>
            <p className="text-night/60 max-w-md mb-8">
              We couldn't find any articles matching your search. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-8 py-3 bg-night text-white rounded-xl font-medium hover:bg-night/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;