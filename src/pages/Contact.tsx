import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, AtSign, CheckCircle, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { sendTelegramMessage, formatContactMessage } from '../lib/telegram';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      setIsSubmitting(false);
      return;
    }

    try {
      const message = formatContactMessage(formData);
      const success = await sendTelegramMessage(message);

      if (success) {
        setIsSuccess(true);
        toast.success('✅ Thank you! Your message has been sent successfully.');
        setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
            setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('❌ Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact Us',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}${location.pathname}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <SEO
        title="Contact Us"
        description="Get in touch with Andaman Luxury for personalized travel planning, inquiries, and support. We're here to help you plan your perfect Andaman Islands getaway."
        pathname={location.pathname}
        keywords="contact andaman luxury, travel inquiries, andaman islands travel support, luxury travel contact"
        extraStructuredData={[breadcrumbStructuredData]}
      />
      <Toaster position="top-right" />
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-slate-900 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="relative container max-w-6xl mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl mb-8 border border-white/10 shadow-2xl"
            >
              <MessageCircle className="w-10 h-10 text-purple-400" />
            </motion.div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Travel Assistance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl font-display">
              Get in <span className="text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text">Touch</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible to help plan your perfect Andaman getaway.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05"/>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </div>
      
      <main className="pt-16 pb-20 px-4 bg-slate-50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-slate-900 rounded-3xl p-8 text-white h-full shadow-2xl shadow-slate-200 border border-slate-800 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold mb-8 tracking-tight font-display"
                  >
                    Contact Information
                  </motion.h2>
                  
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all duration-300">
                          <Phone className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-slate-100">Phone</h3>
                          <a href="tel:+916297576826" className="text-slate-400 hover:text-white transition-colors block text-sm">+91 6297576826</a>
                          <a href="tel:+919433731478" className="text-slate-400 hover:text-white transition-colors block text-sm mt-1">+91 9433731478</a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-all duration-300">
                          <Mail className="w-6 h-6 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-slate-100">Email</h3>
                          <a href="mailto:bookings@luxuryandamans.com" className="text-slate-400 hover:text-white transition-colors block text-sm break-all">bookings@luxuryandamans.com</a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/30 transition-all duration-300">
                          <MapPin className="w-6 h-6 text-rose-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-slate-100">Office Address</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            Andaman & Nicobar Islands<br />
                            India - 744101
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-all duration-300">
                          <Clock className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-slate-100">Business Hours</h3>
                          <p className="text-slate-400 text-sm">
                            Monday - Saturday: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                {/* Success Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                      >
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                      <p className="text-slate-600 text-lg max-w-md">
                        Thank you for contacting us. We have received your message and will respond shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight font-display"
                  >
                    Send us a Message
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-slate-500 mb-8"
                  >
                    Fill out the form below and we'll get back to you as soon as possible.
                  </motion.p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="group"
                      >
                        <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                          <User className="w-4 h-4 mr-2 text-purple-500" />
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none bg-slate-50 focus:bg-white"
                            placeholder="John Doe"
                            required
                            autoComplete="name"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="group"
                      >
                        <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                          <AtSign className="w-4 h-4 mr-2 text-purple-500" />
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none bg-slate-50 focus:bg-white"
                            placeholder="john@example.com"
                            required
                            autoComplete="email"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="group"
                    >
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none bg-slate-50 focus:bg-white"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="group"
                    >
                      <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2 text-purple-500" />
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none bg-slate-50 focus:bg-white resize-none min-h-[140px]"
                          placeholder="Tell us about your dream Andaman vacation..."
                          required
                        ></textarea>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="flex justify-end"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-[1.02] transition-all group relative disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <div className="relative flex items-center justify-center space-x-3">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </div>
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;