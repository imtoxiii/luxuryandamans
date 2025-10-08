import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Shield, Award, Clock, Users, Waves, MapPin, Sun, Fish, CheckCircle, AlertCircle, Camera } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
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

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Scuba Diving in Andaman | Best Diving Sites | PADI Certified | Book Now"
        description="Explore underwater paradise with scuba diving in Andaman. 30+ dive sites, PADI certified instructors, beginner to advanced courses. Book diving packages from ₹3,500."
        keywords="scuba diving andaman, andaman diving packages, PADI diving andaman, havelock diving, neil island diving, north bay diving, best diving sites andaman, underwater photography, diving courses andaman, diving certification andaman, coral reef diving, beginner scuba diving"
        targetAudience="adventure"
        pathname="/experiences/scuba-diving"
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Scuba Diving"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">
                Scuba Diving Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Explore the vibrant underwater world of the Andaman Islands with our professional diving experiences
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Scuba Diving Adventures',
                      source: 'experience',
                      slug: 'scuba-diving'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Dive
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Safety First</h3>
              <p className="text-night/70">PADI certified instructors and top-quality equipment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Expert Guides</h3>
              <p className="text-night/70">Experienced instructors who know the waters</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Quality Equipment</h3>
              <p className="text-night/70">Latest diving gear and safety equipment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Best Locations</h3>
              <p className="text-night/70">Access to premium diving spots</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dive Sites */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              World-Class Dive Sites
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Explore these incredible diving locations in the Andaman Islands, each offering unique underwater experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diveSites.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {site.difficulty}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {site.location}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{site.name}</h3>
                  <p className="text-night/70 mb-4">{site.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Waves className="w-4 h-4 mr-2" />
                      {site.depth}
                    </span>
                    <span className="flex items-center">
                      <Sun className="w-4 h-4 mr-2" />
                      {site.visibility}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {site.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                      {site.highlights.length > 3 && (
                        <span className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          +{site.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Marine Life:</h4>
                    <div className="flex flex-wrap gap-1">
                      {site.marineLife.slice(0, 3).map((animal, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {animal}
                        </span>
                      ))}
                      {site.marineLife.length > 3 && (
                        <span className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          +{site.marineLife.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dive Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Dive Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect diving package for your experience level and interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-night mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-between mb-4 text-night/60">
                  <span className="flex items-center">
                    <Anchor className="w-4 h-4 mr-2" />
                    {pkg.dives}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </span>
                </div>
                <p className="text-night/70 mb-4 text-sm">{pkg.bestFor}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-night/60">
                      <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-night">{pkg.price}</span>
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
                    className="inline-flex items-center px-4 py-2 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all text-sm"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              PADI Certification Courses
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              From beginners to advanced divers, we have courses for every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="bg-gradient-to-r from-azure to-blue-600 p-4">
                  <h3 className="text-xl font-bold text-pearl">{course.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Waves className="w-4 h-4 mr-2" />
                      {course.depth}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4 text-sm">{course.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {course.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-xs">{item}</span>
                        </div>
                      ))}
                      {course.includes.length > 3 && (
                        <div className="text-xs text-azure">+{course.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Requirements:</h4>
                    <div className="space-y-1">
                      {course.requirements.map((req, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <AlertCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-xs">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-night">{course.price}</span>
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
                      className="inline-flex items-center px-4 py-2 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all text-sm"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Life & Conservation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Marine Life Highlights</h2>
              <div className="grid grid-cols-2 gap-3">
                {marineLife.map((creature, index) => (
                  <div key={index} className="flex items-center text-night/70">
                    <Fish className="w-4 h-4 mr-2 text-azure" />
                    {creature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Marine Conservation</h2>
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 mr-2 text-azure" />
                  <span className="font-semibold text-night">Protect Our Oceans</span>
                </div>
                <ul className="space-y-3">
                  {conservation.slice(0, 6).map((tip, index) => (
                    <li key={index} className="flex items-start text-night/70">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="text-night/70 mt-4 text-sm">
                  We actively support marine conservation initiatives and promote responsible diving practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Season & Equipment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Best Diving Season</h2>
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center mb-4">
                  <Sun className="w-5 h-5 mr-2 text-sunset" />
                  <span className="font-semibold text-night">October to May</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-night mb-2">Peak Season (Nov-Feb)</h4>
                    <p className="text-night/70">Best visibility (20-30m), calm seas, pleasant temperatures (25-28°C)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-night mb-2">Whale Shark Season (Feb-Mar)</h4>
                    <p className="text-night/70">Highest chance of whale shark sightings around Havelock Island</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-night mb-2">Shoulder Season (Oct, Mar-May)</h4>
                    <p className="text-night/70">Fewer crowds, good visibility (15-25m), warmer water (28-30°C)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Equipment & Safety</h2>
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 mr-2 text-azure" />
                  <span className="font-semibold text-night">Top-Quality Gear</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-night/70">
                    <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                    <span>Modern BCDs and regulators</span>
                  </div>
                  <div className="flex items-center text-night/70">
                    <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                    <span>3mm and 5mm wetsuits available</span>
                  </div>
                  <div className="flex items-center text-night/70">
                    <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                    <span>Underwater cameras for rent</span>
                  </div>
                  <div className="flex items-center text-night/70">
                    <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                    <span>Safety equipment on all boats</span>
                  </div>
                  <div className="flex items-center text-night/70">
                    <CheckCircle className="w-4 h-4 mr-2 text-azure" />
                    <span>Oxygen kits and first aid</span>
                  </div>
                </div>
                <p className="text-night/70 mt-4 text-sm">
                  Bring your certification card for advanced dives. Personal equipment welcome.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Frequently Asked Questions</h2>
            <p className="text-night/70">Everything you need to know about scuba diving in Andaman</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Do I need to know swimming for scuba diving?</h3>
              <p className="text-night/70 mt-2">Basic swimming skills are helpful but not mandatory for introductory dives. Our PADI instructors ensure your safety throughout.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">What is the best time for diving in Andaman?</h3>
              <p className="text-night/70 mt-2">October to May offers the best diving conditions with calm seas and excellent visibility. December to February is peak season.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Is diving equipment provided?</h3>
              <p className="text-night/70 mt-2">Yes, we provide all necessary diving equipment including masks, snorkels, fins, BCDs, regulators, and wetsuits.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Can I get certified in Andaman?</h3>
              <p className="text-night/70 mt-2">Absolutely! We offer PADI certification courses from Open Water to Dive Master level with experienced instructors.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Are there any medical restrictions for diving?</h3>
              <p className="text-night/70 mt-2">Yes, conditions like asthma, heart problems, epilepsy, and pregnancy may restrict diving. A medical questionnaire is required.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-night">Can I bring my own diving equipment?</h3>
              <p className="text-night/70 mt-2">Yes, you're welcome to bring your own equipment. We offer discounts for divers with their own gear.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScubaDivingPage;