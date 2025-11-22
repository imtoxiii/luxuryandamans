import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Fish, Anchor, Clock, Users, Trophy, MapPin, Camera, CheckCircle, Star, Waves, Compass, Calendar, Shield } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const GameFishingPage = () => {
  const charters = [
    {
      name: 'Half-Day Offshore Charter',
      duration: '4 hours',
      price: '₹18,000 up to 4',
      includes: [
        'Professional crew',
        'All fishing gear & bait',
        'Soft drinks & snacks',
        'Catch-and-release encouraged',
        'Safety equipment'
      ],
      description:
        'Perfect for beginners and families. Target species include trevally, snapper, and barracuda.',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Beginners, Families',
      departure: 'Port Blair',
      highlights: ['Beginner friendly', 'Family suitable', 'Professional crew', 'All equipment'],
      targetSpecies: ['Giant Trevally', 'Snapper', 'Barracuda', 'Groupers']
    },
    {
      name: 'Full-Day Big Game Charter',
      duration: '8 hours',
      price: '₹32,000 up to 4',
      includes: [
        'Trolling and jigging setup',
        'Expert captain & deckhand',
        'Lunch & refreshments',
        'Fuel and permits',
        'Fishing license'
      ],
      description:
        'Head into deeper waters for GT, tuna, and sailfish. Ideal for enthusiasts.',
      image:
        'https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Enthusiasts, Experienced anglers',
      departure: 'Havelock Island',
      highlights: ['Deep waters', 'Trophy fish', 'Expert guidance', 'Full day adventure'],
      targetSpecies: ['Giant Trevally', 'Tuna', 'Sailfish', 'Marlin']
    },
    {
      name: 'Night Fishing Special',
      duration: '6 hours',
      price: '₹25,000 up to 4',
      includes: [
        'Specialized night gear',
        'Underwater lights',
        'Dinner & refreshments',
        'Safety instructor',
        'Photography service'
      ],
      description:
        'Experience the thrill of night fishing with specialized equipment and lighting.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Adventure seekers, Experienced anglers',
      departure: 'Neil Island',
      highlights: ['Unique experience', 'Night specialized', 'Photography', 'Dinner included'],
      targetSpecies: ['Snappers', 'Groupers', 'Emperors', 'Night predators']
    }
  ];

  const targetSpecies = [
    {
      name: 'Giant Trevally (GT)',
      description: 'The ultimate trophy fish known for its powerful fights',
      size: 'Up to 80 kg',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Challenging'
    },
    {
      name: 'Tuna',
      description: 'Fast-swimming fish found in deeper waters',
      size: 'Up to 100 kg',
      image: 'https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Moderate'
    },
    {
      name: 'Barracuda',
      description: 'Aggressive predator with impressive speed',
      size: 'Up to 50 kg',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Moderate'
    },
    {
      name: 'Sailfish',
      description: 'Majestic billfish with distinctive sail-like fin',
      size: 'Up to 100 kg',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Challenging'
    }
  ];

  const fishingSpots = [
    {
      name: 'Barren Island',
      description: 'Volcanic island waters with abundant big game fish',
      distance: '90 km from Port Blair',
      bestFor: 'Experienced anglers',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Cinque Island',
      description: 'Protected marine area with pristine fishing grounds',
      distance: '25 km from Port Blair',
      bestFor: 'All skill levels',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Havelock Waters',
      description: 'Rich fishing grounds with diverse species',
      distance: '60 km from Port Blair',
      bestFor: 'Beginners to experts',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const equipment = [
    {
      name: 'Rods & Reels',
      description: 'High-quality trolling, spinning, and jigging equipment'
    },
    {
      name: 'Lures & Baits',
      description: 'Professional-grade lures and fresh baits for target species'
    },
    {
      name: 'Safety Gear',
      description: 'Life jackets, first aid kit, and communication equipment'
    },
    {
      name: 'Navigation',
      description: 'GPS, fish finders, and modern navigation systems'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      rating: 5,
      comment: 'The full-day charter was incredible! We caught a massive GT and the crew was amazing. The best fishing experience I\'ve had anywhere.',
      location: 'Singapore'
    },
    {
      name: 'Michael Thompson',
      rating: 5,
      comment: 'As an experienced angler, I was impressed by the quality of equipment and knowledge of the captain. We hooked a sailfish - unforgettable!',
      location: 'Australia'
    },
    {
      name: 'The Wilson Family',
      rating: 5,
      comment: 'Our kids loved the half-day charter. The crew was patient with beginners, and we all caught fish. Great family activity!',
      location: 'United Kingdom'
    }
  ];

  const advice = [
    'Peak season: Oct–May; monsoon trips are weather-dependent',
    'We practice sustainable fishing; some species are strictly catch-and-release',
    'Wear sun protection and non-slip footwear',
    'Motion sickness tablets recommended if needed',
    'Bring your camera for trophy shots',
    'Listen carefully to crew instructions for safety',
    'Stay hydrated - we provide water but bring extra if needed',
    'Book in advance during peak season (Dec-Feb)'
  ];

  const faqs = [
    {
      question: "Do I need fishing experience?",
      answer: "No experience necessary. Our crew provides full guidance and assistance for beginners, while experienced anglers will appreciate our quality equipment and knowledge of local fishing spots."
    },
    {
      question: "Is it catch-and-release?",
      answer: "We practice sustainable fishing with selective catch-and-release for conservation. Some species can be kept for personal consumption, while protected species are strictly released."
    },
    {
      question: "What fish can we expect to catch?",
      answer: "Common catches include Giant Trevally, tuna, barracuda, snapper, and groupers. Seasonally, you might also catch sailfish, marlin, and other billfish."
    },
    {
      question: "What happens if weather is bad?",
      answer: "Trips are weather-dependent for safety. In case of bad weather, we offer rescheduling options or full refunds. We monitor conditions closely and make informed decisions."
    },
    {
      question: "What should I bring on the trip?",
      answer: "Bring sun protection, hat, sunglasses, camera, and personal medications. We provide all fishing equipment, refreshments, and safety gear. Motion sickness tablets are recommended."
    },
    {
      question: "Can we keep the fish we catch?",
      answer: "Some species can be kept for personal consumption. Protected species and oversized fish are strictly released. Our crew will advise which fish can be kept."
    },
    {
      question: "Are there bathroom facilities on the boats?",
      answer: "Yes, our charter boats are equipped with basic bathroom facilities for your comfort during the trip."
    },
    {
      question: "What if I don't catch any fish?",
      answer: "While we can't guarantee catches, our experienced crews take you to the best spots. In the unlikely event of no bites, we'll extend the time if possible or offer a discount on future trips."
    },
    {
      question: "Is food and drink provided?",
      answer: "Soft drinks and snacks are provided on half-day trips. Full-day charters include lunch. You can bring additional personal items if preferred."
    },
    {
      question: "How far do we travel from shore?",
      answer: "Travel distance varies by target species. Half-day trips typically stay 10-20 km offshore, while full-day big game charters may travel 30-90 km to productive fishing grounds."
    }
  ];

  return (
    <ExperienceLayout
      title="Game Fishing Charters"
      subtitle="Chase the Trophy"
      description="Chase trophy fish in the pristine Andaman waters with expert crews and premium gear. Experience the thrill of big game fishing in one of the world's last untouched fisheries."
      image="https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "4-8 Hours",
        location: "Port Blair & Havelock",
        price: "From ₹18,000"
      }}
      slug="game-fishing"
      seo={{
        title: "Game Fishing in Andaman | Offshore Charters | Book Private Boat",
        description: "Book game fishing charters in Andaman. Half-day and full-day private boats with crew, gear, and refreshments. Target GT, tuna, barracuda, and more.",
        keywords: "game fishing andaman, fishing charter andaman, big game havelock, sport fishing andaman, trolling jigging andaman"
      }}
      bookingData={{
        packageName: 'Game Fishing Charters',
        source: 'experience',
        slug: 'game-fishing'
      }}
    >
      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Fish className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rich Fishery</h3>
              <p className="text-gray-600 text-sm">GT, tuna, barracuda, sailfish</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Anchor className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Boats</h3>
              <p className="text-gray-600 text-sm">Well-equipped, safety compliant</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Crews</h3>
              <p className="text-gray-600 text-sm">Local captains with years of experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Species */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Target Species</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the prized game fish of Andaman waters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetSpecies.map((species, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {species.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{species.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{species.description}</p>
                  <div className="flex items-center text-gray-400 text-sm bg-gray-700/50 p-2 rounded-lg">
                    <Fish className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Up to {species.size}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fishing Spots */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Prime Fishing Spots</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore the best fishing grounds in the Andaman Islands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fishingSpots.map((spot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{spot.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{spot.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Compass className="w-4 h-4 mr-2" />
                      <span>{spot.distance}</span>
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                      {spot.bestFor}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Premium Equipment</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide top-quality fishing gear for your charter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <Fish className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{item.name}</h3>
                <p className="text-gray-600 text-center text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Charter Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Select the ideal trip length and style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {charters.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold z-20 shadow-lg">{c.price}</div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                      {c.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{c.name}</h3>
                  <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                    <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4 mr-2" />
                      {c.duration}
                    </span>
                    <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <MapPin className="w-4 h-4 mr-2" />
                      {c.departure}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{c.description}</p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Target Species:</h4>
                    <div className="flex flex-wrap gap-2">
                      {c.targetSpecies.map((species, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-medium">
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                    <div className="space-y-2">
                      {c.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {c.includes.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium pl-6">+{c.includes.length - 3} more items</div>
                      )}
                    </div>
                  </div>

                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Game Fishing Charters',
                          source: 'experience',
                          slug: 'game-fishing',
                          selectedActivities: [c.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30 mt-auto"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Angler Experiences
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from fellow fishing enthusiasts about their Andaman adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advice */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Trip Advice</h2>
            <p className="text-gray-500">Quick tips to make the most of your charter</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">Planning & Booking</span>
              </div>
              <ul className="space-y-4">
                {advice.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">During the Trip</span>
              </div>
              <ul className="space-y-4">
                {advice.slice(4, 8).map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about game fishing in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default GameFishingPage;
