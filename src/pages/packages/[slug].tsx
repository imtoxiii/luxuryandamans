import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { 
  // Calendar, 
  Users, 
  Clock, 
  MapPin, 
  Star, 
  Check, 
  X, 
  Camera, 
  // Plane,
  Phone,
  Mail,
  Shield,
  Award,
  Heart,
  ChevronLeft,
  ChevronRight,
  // Play,
  Plus,
  Minus,
  Home,
  ChevronRight as ChevronRightBreadcrumb
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { packages } from '../../data/packages';
import { Package } from '../../data/packages';
import { filterExistingImages, getHeroImages } from '../../lib/imageLoader';

const PackageDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPackage, setCurrentPackage] = useState<Package | null>(null);
  // Booking configurator states
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDays, setSelectedDays] = useState(6);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStarTier, setSelectedStarTier] = useState<3 | 4 | 5 | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>('');
  const [selectedHotelName, setSelectedHotelName] = useState<string>('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [packageImages, setPackageImages] = useState<string[]>([]);

  useEffect(() => {
    console.log('Package slug:', slug);
    console.log('Available packages:', packages.map(p => p.slug));
    const foundPackage = packages.find(pkg => pkg.slug === slug);
    console.log('Found package:', foundPackage);
    if (foundPackage) {
      setCurrentPackage(foundPackage);
      const durationDays = parseInt(foundPackage.duration.split(' ')[0]);
      console.log('Duration days:', durationDays);
      setSelectedDays(durationDays || 6); // fallback to 6 days if parsing fails
    }
    setIsLoading(false);
  }, [slug]);

  useEffect(() => {
    if (currentPackage) {
      calculateTotalPrice();
    }
  }, [currentPackage, selectedDays, numberOfPeople, selectedSupplements, selectedHotelName, selectedRoomType]);

  // Auto-rotate images
  useEffect(() => {
    if (!currentPackage) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === packageImages.length - 1 ? 0 : prev + 1));
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [currentPackage]);

  // Derive available filters

  const filteredHotels = currentPackage?.hotels
    ? currentPackage.hotels.filter(hotel => {
        const starOk = selectedStarTier ? (hotel.starCategory || hotel.rating) === selectedStarTier : true;
        const roomOk = selectedRoomType ? (hotel.roomTypes || []).some(rt => rt.name === selectedRoomType) : true;
        return starOk && roomOk;
      })
    : [];

  // Helper: placeholder hotel names for selected star tier (used when we don't have explicit hotels)
  const placeholderHotelOptions: string[] = selectedStarTier ? [
    `${selectedStarTier}-Star Palm Grove`,
    `${selectedStarTier}-Star Lagoon Retreat`,
    `${selectedStarTier}-Star Ocean View Resort`,
    `${selectedStarTier}-Star Coral Sands`
  ] : [];

  // Helper: get available room types for selected hotel or default Andaman room types
  const getAvailableRoomTypes = () => {
    if (selectedHotelName) {
      const hotel = currentPackage?.hotels?.find(h => h.name === selectedHotelName);
      if (hotel?.roomTypes && hotel.roomTypes.length > 0) {
        return hotel.roomTypes;
      }
    }
    
    // Default Andaman room types for placeholder hotels
    return [
      { name: "Standard", pricePerNight: 2500, description: "Comfortable AC room with basic amenities", maxOccupancy: 2 },
      { name: "Deluxe", pricePerNight: 4000, description: "Spacious room with sea/garden view", maxOccupancy: 3 },
      { name: "Super Deluxe", pricePerNight: 6000, description: "Premium room with ocean view and modern amenities", maxOccupancy: 3 },
      { name: "Suite", pricePerNight: 10000, description: "Luxury suite with separate living area", maxOccupancy: 4 },
      { name: "Villa", pricePerNight: 15000, description: "Private villa with exclusive amenities", maxOccupancy: 6 }
    ];
  };

  // Helper: get room type specific images
  const getRoomTypeImages = (roomTypeName: string): string[] => {
    const roomType = roomTypeName.toLowerCase();
    
    if (roomType.includes('villa')) {
      return [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1974&auto=format&fit=crop'
      ];
    } else if (roomType.includes('suite')) {
      return [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop'
      ];
    } else if (roomType.includes('super') || roomType.includes('deluxe')) {
      return [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop'
      ];
    } else {
      // Standard room
      return [
        'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1974&auto=format&fit=crop'
      ];
    }
  };

  // Modal handlers
  const openImageModal = (images: string[], startIndex: number = 0) => {
    setModalImages(images);
    setModalImageIndex(startIndex);
    setShowImageModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setModalImages([]);
    setModalImageIndex(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!showImageModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showImageModal, modalImages.length]);

  // Cleanup body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Load dynamic images from folder structure
  useEffect(() => {
    const loadPackageImages = async () => {
      if (!currentPackage || !slug) return;
      
      // Get hero images from the hero folder (1.jpg, 2.jpg, etc.)
      const heroImages = getHeroImages(slug);
      
      // Filter to only existing images
      const existingImages = await filterExistingImages(heroImages);
      
      // If no hero images found, fall back to package data images
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

  // Preload images to prevent flickering
  useEffect(() => {
    if (packageImages.length > 0) {
      packageImages.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }
  }, [packageImages.length]);

  // Auto-change images every 5 seconds
  useEffect(() => {
    if (packageImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % packageImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [packageImages.length]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateTotalPrice = () => {
    if (!currentPackage) return;

    let basePrice = currentPackage.price;
    
    // Find pricing for selected days
    const pricingOption = currentPackage.pricingOptions?.find(option => option.days === selectedDays);
    if (pricingOption) {
      basePrice = pricingOption.pricePerPerson;
    }

    // Calculate base total for number of people
    let total = basePrice * numberOfPeople;

    // Add supplements (flat per selection)
    selectedSupplements.forEach(supplementName => {
      const supplement = currentPackage.supplements?.find(s => s.name === supplementName);
      if (supplement) {
        total += supplement.price;
      }
    });

    // Room/Hotel upgrade pricing using actual room type pricing
    const selectedHotel = currentPackage.hotels?.find(h => h.name === selectedHotelName);
    let roomNightPrice = 0;
    
    if (selectedHotel && selectedRoomType) {
      const roomType = selectedHotel.roomTypes?.find(rt => rt.name === selectedRoomType);
      if (roomType?.pricePerNight) {
        roomNightPrice = roomType.pricePerNight;
      }
    } else if (selectedRoomType) {
      // Fallback pricing for placeholder hotels
      const roomTypeName = selectedRoomType.toLowerCase();
      if (roomTypeName.includes('villa')) roomNightPrice = 15000;
      else if (roomTypeName.includes('suite')) roomNightPrice = 10000;
      else if (roomTypeName.includes('super')) roomNightPrice = 6000;
      else if (roomTypeName.includes('deluxe')) roomNightPrice = 4000;
      else if (roomTypeName.includes('standard')) roomNightPrice = 2500;
    }

    if (roomNightPrice > 0 && selectedDays > 0) {
      total += roomNightPrice * selectedDays;
    }

    setTotalPrice(total);
  };

  const handleSupplementToggle = (supplementName: string) => {
    setSelectedSupplements(prev => 
      prev.includes(supplementName) 
        ? prev.filter(name => name !== supplementName)
        : [...prev, supplementName]
    );
  };

  const handleBooking = () => {
    const bookingDetails = {
      packageName: currentPackage?.title,
      days: selectedDays,
      people: numberOfPeople,
      totalPrice,
      supplements: selectedSupplements,
      starTier: selectedStarTier,
      roomType: selectedRoomType,
      hotelName: selectedHotelName
    };
    
    // Store booking details in localStorage
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    
    // Navigate to enquiry page
    navigate('/enquiry');
  };

  const handleEnquiry = () => {
    const enquiryDetails = {
      packageName: currentPackage?.title,
      days: selectedDays,
      people: numberOfPeople,
      totalPrice,
      supplements: selectedSupplements,
      starTier: selectedStarTier,
      roomType: selectedRoomType,
      hotelName: selectedHotelName,
      type: 'enquiry'
    };
    
    localStorage.setItem('enquiryDetails', JSON.stringify(enquiryDetails));
    navigate('/enquiry');
  };

  if (!currentPackage) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-blue-200 rounded w-32 mx-auto mb-2"></div>
            <div className="h-4 bg-blue-200 rounded w-24 mx-auto"></div>
          </div>
          {isLoading ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mt-6">Loading package...</h2>
              <p className="text-gray-600 mt-2">Please wait while we load your package details.</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mt-6">Package not found</h2>
              <p className="text-gray-600 mt-2">The package you're looking for doesn't exist or has been removed.</p>
              <button 
                onClick={() => navigate('/packages')}
                className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ← Back to Packages
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Structured Data for the package
  const packageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: currentPackage.title,
    description: currentPackage.description,
    image: currentPackage.image,
    sku: currentPackage.slug,
    offers: {
      '@type': 'Offer',
      price: currentPackage.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}${location.pathname}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9', // You can make this dynamic if you have ratings
      reviewCount: '284',
    },
  };

  const formatPrice = (price: number) => {
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  return (
    <>
      <SEO
        title={`${currentPackage.title} - Luxury Andaman Tours`}
        description={currentPackage.description}
        pathname={location.pathname}
        keywords={`andaman tour, ${currentPackage.title.toLowerCase()}, luxury travel, island holiday`}
        structuredData={packageStructuredData}
      />
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Optimized Image Gallery */}
        <div className="relative h-[450px] sm:h-[500px] bg-gray-900 overflow-hidden">
          {/* Image with crossfade transition */}
          <div className="absolute inset-0">
            {packageImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${currentPackage.title} - View ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 z-20" />
          
          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold z-30">
            {currentImageIndex + 1} / {packageImages.length}
          </div>

          {/* Overlay Information - More Transparent Glass */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
            <div className="max-w-7xl mx-auto">
              <div className="backdrop-blur-lg bg-black/20 rounded-2xl p-5 border border-white/20">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">{currentPackage.title}</h1>
                <div className="flex flex-wrap items-center gap-3 text-white text-sm">
                  <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-xl">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{currentPackage.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-xl">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{currentPackage.groupSize} people</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-500/90 to-yellow-500/90 px-3 py-2 rounded-xl shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    <span className="font-bold">4.9/5</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      
      {/* Add custom scrollbar styling */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-1.5 hover:text-blue-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRightBreadcrumb className="w-4 h-4 text-gray-400" />
            <button 
              onClick={() => navigate('/packages')}
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Packages
            </button>
            <ChevronRightBreadcrumb className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-none">{currentPackage.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - Compact Layout */}
            <div className="lg:col-span-2 space-y-4">
              {/* Overview - Compact */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-2"></span>
                  Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{currentPackage.longDescription}</p>
              </div>

              {/* Itinerary - Compact */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-2"></span>
                  Itinerary
                </h2>
                <div className="space-y-3">
                  {currentPackage.itinerary.map((day, index) => (
                    <details key={index} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-blue-50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <h3 className="font-bold text-sm text-gray-900">{day.title}</h3>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="p-4 bg-white border-t">
                        <p className="text-sm text-gray-600 mb-3">{day.description}</p>
                        {day.hotel && (
                          <div className="mb-3 p-3 bg-blue-50 rounded-lg text-xs">
                            <strong className="text-blue-900">{day.hotel.name}</strong>
                            <span className="text-blue-700 ml-2">• {day.hotel.location}</span>
                          </div>
                        )}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <strong className="text-gray-900 block mb-1">Activities</strong>
                            <ul className="text-gray-600 space-y-1">
                              {day.activities.slice(0, 3).map((activity, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-500 mr-1">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {day.meals && (
                            <div>
                              <strong className="text-gray-900 block mb-1">Meals</strong>
                              <ul className="text-gray-600 space-y-1">
                                {day.meals.map((meal, i) => (
                                  <li key={i}>• {meal}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Highlights - Compact Grid (Moved after Itinerary) */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-2"></span>
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPackage.highlights.map((highlight, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-blue-300 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={highlight.image} 
                          alt={highlight.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 bg-gradient-to-t from-white to-gray-50">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">{highlight.title}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions/Exclusions - Compact Two Column */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-base font-bold text-green-600 mb-3 flex items-center">
                      <Check className="w-5 h-5 mr-2" /> Included
                    </h3>
                    <ul className="space-y-2">
                      {currentPackage.includes.slice(0, 6).map((item, index) => (
                        <li key={index} className="flex items-start text-xs">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-red-600 mb-3 flex items-center">
                      <X className="w-5 h-5 mr-2" /> Not Included
                    </h3>
                    <ul className="space-y-2">
                      {currentPackage.excludes.slice(0, 6).map((item, index) => (
                        <li key={index} className="flex items-start text-xs">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Features - Bottom, Clean Grid */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Key Features
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentPackage.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white p-2.5 rounded-lg shadow-sm">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Compact Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 sticky top-6">
                {/* Package Summary */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{currentPackage.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Andaman Islands</span>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span className="text-sm font-bold text-gray-900">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Options */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Duration</label>
                  <select
                    value={selectedDays}
                    onChange={(e) => setSelectedDays(parseInt(e.target.value))}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all text-sm"
                  >
                    {[...new Set([...(currentPackage.pricingOptions?.map(o => o.days) || []), 6, 7, 8])]
                      .sort((a, b) => a - b)
                      .map(days => {
                        const option = currentPackage.pricingOptions?.find(o => o.days === days);
                        return (
                          <option key={days} value={days}>
                            {days} Days {option ? `- ${formatPrice(option.pricePerPerson)}/person` : ''}
                      </option>
                        );
                      })}
                  </select>
                </div>

                {/* Number of People */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Travelers</label>
                  <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg p-2">
                    <button
                      onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                      className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-bold text-gray-900 w-12 text-center">{numberOfPeople}</span>
                    <button
                      onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                      className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hotel & Room Selection - Compact */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="mr-1.5">🏨</span>
                    Accommodation
                  </h4>
                  <div className="space-y-2">
                    <select
                      value={selectedStarTier ?? ''}
                      onChange={(e) => setSelectedStarTier(e.target.value ? (parseInt(e.target.value) as 3 | 4 | 5) : null)}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-xs bg-white"
                    >
                      <option value="">Star Category</option>
                      <option value="3">⭐⭐⭐ 3 Star</option>
                      <option value="4">⭐⭐⭐⭐ 4 Star</option>
                      <option value="5">⭐⭐⭐⭐⭐ 5 Star</option>
                    </select>
                    <select
                      value={selectedHotelName}
                      onChange={(e) => setSelectedHotelName(e.target.value)}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-xs bg-white"
                    >
                      <option value="">Select Hotel</option>
                      {(filteredHotels.length > 0 ? filteredHotels.map(h => h.name) : placeholderHotelOptions).map(name => (
                        <option key={name} value={name}>{name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room Type - Compact */}
                {selectedHotelName && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Room Type</h4>
                    <div className="space-y-2">
                      {getAvailableRoomTypes().map((roomType, index) => (
                        <label key={index} className={`flex items-start space-x-2 p-2.5 rounded-lg border cursor-pointer transition-all text-xs ${
                          selectedRoomType === roomType.name 
                            ? 'bg-blue-50 border-blue-300 shadow-sm' 
                            : 'hover:bg-gray-50 border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === roomType.name}
                            onChange={() => setSelectedRoomType(roomType.name)}
                            className="mt-0.5 text-blue-600"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="font-semibold text-gray-900">{roomType.name}</span>
                              <span className="font-bold text-blue-600">₹{roomType.pricePerNight?.toLocaleString()}</span>
                            </div>
                            <p className="text-gray-600 text-xs line-clamp-1">{roomType.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Room Images - Compact Grid */}
                {selectedRoomType && (
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {getRoomTypeImages(selectedRoomType).slice(0, 4).map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group border border-gray-200"
                          onClick={() => openImageModal(getRoomTypeImages(selectedRoomType), index)}
                        >
                          <img
                            src={image}
                            alt={`Room ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                            <Camera className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                                 {/* Add-on Services */}
                 {currentPackage.supplements && currentPackage.supplements.length > 0 && (
                   <div className="mb-6">
                     <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                       <span className="text-xl mr-2">✨</span>
                       Add-on Services
                     </h4>
                     <div className="space-y-2.5">
                       {currentPackage.supplements.slice(0, 3).map((supplement, index) => (
                         <label key={index} className="flex items-start space-x-3 p-4 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-200 hover:shadow-sm group">
                           <input
                             type="checkbox"
                             checked={selectedSupplements.includes(supplement.name)}
                             onChange={() => handleSupplementToggle(supplement.name)}
                             className="mt-1 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                           />
                           <div className="flex-1">
                             <div className="flex justify-between items-start mb-1">
                               <span className="text-sm font-semibold text-gray-900">{supplement.name}</span>
                               <span className="text-sm font-bold text-green-600 whitespace-nowrap ml-2">+₹{supplement.price.toLocaleString()}</span>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">{supplement.description}</p>
                           </div>
                         </label>
            ))}
          </div>
        </div>
                 )}

                {/* Room Price Summary */}
                {selectedRoomType && selectedHotelName && (
                  <div className="mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-900">
                          {selectedRoomType} - {selectedDays} nights
                        </span>
                        <span className="text-sm font-bold text-blue-700">
                          {(() => {
                            const selectedHotel = currentPackage.hotels?.find(h => h.name === selectedHotelName);
                            let roomPrice = 0;
                            
                            if (selectedHotel) {
                              const roomType = selectedHotel.roomTypes?.find(rt => rt.name === selectedRoomType);
                              roomPrice = roomType?.pricePerNight || 0;
                            } else {
                              const roomTypes = getAvailableRoomTypes();
                              const roomType = roomTypes.find(rt => rt.name === selectedRoomType);
                              roomPrice = roomType?.pricePerNight || 0;
                            }
                            
                            return `₹${(roomPrice * selectedDays).toLocaleString()}/room`;
                          })()}
                        </span>
                      </div>
          </div>
        </div>
                 )}

                {/* Total Price - Compact */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-600">Base ({numberOfPeople}p)</span>
                      <span className="font-semibold text-gray-900">₹{(totalPrice - selectedSupplements.reduce((sum, name) => {
                        const supplement = currentPackage.supplements?.find(s => s.name === name);
                        return sum + (supplement?.price || 0);
                      }, 0)).toLocaleString()}</span>
                    </div>
                    {selectedSupplements.length > 0 && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Add-ons ({selectedSupplements.length})</span>
                        <span className="font-semibold text-orange-600">+₹{selectedSupplements.reduce((sum, name) => {
                          const supplement = currentPackage.supplements?.find(s => s.name === name);
                          return sum + (supplement?.price || 0);
                        }, 0).toLocaleString()}</span>
                      </div>
                    )}
                    {selectedRoomType && selectedHotelName && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Room ({selectedDays}n)</span>
                        <span className="font-semibold text-blue-600">+₹{(() => {
                          const selectedHotel = currentPackage.hotels?.find(h => h.name === selectedHotelName);
                          let roomPrice = 0;
                          
                          if (selectedHotel) {
                            const roomType = selectedHotel.roomTypes?.find(rt => rt.name === selectedRoomType);
                            roomPrice = roomType?.pricePerNight || 0;
                          } else {
                            const roomTypes = getAvailableRoomTypes();
                            const roomType = roomTypes.find(rt => rt.name === selectedRoomType);
                            roomPrice = roomType?.pricePerNight || 0;
                          }
                          
                          return (roomPrice * selectedDays).toLocaleString();
                        })()}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-2.5 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-gray-900">Total</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          ₹{totalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">*Inc. taxes</p>
                    </div>
                  </div>
                </div>

                {/* Booking Buttons - Compact */}
                <div className="space-y-2 mb-4">
                  <button
                    onClick={handleBooking}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-bold text-sm hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>🎯</span>
                    <span>Book Now</span>
                  </button>
                  <button
                    onClick={handleEnquiry}
                    className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-2"
                  >
                    <span>💬</span>
                    <span>Send Enquiry</span>
                  </button>
                </div>

                {/* Contact - Compact */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="font-bold text-xs text-gray-700 mb-2.5 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                    Need Help?
                  </h4>
                  <div className="space-y-2">
                    <a href="tel:+916297576826" className="flex items-center space-x-2 text-xs text-blue-600 hover:text-blue-800 font-medium">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 6297576826</span>
                    </a>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Mail className="w-3.5 h-3.5" />
                      <span>booking@luxuryandaman.com</span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges - Compact */}
                <div className="border-t border-gray-200 pt-3.5">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium block leading-tight">Secure</span>
                    </div>
                    <div className="text-center">
                      <div className="w-9 h-9 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium block leading-tight">Awarded</span>
                    </div>
                    <div className="text-center">
                      <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <Heart className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium block leading-tight">99% Happy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative w-full max-w-6xl max-h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 z-[10000] bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <div className="relative flex-1 flex items-center justify-center">
              {/* Navigation Arrows */}
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 z-[10000] bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 z-[10000] bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Main Image */}
              <img
                src={modalImages[modalImageIndex]}
                alt={`Room image ${modalImageIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {modalImageIndex + 1} / {modalImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {modalImages.length > 1 && (
              <div className="flex justify-center mt-6 space-x-3 px-4 py-2">
                <div className="thumbs flex space-x-2 overflow-x-auto pb-0 md:pb-2 max-w-full">
                  {modalImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === modalImageIndex 
                          ? 'border-white shadow-lg' 
                          : 'border-transparent opacity-60 hover:opacity-90 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Scoped styles to hide mobile scrollbars for thumbnail strip */}
            <style>{`
              .thumbs::-webkit-scrollbar { display: none; }
              .thumbs { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 rotate-90" />
        </button>
      )}

      <Footer />
    </>
  );
};

export default PackageDetailPage;