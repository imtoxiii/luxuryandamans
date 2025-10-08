import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, AtSign } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { sendEmail } from '../lib/email';
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
      const success = await sendEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Contact Form Enquiry',
        message: formData.message.trim()
      });

      if (success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        toast.success('✅ Thank you! Your message has been sent successfully.');
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
    <div className="min-h-screen bg-gradient-to-br from-pearl via-white to-azure/5">
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
      <div className="relative overflow-hidden bg-gradient-to-br from-night via-night/95 to-azure/20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
              className="inline-flex items-center justify-center w-20 h-20 bg-azure/20 rounded-full mb-6"
            >
              <MessageCircle className="w-10 h-10 text-azure" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-pearl mb-6 bg-gradient-to-r from-pearl to-azure/80 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-pearl/80 text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible to help plan your perfect Andaman getaway.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      <main className="pt-16 pb-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-night to-night/95 rounded-2xl p-8 text-pearl h-full shadow-2xl border border-azure/10 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-azure/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-azure/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold mb-8 bg-gradient-to-r from-pearl to-azure/80 bg-clip-text text-transparent"
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
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-azure/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-14 h-14 bg-gradient-to-br from-azure/20 to-azure/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-azure/30 group-hover:to-azure/20 transition-all duration-300">
                          <Phone className="w-7 h-7 text-azure" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-pearl">Phone</h3>
                          <a href="tel:+916297576826" className="text-pearl/70 hover:text-azure transition-colors block mb-1">+91 6297576826</a>
                          <a href="tel:+919433731478" className="text-pearl/70 hover:text-azure transition-colors block">+91 9433731478</a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-azure/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-14 h-14 bg-gradient-to-br from-azure/20 to-azure/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-azure/30 group-hover:to-azure/20 transition-all duration-300">
                          <Mail className="w-7 h-7 text-azure" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-pearl">Email</h3>
                          <a href="mailto:bookings@luxuryandamans.com" className="text-pearl/70 hover:text-azure transition-colors block">bookings@luxuryandamans.com</a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-azure/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-14 h-14 bg-gradient-to-br from-azure/20 to-azure/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-azure/30 group-hover:to-azure/20 transition-all duration-300">
                          <MapPin className="w-7 h-7 text-azure" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-pearl">Office Address</h3>
                          <p className="text-pearl/70">
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
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-azure/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-14 h-14 bg-gradient-to-br from-azure/20 to-azure/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-azure/30 group-hover:to-azure/20 transition-all duration-300">
                          <Clock className="w-7 h-7 text-azure" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-pearl">Business Hours</h3>
                          <p className="text-pearl/70">
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
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-azure/10 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-azure/5 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold mb-2 bg-gradient-to-r from-night to-azure/80 bg-clip-text text-transparent"
                  >
                    Send us a Message
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-night/60 mb-8"
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
                        <label className="block text-sm font-semibold text-night mb-3 flex items-center">
                          <User className="w-4 h-4 mr-2 text-azure" />
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-all duration-300 bg-pearl/30 focus:bg-white hover:border-azure/30"
                            placeholder="John Doe"
                            required
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="group"
                      >
                        <label className="block text-sm font-semibold text-night mb-3 flex items-center">
                          <AtSign className="w-4 h-4 mr-2 text-azure" />
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-all duration-300 bg-pearl/30 focus:bg-white hover:border-azure/30"
                            placeholder="john@example.com"
                            required
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="group"
                    >
                      <label className="block text-sm font-semibold text-night mb-3">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-all duration-300 bg-pearl/30 focus:bg-white hover:border-azure/30"
                          placeholder="How can we help you?"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="group"
                    >
                      <label className="block text-sm font-semibold text-night mb-3 flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2 text-azure" />
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-4 rounded-xl border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-all duration-300 bg-pearl/30 focus:bg-white hover:border-azure/30 resize-none"
                          placeholder="Tell us about your dream Andaman vacation..."
                          required
                        ></textarea>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
                        className="group relative px-8 py-4 bg-gradient-to-r from-azure to-azure/90 text-pearl rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-azure/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-azure/90 to-azure opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center space-x-3">
                          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                          <motion.div
                            animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0, ease: "linear" }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
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