import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Star, ArrowRight, Shield, Users, Sparkles, Calendar, Mail, Copy, X, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SectionIntro from '../components/SectionIntro';
import { packages } from '../data/packages';
import { sendTelegramMessage, formatBookingMessage, formatBestPackageMessage } from '../lib/telegram';
import {
    OFFER_HERO_DESKTOP,
    OFFER_HERO_MOBILE,
    OFFER_HERO_DESKTOP_DIMENSIONS,
    OFFER_PACKAGE_COUPLE,
    OFFER_PACKAGE_PREMIUM,
    OFFER_PACKAGE_FAMILY,
    OFFER_SUMEET_PHOTO,
} from '../lib/heroImages';
import toast, { Toaster } from 'react-hot-toast';
import { family4n5d } from '../data/packages/family-4n5d';

type OfferDeal = {
    pkg: (typeof packages)[number];
    offerPrice: number;
    badge?: string;
    tagline: string;
    image: string;
    shortTitle: string;
};

const marqueeItems = [
    'Havelock Island',
    'Neil Island',
    'Port Blair',
    'Scuba Diving',
    'Radhanagar Beach',
    'Island Hopping',
    'Sunset Cruises',
    'Natural Bridge',
];

const heroLine = {
    hidden: { y: '112%' },
    show: (i: number) => ({
        y: '0%',
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.13 },
    }),
};

