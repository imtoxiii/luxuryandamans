import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, Calendar, Plane, MapPin, Star, Coffee, Send, Plus, Minus, Globe, FileText, Shield, Navigation, Activity, Zap, Map, Music } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import CurrencySelector from '../components/CurrencySelector';
import LocationSelector from '../components/LocationSelector';
import { countries, findCountryByCode, findStateByCode } from '../lib/locationData';

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

interface FlightPrice {
  economy: number;
  business: number;
  firstClass: number;
}

interface VisaRequirement {
  countryCode: string;
  visaType: string;
  processingTime: string;
  fee: number;
  requirements: string[];
}

const airports: Airport[] = [
  // International Airports - Expanded List
  { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'UK' },
  { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA' },
  { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'UAE' },
  { code: 'SIN', name: 'Changi Airport', city: 'Singapore', country: 'Singapore' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
  { code: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'China' },
  { code: 'NRT', name: 'Narita International', city: 'Tokyo', country: 'Japan' },
  { code: 'SYD', name: 'Sydney Airport', city: 'Sydney', country: 'Australia' },
  { code: 'AMS', name: 'Amsterdam Schiphol', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'ICN', name: 'Incheon International', city: 'Seoul', country: 'South Korea' },
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand' },
  // Indian Airports
  { code: 'DEL', name: 'Indira Gandhi International', city: 'Delhi', country: 'India' },
  { code: 'BOM', name: 'Chhatrapati Shivaji International', city: 'Mumbai', country: 'India' },
  { code: 'MAA', name: 'Chennai International', city: 'Chennai', country: 'India' },
  { code: 'CCU', name: 'Netaji Subhas Chandra Bose International', city: 'Kolkata', country: 'India' },
  { code: 'BLR', name: 'Kempegowda International', city: 'Bangalore', country: 'India' },
  { code: 'HYD', name: 'Rajiv Gandhi International', city: 'Hyderabad', country: 'India' },
  { code: 'IXZ', name: 'Veer Savarkar International', city: 'Port Blair', country: 'India' }
];

const visaRequirements: VisaRequirement[] = [
  { 
    countryCode: 'US', 
    visaType: 'e-Tourist Visa',
    processingTime: '3-5 business days',
    fee: 25,
    requirements: ['Valid passport (6 months validity)', 'Return ticket', 'Sufficient funds', 'Hotel reservation']
  },
  { 
    countryCode: 'GB', 
    visaType: 'e-Tourist Visa',
    processingTime: '3-5 business days',
    fee: 25,
    requirements: ['Valid passport (6 months validity)', 'Return ticket', 'Sufficient funds', 'Hotel reservation']
  },
  { 
    countryCode: 'AU', 
    visaType: 'e-Tourist Visa',
    processingTime: '3-5 business days',
    fee: 25,
    requirements: ['Valid passport (6 months validity)', 'Return ticket', 'Sufficient funds', 'Hotel reservation']
  },
  { 
    countryCode: 'CA', 
    visaType: 'e-Tourist Visa',
    processingTime: '3-5 business days',
    fee: 25,
    requirements: ['Valid passport (6 months validity)', 'Return ticket', 'Sufficient funds', 'Hotel reservation']
  },
  { 
    countryCode: 'SG', 
    visaType: 'e-Tourist Visa',
    processingTime: '3-5 business days',
    fee: 25,
    requirements: ['Valid passport (6 months validity)', 'Return ticket', 'Sufficient funds', 'Hotel reservation']
  },
  { 
    countryCode: 'AE', 
    visaType: 'e-Tourist Visa',
    processingTime: '3-5 business days',
    fee: 25,
    requirements: ['Valid passport (6 months validity)', 'Return ticket', 'Sufficient funds', 'Hotel reservation']
  },
];

const baseFlightPrices: Record<string, FlightPrice> = {
  // International Routes (in INR)
  LHR: { economy: 85000, business: 250000, firstClass: 450000 },
  JFK: { economy: 95000, business: 280000, firstClass: 500000 },
  DXB: { economy: 45000, business: 150000, firstClass: 280000 },
  SIN: { economy: 35000, business: 120000, firstClass: 220000 },
  CDG: { economy: 75000, business: 220000, firstClass: 420000 },
  FRA: { economy: 70000, business: 210000, firstClass: 400000 },
  HKG: { economy: 45000, business: 150000, firstClass: 280000 },
  NRT: { economy: 65000, business: 190000, firstClass: 350000 },
  SYD: { economy: 90000, business: 260000, firstClass: 480000 },
  AMS: { economy: 72000, business: 215000, firstClass: 410000 },
  ICN: { economy: 55000, business: 170000, firstClass: 320000 },
  BKK: { economy: 30000, business: 100000, firstClass: 190000 },
  // Domestic Routes (in INR)
  DEL: { economy: 15000, business: 45000, firstClass: 85000 },
  BOM: { economy: 18000, business: 48000, firstClass: 90000 },
  MAA: { economy: 12000, business: 35000, firstClass: 65000 },
  CCU: { economy: 10000, business: 30000, firstClass: 55000 },
  BLR: { economy: 14000, business: 40000, firstClass: 75000 },
  HYD: { economy: 16000, business: 42000, firstClass: 80000 }
};

const accommodationTypes = [
  { id: 'luxury-villa', name: 'Luxury Beach Villa', pricePerNight: 35000, features: ['Private beach access', 'Private pool', 'Butler service'] },
  { id: 'premium-suite', name: 'Premium Ocean Suite', pricePerNight: 25000, features: ['Ocean view', 'Jacuzzi', '24-hour room service'] },
  { id: 'deluxe-room', name: 'Deluxe Room', pricePerNight: 15000, features: ['Garden view', 'King size bed', 'Welcome amenities'] },
  { id: 'standard-room', name: 'Standard Room', pricePerNight: 8000, features: ['Twin beds', 'Basic amenities'] },
  { id: 'eco-cottage', name: 'Eco Cottage', pricePerNight: 12000, features: ['Sustainable design', 'Local materials', 'Organic toiletries'] },
  { id: 'family-villa', name: 'Family Villa (2 Bedrooms)', pricePerNight: 30000, features: ['Kid-friendly', 'Spacious living area', 'Kitchenette'] }
];

const islands = [
  { id: 'havelock', name: 'Havelock Island (Swaraj Dweep)', popularity: 5 },
  { id: 'neil', name: 'Neil Island (Shaheed Dweep)', popularity: 4 },
  { id: 'port-blair', name: 'Port Blair', popularity: 5 },
  { id: 'ross', name: 'Ross Island (Netaji Subhas Chandra Bose Island)', popularity: 3 },
  { id: 'baratang', name: 'Baratang Island', popularity: 3 },
  { id: 'long', name: 'Long Island', popularity: 2 },
  { id: 'diglipur', name: 'Diglipur', popularity: 2 }
];

const localTransportOptions = [
  { id: 'ferry-std', name: 'Standard Ferry Service', pricePerTrip: 1200, note: 'Government operated' },
  { id: 'ferry-lux', name: 'Luxury Catamaran Ferry', pricePerTrip: 2500, note: 'Private operator' },
  { id: 'local-taxi', name: 'Private Taxi (Per Day)', pricePerDay: 3000, note: 'Air-conditioned' },
  { id: 'scooter-rental', name: 'Scooter/Motorcycle Rental', pricePerDay: 600, note: 'Self-drive' },
  { id: 'bicycle-rental', name: 'Bicycle Rental', pricePerDay: 200, note: 'Eco-friendly option' },
  { id: 'heli-transfer', name: 'Helicopter Transfer', pricePerTrip: 15000, note: 'Subject to weather conditions' }
];

const activities = [
  { id: 'scuba', name: 'Scuba Diving', price: 7500, duration: '4 hours', difficulty: 'Moderate', location: 'Havelock Island', ecoImpact: 'Low' },
  { id: 'advanced-scuba', name: 'Advanced Scuba (Deep Diving)', price: 9500, duration: '5 hours', difficulty: 'High', location: 'Havelock Island', ecoImpact: 'Low' },
  { id: 'snorkel', name: 'Snorkeling Trip', price: 3500, duration: '3 hours', difficulty: 'Easy', location: 'Neil Island', ecoImpact: 'Very Low' },
  { id: 'kayak', name: 'Kayaking', price: 2000, duration: '2 hours', difficulty: 'Easy', location: 'Havelock Island', ecoImpact: 'Very Low' },
  { id: 'fishing', name: 'Sport Fishing', price: 8000, duration: '4 hours', difficulty: 'Moderate', location: 'Port Blair', ecoImpact: 'Medium' },
  { id: 'island-tour', name: 'Island Hopping Tour', price: 5000, duration: 'Full Day', difficulty: 'Easy', location: 'Port Blair', ecoImpact: 'Low' },
  { id: 'sunset-cruise', name: 'Sunset Cruise', price: 4500, duration: '2 hours', difficulty: 'Easy', location: 'Port Blair', ecoImpact: 'Low' },
  { id: 'spa', name: 'Spa Treatment', price: 6000, duration: '2 hours', difficulty: 'Easy', location: 'Multi-location', ecoImpact: 'Very Low' },
  { id: 'cooking', name: 'Local Cooking Class', price: 3000, duration: '3 hours', difficulty: 'Easy', location: 'Multi-location', ecoImpact: 'Very Low' },
  { id: 'trekking', name: 'Jungle Trekking', price: 4000, duration: '5 hours', difficulty: 'Moderate', location: 'Baratang Island', ecoImpact: 'Low' },
  { id: 'birdwatching', name: 'Guided Bird Watching', price: 2500, duration: '3 hours', difficulty: 'Easy', location: 'Chidiya Tapu', ecoImpact: 'Very Low' },
  { id: 'cultural-show', name: 'Indigenous Cultural Performance', price: 1500, duration: '2 hours', difficulty: 'Easy', location: 'Port Blair', ecoImpact: 'Very Low' },
  { id: 'night-kayak', name: 'Bioluminescent Kayaking (Night)', price: 3500, duration: '2 hours', difficulty: 'Moderate', location: 'Havelock Island', ecoImpact: 'Low' },
  { id: 'mangrove-safari', name: 'Mangrove Safari', price: 3000, duration: '3 hours', difficulty: 'Easy', location: 'Baratang Island', ecoImpact: 'Low' }
];

const healthAndSafetyOptions = [
  { id: 'travel-insurance', name: 'Comprehensive Travel Insurance', price: 800, priceType: 'per person/day' },
  { id: 'medical-insurance', name: 'Medical Insurance (Basic)', price: 500, priceType: 'per person/day' },
  { id: 'medical-insurance-premium', name: 'Medical Insurance (Premium)', price: 1000, priceType: 'per person/day' },
  { id: 'evacuation-insurance', name: 'Medical Evacuation Insurance', price: 1500, priceType: 'per person/day' },
  { id: 'covid-test', name: 'COVID-19 Testing Service', price: 2500, priceType: 'one-time' },
  { id: 'first-aid', name: 'Personal First Aid Kit', price: 1200, priceType: 'one-time' },
  { id: 'sat-phone', name: 'Satellite Phone Rental', price: 1000, priceType: 'per day' }
];

const additionalServices = [
  { 
    id: 'photography', 
    name: 'Professional Photography (Full Day)', 
    price: 5000,
    description: 'Capture your memories with a professional photographer'
  },
  { 
    id: 'transfer', 
    name: 'Private Airport Transfer', 
    price: 4000,
    description: 'Comfortable vehicle with english-speaking driver'
  },
  { 
    id: 'guide', 
    name: 'Personal Guide (Per Day)', 
    price: 6000,
    description: 'Knowledgeable local guide to enhance your experience'
  },
  { 
    id: 'meal-plan', 
    name: 'All-Inclusive Meal Plan (Per Person/Day)', 
    price: 3500,
    description: 'Includes breakfast, lunch, dinner and non-alcoholic beverages'
  },
  { 
    id: 'special-dinner', 
    name: 'Private Beach Dinner', 
    price: 10000,
    description: 'Romantic dinner setup on the beach with customized menu'
  },
  { 
    id: 'child-care', 
    name: 'Child Care Services (Per Day)', 
    price: 3000,
    description: 'Professional childcare while you enjoy activities'
  },
  { 
    id: 'celebration', 
    name: 'Special Occasion Celebration', 
    price: 8000,
    description: 'Birthday/Anniversary arrangements with cake and decorations'
  },
  { 
    id: 'wifi', 
    name: 'Portable WiFi Device Rental (Per Day)', 
    price: 500,
    description: 'Stay connected with high-speed internet throughout your trip'
  }
];

const culturalExperiences = [
  { id: 'tribal-visit', name: 'Jarawa Tribal Reserve Buffer Zone Visit', price: 2500, duration: '6 hours', permitRequired: true },
  { id: 'local-home', name: 'Local Home Visit & Meal', price: 1800, duration: '3 hours', permitRequired: false },
  { id: 'craft-workshop', name: 'Traditional Craft Workshop', price: 1500, duration: '2 hours', permitRequired: false },
  { id: 'dance-lesson', name: 'Traditional Dance Lesson', price: 1200, duration: '2 hours', permitRequired: false },
  { id: 'heritage-walk', name: 'Colonial Heritage Walking Tour', price: 1800, duration: '3 hours', permitRequired: false },
  { id: 'music-session', name: 'Local Music Jam Session', price: 1000, duration: '2 hours', permitRequired: false }
];

interface CustomActivity {
  name: string;
  description: string;
}

// Language options for multilingual support
const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'German (Deutsch)' },
  { code: 'fr', name: 'French (Français)' },
  { code: 'es', name: 'Spanish (Español)' },
  { code: 'ja', name: 'Japanese (日本語)' },
  { code: 'zh', name: 'Chinese (中文)' },
  { code: 'ru', name: 'Russian (Русский)' },
  { code: 'ar', name: 'Arabic (العربية)' }
];

const PricingCalculatorPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [selectedState, setSelectedState] = useState('');
  const [departureCity, setDepartureCity] = useState('DEL');
  const [accommodationType, setAccommodationType] = useState('luxury-villa');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [days, setDays] = useState(5);
  const [includesFlight, setIncludesFlight] = useState(true);
  const [flightClass, setFlightClass] = useState<'economy' | 'business' | 'firstClass'>('economy');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedHealthOptions, setSelectedHealthOptions] = useState<string[]>([]);
  const [selectedTransportOptions, setSelectedTransportOptions] = useState<string[]>([]);
  const [selectedCulturalExperiences, setSelectedCulturalExperiences] = useState<string[]>([]);
  const [selectedIslands, setSelectedIslands] = useState<string[]>(['havelock', 'port-blair']);
  const [isPeakSeason, setIsPeakSeason] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [customActivities, setCustomActivities] = useState<CustomActivity[]>([]);
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('en');
  const [currency, setCurrency] = useState('INR');
  const [needsVisa, setNeedsVisa] = useState(false);
  const [passportExpiry, setPassportExpiry] = useState('');
  const [includeLocalTransport, setIncludeLocalTransport] = useState(true);
  const [breakdown, setBreakdown] = useState<Record<string, number>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [needsPermits, setNeedsPermits] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  // Exchange rates (expanded with more currencies)
  const exchangeRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
    AUD: 0.018,
    CAD: 0.016,
    SGD: 0.016,
    JPY: 1.3,
    CNY: 0.086,
    AED: 0.044,
    RUB: 0.9
  };

  const convertCurrency = (amount: number): number => {
    return Math.round(amount * exchangeRates[currency as keyof typeof exchangeRates]);
  };

  const formatCurrency = (amount: number): string => {
    const symbols = {
      INR: '₹',
      USD: '$',
      EUR: '€',
      GBP: '£',
      AUD: 'A$',
      CAD: 'C$',
      SGD: 'S$',
      JPY: '¥',
      CNY: '¥',
      AED: 'د.إ',
      RUB: '₽'
    };
    return `${symbols[currency as keyof typeof symbols]}${convertCurrency(amount).toLocaleString()}`;
  };

  const addCustomActivity = () => {
    setCustomActivities([...customActivities, { name: '', description: '' }]);
  };

  const removeCustomActivity = (index: number) => {
    setCustomActivities(customActivities.filter((_, i) => i !== index));
  };

  const updateCustomActivity = (index: number, field: keyof CustomActivity, value: string) => {
    const updated = [...customActivities];
    updated[index][field] = value;
    setCustomActivities(updated);
  };

  const getVisaRequirements = () => {
    return visaRequirements.find(v => v.countryCode === selectedCountry) || null;
  };

  const calculatePermitFees = () => {
    // Calculate tribal area permit fees if needed
    if (needsPermits) {
      return (adults + children) * 500; // 500 INR per person
    }
    return 0;
  };

  const calculateVisaFees = () => {
    // Calculate visa fees if needed
    if (needsVisa) {
      const visaReq = getVisaRequirements();
      if (visaReq) {
        return (adults + children) * visaReq.fee * 100; // Converting from USD to INR approximately
      }
    }
    return 0;
  };

  const getTotalTripDays = () => {
    if (!departureDate || !returnDate) return days;
    
    const start = new Date(departureDate);
    const end = new Date(returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || days;
  };

  const calculateTotal = () => {
    let newBreakdown: Record<string, number> = {};
    const totalDays = getTotalTripDays();

    // Accommodation
    const accommodation = accommodationTypes.find(a => a.id === accommodationType);
    const accommodationCost = (accommodation?.pricePerNight || 0) * totalDays;
    newBreakdown.accommodation = accommodationCost;

    // Activities
    let activitiesCost = 0;
    selectedActivities.forEach(activityId => {
      const activity = activities.find(a => a.id === activityId);
      if (activity) {
        activitiesCost += activity.price * (adults + children);
      }
    });
    newBreakdown.activities = activitiesCost;

    // Cultural Experiences
    let culturalCost = 0;
    selectedCulturalExperiences.forEach(expId => {
      const exp = culturalExperiences.find(c => c.id === expId);
      if (exp) {
        culturalCost += exp.price * (adults + children);
      }
    });
    newBreakdown.culturalExperiences = culturalCost;

    // Local Transport
    let transportCost = 0;
    if (includeLocalTransport) {
      selectedTransportOptions.forEach(transportId => {
        const transport = localTransportOptions.find(t => t.id === transportId);
        if (transport) {
          if ('pricePerDay' in transport) {
            transportCost += (transport.pricePerDay as number) * totalDays;
          } else if ('pricePerTrip' in transport) {
            // Assuming 2 trips on average for island hopping
            transportCost += (transport.pricePerTrip as number) * 2;
          }
        }
      });
    }
    newBreakdown.localTransport = transportCost;

    // Health and Safety
    let healthCost = 0;
    selectedHealthOptions.forEach(healthId => {
      const option = healthAndSafetyOptions.find(h => h.id === healthId);
      if (option) {
        if (option.priceType === 'per person/day') {
          healthCost += option.price * totalDays * (adults + children);
        } else if (option.priceType === 'per day') {
          healthCost += option.price * totalDays;
        } else {
          healthCost += option.price;
        }
      }
    });
    newBreakdown.healthAndSafety = healthCost;

    // Additional Services
    let servicesCost = 0;
    selectedServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        if (serviceId === 'meal-plan') {
          servicesCost += service.price * totalDays * (adults + children);
        } else if (serviceId === 'wifi') {
          servicesCost += service.price * totalDays;
        } else {
          servicesCost += service.price;
        }
      }
    });
    newBreakdown.services = servicesCost;

    // Visa and Permits
    const visaFees = calculateVisaFees();
    if (visaFees > 0) {
      newBreakdown.visaFees = visaFees;
    }

    const permitFees = calculatePermitFees();
    if (permitFees > 0) {
      newBreakdown.permitFees = permitFees;
    }

    // Flights
    if (includesFlight && departureCity !== 'IXZ') {
      const basePrice = baseFlightPrices[departureCity][flightClass];
      const flightCost = basePrice * (adults + (children * 0.75)); // Children at 75% of adult fare
      newBreakdown.flights = flightCost;
    }

    // Peak Season Surcharge
    if (isPeakSeason) {
      const peakSeasonSurcharge = (accommodationCost + activitiesCost) * 0.2;
      newBreakdown.peakSeasonSurcharge = peakSeasonSurcharge;
    }

    // Taxes and Fees
    const subtotal = Object.values(newBreakdown).reduce((sum, value) => sum + value, 0);
    const taxesAndFees = subtotal * 0.18; // 18% GST
    newBreakdown.taxesAndFees = taxesAndFees;

    setBreakdown(newBreakdown);
  };

  useEffect(() => {
    calculateTotal();
  }, [
    accommodationType,
    adults,
    children,
    days,
    includesFlight,
    flightClass,
    departureCity,
    selectedActivities,
    selectedServices,
    selectedHealthOptions,
    selectedTransportOptions,
    selectedCulturalExperiences,
    isPeakSeason,
    departureDate,
    returnDate,
    needsVisa,
    needsPermits,
    includeLocalTransport
  ]);

  useEffect(() => {
    // Auto-detect if visa might be needed based on selected country
    if (selectedCountry !== 'IN') {
      setNeedsVisa(true);
    } else {
      setNeedsVisa(false);
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Auto-detect if tribal permits might be needed based on selected islands
    if (selectedIslands.includes('baratang') || selectedIslands.includes('diglipur')) {
      setNeedsPermits(true);
    }
  }, [selectedIslands]);

  const total = Object.values(breakdown).reduce((sum, value) => sum + value, 0);

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSendPackage = async () => {
    if (!contactEmail && !contactPhone) {
      toast.error('Please provide either email or phone number');
      return;
    }

    // Prepare package details
    const packageDetails = {
      accommodation: accommodationTypes.find(a => a.id === accommodationType)?.name,
      guests: { adults, children },
      duration: days,
      islands: selectedIslands.map(id => islands.find(i => i.id === id)?.name),
      activities: selectedActivities.map(id => activities.find(a => a.id === id)?.name),
      services: selectedServices.map(id => additionalServices.find(s => s.id === id)?.name),
      healthOptions: selectedHealthOptions.map(id => healthAndSafetyOptions.find(h => h.id === id)?.name),
      transportOptions: selectedTransportOptions.map(id => localTransportOptions.find(t => t.id === t)?.name),
      culturalExperiences: selectedCulturalExperiences.map(id => culturalExperiences.find(c => c.id === id)?.name),
      customActivities,
      flight: includesFlight ? {
        from: departureCity,
        class: flightClass
      } : null,
      departureDate,
      returnDate,
      preferredLanguage,
      visaNeeded: needsVisa,
      permitsNeeded: needsPermits,
      specialRequests,
      totalCost: formatCurrency(total),
      contact: {
        email: contactEmail,
        phone: contactPhone
      }
    };

    try {
      // Here you would typically send this to your backend
      // For now, we'll just show a success message
      toast.success('Package request sent successfully! We will contact you soon.');
      
      // Reset form
      setCustomActivities([]);
      setSpecialRequests('');
      setContactEmail('');
      setContactPhone('');
    } catch (error) {
      toast.error('Failed to send package request. Please try again.');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-night">Basic Travel Information</h3>
            
            {/* Currency and Location Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-night mb-2">Currency</label>
                <CurrencySelector 
                  value={currency}
                  onChange={setCurrency}
                />
              </div>
              <div>
                <LocationSelector
                  selectedCountry={selectedCountry}
                  selectedState={selectedState}
                  onCountryChange={setSelectedCountry}
                  onStateChange={setSelectedState}
                />
              </div>
            </div>
            
            {/* Language preference */}
            <div>
              <label className="block text-night mb-2">Preferred Language</label>
              <select
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
              >
                {languageOptions.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-night mb-2">Number of Adults</label>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-azure mr-2" />
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-night mb-2">Number of Children</label>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-azure mr-2" />
                  <input
                    type="number"
                    min="0"
                    max="6"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Travel Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-night mb-2">Departure Date</label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-night mb-2">Return Date</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departureDate || new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                />
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-night mb-2">Duration (Days)</label>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-azure mr-2" />
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {departureDate && returnDate ? 
                  `Your selected dates span ${getTotalTripDays()} days` : 
                  'Enter dates to automatically calculate duration'}
              </p>
            </div>

            {/* Islands Selection */}
            <div>
              <label className="block text-night mb-4">Islands to Visit</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {islands.map((island) => (
                  <label key={island.id} className="flex items-center space-x-2 text-night">
                    <input
                      type="checkbox"
                      checked={selectedIslands.includes(island.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIslands([...selectedIslands, island.id]);
                        } else {
                          setSelectedIslands(selectedIslands.filter(id => id !== island.id));
                        }
                      }}
                      className="w-4 h-4 text-azure rounded focus:ring-azure"
                    />
                    <span>{island.name} {Array(island.popularity).fill('★').join('')}</span>
                  </label>
                ))}
              </div>
              {needsPermits && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Note:</strong> Some selected islands require special permits. 
                    Permit fees will be included in your package.
                  </p>
                </div>
              )}
            </div>

            {/* Peak Season Option */}
            <div>
              <label className="flex items-center space-x-2 text-night">
                <input
                  type="checkbox"
                  checked={isPeakSeason}
                  onChange={(e) => setIsPeakSeason(e.target.checked)}
                  className="w-4 h-4 text-azure rounded focus:ring-azure"
                />
                <Star className="w-5 h-5 text-azure" />
                <span>Peak Season (October - March)</span>
              </label>
              {isPeakSeason && (
                <p className="text-sm text-gray-500 mt-1 ml-7">
                  Peak season pricing includes a 20% surcharge on accommodation and activities
                </p>
              )}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-night">Transportation & Accommodation</h3>

            {/* Flight Options */}
            <div className="space-y-4">
              <label className="flex items-center space-x-2 text-night">
                <input
                  type="checkbox"
                  checked={includesFlight}
                  onChange={(e) => setIncludesFlight(e.target.checked)}
                  className="w-4 h-4 text-azure rounded focus:ring-azure"
                />
                <Plane className="w-5 h-5 text-azure" />
                <span>Include Flights</span>
              </label>

              {includesFlight && (
                <div className="space-y-4 pl-8">
                  <div>
                    <label className="block text-night mb-2">Departure Airport</label>
                    <select
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                    >
                      <optgroup label="International Airports">
                        {airports.filter(a => a.country !== 'India').map(airport => (
                          <option key={airport.code} value={airport.code}>
                            {airport.city}, {airport.country} - {airport.name} ({airport.code})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Indian Airports">
                        {airports.filter(a => a.country === 'India').map(airport => (
                          <option key={airport.code} value={airport.code}>
                            {airport.city} - {airport.name} ({airport.code})
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-night mb-2">Flight Class</label>
                    <select
                      value={flightClass}
                      onChange={(e) => setFlightClass(e.target.value as 'economy' | 'business' | 'firstClass')}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                    >
                      <option value="economy">Economy Class</option>
                      <option value="business">Business Class</option>
                      <option value="firstClass">First Class</option>
                    </select>
                  </div>

                  {/* Visa Requirements Section */}
                  {needsVisa && (
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-medium text-night mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-azure" />
                        Visa Requirements for Indian Travel
                      </h4>
                      
                      {getVisaRequirements() ? (
                        <div className="space-y-2">
                          <p><span className="font-medium">Visa Type:</span> {getVisaRequirements()?.visaType}</p>
                          <p><span className="font-medium">Processing Time:</span> {getVisaRequirements()?.processingTime}</p>
                          <p><span className="font-medium">Requirements:</span></p>
                          <ul className="list-disc pl-5 text-sm">
                            {getVisaRequirements()?.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                          <p className="text-sm text-gray-500 mt-2">
                            Visa assistance can be provided for an additional fee
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">Visa information not available for the selected country. Our team will provide details.</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Local Transportation */}
              <div className="space-y-4 mt-6">
                <label className="flex items-center space-x-2 text-night">
                  <input
                    type="checkbox"
                    checked={includeLocalTransport}
                    onChange={(e) => setIncludeLocalTransport(e.target.checked)}
                    className="w-4 h-4 text-azure rounded focus:ring-azure"
                  />
                  <Navigation className="w-5 h-5 text-azure" />
                  <span>Include Local Transportation</span>
                </label>

                {includeLocalTransport && (
                  <div className="pl-8 space-y-4">
                    <p className="text-sm text-gray-600">Select transport options for your island exploration:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {localTransportOptions.map((option) => (
                        <label key={option.id} className="flex items-center space-x-2 text-night">
                          <input
                            type="checkbox"
                            checked={selectedTransportOptions.includes(option.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedTransportOptions([...selectedTransportOptions, option.id]);
                              } else {
                                setSelectedTransportOptions(selectedTransportOptions.filter(id => id !== option.id));
                              }
                            }}
                            className="w-4 h-4 text-azure rounded focus:ring-azure"
                          />
                          <span>
                            {option.name} 
                            {('pricePerDay' in option) && 
                              <span> ({formatCurrency(option.pricePerDay)}/day)</span>
                            }
                            {('pricePerTrip' in option) && 
                              <span> ({formatCurrency(option.pricePerTrip)}/trip)</span>
                            }
                            <span className="text-xs text-gray-500 block">{option.note}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Accommodation */}
              <div className="mt-6">
                <label className="block text-night mb-4">Accommodation Type</label>
                <div className="grid grid-cols-1 gap-4">
                  {accommodationTypes.map(type => (
                    <label 
                      key={type.id} 
                      className={`border rounded-lg p-4 flex items-start cursor-pointer hover:border-azure transition-colors ${accommodationType === type.id ? 'border-azure bg-azure/5' : 'border-gray-200'}`}
                    >
                      <input
                        type="radio"
                        name="accommodationType"
                        value={type.id}
                        checked={accommodationType === type.id}
                        onChange={() => setAccommodationType(type.id)}
                        className="w-4 h-4 text-azure mt-1 mr-3"
                      />
                      <div>
                        <span className="font-medium text-night">{type.name}</span>
                        <p className="text-gray-600 mt-1">{formatCurrency(type.pricePerNight)} per night</p>
                        <div className="flex flex-wrap mt-2 gap-1">
                          {type.features.map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-2">
              <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
                <button 
                  onClick={() => setActiveTab('basic')}
                  className={`px-4 py-2 whitespace-nowrap ${activeTab === 'basic' ? 'text-azure border-b-2 border-azure' : 'text-gray-500'}`}
                >
                  Activities & Services
                </button>
                <button 
                  onClick={() => setActiveTab('cultural')}
                  className={`px-4 py-2 whitespace-nowrap ${activeTab === 'cultural' ? 'text-azure border-b-2 border-azure' : 'text-gray-500'}`}
                >
                  Cultural Experiences
                </button>
                <button 
                  onClick={() => setActiveTab('health')}
                  className={`px-4 py-2 whitespace-nowrap ${activeTab === 'health' ? 'text-azure border-b-2 border-azure' : 'text-gray-500'}`}
                >
                  Health & Safety
                </button>
                <button 
                  onClick={() => setActiveTab('custom')}
                  className={`px-4 py-2 whitespace-nowrap ${activeTab === 'custom' ? 'text-azure border-b-2 border-azure' : 'text-gray-500'}`}
                >
                  Custom Requests
                </button>
              </div>
            </div>

            {activeTab === 'basic' && (
              <>
                {/* Activities */}
                <div>
                  <label className="block text-night mb-4">Choose Activities</label>
                  <div className="grid grid-cols-1 gap-2">
                    {activities.map((activity) => (
                      <label key={activity.id} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={selectedActivities.includes(activity.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedActivities([...selectedActivities, activity.id]);
                            } else {
                              setSelectedActivities(selectedActivities.filter(id => id !== activity.id));
                            }
                          }}
                          className="w-4 h-4 text-azure rounded focus:ring-azure mt-1 mr-3"
                        />
                        <div>
                          <span className="font-medium text-night">{activity.name}</span>
                          <div className="text-sm text-gray-500 mt-1 space-y-1">
                            <p>{formatCurrency(activity.price)} per person • {activity.duration}</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-xs rounded">
                                <Activity className="w-3 h-3 mr-1" />
                                {activity.difficulty}
                              </span>
                              <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-xs rounded">
                                <MapPin className="w-3 h-3 mr-1" />
                                {activity.location}
                              </span>
                              <span className={`inline-flex items-center px-2 py-1 text-xs rounded ${
                                activity.ecoImpact === 'Very Low' ? 'bg-green-100 text-green-800' :
                                activity.ecoImpact === 'Low' ? 'bg-green-50 text-green-700' :
                                activity.ecoImpact === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                                'bg-red-50 text-red-700'
                              }`}>
                                Eco Impact: {activity.ecoImpact}
                              </span>
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <label className="block text-night mb-4">Additional Services</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {additionalServices.map((service) => (
                      <label key={service.id} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedServices([...selectedServices, service.id]);
                            } else {
                              setSelectedServices(selectedServices.filter(id => id !== service.id));
                            }
                          }}
                          className="w-4 h-4 text-azure rounded focus:ring-azure mt-1 mr-3"
                        />
                        <div>
                          <span className="font-medium text-night">{service.name}</span>
                          <p className="text-sm text-gray-500 mt-1">{formatCurrency(service.price)}</p>
                          <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'cultural' && (
              <div>
                <div className="flex items-center mb-4">
                  <Music className="w-5 h-5 text-azure mr-2" />
                  <label className="text-night font-medium">Cultural Experiences</label>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Immerse yourself in the unique culture of the Andaman Islands with these authentic experiences
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {culturalExperiences.map((exp) => (
                    <label key={exp.id} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedCulturalExperiences.includes(exp.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCulturalExperiences([...selectedCulturalExperiences, exp.id]);
                          } else {
                            setSelectedCulturalExperiences(selectedCulturalExperiences.filter(id => id !== exp.id));
                          }
                        }}
                        className="w-4 h-4 text-azure rounded focus:ring-azure mt-1 mr-3"
                      />
                      <div>
                        <span className="font-medium text-night">{exp.name}</span>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatCurrency(exp.price)} per person • {exp.duration}
                        </p>
                        {exp.permitRequired && (
                          <span className="inline-flex items-center mt-2 px-2 py-1 bg-amber-50 text-amber-800 text-xs rounded">
                            <FileText className="w-3 h-3 mr-1" />
                            Requires special permit
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'health' && (
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 text-azure mr-2" />
                  <label className="text-night font-medium">Health & Safety Options</label>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Ensure a worry-free vacation with these health and safety services
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {healthAndSafetyOptions.map((option) => (
                    <label key={option.id} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedHealthOptions.includes(option.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedHealthOptions([...selectedHealthOptions, option.id]);
                          } else {
                            setSelectedHealthOptions(selectedHealthOptions.filter(id => id !== option.id));
                          }
                        }}
                        className="w-4 h-4 text-azure rounded focus:ring-azure mt-1 mr-3"
                      />
                      <div>
                        <span className="font-medium text-night">{option.name}</span>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatCurrency(option.price)} ({option.priceType})
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
                
                {selectedCountry !== 'IN' && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Travel Advisory</h4>
                    <p className="text-sm text-blue-700">
                      Foreign travelers to Andaman require an additional Restricted Area Permit (RAP), 
                      which is generally issued on arrival at Port Blair for a stay up to 30 days. 
                      Some areas have restricted access and require special permissions.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'custom' && (
              <div>
                {/* Custom Activities */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-night">Custom Activities/Requests</label>
                    <button
                      onClick={addCustomActivity}
                      className="flex items-center text-azure hover:text-azure/80 transition-colors"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Activity
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {customActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-2 p-4 border border-gray-200 rounded-lg">
                        <div className="flex-grow space-y-2">
                          <input
                            type="text"
                            placeholder="Activity name"
                            value={activity.name}
                            onChange={(e) => updateCustomActivity(index, 'name', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                          />
                          <textarea
                            placeholder="Description and requirements"
                            value={activity.description}
                            onChange={(e) => updateCustomActivity(index, 'description', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                            rows={2}
                          />
                        </div>
                        <button
                          onClick={() => removeCustomActivity(index)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    
                    {customActivities.length === 0 && (
                      <p className="text-sm text-gray-500 italic">
                        Add any custom activities or special requests that aren't listed in our standard options.
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="mt-6">
                  <label className="block text-night mb-2">Special Requests</label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any special requirements or preferences..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                    rows={4}
                  />
                </div>
              </div>
            )}
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-night">Contact Information</h3>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-night mb-2">Email Address</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-night mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="Include country code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-night mb-2">Passport Expiry Date (For International Travelers)</label>
              <input
                type="date"
                value={passportExpiry}
                onChange={(e) => setPassportExpiry(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                For travel to India, your passport should be valid for at least 6 months beyond your departure date
              </p>
            </div>

            {/* Package Summary */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-medium text-night mb-4">Package Summary</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Travelers:</span>
                  <span className="font-medium">{adults} Adults, {children} Children</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{getTotalTripDays()} Days</span>
                </div>
                
                {includesFlight && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Flights:</span>
                    <span className="font-medium">
                      {airports.find(a => a.code === departureCity)?.city || departureCity} to Port Blair ({flightClass})
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Accommodation:</span>
                  <span className="font-medium">
                    {accommodationTypes.find(a => a.id === accommodationType)?.name}
                  </span>
                </div>
                
                {selectedIslands.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Islands:</span>
                    <span className="font-medium">
                      {selectedIslands.map(id => islands.find(i => i.id === id)?.name).join(', ')}
                    </span>
                  </div>
                )}
                
                {selectedActivities.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Activities:</span>
                    <span className="font-medium">{selectedActivities.length} selected</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-azure/10 border border-azure/20 rounded-lg">
              <p className="text-sm text-night">
                By submitting this request, you agree to be contacted by our team regarding your travel package. 
                We will prepare a detailed itinerary based on your selections and preferences.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Custom Trip Calculator | Andaman Islands"
        description="Create your perfect Andaman vacation package with our advanced trip calculator. Get instant quotes and customize every aspect of your journey."
      />
      <Header />
      <Toaster position="top-right" />
      
      <div className="relative h-[40vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Trip Calculator"
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
              Custom Trip Calculator
            </h1>
            <p className="text-xl text-pearl/90">
              Design your perfect Andaman getaway
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                {/* Step Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex flex-col items-center">
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            currentStep === step 
                              ? 'bg-azure text-white' 
                              : currentStep > step 
                                ? 'bg-azure/20 text-azure' 
                                : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {step}
                        </div>
                        <span className="text-xs mt-2 text-gray-500">
                          {step === 1 && 'Basics'}
                          {step === 2 && 'Transport'}
                          {step === 3 && 'Activities'}
                          {step === 4 && 'Contact'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <div className="h-1 bg-gray-200 absolute inset-0"></div>
                    <div 
                      className="h-1 bg-azure absolute inset-0" 
                      style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step Content */}
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <button 
                      onClick={prevStep}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-night hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 4 ? (
                    <button 
                      onClick={nextStep}
                      className="px-6 py-2 bg-azure text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Continue
                    </button>
                  ) : (
                    <button 
                      onClick={handleSendPackage}
                      className="px-6 py-2 bg-azure text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center"
                    >
                      <span>Send Request</span>
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-8 shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold text-night mb-6">Price Breakdown</h3>
                
                <div className="space-y-4 mb-6">
                  {Object.entries(breakdown).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-night/70">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span>{formatCurrency(value)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-night font-medium">Total Cost:</span>
                    <span className="text-2xl font-bold text-night">
                      {formatCurrency(total)}
                    </span>
                  </div>
                  <p className="text-sm text-night/60 mb-6">
                    *Prices are indicative and may vary based on availability and season
                  </p>

                  {/* Quick Summary */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-night/70">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{adults} Adults, {children} Children</span>
                    </div>
                    <div className="flex items-center text-night/70">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{getTotalTripDays()} Days</span>
                    </div>
                    {includesFlight && (
                      <div className="flex items-center text-night/70">
                        <Plane className="w-4 h-4 mr-2" />
                        <span>{flightClass.charAt(0).toUpperCase() + flightClass.slice(1)} Class</span>
                      </div>
                    )}
                  </div>

                  {/* Call to Action */}
                  {currentStep < 4 ? (
                    <button
                      onClick={nextStep}
                      className="w-full py-3 bg-azure text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Continue to Next Step</span>
                      <Zap className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSendPackage}
                      className="w-full py-3 bg-azure text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Send Package Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingCalculatorPage;
