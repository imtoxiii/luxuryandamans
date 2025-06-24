import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Shield, Award, Clock, Users } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const ScubaDivingPage = () => {
  const diveSites = [
    {
      name: "Dixon's Pinnacle",
      depth: "18-40m",
      difficulty: "Advanced",
      description: "Famous for its coral gardens and diverse marine life",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "The Wall",
      depth: "12-35m",
      difficulty: "Intermediate",
      description: "Vertical wall dive with stunning coral formations",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const courses = [
    {
      name: "Discover Scuba Diving",
      duration: "1 Day",
      price: "₹6,500",
      description: "Perfect for beginners wanting to try scuba diving",
      requirements: ["No experience needed", "Basic swimming ability", "Age 10+"]
    },
    {
      name: "PADI Open Water Course",
      duration: "3-4 Days",
      price: "₹32,000",
      description: "Complete certification course for beginners",
      requirements: ["Basic swimming ability", "Age 10+", "Good health condition"]
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
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
              Popular Dive Sites
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Explore some of the best diving locations in the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2  z-20">
                    {site.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-night mb-2">{site.name}</h3>
                  <p className="text-night/70 mb-4">{site.description}</p>
                  <div className="flex items-center space-x-4 text-night/60">
                    <span className="flex items-center">
                      <Anchor className="w-4 h-4 mr-2" />
                      Depth: {site.depth}
                    </span>
                  </div>
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
              Diving Courses
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              From beginners to advanced divers, we have courses for every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-night mb-2">{course.name}</h3>
                <div className="flex items-center space-x-4 mb-4 text-night/60">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Small groups
                  </span>
                </div>
                <p className="text-night/70 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-night/60">
                      <span className="w-2 h-2 glass-sunset-dot mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-night">{course.price}</span>
                  <Link
                    to="/enquiry"
                    className="inline-flex items-center px-6 py-3 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScubaDivingPage;