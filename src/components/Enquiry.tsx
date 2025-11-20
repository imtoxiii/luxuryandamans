import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle, ArrowRight, Sparkles, MapPin, Clock, User, Calendar, Users, ShieldCheck, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { sendTelegramMessage, formatBookingMessage } from '../lib/telegram';
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
    preferredContact: 'email',
    tripType: 'couple'
  });

  const [packageDetails, setPackageDetails] = useState<{
    packageName?: string;
    days?: number;
    people?: number;
    totalPrice?: number;
    supplements?: string[];
    selectedActivities?: string[];
  } | null>(null);
  const [enquiryType, setEnquiryType] = useState<'general' | 'booking' | 'enquiry'>('general');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Check for booking details from package pages
    const bookingDetails = localStorage.getItem('bookingDetails');
    const enquiryDetails = localStorage.getItem('enquiryDetails');
    const params = new URLSearchParams(location.search);
    const context = params.get('context');
    const pkg = params.get('package');
    const dest = params.get('destination');
    const activity = params.get('activity');
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
            `${details.selectedActivities?.length ? `\n\nInterested activities: ${details.selectedActivities.join(', ')}` : ''}` +
            `${details.supplements?.length ? `\n\nInterested add-ons: ${details.supplements.join(', ')}` : ''}`
        }));
      }
      localStorage.removeItem('enquiryDetails');
    } else if (context || pkg || dest || activity) {
      const details = {
        packageName: pkg || dest || activity || 'Selected Option',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        packageName: packageDetails?.packageName,
        totalPrice: packageDetails?.totalPrice,
        supplements: packageDetails?.supplements,
        selectedActivities: packageDetails?.selectedActivities
      };

      const message = formatBookingMessage(payload);
      const success = await sendTelegramMessage(message);

      if (success) {
        setIsSuccess(true);
        toast.success('Enquiry submitted successfully!');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Enquiry form error:', error);
      toast.error('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen font-sans bg-pearl">
        <SEO title="Enquiry Submitted | Luxury Andamans" description="Thank you for your enquiry." />
        <Header />
        <div className="pt-32 pb-20 container mx-auto px-6 flex items-center justify-center min-h-[60vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-night mb-4">Enquiry Received!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you, <span className="font-semibold text-night">{formData.name}</span>. We'll be in touch shortly to plan your perfect Andaman trip.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/" className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Back Home
              </Link>
              <Link to="/packages" className="px-8 py-3 bg-azure text-white rounded-xl font-semibold hover:bg-azure/90 transition-colors shadow-lg shadow-azure/20">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-pearl">
      <SEO 
        title="Plan Your Trip | Luxury Andamans"
        description="Start planning your dream Andaman vacation. Custom packages, luxury resorts, and unforgettable experiences."
      />
      <Header />
      <Toaster position="top-right" />

      {/* Hero Section */}
      <div className="relative bg-night pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/60 to-pearl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Tell us about your dream vacation, and let our experts craft a personalized itinerary just for you.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-2xl font-bold font-display text-night mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-night">Trusted Local Experts</h4>
                    <p className="text-sm text-gray-500 mt-1">Based in Port Blair with 10+ years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-night">Premium Experiences</h4>
                    <p className="text-sm text-gray-500 mt-1">Curated luxury stays and exclusive activities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-night">24/7 Support</h4>
                    <p className="text-sm text-gray-500 mt-1">We're with you at every step of your journey.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-night rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold font-display mb-6 relative z-10">Contact Details</h3>
              <div className="space-y-4 relative z-10">
                <a href="tel:+916297576826" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 6297576826</span>
                </a>
                <a href="mailto:info@luxuryandamans.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@luxuryandamans.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Port Blair, Andaman Islands</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-azure" />
                <h2 className="text-2xl md:text-3xl font-bold font-display text-night">Plan Your Trip</h2>
              </div>

              {packageDetails?.packageName && (
                <div className="mb-8 p-4 bg-azure/5 rounded-xl border border-azure/10 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-azure uppercase tracking-wider">Selected Package</span>
                    <p className="font-bold text-night">{packageDetails.packageName}</p>
                  </div>
                  {packageDetails.totalPrice && (
                    <div className="text-right">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Est. Price</span>
                      <p className="font-bold text-azure text-lg">₹{packageDetails.totalPrice.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-night border-b border-gray-100 pb-2">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Trip Type</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="tripType"
                          value={formData.tripType}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none appearance-none bg-white"
                        >
                          <option value="couple">Couple / Honeymoon</option>
                          <option value="family">Family</option>
                          <option value="friends">Friends Group</option>
                          <option value="solo">Solo Traveler</option>
                          <option value="corporate">Corporate</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-night border-b border-gray-100 pb-2">Trip Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Travel Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Duration (Days)</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          name="duration"
                          min="1"
                          max="30"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">No. of Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          name="guests"
                          min="1"
                          max="50"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Additional Message / Special Requests</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-azure focus:ring-4 focus:ring-azure/10 transition-all outline-none resize-none"
                      placeholder="Tell us about your preferences, specific places you want to visit, or any dietary requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-azure to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-azure/30 hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Enquiry <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enquiry;
