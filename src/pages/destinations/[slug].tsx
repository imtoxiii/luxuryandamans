import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Compass, 
  Activity, 
  Clock, 
  Ticket, 
  Camera, 
  Star,
  ArrowLeft,
  Info,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Navigation,
  Phone,
  Shield,
  FileText,
  Users,
  Car,
  Plane
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { destinations } from '../../data/destinations';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const DestinationPage = () => {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-night mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-azure hover:underline text-lg">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title={destination.name}
        description={destination.description}
        keywords={`${destination.name}, andaman, ${destination.category}, ${destination.activities.join(', ')}`}
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
                <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
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
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-azure mr-3 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold text-night">Historical Background</h2>
              </div>
              <div className="prose prose-sm sm:prose-lg text-night/70">
                <p className="text-sm sm:text-base leading-relaxed">{destination.historicalInfo}</p>
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
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Travel Tips */}
            {destination.tips && destination.tips.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-azure mr-3 flex-shrink-0" />
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
            {destination.safetyTips && destination.safetyTips.length > 0 && (
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
            )}

            {/* If no safety tips, show ticket and timing info */}
            {!destination.safetyTips && (destination.ticketInfo || destination.timings) && (
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
            )}
          </div>
        </div>
      </motion.section>

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
};

export default DestinationPage;