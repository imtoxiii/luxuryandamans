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
  Download,
  Share2,
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
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStarTier, setSelectedStarTier] = useState<3 | 4 | 5 | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>('');
  const [selectedHotelName, setSelectedHotelName] = useState<string>('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState<string[]>([]);

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
  }, [currentPackage, selectedDays, numberOfPeople, selectedSupplements, selectedHotelName, selectedRoomType, selectedActivities]);

  // Derive available filters


  const availableActivities: string[] = currentPackage?.itinerary
    ? Array.from(new Set(currentPackage.itinerary.flatMap(d => d.activities || [])))
    : [];

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

  // Helpers for activity description and pricing
  const getActivityPrice = (name: string): number => {
    const n = name.toLowerCase();
    if (n.includes('scuba') || n.includes('dive')) return 3500;
    if (n.includes('sea walk')) return 3000;
    if (n.includes('snorkel')) return 1500;
    if (n.includes('glass bottom')) return 800;
    if (n.includes('photography') || n.includes('photoshoot')) return 2000;
    if (n.includes('cruise')) return 2500;
    return 1500;
  };

  const getActivityDescription = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes('scuba') || n.includes('dive')) return 'Guided dive with certified instructor and gear.';
    if (n.includes('sea walk')) return 'Walk the seabed with helmet for close coral viewing.';
    if (n.includes('snorkel')) return 'Surface-level coral exploration with snorkel gear.';
    if (n.includes('glass bottom')) return 'Boat trip with glass panels to see reefs.';
    if (n.includes('photography') || n.includes('photoshoot')) return 'Professional session to capture memories.';
    if (n.includes('cruise')) return 'Leisure cruise with scenic island views.';
    return 'Curated island experience with expert guidance.';
  };

  // Create packageImages array
  const packageImages = currentPackage ? [
    currentPackage.image,
    ...currentPackage.highlights.map(h => h.image),
    ...(currentPackage.hotels?.map(h => h.image) || [])
  ].filter((img, index, arr) => arr.indexOf(img) === index) : [];

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

    // Add activities with per-activity pricing
    const activitiesSubtotal = selectedActivities.reduce((sum, a) => sum + getActivityPrice(a), 0) * numberOfPeople;
    total += activitiesSubtotal;

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

  const handleActivityToggle = (activityName: string) => {
    setSelectedActivities(prev =>
      prev.includes(activityName)
        ? prev.filter(name => name !== activityName)
        : [...prev, activityName]
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
      hotelName: selectedHotelName,
      selectedActivities
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
      selectedActivities,
      type: 'enquiry'
    };
    
    localStorage.setItem('enquiryDetails', JSON.stringify(enquiryDetails));
    navigate('/enquiry');
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const title = currentPackage ? `${currentPackage.title} | Luxury Andamans` : 'Luxury Andamans Package';
    const text = 'Check out this Andaman package!';

    try {
      if ((navigator as any).share) {
        await (navigator as any).share({ title, text, url: shareUrl });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard');
      } else {
        prompt('Copy this link:', shareUrl);
      }
    } catch (e) {
      console.error('Share failed:', e);
    }
  };

  const handleDownload = () => {
    // Open a printable summary page in a new window; user can save as PDF
    const booking = {
      packageName: currentPackage?.title,
      days: selectedDays,
      people: numberOfPeople,
      totalPrice,
      supplements: selectedSupplements,
      hotelName: selectedHotelName,
      roomType: selectedRoomType,
      activities: selectedActivities
    };

    const summaryHtml = `
      <html>
        <head>
          <title>${currentPackage?.title || 'Package'} - Summary</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
            h1 { margin: 0 0 8px; font-size: 20px; }
            .muted { color: #555; margin-bottom: 16px; }
            .card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
            .row { display: flex; justify-content: space-between; margin: 6px 0; }
            .label { color: #374151; }
            .value { font-weight: 600; }
            .pill { display: inline-block; padding: 4px 8px; background: #f3f4f6; border-radius: 999px; margin-right: 6px; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <h1>${currentPackage?.title || 'Package Summary'}</h1>
          <div class="muted">${window.location.href}</div>

          <div class="card">
            <div class="row"><span class="label">Duration</span><span class="value">${selectedDays} days</span></div>
            <div class="row"><span class="label">People</span><span class="value">${numberOfPeople}</span></div>
            <div class="row"><span class="label">Hotel</span><span class="value">${booking.hotelName || '-'}</span></div>
            <div class="row"><span class="label">Room Type</span><span class="value">${booking.roomType || '-'}</span></div>
            <div class="row"><span class="label">Total Price</span><span class="value">₹${(booking.totalPrice || 0).toLocaleString()}</span></div>
          </div>

          <div class="card">
            <div class="label" style="margin-bottom:8px;">Activities</div>
            <div>${(booking.activities || []).map((a: string) => `<span class='pill'>${a}</span>`).join('') || '<span class="muted">None</span>'}</div>
          </div>

          <div class="card">
            <div class="label" style="margin-bottom:8px;">Add-ons</div>
            <div>${(booking.supplements || []).map((s: string) => `<span class='pill'>${s}</span>`).join('') || '<span class="muted">None</span>'}</div>
          </div>

          <button class="no-print" onclick="window.print()" style="margin-top:16px;padding:10px 16px;border:1px solid #111;border-radius:6px;background:#fff;cursor:pointer;">Print / Save as PDF</button>
        </body>
      </html>
    `;

    const w = window.open('', '_blank');
    if (!w) return;
    w.document.open();
    w.document.write(summaryHtml);
    w.document.close();
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
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
        {/* Hero Section with Image Gallery */}
        <div className="relative h-96 bg-gray-900 overflow-hidden">
          <img
            src={packageImages[currentImageIndex]}
            alt={currentPackage.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentImageIndex(prev => prev === 0 ? packageImages.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentImageIndex(prev => prev === packageImages.length - 1 ? 0 : prev + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

                     {/* Image Indicators */}
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
             {packageImages.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentImageIndex(index)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                   currentImageIndex === index 
                     ? 'bg-white scale-110' 
                     : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                 }`}
               />
             ))}
           </div>

          {/* Overlay Information */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-2">{currentPackage.title}</h1>
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{currentPackage.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{currentPackage.groupSize} people</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 (284 reviews)</span>
                </div>
              </div>
          </div>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRightBreadcrumb className="w-4 h-4 text-gray-400" />
            <button 
              onClick={() => navigate('/packages')}
              className="hover:text-blue-600 transition-colors"
            >
              Packages
            </button>
            <ChevronRightBreadcrumb className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{currentPackage.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Single Page Flow */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Overview</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{currentPackage.longDescription}</p>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Package Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentPackage.highlights.map((highlight, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <img src={highlight.image} alt={highlight.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                              <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                              <p className="text-gray-600 text-sm">{highlight.description}</p>
                            </div>
                          ))}
                        </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Key Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {currentPackage.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                              <Check className="w-5 h-5 text-green-600" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                        </div>
                      </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                      <div className="space-y-6">
                        {currentPackage.itinerary.map((day, index) => (
                          <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-4">
                              <h3 className="font-bold text-lg text-gray-900 mb-2">{day.title}</h3>
                              <p className="text-gray-600 mb-4">{day.description}</p>
                                                             {day.hotel && (
                                 <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                   <h4 className="font-semibold text-blue-900 mb-2">Hotel: {day.hotel.name}</h4>
                                   <div className="flex items-center space-x-2">
                                     <span className="text-blue-700 text-sm">{day.hotel.location}</span>
                                     <span className="text-blue-700">•</span>
                              <div className="flex items-center space-x-1">{renderStars(day.hotel.rating)}</div>
                                   </div>
                                 </div>
                               )}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {day.activities.map((activity, actIndex) => (
                                      <li key={actIndex} className="flex items-start space-x-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span>{activity}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                {day.meals && (
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Meals</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {day.meals.map((meal, mealIndex) => (
                                        <li key={mealIndex} className="flex items-start space-x-2">
                                          <span className="text-green-500 mt-1">•</span>
                                          <span>{meal}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {day.sightseeing && (
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Sightseeing</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {day.sightseeing.map((sight, sightIndex) => (
                                        <li key={sightIndex} className="flex items-start space-x-2">
                                          <span className="text-purple-500 mt-1">•</span>
                                          <span>{sight}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                  </div>
                ))}
                      </div>
                    </div>

              {/* Inclusions/Exclusions/Terms */}
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                      <Check className="w-6 h-6 mr-2" /> What's Included
                          </h3>
                          <ul className="space-y-2">
                            {currentPackage.includes.map((item, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                      <X className="w-6 h-6 mr-2" /> What's Not Included
                          </h3>
                          <ul className="space-y-2">
                            {currentPackage.excludes.map((item, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
          </div>
        </div>
                      <div className="border-t pt-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Terms & Conditions</h3>
                        <ul className="space-y-2">
                          {currentPackage.terms.map((term, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="text-blue-500 mt-2 text-xs">▶</span>
                              <span className="text-gray-700">{term}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {currentPackage.cancellationPolicy && (
                        <div className="border-t pt-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h3>
                          <ul className="space-y-2">
                            {currentPackage.cancellationPolicy.map((policy, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <span className="text-orange-500 mt-2 text-xs">▶</span>
                                <span className="text-gray-700">{policy}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

              {/* Gallery */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                       <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                       <p className="text-gray-600 mb-6">Click any image to view in the hero gallery above</p>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         {packageImages.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300" onClick={() => setCurrentImageIndex(index)}>
                      <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                               <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <Camera className="w-6 h-6 text-white" />
                                 <span className="text-white font-medium">View</span>
                               </div>
                             </div>
                      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">{index + 1}/{packageImages.length}</div>
                           </div>
                         ))}
                       </div>
                  </div>


            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                {/* Package Summary */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentPackage.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Andaman Islands</span>
                  </div>
                </div>

                {/* Pricing Options */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Duration</label>
                  <select
                    value={selectedDays}
                    onChange={(e) => setSelectedDays(parseInt(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold text-gray-900 w-12 text-center">{numberOfPeople}</span>
                    <button
                      onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hotel Selection */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">🏨</span>
                    Hotel Selection
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Star Category</label>
                      <select
                        value={selectedStarTier ?? ''}
                        onChange={(e) => setSelectedStarTier(e.target.value ? (parseInt(e.target.value) as 3 | 4 | 5) : null)}
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select Star Category</option>
                        <option value="3">3 Star Hotels</option>
                        <option value="4">4 Star Hotels</option>
                        <option value="5">5 Star Resorts</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Choose Hotel</label>
                      <select
                        value={selectedHotelName}
                        onChange={(e) => setSelectedHotelName(e.target.value)}
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select Hotel</option>
                        {(filteredHotels.length > 0 ? filteredHotels.map(h => h.name) : placeholderHotelOptions).map(name => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Room Type Selection */}
                {selectedHotelName && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <span className="mr-2">🛏️</span>
                      Room Selection
                    </h4>
                    <div className="space-y-2">
                      {getAvailableRoomTypes().map((roomType, index) => (
                        <label key={index} className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          selectedRoomType === roomType.name 
                            ? 'bg-blue-50 border-blue-300 ring-1 ring-blue-200' 
                            : 'hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                        }`}>
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === roomType.name}
                            onChange={() => setSelectedRoomType(roomType.name)}
                            className="mt-1 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-900">{roomType.name}</span>
                              <span className="text-sm font-bold text-blue-600">₹{roomType.pricePerNight?.toLocaleString()}/night</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{roomType.description}</p>
                            {roomType.maxOccupancy && (
                              <p className="text-xs text-gray-500 mt-1">Max occupancy: {roomType.maxOccupancy} guests</p>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Room Type Images */}
                {selectedRoomType && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <span className="mr-2">📷</span>
                      {selectedRoomType} Room Images
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {getRoomTypeImages(selectedRoomType).map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group"
                          onClick={() => openImageModal(getRoomTypeImages(selectedRoomType), index)}
                        >
                          <img
                            src={image}
                            alt={`${selectedRoomType} room ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Camera className="w-5 h-5 text-white" />
                              <span className="text-white font-medium text-sm">View</span>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
                            {index + 1}/{getRoomTypeImages(selectedRoomType).length}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                                 {/* Add-on Services */}
                 {currentPackage.supplements && currentPackage.supplements.length > 0 && (
                   <div className="mb-6">
                     <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                       <span className="mr-2">✨</span>
                       Add-on Services
                     </h4>
                     <div className="space-y-2">
                       {currentPackage.supplements.slice(0, 3).map((supplement, index) => (
                         <label key={index} className="flex items-start space-x-3 p-3 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-200">
                           <input
                             type="checkbox"
                             checked={selectedSupplements.includes(supplement.name)}
                             onChange={() => handleSupplementToggle(supplement.name)}
                             className="mt-1 rounded text-blue-600 focus:ring-blue-500"
                           />
                           <div className="flex-1">
                             <div className="flex justify-between items-start">
                               <span className="text-sm font-medium text-gray-900">{supplement.name}</span>
                               <span className="text-sm font-bold text-green-600">+₹{supplement.price.toLocaleString()}</span>
                             </div>
                             <p className="text-xs text-gray-600 mt-1">{supplement.description}</p>
                           </div>
                         </label>
            ))}
          </div>
        </div>
                 )}

                {/* Activities Selection */}
                {availableActivities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <span className="mr-2">🏄</span>
                      Activities
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-auto pr-1">
                      {availableActivities.map((activity, index) => (
                        <label key={index} className="flex items-start space-x-3 p-3 hover:bg-purple-50 rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer transition-all duration-200">
                          <input
                            type="checkbox"
                            checked={selectedActivities.includes(activity)}
                            onChange={() => handleActivityToggle(activity)}
                            className="mt-1 rounded text-purple-600 focus:ring-purple-500"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-900">{activity}</span>
                              <span className="text-xs font-semibold text-purple-700">+₹{getActivityPrice(activity).toLocaleString()}/person</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{getActivityDescription(activity)}</p>
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

                                 {/* Total Price */}
                 <div className="border-t pt-4 mb-6">
                   <div className="space-y-3">
                     <div className="flex justify-between items-center">
                       <span className="text-gray-600">Base Price ({numberOfPeople} people)</span>
                       <span className="font-semibold">₹{(totalPrice - selectedSupplements.reduce((sum, name) => {
                         const supplement = currentPackage.supplements?.find(s => s.name === name);
                         return sum + (supplement?.price || 0);
                       }, 0)).toLocaleString()}</span>
                     </div>
                     {selectedSupplements.length > 0 && (
                       <div className="flex justify-between items-center">
                         <span className="text-gray-600">Add-ons ({selectedSupplements.length})</span>
                         <span className="font-semibold text-orange-600">+₹{selectedSupplements.reduce((sum, name) => {
                           const supplement = currentPackage.supplements?.find(s => s.name === name);
                           return sum + (supplement?.price || 0);
                         }, 0).toLocaleString()}</span>
                       </div>
                     )}
                                          {selectedActivities.length > 0 && (
                       <div className="flex justify-between items-center">
                         <span className="text-gray-600">Activities ({selectedActivities.length})</span>
                         <span className="font-semibold text-purple-600">+₹{(selectedActivities.reduce((sum, a) => sum + getActivityPrice(a), 0) * numberOfPeople).toLocaleString()}</span>
                       </div>
                     )}
                     {selectedRoomType && selectedHotelName && (
                       <div className="flex justify-between items-center">
                         <span className="text-gray-600">Room ({selectedRoomType} × {selectedDays} nights)</span>
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
                     <div className="border-t pt-3">
                       <div className="flex justify-between items-center text-xl font-bold text-blue-600">
                         <span>Total Price</span>
                         <span>₹{totalPrice.toLocaleString()}</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">*Prices are per package, inclusive of taxes</p>
                     </div>
                   </div>
                 </div>

                                 {/* Booking Buttons */}
                 <div className="space-y-3 mb-6">
                   <button
                     onClick={handleBooking}
                     className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                   >
                     🎯 Book This Package
                   </button>
                   <button
                     onClick={handleEnquiry}
                     className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                   >
                     💬 Send Enquiry
                   </button>
                 </div>

                {/* Contact Information */}
                <div className="border-t pt-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+916297576826" className="text-blue-600 hover:text-blue-800">+91 6297576826</a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>booking@luxuryandaman.com</span>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="text-center">
                      <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Secure Booking</span>
                    </div>
                    <div className="text-center">
                      <Award className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Award Winning</span>
                    </div>
                    <div className="text-center">
                      <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">99% Satisfaction</span>
                    </div>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Share this package</span>
                    <div className="flex space-x-2">
                      <button onClick={handleShare} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Share">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button onClick={handleDownload} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Download PDF">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
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