import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Users, Send, Clock, Home, Star, CheckCircle, ArrowRight, Sparkles, Globe, Shield, Heart, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { sendEmail } from '../lib/email';
import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'havelock',
    guests: '2',
    travelDate: '',
    duration: '5',
    message: '',
    preferredContact: 'email'
  });

  const [packageDetails, setPackageDetails] = useState<{
    packageName?: string;
    days?: number;
    people?: number;
    totalPrice?: number;
    supplements?: string[];
    starTier?: number | null;
    roomType?: string;
    hotelName?: string;
    selectedActivities?: string[];
  } | null>(null);
  const [enquiryType, setEnquiryType] = useState<'general' | 'booking' | 'enquiry'>('general');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = (packageDetails && packageDetails.packageName) ? 2 : 3;

  const location = useLocation();

  useEffect(() => {
    // Check for booking details from package pages
    const bookingDetails = localStorage.getItem('bookingDetails');
    const enquiryDetails = localStorage.getItem('enquiryDetails');
    const params = new URLSearchParams(location.search);
    const context = params.get('context');
    const pkg = params.get('package');
    const dest = params.get('destination');
    const daysParam = params.get('days');
    const peopleParam = params.get('people');
    
    if (bookingDetails) {
      const details = JSON.parse(bookingDetails);
      setPackageDetails(details);
      setEnquiryType('booking');
      setFormData(prev => ({
        ...prev,
        guests: details.people?.toString() || '2',
        duration: details.days?.toString() || '5',
        message: `I would like to book the ${details.packageName} package for ${details.people} people for ${details.days} days. Total estimated price: ₹${details.totalPrice?.toLocaleString()}.` +
          `${details.starTier ? `\n\nPreferred star category: ${details.starTier}-Star` : ''}` +
          `${details.roomType ? `\nPreferred room type: ${details.roomType}` : ''}` +
          `${details.hotelName ? `\nSelected hotel: ${details.hotelName}` : ''}` +
          `${details.selectedActivities?.length ? `\n\nSelected activities: ${details.selectedActivities.join(', ')}` : ''}` +
          `${details.supplements?.length ? `\n\nSelected add-ons: ${details.supplements.join(', ')}` : ''}`
      }));
      localStorage.removeItem('bookingDetails');
    } else if (enquiryDetails) {
      const details = JSON.parse(enquiryDetails);
      const hasValidPackage = !!details.packageName;
      if (hasValidPackage) {
        setPackageDetails(details);
        setEnquiryType('enquiry');
        setFormData(prev => ({
          ...prev,
          guests: details.people?.toString() || '2',
          duration: details.days?.toString() || '5',
          message: `I would like to enquire about the ${details.packageName} package for ${details.people} people for ${details.days} days. Could you please provide more details and pricing information?` +
            `${details.starTier ? `\n\nPreferred star category: ${details.starTier}-Star` : ''}` +
            `${details.roomType ? `\nPreferred room type: ${details.roomType}` : ''}` +
            `${details.hotelName ? `\nPreferred hotel: ${details.hotelName}` : ''}` +
            `${details.selectedActivities?.length ? `\n\nInterested activities: ${details.selectedActivities.join(', ')}` : ''}` +
            `${details.supplements?.length ? `\n\nInterested add-ons: ${details.supplements.join(', ')}` : ''}`
        }));
      }
      // Always clear the temporary context so a fresh visit stays clean
      localStorage.removeItem('enquiryDetails');
    } else if (context || pkg || dest) {
      const details = {
        packageName: pkg || dest || 'Selected Option',
        days: daysParam ? parseInt(daysParam) : undefined,
        people: peopleParam ? parseInt(peopleParam) : undefined,
        selectedActivities: [],
        supplements: [],
      };
      setPackageDetails(details);
      setEnquiryType(context === 'booking' ? 'booking' : 'enquiry');
      setFormData(prev => ({
        ...prev,
        guests: details.people?.toString() || prev.guests,
        duration: details.days?.toString() || prev.duration,
        message: `${context === 'booking' ? 'I would like to book' : 'I would like to enquire about'} ${details.packageName}${details.people ? ` for ${details.people} people` : ''}${details.days ? ` for ${details.days} days` : ''}.`
      }));
    }
  }, [location.search]);

  const destinations = [
    { value: 'havelock', label: 'Havelock Island', description: 'Pristine beaches & luxury resorts' },
    { value: 'neil', label: 'Neil Island', description: 'Coral reefs & natural beauty' },
    { value: 'portblair', label: 'Port Blair', description: 'Historic sites & cultural experiences' },
    { value: 'multiple', label: 'Multiple Destinations', description: 'Complete island exploration' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      const basePayload: any = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim() || 'Travel enquiry from website',
        destination: formData.destination,
        guests: parseInt(formData.guests),
        travel_date: formData.travelDate,
        duration: parseInt(formData.duration),
        preferred_contact: formData.preferredContact,
        subject:
          enquiryType === 'booking'
            ? 'Booking Enquiry'
            : enquiryType === 'enquiry'
            ? 'Package Enquiry'
            : 'General Enquiry',
        sourcePage: 'Enquiry'
      };

      if (packageDetails) {
        basePayload.packageName = packageDetails.packageName;
        basePayload.totalPrice = packageDetails.totalPrice;
        basePayload.supplements = packageDetails.supplements || [];
        basePayload.people = packageDetails.people;
        basePayload.days = packageDetails.days;
        basePayload.starTier = packageDetails.starTier ?? undefined;
        basePayload.roomType = packageDetails.roomType ?? undefined;
        basePayload.hotelName = packageDetails.hotelName ?? undefined;
        basePayload.selectedActivities = packageDetails.selectedActivities || [];
      }

      const success = await sendEmail(basePayload);

      if (success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: 'havelock',
          guests: '2',
          travelDate: '',
          duration: '5',
          message: '',
          preferredContact: 'email'
        });
        setCurrentStep(1);
        toast.success('🎉 Your enquiry has been submitted! We\'ll contact you within 24 hours.');
      }
    } catch (error) {
      console.error('Enquiry form error:', error);
      toast.error('❌ Failed to submit enquiry. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && (formData.email || formData.phone);
      case 2:
        // If context present, destination preferences are optional
        return (packageDetails && packageDetails.packageName) ? true : (formData.destination && formData.guests && formData.duration);
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Book Your Dream Vacation"
        description="Plan your perfect Andaman getaway with our luxury travel packages. Submit your enquiry and get personalized recommendations."
        keywords="andaman booking, luxury travel enquiry, vacation planning, travel booking"
      />
      <Header />
      
      <div className="bg-gradient-to-br from-purple-50 via-lavender-100 to-violet-50 overflow-x-hidden min-h-screen pt-20" style={{
      background: 'linear-gradient(135deg, #f3f0ff 0%, #e5deff 25%, #ddd6fe 50%, #c4b5fd 75%, #a78bfa 100%)'
    }}>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
            color: '#fff',
            borderRadius: '16px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            fontSize: '14px',
            padding: '16px',
          },
        }}
      />
      
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: `linear-gradient(45deg, rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1}), rgba(168, 85, 247, ${Math.random() * 0.3 + 0.1}))`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 lg:px-8 pt-6 pb-8">
          <div className="flex items-center justify-between">
            {/* Home Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/" 
                className="inline-flex items-center justify-center w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border border-purple-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Home className="w-6 h-6 text-purple-600 group-hover:text-violet-600 transition-colors duration-300" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Enhanced Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Your <span className="text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text">Dream</span> Vacation
              </h1>
              <p className="text-base md:text-lg text-gray-600 mt-2">Plan your perfect Andaman getaway</p>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <div className="hidden lg:flex flex-col items-center space-y-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <Shield className="w-4 h-4 text-green-500" />
                <span className="font-medium">Secure & Trusted</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">5-Star Service</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="container mx-auto px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-8xl mx-auto">
            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden h-full shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-8"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">Let's Connect</h2>
                  <p className="text-white/90 mb-8 text-base lg:text-lg leading-relaxed">
                    Our travel experts are ready to turn your island dreams into reality. Reach out through any channel that works for you.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Phone, title: "Call Us", info: ["+91 6297576826", "+91 9433731478"], color: "text-green-300" },
                      { icon: Mail, title: "Email Us", info: ["info@luxuryandamans.com", "bookings@luxuryandamans.com"], color: "text-blue-300" },
                      { icon: MapPin, title: "Visit Us", info: ["Marine Hill Road, Port Blair", "Andaman & Nicobar Islands"], color: "text-pink-300" },
                      { icon: Clock, title: "Business Hours", info: ["Mon-Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 2:00 PM"], color: "text-yellow-300" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 6, scale: 1.02 }}
                        className="flex items-start space-x-4 group cursor-pointer"
                      >
                        <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-white/90 transition-colors duration-300">{item.title}</h3>
                          {item.info.map((line, i) => (
                            <p key={i} className="text-white/80 text-sm leading-relaxed">
                              {item.title === "Call Us" ? (
                                <a href={`tel:${line.replace(/\s/g, '')}`} className="hover:text-white transition-colors underline">
                                  {line}
                                </a>
                              ) : item.title === "Email Us" ? (
                                <a href={`mailto:${line}`} className="hover:text-white transition-colors underline">
                                  {line}
                                </a>
                              ) : (
                                line
                              )}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional lavender accent */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-8 pt-8 border-t border-white/20"
                  >
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-pink-300" />
                      <p className="text-white/90 text-sm font-medium">Creating magical memories since 2020</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Multi-Step Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 order-1 lg:order-2"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-2xl border border-purple-200/30">
                {/* Enhanced Progress bar */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    {[1, 2, 3].map((step) => (
                      <motion.div
                        key={step}
                        className={`flex items-center ${step < totalSteps ? 'flex-1' : ''}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: step * 0.1 }}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 ${
                            currentStep >= step
                              ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                        </div>
                        {step < totalSteps && (
                          <div
                            className={`flex-1 h-2 mx-6 rounded-full transition-all duration-500 ${
                              currentStep > step ? 'bg-gradient-to-r from-purple-600 to-violet-600' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 font-medium">
                      Step {currentStep} of {totalSteps}: {
                        currentStep === 1 ? 'Personal Information' :
                        currentStep === 2 ? 'Travel Preferences' : 'Additional Details'
                      }
                    </p>
                  </div>
                </div>

                {/* Package Details Section */}
                {packageDetails && packageDetails.packageName && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Package className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">
                        {enquiryType === 'booking' ? 'Booking Details' : 'Package Enquiry'}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <h4 className="font-semibold text-gray-700 text-sm">Package</h4>
                        <p className="text-blue-600 font-bold">{packageDetails.packageName}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <h4 className="font-semibold text-gray-700 text-sm">Duration</h4>
                        <p className="text-gray-900 font-semibold">{packageDetails.days} days</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <h4 className="font-semibold text-gray-700 text-sm">People</h4>
                        <p className="text-gray-900 font-semibold">{packageDetails.people} guests</p>
                      </div>
                      {packageDetails.totalPrice && (
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <h4 className="font-semibold text-gray-700 text-sm">Total Price</h4>
                          <p className="text-green-600 font-bold">₹{packageDetails.totalPrice.toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                    {packageDetails.supplements && packageDetails.supplements.length > 0 && (
                      <div className="mt-4 p-3 bg-white rounded-lg">
                        <h4 className="font-semibold text-gray-700 text-sm mb-2">Selected Add-ons:</h4>
                        <div className="flex flex-wrap gap-2">
                          {packageDetails.supplements.map((supplement, index) => (
                            <span 
                              key={index}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {supplement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600">
                          {enquiryType === 'booking' ? 'Ready to book this package' : 'Interested in this package'}
                        </span>
                      </div>
                      <Link
                         to="/packages"
                         className="text-sm text-gray-500 hover:text-gray-700 underline"
                       >
                         Change Package
                       </Link>
                    </div>
                  </motion.div>
                )}

                {/* Quick send when context is present */}
                {packageDetails && packageDetails.packageName && (
                  <div className="mb-6">
                    <button
                      type="submit"
                      form="enquiry-form"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      {isSubmitting ? 'Sending...' : `Send ${enquiryType === 'booking' ? 'Booking' : 'Enquiry'} for ${packageDetails.packageName}`}
                    </button>
                  </div>
                )}

                <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Tell us about yourself</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="group">
                            <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-base placeholder-gray-400"
                              placeholder="Enter your full name"
                              required
                            />
                          </div>

                          <div className="group">
                            <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-base placeholder-gray-400"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-base placeholder-gray-400"
                            placeholder="+91 XXXXX XXXXX"
                            required
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Travel Preferences */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Plan your adventure</h3>
                          {packageDetails && packageDetails.packageName && (
                            <p className="text-gray-600 mb-4">These are optional since you already selected a {enquiryType === 'booking' ? 'package' : 'destination'}.</p>
                          )}
                        </div>

                        <div className="group">
                          <label className="block text-base font-semibold text-gray-700 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                            Preferred Destination
                          </label>
                          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${(packageDetails && packageDetails.packageName) ? 'opacity-60 pointer-events-auto' : ''}`}>
                            {destinations.map(dest => (
                              <motion.label
                                key={dest.value}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                  formData.destination === dest.value
                                    ? 'border-purple-500 bg-purple-50 shadow-lg shadow-purple-200'
                                    : 'border-purple-200 hover:border-purple-400 bg-white/80'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="destination"
                                  value={dest.value}
                                  checked={formData.destination === dest.value}
                                  onChange={handleChange}
                                  className="sr-only"
                                />
                                <div>
                                  <h4 className="font-semibold text-gray-800 text-base mb-1">{dest.label}</h4>
                                  <p className="text-sm text-gray-600">{dest.description}</p>
                                </div>
                                {formData.destination === dest.value && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-4 right-4"
                                  >
                                    <CheckCircle className="w-6 h-6 text-purple-600" />
                                  </motion.div>
                                )}
                              </motion.label>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="group">
                            <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                              <Users className="w-4 h-4 inline mr-2" />
                              Guests
                            </label>
                            <input
                              type="number"
                              name="guests"
                              min="1"
                              max="20"
                              value={formData.guests}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-base"
                            />
                          </div>

                          <div className="group">
                            <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                              <Calendar className="w-4 h-4 inline mr-2" />
                              Travel Date
                            </label>
                            <input
                              type="date"
                              name="travelDate"
                              value={formData.travelDate}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-base"
                            />
                          </div>

                          <div className="group">
                            <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                              <Clock className="w-4 h-4 inline mr-2" />
                              Duration (days)
                            </label>
                            <input
                              type="number"
                              name="duration"
                              min="1"
                              max="30"
                              value={formData.duration}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-base"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Additional Details */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Final touches</h3>
                        </div>

                        <div className="group">
                          <label className="block text-base font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            Tell us about your dream vacation
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none text-base"
                            placeholder="Describe your ideal experience, special requests, or any questions you have..."
                          ></textarea>
                        </div>

                        <div className="group">
                          <label className="block text-base font-semibold text-gray-700 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                            How would you prefer us to contact you?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['email', 'phone'].map((method) => (
                              <motion.label
                                key={method}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center space-x-4 p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                  formData.preferredContact === method
                                    ? 'border-purple-500 bg-purple-50 shadow-lg shadow-purple-200'
                                    : 'border-purple-200 hover:border-purple-400 bg-white/80'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="preferredContact"
                                  value={method}
                                  checked={formData.preferredContact === method}
                                  onChange={handleChange}
                                  className="w-5 h-5 text-purple-600"
                                />
                                <span className="font-semibold text-gray-800 capitalize text-base">{method}</span>
                              </motion.label>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Enhanced Navigation Buttons */}
                  <div className="flex items-center justify-between pt-8 border-t-2 border-gray-200">
                    <div>
                      {currentStep > 1 && (
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3 text-gray-800 hover:text-purple-600 transition-colors duration-300 font-semibold text-base"
                        >
                          ← Previous
                        </motion.button>
                      )}
                    </div>
                    
                    <div>
                      {currentStep < totalSteps ? (
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          disabled={!isStepValid()}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 text-base"
                        >
                          <span>Continue</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 text-base"
                        >
                          <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                          <Send className="w-5 h-5" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Enquiry;