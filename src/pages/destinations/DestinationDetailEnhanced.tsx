import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Compass, Activity, Clock, Ticket, Camera, Star,
  ArrowLeft, Info, AlertTriangle, CheckCircle, DollarSign, Navigation,
  Phone, Shield, FileText, Users, Car, Plane, Sun, Cloud,
  ThermometerSun, Waves, Wind, Coffee, ShoppingBag, Heart,
  Award, ChevronRight, MessageCircle, Share2, ExternalLink
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

interface DestinationDetailProps {
  destination: Destination;
}

const DestinationDetailEnhanced: React.FC<DestinationDetailProps> = ({ destination }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  
  const metaTags = generateDestinationMetaTags(destination);
  const structuredData = generateDestinationStructuredData(destination);
  const faqs = generateDestinationFAQs(destination);
  const faqSchema = generateFAQSchema(faqs);

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
    <div className="min-h-screen bg-pearl">
      {/* Scroll Progress Indicator */}
      <ScrollProgress color="#0EA5E9" height={3} />
      
      {/* Image Gallery Lightbox */}
      {isGalleryOpen && (
        <ImageGallery
          images={
            destination.gallery
              ? destination.gallery.map((img) => (typeof img === 'string' ? img : img.url))
              : [destination.image]
          }
          captions={
            destination.gallery
              ? destination.gallery.map((img) => (typeof img === 'string' ? destination.name : img.caption))
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
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      
      {/* Hero Section with Enhanced Visual */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img 
          src={destination.image}
          alt={`${destination.name} - ${destination.description}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/40 to-night/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Link 
                  to="/destinations"
                  className="inline-flex items-center text-pearl/80 hover:text-pearl transition-colors text-sm sm:text-base mr-4"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Back
                </Link>
                <span className="glass-sunset-badge px-3 py-1.5 text-sm">
                  {destination.category.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pearl mb-4 sm:mb-6 leading-tight">
                {destination.name}
              </h1>
              
              <p className="text-xl sm:text-2xl text-pearl/95 mb-6 sm:mb-8 leading-relaxed font-light">
                {destination.description}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-pearl/90 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{destination.region.toUpperCase()} Andaman</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Best: {destination.bestTimeToVisit.split(',')[0]}</span>
                </div>
                {destination.ticketInfo?.entryFee !== undefined && (
                  <div className="flex items-center">
                    <Ticket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      {destination.ticketInfo.entryFee === 0 ? 'Free Entry' : `₹${destination.ticketInfo.entryFee}`}
                    </span>
                  </div>
                )}
                {destination.activities && (
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{destination.activities.length}+ Activities</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-base sm:text-lg font-semibold shadow-lg"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Book Your Visit
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
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all text-base sm:text-lg font-semibold"
                >
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards - Sticky on scroll */}
      {destination.quickInfo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 sm:py-12 bg-white shadow-md relative z-10"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-6 sm:mb-8">
                <Info className="w-7 h-7 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold text-night">Essential Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(destination.quickInfo).map(([key, value], index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-pearl p-5 sm:p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <h3 className="font-semibold text-night mb-2 text-base sm:text-lg">{key}</h3>
                    <p className="text-night/70 text-sm sm:text-base leading-relaxed">{value}</p>
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
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 sm:py-16 lg:py-20 relative"
      >
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl sm:text-4xl font-bold text-night mb-6">
                    Discover {destination.name}
                  </h2>
                  
                  <div className="text-night/70 space-y-4 leading-relaxed">
                    {destination.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-base sm:text-lg">{paragraph.trim()}</p>
                    ))}
                  </div>

                  {/* Historical Information */}
                  {destination.historicalInfo && (
                    <div className="mt-8 bg-sunset/5 border-l-4 border-sunset p-6 rounded-r-xl">
                      <div className="flex items-center mb-3">
                        <FileText className="w-6 h-6 text-sunset mr-2" />
                        <h3 className="text-xl font-bold text-night">Historical Significance</h3>
                      </div>
                      <p className="text-night/70 leading-relaxed">{destination.historicalInfo}</p>
                    </div>
                  )}

                  {/* Best For Section */}
                  {destination.bestFor && destination.bestFor.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-night mb-4 flex items-center">
                        <Heart className="w-6 h-6 text-azure mr-2" />
                        Perfect For
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {destination.bestFor.map((item, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-azure/10 text-azure rounded-full text-sm font-medium capitalize"
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
                  <div id="travel-info" className="mt-10 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-night mb-6 flex items-center">
                      <Navigation className="w-6 h-6 text-azure mr-3" />
                      How to Reach {destination.name}
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Plane className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-night mb-2">Getting There</h4>
                          <p className="text-night/70 mb-3 leading-relaxed">{destination.howToReach}</p>
                          <div className="space-y-2">
                            <p className="text-sm text-night/60">
                              <strong>Nearest Airport:</strong> {destination.travelInfo.nearestAirport}
                            </p>
                            {destination.travelInfo.distanceFromAirport && (
                              <p className="text-sm text-night/60">
                                <strong>Distance:</strong> {destination.travelInfo.distanceFromAirport}
                              </p>
                            )}
                            {destination.travelInfo.distanceFromJetty && (
                              <p className="text-sm text-night/60">
                                <strong>From Jetty:</strong> {destination.travelInfo.distanceFromJetty}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-night mb-3 flex items-center">
                          <Car className="w-5 h-5 text-azure mr-2" />
                          Transport Options
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {destination.travelInfo.transportOptions.map((option, index) => (
                            <div key={index} className="flex items-center text-night/70 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {option}
                            </div>
                          ))}
                        </div>
                      </div>

                      {destination.practicalInfo?.permits && (
                        <div className="bg-sunset/5 border-l-4 border-sunset p-4 rounded-r-lg">
                          <h4 className="font-semibold text-night mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 text-sunset mr-2" />
                            Permits & Requirements
                          </h4>
                          <p className="text-night/70 text-sm leading-relaxed">
                            {destination.practicalInfo.permits}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 order-1 lg:order-2">
                {/* Gallery */}
                {destination.gallery && destination.gallery.length > 0 && (
                  <div className="mb-8 sticky top-4">
                    <h3 className="text-xl font-bold text-night mb-4 flex items-center">
                      <Camera className="w-5 h-5 text-azure mr-2" />
                      Photo Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {destination.gallery.slice(0, 6).map((image, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setGalleryStartIndex(index);
                            setIsGalleryOpen(true);
                          }}
                          className="relative rounded-lg overflow-hidden group aspect-square cursor-pointer"
                        >
                          <img 
                            src={image.url} 
                            alt={image.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white mb-8" />
                            <div className="absolute bottom-2 left-2 right-2 text-pearl text-xs leading-tight">
                              {image.caption}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {destination.gallery.length > 6 && (
                      <button
                        onClick={() => {
                          setGalleryStartIndex(0);
                          setIsGalleryOpen(true);
                        }}
                        className="mt-4 w-full py-2 text-azure hover:text-sunset transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        View all {destination.gallery.length} photos
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {/* Facilities Card */}
                {destination.facilities && destination.facilities.length > 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-azure mr-2" />
                      <h3 className="text-lg font-bold text-night">Facilities</h3>
                    </div>
                    <div className="space-y-2">
                      {destination.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-night/70 text-sm">
                          <span className="w-2 h-2 glass-sunset-dot mr-3 flex-shrink-0" />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timing Card */}
                {destination.timings && (
                  <div className="bg-azure/5 border border-azure/20 p-6 rounded-xl mb-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-azure mr-2" />
                      <h3 className="text-lg font-bold text-night">Operating Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      {destination.timings.openTime && (
                        <p className="text-night/70">
                          <strong>Open:</strong> {destination.timings.openTime} - {destination.timings.closeTime}
                        </p>
                      )}
                      {destination.timings.lunchBreak && (
                        <p className="text-night/70">
                          <strong>Lunch Break:</strong> {destination.timings.lunchBreak}
                        </p>
                      )}
                      {destination.timings.closedDays && (
                        <p className="text-night/70">
                          <strong>Closed:</strong> {destination.timings.closedDays}
                        </p>
                      )}
                      {destination.timings.specialTimings && (
                        <p className="text-night/70">
                          <strong>Special:</strong> {destination.timings.specialTimings}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Pricing Card */}
                {destination.ticketInfo && (
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <Ticket className="w-6 h-6 text-azure mr-2" />
                      <h3 className="text-lg font-bold text-night">Entry Fees</h3>
                    </div>
                    <div className="space-y-3">
                      {destination.ticketInfo.entryFee !== undefined && (
                        <div className="flex justify-between items-center">
                          <span className="text-night/70 text-sm">Entry Fee:</span>
                          <span className="font-semibold text-night">
                            {destination.ticketInfo.entryFee === 0 ? 'Free' : `₹${destination.ticketInfo.entryFee}`}
                          </span>
                        </div>
                      )}
                      {destination.ticketInfo.showTicket && (
                        <div className="flex justify-between items-center">
                          <span className="text-night/70 text-sm">Show Ticket:</span>
                          <span className="font-semibold text-night">₹{destination.ticketInfo.showTicket}</span>
                        </div>
                      )}
                      {destination.ticketInfo.childrenFee !== undefined && (
                        <div className="flex justify-between items-center">
                          <span className="text-night/70 text-sm">Children:</span>
                          <span className="font-semibold text-night">₹{destination.ticketInfo.childrenFee}</span>
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
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-4">
                What Makes {destination.name} Special
              </h2>
              <p className="text-night/70 text-lg max-w-2xl mx-auto">
                Discover the unique features that make this destination unforgettable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {destination.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center mb-3">
                      <Award className="w-6 h-6 text-sunset mr-2" />
                      <h3 className="text-2xl font-bold text-pearl">{highlight.title}</h3>
                    </div>
                    <p className="text-pearl/90 leading-relaxed text-base">
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
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-pearl"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-14">
                <div className="flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-azure mr-3" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-night">
                    Things to Do
                  </h2>
                </div>
                <p className="text-night/70 text-lg max-w-2xl mx-auto">
                  Experience the best activities and adventures at {destination.name}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {destination.detailedActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-night mb-2">
                          {activity.name}
                        </h3>
                        {activity.price && (
                          <div className="inline-flex items-center bg-azure/10 text-azure px-3 py-1 rounded-full text-sm font-semibold">
                            <DollarSign className="w-4 h-4 mr-1" />
                            ₹{activity.price}
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center">
                          <Activity className="w-6 h-6 text-azure" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-night/70 mb-5 leading-relaxed text-base">
                      {activity.description}
                    </p>
                    
                    <div className="space-y-3 mb-5">
                      {activity.duration && (
                        <div className="flex items-center text-night/60 text-sm">
                          <Clock className="w-4 h-4 mr-3 text-azure flex-shrink-0" />
                          <span><strong>Duration:</strong> {activity.duration}</span>
                        </div>
                      )}
                      
                      {activity.timings && (
                        <div className="flex items-center text-night/60 text-sm">
                          <Calendar className="w-4 h-4 mr-3 text-azure flex-shrink-0" />
                          <span><strong>Timings:</strong> {activity.timings}</span>
                        </div>
                      )}
                    </div>

                    {activity.highlights && activity.highlights.length > 0 && (
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-semibold text-night mb-3 text-sm uppercase tracking-wide">
                          Highlights
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {activity.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start text-night/70 text-sm">
                              <Star className="w-4 h-4 mr-2 text-sunset flex-shrink-0 mt-0.5" />
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
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-14">
                <div className="flex items-center justify-center mb-4">
                  <Sun className="w-8 h-8 text-azure mr-3" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-night">
                    Weather & Best Time to Visit
                  </h2>
                </div>
                <p className="text-night/70 text-lg max-w-2xl mx-auto">
                  Plan your trip with detailed seasonal information
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destination.weatherInfo.map((weather, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-gradient-to-br from-azure/5 to-sunset/5 p-6 rounded-2xl border border-azure/10"
                  >
                    <div className="flex items-center mb-4">
                      {index === 0 && <ThermometerSun className="w-8 h-8 text-sunset mr-3" />}
                      {index === 1 && <Sun className="w-8 h-8 text-azure mr-3" />}
                      {index === 2 && <Cloud className="w-8 h-8 text-gray-500 mr-3" />}
                      <h3 className="text-xl font-bold text-night">{weather.season}</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-night/70">
                        <ThermometerSun className="w-4 h-4 mr-2 text-azure" />
                        <span><strong>Temp:</strong> {weather.temperature}</span>
                      </div>
                      <div className="flex items-start text-night/70">
                        <Wind className="w-4 h-4 mr-2 text-azure flex-shrink-0 mt-0.5" />
                        <span><strong>Conditions:</strong> {weather.conditions}</span>
                      </div>
                      {weather.seaConditions && (
                        <div className="flex items-start text-night/70">
                          <Waves className="w-4 h-4 mr-2 text-azure flex-shrink-0 mt-0.5" />
                          <span><strong>Sea:</strong> {weather.seaConditions}</span>
                        </div>
                      )}
                      {weather.visibility && (
                        <div className="flex items-center text-night/70">
                          <Camera className="w-4 h-4 mr-2 text-azure" />
                          <span><strong>Visibility:</strong> {weather.visibility}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-azure/5 border-l-4 border-azure p-6 rounded-r-xl">
                <h4 className="font-bold text-night mb-2 flex items-center">
                  <Calendar className="w-5 h-5 text-azure mr-2" />
                  Recommended Visit Time
                </h4>
                <p className="text-night/70 leading-relaxed">
                  {destination.bestTimeToVisit}
                </p>
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
          className="py-12 sm:py-16 lg:py-20 bg-pearl"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-azure mr-3" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-night">
                    Budget & Costs
                  </h2>
                </div>
                <p className="text-night/70 text-lg">
                  Plan your expenses with our detailed cost breakdown
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-night mb-2">
                    Estimated Budget
                  </h3>
                  <p className="text-3xl font-bold text-azure">
                    {destination.budgetInfo.budget}
                  </p>
                </div>

                <div className="space-y-4">
                  {destination.budgetInfo.costs.map((cost, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-night/70">{cost.item}</span>
                      <span className="font-semibold text-night">{cost.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Local Cuisine & Shopping */}
      {(destination.localCuisine || destination.shopping) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Local Cuisine */}
                {destination.localCuisine && destination.localCuisine.length > 0 && (
                  <div>
                    <div className="flex items-center mb-6">
                      <Coffee className="w-7 h-7 text-azure mr-3" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-night">
                        Local Cuisine
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {destination.localCuisine.map((cuisine, index) => (
                        <div key={index} className="bg-pearl p-6 rounded-xl">
                          <h4 className="text-lg font-bold text-night mb-2">
                            {cuisine.specialty}
                          </h4>
                          <p className="text-night/70 text-sm mb-3 leading-relaxed">
                            {cuisine.description}
                          </p>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-night/60">
                              <strong>Where:</strong> {cuisine.whereToTry}
                            </span>
                            {cuisine.price && (
                              <span className="font-semibold text-azure">
                                {cuisine.price}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Shopping */}
                {destination.shopping && (
                  <div>
                    <div className="flex items-center mb-6">
                      <ShoppingBag className="w-7 h-7 text-azure mr-3" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-night">
                        Shopping
                      </h3>
                    </div>
                    <div className="bg-pearl p-6 rounded-xl">
                      <h4 className="font-bold text-night mb-3">What to Buy</h4>
                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {destination.shopping.items.map((item, index) => (
                          <div key={index} className="flex items-center text-night/70 text-sm">
                            <CheckCircle className="w-4 h-4 text-azure mr-2 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>

                      {destination.shopping.markets && (
                        <div className="mb-6">
                          <h4 className="font-bold text-night mb-3">Where to Shop</h4>
                          <div className="space-y-2">
                            {destination.shopping.markets.map((market, index) => (
                              <div key={index} className="flex items-center text-night/70 text-sm">
                                <MapPin className="w-4 h-4 text-azure mr-2 flex-shrink-0" />
                                {market}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {destination.shopping.tips && destination.shopping.tips.length > 0 && (
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="font-bold text-night mb-2 text-sm">Shopping Tips</h4>
                          <ul className="space-y-1">
                            {destination.shopping.tips.map((tip, index) => (
                              <li key={index} className="text-night/60 text-xs leading-relaxed">
                                • {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Tips & Safety - Enhanced */}
      <motion.section
        id="tips"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-pearl"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-night mb-4">
                Essential Tips & Guidelines
              </h2>
              <p className="text-night/70 text-lg">
                Make the most of your visit with these expert recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Travel Tips */}
              {destination.tips && destination.tips.length > 0 && (
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <div className="flex items-center mb-6">
                    <Users className="w-7 h-7 text-azure mr-3" />
                    <h3 className="text-2xl font-bold text-night">Travel Tips</h3>
                  </div>
                  <div className="space-y-4">
                    {destination.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-night/70 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Safety Guidelines */}
              {destination.safetyTips && destination.safetyTips.length > 0 && (
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <div className="flex items-center mb-6">
                    <Shield className="w-7 h-7 text-azure mr-3" />
                    <h3 className="text-2xl font-bold text-night">Safety Guidelines</h3>
                  </div>
                  <div className="space-y-4">
                    {destination.safetyTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <p className="text-night/70 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Things to Know */}
              {destination.thingsToKnow && destination.thingsToKnow.length > 0 && (
                <div className="bg-azure/5 border border-azure/20 p-8 rounded-2xl lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <Info className="w-7 h-7 text-azure mr-3" />
                    <h3 className="text-2xl font-bold text-night">Important Things to Know</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.thingsToKnow.map((thing, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="w-6 h-6 bg-azure text-pearl rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-night/70 leading-relaxed text-sm">{thing}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section with Schema */}
      <motion.section
        id="faqs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-azure mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-night">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-night/70 text-lg">
                Everything you need to know about visiting {destination.name}
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-pearl p-6 rounded-xl border border-gray-100 hover:border-azure/30 transition-colors"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-night pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-azure transform group-open:rotate-180 transition-transform">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="mt-4 text-night/70 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 bg-azure/5 border-l-4 border-azure p-6 rounded-r-xl">
              <p className="text-night/70 leading-relaxed">
                <strong>Have more questions?</strong> Contact our travel experts at{' '}
                <a href="tel:+91 6297576826" className="text-azure hover:underline">
                  +91 6297576826
                </a>{' '}
                or{' '}
                <a href="mailto:info@luxuryandamans.com" className="text-azure hover:underline">
                  info@luxuryandamans.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nearby Attractions */}
      {destination.nearbyAttractions && destination.nearbyAttractions.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-pearl"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-4">
                  <Compass className="w-8 h-8 text-azure mr-3" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-night">
                    Nearby Attractions
                  </h2>
                </div>
                <p className="text-night/70 text-lg">
                  Explore more amazing places near {destination.name}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destination.nearbyAttractions.map((attraction, index) => (
                  <Link
                    key={index}
                    to={attraction.slug ? `/destinations/${attraction.slug}` : '#'}
                    className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100"
                  >
                    <div className="flex items-start mb-4">
                      <MapPin className="w-6 h-6 text-azure mr-3 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-night group-hover:text-azure transition-colors mb-2">
                          {attraction.name}
                        </h3>
                        <p className="text-sm text-night/60 mb-2">
                          Distance: {attraction.distance}
                        </p>
                        {attraction.description && (
                          <p className="text-sm text-night/70 leading-relaxed">
                            {attraction.description}
                          </p>
                        )}
                      </div>
                      {attraction.slug && (
                        <ExternalLink className="w-5 h-5 text-azure opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-night via-night/95 to-azure/20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pearl mb-6 leading-tight">
              Ready to Experience {destination.name}?
            </h2>
            <p className="text-pearl/90 mb-8 sm:mb-10 text-lg sm:text-xl leading-relaxed">
              Let our expert team help you create unforgettable memories at this stunning destination
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg font-semibold shadow-xl"
              >
                <Phone className="w-6 h-6 mr-2" />
                Plan Your Visit Now
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg font-semibold"
              >
                <Navigation className="w-6 h-6 mr-2" />
                View Tour Packages
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-pearl/70 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Expert Guides
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Best Prices Guaranteed
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Customizable Itineraries
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DestinationDetailEnhanced;
