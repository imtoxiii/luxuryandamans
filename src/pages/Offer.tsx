import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, Clock, ArrowRight, MapPin, User, Mail, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';
import { experiences } from '../data/experiences';
import { sendTelegramMessage, formatBookingMessage } from '../lib/telegram';
import toast, { Toaster } from 'react-hot-toast';
import DiscountPopup from '../components/DiscountPopup';

const Offer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        duration: '5',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const activitiesRef = useRef<HTMLDivElement>(null);

    // Filter specific packages
    const featuredPackageSlugs = ['luxury-escape', 'honeymoon-bliss', 'family-paradise', 'budget-friendly', 'adventure-thrill'];
    const featuredPackages = packages.filter(pkg => featuredPackageSlugs.includes(pkg.slug));
    const displayPackages = featuredPackages.length > 0 ? featuredPackages : packages.slice(0, 5);

    // Filter specific activities
    const displayActivities = experiences.filter(exp => ['scuba-diving', 'snorkeling', 'sunset-cruises', 'sea-walk'].includes(exp.slug));

    const nextActivity = () => {
        setCurrentActivityIndex((prev) => (prev + 1) % displayActivities.length);
    };

    const prevActivity = () => {
        setCurrentActivityIndex((prev) => (prev - 1 + displayActivities.length) % displayActivities.length);
    };

    const scrollToForm = () => {
        const formElement = document.getElementById('quick-enquiry');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const message = formatBookingMessage({
                ...formData,
                tripType: 'General Enquiry',
                date: new Date().toISOString().split('T')[0]
            });

            await sendTelegramMessage(message);
            toast.success('Enquiry sent successfully! We will contact you shortly.');
            setFormData({ name: '', phone: '', email: '', duration: '5', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send enquiry. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen font-sans bg-pearl">
            <SEO
                title="Exclusive Andaman Tour Packages | Luxury Andamans"
                description="Book your dream Andaman vacation with our exclusive offers. Luxury stays, custom itineraries, and 24/7 support. Call now for best rates!"
            />
            <Header />
            <Toaster position="top-right" />
            <DiscountPopup />

            {/* Hero Section */}
            <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1540206395-688085723adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Andaman Beach"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-azure/80 backdrop-blur-sm text-sm font-semibold mb-4 border border-white/20">
                            Limited Time Offer
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                            Experience the Magic of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-teal-400">Andaman Islands</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                            Unbeatable packages for Honeymooners, Families, and Adventure Seekers.
                            Book now and get exclusive perks!
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a href="tel:+916297576826" className="w-full md:w-auto px-8 py-4 bg-white text-night rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10">
                                <Phone className="w-5 h-5" /> Call Now
                            </a>
                            <a href="https://wa.me/916297576826?text=Hi,%20I%20am%20interested%20in%20an%20Andaman%20tour%20package." target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20">
                                <MessageCircle className="w-5 h-5" /> WhatsApp
                            </a>
                            <button onClick={scrollToForm} className="w-full md:w-auto px-8 py-4 bg-azure text-white rounded-full font-bold text-lg hover:bg-azure/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-azure/20">
                                Get Quote <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Vertical Packages Section (Compact Cards) */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-night mb-4">Trending Packages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-sans">
                            Handpicked itineraries for the perfect vacation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {displayPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row h-auto sm:h-52 group"
                            >
                                <div className="sm:w-2/5 relative h-48 sm:h-full overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 font-sans">
                                        <Clock className="w-3 h-3" /> {pkg.duration}
                                    </div>
                                </div>

                                <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-display font-bold text-night group-hover:text-azure transition-colors leading-tight">{pkg.title}</h3>
                                            <span className="text-lg font-bold text-azure whitespace-nowrap font-sans">₹{pkg.price.toLocaleString()}</span>
                                        </div>

                                        <p className="text-gray-500 text-sm mb-3 line-clamp-2 font-sans">{pkg.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {pkg.features.slice(0, 3).map((feature, idx) => (
                                                <span key={idx} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full font-sans">
                                                    <Check className="w-3 h-3 text-green-500" /> {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 mt-2">
                                        <Link
                                            to={`/packages/${pkg.slug}`}
                                            className="flex-1 px-3 py-2 bg-gray-100 text-night rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm text-center font-sans"
                                        >
                                            View Details
                                        </Link>
                                        <button
                                            onClick={scrollToForm}
                                            className="flex-1 px-3 py-2 bg-azure text-white rounded-lg font-semibold hover:bg-azure/90 transition-colors shadow-md shadow-azure/20 text-sm text-center font-sans"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Carousel Section */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-night mb-4">Unforgettable Experiences</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Swipe through the best activities Andaman has to offer.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevActivity}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors text-night"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextActivity}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors text-night"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Carousel Container */}
                        <div className="overflow-hidden rounded-3xl shadow-2xl bg-night relative h-[400px] md:h-[500px]">
                            <motion.div
                                key={currentActivityIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full relative"
                            >
                                <img
                                    src={displayActivities[currentActivityIndex].image}
                                    alt={displayActivities[currentActivityIndex].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{displayActivities[currentActivityIndex].title}</h3>
                                        <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl">{displayActivities[currentActivityIndex].shortDescription}</p>
                                        <button onClick={scrollToForm} className="px-8 py-3 bg-azure text-white rounded-full font-bold hover:bg-azure/90 transition-colors">
                                            Book This Experience
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {displayActivities.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentActivityIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${idx === currentActivityIndex ? 'bg-azure w-8' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <div id="quick-enquiry" className="py-20 bg-night relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-4xl font-display font-bold mb-6">Ready to Plan Your Trip?</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Get a customized quote within 30 minutes. Our travel experts are ready to help you plan the perfect Andaman vacation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <Phone className="w-6 h-6 text-azure" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Call Us Anytime</h4>
                                        <p className="text-gray-400">+91 62975 76826</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">WhatsApp Support</h4>
                                        <p className="text-gray-400">Instant replies 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                            <h3 className="text-2xl font-bold text-night mb-6">Get a Free Quote</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-azure focus:border-transparent outline-none"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-azure focus:border-transparent outline-none"
                                                placeholder="+91 98765 43210"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-azure focus:border-transparent outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <select
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-azure focus:border-transparent outline-none appearance-none"
                                        >
                                            {[...Array(8)].map((_, i) => (
                                                <option key={i} value={i + 3}>{i + 3} Days</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-azure focus:border-transparent outline-none resize-none"
                                        placeholder="Tell us about your travel plans..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-azure text-white rounded-xl font-bold text-lg hover:bg-azure/90 transition-all shadow-lg shadow-azure/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Offer;
