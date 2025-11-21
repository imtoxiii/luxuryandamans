import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, AtSign, CheckCircle, Loader2, ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <SEO
        title="Contact Us | Luxury Andamans"
        description="Get in touch with Andaman Luxury for personalized travel planning, inquiries, and support. We're here to help you plan your perfect Andaman Islands getaway."
        pathname={location.pathname}
        keywords="contact andaman luxury, travel inquiries, andaman islands travel support, luxury travel contact"
        extraStructuredData={[breadcrumbStructuredData]}
      />
      <Toaster position="top-right" />
      <Header />

      {/* Hero Section */}
      <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              We're Here For You
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Have questions about your upcoming trip? Want to customize your itinerary? 
              Our team of local experts is ready to assist you.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 order-2 lg:order-1 h-full"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-full flex flex-col">
              <div className="p-8 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold font-display mb-2 relative z-10">Contact Information</h3>
                <p className="text-slate-400 relative z-10">Reach out to us through any of these channels.</p>
              </div>
              
              <div className="p-8 space-y-8 flex-grow flex flex-col justify-center">
                <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">Phone</h4>
                    <p className="text-slate-500 text-sm mb-1">Mon-Sat from 9am to 6pm</p>
                    <a href="tel:+916297576826" className="text-teal-600 font-medium hover:text-teal-700 transition-colors block">+91 6297576826</a>
                    <a href="tel:+919433731478" className="text-teal-600 font-medium hover:text-teal-700 transition-colors block">+91 9433731478</a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-500 text-sm mb-1">Our friendly team is here to help.</p>
                    <a href="mailto:bookings@luxuryandamans.com" className="text-blue-600 font-medium hover:text-blue-700 transition-colors break-all">bookings@luxuryandamans.com</a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">Office</h4>
                    <p className="text-slate-500 text-sm mb-1">Come say hello at our office headquarters.</p>
                    <p className="text-slate-700 font-medium">
                      Andaman & Nicobar Islands<br />
                      India - 744101
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span className="font-medium">Business Hours:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
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
                    <h3 className="text-3xl font-bold text-slate-800 mb-2 font-display">Message Sent!</h3>
                    <p className="text-slate-600 text-lg max-w-md">
                      Thank you for contacting us. We have received your message and will respond shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-teal-50 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold font-display text-slate-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Your Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <div className="relative group">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                  <div className="relative group">
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400 resize-none"
                    placeholder="Tell us about your dream Andaman vacation..."
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-teal-500/30 hover:shadow-xl hover:scale-[1.02] transition-all group relative disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;