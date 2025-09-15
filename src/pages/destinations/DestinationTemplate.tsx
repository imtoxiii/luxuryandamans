import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Activity as ActivityIcon,
  Clock,
  Ticket,
  Star,
  ArrowLeft,
  Info,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Navigation,
  Phone,
  Shield,
  Plane,
  Camera,
  Utensils,
  Cloud,
  Sun,
  CloudRain,
  Eye,
  
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import type { Destination } from '../../data/destinations';

type DestinationTemplateProps = {
  destination: Destination;
};

export default function DestinationTemplate({ destination }: DestinationTemplateProps) {
  const siteUrl = 'https://luxuryandamans.com';
  const canonical = `${siteUrl}/destinations/${destination.slug}`;

  const computedKeywords = [
    destination.name,
    `${destination.name} travel guide`,
    `${destination.name} Andaman`,
    `${destination.name} timings`,
    `${destination.name} entry fee`,
    `${destination.name} how to reach`,
    `${destination.name} best time to visit`,
    destination.category.replace('-', ' '),
    ...destination.activities
  ].join(', ');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Destinations',
        item: `${siteUrl}/destinations`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: destination.name,
        item: canonical
      }
    ]
  };

  const openingHours = destination.timings?.openTime && destination.timings?.closeTime
    ? [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
        ],
        opens: destination.timings.openTime,
        closes: destination.timings.closeTime
      }]
    : undefined;

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: destination.name,
    description: destination.description,
    url: canonical,
    image: destination.image,
    isAccessibleForFree: destination.ticketInfo?.entryFee ? false : true,
    touristType: destination.bestFor ?? ['All'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Andaman and Nicobar Islands'
    },
    openingHoursSpecification: openingHours,
    offers: destination.ticketInfo?.entryFee !== undefined ? [{
      '@type': 'Offer',
      price: String(destination.ticketInfo.entryFee),
      priceCurrency: 'INR',
      category: 'Entry'
    }] : undefined
  };

  const destinationFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the best time to visit ${destination.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: destination.bestTimeToVisit
        }
      },
      {
        '@type': 'Question',
        name: `How can I reach ${destination.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: destination.howToReach
        }
      },
      destination.ticketInfo?.entryFee !== undefined ? {
        '@type': 'Question',
        name: `What is the entry fee for ${destination.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Entry fee is ₹${destination.ticketInfo.entryFee}${destination.ticketInfo.showTicket ? `; show ticket ₹${destination.ticketInfo.showTicket}` : ''}.`
        }
      } : null
    ].filter(Boolean)
  };
  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title={destination.name}
        description={destination.description}
        keywords={computedKeywords}
        image={destination.image}
        type="article"
        tags={[destination.region, destination.category, ...destination.activities]}
        extraStructuredData={[breadcrumbSchema, touristAttractionSchema, destinationFaq]}
        pathname={`/destinations/${destination.slug}`}
      />
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link
                to="/destinations"
                className="inline-flex items-center text-pearl/80 hover:text-pearl mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Back to Destinations
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pearl mb-3 sm:mb-4 leading-tight">
                {destination.name}
              </h1>
              <p className="text-lg sm:text-xl text-pearl/90 mb-6 sm:mb-8 leading-relaxed">
                {destination.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-pearl/90">
                <div className="flex items-center text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span>{destination.category.replace('-', ' ').toUpperCase()}</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span>{destination.bestTimeToVisit}</span>
                </div>
                {destination.ticketInfo?.entryFee !== undefined && (
                  <div className="flex items-center text-sm sm:text-base">
                    <Ticket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span>₹{destination.ticketInfo.entryFee} entry</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      {destination.quickInfo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 sm:py-12 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-6 sm:mb-8">
                <Info className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold text-night">Quick Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(destination.quickInfo).map(([key, value], index) => (
                  <div key={index} className="bg-pearl p-4 sm:p-6 rounded-xl">
                    <h3 className="font-semibold text-night mb-2 text-sm sm:text-base">{key}</h3>
                    <p className="text-night/70 text-sm sm:text-base">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Overview Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-night mb-4 sm:mb-6">About {destination.name}</h2>
                <div className="prose prose-sm sm:prose-lg text-night/70 mb-6 sm:mb-8">
                  {destination.longDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{paragraph.trim()}</p>
                  ))}
                </div>

                {/* Travel Information */}
                {destination.travelInfo && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3">
                      <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-azure mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-night mb-2 text-sm sm:text-base">How to Reach</h3>
                        <p className="text-night/70 mb-2 text-sm sm:text-base leading-relaxed">{destination.howToReach}</p>
                        <ul className="text-night/70 space-y-1">
                          {destination.travelInfo.transportOptions.map((option, index) => (
                            <li key={index} className="flex items-center text-sm sm:text-base">
                              <span className="w-2 h-2 glass-sunset-dot mr-2 flex-shrink-0" />
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {destination.timings && (
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-azure mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-night mb-2 text-sm sm:text-base">Timings</h3>
                          <div className="text-night/70 space-y-1 text-sm sm:text-base">
                            {destination.timings.openTime && (
                              <p>Open: {destination.timings.openTime} - {destination.timings.closeTime}</p>
                            )}
                            {destination.timings.lunchBreak && (
                              <p>Lunch Break: {destination.timings.lunchBreak}</p>
                            )}
                            {destination.timings.specialTimings && (
                              <p>Special: {destination.timings.specialTimings}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="order-1 lg:order-2">
                {/* Gallery */}
                {destination.gallery && destination.gallery.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-night mb-3 sm:mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {destination.gallery.map((image, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden group aspect-w-16 aspect-h-10">
                          <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-pearl text-xs sm:text-sm leading-tight">
                              {image.caption}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Facilities */}
                {destination.facilities && destination.facilities.length > 0 && (
                  <div className="bg-white p-4 sm:p-6 rounded-xl">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-azure mr-2 flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl font-bold text-night">Facilities Available</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {destination.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-night/70 text-sm sm:text-base">
                          <span className="w-2 h-2 glass-sunset-dot mr-3 flex-shrink-0" />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      

      {/* Highlights Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-night mb-3 sm:mb-4">Main Highlights</h2>
              <p className="text-night/70 text-sm sm:text-base">Discover what makes {destination.name} special</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {destination.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-52 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-pearl mb-2">{highlight.title}</h3>
                    <p className="text-pearl/90 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Activities Section */}
      {destination.detailedActivities && destination.detailedActivities.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8 sm:mb-12">
                <ActivityIcon className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-night">Activities & Experiences</h2>
                  <p className="text-night/70 text-sm sm:text-base">Things to do at {destination.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {destination.detailedActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-night flex-1">{activity.name}</h3>
                      {activity.price && (
                        <div className="flex items-center text-azure font-semibold text-sm sm:text-base flex-shrink-0">
                          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          ₹{activity.price}
                        </div>
                      )}
                    </div>
                    <p className="text-night/70 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{activity.description}</p>

                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      {activity.duration && (
                        <div className="flex items-center text-night/60 text-sm sm:text-base">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                          <span>Duration: {activity.duration}</span>
                        </div>
                      )}

                      {activity.timings && (
                        <div className="flex items-center text-night/60 text-sm sm:text-base">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                          <span>Timings: {activity.timings}</span>
                        </div>
                      )}
                    </div>

                    {activity.highlights && activity.highlights.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-night mb-2 text-sm sm:text-base">Highlights:</h4>
                        <div className="grid grid-cols-1 gap-1 sm:gap-2">
                          {activity.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center text-night/70 text-xs sm:text-sm">
                              <Star className="w-3 h-3 mr-2 text-sunset flex-shrink-0" />
                              <span className="leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Historical Information */}
      {destination.historicalInfo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6 sm:mb-8">
                <Info className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold text-night">Historical Background</h2>
              </div>
              <div className="prose prose-sm sm:prose-lg text-night/70">
                <p className="text-sm sm:text-base leading-relaxed">{destination.historicalInfo}</p>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Weather Information */}
      {destination.weatherInfo && destination.weatherInfo.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8 sm:mb-12">
                <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-night">Weather & Best Time to Visit</h2>
                  <p className="text-night/70 text-sm sm:text-base">Plan your visit according to weather conditions</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {destination.weatherInfo.map((weather, index) => {
                  const seasonIcon = weather.season.includes('Winter') ? (() => <Cloud className="w-6 h-6 text-blue-500" />) :
                                   weather.season.includes('Summer') ? (() => <Sun className="w-6 h-6 text-yellow-500" />) :
                                   (() => <CloudRain className="w-6 h-6 text-gray-500" />);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        {seasonIcon()}
                        <h3 className="text-lg font-bold text-night ml-2">{weather.season}</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-night text-sm">Temperature:</span>
                          <p className="text-night/70 text-sm">{weather.temperature}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-night text-sm">Conditions:</span>
                          <p className="text-night/70 text-sm">{weather.conditions}</p>
                        </div>
                        {weather.seaConditions && (
                          <div>
                            <span className="font-semibold text-night text-sm">Sea Conditions:</span>
                            <p className="text-night/70 text-sm">{weather.seaConditions}</p>
                          </div>
                        )}
                        {weather.visibility && (
                          <div>
                            <span className="font-semibold text-night text-sm">Visibility:</span>
                            <p className="text-night/70 text-sm">{weather.visibility}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Local Cuisine */}
      {destination.localCuisine && destination.localCuisine.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8 sm:mb-12">
                <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-night">Local Cuisine</h2>
                  <p className="text-night/70 text-sm sm:text-base">Taste the flavors of {destination.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {destination.localCuisine.map((dish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-pearl p-6 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-night">{dish.specialty}</h3>
                      {dish.price && (
                        <span className="text-azure font-semibold text-sm">{dish.price}</span>
                      )}
                    </div>
                    <p className="text-night/70 text-sm mb-4 leading-relaxed">{dish.description}</p>
                    <div className="border-t border-night/10 pt-3">
                      <span className="font-semibold text-night text-sm">Where to try:</span>
                      <p className="text-night/70 text-sm">{dish.whereToTry}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Planning & Essentials (Combined) */}
      {(destination.bestFor?.length || destination.nearbyAttractions?.length || destination.itineraries?.length || destination.stayOptions?.length || destination.practicalInfo) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-night">Planning & Essentials</h2>
                <p className="text-night/70 text-sm sm:text-base">Compact info: best fit, nearby, itineraries, stays, practicals</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-6">
                  {/* Best For */}
                  {destination.bestFor && destination.bestFor.length > 0 && (
                    <div className="bg-white p-5 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-night mb-3">Best For</h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.bestFor.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-azure/10 text-azure text-xs sm:text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Nearby Attractions */}
                  {destination.nearbyAttractions && destination.nearbyAttractions.length > 0 && (
                    <div className="bg-white p-5 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-night mb-3">Nearby Attractions</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {destination.nearbyAttractions.map((a, idx) => (
                          <div key={idx} className="flex items-start justify-between">
                            <div>
                              {a.slug ? (
                                <Link className="text-azure font-semibold hover:underline" to={`/destinations/${a.slug}`}>{a.name}</Link>
                              ) : (
                                <div className="text-night font-semibold">{a.name}</div>
                              )}
                              {a.description && (
                                <p className="text-night/70 text-xs sm:text-sm mt-1">{a.description}</p>
                              )}
                            </div>
                            <div className="text-night/60 text-xs sm:text-sm ml-3 flex-shrink-0">{a.distance}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Suggested Itineraries */}
                  {destination.itineraries && destination.itineraries.length > 0 && (
                    <div className="bg-white p-5 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-night mb-3">Suggested Itineraries</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {destination.itineraries.map((it, idx) => (
                          <div key={idx} className="p-4 bg-pearl rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-night font-semibold">{it.title}</div>
                              <div className="text-night/60 text-xs sm:text-sm">{it.duration}</div>
                            </div>
                            <ul className="list-disc list-inside text-night/70 text-xs sm:text-sm space-y-0.5">
                              {it.activities.map((act, i) => (
                                <li key={i}>{act}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Where to Stay */}
                  {destination.stayOptions && destination.stayOptions.length > 0 && (
                    <div className="bg-white p-5 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-night mb-3">Where to Stay</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {destination.stayOptions.map((stay, idx) => (
                          <div key={idx} className="bg-pearl rounded-lg p-4">
                            <div className="text-night font-semibold text-sm sm:text-base">{stay.name}</div>
                            <div className="text-xs sm:text-sm text-night/60 mt-0.5">{stay.type}{stay.location ? ` • ${stay.location}` : ''}</div>
                            <div className="text-azure font-medium text-sm mt-1">{stay.priceRange}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Practical Information */}
                {destination.practicalInfo && (
                  <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-gray-100">
                    <h3 className="text-lg font-bold text-night mb-3">Practical Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destination.practicalInfo.permits && (
                        <div className="p-4 bg-pearl rounded-lg">
                          <h4 className="font-semibold text-night mb-1 text-sm">Permits</h4>
                          <p className="text-night/70 text-sm">{destination.practicalInfo.permits}</p>
                        </div>
                      )}
                      {destination.practicalInfo.networkCoverage && (
                        <div className="p-4 bg-pearl rounded-lg">
                          <h4 className="font-semibold text-night mb-1 text-sm">Network Coverage</h4>
                          <p className="text-night/70 text-sm">{destination.practicalInfo.networkCoverage.join(', ')}</p>
                        </div>
                      )}
                      {destination.practicalInfo.atmAvailability && (
                        <div className="p-4 bg-pearl rounded-lg">
                          <h4 className="font-semibold text-night mb-1 text-sm">ATM Availability</h4>
                          <p className="text-night/70 text-sm">{destination.practicalInfo.atmAvailability}</p>
                        </div>
                      )}
                      {destination.practicalInfo.medicalFacilities && (
                        <div className="p-4 bg-pearl rounded-lg">
                          <h4 className="font-semibold text-night mb-1 text-sm">Medical Facilities</h4>
                          <p className="text-night/70 text-sm">{destination.practicalInfo.medicalFacilities}</p>
                        </div>
                      )}
                      {destination.practicalInfo.emergencyContacts && (
                        <div className="md:col-span-2 p-4 bg-pearl rounded-lg">
                          <h4 className="font-semibold text-night mb-1 text-sm">Emergency Contacts</h4>
                          <ul className="list-disc list-inside text-night/70 text-sm">
                            {destination.practicalInfo.emergencyContacts.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Tips and Safety */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-pearl"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Travel Tips */}
              {destination.tips && destination.tips.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-xl">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-azure mr-3 flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-bold text-night">Travel Tips</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {destination.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-night/70 text-sm sm:text-base leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Safety Tips */}
              {destination.safetyTips && destination.safetyTips.length > 0 ? (
                <div className="bg-white p-6 sm:p-8 rounded-xl">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-azure mr-3 flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-bold text-night">Safety Guidelines</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {destination.safetyTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <p className="text-night/70 text-sm sm:text-base leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* If no safety tips, show ticket and timing info */
                (destination.ticketInfo || destination.timings) && (
                  <div className="bg-white p-6 sm:p-8 rounded-xl">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <Ticket className="w-6 h-6 sm:w-7 sm:h-7 text-azure mr-3 flex-shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-bold text-night">Visitor Information</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {destination.ticketInfo && (
                        <div>
                          <h4 className="font-semibold text-night mb-2 text-sm sm:text-base">Entry Fees:</h4>
                          <div className="space-y-1 text-sm sm:text-base">
                            {destination.ticketInfo.entryFee !== undefined && (
                              <p className="text-night/70">Entry: ₹{destination.ticketInfo.entryFee} per person</p>
                            )}
                            {destination.ticketInfo.showTicket && (
                              <p className="text-night/70">Show: ₹{destination.ticketInfo.showTicket} per person</p>
                            )}
                            {destination.ticketInfo.childrenFee && (
                              <p className="text-night/70">Children: ₹{destination.ticketInfo.childrenFee} per child</p>
                            )}
                          </div>
                        </div>
                      )}
                      {destination.timings && (
                        <div>
                          <h4 className="font-semibold text-night mb-2 text-sm sm:text-base">Operating Hours:</h4>
                          <div className="space-y-1 text-sm sm:text-base">
                            {destination.timings.openTime && (
                              <p className="text-night/70">{destination.timings.openTime} - {destination.timings.closeTime}</p>
                            )}
                            {destination.timings.closedDays && (
                              <p className="text-night/70">Closed: {destination.timings.closedDays}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Photography Tips */}
      {destination.photography && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8 sm:mb-12">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-night">Photography Guide</h2>
                  <p className="text-night/70 text-sm sm:text-base">Capture the best moments at {destination.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-6">
                  <div className="bg-pearl p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-night mb-4">Best Photography Spots</h3>
                    <div className="space-y-2">
                      {destination.photography.bestSpots.map((spot, index) => (
                        <div key={index} className="flex items-center text-night/70 text-sm">
                          <Eye className="w-4 h-4 mr-2 text-azure flex-shrink-0" />
                          {spot}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-pearl p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-night mb-4">Golden Hours</h3>
                    <p className="text-night/70 text-sm leading-relaxed">{destination.photography.goldenhours}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-pearl p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-night mb-4">Photography Tips</h3>
                    <div className="space-y-2">
                      {destination.photography.tips.map((tip, index) => (
                        <div key={index} className="flex items-start text-night/70 text-sm">
                          <Camera className="w-4 h-4 mr-2 text-azure flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {destination.photography.restrictions && destination.photography.restrictions.length > 0 && (
                    <div className="bg-pearl p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-night mb-4">Photography Guidelines</h3>
                      <div className="space-y-2">
                        {destination.photography.restrictions.map((restriction, index) => (
                          <div key={index} className="flex items-start text-night/70 text-sm">
                            <AlertTriangle className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{restriction}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Budget Information */}
      {destination.budgetInfo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8 sm:mb-12">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-night">Budget Guide</h2>
                  <p className="text-night/70 text-sm sm:text-base">Plan your expenses for {destination.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-night mb-4">Estimated Budget</h3>
                  <div className="text-2xl font-bold text-azure mb-2">{destination.budgetInfo.budget}</div>
                  <p className="text-night/70 text-sm">Per person for complete experience</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-night mb-4">Cost Breakdown</h3>
                  <div className="space-y-3">
                    {destination.budgetInfo.costs.map((cost, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-night/70 text-sm">{cost.item}</span>
                        <span className="font-semibold text-night text-sm">{cost.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Things to Know */}
      {destination.thingsToKnow && destination.thingsToKnow.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8 sm:mb-12">
                <Info className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-night">Things to Know</h2>
                  <p className="text-night/70 text-sm sm:text-base">Essential information for your visit</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {destination.thingsToKnow.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-start space-x-3 bg-pearl p-4 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-azure flex-shrink-0 mt-0.5" />
                    <p className="text-night/70 text-sm leading-relaxed">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-night"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-pearl mb-3 sm:mb-4 leading-tight">
              Ready to Visit {destination.name}?
            </h2>
            <p className="text-pearl/80 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Let us help you plan the perfect trip to this amazing destination
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    const details = {
                      packageName: destination.name,
                      days: undefined,
                      people: 2,
                      totalPrice: undefined,
                      selectedActivities: destination.activities || [],
                      supplements: [],
                      source: 'destination',
                      slug: destination.slug,
                    };
                    localStorage.setItem('enquiryDetails', JSON.stringify(details));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-sm sm:text-base font-medium"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Plan Your Visit
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-sm sm:text-base font-medium"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}


