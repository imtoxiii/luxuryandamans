import { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { blogPosts } from '../../data/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ScrollProgress from '../../components/ScrollProgress';

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
  const location = useLocation();
  const post = blogPosts.find(p => p.slug === slug);
  const [activeSection, setActiveSection] = useState('');
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, title: string, level: number}>>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

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
    img: ({ node, ...props }: any) => <img className="rounded-lg my-4 shadow-lg" {...props} alt={props.alt || ''} />,
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
    <div className="min-h-screen bg-pearl font-sans selection:bg-azure selection:text-white">
      <ScrollProgress showPercentage color="#0EA5E9" />
      <SEO 
        title={post.title}
        description={post.excerpt}
        pathname={location.pathname}
        keywords={post.tags.join(', ')}
        image={post.image}
        type="article"
        author={post.author.name}
        publishedTime={post.date}
        section={post.category}
        tags={post.tags}
        faqData={post.faq}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/40 to-night/80" />
        </motion.div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <Link 
                to="/blog"
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Journal
              </Link>
              
              <div className="mb-6">
                <span className="inline-block bg-azure text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-azure/20">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/90">
                <div className="flex items-center gap-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full border-2 border-white/20"
                  />
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table of Contents - Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                {tableOfContents.length > 0 && (
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-black/5">
                    <h3 className="flex items-center text-sm font-bold text-night/40 uppercase tracking-wider mb-6">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Contents
                    </h3>
                    <nav className="space-y-1">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm py-1.5 transition-all duration-300 border-l-2 pl-4 ${
                            activeSection === item.id 
                              ? 'border-azure text-azure font-medium translate-x-1' 
                              : 'border-transparent text-night/60 hover:text-night hover:border-black/10'
                          } ${item.level > 1 ? 'ml-4' : ''}`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
                
                <div className="mt-8">
                  <button
                    onClick={sharePost}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-black/5 hover:border-azure/30 hover:text-azure text-night/60 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <div ref={contentRef} className="bg-white rounded-3xl shadow-glass p-6 md:p-12 lg:p-16">
                <div className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-azure prose-img:rounded-2xl prose-img:shadow-lg max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {processedContent}
                  </ReactMarkdown>
                </div>

                {/* FAQ Section */}
                {post.faq && post.faq.length > 0 && (
                  <div className="mt-16 pt-12 border-t border-black/5">
                    <h2 className="text-2xl font-display font-bold text-night mb-8 flex items-center gap-3">
                      <HelpCircle className="w-6 h-6 text-azure" />
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {post.faq.map((item, index) => (
                        <details key={index} className="group bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-azure/5">
                          <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-night">
                            {item.question}
                            <ChevronRight className="w-5 h-5 text-night/40 transition-transform duration-300 group-open:rotate-90" />
                          </summary>
                          <div className="px-6 pb-6 text-night/70 leading-relaxed">
                            {item.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-black/5">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center bg-gray-50 text-night/60 px-4 py-2 rounded-full text-sm font-medium hover:bg-azure hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <Tag className="w-3 h-3 mr-2" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {prevPost ? (
                  <Link 
                    to={`/blog/${prevPost.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-black/5 hover:border-azure/30 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xs font-bold text-night/30 uppercase tracking-wider mb-2 block">Previous Article</span>
                    <h4 className="font-display font-bold text-lg text-night group-hover:text-azure transition-colors line-clamp-2">
                      {prevPost.title}
                    </h4>
                  </Link>
                ) : <div />}
                
                {nextPost && (
                  <Link 
                    to={`/blog/${nextPost.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-black/5 hover:border-azure/30 hover:shadow-lg transition-all duration-300 text-right"
                  >
                    <span className="text-xs font-bold text-night/30 uppercase tracking-wider mb-2 block">Next Article</span>
                    <h4 className="font-display font-bold text-lg text-night group-hover:text-azure transition-colors line-clamp-2">
                      {nextPost.title}
                    </h4>
                  </Link>
                )}
              </div>
            </div>

            {/* Related Posts Sidebar (Desktop) */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-32">
                <h3 className="text-sm font-bold text-night/40 uppercase tracking-wider mb-6">Related Stories</h3>
                <div className="space-y-6">
                  {relatedPosts.slice(0, 3).map((relatedPost) => (
                    <Link 
                      key={relatedPost?.id}
                      to={`/blog/${relatedPost?.slug}`}
                      className="group block"
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                        <img
                          src={relatedPost?.image}
                          alt={relatedPost?.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-bold text-sm text-night group-hover:text-azure transition-colors line-clamp-2 mb-1">
                        {relatedPost?.title}
                      </h4>
                      <span className="text-xs text-night/40">{relatedPost?.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Related Posts */}
      <section className="lg:hidden py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-display font-bold text-night mb-8">More Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost?.id}
                to={`/blog/${relatedPost?.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="aspect-video">
                  <img
                    src={relatedPost?.image}
                    alt={relatedPost?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-night mb-2">{relatedPost?.title}</h4>
                  <p className="text-sm text-night/60 line-clamp-2">{relatedPost?.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;