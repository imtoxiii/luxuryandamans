import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, Star, Clock, ArrowRight, MapPin, Shield, Users, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';
import { sendTelegramMessage, formatBookingMessage } from '../lib/telegram';
import toast, { Toaster } from 'react-hot-toast';


const Offer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        duration: '5',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // Filter premium packages for "God View"
    const featuredPackages = packages.slice(0, 6);

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
                tripType: 'Landing Page Enquiry',
                date: new Date().toISOString().split('T')[0]
            });

            await sendTelegramMessage(message);
            toast.success('Enquiry sent! We will call you within 10 mins.');
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen font-sans bg-slate-50 selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
            <SEO
                title="Exclusive Andaman Tour Packages | 50% OFF Limited Time"
                description="Book your dream Andaman vacation. Luxury stays, custom itineraries, and 24/7 support. Best price guarantee!"
            />
            <Header />
            <Toaster position="top-center" />

            {/* Hero Section - Cleaner & Brighter */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    {/* Increased overlay opacity for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-slate-900/90 z-10" />
                    <img
                        src="https://images.pexels.com/photos/1661375/pexels-photo-1661375.jpeg"
                        alt="Andaman Paradise"
                        className="w-full h-full object-cover scale-105"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white mt-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-8 hover:bg-white/20 transition-all cursor-default">
                            <Sparkles className="w-4 h-4 text-amber-300" />
                            <span className="tracking-wide uppercase text-xs text-white">Premium Travel Experience</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
                            Paradise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Awaits</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                            Experience the untouched beauty of Andaman with our curated luxury packages.
                            <span className="block mt-2 font-semibold text-white">Save up to 30% this season.</span>
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto">
                            <button
                                onClick={scrollToForm}
                                className="group w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(251,191,36,0.4)] transform hover:-translate-y-1"
                            >
                                Plan My Trip <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="https://wa.me/916297576826?text=Hi,%20I%20want%20to%20plan%20my%20Andaman%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                            >
                                <MessageCircle className="w-5 h-5" /> WhatsApp Us
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm md:text-base text-white/80 font-medium tracking-wide">
                            <div className="flex items-center gap-3">
                                <div className="p-1 rounded-full bg-amber-500/30 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-amber-300" /></div>
                                <span className="drop-shadow-sm">Verified Hotels</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-1 rounded-full bg-amber-500/30 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-amber-300" /></div>
                                <span className="drop-shadow-sm">24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-1 rounded-full bg-amber-500/30 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-amber-300" /></div>
                                <span className="drop-shadow-sm">Best Price Guarantee</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Trust Bar - Clean & Minimal */}
            <div className="bg-white border-b border-slate-100 py-12 overflow-hidden relative z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-80">
                        <div className="flex items-center gap-3 font-display font-bold text-xl text-slate-800"><Shield className="w-6 h-6 text-amber-500" /> SafeTravels</div>
                        <div className="flex items-center gap-3 font-display font-bold text-xl text-slate-800"><Star className="w-6 h-6 text-amber-500" /> 4.9/5 Reviews</div>
                        <div className="flex items-center gap-3 font-display font-bold text-xl text-slate-800"><Users className="w-6 h-6 text-amber-500" /> 10k+ Happy Guests</div>
                    </div>
                </div>
            </div>

            {/* Packages Section - Refined Cards */}
            <section className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Best Sellers</span>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">Curated Experiences</h2>
                        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
                            Choose from our most popular itineraries, crafted for luxury, adventure, and romance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />

                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 flex items-center gap-2 shadow-lg uppercase tracking-wide">
                                        <Clock className="w-3 h-3" /> {pkg.duration}
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <h3 className="text-3xl font-display font-bold mb-2 leading-tight">{pkg.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                                            <MapPin className="w-4 h-4 text-amber-400" />
                                            <span>Port Blair • Havelock • Neil</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="absolute -top-6 right-8 w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-6">
                                        <ArrowRight className="w-6 h-6 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>

                                    <p className="text-slate-600 text-base mb-8 line-clamp-3 leading-relaxed flex-grow font-light">
                                        {pkg.description}
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {pkg.features.slice(0, 3).map((feature, idx) => (
                                                <span key={idx} className="text-xs bg-slate-50 text-slate-600 px-4 py-2 rounded-full font-medium border border-slate-100">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-6 border-t border-slate-100 flex items-end justify-between">
                                            <div>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Starting From</p>
                                                <p className="text-3xl font-display font-bold text-slate-900">₹{pkg.price.toLocaleString()}</p>
                                            </div>
                                            <Link
                                                to={`/packages/${pkg.slug}`}
                                                className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-amber-500 transition-colors shadow-lg hover:shadow-amber-500/30"
                                            >
                                                View Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/packages" className="inline-flex items-center gap-3 text-slate-900 font-bold text-lg hover:text-amber-600 transition-colors group">
                            <span className="border-b-2 border-slate-900 group-hover:border-amber-600 pb-1 transition-colors">View All Packages</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Enhanced Layout */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-10 bg-amber-50/50 rounded-full blur-3xl opacity-50" />
                            <img
                                src="https://images.unsplash.com/photo-1596627689726-285629535f26?q=80&w=2574&auto=format&fit=crop"
                                alt="Luxury Experience"
                                className="relative rounded-[3rem] shadow-2xl w-full object-cover h-[700px] z-10"
                            />

                            {/* Floating Glass Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/50 z-20"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 text-white">
                                        <MessageCircle className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="font-display font-bold text-2xl text-slate-900 mb-1">24/7 On-Trip Support</p>
                                        <p className="text-slate-600 font-medium">We are always just a call away.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Why Choose Luxury Andamans</span>
                            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-10 leading-tight">We Don't Just Plan Trips, We Craft <span className="text-amber-500 italic">Memories</span></h2>

                            <div className="space-y-10">
                                {[
                                    { icon: Users, title: "Local Experts", desc: "Our team consists of locals who know every hidden gem of the islands." },
                                    { icon: Shield, title: "100% Transparent", desc: "No hidden charges. What you see is exactly what you pay." },
                                    { icon: Star, title: "Premium Experience", desc: "We partner only with the best rated hotels and service providers." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 * idx, duration: 0.5 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/30">
                                            <item.icon className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lead Capture Form - Modern & Clean */}
            <section id="quick-enquiry" className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                {/* Subtle Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
                    >
                        <div className="md:w-2/5 bg-slate-800 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-4xl font-display font-bold mb-6">Plan Your Dream Trip</h3>
                                <p className="text-slate-300 mb-10 text-lg leading-relaxed">Fill the form and get a callback within 10 minutes from our travel experts.</p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <span className="font-medium text-lg">+91 62975 76826</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <MessageCircle className="w-6 h-6" />
                                        </div>
                                        <span className="font-medium text-lg">Live Chat Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="md:w-3/5 p-12 bg-white">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-lg"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-lg"
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Duration</label>
                                        <div className="relative">
                                            <select
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-lg appearance-none"
                                            >
                                                {[3, 4, 5, 6, 7, 8, 9, 10].map(d => (
                                                    <option key={d} value={d}>{d} Days</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-amber-500 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                                    {!isSubmitting && <ArrowRight className="w-6 h-6" />}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Offer;
