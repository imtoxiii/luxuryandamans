import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Plane, 
  AlertTriangle,
  ArrowLeft,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import NotFound from '../NotFound';
import { locations } from '../../data/locations';
import InteractiveMap from '../../components/InteractiveMap';

const LocationPage = () => {
  const { slug } = useParams();
  const location = locations.find(l => l.slug === slug);

  if (!location) {
    return <NotFound />;
  }

  const islandExtras: Record<string, { hub: string; hubLabel: string; blog: string; blogLabel: string; pack: string; packLabel: string }> = {
    'port-blair': {
      hub: '/destinations/port-blair-destinations',
      hubLabel: 'Port Blair sightseeing',
      blog: '/blog/port-blair-travel-guide-2026',
      blogLabel: 'Port Blair travel guide',
      pack: '/blog/andaman-packages-from-delhi-2026',
      packLabel: 'Andaman packages from Delhi',
    },
    'havelock-island': {
      hub: '/destinations/havelock-destinations',
      hubLabel: 'Havelock beaches & dives',
      blog: '/blog/havelock-island-travel-guide-2026',
      blogLabel: 'Havelock Island 2026 guide',
      pack: '/blog/andaman-honeymoon-packages-2026',
      packLabel: 'Honeymoon packages',
    },
    'neil-island': {
      hub: '/destinations/neil-destinations',
      hubLabel: 'Neil Island sights',
      blog: '/blog/neil-island-travel-guide-2026',
      blogLabel: 'Neil Island 2026 guide',
      pack: '/blog/4-nights-5-days-andaman-package-2026',
      packLabel: '4N/5D Andaman package',
    },
  };
  const extras = islandExtras[location.slug];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title={`${location.name} Travel Guide 2026`}
        description={location.description}
        pathname={`/locations/${location.slug}`}
        image={location.image}
        keywords={`${location.name.toLowerCase()}, ${location.name.toLowerCase()} andaman, ${location.name.toLowerCase()} travel guide, things to do in ${location.name.toLowerCase()}, ${location.slug.replace(/-/g, ' ')}, andaman islands, andaman tour packages`}
        faqData={[
          {
            question: `How many nights should I stay in ${location.name}?`,
            answer: location.slug === 'havelock-island'
              ? 'Two nights is the minimum that feels like a holiday. Three if you want scuba plus a slow Radhanagar sunset.'
              : location.slug === 'neil-island'
                ? 'One night is enough for Natural Bridge and Bharatpur. Two nights if you want a slow cycle day. Skip Neil entirely on a 4N/5D trip.'
                : 'One night on arrival and optionally one before the flight. Most sightseeing (Cellular Jail, Ross, North Bay) is day-trip from Port Blair.',
          },
          {
            question: `Do I need a separate permit for ${location.name}?`,
            answer: 'Indian citizens need photo ID only. Foreign visitors need a valid Indian visa and passport for standard tourist islands. Restricted tribal areas are not on this itinerary.',
          },
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={location.image}
          alt={`${location.name} — Andaman Islands travel destination`}
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
                {location.name} Travel Guide 2026
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
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/packages"
                  className="inline-flex items-center px-6 py-3 bg-azure text-white rounded-xl font-semibold hover:bg-azure/90 transition-colors"
                >
                  View Tour Packages
                </Link>
                <Link
                  to="/experiences/scuba-diving"
                  className="inline-flex items-center px-6 py-3 bg-white text-night border border-night/10 rounded-xl font-semibold hover:border-azure/30 transition-colors"
                >
                  Explore Activities
                </Link>
              </div>
              {extras && (
                <p className="mt-6 text-night/70">
                  Also see the{' '}
                  <Link to={extras.hub} className="text-azure font-semibold hover:underline">{extras.hubLabel}</Link>
                  {', '}
                  <Link to={extras.blog} className="text-azure font-semibold hover:underline">{extras.blogLabel}</Link>
                  {', and '}
                  <Link to={extras.pack} className="text-azure font-semibold hover:underline">{extras.packLabel}</Link>.
                </p>
              )}
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
