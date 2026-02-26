import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Star, Clock, ArrowRight, MapPin, Shield, Users, Sparkles, Calendar, Mail, Copy, X, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';
import { getPackageCardImage } from '../lib/imageLoader';
import { sendTelegramMessage, formatBookingMessage } from '../lib/telegram';
import toast, { Toaster } from 'react-hot-toast';
import { family4n5d } from '../data/packages/family-4n5d';


const Offer = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        duration: '5',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const packagesRef = useRef<HTMLElement>(null);

    // Dynamic City Logic
    const getCityFromUrl = () => {
        const searchParams = new URLSearchParams(location.search);
        const cityParam = searchParams.get('city');
        const pathSearch = location.search.toLowerCase();

        if (cityParam) return cityParam.toLowerCase();
        if (pathSearch.includes('bangalore') || pathSearch.includes('bengaluru')) return 'bangalore';
        if (pathSearch.includes('mumbai')) return 'mumbai';
        if (pathSearch.includes('delhi') || pathSearch.includes('new delhi')) return 'delhi';
        if (pathSearch.includes('chennai')) return 'chennai';
        if (pathSearch.includes('kolkata')) return 'kolkata';
        if (pathSearch.includes('hyderabad')) return 'hyderabad';
        if (pathSearch.includes('ahmedabad')) return 'ahmedabad';
        if (pathSearch.includes('pune')) return 'pune';

        return 'default';
    };

    const cityKey = getCityFromUrl();

    // Configuration for each city's theme and visuals
    const cityConfig: Record<string, {
        name: string,
        label: string,
        airport: string,
        colors: { from: string, to: string, text: string, bg: string, badge: string },
        image: string
    }> = {
        bangalore: {
            name: "Bangalore",
            label: "Bangalore to Andaman Specials",
            airport: "Kempegowda Int'l Airport",
            colors: { from: "from-emerald-400", to: "to-teal-600", text: "text-emerald-400", bg: "bg-emerald-950", badge: "bg-emerald-500" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        mumbai: {
            name: "Mumbai",
            label: "Mumbai to Andaman Specials",
            airport: "Chhatrapati Shivaji Maharaj Int'l",
            colors: { from: "from-amber-300", to: "to-yellow-600", text: "text-amber-400", bg: "bg-slate-900", badge: "bg-amber-500" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        delhi: {
            name: "Delhi",
            label: "Delhi to Andaman Specials",
            airport: "Indira Gandhi Int'l Airport",
            colors: { from: "from-rose-400", to: "to-orange-600", text: "text-rose-400", bg: "bg-slate-900", badge: "bg-rose-500" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        chennai: {
            name: "Chennai",
            label: "Chennai to Andaman Specials",
            airport: "Chennai Int'l Airport",
            colors: { from: "from-orange-400", to: "to-red-600", text: "text-orange-400", bg: "bg-orange-950", badge: "bg-orange-500" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        kolkata: {
            name: "Kolkata",
            label: "Kolkata to Andaman Specials",
            airport: "Netaji Subhash Chandra Bose Int'l",
            colors: { from: "from-red-400", to: "to-rose-700", text: "text-red-400", bg: "bg-red-950", badge: "bg-red-600" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        hyderabad: {
            name: "Hyderabad",
            label: "Hyderabad to Andaman Specials",
            airport: "Rajiv Gandhi Int'l Airport",
            colors: { from: "from-cyan-400", to: "to-blue-600", text: "text-cyan-400", bg: "bg-slate-900", badge: "bg-cyan-600" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        pune: {
            name: "Pune",
            label: "Pune to Andaman Specials",
            airport: "Pune Int'l Airport",
            colors: { from: "from-violet-400", to: "to-purple-600", text: "text-violet-400", bg: "bg-slate-900", badge: "bg-violet-600" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        ahmedabad: {
            name: "Ahmedabad",
            label: "Ahmedabad to Andaman Specials",
            airport: "Sardar Vallabhbhai Patel Int'l",
            colors: { from: "from-yellow-400", to: "to-orange-500", text: "text-yellow-400", bg: "bg-slate-900", badge: "bg-yellow-600" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        },
        default: {
            name: "",
            label: "Exclusive Andaman Packages",
            airport: "",
            colors: { from: "from-amber-200", to: "to-yellow-500", text: "text-amber-300", bg: "bg-slate-900", badge: "bg-amber-500" },
            image: "https://res.cloudinary.com/dyjofqrwl/image/upload/v1765701146/pexels-ollivves-931018_l0jblf.webp"
        }
    };

    const currentCity = cityConfig[cityKey] || cityConfig['default'];
    // Use the specific city image if available, else fallback to the generic Andaman one if it's default
    const heroImage = currentCity.image;
    const isGeneric = cityKey === 'default';

    // Show 3 packages - 2 popular + 1 family package
    const featuredPackages = [packages[0], packages[1], family4n5d];

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
                tripType: `Landing Page Enquiry (${currentCity.name || 'Generic'})`,
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

    // Detect when packages section is in view
    useEffect(() => {
        const handleScroll = () => {
            if (packagesRef.current) {
                const rect = packagesRef.current.getBoundingClientRect();
                const isVisible = rect.top <= 150;
                setShowStickyBar(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle contact button click - show popup on desktop
    const handleContactClick = (e: React.MouseEvent, type: 'phone' | 'email') => {
        // Check if desktop (screen width > 768px)
        if (window.innerWidth > 768) {
            e.preventDefault(); // Prevent default for both to handle manually
            if (type === 'phone') {
                setShowContactPopup(true);
            } else {
                // For email: Open Gmail in new tab AND show popup
                window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=luxuryandamans@gmail.com&su=Andaman%20Trip%20Enquiry&body=Hi,%0D%0A%0D%0AI%20want%20to%20plan%20my%20Andaman%20trip.%0D%0A%0D%0APlease%20contact%20me%20with%20more%20details.%0D%0A%0D%0AThank%20you!",
                    "_blank"
                );
                setShowEmailPopup(true);
            }
        }
        // On mobile, let the default action happen (tel: or mailto:)
    };

    const copyToClipboard = (text: string, type: 'phone' | 'email') => {
        navigator.clipboard.writeText(text);
        if (type === 'phone') {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
        toast.success('Copied to clipboard!');
    };

    return (
        <div className={`min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden pb-24 md:pb-0 ${currentCity.colors.bg}`}>
            <SEO
                title={`Exclusive Andaman Packages ${currentCity.name ? `from ${currentCity.name}` : ''} | 50% OFF | Starting ₹14,999`}
                description={`Book your dream Andaman vacation ${currentCity.name ? `from ${currentCity.name}` : ''}. Luxury stays from ₹14,999/person, custom itineraries, all-inclusive packages with ferry, hotels & activities. 24/7 on-trip support. Limited time 50% OFF.`}
                pathname={location.pathname}
                keywords={`andaman packages ${currentCity.name ? `from ${currentCity.name.toLowerCase()}` : ''}, andaman tour offer, cheap andaman packages, andaman holiday deals, andaman discount packages, best andaman offer 2026, andaman package under 20000, andaman couple package offer, andaman family deal, andaman honeymoon offer, luxury andaman discount, andaman all inclusive deal, andaman last minute offer, andaman packages on emi, andaman flash sale, andaman weekend getaway, andaman short trip package, andaman 3 day package, andaman special offer today, cheapest andaman deal, andaman booking offer`.trim()}
                targetAudience="all"
                faqData={[
                    {
                        question: `What is the cheapest Andaman package ${currentCity.name ? `from ${currentCity.name}` : 'available'}?`,
                        answer: `Our most affordable Andaman package ${currentCity.name ? `from ${currentCity.name}` : ''} starts at ₹14,999 per person for 4N/5D. This includes hotel stay, ferry transfers, sightseeing at Port Blair, Havelock & Neil Island, daily breakfast, and airport pickup/drop. ${currentCity.name ? `Flights from ${currentCity.name} are not included but we can help you find the best deals.` : 'Flight booking assistance is also available.'}`
                    },
                    {
                        question: "Is the 50% OFF offer on Andaman packages real?",
                        answer: "Yes, the 50% OFF is valid on select packages during the current promotional period. The discount applies to base package prices and includes accommodation, transfers, and activities. Terms apply — call us at +91 62975 76826 for exact pricing based on your travel dates and group size."
                    },
                    {
                        question: "What do Luxury Andamans packages include?",
                        answer: "All our packages include: 3-5 star hotel/resort stay, inter-island ferry transfers (Govt. or Makruzz/Nautika), airport pickup & drop, daily breakfast, sightseeing tours, water activities (snorkeling/scuba options), and 24/7 on-trip support. Premium packages add candle-light dinner, spa, and private yacht cruises."
                    }
                ]}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": `Andaman Tour Package ${currentCity.name ? `from ${currentCity.name}` : ''}`,
                    "description": `Exclusive Andaman holiday packages ${currentCity.name ? `from ${currentCity.name}` : ''} with luxury stays, ferry transfers and guided tours.`,
                    "url": `https://luxuryandamans.com${location.pathname}`,
                    "brand": {
                        "@type": "Organization",
                        "name": "Luxury Andamans"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "lowPrice": "14999",
                        "highPrice": "150000",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "offerCount": "10+"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1200",
                        "bestRating": "5"
                    }
                }}
            />
            <Header />
            <Toaster position="top-center" />

            {/* Contact Info Popup - Phone */}
            <AnimatePresence>
                {showContactPopup && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" onClick={() => setShowContactPopup(false)}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl z-[1000]"
                        >
                            <button
                                onClick={() => setShowContactPopup(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-600 mb-6">We're here to help you plan your dream vacation</p>

                                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 mb-6">
                                    <p className="text-sm text-slate-500 mb-2 font-medium">Phone Number</p>
                                    <p className="text-3xl font-display font-bold text-slate-900 mb-4">+91 62975 76826</p>
                                    <button
                                        onClick={() => copyToClipboard('+916297576826', 'phone')}
                                        className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        {copiedPhone ? (
                                            <><Check className="w-4 h-4" /> Copied!</>
                                        ) : (
                                            <><Copy className="w-4 h-4" /> Copy Number</>
                                        )}
                                    </button>
                                </div>

                                <p className="text-xs text-slate-400">Available 24/7 for your queries</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Email Info Popup */}
            <AnimatePresence>
                {showEmailPopup && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" onClick={() => setShowEmailPopup(false)}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white/95 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl z-[1000] overflow-hidden"
                        >
                            <button
                                onClick={() => setShowEmailPopup(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>

                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">Email Us</h3>
                                <p className="text-slate-600 mb-4 text-sm">Send us your queries and we'll respond quickly</p>

                                <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl p-5 mb-4 border border-blue-100/60 shadow-sm group hover:shadow-md transition-all duration-300">
                                    <p className="text-[10px] text-blue-600/70 mb-1 font-bold uppercase tracking-widest">Email Address</p>
                                    <p className="text-xl font-display font-bold text-slate-800 mb-4 tracking-tight break-all">luxuryandamans@gmail.com</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => copyToClipboard('luxuryandamans@gmail.com', 'email')}
                                            className="w-full py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                                        >
                                            {copiedEmail ? (
                                                <><Check className="w-3.5 h-3.5 text-green-500" /> Copied</>
                                            ) : (
                                                <><Copy className="w-3.5 h-3.5" /> Copy</>
                                            )}
                                        </button>
                                        <a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=luxuryandamans@gmail.com&su=Andaman%20Trip%20Enquiry&body=Hi,%0D%0A%0D%0AI%20want%20to%20plan%20my%20Andaman%20trip.%0D%0A%0D%0APlease%20contact%20me%20with%20more%20details.%0D%0A%0D%0AThank%20you!"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                                        >
                                            <Mail className="w-3.5 h-3.5" /> Gmail
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-5 border border-amber-100/60 shadow-sm group hover:shadow-md transition-all duration-300">
                                    <p className="text-[10px] text-amber-600/70 mb-1 font-bold uppercase tracking-widest">Or Call Us</p>
                                    <p className="text-2xl font-display font-bold text-slate-800 mb-3 tracking-tight">+91 62975 76826</p>
                                    <button
                                        onClick={() => copyToClipboard('+916297576826', 'phone')}
                                        className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
                                    >
                                        {copiedPhone ? (
                                            <><Check className="w-3.5 h-3.5" /> Copied</>
                                        ) : (
                                            <><Copy className="w-3.5 h-3.5" /> Copy Number</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Hero Section - Main with dynamic content */}
            <div className={`relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pb-12 pt-24 md:pt-0`}>
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0 text-center"
                >
                    {/* Very light overlay to ensure text readability but keep image extremely bright and visible */}
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <img
                        src={heroImage}
                        alt="Andaman Paradise"
                        className="w-full h-full object-cover scale-105"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white mt-10 md:mt-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className={`inline-flex items-center gap-2 py-2 px-6 rounded-full text-white text-sm font-bold mb-8 shadow-lg shadow-black/20 ${currentCity.colors.badge}`}>
                            <MapPin className="w-4 h-4" />
                            <span className="tracking-wide uppercase text-xs">{currentCity.label}</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.2] tracking-tight drop-shadow-2xl">
                            <span className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">Planning an Andaman Trip</span><br />
                            <span className="inline-block mt-2 transform -rotate-1">
                                <span className={`bg-white/95 backdrop-blur-xl rounded-2xl px-4 md:px-6 py-1 md:py-2 shadow-2xl border border-white/50 text-3xl md:text-5xl lg:text-7xl inline-block`}>
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentCity.colors.from} ${currentCity.colors.to} font-extrabold tracking-tight`}>
                                        {isGeneric ? 'for your loved ones?' : `from ${currentCity.name}?`}
                                    </span>
                                </span>
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl mx-auto font-light leading-relaxed drop-shadow-sm">
                            Premium couple & family packages. <br className="hidden md:block" />
                            <span className="font-semibold text-white">Direct local pricing.</span>
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 w-full max-w-sm mx-auto">
                            <a
                                href="tel:+916297576826"
                                onClick={(e) => handleContactClick(e, 'phone')}
                                className="group relative w-full px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 rounded-full border border-slate-200 opacity-50 animate-pulse"></div>
                                <Phone className={`w-5 h-5 fill-current ${currentCity.name ? currentCity.colors.text : 'text-amber-600'}`} />
                                <span>Call for Best Price</span>
                            </a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-white/90">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-amber-400" />
                                <span>Govt. Registered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-amber-400" />
                                <span>4.9/5 Rated</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-amber-400" />
                                <span>10k+ Happy Guests</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Human Trust Section */}
            <section className="bg-white py-12 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white shadow-md">
                            {/* Placeholder for Sumeet's image */}
                            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white font-bold text-xl">S</div>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-lg font-bold text-slate-800 mb-1">"Hi, I’m Sumeet – Local Andaman Travel Expert."</p>
                            <p className="text-slate-600 mb-3">Call me directly for honest advice and best local pricing. No hidden costs.</p>
                            <a
                                href={`https://wa.me/916297576826?text=Hi,%20I%E2%80%99m%20planning%20an%20Andaman%20trip${currentCity.name ? `%20from%20${currentCity.name}` : ''}.%20Please%20guide%20me.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline"
                            >
                                <MessageCircle className="w-5 h-5" /> Chat with me on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Action Bar - Appears on Scroll */}
            <motion.div
                className="fixed left-0 right-0 z-[100] top-[72px] md:top-auto md:bottom-0"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: showStickyBar ? 1 : 0,
                    y: showStickyBar ? 0 : 100
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
            >
                <div className="bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-lg">
                    <div className="container mx-auto px-4 py-3 md:py-1.5">
                        <div className="flex items-center justify-between gap-3 max-w-4xl mx-auto">
                            <a
                                href="tel:+916297576826"
                                onClick={(e) => handleContactClick(e, 'phone')}
                                className="hidden md:flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 min-w-[60px] md:min-w-0 text-slate-600 hover:text-amber-600 transition-colors group"
                            >
                                <div className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                                    <Phone className="w-5 h-5 md:w-4 md:h-4 text-amber-600" />
                                </div>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">Call</span>
                            </a>

                            <button
                                onClick={scrollToForm}
                                className="flex-1 md:flex-initial md:px-4 bg-slate-900 text-white h-12 md:h-10 rounded-xl font-bold text-sm md:text-xs shadow-lg shadow-slate-900/20 hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Sparkles className="w-4 h-4 md:w-3.5 md:h-3.5 text-amber-400" />
                                <span>Get Best Quote</span>
                            </button>

                            <a
                                href="https://wa.me/916297576826?text=Hi,%20I%20want%20to%20plan%20my%20Andaman%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 min-w-[60px] md:min-w-0 text-slate-600 hover:text-green-600 transition-colors group"
                            >
                                <div className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                                    <MessageCircle className="w-5 h-5 md:w-4 md:h-4 text-green-600" />
                                </div>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">WhatsApp</span>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=luxuryandamans@gmail.com&su=Andaman%20Trip%20Enquiry&body=Hi,%0D%0A%0D%0AI%20want%20to%20plan%20my%20Andaman%20trip.%0D%0A%0D%0APlease%20contact%20me%20with%20more%20details.%0D%0A%0D%0AThank%20you!"
                                onClick={(e) => handleContactClick(e, 'email')}
                                className="hidden md:flex flex-row items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wide">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* Packages Section - Refined Cards */}
            <section ref={packagesRef} className="py-16 md:py-24 bg-slate-50 relative">
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
                        {featuredPackages.map((pkg, index) => {
                            const cardImage = getPackageCardImage(pkg.id || pkg.slug) || pkg.image;
                            const isMostBooked = index === 1; // Highlight the 2nd one

                            return (
                                <motion.div
                                    key={pkg.slug}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className={`group relative ${isMostBooked ? 'md:-mt-4 md:mb-4' : ''}`}
                                >
                                    {isMostBooked && (
                                        <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
                                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20 flex items-center gap-1.5 uppercase tracking-wide">
                                                <Star className="w-3.5 h-3.5 fill-current" /> Most Booked by {currentCity.name || 'Couples'}
                                            </span>
                                        </div>
                                    )}

                                    <div
                                        onClick={() => window.dispatchEvent(new CustomEvent('openDiscountPopup', { detail: { package: pkg.title } }))}
                                        className={`block bg-white rounded-[2.5rem] overflow-hidden shadow-lg transition-all duration-500 border h-full cursor-pointer ${isMostBooked
                                            ? 'shadow-xl shadow-amber-500/10 border-amber-200 scale-100 md:scale-105 z-10'
                                            : 'border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2'
                                            }`}
                                    >
                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={cardImage}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />

                                            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 flex items-center gap-2 shadow-lg uppercase tracking-wide">
                                                <Clock className="w-3 h-3" /> {pkg.duration}
                                            </div>

                                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                                <h3 className="text-2xl font-display font-bold mb-2 leading-tight">{pkg.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                                                    <MapPin className="w-4 h-4 text-amber-400" />
                                                    <span>Port Blair • Havelock • Neil</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8 flex flex-col relative text-left">
                                            <p className="text-slate-600 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed font-normal">
                                                {pkg.description}
                                            </p>

                                            <div className="space-y-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {pkg.features.slice(0, 3).map((feature, idx) => (
                                                        <span key={idx} className="text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full font-medium border border-slate-100">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="pt-6 border-t border-slate-100">
                                                    <div className="flex items-end justify-between mb-2">
                                                        <div>
                                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Starting From</p>
                                                            <p className="text-3xl font-display font-bold text-slate-900">₹{pkg.price.toLocaleString()}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-red-500 font-medium mb-4 flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> Ferry seats are limited – prices may change
                                                    </p>

                                                    <a
                                                        href="tel:+916297576826"
                                                        onClick={(e) => handleContactClick(e, 'phone')}
                                                        className={`w-full py-4 text-white rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${isMostBooked
                                                            ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-amber-500/30'
                                                            : 'bg-slate-900 hover:bg-slate-800'
                                                            }`}
                                                    >
                                                        <Phone className="w-4 h-4" /> Call for Best Price
                                                    </a>

                                                    <Link
                                                        to={`/packages/${pkg.slug}?from=offer`}
                                                        className="block text-center mt-3 text-xs font-bold text-slate-500 hover:text-amber-600 underline"
                                                    >
                                                        View Full Itinerary
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-500 mb-4 font-medium">Not suitable? We customize.</p>
                        <a
                            href="tel:+916297576826"
                            onClick={(e) => handleContactClick(e, 'phone')}
                            className="inline-flex items-center gap-3 text-amber-600 font-bold text-lg hover:text-amber-700 transition-colors group"
                        >
                            <span className="border-b-2 border-amber-600/30 group-hover:border-amber-600 pb-1 transition-colors">Call us for a custom-made itinerary</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Adventure Awaits</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Enhance Your Trip</h2>
                        <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Scuba Diving",
                                image: "https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg",
                                desc: "Explore the vibrant coral reefs and marine life of the Andaman Sea.",
                                link: "/experiences/scuba-diving"
                            },
                            {
                                title: "Snorkeling",
                                image: "https://images.pexels.com/photos/2744596/pexels-photo-2744596.jpeg",
                                desc: "Swim alongside colorful schools of fish in crystal clear shallow waters.",
                                link: "/experiences/snorkeling"
                            },
                            {
                                title: "Parasailing",
                                image: "https://images.pexels.com/photos/26898889/pexels-photo-26898889.jpeg",
                                desc: "Soar high above the coastline for a breathtaking bird's eye view.",
                                link: "/experiences/parasailing"
                            }
                        ].map((activity, idx) => (
                            <a
                                key={idx}
                                href={`https://wa.me/916297576826?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(activity.title)}%20in%20Andaman.`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative rounded-3xl overflow-hidden cursor-pointer h-[500px]"
                                >
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-3xl font-display font-bold text-white mb-3">{activity.title}</h3>
                                        <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {activity.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/experiences"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-amber-500 transition-all group shadow-lg hover:shadow-amber-500/25"
                        >
                            View All Experiences
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
                            <div className="absolute -inset-4 bg-amber-50/50 rounded-full blur-xl opacity-30" />
                            <img
                                src="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg"
                                alt="Luxury Experience"
                                className="relative rounded-[3rem] shadow-2xl w-full object-cover h-[700px] z-10"
                            />

                            {/* Floating Glass Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl border border-white/50 z-20"
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
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400 uppercase tracking-wider">Call Us 24/7</span>
                                            <span className="font-medium text-lg">+91 62975 76826</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <MessageCircle className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp Support</span>
                                            <span className="font-medium text-lg">Live Chat Available</span>
                                        </div>
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

            {/* Mobile Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-xl border-t border-gray-100/50 z-[999] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
                <div className="flex gap-3">
                    <a
                        href="tel:+916297576826"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-2xl font-bold text-base shadow-lg active:scale-95 transition-all relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <Phone className="w-5 h-5 animate-bounce" /> <span className="tracking-wide">Call Now</span>
                    </a>
                    <a
                        href={`https://wa.me/916297576826?text=Hi,%20I%E2%80%99m%20planning%20an%20Andaman%20trip${currentCity.name ? `%20from%20${currentCity.name}` : ''}.%20Please%20guide%20me.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
                    >
                        <MessageCircle className="w-5 h-5" /> WhatsApp Quote
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Offer;

