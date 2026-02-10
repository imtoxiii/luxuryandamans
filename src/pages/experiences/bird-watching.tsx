import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Camera, Sun, Cloud, CheckCircle, Binoculars, Feather, TreeDeciduous, Users } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const BirdWatchingPage = () => {
    const locations = [
        {
            name: "Chidiya Tapu",
            description: "Known as the 'Bird Island', this is a premier spot for bird watching with diverse habitats.",
            bestTime: "Sunrise & Sunset",
            species: ["Andaman Drongo", "White-headed Starling", "Andaman Coucal"],
            image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Mount Harriet",
            description: "A tropical evergreen forest hosting a variety of endemic bird species.",
            bestTime: "Early Morning",
            species: ["Andaman Wood Pigeon", "Andaman Cuckoo Dove", "Andaman Scops Owl"],
            image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Saddle Peak",
            description: "The highest point in the Andamans, offering unique high-altitude species.",
            bestTime: "All Day",
            species: ["Andaman Imperial Pigeon", "Andaman Hill Myna"],
            image: "https://images.unsplash.com/photo-1552728089-a57bcd42f6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const packages = [
        {
            name: "Morning Birding Trail",
            duration: "4 hours",
            price: "₹3,500 per person",
            includes: ["Expert Ornithologist Guide", "Binoculars", "Breakfast", "Hotel Transfers"],
            description: "An early morning expedition to catch the forest coming alive.",
            highlights: ["Sunrise views", "Active bird hours", "Breakfast in nature"]
        },
        {
            name: "Full Day Expedition",
            duration: "8 hours",
            price: "₹6,000 per person",
            includes: ["Expert Ornithologist Guide", "Binoculars", "Lunch & Refreshments", "All Transfers", "Entry Fees"],
            description: "Comprehensive tour covering multiple habitats and locations.",
            highlights: ["Multiple locations", "Detailed observation", "Picnic lunch"]
        },
        {
            name: "Photography Special",
            duration: "6 hours",
            price: "₹5,000 per person",
            includes: ["Photography Guide", "Hide Setup", "Refreshments", "Transfers"],
            description: "Dedicated tour for bird photographers focusing on getting the perfect shot.",
            highlights: ["Patient pacing", "Best light angles", "Hide usage"]
        }
    ];

    const tips = [
        "Wear dull-colored clothing (greens, browns) to blend in.",
        "Avoid strong perfumes or deodorants.",
        "Keep noise to a minimum.",
        "Bring a camera with a good zoom lens if you have one.",
        "Carry insect repellent.",
        "Wear comfortable walking shoes."
    ];

    const faqs = [
        {
            question: "What birds can we expect to see?",
            answer: "You can spot endemics like the Andaman Woodpecker, Andaman Drongo, White-headed Starling, and many migratory species depending on the season."
        },
        {
            question: "Do you provide equipment?",
            answer: "We provide high-quality binoculars and field guides. For photography tours, please bring your own camera gear."
        },
        {
            question: "Is early morning necessary?",
            answer: "Early morning (starting around 5:30 AM) is the best time as birds are most active. However, we also offer afternoon sessions."
        },
        {
            question: "Is it suitable for children?",
            answer: "Yes, for children who can maintain silence and enjoy nature. We recommend it for ages 10 and up."
        }
    ];

    return (
        <ExperienceLayout
            title="Bird Watching"
            subtitle="Spot Rare Species"
            description="The Andaman Islands are a paradise for bird enthusiasts with over 270 species including many endemics. Join our expert ornithologists for guided bird watching tours through diverse habitats from mangroves to rainforests."
            image="https://images.unsplash.com/photo-1552728089-a57bcd42f6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            stats={{
                duration: "4-6 Hours",
                location: "Chidiya Tapu & More",
                price: "From ₹3,500"
            }}
            slug="bird-watching"
            seo={{
                title: "Bird Watching in Andaman | Guided Birding Tours 2026",
                description: "Join expert-led bird watching tours in Andaman. Spot rare endemic species like the Andaman Woodpecker and Narcondam Hornbill. Best spots: Chidiya Tapu, Mount Harriet.",
                keywords: "bird watching andaman, birding tours andaman, chidiya tapu bird watching, andaman endemic birds, ornithology tours india, bird photography andaman, mount harriet birding"
            }}
            bookingData={{
                packageName: 'Bird Watching Expedition',
                source: 'experience',
                slug: 'bird-watching'
            }}
            faqData={faqs}
        >
            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Avian Paradise</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Immerse yourself in the melodious world of Andaman's avifauna. Our islands host a unique ecosystem where you can witness species found nowhere else on Earth. Whether you are a serious birder or a nature lover, the diversity of habitats—from dense rainforests to coastal mangroves—offers an unparalleled birding experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Prime Birding Hotspots
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Explore the best locations to spot our feathered friends
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
                                            <Sun className="w-3 h-3 text-amber-400" />
                                            Best Time: {loc.bestTime}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">{loc.name}</h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{loc.description}</p>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Feather className="w-4 h-4 text-amber-600" />
                                            Key Species:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {loc.species.map((bird, i) => (
                                                <span key={i} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-md border border-stone-200">
                                                    {bird}
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
                            className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-amber-50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                                <Binoculars className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Equipment Provided</h3>
                            <p className="text-gray-600 text-sm">High-quality binoculars and field guides included</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-amber-50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guides</h3>
                            <p className="text-gray-600 text-sm">Led by experienced ornithologists</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-amber-50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                                <TreeDeciduous className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Diverse Habitats</h3>
                            <p className="text-gray-600 text-sm">Explore forests, mangroves, and wetlands</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-amber-50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                                <Camera className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Photo Opportunities</h3>
                            <p className="text-gray-600 text-sm">Perfect for wildlife photography enthusiasts</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                            Birding Packages
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Choose the perfect expedition for your interest level
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                                    <span className="flex items-center bg-stone-100 px-3 py-1 rounded-lg">
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
                                                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-stone-100 mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-500 text-sm">Starting from</span>
                                        <span className="text-2xl font-bold text-amber-600">{pkg.price}</span>
                                    </div>
                                    <Link
                                        to="/enquiry"
                                        onClick={() => {
                                            try {
                                                localStorage.setItem('enquiryDetails', JSON.stringify({
                                                    packageName: pkg.name,
                                                    source: 'experience',
                                                    slug: 'bird-watching',
                                                    selectedActivities: [pkg.name]
                                                }));
                                            } catch (_) { /* no-op */ }
                                        }}
                                        className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-amber-600/30"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Birding Etiquette & Tips</h2>
                            <div className="bg-stone-50 rounded-[2rem] p-8 shadow-lg border border-stone-100">
                                <ul className="space-y-4">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-amber-500 mr-4 mt-2 flex-shrink-0" />
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
                                src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Bird watching in Andaman"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-lg font-medium italic">"The woods are lovely, dark and deep..."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4">
                    <FaqAccordion
                        title="Frequently Asked Questions"
                        description="Everything you need to know about our bird watching tours"
                        faqs={faqs}
                    />
                </div>
            </section>
        </ExperienceLayout>
    );
};

export default BirdWatchingPage;
