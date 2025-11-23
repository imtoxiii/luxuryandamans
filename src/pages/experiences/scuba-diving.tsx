import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Shield, Award, Clock, Users, Waves, MapPin, Sun, Fish, CheckCircle, AlertCircle, Camera } from 'lucide-react';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const ScubaDivingPage = () => {
  const diveSites = [
    {
      name: "Dixon's Pinnacle",
      depth: "18-40m",
      difficulty: "Advanced",
      description: "Famous for its coral gardens and diverse marine life",
      visibility: "15-30m",
      highlights: ["Coral gardens", "Pelagic encounters", "Underwater photography", "Current diving"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Havelock Island",
      marineLife: ["Manta rays", "Reef sharks", "Barracudas", "Napoleon wrasse"]
    },
    {
      name: "The Wall",
      depth: "12-35m",
      difficulty: "Intermediate",
      description: "Vertical wall dive with stunning coral formations",
      visibility: "15-25m",
      highlights: ["Wall diving", "Coral formations", "Macro photography", "Night diving"],
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Neil Island",
      marineLife: ["Sea turtles", "Moray eels", "Angelfish", "Butterflyfish"]
    },
    {
      name: "Johnny's Gorge",
      depth: "15-30m",
      difficulty: "Intermediate",
      description: "Underwater canyon with abundant fish life",
      visibility: "20-30m",
      highlights: ["Canyon formation", "Schooling fish", "Drift diving", "Photography"],
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Havelock Island",
      marineLife: ["Schooling barracudas", "Trevallies", "Sweetlips", "Groupers"]
    },
    {
      name: "Seduction Point",
      depth: "5-20m",
      difficulty: "Beginner",
      description: "Perfect for beginners with shallow reefs and calm waters",
      visibility: "10-20m",
      highlights: ["Beginner friendly", "Coral reefs", "Fish life", "Training site"],
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "North Bay Island",
      marineLife: ["Clownfish", "Damselfish", "Parrotfish", "Sea anemones"]
    },
    {
      name: "Aquarium",
      depth: "10-25m",
      difficulty: "Beginner",
      description: "Shallow reef teeming with colorful fish",
      visibility: "15-25m",
      highlights: ["Fish diversity", "Coral gardens", "Photography", "Relaxed diving"],
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Neil Island",
      marineLife: ["Angelfish", "Butterflyfish", "Surgeonfish", "Triggerfish"]
    },
    {
      name: "Manta Point",
      depth: "15-30m",
      difficulty: "Intermediate",
      description: "Cleaning station with frequent manta ray sightings",
      visibility: "15-25m",
      highlights: ["Manta ray encounters", "Cleaning station", "Pelagic life", "Photography"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Havelock Island",
      marineLife: ["Manta rays", "Reef sharks", "Cleaning wrasse", "Butterflyfish"]
    }
  ];

  const courses = [
    {
      name: "Discover Scuba Diving",
      duration: "1 Day",
      price: "₹6,500",
      description: "Perfect introduction to diving with basic skills and one open water dive",
      depth: "12m",
      includes: ["Theory session", "Pool session", "1 open water dive", "Equipment", "Certificate"],
      requirements: ["No experience needed", "Basic swimming ability", "Age 10+"]
    },
    {
      name: "PADI Open Water Course",
      duration: "3-4 Days",
      price: "₹32,000",
      description: "Complete certification course with theory, confined water, and 4 open water dives",
      depth: "18m",
      includes: ["Theory sessions", "Pool sessions", "4 open water dives", "Equipment", "Certification", "Log book"],
      requirements: ["Basic swimming ability", "Age 10+", "Good health condition"]
    },
    {
      name: "Advanced Open Water",
      duration: "2-3 Days",
      price: "₹28,000",
      description: "Advanced certification with 5 adventure dives including deep and navigation",
      depth: "30m",
      includes: ["5 adventure dives", "Deep dive", "Navigation dive", "Equipment", "Certification"],
      requirements: ["Open Water certification", "Age 12+", "Good health condition"]
    },
    {
      name: "Emergency First Response",
      duration: "1 Day",
      price: "₹8,000",
      description: "Essential first aid and CPR training for divers and non-divers",
      depth: "N/A",
      includes: ["First aid training", "CPR training", "AED training", "Certification"],
      requirements: ["No prerequisites", "Age 12+"]
    }
  ];

  const marineLife = [
    "Sea turtles",
    "Manta rays",
    "Whale sharks (seasonal)",
    "Reef sharks",
    "Napoleon wrasse",
    "Angelfish",
    "Butterflyfish",
    "Parrotfish",
    "Moray eels",
    "Barracudas",
    "Groupers",
    "Sweetlips",
    "Pufferfish",
    "Nudibranchs",
    "Coral formations"
  ];

  const conservation = [
    "Respect marine life and coral reefs",
    "Maintain proper buoyancy control",
    "Do not touch or stand on corals",
    "Secure all equipment to prevent damage",
    "Follow responsible diving practices",
    "Support marine conservation efforts",
    "Report any environmental concerns",
    "Participate in reef cleanup activities"
  ];

  const divePackages = [
    {
      name: "Single Dive Experience",
      dives: "1 dive",
      duration: "3-4 hours",
      price: "₹3,500",
      includes: ["Equipment", "Instructor", "Boat transfer", "Light refreshments"],
      bestFor: "Beginners and first-timers"
    },
    {
      name: "Two Dive Package",
      dives: "2 dives",
      duration: "Full day",
      price: "₹6,000",
      includes: ["Equipment", "Instructor", "Boat transfer", "Lunch", "Refreshments"],
      bestFor: "Certified divers and enthusiasts"
    },
    {
      name: "Fun Diving Package",
      dives: "5 dives",
      duration: "2-3 days",
      price: "₹14,000",
      includes: ["Equipment", "Dive master", "Boat transfers", "Tanks and weights"],
      bestFor: "Certified divers wanting to explore multiple sites"
    },
    {
      name: "Night Dive Special",
      dives: "1 night dive",
      duration: "3-4 hours",
      price: "₹4,500",
      includes: ["Equipment", "Instructor", "Underwater lights", "Boat transfer"],
      bestFor: "Experienced divers looking for adventure"
    }
  ];

  const faqs = [
    {
      question: 'Can non-swimmers try scuba diving?',
      answer: 'Yes! Our Discover Scuba Diving program is perfect for beginners with no swimming experience required.'
    },
    {
      question: 'What is the visibility like in Andaman waters?',
      answer: 'Visibility typically ranges from 15-30 meters, with the best conditions from December to April.'
    },
    {
      question: 'Do I need to be certified?',
      answer: 'No certification is required for introductory dives. We offer PADI certification courses for those interested.'
    },
    {
      question: 'Is diving equipment provided?',
      answer: 'Yes, we provide all necessary diving equipment including masks, snorkels, fins, BCDs, regulators, and wetsuits.'
    },
    {
      question: 'Can I bring my own diving equipment?',
      answer: 'Yes, you\'re welcome to bring your own equipment. We offer discounts for divers with their own gear.'
    },
    {
      question: 'Are there any medical restrictions for diving?',
      answer: 'Yes, conditions like asthma, heart problems, epilepsy, and pregnancy may restrict diving. A medical questionnaire is required.'
    }
  ];

  return (
    <ExperienceLayout
      title="Scuba Diving Adventures"
      subtitle="Explore the Deep"
      description="Explore the vibrant underwater world of the Andaman Islands with our professional diving experiences. From beginner-friendly discovery dives to advanced certifications, discover a world of color beneath the waves."
      image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "3-4 Hours",
        location: "Havelock & Neil",
        price: "From ₹3,500"
      }}
      slug="scuba-diving"
      seo={{
        title: "Scuba Diving in Andaman | Best Diving Sites & Courses 2025",
        description: "Explore underwater paradise with scuba diving in Andaman. 30+ dive sites, PADI certified instructors, beginner to advanced courses. Book diving packages from ₹3,500.",
        keywords: "scuba diving andaman, andaman diving packages, PADI diving andaman, havelock diving, neil island diving, north bay diving, best diving sites andaman, underwater photography, diving courses andaman, diving certification andaman, coral reef diving, beginner scuba diving"
      }}
      bookingData={{
        packageName: 'Scuba Diving Adventures',
        source: 'experience',
        slug: 'scuba-diving'
      }}
      faqData={faqs}
    >
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", desc: "PADI certified instructors and top-quality equipment" },
              { icon: Compass, title: "Expert Guides", desc: "Experienced instructors who know the waters" },
              { icon: Award, title: "Quality Equipment", desc: "Latest diving gear and safety equipment" },
              { icon: Anchor, title: "Best Locations", desc: "Access to premium diving spots" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dive Sites */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-3 block">Underwater Paradise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">World-Class Dive Sites</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore these incredible diving locations in the Andaman Islands, each offering unique underwater experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diveSites.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {site.difficulty}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-cyan-500 text-white shadow-lg flex items-center gap-1">
                      <MapPin size={12} />
                      {site.location}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{site.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{site.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-300 bg-gray-700/50 p-3 rounded-xl">
                      <Waves className="w-4 h-4 mr-2 text-cyan-400" />
                      {site.depth}
                    </div>
                    <div className="flex items-center text-gray-300 bg-gray-700/50 p-3 rounded-xl">
                      <Sun className="w-4 h-4 mr-2 text-yellow-400" />
                      {site.visibility}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2 opacity-80">Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {site.highlights.slice(0, 3).map((highlight, i) => (
                          <span key={i} className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/20">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dive Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Dive Packages</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choose the perfect diving package for your experience level and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-between mb-6 text-gray-500 text-sm">
                  <span className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                    <Anchor className="w-3 h-3 mr-2" />
                    {pkg.dives}
                  </span>
                  <span className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                    <Clock className="w-3 h-3 mr-2" />
                    {pkg.duration}
                  </span>
                </div>
                
                <div className="mb-6 flex-grow">
                  <p className="text-gray-500 text-sm font-medium mb-4 italic">Best for: {pkg.bestFor}</p>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Scuba Diving Adventures',
                          source: 'experience',
                          slug: 'scuba-diving',
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

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">PADI Certification Courses</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From beginners to advanced divers, we have courses for every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{course.name}</h3>
                  <p className="text-blue-100 text-sm opacity-90">{course.duration}</p>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-500 text-sm bg-gray-50 px-3 py-1 rounded-lg">
                      <Waves className="w-4 h-4 mr-2 text-blue-500" />
                      {course.depth}
                    </div>
                    <span className="text-xl font-bold text-blue-600">{course.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{course.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                    <div className="space-y-2">
                      {course.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {course.includes.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium pl-5">+{course.includes.length - 3} more items</div>
                      )}
                    </div>
                  </div>

                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Scuba Diving Adventures',
                          source: 'experience',
                          slug: 'scuba-diving',
                          selectedActivities: [course.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="block w-full py-3 border-2 border-gray-200 text-gray-900 text-center rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Life & Conservation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Marine Life Highlights</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {marineLife.map((creature, index) => (
                    <div key={index} className="flex items-center text-gray-700 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <Fish className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="text-sm font-medium">{creature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Marine Conservation</h2>
              <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Shield className="w-32 h-32" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                      <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="font-bold text-xl">Protect Our Oceans</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {conservation.slice(0, 6).map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-cyan-400 flex-shrink-0" />
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-blue-200 text-sm bg-white/5 p-4 rounded-xl border border-white/10">
                    We actively support marine conservation initiatives and promote responsible diving practices to preserve these waters for future generations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about scuba diving in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default ScubaDivingPage;