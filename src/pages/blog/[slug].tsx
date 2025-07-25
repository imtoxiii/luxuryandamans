import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { blogPosts } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Helper to slugify text for IDs
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/<[^>]*>?/gm, '') // remove html tags
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .substring(0, 50);
};

// Helper to get plain text from React children
const flattenChildren = (children: any): string => {
  if (Array.isArray(children)) {
    return children.map(flattenChildren).join('');
  }
  if (typeof children === 'object' && children !== null && children.props) {
    return flattenChildren(children.props.children);
  }
  return children?.toString() || '';
};

// Helper to remove indentation from template literals
const dedent = (str: string | undefined): string => {
  if (!str) return '';
  const lines = str.split('\n');
  
  // Remove leading/trailing empty lines
  while (lines.length > 0 && lines[0].trim() === '') {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }
  if (lines.length === 0) return '';
  
  const baseIndentMatch = lines[0].match(/^\s*/);
  const baseIndent = baseIndentMatch ? baseIndentMatch[0] : '';
  
  if (baseIndent) {
    return lines.map(line => line.startsWith(baseIndent) ? line.substring(baseIndent.length) : line).join('\n');
  }
  return lines.join('\n');
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const [activeSection, setActiveSection] = useState('');
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, title: string, level: number}>>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const processedContent = useMemo(() => dedent(post?.content), [post]);

  useEffect(() => {
    if (processedContent) {
      const headings = processedContent.match(/#{2,6}\s+.+/g) || [];
      const toc = headings.map((heading) => {
        const level = (heading.match(/^#+/)?.[0].length || 2);
        const title = heading.replace(/^#+\s+/, '');
        const id = slugify(title);
        return { id, title, level: level - 1 };
      });
      setTableOfContents(toc);
    }

    // Intersection observer for active TOC section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px', threshold: 0 });

    const headingsInContent = contentRef.current?.querySelectorAll('h2, h3, h4, h5, h6');
    headingsInContent?.forEach(h => observer.observe(h));

    return () => {
      headingsInContent?.forEach(h => observer.unobserve(h));
    };
  }, [processedContent]);

  if (!post) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-night mb-4">Post Not Found</h1>
          <p className="text-night/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center bg-azure text-white px-6 py-3 rounded-lg hover:bg-azure/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = post.relatedPosts
    .map(id => blogPosts.find(p => p.id === id))
    .filter(Boolean);

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const HeadingRenderer = (props: {level: number, children: any}) => {
    const { level, children } = props;
    const text = flattenChildren(children);
    const id = slugify(text);
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const classes: {[key: number]: string} = {
      2: "text-2xl font-bold text-night mt-8 mb-4 text-azure",
      3: "text-xl font-semibold text-night mt-6 mb-3",
      4: "text-lg font-semibold text-night mt-4 mb-2",
      5: "text-base font-semibold text-night mt-4 mb-2",
      6: "text-base font-semibold text-night/80 mt-4 mb-2",
    };
    return <Tag id={id} className={classes[level] || ''}>{children}</Tag>;
  };
  
  const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-night mt-8 mb-4 border-b-2 border-azure/20 pb-2">{children}</h1>,
    h2: ({ children }: any) => <HeadingRenderer level={2}>{children}</HeadingRenderer>,
    h3: ({ children }: any) => <HeadingRenderer level={3}>{children}</HeadingRenderer>,
    h4: ({ children }: any) => <HeadingRenderer level={4}>{children}</HeadingRenderer>,
    h5: ({ children }: any) => <HeadingRenderer level={5}>{children}</HeadingRenderer>,
    h6: ({ children }: any) => <HeadingRenderer level={6}>{children}</HeadingRenderer>,
    p: ({ children }: any) => <p className="text-night/80 leading-relaxed mb-4 text-lg">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-night/80">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-night/80">{children}</ol>,
    li: ({ children }: any) => <li className="text-night/80 leading-relaxed marker:text-azure">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold text-night">{children}</strong>,
    em: ({ children }: any) => <em className="italic text-night/90">{children}</em>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-azure bg-azure/5 pl-6 py-4 my-6 italic text-night/80 text-xl">
        {children}
      </blockquote>
    ),
    code({ node, inline, className, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <div className="bg-night text-pearl p-4 rounded-lg overflow-x-auto my-4 text-sm">
                <code className={className} {...props}>
                    {children}
                </code>
            </div>
        ) : (
            <code className="bg-pearl px-2 py-1 rounded text-sm font-mono text-azure" {...props}>
                {children}
            </code>
        )
    },
    pre: ({ children }: any) => <>{children}</>,
  };

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
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/50 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Link 
                to="/blog"
                className="inline-flex items-center text-pearl/80 hover:text-pearl mb-8 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              
              <div className="mb-4">
                <span className="inline-block bg-azure/20 text-pearl px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-pearl mb-4 md:mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-pearl/90 mb-6 md:mb-8 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-pearl/90">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">
                  <User className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="hidden sm:inline">{post.author.name}</span>
                  <span className="sm:hidden">{post.author.name.split(' ')[0]}</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="hidden sm:inline">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="sm:hidden">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {post.readTime}
                </div>
                <button
                  onClick={sharePost}
                  className="flex items-center bg-azure/20 hover:bg-azure/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* Table of Contents - Sidebar */}
              {tableOfContents.length > 0 && (
                <div className="lg:col-span-1 order-2 lg:order-1">
                  <div className="lg:sticky lg:top-28">
                    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-pearl mb-8 lg:mb-0">
                      <h3 className="flex items-center text-base md:text-lg font-bold text-night mb-4">
                        <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2 text-azure" />
                        Table of Contents
                      </h3>
                      <nav className="space-y-2">
                        {tableOfContents.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block text-sm hover:text-azure transition-colors ${
                              item.level === 1 ? 'font-semibold' : 
                              item.level === 2 ? 'ml-4' : 'ml-8'
                            } ${activeSection === item.id ? 'text-azure font-bold' : 'text-night/70'}`}
                          >
                            <ChevronRight className="w-3 h-3 inline mr-1" />
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Content */}
              <div ref={contentRef} className={`${tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'} order-1 lg:order-2`}>
                <div className="bg-white rounded-xl shadow-lg border border-pearl overflow-hidden">
                  
                  {/* Author Info */}
                  <div className="bg-gradient-to-r from-azure/5 to-sunset/5 p-4 md:p-8 border-b border-pearl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-white shadow-lg mx-auto sm:mx-0"
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg md:text-xl font-bold text-night mb-1">{post.author.name}</h3>
                        <p className="text-sm md:text-base text-night/70 mb-3">{post.author.bio}</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {post.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="inline-flex items-center bg-azure/10 text-azure px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-4 md:p-8 lg:p-12">
                    <div className="prose prose-lg max-w-none">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {processedContent}
                      </ReactMarkdown>
                    </div>

                    {/* All Tags */}
                    <div className="mt-12 pt-8 border-t border-pearl">
                      <h4 className="text-lg font-semibold text-night mb-4">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center bg-pearl text-night/80 hover:bg-azure/10 hover:text-azure px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                          >
                            <Tag className="w-4 h-4 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold text-night mb-4">Continue Reading</h2>
                  <p className="text-night/70 text-lg">Discover more insights about Andaman travel</p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost?.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link 
                        to={`/blog/${relatedPost?.slug}`}
                        className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-pearl"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedPost?.image}
                            alt={relatedPost?.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="mb-2">
                            <span className="text-xs font-medium text-azure bg-azure/10 px-2 py-1 rounded">
                              {relatedPost?.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-night mb-2 group-hover:text-azure transition-colors line-clamp-2">
                            {relatedPost?.title}
                          </h3>
                          <p className="text-night/70 text-sm line-clamp-3 mb-4">{relatedPost?.excerpt}</p>
                          <div className="flex items-center text-xs text-night/60">
                            <Clock className="w-3 h-3 mr-1" />
                            {relatedPost?.readTime}
                          </div>
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