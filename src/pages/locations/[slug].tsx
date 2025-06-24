import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Plane, 
  Hotel, 
  Activity,
  AlertTriangle,
  ArrowLeft,
  Navigation
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { locations } from '../../data/locations';
import InteractiveMap from '../../components/InteractiveMap';

const LocationPage = () => {
  const { slug } = useParams();
  const location = locations.find(l => l.slug === slug);

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title={`${location.name} - Complete Travel Guide`}
        description={location.description}
        image={location.image}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={location.image}
          alt={location.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link 
                to="/destinations"
                className="inline-flex items-center text-pearl/80 hover:text-pearl mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Destinations
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-4">
                {location.name}
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                {location.tagline}
              </p>
              <div className="flex items-center space-x-4 text-pearl/90">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Andaman Islands</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Best Time: {location.bestTimeToVisit.peak}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-night mb-6">Overview</h2>
              <p className="text-night/70 whitespace-pre-line">{location.longDescription}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-pearl mb-12 text-center"
          >
            Photo Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-pearl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-night mb-12 text-center"
          >
            Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {location.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{highlight.title}</h3>
                  <p className="text-night/70">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-pearl mb-12 text-center"
          >
            Things to Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {location.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{activity.name}</h3>
                  <p className="text-night/70 mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-night/60">
                      <Clock className="w-4 h-4 mr-1" />
                      {activity.duration}
                    </div>
                    <span className="text-azure font-medium">
                      ₹{activity.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-night mb-12 text-center"
          >
            Where to Stay
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {location.accommodation.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-3 py-1  text-sm">
                    {place.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{place.name}</h3>
                  <p className="text-night/70 mb-4">{place.description}</p>
                  <div className="text-azure font-medium">{place.priceRange}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Info Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-pearl mb-12 text-center"
            >
              Travel Information
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* How to Reach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Plane className="w-6 h-6 text-azure mr-2" />
                  <h3 className="text-xl font-bold text-night">How to Reach</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-night/70">
                    <strong>Nearest Airport:</strong><br />
                    {location.howToReach.nearestAirport}
                  </p>
                  <p className="text-night/70">
                    <strong>Best Way to Travel:</strong><br />
                    {location.howToReach.bestWayToTravel}
                  </p>
                  <div>
                    <strong className="text-night">Transport Options:</strong>
                    <ul className="mt-2 space-y-2">
                      {location.howToReach.transportOptions.map((option, index) => (
                        <li key={index} className="flex items-center text-night/70">
                          <span className="w-2 h-2 glass-sunset-dot mr-2" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Best Time to Visit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-azure mr-2" />
                  <h3 className="text-xl font-bold text-night">Best Time to Visit</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-night/70">
                    <strong>Peak Season:</strong><br />
                    {location.bestTimeToVisit.peak}
                  </p>
                  <p className="text-night/70">
                    <strong>Shoulder Season:</strong><br />
                    {location.bestTimeToVisit.shoulder}
                  </p>
                  <p className="text-night/70">
                    <strong>Avoid:</strong><br />
                    {location.bestTimeToVisit.avoid}
                  </p>
                  <p className="text-night/70">
                    <strong>Weather Info:</strong><br />
                    {location.bestTimeToVisit.weatherInfo}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Travel Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-white rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-azure mr-2" />
                <h3 className="text-xl font-bold text-night">Travel Tips</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {location.tips.map((tip, index) => (
                  <li key={index} className="flex items-center text-night/70">
                    <span className="w-2 h-2 glass-sunset-dot mr-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-night mb-12 text-center"
          >
            Location
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <InteractiveMap
              locations={[{
                name: location.name,
                coordinates: [location.coordinates.latitude, location.coordinates.longitude],
                description: location.description,
                type: 'attraction'
              }]}
              center={[location.coordinates.latitude, location.coordinates.longitude]}
              zoom={12}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPage;