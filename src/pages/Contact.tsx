import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { sendEmail } from '../lib/email';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Local image paths - Add your images to src/assets/images/contact/
  const localImages = {
    // officeImage: '/src/assets/images/contact/office-exterior.jpg',
    // mapImage: '/src/assets/images/contact/location-map.jpg',
    // teamImage: '/src/assets/images/contact/team-photo.jpg',
    // Replace these with your local image paths
  };

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

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Contact Us"
        description="Get in touch with Andaman Luxury for personalized travel planning, inquiries, and support. We're here to help you plan your perfect Andaman Islands getaway."
        keywords="contact andaman luxury, travel inquiries, andaman islands travel support, luxury travel contact"
      />
      <Toaster position="top-right" />
      <Header />
      
      {/* 
      OPTIONAL: Add a hero section with local images
      <div className="relative h-[40vh] overflow-hidden">
        <img 
          src={localImages.officeImage}
          alt="Our Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
      </div>
      */}
      
      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-night mb-4">Get in Touch</h1>
            <p className="text-night/70 text-lg">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-night rounded-xl p-8 text-pearl h-full">
                {/* 
                OPTIONAL: Add office image
                <div className="mb-8">
                  <img
                    src={localImages.officeImage}
                    alt="Our Office"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                */}
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <a href="tel:+916297576826" className="text-pearl/80 hover:text-azure transition-colors block">+91 6297576826</a>
                      <a href="tel:+919433731478" className="text-pearl/80 hover:text-azure transition-colors block">+91 9433731478</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-pearl/80">bookings@luxuryandamans.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                      <p className="text-pearl/80">
                        
                        Andaman & Nicobar Islands<br />
                        India - 744101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-pearl/80">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      </p>
                    </div>
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
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-night mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-night mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-night mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-night mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg border border-azure/20 focus:border-azure focus:ring-2 focus:ring-azure/20 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
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