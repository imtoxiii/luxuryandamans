import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag, TrendingUp, BookOpen, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

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
  }, [searchTerm, selectedCategory, sortBy, blogPosts]);

  // Get featured posts (latest 3 posts)
  const featuredPosts = blogPosts.slice(0, 3);

  const categoryStats = useMemo(() => {
    return categories.map(category => ({
      name: category,
      count: category === 'all' 
        ? blogPosts.length 
        : blogPosts.filter(post => post.category.toLowerCase() === category).length
    }));
  }, [categories, blogPosts]);

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Andaman Travel Blog - Expert Guides & Tips"
        description="Discover comprehensive travel guides, budget tips, and expert insights about the Andaman Islands. From budget packages to luxury experiences, find everything you need for your perfect island vacation."
        keywords="andaman blog, travel guides, budget travel tips, honeymoon packages, family vacation, scuba diving, best beaches"
        targetAudience="all"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Andaman Travel Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/50 to-night/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-pearl mb-6 leading-tight">
                Andaman Travel <span className="text-azure">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-pearl/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert guides, budget tips, and insider secrets for your perfect Andaman adventure
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-pearl/90">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {blogPosts.length} Articles
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Expert Insights
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Tag className="w-5 h-5 mr-2" />
                  Budget to Luxury
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-night mb-4">Featured Articles</h2>
            <p className="text-night/70 text-lg">Our most popular and comprehensive travel guides</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <Link 
                  to={`/blog/${post.slug}`}
                  className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-pearl"
                >
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-80' : 'h-48'}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-azure/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    {index === 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-sunset/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                    <h3 className={`font-bold text-night mb-3 group-hover:text-azure transition-colors ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-night/70 mb-4 ${index === 0 ? 'text-lg' : ''}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-night/60">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author.name}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center text-azure group-hover:text-sunset transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-r from-azure/5 to-sunset/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles, tips, destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-12 py-4 rounded-xl border border-white/50 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent focus:bg-white transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-night/40 w-5 h-5" />
                </div>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-white/50 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="readTime">Quick Reads</option>
                </select>
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-night/40 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-3">
              {categoryStats.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full capitalize transition-all font-medium ${
                    selectedCategory === category.name
                      ? 'bg-azure text-white shadow-lg scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-night hover:bg-white hover:shadow-md hover:scale-105'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Results Info */}
            <div className="mt-6 text-center">
              <p className="text-night/70">
                Showing {filteredAndSortedPosts.length} of {blogPosts.length} articles
                {searchTerm && (
                  <span className="font-medium text-azure"> for "{searchTerm}"</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredAndSortedPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-night/30 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-night mb-2">No articles found</h3>
              <p className="text-night/70 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-azure text-white px-6 py-3 rounded-lg hover:bg-azure/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 border border-pearl"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-azure/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-night mb-3 group-hover:text-azure transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-night/70 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      {/* Author & Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-night/60 mb-4">
                        <div className="flex items-center">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          {post.author.name}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-xs bg-azure/10 text-azure px-2 py-1 rounded-full font-medium"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-night/50 px-2 py-1">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-azure group-hover:text-sunset transition-colors">
                        <span className="text-sm font-medium">Read Full Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;