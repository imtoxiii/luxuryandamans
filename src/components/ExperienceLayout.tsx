import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Share2, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import Breadcrumb from './Breadcrumb';


interface ExperienceLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stats?: {
    duration?: string;
    location?: string;
    price?: string;
  };
  children: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
  };
  slug: string;
  bookingData?: any;
  faqData?: { question: string; answer: string }[];
}

const ExperienceLayout: React.FC<ExperienceLayoutProps> = ({
  title,
  subtitle,
  description,
  image,
  stats,
  children,
  seo,
  slug,
  bookingData,
  faqData
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Experiences', path: '/experiences' },
    { name: title, path: `/experiences/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
      {seo && (
        <SEO
          title={seo.title}
          description={seo.description}
          keywords={seo.keywords}
          image={seo.image || image}
          pathname={`/experiences/${slug}`}
          faqData={faqData}
        />
      )}

      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover scale-110"
            loading="eager"
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {subtitle && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4 shadow-lg">
                <span className="text-sm font-bold tracking-widest uppercase">{subtitle}</span>
              </div>
            )}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight leading-tight drop-shadow-2xl font-display">
              {title}
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light mb-8 drop-shadow-md">
              {description}
            </p>

            {/* Quick Stats */}
            {stats && (
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/90 mb-8">
                {stats.duration && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                    <Clock className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm font-medium">{stats.duration}</span>
                  </div>
                )}
                {stats.location && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                    <MapPin className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm font-medium">{stats.location}</span>
                  </div>
                )}
                {stats.price && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                    <DollarSign className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm font-medium">{stats.price}</span>
                  </div>
                )}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/enquiry"
                onClick={() => {
                  if (bookingData) {
                    try {
                      localStorage.setItem('enquiryDetails', JSON.stringify(bookingData));
                    } catch (_) { /* no-op */ }
                  }
                }}
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: title,
                      text: description,
                      url: window.location.href,
                    });
                  }
                }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 min-w-[200px]"
              >
                <span>Share</span>
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
};

export default ExperienceLayout;
