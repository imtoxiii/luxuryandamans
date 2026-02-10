import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Clock, Camera, Sun, Shield, CheckCircle, Wind, Cloud, Heart } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const ParasailingPage = () => {
    const locations = [
        {
            name: "Havelock Island",
            description: "Parasail over the stunning Elephant Beach with views of the coral reefs below.",
            bestTime: "Morning",
            highlights: ["Reef Views", "Elephant Beach", "Clear Waters"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "North Bay Island",
            description: "Enjoy panoramic views of Port Blair and Ross Island from the sky.",
            bestTime: "All Day",
            highlights: ["City Views", "Ross Island View", "Lighthouse View"],
            image: "https://images.unsplash.com/photo-1606052472822-166248160183?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Corbyn's Cove",
            description: "Convenient parasailing spot near Port Blair city with calm waters.",
            bestTime: "Evening",
            highlights: ["Sunset Views", "Easy Access", "Calm Sea"],
            image: "https://images.unsplash.com/photo-1540206395-688085723adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const packages = [
        {
            name: "Solo Flight",
            duration: "10-15 mins",
            price: "₹3,500 per person",
            includes: ["Safety Gear", "Briefing", "Boat Ride", "Photos"],
            description: "Experience the thrill of flying solo high above the sea.",
            highlights: ["Personal freedom", "360° views", "Adrenaline rush"]
        },
        {
            name: "Tandem Flight",
            duration: "10-15 mins",
            price: "₹6,000 per couple",
            includes: ["Safety Gear", "Briefing", "Boat Ride", "Photos"],
            description: "Share the excitement with a friend or partner.",
            highlights: ["Shared experience", "Great for couples", "Fun memories"]
        },
        {
            name: "Sunset Flight",
            duration: "15 mins",
            price: "₹4,500 per person",
            includes: ["Safety Gear", "Briefing", "Boat Ride", "Video"],
            description: "Fly during the golden hour for a magical experience.",
            highlights: ["Golden hour", "Romantic views", "Cool breeze"]
        }
    ];

    const tips = [
        "Wear comfortable, light clothing (shorts and t-shirt).",
        "Avoid heavy meals right before the activity.",
        "Listen carefully to the safety briefing.",
        "Secure your glasses or sunglasses with a strap.",
        "Don't carry loose items like phones or keys (unless secured).",
        "Relax and enjoy the view!"
    ];

    const faqs = [
        {
            question: "Is it safe for beginners?",
            answer: "Yes, it is very safe. You are harnessed securely and the boat crew controls the flight."
        },
        {
            question: "Do I need to know how to swim?",
            answer: "No, swimming skills are not required as you take off and land on the boat deck."
        },
        {
            question: "What is the age limit?",
            answer: "Generally, anyone above 6 years old can participate, subject to fitting the harness securely."
        },
        {
            question: "Can I take my camera?",
            answer: "You can take a secured camera (like a GoPro), but holding a phone is risky. Crew can take photos for you."
        }
    ];

    return (
        <ExperienceLayout
            title="Parasailing"
            subtitle="Fly High"
            description="Experience the ultimate thrill as you soar high above the crystal-clear waters of the Andaman Sea. Our parasailing adventures offer breathtaking aerial views of the coastline, coral reefs, and surrounding islands while ensuring maximum safety."
            image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            stats={{
                duration: "10-15 Mins",
                location: "Havelock & More",
                price: "From ₹3,500"
            }}
            slug="parasailing"
            seo={{
                title: "Parasailing in Andaman | Best Prices & Safety Standards 2026",
                description: "Experience the thrill of parasailing in Andaman at Havelock, North Bay & Corbyn's Cove. Safe, certified instructors & breathtaking aerial views. Book now!",
                keywords: "parasailing andaman price, parasailing in havelock, north bay island parasailing, water sports port blair, adventure sports andaman, parasailing cost"
            }}
            bookingData={{
                packageName: 'Parasailing Adventure',
                source: 'experience',
                slug: 'parasailing'
            }}
            faqData={faqs}
        >
            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Touch the Sky</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Parasailing is one of the most exhilarating ways to experience the beauty of the Andaman Islands. Towed behind a speed boat, you'll gently lift off the deck and ascend into the sky. From up there, the ocean reveals its true colors—shades of turquoise, emerald, and deep blue—and you might even spot schools of fish or coral formations below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Best Spots to Fly
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Choose your backdrop for this aerial adventure
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
                                            <Sun className="w-3 h-3 text-sky-400" />
                                            Best Time: {loc.bestTime}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">{loc.name}</h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{loc.description}</p>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Wind className="w-4 h-4 text-sky-600" />
                                            Highlights:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {loc.highlights.map((highlight, i) => (
                                                <span key={i} className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-md border border-sky-200">
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
                            className="text-center p-6 rounded-2xl bg-sky-50 hover:bg-sky-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-700">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">100% Safe</h3>
                            <p className="text-gray-600 text-sm">Certified instructors and top-quality gear</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center p-6 rounded-2xl bg-sky-50 hover:bg-sky-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-700">
                                <Cloud className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Amazing Views</h3>
                            <p className="text-gray-600 text-sm">See the islands from a bird's eye view</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center p-6 rounded-2xl bg-sky-50 hover:bg-sky-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-700">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">No Swimming</h3>
                            <p className="text-gray-600 text-sm">Take off and land dry on the boat</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center p-6 rounded-2xl bg-sky-50 hover:bg-sky-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-700">
                                <Camera className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">We Capture It</h3>
                            <p className="text-gray-600 text-sm">Photos and videos available on request</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Flight Packages
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Choose how you want to fly
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-sky-100 flex flex-col"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                                    <span className="flex items-center bg-sky-100 px-3 py-1 rounded-lg">
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
                                                <CheckCircle className="w-4 h-4 mr-2 text-sky-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-sky-100 mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-500 text-sm">Starting from</span>
                                        <span className="text-2xl font-bold text-sky-600">{pkg.price}</span>
                                    </div>
                                    <Link
                                        to="/enquiry"
                                        onClick={() => {
                                            try {
                                                localStorage.setItem('enquiryDetails', JSON.stringify({
                                                    packageName: pkg.name,
                                                    source: 'experience',
                                                    slug: 'parasailing',
                                                    selectedActivities: [pkg.name]
                                                }));
                                            } catch { /* no-op */ }
                                        }}
                                        className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-sky-600/30"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Flight Tips</h2>
                            <div className="bg-sky-50 rounded-[2rem] p-8 shadow-lg border border-sky-100">
                                <ul className="space-y-4">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-sky-500 mr-4 mt-2 flex-shrink-0" />
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
                                src="https://images.unsplash.com/photo-1606052472822-166248160183?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Parasailing view"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-lg font-medium italic">"The world looks different from up here..."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <FaqAccordion
                        title="Frequently Asked Questions"
                        description="Everything you need to know about parasailing"
                        faqs={faqs}
                    />
                </div>
            </section>
        </ExperienceLayout>
    );
};

export default ParasailingPage;
