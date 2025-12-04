import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, Calendar, Activity, Clock, Ticket, Camera, Star,
  Info, AlertTriangle, CheckCircle, DollarSign, Navigation, FileText,
  Car, Plane, Sun, Cloud,
  ThermometerSun, Waves, Wind, Heart,
  Award, ChevronRight, Share2, ArrowRight
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollProgress from '../../components/ScrollProgress';
import ImageGallery from '../../components/ImageGallery';
import TableOfContents from '../../components/TableOfContents';
import type { Destination } from '../../data/destinations';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import {
  generateDestinationStructuredData,
  generateDestinationMetaTags,
  generateDestinationFAQs,
  generateFAQSchema
} from '../../lib/structuredData';
import destinationImages from '../../data/destinationImages.json';

interface DestinationDetailProps {
  destination: Destination;
}

const DestinationDetailEnhanced: React.FC<DestinationDetailProps> = ({ destination }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const metaTags = generateDestinationMetaTags(destination);
  const structuredData = generateDestinationStructuredData(destination);
  const faqs = generateDestinationFAQs(destination);
  const faqSchema = generateFAQSchema(faqs);

  // Merge gallery images from static data and folder structure
  const folderImages = (destinationImages as Record<string, string[]>)[destination.slug] || [];

  // Image Priority Logic
  // 1. Hero Image (Banner): Check for 'hero_card' -> 'hero' -> First available image


  // Sort to prioritize hero_card if both exist (though find usually gets first match, let's be safe if we want strict priority)
  // Actually, let's refine the find to be specific.
  const specificHeroCard = folderImages.find(img => img.toLowerCase().includes('hero_card'));
  const specificHero = folderImages.find(img => img.toLowerCase().includes('hero') && !img.toLowerCase().includes('hero_card'));

  const heroImage = specificHeroCard || specificHero || folderImages[0] || destination.image || '/images/placeholder-hero.jpg';

  // Gallery Logic: Use ALL folder images.
  // If folder is empty, fallback to destination.gallery (which will be empty soon, but safe to keep for now)
  const galleryImages = folderImages.length > 0
    ? folderImages.map(url => ({ url, caption: destination.name }))
    : (destination.gallery || []).map(img => typeof img === 'string' ? { url: img, caption: destination.name } : img);

  // Create TOC items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'highlights', title: 'Key Highlights' },
    { id: 'activities', title: 'Things to Do' },
    { id: 'weather', title: 'Weather & Best Time' },
    { id: 'budget', title: 'Budget Planning' },
    { id: 'cuisine', title: 'Food & Shopping' },
    { id: 'tips', title: 'Travel Tips' },
    { id: 'faqs', title: 'FAQs' },
    { id: 'nearby', title: 'Nearby Attractions' },
  ];

  // Inject structured data
  useEffect(() => {
    // Add all structured data schemas
    const scriptElements: HTMLScriptElement[] = [];

    [...structuredData, faqSchema].forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup
    return () => {
      scriptElements.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [destination.slug]);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: destination.name, path: `/destinations/${destination.slug}` },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress color="#0EA5E9" height={3} />

      {/* Image Gallery Lightbox */}
      {isGalleryOpen && (
        <ImageGallery
          images={
            galleryImages.length > 0
              ? galleryImages.map(img => img.url)
              : [heroImage]
          }
          captions={
            galleryImages.length > 0
              ? galleryImages.map(img => img.caption)
              : [destination.name]
          }
          onClose={() => setIsGalleryOpen(false)}
          initialIndex={galleryStartIndex}
        />
      )}

      {/* Enhanced SEO with all meta tags */}
      <SEO
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        image={metaTags.ogImage}
        pathname={`/destinations/${destination.slug}`}
      />

      <Header />

      {/* Hero Section with Enhanced Visual */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
          <img
            src={heroImage}
            alt={`${destination.name} - ${destination.description}`}
            className="w-full h-full object-cover scale-110"
            loading="eager"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 shadow-lg">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-bold tracking-widest uppercase">{destination.region.toUpperCase()} ANDAMAN</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl font-display">
              {destination.name}
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light mb-10 drop-shadow-md">
              {destination.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/90 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium">Best: {destination.bestTimeToVisit.split(',')[0]}</span>
              </div>
              {destination.ticketInfo?.entryFee !== undefined && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                  <Ticket className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm font-medium">
                    {destination.ticketInfo.entryFee === 0 ? 'Free Entry' : `₹${destination.ticketInfo.entryFee} Entry`}
                  </span>
                </div>
              )}
              {destination.activities && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                  <Activity className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm font-medium">{destination.activities.length}+ Activities</span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    const details = {
                      packageName: destination.name,
                      days: undefined,
                      people: 2,
                      totalPrice: undefined,
                      selectedActivities: destination.activities || [],
                      supplements: [],
                      source: 'destination',
                      slug: destination.slug,
                    };
                    localStorage.setItem('enquiryDetails', JSON.stringify(details));
                  } catch (_) { /* no-op */ }
                }}
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => {
                  const shareData = {
                    title: destination.name,
                    text: destination.description,
                    url: window.location.href,
                  };
                  if (navigator.share) {
                    navigator.share(shareData);
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

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Quick Info Cards - Sticky on scroll */}
      {destination.quickInfo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 bg-white relative z-10"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mr-4">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">Essential Information</h2>
                  <p className="text-gray-500">Quick facts about {destination.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(destination.quickInfo).map(([key, value], index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">{key}</h3>
                    <p className="text-gray-600 leading-relaxed">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Universal Table of Contents - Floating Button on Left */}
      <TableOfContents items={tocItems} />

      {/* Main Overview Section */}
      <motion.section
        id="overview"
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 lg:py-24 relative bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                  <h2 className="text-4xl mb-8">
                    Discover {destination.name}
                  </h2>

                  <div className="text-gray-600 space-y-6 leading-relaxed text-lg">
                    {destination.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>

                  {/* Historical Information */}
                  {destination.historicalInfo && (
                    <div className="mt-10 bg-orange-50 border-l-4 border-orange-400 p-8 rounded-r-2xl">
                      <div className="flex items-center mb-4">
                        <FileText className="w-6 h-6 text-orange-500 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900 m-0">Historical Significance</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed m-0">{destination.historicalInfo}</p>
                    </div>
                  )}

                  {/* Best For Section */}
                  {destination.bestFor && destination.bestFor.length > 0 && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Heart className="w-6 h-6 text-pink-500 mr-3" />
                        Perfect For
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {destination.bestFor.map((item, index) => (
                          <span
                            key={index}
                            className="px-5 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-semibold capitalize border border-pink-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Travel Information Card */}
                {destination.travelInfo && (
                  <div id="travel-info" className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center font-display">
                      <Navigation className="w-7 h-7 text-blue-600 mr-3" />
                      How to Reach {destination.name}
                    </h3>

                    <div className="space-y-8">
                      <div className="flex items-start space-x-5">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Plane className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Getting There</h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">{destination.howToReach}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-xl">
                              <p className="text-sm text-gray-500 mb-1">Nearest Airport</p>
                              <p className="font-semibold text-gray-900">{destination.travelInfo.nearestAirport}</p>
                            </div>
                            {destination.travelInfo.distanceFromAirport && (
                              <div className="bg-gray-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-500 mb-1">Distance</p>
                                <p className="font-semibold text-gray-900">{destination.travelInfo.distanceFromAirport}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-8">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                          <Car className="w-5 h-5 text-blue-600 mr-3" />
                          Transport Options
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {destination.travelInfo.transportOptions.map((option, index) => (
                            <div key={index} className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              <span className="font-medium">{option}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {destination.practicalInfo?.permits && (
                        <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                            Permits & Requirements
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {destination.practicalInfo.permits}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 order-1 lg:order-2 space-y-8">
                {/* Gallery Widget */}
                {galleryImages.length > 0 && (
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <Camera className="w-5 h-5 text-blue-600 mr-2" />
                        Gallery
                      </h3>
                      <span className="text-sm text-gray-500 font-medium">{galleryImages.length} Photos</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {galleryImages.slice(0, 4).map((image, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setGalleryStartIndex(index);
                            setIsGalleryOpen(true);
                          }}
                          className="relative rounded-xl overflow-hidden group aspect-square cursor-pointer"
                        >
                          <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        setGalleryStartIndex(0);
                        setIsGalleryOpen(true);
                      }}
                      className="mt-4 w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-xl transition-colors text-sm font-bold flex items-center justify-center gap-2"
                    >
                      View All Photos
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Facilities Card */}
                {destination.facilities && destination.facilities.length > 0 && (
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Facilities</h3>
                    </div>
                    <div className="space-y-3">
                      {destination.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timing Card */}
                {destination.timings && (
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-100">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Operating Hours</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      {destination.timings.openTime && (
                        <div className="flex justify-between items-center bg-white/60 p-3 rounded-xl">
                          <span className="text-gray-600">Open</span>
                          <span className="font-bold text-gray-900">{destination.timings.openTime} - {destination.timings.closeTime}</span>
                        </div>
                      )}
                      {destination.timings.lunchBreak && (
                        <div className="flex justify-between items-center bg-white/60 p-3 rounded-xl">
                          <span className="text-gray-600">Lunch</span>
                          <span className="font-bold text-gray-900">{destination.timings.lunchBreak}</span>
                        </div>
                      )}
                      {destination.timings.closedDays && (
                        <div className="flex justify-between items-center bg-white/60 p-3 rounded-xl">
                          <span className="text-gray-600">Closed</span>
                          <span className="font-bold text-red-500">{destination.timings.closedDays}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Pricing Card */}
                {destination.ticketInfo && (
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                        <Ticket className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Entry Fees</h3>
                    </div>
                    <div className="space-y-4">
                      {destination.ticketInfo.entryFee !== undefined && (
                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                          <span className="text-gray-600">Entry Fee</span>
                          <span className="font-bold text-gray-900 text-lg">
                            {destination.ticketInfo.entryFee === 0 ? 'Free' : `₹${destination.ticketInfo.entryFee}`}
                          </span>
                        </div>
                      )}
                      {destination.ticketInfo.showTicket && (
                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                          <span className="text-gray-600">Show Ticket</span>
                          <span className="font-bold text-gray-900 text-lg">₹{destination.ticketInfo.showTicket}</span>
                        </div>
                      )}
                      {destination.ticketInfo.childrenFee !== undefined && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Children</span>
                          <span className="font-bold text-gray-900 text-lg">₹{destination.ticketInfo.childrenFee}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Highlights - Visual Cards */}
      <motion.section
        id="highlights"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Don't Miss Out</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                Key Highlights
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Discover the unique features that make {destination.name} unforgettable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destination.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px] bg-gray-200"
                >
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Activities & Experiences - Comprehensive */}
      {destination.detailedActivities && destination.detailedActivities.length > 0 && (
        <motion.section
          id="activities"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-16 lg:py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
                  <Activity className="w-4 h-4 mr-2" />
                  ADVENTURE AWAITS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                  Things to Do
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Experience the best activities and adventures at {destination.name}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {destination.detailedActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex items-start justify-between mb-6 gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {activity.name}
                        </h3>
                        {activity.price && (
                          <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">
                            <DollarSign className="w-4 h-4 mr-1" />
                            ₹{activity.price}
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                          <Activity className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {activity.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      {activity.duration && (
                        <div className="flex items-center text-gray-500 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                          <Clock className="w-4 h-4 mr-2 text-blue-600" />
                          <span>{activity.duration}</span>
                        </div>
                      )}

                      {activity.timings && (
                        <div className="flex items-center text-gray-500 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                          <span>{activity.timings}</span>
                        </div>
                      )}
                    </div>

                    {activity.highlights && activity.highlights.length > 0 && (
                      <div className="border-t border-gray-100 pt-6">
                        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                          Highlights
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {activity.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start text-gray-600">
                              <Star className="w-4 h-4 mr-3 text-yellow-400 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Weather Information */}
      {destination.weatherInfo && destination.weatherInfo.length > 0 && (
        <motion.section
          id="weather"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-16 lg:py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Sun className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                  Weather & Best Time
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Plan your trip with detailed seasonal information
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destination.weatherInfo.map((weather, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      {index === 0 && <ThermometerSun className="w-24 h-24 text-orange-500" />}
                      {index === 1 && <Sun className="w-24 h-24 text-blue-500" />}
                      {index === 2 && <Cloud className="w-24 h-24 text-gray-500" />}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{weather.season}</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                          <div className="flex items-center text-gray-600">
                            <ThermometerSun className="w-5 h-5 mr-3 text-orange-500" />
                            <span>Temperature</span>
                          </div>
                          <span className="font-bold text-gray-900">{weather.temperature}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                          <div className="flex items-center text-gray-600">
                            <Wind className="w-5 h-5 mr-3 text-blue-500" />
                            <span>Conditions</span>
                          </div>
                          <span className="font-medium text-gray-900 text-right">{weather.conditions}</span>
                        </div>

                        {weather.seaConditions && (
                          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                            <div className="flex items-center text-gray-600">
                              <Waves className="w-5 h-5 mr-3 text-cyan-500" />
                              <span>Sea State</span>
                            </div>
                            <span className="font-medium text-gray-900 text-right">{weather.seaConditions}</span>
                          </div>
                        )}

                        {weather.visibility && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-600">
                              <Camera className="w-5 h-5 mr-3 text-purple-500" />
                              <span>Visibility</span>
                            </div>
                            <span className="font-medium text-gray-900">{weather.visibility}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" />
                <div className="relative z-10 max-w-3xl mx-auto">
                  <Calendar className="w-12 h-12 mx-auto mb-6 text-blue-200" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Recommended Visit Time</h3>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    {destination.bestTimeToVisit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Budget & Costs */}
      {destination.budgetInfo && (
        <motion.section
          id="budget"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 lg:py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                  Budget Planner
                </h2>
                <p className="text-gray-500 text-lg">
                  Estimated costs to help you plan your trip
                </p>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-10 border-b border-gray-100">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Daily Budget Estimate
                    </h3>
                    <p className="text-gray-500">Per person per day (approximate)</p>
                  </div>
                  <div className="mt-6 md:mt-0 px-8 py-4 bg-green-50 rounded-2xl">
                    <p className="text-4xl font-bold text-green-600">
                      {destination.budgetInfo.budget}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {destination.budgetInfo.costs.map((cost, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-gray-600 font-medium">{cost.item}</span>
                      <span className="font-bold text-gray-900">{cost.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      <Footer />
    </div>
  );
};

export default DestinationDetailEnhanced;
