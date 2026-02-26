import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'booking', name: 'Booking & Reservations' },
    { id: 'travel', name: 'Travel & Transportation' },
    { id: 'activities', name: 'Activities & Experiences' },
    { id: 'accommodation', name: 'Accommodation' },
    { id: 'safety', name: 'Safety & Health' },
    { id: 'payment', name: 'Payment & Pricing' }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What's the best time to visit Andaman Islands?",
      answer: "The best time to visit the Andaman Islands is between October and May, with peak season from December to March. The weather is perfect during these months with minimal rainfall and ideal conditions for beach activities and water sports.",
      category: "travel"
    },
    {
      question: "Do I need a visa to visit Andaman Islands?",
      answer: "Indian nationals don't need a visa, but foreign tourists need a valid Indian visa. Additionally, some areas require a Restricted Area Permit (RAP), which is issued upon arrival for a duration of 30 days.",
      category: "travel"
    },
    {
      question: "How can I book activities and experiences?",
      answer: "You can book activities through our website, mobile app, or by contacting our customer service. We recommend booking in advance during peak season to ensure availability.",
      category: "activities"
    },
    {
      question: "What's your cancellation policy?",
      answer: "Our standard cancellation policy allows free cancellation up to 7 days before arrival. Different terms may apply for special packages and peak season bookings. Please check your booking confirmation for specific details.",
      category: "booking"
    },
    {
      question: "Are there medical facilities available on the islands?",
      answer: "Yes, there are hospitals and medical facilities in Port Blair and basic medical facilities on major islands. We recommend having travel insurance that covers medical emergencies.",
      category: "safety"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, net banking, and popular digital payment methods. International payments are processed in USD or EUR.",
      category: "payment"
    },
    {
      question: "How do I get between islands?",
      answer: "Inter-island travel is primarily by ferry. Government ferries are economical but have fixed schedules, while private boats offer more flexibility. We can arrange transfers as part of your package.",
      category: "travel"
    },
    {
      question: "What's included in the luxury resort packages?",
      answer: "Our luxury packages typically include accommodation, daily breakfast, airport transfers, select activities, and access to resort facilities. Some packages also include full board meals and additional experiences.",
      category: "accommodation"
    },
    {
      question: "What water activities are available?",
      answer: "We offer a wide range of water activities including scuba diving, snorkeling, sea walking, jet skiing, kayaking, and glass-bottom boat rides. All activities are conducted with certified instructors and proper safety equipment.",
      category: "activities"
    },
    {
      question: "Do you offer customized packages?",
      answer: "Yes, we specialize in creating customized packages tailored to your preferences, group size, and budget. Contact our travel experts to design your perfect Andaman experience.",
      category: "booking"
    },
    {
      question: "What's the internet connectivity like?",
      answer: "Major towns and resorts have decent WiFi and mobile connectivity. However, some remote islands may have limited or no connectivity. We recommend downloading offline maps and essential information.",
      category: "accommodation"
    },
    {
      question: "Are the islands family-friendly?",
      answer: "Yes, the Andaman Islands are very family-friendly with various activities suitable for all ages. Many resorts offer kids' clubs, shallow beaches, and family-oriented activities.",
      category: "activities"
    },
    {
      question: "What should I pack for my trip?",
      answer: "Essential items include lightweight clothing, swimwear, sun protection (sunscreen, hat, sunglasses), insect repellent, comfortable walking shoes, and any required medications. Don't forget your camera and charging equipment.",
      category: "travel"
    },
    {
      question: "Is it safe to swim in the ocean?",
      answer: "Yes, it's generally safe to swim at designated beaches. Always follow lifeguard instructions, pay attention to warning flags, and swim only in designated areas. Some beaches may have strong currents during certain times.",
      category: "safety"
    },
    {
      question: "What's the local cuisine like?",
      answer: "Andaman cuisine features fresh seafood, tropical fruits, and Indian influences. Most resorts offer both local and international cuisine. Street food in Port Blair is worth trying, and many restaurants cater to vegetarian preferences.",
      category: "accommodation"
    },
    {
      question: "Do you offer early check-in/late check-out?",
      answer: "Early check-in and late check-out are subject to availability. We recommend requesting these services in advance. Additional charges may apply based on the property's policies.",
      category: "booking"
    },
    {
      question: "What's your group booking policy?",
      answer: "We offer special rates and arrangements for group bookings of 10 or more people. Contact our group booking specialists for customized quotes and arrangements.",
      category: "booking"
    },
    {
      question: "Are there ATMs and currency exchange facilities?",
      answer: "ATMs are available in Port Blair and major tourist areas. Currency exchange facilities are available at the airport and major banks. We recommend carrying some cash for local purchases.",
      category: "payment"
    },
    {
      question: "What emergency services are available?",
      answer: "Emergency services include police (100), ambulance (102), and fire (101). Major resorts have on-call doctors, and Port Blair has well-equipped hospitals. We provide 24/7 emergency support to our guests.",
      category: "safety"
    }
  ];

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(item => item !== question)
        : [...prev, question]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Andaman Travel FAQ 2026 | Questions Answered"
        description="Get answers to 50+ frequently asked questions about Andaman Islands travel — booking, permits, activities, safety, weather, costs & more. Updated for 2026."
        pathname="/faq"
        keywords="andaman faq, andaman travel questions, visa for andaman, andaman permits, is andaman safe, best time to visit andaman, andaman booking help, how to reach andaman, andaman travel tips, andaman family travel, documents for andaman"
        targetAudience="all"
        faqData={faqs.map(faq => ({
          question: faq.question,
          answer: faq.answer
        }))}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "Andaman Islands Travel FAQ",
          "description": "Comprehensive answers to frequently asked questions about traveling to the Andaman Islands.",
          "url": "https://luxuryandamans.com/faq",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      <Header />

      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Help Center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-pearl mb-4">
              Help Center
            </h1>
            <p className="text-xl text-pearl/90">
              Find answers to your questions about traveling to Andaman
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-12 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${activeCategory === category.id
                    ? 'bg-azure text-white'
                    : 'bg-white text-night hover:bg-azure/10'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleItem(faq.question)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-night">{faq.question}</span>
                  {openItems.includes(faq.question) ? (
                    <Minus className="w-5 h-5 text-azure flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-azure flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(faq.question) && (
                  <div className="px-6 pb-4">
                    <p className="text-night/70">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-azure" />
            </div>
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Still Need Help?
            </h2>
            <p className="text-pearl/80 mb-8">
              Our support team is available 24/7 to assist you with any questions or concerns
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+916297576826"
                className="px-8 py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Call Support
              </a>
              <a
                href="mailto:support@luxuryandamans.com"
                className="px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
