import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { blogPosts } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const relatedPosts = post.relatedPosts
    .map(id => blogPosts.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={post.image}
        type="article"
        author={post.author.name}
        publishedTime={post.date}
        section={post.category}
        tags={post.tags}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link 
                to="/blog"
                className="inline-flex items-center text-pearl/80 hover:text-pearl mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-pearl mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-pearl/90">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {post.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-8 p-6 bg-pearl rounded-lg">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-night">{post.author.name}</h3>
                  <p className="text-night/70 text-sm">{post.author.bio}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-azure/5 text-azure px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-night prose-headings:font-bold prose-p:text-night/70 prose-strong:text-night prose-strong:font-semibold prose-ul:text-night/70 prose-li:marker:text-sunset">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-night mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost?.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Link 
                        to={`/blog/${relatedPost?.slug}`}
                        className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                      >
                        <div className="relative h-48">
                          <img
                            src={relatedPost?.image}
                            alt={relatedPost?.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-night mb-2 group-hover:text-azure transition-colors">
                            {relatedPost?.title}
                          </h3>
                          <p className="text-night/70">{relatedPost?.excerpt}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;