const heroFade = {
    hidden: { opacity: 0, y: 26 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.14 },
    }),
};

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
    const [bestPackageOpen, setBestPackageOpen] = useState(false);
    const [selectedDeal, setSelectedDeal] = useState<OfferDeal | null>(null);
    const [bestPackageForm, setBestPackageForm] = useState({ name: '', phone: '', email: '' });
    const [bestPackageSubmitting, setBestPackageSubmitting] = useState(false);
    const { scrollY } = useScroll();
    const heroContentY = useTransform(scrollY, [0, 600], [0, -160]);
    const heroContentOpacity = useTransform(scrollY, [0, 440], [1, 0]);
    const heroImgScale = useTransform(scrollY, [0, 900], [1, 1.12]);
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
    const isGeneric = cityKey === 'default';

    const scrollToPackages = () => {
        packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // 3 curated offer itineraries with value pricing
    const featuredDeals: OfferDeal[] = [
        {
            pkg: packages[0],
            offerPrice: 17000,
            shortTitle: 'Couple / Honeymoon',
            tagline: 'Couples favourite · Port Blair + Havelock + Neil',
            image: OFFER_PACKAGE_COUPLE,
        },
        {
            pkg: packages[1],
            offerPrice: 22000,
            shortTitle: 'Complete Andaman Tour',
            badge: 'Most Booked',
            tagline: 'Neil Island night + Natural Bridge + photoshoot',
            image: OFFER_PACKAGE_PREMIUM,
        },
        {
            pkg: family4n5d,
            offerPrice: 25000,
            shortTitle: 'Family',
            tagline: 'Family-paced days · kid-friendly hotels & ferries',
            image: OFFER_PACKAGE_FAMILY,
        },
    ];

    const openBestPackageForm = (deal: OfferDeal) => {
        setSelectedDeal(deal);
        setBestPackageForm({ name: '', phone: '', email: '' });
        setBestPackageOpen(true);
    };

    const handleBestPackageSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!bestPackageForm.name.trim() || !bestPackageForm.phone.trim()) {
            toast.error('Please enter your name and phone number.');
            return;
        }

        setBestPackageSubmitting(true);
        try {
            const message = formatBestPackageMessage({
                ...bestPackageForm,
                packageName: selectedDeal?.pkg.title,
                packagePrice: selectedDeal?.offerPrice,
                city: currentCity.name || undefined,
            });
            const ok = await sendTelegramMessage(message);
            if (ok) {
                toast.success('Got it! We will share the best package shortly.');
                setBestPackageOpen(false);
                setBestPackageForm({ name: '', phone: '', email: '' });
                setSelectedDeal(null);
            }
        } catch (error) {
            console.error('Error sending best package enquiry:', error);
            toast.error('Failed to send. Please try again.');
        } finally {
            setBestPackageSubmitting(false);
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
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pb-14 md:pb-0">
            <SEO
                title={`Exclusive Andaman Packages ${currentCity.name ? `from ${currentCity.name}` : ''} | Starting ₹17,000`}
                description={`Book your dream Andaman vacation ${currentCity.name ? `from ${currentCity.name}` : ''}. Value itineraries from ₹17,000/person — hotels, ferries & sightseeing included. Custom quotes in minutes.`}
                pathname={location.pathname}
                keywords={`andaman packages ${currentCity.name ? `from ${currentCity.name.toLowerCase()}` : ''}, andaman tour offer, cheap andaman packages, andaman holiday deals, andaman discount packages, best andaman offer 2026, andaman package under 20000, andaman couple package offer, andaman family deal, andaman honeymoon offer, andaman all inclusive deal, andaman last minute offer, andaman weekend getaway, andaman short trip package, cheapest andaman deal, andaman booking offer`.trim()}
                targetAudience="all"
                faqData={[
                    {
                        question: `What is the cheapest Andaman package ${currentCity.name ? `from ${currentCity.name}` : 'available'}?`,
                        answer: `Our most affordable Andaman package ${currentCity.name ? `from ${currentCity.name}` : ''} starts at ₹17,000 per person for 4N/5D. This includes hotel stay, ferry transfers, sightseeing at Port Blair, Havelock & Neil Island, daily breakfast, and airport pickup/drop. ${currentCity.name ? `Flights from ${currentCity.name} are not included but we can help you find the best deals.` : 'Flight booking assistance is also available.'}`
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

            {/* Hero — home composition, lighter copy over turquoise water */}
            <section className="relative h-screen min-h-[640px] flex flex-col overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#041018]/45 via-transparent to-[#041018]/60" />
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#041018]/30 via-transparent to-transparent md:from-[#041018]/40" />
                    <motion.div className="absolute inset-0 will-change-transform" style={{ scale: heroImgScale }}>
                        <picture>
                            <source media="(max-width: 767px)" srcSet={OFFER_HERO_MOBILE} type="image/png" />
                            <img
                                src={OFFER_HERO_DESKTOP}
                                alt="Turquoise Andaman water with pink plumeria flowers on white sand"
                                className="w-full h-full object-cover"
                                width={OFFER_HERO_DESKTOP_DIMENSIONS.width}
                                height={OFFER_HERO_DESKTOP_DIMENSIONS.height}
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                style={{ objectPosition: 'center 30%' }}
                            />
                        </picture>
                    </motion.div>
                </div>

                <motion.div
                    className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-36 lg:pt-40"
                    style={{ y: heroContentY, opacity: heroContentOpacity }}
                >
                    <div className="max-w-xl md:max-w-2xl text-left">
                        <motion.div
                            variants={heroFade}
                            custom={0}
                            initial="hidden"
                            animate="show"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white mb-5 md:mb-7"
                        >
                            <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                            <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase">
                                {isGeneric ? 'From ₹17,000 / person' : `${currentCity.name} specials`}
                            </span>
                        </motion.div>

                        <h1 className="mb-4 md:mb-5">
                            <span className="sr-only">
                                {isGeneric
                                    ? 'Andaman tour packages with hotels, ferries and sightseeing included'
                                    : `Andaman packages from ${currentCity.name}`}
                            </span>
                            <span aria-hidden="true" className="block">
                                <span className="block overflow-hidden pb-[0.06em]">
                                    <motion.span
                                        variants={heroLine}
                                        custom={0}
                                        initial="hidden"
                                        animate="show"
                                        className="block will-change-transform font-serif font-semibold text-white text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight drop-shadow-[0_2px_24px_rgba(4,16,24,0.45)]"
                                    >
                                        {isGeneric ? 'Andaman' : currentCity.name}
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden mt-1 md:mt-2">
                                    <motion.span
                                        variants={heroLine}
                                        custom={1}
                                        initial="hidden"
                                        animate="show"
                                        className="block will-change-transform font-script text-white/95 text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl leading-none drop-shadow-[0_2px_20px_rgba(4,16,24,0.4)]"
                                    >
                                        {isGeneric ? 'Awaits' : 'to Andaman'}
                                    </motion.span>
                                </span>
                            </span>
                        </h1>

                        <motion.p
                            variants={heroFade}
                            custom={2}
                            initial="hidden"
                            animate="show"
                            className="text-base md:text-lg text-white/85 max-w-sm leading-relaxed font-light drop-shadow-md"
                        >
                            Ready itineraries. Honest local pricing.
                        </motion.p>
                    </div>
                </motion.div>

                <div className="flex-1 relative z-10 pointer-events-none" aria-hidden="true" />

                <motion.div
                    className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-8 pb-28 md:pb-28"
                    style={{ opacity: heroContentOpacity }}
                >
                    <motion.div
                        variants={heroFade}
                        custom={3}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
                    >
                        <button
                            type="button"
                            onClick={scrollToPackages}
                            className="px-7 py-3.5 md:px-8 md:py-4 bg-white text-[#0a2740] rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_8px_40px_-8px_rgba(255,255,255,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            View packages
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => openBestPackageForm(featuredDeals[0])}
                            className="hidden sm:inline-flex px-7 py-3.5 md:px-8 md:py-4 bg-white/10 border border-white/50 text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-md items-center justify-center gap-2"
                        >
                            Send enquiry
                            <Calendar className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ opacity: heroContentOpacity }}
                    className="absolute bottom-16 md:bottom-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                >
                    <div className="hidden md:flex flex-col items-center gap-2 text-white/70">
                        <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
                        <div className="relative w-px h-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent" />
                            <div className="scroll-cue-dot absolute left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-white" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* White sheet over hero */}
            <div className="relative z-10 bg-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-10 shadow-[0_-24px_48px_-24px_rgba(4,13,23,0.4)]">
                <div className="overflow-hidden pt-6 pb-3 md:pt-8 md:pb-5 select-none" aria-hidden="true">
                    <div className="marquee-track flex w-max items-center">
                        {[...marqueeItems, ...marqueeItems].map((item, i) => (
                            <span key={i} className="flex items-center shrink-0 pr-8 md:pr-14">
                                <span
                                    className={`font-display font-bold uppercase tracking-tight whitespace-nowrap text-3xl md:text-5xl ${
                                        i % 2 ? 'text-outline-ink' : 'text-gray-900'
                                    }`}
                                >
                                    {item}
                                </span>
                                <span className="ml-8 md:ml-14 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-600/60 shrink-0" />
                            </span>
                        ))}
                    </div>
                </div>

            {/* Packages — minimal portrait cards */}
            <section ref={packagesRef} className="py-8 md:py-12 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <SectionIntro title="Pick your" script="trip" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 max-w-6xl mx-auto">
                        {featuredDeals.map((deal, index) => {
                            const pkg = deal.pkg;
                            const isFeatured = Boolean(deal.badge);
                            const objectPos =
                                index === 0 ? 'center 18%' :
                                index === 1 ? 'center 45%' :
                                'center 22%';
                            const curveClass = index % 2 === 1
                                ? 'rounded-[0.85rem_2.75rem_0.85rem_2.75rem]'
                                : 'rounded-[2.75rem_0.85rem_2.75rem_0.85rem]';

                            return (
                                <motion.div
                                    key={pkg.slug}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full"
                                >
                                    <div className={`group relative isolate flex h-[520px] md:h-[560px] w-full flex-col overflow-hidden ${curveClass}`}>
                                        <div className="absolute inset-0 overflow-hidden">
                                            <div className="h-full w-full origin-center transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
                                                <img
                                                    src={deal.image}
                                                    alt={deal.shortTitle}
                                                    className="h-full w-full object-cover"
                                                    style={{ objectPosition: objectPos }}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                                        <div className="relative z-20 flex h-full flex-col justify-between p-5 md:p-6">
                                            <span className="self-start rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                                                {isFeatured ? deal.badge : pkg.duration}
                                            </span>

                                            <div>
                                                <div className="flex items-baseline gap-2 flex-wrap">
                                                    <p className="font-serif text-[2.15rem] font-medium leading-none tracking-tight text-white md:text-[2.4rem]">
                                                        ₹{deal.offerPrice.toLocaleString('en-IN')}
                                                    </p>
                                                    <span className="font-script text-[1.05rem] leading-none text-white/85 md:text-[1.15rem]">
                                                        Per Person
                                                    </span>
                                                </div>
                                                <h3 className="mt-2 font-script text-[2.35rem] leading-none text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-[2.75rem]">
                                                    {deal.shortTitle}
                                                </h3>

                                                <button
                                                    type="button"
                                                    onClick={() => openBestPackageForm(deal)}
                                                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a2740] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                                                >
                                                    <Sparkles className="h-4 w-4 text-amber-500" />
                                                    Send enquiry
                                                </button>
                                                <Link
                                                    to={`/packages/${pkg.slug}?from=offer`}
                                                    className="mt-2.5 block text-center text-xs font-semibold text-white/80 transition-colors hover:text-white"
                                                >
                                                    View itinerary
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            type="button"
                            onClick={() => openBestPackageForm(featuredDeals[1])}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0a2740]"
                        >
                            Need a custom plan?
                            <ArrowRight className="h-4 w-4" />
                        </button>
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
                        ].map((activity, idx) => {
                            const waText = `Hi, I'm looking for Andaman tour packages. Please share the best options available.`;
                            return (
                            <a
                                key={idx}
                                href={`https://wa.me/916297576826?text=${encodeURIComponent(waText)}`}
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
                            );
                        })}
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
            <section className="py-12 md:py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden md:block"
                        >
                            <div className="absolute -inset-4 bg-amber-50/50 rounded-full blur-xl opacity-30" />
                            <img
                                src="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg"
                                alt="Luxury Experience"
                                className="relative rounded-[3rem] shadow-2xl w-full object-cover h-[560px] z-10"
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
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-3 mb-6 md:mb-8 leading-tight">We Don't Just Plan Trips, We Craft <span className="text-amber-500 italic">Memories</span></h2>

                            <div className="space-y-6 md:space-y-8">
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
                                        className="flex gap-4 md:gap-6 group"
                                    >
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/30">
                                            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2 font-display">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed text-base md:text-lg">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Local expert */}
            <section className="pt-4 pb-10 md:pt-6 md:pb-14 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="flex flex-col md:flex-row items-center gap-5 rounded-[2rem] border border-slate-100 bg-slate-50/80 p-5 md:p-7">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md ring-2 ring-slate-100">
                            <img
                                src={OFFER_SUMEET_PHOTO}
                                alt="Sumeet — Local Andaman Travel Expert"
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'center 20%' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-lg font-bold text-slate-800 mb-1">"Hi, I'm Sumeet – Local Andaman Travel Expert."</p>
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

            </div>
            {/* end white sheet */}

            <Footer />

            {/* Sticky Action Bar - Desktop only */}
            <motion.div
                className="hidden md:block fixed left-0 right-0 z-[100] bottom-0"
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
                <div className="bg-white/80 backdrop-blur-lg border-t border-slate-100 shadow-lg">
                    <div className="container mx-auto px-4 py-1.5">
                        <div className="flex items-center justify-between gap-3 max-w-4xl mx-auto">
                            <a
                                href="tel:+916297576826"
                                onClick={(e) => handleContactClick(e, 'phone')}
                                className="flex flex-row items-center justify-center gap-2 text-slate-600 hover:text-amber-600 transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                                    <Phone className="w-4 h-4 text-amber-600" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wide">Call</span>
                            </a>

                            <button
                                type="button"
                                onClick={() => openBestPackageForm(featuredDeals[1])}
                                className="px-4 bg-slate-900 text-white h-10 rounded-xl font-bold text-xs shadow-lg shadow-slate-900/20 hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                <span>Send enquiry</span>
                            </button>

                            <a
                                href="https://wa.me/916297576826?text=Hi,%20I%20want%20to%20plan%20my%20Andaman%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center justify-center gap-2 text-slate-600 hover:text-green-600 transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-full bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                                    <MessageCircle className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=luxuryandamans@gmail.com&su=Andaman%20Trip%20Enquiry&body=Hi,%0D%0A%0D%0AI%20want%20to%20plan%20my%20Andaman%20trip.%0D%0A%0D%0APlease%20contact%20me%20with%20more%20details.%0D%0A%0D%0AThank%20you!"
                                onClick={(e) => handleContactClick(e, 'email')}
                                className="flex flex-row items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
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

            {/* Get Best Package modal */}
            <AnimatePresence>
                {bestPackageOpen && (
                    <motion.div
                        className="fixed inset-0 z-[1100] flex items-end sm:items-center justify-center p-0 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => setBestPackageOpen(false)}
                        />
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="best-package-title"
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                            className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
                        >
                            <div className="px-6 pt-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-1">Quick enquiry</p>
                                    <h3 id="best-package-title" className="text-xl font-display font-bold text-slate-900 leading-snug">
                                        Get Best Package
                                    </h3>
                                    {selectedDeal && (
                                        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                                            {selectedDeal.pkg.title} · ₹{selectedDeal.offerPrice.toLocaleString('en-IN')}/person
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setBestPackageOpen(false)}
                                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 shrink-0"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <form onSubmit={handleBestPackageSubmit} className="p-6 space-y-4">
                                <div>
                                    <label htmlFor="bp-name" className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        id="bp-name"
                                        type="text"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        value={bestPackageForm.name}
                                        onChange={(e) => setBestPackageForm((prev) => ({ ...prev, name: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-slate-900"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bp-phone" className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">
                                        Phone number
                                    </label>
                                    <input
                                        id="bp-phone"
                                        type="tel"
                                        name="phone"
                                        required
                                        autoComplete="tel"
                                        value={bestPackageForm.phone}
                                        onChange={(e) => setBestPackageForm((prev) => ({ ...prev, phone: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-slate-900"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bp-email" className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">
                                        Email <span className="font-medium normal-case tracking-normal text-slate-400">(optional)</span>
                                    </label>
                                    <input
                                        id="bp-email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        value={bestPackageForm.email}
                                        onChange={(e) => setBestPackageForm((prev) => ({ ...prev, email: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-slate-900"
                                        placeholder="you@email.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={bestPackageSubmitting}
                                    className="w-full py-3.5 bg-slate-900 hover:bg-amber-500 text-white rounded-xl font-bold transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {bestPackageSubmitting ? 'Sending...' : 'Submit'}
                                    {!bestPackageSubmitting && <ArrowRight className="w-4 h-4" />}
                                </button>
                                <p className="text-center text-[11px] text-slate-400">
                                    We usually reply within 10 minutes on call or WhatsApp.
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 px-2.5 pt-1.5 pb-[max(0.4rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-xl border-t border-gray-100/50 z-[999] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex gap-2">
                    <a
                        href={`https://wa.me/916297576826?text=Hi,%20I%E2%80%99m%20planning%20an%20Andaman%20trip${currentCity.name ? `%20from%20${currentCity.name}` : ''}.%20Please%20guide%20me.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-xl font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                    >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>whatsapp us</span>
                    </a>
                    <button
                        type="button"
                        onClick={() => openBestPackageForm(featuredDeals[0])}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900 text-white py-2 rounded-xl font-bold text-sm active:scale-95 transition-all"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="tracking-wide">Send enquiry</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offer;

