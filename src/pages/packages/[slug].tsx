import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Clock,
  MapPin,
  Star,
  Check,
  X,
  Phone,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Home,
  ChevronDown,
  Info
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { packages, Package } from '../../data/packages';
import { filterExistingImages, getHeroImages } from '../../lib/imageLoader';

const PackageDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentPackage, setCurrentPackage] = useState<Package | null>(null);

  // Booking configurator states
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDays, setSelectedDays] = useState(6);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [packageImages, setPackageImages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'hotels' | 'policies'>('overview');

  // Load package data
  useEffect(() => {
    const foundPackage = packages.find(pkg => pkg.slug === slug);
    if (foundPackage) {
      setCurrentPackage(foundPackage);
      const durationDays = parseInt(foundPackage.duration.split(' ')[0]);
      setSelectedDays(durationDays || 6);
    }
    setIsLoading(false);
  }, [slug]);

  // Calculate total price
  useEffect(() => {
    if (!currentPackage) return;

    let basePrice = currentPackage.price;
    const pricingOption = currentPackage.pricingOptions?.find(option => option.days === selectedDays);
    if (pricingOption) {
      basePrice = pricingOption.pricePerPerson;
    }

    let total = basePrice * numberOfPeople;

    selectedSupplements.forEach(supplementName => {
      const supplement = currentPackage.supplements?.find(s => s.name === supplementName);
      if (supplement) {
        total += supplement.price;
      }
    });

    // Activities Logic
    if (selectedActivities.includes('Scuba Diving')) {
      total += 5000 * numberOfPeople;
    }
    if (selectedActivities.includes('Candle Light Dinner')) {
      total += 7000;
    }
    if (selectedActivities.includes('Flower Bed Decoration')) {
      total += 3000;
    }

    setTotalPrice(total);
  }, [currentPackage, selectedDays, numberOfPeople, selectedSupplements, selectedActivities]);

  // Auto-rotate images
  useEffect(() => {
    if (!currentPackage || packageImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === packageImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPackage, packageImages.length]);

  // Load dynamic images
  useEffect(() => {
    const loadPackageImages = async () => {
      if (!currentPackage || !slug) return;

      const heroImages = getHeroImages(slug);
      const existingImages = await filterExistingImages(heroImages);

      if (existingImages.length === 0) {
        const fallbackImages = [
          currentPackage.image,
          ...currentPackage.highlights.map(h => h.image),
          ...(currentPackage.hotels?.map(h => h.image) || [])
        ].filter((img, index, arr) => arr.indexOf(img) === index);
        setPackageImages(fallbackImages);
      } else {
        setPackageImages(existingImages);
      }
    };

    loadPackageImages();
  }, [currentPackage, slug]);

  const handleBooking = () => {
    const bookingDetails = {
      packageName: currentPackage?.title,
      days: selectedDays,
      people: numberOfPeople,
      totalPrice,
      supplements: selectedSupplements,
      selectedActivities
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    navigate('/enquiry');
  };

  const handleEnquiry = () => {
    const enquiryDetails = {
      packageName: currentPackage?.title,
      days: selectedDays,
      people: numberOfPeople,
      totalPrice,
      supplements: selectedSupplements,
      selectedActivities,
      type: 'enquiry'
    };
    localStorage.setItem('enquiryDetails', JSON.stringify(enquiryDetails));
    navigate('/enquiry');
  };

  const openImageModal = (images: string[], startIndex: number = 0) => {
    setModalImages(images);
    setModalImageIndex(startIndex);
    setShowImageModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setModalImages([]);
    setModalImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!currentPackage) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
        <button
          onClick={() => navigate('/packages')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Packages
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SEO
        title={`${currentPackage.title} | Luxury Andaman Escapes`}
        description={currentPackage.description}
        image={currentPackage.image}
      />
      <Header />

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={packageImages[currentImageIndex] || currentPackage.image}
              alt={currentPackage.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">Premium Collection</span>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight drop-shadow-lg">
              {currentPackage.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-5 h-5" />
                {currentPackage.duration}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Users className="w-5 h-5" />
                Max {currentPackage.groupSize} Guests
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <MapPin className="w-5 h-5" />
                Andaman Islands
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-sm p-1.5 flex overflow-x-auto no-scrollbar sticky top-24 z-40 border border-gray-100">
              {['overview', 'itinerary', 'hotels', 'policies'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'overview' | 'itinerary' | 'hotels' | 'policies')}
                  className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Overview Section */}
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display border-b pb-4">Experience the Extraordinary</h2>
                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                          {currentPackage.longDescription}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentPackage.highlights.map((highlight, idx) => (
                          <div 
                            key={idx} 
                            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer"
                            onClick={() => openImageModal([highlight.image])}
                          >
                            <img
                              src={highlight.image}
                              alt={highlight.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                              <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                              <p className="text-white/80 text-sm line-clamp-2">{highlight.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Inclusions & Exclusions */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-green-50/30 rounded-2xl p-8 border border-green-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 shadow-sm">
                            <Check className="w-5 h-5 text-green-600" />
                          </div>
                          What's Included
                        </h3>
                        <ul className="space-y-4">
                          {currentPackage.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 group">
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                                <Check className="w-3 h-3 text-green-600" />
                              </div>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50/30 rounded-2xl p-8 border border-red-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 shadow-sm">
                            <X className="w-5 h-5 text-red-600" />
                          </div>
                          What's Excluded
                        </h3>
                        <ul className="space-y-4">
                          {currentPackage.excludes.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 group">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-red-200 transition-colors">
                                <X className="w-3 h-3 text-red-600" />
                              </div>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </motion.div>
                )}

                {activeTab === 'itinerary' && (
                  <motion.div
                    key="itinerary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
                      <div className="flex items-center justify-between border-b pb-4">
                        <h2 className="text-3xl font-bold text-gray-900 font-display">Your Journey</h2>
                        <button
                          onClick={() => {
                            const details = document.querySelectorAll('details');
                            const allOpen = Array.from(details).every(d => d.open);
                            details.forEach(d => d.open = !allOpen);
                          }}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                        >
                          Toggle All
                        </button>
                      </div>

                      <div className="relative border-l-2 border-blue-100 ml-4 space-y-8 pb-4">
                        {currentPackage.itinerary.map((day, idx) => (
                          <div key={idx} className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow-sm" />

                            <details className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md open:bg-white open:shadow-lg open:ring-1 open:ring-blue-100">
                              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <div>
                                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1 block">Day {idx + 1}</span>
                                  <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 text-blue-600">
                                  <ChevronDown className="w-5 h-5" />
                                </div>
                              </summary>

                              <div className="px-6 pb-6 pt-0 border-t border-gray-100 mt-2">
                                <p className="text-gray-600 leading-relaxed mb-6 mt-4">{day.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                                      <Check className="w-4 h-4 text-blue-600 mr-2" />
                                      Activities
                                    </h4>
                                    <ul className="space-y-2">
                                      {day.activities.map((activity, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start">
                                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                                          {activity}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="space-y-4">
                                    {day.hotel && (
                                      <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-100">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                          <Home className="w-4 h-4 text-amber-600 mr-2" />
                                          Accommodation
                                        </h4>
                                        <p className="text-sm text-gray-800 font-medium">{day.hotel.name}</p>
                                        <p className="text-xs text-gray-500">{day.hotel.location}</p>
                                      </div>
                                    )}
                                    {day.meals && (
                                      <div className="bg-green-50/50 rounded-xl p-5 border border-green-100">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                          <Info className="w-4 h-4 text-green-600 mr-2" />
                                          Meals Included
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                          {day.meals.map((meal, i) => (
                                            <span key={i} className="text-xs font-medium bg-white px-2 py-1 rounded border border-green-100 text-green-700 shadow-sm">
                                              {meal}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </details>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.div>
                )}

                {activeTab === 'hotels' && (
                  <motion.div
                    key="hotels"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 font-display mb-6">Featured Hotels</h2>
                    {currentPackage.hotels && currentPackage.hotels.length > 0 ? (
                      currentPackage.hotels.map((hotel, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-64 md:h-auto relative">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                              {hotel.starCategory || hotel.rating} Star
                            </div>
                          </div>
                          <div className="p-6 md:w-2/3 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                              <p className="text-gray-500 text-sm mb-4 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" /> {hotel.location}
                              </p>
                              <p className="text-gray-600 mb-4 line-clamp-3">{hotel.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {hotel.amenities.slice(0, 5).map((amenity, i) => (
                                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <Home className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Hotel options will be customized based on your preferences.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'policies' && (
                  <motion.div
                    key="policies"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">Cancellation Policy</h2>
                      <ul className="space-y-4">
                        {currentPackage.cancellationPolicy?.map((policy, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                            <span className="leading-relaxed">{policy}</span>
                          </li>
                        )) || (
                          <li className="text-gray-500 italic">Standard cancellation policies apply. Please contact us for details.</li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">Terms & Conditions</h2>
                      <ul className="space-y-4">
                        {currentPackage.terms?.map((term, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                            <span className="leading-relaxed">{term}</span>
                          </li>
                        )) || (
                          <li className="text-gray-500 italic">Standard terms apply.</li>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Sidebar Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-sm text-gray-300 mb-1 font-medium">Starting from</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight">₹{totalPrice.toLocaleString()}</span>
                      <span className="text-sm text-gray-400">/ total</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Duration */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Duration</label>
                    <div className="relative">
                      <select
                        value={selectedDays}
                        onChange={(e) => setSelectedDays(parseInt(e.target.value))}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium transition-shadow"
                      >
                        {[...new Set([...(currentPackage.pricingOptions?.map(o => o.days) || []), 6, 7, 8])]
                          .sort((a, b) => a - b)
                          .map(days => (
                            <option key={days} value={days}>{days} Days / {days - 1} Nights</option>
                          ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Travelers</label>
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1.5">
                      <button
                        onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                        className="p-2.5 hover:bg-white rounded-lg transition-all text-gray-500 hover:text-blue-600 hover:shadow-sm"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="flex-1 text-center font-bold text-gray-900">{numberOfPeople} Guests</div>
                      <button
                        onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                        className="p-2.5 hover:bg-white rounded-lg transition-all text-gray-500 hover:text-blue-600 hover:shadow-sm"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Add-on Activities */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Enhance Your Trip</label>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            checked={selectedActivities.includes('Scuba Diving')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedActivities([...selectedActivities, 'Scuba Diving']);
                              } else {
                                setSelectedActivities(selectedActivities.filter(a => a !== 'Scuba Diving'));
                              }
                            }}
                            className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="font-medium text-gray-900">Scuba Diving</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">₹5,000<span className="text-gray-400 font-normal text-xs">/person</span></span>
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            checked={selectedActivities.includes('Candle Light Dinner')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedActivities([...selectedActivities, 'Candle Light Dinner']);
                              } else {
                                setSelectedActivities(selectedActivities.filter(a => a !== 'Candle Light Dinner'));
                              }
                            }}
                            className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="font-medium text-gray-900">Candle Light Dinner</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">₹7,000</span>
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            checked={selectedActivities.includes('Flower Bed Decoration')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedActivities([...selectedActivities, 'Flower Bed Decoration']);
                              } else {
                                setSelectedActivities(selectedActivities.filter(a => a !== 'Flower Bed Decoration'));
                              }
                            }}
                            className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="font-medium text-gray-900">Flower Bed Decoration</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">₹3,000</span>
                      </label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 space-y-3">
                    <button
                      onClick={handleBooking}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={handleEnquiry}
                      className="w-full bg-white text-blue-600 border-2 border-blue-100 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors hover:border-blue-200"
                    >
                      Send Enquiry
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                      <Shield className="w-3.5 h-3.5 text-green-500" />
                      Secure Booking
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                      <Heart className="w-3.5 h-3.5 text-red-500" />
                      Best Price Guarantee
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  Need Help Planning?
                </h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Our travel experts are here to help you customize your perfect trip.</p>
                <a href="tel:+916297576826" className="flex items-center text-blue-700 font-bold hover:underline bg-white px-4 py-3 rounded-xl border border-blue-100 shadow-sm justify-center transition-transform active:scale-95">
                  +91 6297576826
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-6xl aspect-video" onClick={e => e.stopPropagation()}>
              <img
                src={modalImages[modalImageIndex]}
                alt="Gallery View"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />

              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1)); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1)); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Thumbnails */}
              {modalImages.length > 1 && (
                <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-2">
                  {modalImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setModalImageIndex(idx); }}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        modalImageIndex === idx ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PackageDetailPage;