import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Camera, Sun, Shield, CheckCircle, Anchor, Leaf, Droplets } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const MangroveCreekPage = () => {
    const locations = [
        {
            name: "Baratang Island",
            description: "Famous for its limestone caves and dense mangrove creeks. A journey through the tunnel of mangroves is unforgettable.",
            bestTime: "Morning",
            highlights: ["Limestone Caves", "Tunnel of Mangroves", "Crocodile Spotting"],
            image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Yerrata Creek",
            description: "Located in Rangat, this creek offers a serene experience with a mangrove interpretation center nearby.",
            bestTime: "Afternoon",
            highlights: ["Mangrove Walkway", "Interpretation Center", "Bird Watching"],
            image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Mayabunder",
            description: "Offers pristine mangrove creeks less explored by tourists, perfect for a quiet nature retreat.",
            bestTime: "Morning",
            highlights: ["Karmatang Beach", "Remote Creeks", "Turtle Nesting (Seasonal)"],
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const packages = [
        {
            name: "Limestone Cave Expedition",
            duration: "Full Day",
            price: "₹5,500 per person",
            includes: ["Private Car Transfer", "Speed Boat Ride", "Cave Entry Permit", "Breakfast & Lunch"],
            description: "A complete day trip to Baratang. Journey through the tribal reserve, ride a speedboat through mangroves, and explore ancient limestone caves.",
            highlights: ["Tribal Reserve Drive", "Speedboat Thrill", "Limestone Formations"]
        },
        {
            name: "Guided Mangrove Kayak Safari",
            duration: "2.5 hours",
            price: "₹2,500 per person",
            includes: ["Professional Kayak", "Certified Naturalist", "Safety Gear", "Refreshments"],
            description: "Paddle silently through dense mangrove creeks. Listen to the sounds of the forest and spot kingfishers, herons, and mudskippers.",
            highlights: ["Silent exploration", "Bird watching", "Eco-friendly"]
        },
        {
            name: "Yerrata Sunset Boat Ride",
            duration: "2 hours",
            price: "₹1,500 per person",
            includes: ["Country Boat Ride", "Local Guide", "Evening Snacks", "Mangrove Walk"],
            description: "A relaxing evening boat ride in Rangat. Witness the golden hour reflections in the calm creek waters giving a mirror-like effect.",
            highlights: ["Sunset views", "Relaxing vibe", "Budget friendly"]
        }
    ];

    const tips = [
        "Carry insect repellent as mangroves can have mosquitoes.",
        "Wear comfortable, quick-dry clothing.",
        "Sun protection (hat, sunglasses) is essential.",
        "Keep your hands inside the boat at all times.",
        "Do not throw plastic or trash into the water.",
        "Maintain silence to spot more wildlife."
    ];

    const faqs = [
        {
            question: "Is it safe with crocodiles?",
            answer: "Yes, our boats are safe and guides are experienced in spotting and maintaining safe distances from wildlife."
        },
        {
            question: "What is the best time to visit?",
            answer: "Early morning or late afternoon offers the best lighting and wildlife spotting opportunities."
        },
        {
            question: "Can we swim in the creeks?",
            answer: "Swimming is strictly prohibited in mangrove creeks due to safety reasons and wildlife presence."
        },
        {
            question: "Is this suitable for seniors?",
            answer: "Yes, the boat safaris are very comfortable and suitable for all ages, including seniors."
        }
    ];

    return (
        <ExperienceLayout
            title="Mangrove Creek Safari"
            subtitle="Into the Mystic"
            description="Explore the mystical mangrove creeks of the Andamans. Navigate through narrow waterways surrounded by dense mangrove forests, spot crocodiles basking in the sun, and witness the unique ecosystem that thrives at the intersection of land and sea."
            image="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            stats={{
                duration: "3-4 Hours",
                location: "Baratang & More",
                price: "From ₹2,500"
            }}
            slug="mangrove-creek"
            seo={{
                title: "Mangrove Creek Safari Andaman | Baratang & Rangat Tours",
                description: "Explore the enchanting mangrove creeks of Andaman. Boat safaris in Baratang, Yerrata, and Mayabunder. Spot crocodiles and exotic birds. Book your nature tour.",
                keywords: "mangrove safari andaman, baratang limestone caves, mangrove boat ride, yerrata creek rangat, bird watching andaman, crocodile spotting andaman, eco tourism andaman"
            }}
            bookingData={{
                packageName: 'Mangrove Creek Safari',
                source: 'experience',
                slug: 'mangrove-creek'
            }}
            faqData={faqs}
        >
            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Nature's Labyrinth</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The mangrove forests of the Andaman Islands are a critical ecosystem, protecting the coastlines and nurturing marine life. A safari through these emerald tunnels is like entering another world. The silence is broken only by the splash of oars or the call of a kingfisher. It's a journey into the heart of nature's resilience and beauty.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Safari Locations
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Discover the best spots to experience the mangrove magic
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
                                            <Sun className="w-3 h-3 text-emerald-400" />
                                            Best Time: {loc.bestTime}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">{loc.name}</h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{loc.description}</p>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Leaf className="w-4 h-4 text-emerald-600" />
                                            Highlights:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {loc.highlights.map((highlight, i) => (
                                                <span key={i} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md border border-emerald-200">
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
                            className="text-center p-6 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Safe & Secure</h3>
                            <p className="text-gray-600 text-sm">Experienced guides and safety gear provided</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center p-6 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                                <Anchor className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Comfortable Boats</h3>
                            <p className="text-gray-600 text-sm">Stable boats designed for creek navigation</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center p-6 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                                <Droplets className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly</h3>
                            <p className="text-gray-600 text-sm">Low-impact tourism to preserve nature</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center p-6 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                                <Camera className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Wildlife Photography</h3>
                            <p className="text-gray-600 text-sm">Excellent opportunities for nature shots</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Safari Packages
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Choose your journey into the mangroves
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-100 flex flex-col"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                                    <span className="flex items-center bg-emerald-100 px-3 py-1 rounded-lg">
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
                                                <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-emerald-100 mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-500 text-sm">Starting from</span>
                                        <span className="text-2xl font-bold text-emerald-600">{pkg.price}</span>
                                    </div>
                                    <Link
                                        to="/enquiry"
                                        onClick={() => {
                                            try {
                                                localStorage.setItem('enquiryDetails', JSON.stringify({
                                                    packageName: pkg.name,
                                                    source: 'experience',
                                                    slug: 'mangrove-creek',
                                                    selectedActivities: [pkg.name]
                                                }));
                                            } catch (_) { /* no-op */ }
                                        }}
                                        className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-emerald-600/30"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Safari Tips</h2>
                            <div className="bg-emerald-50 rounded-[2rem] p-8 shadow-lg border border-emerald-100">
                                <ul className="space-y-4">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-4 mt-2 flex-shrink-0" />
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
                                src="https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Mangrove creek"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-lg font-medium italic">"Nature's silent waterways..."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <FaqAccordion
                        title="Frequently Asked Questions"
                        description="Everything you need to know about our mangrove safaris"
                        faqs={faqs}
                    />
                </div>
            </section>
        </ExperienceLayout>
    );
};

export default MangroveCreekPage;
