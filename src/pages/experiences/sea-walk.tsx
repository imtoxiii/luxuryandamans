import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Shield, Clock, MapPin, Camera, CheckCircle, Heart, Star, Waves } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const SeaWalkPage = () => {
  const experiences = [
    {
      name: 'North Bay Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹3,500 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Photos & videos',
        'Boat transfers',
        'Safety briefing'
      ],
      description:
        'Walk on the seabed and witness colorful corals and friendly fish at North Bay Island.',
      image:
        'https://images.unsplash.com/photo-1522071740424-8b337d0dfa46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Beginners, Families',
      departure: 'Port Blair',
      highlights: ['Shallow waters', 'Rich marine life', 'Professional photography', 'Easy access'],
      depth: '5-7 meters',
      visibility: 'Excellent'
    },
    {
      name: 'Elephant Beach Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹4,500 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Complimentary snorkel session',
        'Refreshments',
        'Beach transfer'
      ],
      description:
        'A scenic sea walk at Havelock’s Elephant Beach with excellent visibility and reefs.',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Adventure seekers, Couples',
      departure: 'Havelock Island',
      highlights: ['Pristine beach', 'Diverse coral formations', 'Snorkeling combo', 'Beach relaxation'],
      depth: '6-8 meters',
      visibility: 'Excellent'
    },
    {
      name: 'Neil Island Sea Walk',
      duration: '30-40 minutes underwater',
      price: '₹4,000 per person',
      includes: [
        'Helmet with oxygen supply',
        'Underwater guide',
        'Photos & videos',
        'Beach transfers',
        'Safety briefing'
      ],
      description:
        'Walk through the crystal-clear waters of Bharatpur Beach, known for its extensive coral reefs.',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      bestFor: 'Coral lovers, Beginners',
      departure: 'Neil Island (Bharatpur Beach)',
      highlights: ['Extensive coral reefs', 'Shallow calm waters', 'Rich fish life', 'Perfect for photos'],
      depth: '4-6 meters',
      visibility: 'Outstanding'
    }
  ];

  const whatToExpect = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Underwater Walking',
      description: 'Walk on the ocean floor with a specialized helmet providing oxygen'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photography Service',
      description: 'Professional underwater photographers capture your experience'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Marine Encounters',
      description: 'Get up close with colorful fish and vibrant coral formations'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety First',
      description: 'Certified guides ensure a safe and comfortable experience'
    }
  ];

  const marineLife = [
    {
      name: 'Clownfish',
      description: 'The iconic orange and white fish made famous by Finding Nemo',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Butterflyfish',
      description: 'Beautiful, disk-shaped fish with striking patterns',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Angelfish',
      description: 'Elegant fish with vibrant colors and long fins',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Sea Turtles',
      description: 'Gentle giants of the sea, occasionally spotted during walks',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const testimonials = [
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: 'The sea walk was incredible! We saw so many colorful fish and corals. The guides were very patient and made us feel safe throughout.',
      location: 'Mumbai'
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: 'As someone who can\'t swim, the sea walk was perfect! I could walk on the ocean floor and see everything up close. A truly magical experience!',
      location: 'London'
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: 'Our kids loved the sea walk! It was educational and fun. The underwater photos they took are amazing memories we\'ll cherish forever.',
      location: 'Ahmedabad'
    }
  ];

  const notes = [
    'Suitable for non-swimmers; no prior experience needed',
    'Medical restrictions apply (e.g., asthma, heart conditions)',
    'Children above 10 years are allowed with consent',
    'Weather and sea conditions can affect availability',
    'Wear comfortable swimwear and bring a change of clothes',
    'Remove jewelry and accessories before the walk',
    'Follow all safety instructions from your guide',
    'Avoid touching marine life and coral formations'
  ];

  const faqs = [
    {
      question: "Is sea walking safe for non-swimmers?",
      answer: "Yes, sea walking is perfect for non-swimmers. The specialized helmet provides oxygen and keeps your head dry, allowing you to breathe normally while walking on the ocean floor."
    },
    {
      question: "How deep is the sea walk?",
      answer: "Sea walks are conducted in shallow waters, typically 5-8 meters deep. The depth is safe and comfortable for beginners, with constant guide supervision."
    },
    {
      question: "Are there any medical restrictions?",
      answer: "Yes, conditions like asthma, heart problems, high blood pressure, epilepsy, and pregnancy may restrict participation. Please consult your doctor and inform us of any medical conditions."
    },
    {
      question: "What should I wear for the sea walk?",
      answer: "Wear comfortable swimwear and bring a change of clothes. Avoid wearing jewelry, accessories, or makeup. We provide all necessary equipment including the helmet."
    },
    {
      question: "Can I wear glasses during the sea walk?",
      answer: "Unfortunately, regular glasses cannot be worn inside the helmet. If you have vision correction, consider wearing contact lenses or consult with our team for alternatives."
    },
    {
      question: "What marine life can we expect to see?",
      answer: "You'll encounter colorful coral formations, clownfish, butterflyfish, angelfish, and various other tropical fish. Occasionally, you might spot sea turtles or rays."
    },
    {
      question: "Is underwater photography included?",
      answer: "Yes, professional underwater photography is included in most packages. Our photographers capture your experience, and you receive digital copies after the tour."
    },
    {
      question: "What happens if I feel claustrophobic?",
      answer: "The helmet is designed for comfort with good visibility. If you feel uncomfortable, our trained guides will assist you immediately. You can surface at any time if needed."
    },
    {
      question: "Can children participate in sea walking?",
      answer: "Children above 10 years can participate with parental consent. They must be comfortable in water and able to follow safety instructions. Parental supervision is required."
    },
    {
      question: "What if the weather is bad on the day of my booking?",
      answer: "Sea walks are weather-dependent for safety. In case of bad weather, we offer rescheduling options or full refunds. We monitor conditions closely and make decisions in your best interest."
    }
  ];

  return (
    <ExperienceLayout
      title="Sea Walk"
      subtitle="Walk on the Ocean Floor"
      description="Step onto the ocean floor and meet the marine world—no swimming needed. Experience the thrill of walking underwater surrounded by colorful fish and coral reefs."
      image="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "30-40 Minutes",
        location: "North Bay & Havelock",
        price: "From ₹3,500"
      }}
      slug="sea-walk"
      seo={{
        title: "Sea Walk in Andaman | North Bay & Elephant Beach | Best Price 2026",
        description: "Experience walking on the sea bed in Andaman. Sea walk at North Bay and Elephant Beach with helmet oxygen supply, photos, and guides. Perfect for non-swimmers.",
        keywords: "sea walk andaman, north bay sea walk, elephant beach sea walk, sea bed walk andaman, underwater walking andaman, sea walk price andaman"
      }}
      bookingData={{
        packageName: 'Sea Walk',
        source: 'experience',
        slug: 'sea-walk'
      }}
      faqData={faqs}
    >
      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Life */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Marine Life You'll See</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get up close with the fascinating underwater creatures of Andaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marineLife.map((creature, index) => (
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
                    src={creature.image}
                    alt={creature.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{creature.name}</h3>
                  <p className="text-gray-400 text-sm">{creature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Sea Walk Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose your preferred location and package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold z-20 shadow-lg">
                    {exp.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                      {exp.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{exp.name}</h3>
                  <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                    <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.departure}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-gray-50 p-3 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-1">Depth</h4>
                      <p className="text-gray-600">{exp.depth}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-1">Visibility</h4>
                      <p className="text-gray-600">{exp.visibility}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                    <div className="space-y-2">
                      {exp.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {exp.includes.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium pl-6">+{exp.includes.length - 3} more items</div>
                      )}
                    </div>
                  </div>

                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Sea Walk',
                          source: 'experience',
                          slug: 'sea-walk',
                          selectedActivities: [exp.name]
                        }));
                      } catch { /* no-op */ }
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
              Guest Experiences
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              See what our guests have to say about their sea walk experiences
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

      {/* Notes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Know Before You Go</h2>
            <p className="text-gray-500">Important information for a safe and enjoyable sea walk</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">Safety & Preparation</span>
              </div>
              <ul className="space-y-4">
                {notes.slice(0, 4).map((note, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">During the Experience</span>
              </div>
              <ul className="space-y-4">
                {notes.slice(4, 8).map((note, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{note}</span>
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
            description="Everything you need to know about sea walking in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default SeaWalkPage;
