import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  Star, 
  Check, 
  X, 
  Camera, 
  Plane,
  Phone,
  Mail,
  Shield,
  Award,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
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
  const [currentPackage, setCurrentPackage] = useState<Package | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDays, setSelectedDays] = useState(6);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [currentPackage, selectedDays, numberOfPeople, selectedSupplements]);

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

    // Add supplements
    selectedSupplements.forEach(supplementName => {
      const supplement = currentPackage.supplements?.find(s => s.name === supplementName);
      if (supplement) {
        total += supplement.price;
      }
    });

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
      supplements: selectedSupplements
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
        keywords={`andaman tour, ${currentPackage.title.toLowerCase()}, luxury travel, island holiday`}
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
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'itinerary', label: 'Itinerary' },
                      { id: 'inclusions', label: 'Inclusions' },
                      { id: 'hotels', label: 'Hotels' },
                      { id: 'gallery', label: 'Gallery' },
                      { id: 'reviews', label: 'Reviews' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Overview</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{currentPackage.longDescription}</p>
                      </div>

                      {/* Package Highlights */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Package Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentPackage.highlights.map((highlight, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                              <img
                                src={highlight.image}
                                alt={highlight.title}
                                className="w-full h-32 object-cover rounded-lg mb-3"
                              />
                              <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                              <p className="text-gray-600 text-sm">{highlight.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {currentPackage.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                              <Check className="w-5 h-5 text-green-600" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Itinerary Tab */}
                  {activeTab === 'itinerary' && (
                    <div>
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
                                     <div className="flex items-center space-x-1">
                                       {renderStars(day.hotel.rating)}
                                     </div>
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
                  )}

                  {/* Inclusions Tab */}
                  {activeTab === 'inclusions' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                            <Check className="w-6 h-6 mr-2" />
                            What's Included
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
                            <X className="w-6 h-6 mr-2" />
                            What's Not Included
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

                      {/* Terms & Conditions */}
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

                      {/* Cancellation Policy */}
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
                  )}

                  {/* Hotels Tab */}
                  {activeTab === 'hotels' && currentPackage.hotels && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Accommodation Details</h2>
                                             <div className="space-y-6">
                         {currentPackage.hotels.map((hotel, index) => (
                           <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                             <div className="relative overflow-hidden">
                               <img
                                 src={hotel.image}
                                 alt={hotel.name}
                                 className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                               />
                               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                 <span className="text-sm font-semibold text-gray-700">Featured Hotel</span>
                               </div>
                             </div>
                             <div className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                                <div className="flex items-center space-x-1">
                                  {renderStars(hotel.rating)}
                                </div>
                              </div>
                              <p className="text-gray-600 mb-2 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {hotel.location}
                              </p>
                              <p className="text-gray-700 mb-4">{hotel.description}</p>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                                <div className="flex flex-wrap gap-2">
                                  {hotel.amenities.map((amenity, amenityIndex) => (
                                    <span
                                      key={amenityIndex}
                                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                      {amenity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                                     {/* Gallery Tab */}
                   {activeTab === 'gallery' && (
                     <div>
                       <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                       <p className="text-gray-600 mb-6">Click any image to view in the hero gallery above</p>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         {packageImages.map((image, index) => (
                           <div
                key={index}
                             className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                             onClick={() => setCurrentImageIndex(index)}
                           >
                             <img
                               src={image}
                               alt={`Gallery image ${index + 1}`}
                               className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                               <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <Camera className="w-6 h-6 text-white" />
                                 <span className="text-white font-medium">View</span>
                               </div>
                             </div>
                             <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
                               {index + 1}/{packageImages.length}
                             </div>
                           </div>
                         ))}
                       </div>
                  </div>
                   )}

                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                  <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                      
                      {/* Overall Rating */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">4.9</div>
                            <div className="flex items-center justify-center space-x-1 mb-1">
                              {renderStars(5)}
                            </div>
                            <div className="text-sm text-gray-600">284 reviews</div>
                          </div>
                          <div className="flex-1">
                            <div className="space-y-2">
                              {[5, 4, 3, 2, 1].map(star => (
                                <div key={star} className="flex items-center space-x-2">
                                  <span className="text-sm text-gray-600 w-8">{star}★</span>
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div 
                                      className="bg-yellow-400 h-2 rounded-full" 
                                      style={{ width: star === 5 ? '85%' : star === 4 ? '12%' : '3%' }}
                                    />
                                  </div>
                                  <span className="text-sm text-gray-600 w-8">
                                    {star === 5 ? '85%' : star === 4 ? '12%' : '3%'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sample Reviews */}
                      <div className="space-y-6">
                        {[
                          {
                            name: "Rajesh & Priya Kumar",
                            date: "December 2023",
                            rating: 5,
                            review: "Absolutely amazing experience! The luxury accommodations exceeded our expectations, and the staff was incredibly helpful throughout our journey. The Taj Exotica Resort was a dream come true.",
                            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                          },
                          {
                            name: "Sarah Johnson",
                            date: "November 2023",
                            rating: 5,
                            review: "Perfect honeymoon package! Every detail was taken care of, from the romantic candle-light dinner to the beautiful beachfront villa. Highly recommend this package for couples.",
                            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                          },
                          {
                            name: "Michael & Jennifer Smith",
                            date: "October 2023",
                            rating: 5,
                            review: "The itinerary was perfectly planned, allowing us to experience the best of Andaman Islands. The water sports at Elephant Beach were thrilling, and the historical tour was very informative.",
                            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                          }
                        ].map((review, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-start space-x-4">
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="flex items-center space-x-1 mb-2">
                                  {renderStars(review.rating)}
                                </div>
                                <p className="text-gray-700">{review.review}</p>
                              </div>
                            </div>
                        </div>
                      ))}
                      </div>
                    </div>
                  )}
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
                    {currentPackage.pricingOptions?.map(option => (
                      <option key={option.days} value={option.days}>
                        {option.title} - {formatPrice(option.pricePerPerson)}/person
                      </option>
                    ))}
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
                      <span>+91 9876543210</span>
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
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 rotate-90" />
        </button>
      )}

      <Footer />
    </>
  );
};

export default PackageDetailPage;