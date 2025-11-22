import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Camera, Sun, Shield, CheckCircle, Zap, Anchor, Users } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const JetSkiPage = () => {
    const locations = [
        {
            name: "Corbyn's Cove",
            description: "The most popular spot for jet skiing in Port Blair, offering safe waters and great views.",
            bestTime: "All Day",
            highlights: ["Easy Access", "Calm Waters", "City Proximity"],
            image: "https://images.unsplash.com/photo-1540206395-688085723adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Elephant Beach",
            description: "Ride the waves at Havelock's famous water sports hub.",
            bestTime: "Morning",
            highlights: ["Clear Blue Water", "Reef Views", "Action Packed"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Bharatpur Beach",
            description: "Experience the thrill at Neil Island's beautiful sandy beach.",
            bestTime: "Afternoon",
            highlights: ["Turquoise Lagoon", "Sandy Bottom", "Less Crowded"],
            image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const packages = [
        {
            name: "Short Ride",
            duration: "10 mins",
            price: "₹600 per person",
            includes: ["Safety Jacket", "Instructor", "Briefing"],
            description: "A quick adrenaline fix for beginners.",
            highlights: ["Quick thrill", "Budget friendly", "Safe"]
        },
        {
            name: "Standard Ride",
            duration: "15-20 mins",
            price: "₹1,000 per person",
            includes: ["Safety Jacket", "Instructor", "Briefing", "Photos"],
            description: "Enjoy a longer ride to explore further out.",
            highlights: ["More time", "Explore further", "Great value"]
        },
        {
            name: "Island Tour",
            duration: "30 mins",
            price: "₹2,500 per person",
            includes: ["Safety Jacket", "Instructor", "Briefing", "Video"],
            description: "A comprehensive tour around the coastline.",
            highlights: ["Coastal tour", "Maximum speed", "Pro experience"]
        }
    ];

    const tips = [
        "Always wear the life jacket provided.",
        "Hold on tight to the handle bars.",
        "Follow the instructor's hand signals.",
        "Don't try sharp turns at high speed if you are a beginner.",
        "Wear swimwear or clothes that can get wet.",
        "Apply waterproof sunscreen."
    ];

    const faqs = [
        {
            question: "Do I drive the jet ski myself?",
            answer: "Yes, you can drive yourself, but an instructor will be seated behind you for safety."
        },
        {
            question: "Is there an age limit?",
            answer: "Children above 10 years can ride with an adult. To drive, you usually need to be 18+."
        },
        {
            question: "Is it safe?",
            answer: "Yes, it is very safe. Life jackets are mandatory and instructors are always present."
        },
        {
            question: "Can I fall off?",
            answer: "It's possible but rare if you follow instructions. You have a life jacket so you will float."
        }
    ];

    return (
        <ExperienceLayout
            title="Jet Skiing"
            subtitle="Ride the Waves"
            description="Feel the adrenaline rush as you zip across the azure waters of the Andaman Sea on our high-performance jet skis. Whether you are a beginner or experienced rider, our instructors will guide you through safe techniques while you enjoy the thrill of speed and freedom on the water."
            image="https://images.unsplash.com/photo-1564419320408-38e24e0387e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            stats={{
                duration: "15-30 Mins",
                location: "Corbyn's Cove & More",
                price: "From ₹600"
            }}
            slug="jet-ski"
            seo={{
                title: "Jet Skiing in Andaman | Port Blair & Havelock",
                description: "Book jet ski rides in Andaman. Experience high-speed thrills at Corbyn's Cove, Elephant Beach, and Neil Island. Safe, fun, and affordable water sports.",
                keywords: "jet ski andaman, jet skiing port blair, havelock jet ski, water sports andaman, adventure sports"
            }}
            bookingData={{
                packageName: 'Jet Ski Adventure',
                source: 'experience',
                slug: 'jet-ski'
            }}
        >
            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Need for Speed</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Jet skiing is the perfect activity for those who crave speed and excitement. Feel the wind in your hair and the spray of the ocean as you power across the waves. It's an exhilarating way to explore the coastline and get your heart racing. Our modern jet skis are powerful yet easy to handle, making them suitable for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Ride Locations
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Where to unleash the power
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((loc, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500 z-10" />
                                    <img
                                        src={loc.image}
                                        alt={loc.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-20">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-medium mb-2">
                                            <Sun className="w-3 h-3 text-blue-400" />
                                            Best Time: {loc.bestTime}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">{loc.name}</h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{loc.description}</p>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-blue-600" />
                                            Highlights:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {loc.highlights.map((highlight, i) => (
                                                <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md border border-blue-200">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Safety First</h3>
                            <p className="text-gray-600 text-sm">Life jackets and expert supervision</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">High Power</h3>
                            <p className="text-gray-600 text-sm">Modern, high-performance machines</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                                <Anchor className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy to Learn</h3>
                            <p className="text-gray-600 text-sm">No prior experience needed</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Tandem Rides</h3>
                            <p className="text-gray-600 text-sm">Ride with a friend or instructor</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Ride Packages
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Choose your adrenaline dose
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 flex flex-col"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                                    <span className="flex items-center bg-blue-100 px-3 py-1 rounded-lg">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {pkg.duration}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pkg.description}</p>

                                <div className="mb-8 flex-grow">
                                    <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                                    <ul className="space-y-3">
                                        {pkg.includes.map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-600 text-sm">
                                                <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-blue-100 mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-500 text-sm">Starting from</span>
                                        <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                                    </div>
                                    <Link
                                        to="/enquiry"
                                        onClick={() => {
                                            try {
                                                localStorage.setItem('enquiryDetails', JSON.stringify({
                                                    packageName: pkg.name,
                                                    source: 'experience',
                                                    slug: 'jet-ski',
                                                    selectedActivities: [pkg.name]
                                                }));
                                            } catch (_) { /* no-op */ }
                                        }}
                                        className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Rider Tips</h2>
                            <div className="bg-blue-50 rounded-[2rem] p-8 shadow-lg border border-blue-100">
                                <ul className="space-y-4">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 mt-2 flex-shrink-0" />
                                            <span className="leading-relaxed">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1564419320408-38e24e0387e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Jet ski action"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-lg font-medium italic">"Full throttle ahead!"</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <FaqAccordion
                        title="Frequently Asked Questions"
                        description="Everything you need to know about jet skiing"
                        faqs={faqs}
                    />
                </div>
            </section>
        </ExperienceLayout>
    );
};

export default JetSkiPage;
