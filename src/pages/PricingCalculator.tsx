import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Users, Calendar, Hotel, Utensils, Sunset, Ship, Camera, Check, Plus, Minus, RefreshCw, Sparkles, Shield, Trophy, Wind, Umbrella, ShoppingBag, Percent, ArrowLeft, Mail, Phone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';

// --- DATA CONFIGURATION ---

const andamanDestinations = [
  { id: "PB", name: "Port Blair", description: "Capital & History Hub", image: "https://images.unsplash.com/photo-1596402183181-3f67ee645816?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: "HV", name: "Havelock Island", description: "Beaches & Diving", image: "https://images.unsplash.com/photo-1590080552494-dcda538fa459?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: "NL", name: "Neil Island", description: "Pristine & Serene", image: "https://images.unsplash.com/photo-1589179447683-77a21578f21a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: "BR", name: "Baratang", description: "Caves & Mangroves", image: "https://images.unsplash.com/photo-1621543160215-2885994f71a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: "DG", name: "Diglipur", description: "Nature & Turtle Nesting", image: "https://images.unsplash.com/photo-1616738343166-a3d55b306b3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: "LA", name: "Little Andaman", description: "Surfing & Waterfalls", image: "https://images.unsplash.com/photo-1541644031682-9f8d9515a133?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
];

const accommodationTiers = [
    { 
      id: 'standard', name: 'Standard (3★)', 
      rooms: [
        { id: 'std-base', name: 'Standard Room', price: 3000 },
        { id: 'std-dlx', name: 'Deluxe Room', price: 4000 }
      ]
    },
    { 
      id: 'premium', name: 'Premium (4★)', 
      rooms: [
        { id: 'prm-dlx', name: 'Premium Deluxe', price: 6000 },
        { id: 'prm-sea', name: 'Sea View', price: 7500 }
      ]
    },
    { 
      id: 'luxury', name: 'Luxury (5★)', 
      rooms: [
        { id: 'lux-suite', name: 'Junior Suite', price: 12000 },
        { id: 'lux-villa', name: 'Private Pool Villa', price: 18000 }
      ]
    }
];

const mealPlans = [
    { id: 'cp', name: 'Breakfast Only', price: 400, description: 'Start your day right' },
    { id: 'map', name: 'Breakfast & Dinner', price: 1200, description: 'Convenient & tasty' },
    { id: 'ap', name: 'All Meals Included', price: 2000, description: 'Completely carefree' },
];

const tourTypes = [
    { id: 'group', name: 'Group Tours', multiplier: 1, icon: <Users className="w-5 h-5"/>, description: "Cost-effective & social" },
    { id: 'private', name: 'Private Tours', multiplier: 1.6, icon: <Shield className="w-5 h-5"/>, description: "Exclusive & flexible" }
];

const activities = [
  { id: 'scuba', name: 'Scuba Diving', icon: <Ship className="w-5 h-5" />, price: 4500 },
  { id: 'seawalk', name: 'Sea Walking', icon: <Sparkles className="w-5 h-5" />, price: 3500 },
  { id: 'parasail', name: 'Parasailing', icon: <Wind className="w-5 h-5" />, price: 3200 },
  { id: 'kayak', name: 'Kayaking', icon: <Ship className="w-5 h-5" />, price: 3000 },
  { id: 'glassboat', name: 'Glass Bottom Boat', icon: <Trophy className="w-5 h-5" />, price: 2000 },
  { id: 'jetski', name: 'Jet Ski', icon: <Wind className="w-5 h-5" />, price: 1000 },
  { id: 'candle-dinner', name: 'Candlelight Dinner', icon: <Sparkles className="w-5 h-5" />, price: 8000 },
  { id: 'photo', name: 'Photography Tour', icon: <Camera className="w-5 h-5" />, price: 6000 },
];

const GST_RATE = 0.05; // 5% GST

// --- UTILITY & HELPER COMPONENTS ---

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const formatPrice = (price: number) => `₹${Math.round(price).toLocaleString()}`;

const NumberInput = ({ value, onChange, min, max, unit }: { value: number, onChange: (val: number) => void, min: number, max: number, unit: string }) => (
  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-2 w-full">
    <button onClick={() => onChange(Math.max(min, value - 1))} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" disabled={value <= min}>
        <Minus className="w-4 h-4 text-night/70" />
      </button>
    <span className="font-semibold text-md text-night">{value} {unit}{value > 1 ? 's' : ''}</span>
    <button onClick={() => onChange(Math.min(max, value + 1))} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" disabled={value >= max}>
        <Plus className="w-4 h-4 text-night/70" />
      </button>
  </div>
);

// --- MAIN LOGIC HOOK ---

const useCalculator = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['PB', 'HV']);
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState(5);
  
  const [accommodationTier, setAccommodationTier] = useState('premium');
  const [roomType, setRoomType] = useState('prm-dlx');
  const [mealPlan, setMealPlan] = useState('map');

  const [selectedActivities, setSelectedActivities] = useState<string[]>(['scuba']);
  const [tourType, setTourType] = useState('group');
  
  const [includeFlights, setIncludeFlights] = useState(false);
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [miscBuffer, setMiscBuffer] = useState(10); // Percentage
  
  const [totalCost, setTotalCost] = useState(0);
  const [breakdown, setBreakdown] = useState<{category: string, amount: number}[]>([]);

  const calculateCost = useCallback(() => {
    // Accommodation
    const tier = accommodationTiers.find(t => t.id === accommodationTier);
    const room = tier?.rooms.find(r => r.id === roomType);
    const accommodationCost = (room?.price || 0) * (duration -1);

    // Meals
    const meal = mealPlans.find(m => m.id === mealPlan);
    const mealCost = (meal?.price || 0) * travelers * duration;

    // Base tour cost (transport, base guide, ferries)
    const baseTourCost = (1500 + (selectedDestinations.length * 500)) * travelers * duration;

    // Activities
    const activitiesCost = selectedActivities.reduce((sum, id) => {
        const activity = activities.find(a => a.id === id);
        const price = activity?.id === 'candle-dinner' ? activity.price : (activity?.price || 0) * travelers;
        return sum + price;
    }, 0);

    const subTotal = accommodationCost + mealCost + baseTourCost + activitiesCost;
    const tourTypeMultiplier = tourTypes.find(t => t.id === tourType)?.multiplier || 1;
    const coreCost = subTotal * tourTypeMultiplier;

    // Optional Add-ons
    const flightCost = includeFlights ? 15000 * travelers : 0;
    const insuranceCost = includeInsurance ? 800 * travelers : 0;
    const miscCost = coreCost * (miscBuffer / 100);

    const preTaxTotal = coreCost + flightCost + insuranceCost + miscCost;
    const gstAmount = preTaxTotal * GST_RATE;
    const total = preTaxTotal + gstAmount;

    setTotalCost(total);
    setBreakdown([
      { category: 'Accommodation', amount: accommodationCost * tourTypeMultiplier },
      { category: 'Food & Meals', amount: mealCost * tourTypeMultiplier },
      { category: 'Tours & Transport', amount: baseTourCost * tourTypeMultiplier },
      { category: 'Activities', amount: activitiesCost * tourTypeMultiplier },
      { category: 'Flights', amount: flightCost },
      { category: 'Insurance', amount: insuranceCost },
      { category: 'Misc. & Shopping', amount: miscCost },
      { category: 'GST (5%)', amount: gstAmount },
    ].filter(item => item.amount > 0));
  }, [selectedDestinations, travelers, duration, accommodationTier, roomType, mealPlan, selectedActivities, tourType, includeFlights, includeInsurance, miscBuffer]);

  useEffect(() => {
    const debouncedCalculate = debounce(calculateCost, 200);
    debouncedCalculate();
  }, [calculateCost]);
  
  useEffect(() => {
    const tier = accommodationTiers.find(t => t.id === accommodationTier);
    if (tier && !tier.rooms.find(r => r.id === roomType)) {
      setRoomType(tier.rooms[0].id);
    }
  }, [accommodationTier, roomType]);

  const toggleSelection = (setter: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setter(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const resetCalculator = () => {
    setActiveTab('itinerary');
    setSelectedDestinations(['PB', 'HV']);
    setTravelers(2);
    setDuration(5);
    setAccommodationTier('premium');
    setRoomType('prm-dlx');
    setMealPlan('map');
    setSelectedActivities(['scuba']);
    setTourType('group');
    setIncludeFlights(false);
    setIncludeInsurance(true);
    setMiscBuffer(10);
    setIsFlipped(false);
  };

  return {
    activeTab, setActiveTab, selectedDestinations, travelers, duration, accommodationTier, roomType, mealPlan, selectedActivities, tourType, includeFlights, includeInsurance, miscBuffer, totalCost, breakdown,
    isFlipped, setIsFlipped,
    setTravelers, setDuration, setAccommodationTier, setRoomType, setMealPlan, setTourType, setIncludeFlights, setIncludeInsurance, setMiscBuffer,
    toggleDestination: (item: string) => toggleSelection(setSelectedDestinations, item),
    toggleActivity: (item: string) => toggleSelection(setSelectedActivities, item),
    resetCalculator
  };
};

// --- UI COMPONENTS ---

const TabButton = ({ id, activeTab, setActiveTab, children }: { id: string, activeTab: string, setActiveTab: (id: string) => void, children: React.ReactNode }) => (
    <button onClick={() => setActiveTab(id)} className={`relative py-2 px-4 rounded-full text-sm font-medium transition-colors w-full ${activeTab === id ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
        {activeTab === id && <motion.div layoutId="tab-highlighter" className="absolute inset-0 bg-blue-600 rounded-full z-0"/>}
        <span className="relative z-10">{children}</span>
    </button>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        {children}
    </div>
);

const EnquiryForm = ({ planDetails, onBack, onSubmitSuccess }: { planDetails: any, onBack: () => void, onSubmitSuccess: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset error state
        setError('');
        
        // Validate inputs
        if (!name.trim()) {
            setError('Please enter your name.');
            return;
        }
        if (!email.trim() && !phone.trim()) {
            setError('Please provide either an email or a phone number.');
            return;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            setError('Please enter a valid email address.');
            return;
        }
        
        setIsSubmitting(true);

        try {
            // Import sendEmail function
            const { sendEmail } = await import('../lib/email');
            
            // Prepare detailed plan information
            const destinationNames: string[] = (planDetails.selectedDestinations || [])
              .map((id: string) => andamanDestinations.find(d => d.id === id)?.name || id);

            const planSummary = `Travel Plan Enquiry:\n\n` +
`🏖️ Destinations: ${destinationNames.length ? destinationNames.join(', ') : 'Not specified'}\n` +
`👥 Travelers: ${planDetails.travelers || 'Not specified'}\n` +
`📅 Duration: ${planDetails.duration || 'Not specified'} days\n` +
`🏨 Accommodation: ${planDetails.accommodationTier || 'Not specified'}\n` +
`🍽️ Meals: ${planDetails.mealPlan || 'Not specified'}\n` +
`🚌 Tour Type: ${planDetails.tourType || 'Not specified'}\n` +
`🎯 Activities: ${(planDetails.selectedActivities?.length || 0)} selected\n` +
`✈️ Flights: ${planDetails.includeFlights ? 'Included' : 'Not included'}\n` +
`🛡️ Insurance: ${planDetails.includeInsurance ? 'Included' : 'Not included'}\n\n` +
`💰 Total Estimated Cost: ${formatPrice(planDetails.totalCost)}\n\n` +
`Please contact me to finalize this travel plan.`;
            
            const success = await sendEmail({
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                subject: 'Pricing Calculator Enquiry',
                message: planSummary,
                packageName: 'Custom Travel Plan Calculator',
                totalPrice: planDetails.totalCost,
                preferred_contact: email.trim() ? 'email' : 'phone',
                // Include all calculator selections for admin (from planDetails)
                selectedDestinations: planDetails.selectedDestinations || [],
                selectedDestinationNames: destinationNames,
                travelers: planDetails.travelers,
                duration: planDetails.duration,
                accommodationTier: planDetails.accommodationTier,
                roomType: planDetails.roomType,
                mealPlan: planDetails.mealPlan,
                selectedActivities: planDetails.selectedActivities || [],
                tourType: planDetails.tourType,
                includeFlights: planDetails.includeFlights,
                includeInsurance: planDetails.includeInsurance,
                miscBuffer: planDetails.miscBuffer,
                breakdown: planDetails.breakdown || []
            });

            if (success) {
                console.log('✅ Pricing Calculator enquiry submitted successfully');
                onSubmitSuccess();
                // Clear form
                setName('');
                setEmail('');
                setPhone('');
            }
        } catch (error) {
            console.error('❌ Error submitting pricing calculator enquiry:', error);
            setError('Failed to submit enquiry. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="absolute inset-0 w-full h-full bg-white rounded-2xl p-6 flex flex-col" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="flex items-center justify-between mb-2">
                <button onClick={onBack} className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                    <ArrowLeft size={16} className="mr-1" />
                    Back to Summary
                </button>
                <h3 className="text-lg font-bold text-gray-800">Finalize Enquiry</h3>
            </div>

            <div className="text-center mb-3">
                <p className="text-3xl font-bold text-blue-600">{formatPrice(planDetails.totalCost)}</p>
                <p className="text-xs text-gray-500">Your personalized trip estimate</p>
            </div>

            <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                    <div>
                        <label htmlFor="name" className="text-xs font-medium text-gray-600">Full Name</label>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xs font-medium text-gray-600">Email Address</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-xs font-medium text-gray-600">Phone Number (Optional)</label>
                         <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">+91</span>
                            <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500" placeholder="98765 43210" />
                        </div>
                    </div>
                    {error && <p className="text-xs text-red-500">{error}</p>}
                </div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
            </form>
        </div>
    );
};

const PricingCalculatorPage = () => {
    const {
        activeTab, setActiveTab, selectedDestinations, travelers, duration, accommodationTier, roomType, mealPlan, selectedActivities, tourType, includeFlights, includeInsurance, miscBuffer, totalCost, breakdown,
        isFlipped, setIsFlipped,
        setTravelers, setDuration, setAccommodationTier, setRoomType, setMealPlan, setTourType, setIncludeFlights, setIncludeInsurance, setMiscBuffer,
        toggleDestination, toggleActivity, resetCalculator
    } = useCalculator();

    const [showSuccess, setShowSuccess] = useState(false);

    const handleFormSubmit = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setIsFlipped(false);
        }, 2000);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2500); // hide success message after card flips back
    };
    
    const currentTier = accommodationTiers.find(t => t.id === accommodationTier);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'itinerary':
                return (
                    <motion.div key="itinerary" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                        <Section title="Where do you want to go?">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {andamanDestinations.map(dest => (
                                    <div key={dest.id} onClick={() => toggleDestination(dest.id)} className={`relative rounded-lg p-3 border-2 cursor-pointer transition-all ${selectedDestinations.includes(dest.id) ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <div className="flex items-center">
                                            <img src={dest.image} className="w-10 h-10 rounded-md mr-3 object-cover" alt={dest.name} />
                                            <div>
                                                <p className="font-semibold text-gray-800">{dest.name}</p>
                                                <p className="text-xs text-gray-500">{dest.description}</p>
                                            </div>
                                        </div>
                                        {selectedDestinations.includes(dest.id) && <div className="absolute top-2 right-2 bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-full"><Check size={12}/></div>}
                                    </div>
                                ))}
                            </div>
                        </Section>
                        <Section title="Trip Details">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">How many travelers?</label>
                                    <NumberInput value={travelers} onChange={setTravelers} min={1} max={20} unit="person"/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">How long is your trip?</label>
                                    <NumberInput value={duration} onChange={setDuration} min={3} max={15} unit="day"/>
                                </div>
                            </div>
                        </Section>
                    </motion.div>
                );
            case 'accommodation':
                return (
                     <motion.div key="accommodation" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                        <Section title="Accommodation Style">
                            <div className="grid grid-cols-3 gap-3">
                                {accommodationTiers.map(tier => (
                                    <button key={tier.id} onClick={() => setAccommodationTier(tier.id)} className={`p-4 rounded-lg border-2 text-center transition-all ${accommodationTier === tier.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <p className="font-semibold text-gray-800">{tier.name}</p>
                                    </button>
                                ))}
                            </div>
                        </Section>
                        {currentTier && (
                             <Section title="Room Type">
                                <div className="grid grid-cols-2 gap-3">
                                    {currentTier.rooms.map(room => (
                                        <button key={room.id} onClick={() => setRoomType(room.id)} className={`p-4 rounded-lg border-2 text-left transition-all ${roomType === room.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                            <p className="font-semibold text-gray-800">{room.name}</p>
                                            <p className="text-sm text-gray-600">+{formatPrice(room.price)}/night</p>
                                        </button>
                                    ))}
                                </div>
                            </Section>
                        )}
                        <Section title="Meal Plan">
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {mealPlans.map(plan => (
                                    <button key={plan.id} onClick={() => setMealPlan(plan.id)} className={`p-4 rounded-lg border-2 text-left transition-all ${mealPlan === plan.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <p className="font-semibold text-gray-800">{plan.name}</p>
                                        <p className="text-sm text-gray-500">{plan.description}</p>
                                    </button>
                                ))}
                            </div>
                        </Section>
                    </motion.div>
                );
            case 'experiences':
    return (
                    <motion.div key="experiences" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                        <Section title="Experiences & Activities">
                            <div className="grid grid-cols-2 gap-3">
                                {activities.map(act => (
                                    <button key={act.id} onClick={() => toggleActivity(act.id)} className={`p-4 rounded-lg border-2 text-left transition-all flex items-center space-x-3 ${selectedActivities.includes(act.id) ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <div className="text-blue-600">{act.icon}</div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{act.name}</p>
                                            <p className="text-sm text-gray-600">+{formatPrice(act.price)}{act.id !== 'candle-dinner' && '/person'}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </Section>
                        <Section title="Tour Preference">
                            <div className="grid grid-cols-2 gap-3">
                                {tourTypes.map(type => (
                                    <button key={type.id} onClick={() => setTourType(type.id)} className={`p-4 rounded-lg border-2 text-center transition-all ${tourType === type.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <div className="flex justify-center mb-2 text-blue-600">{type.icon}</div>
                                        <p className="font-semibold text-gray-800">{type.name}</p>
                                        <p className="text-sm text-gray-500">{type.description}</p>
        </button>
                                ))}
                            </div>
                        </Section>
                    </motion.div>
                );
            case 'addons':
                return (
                    <motion.div key="addons" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                        <Section title="Travel Essentials">
                            <div className="space-y-4">
                                <div onClick={() => setIncludeFlights(!includeFlights)} className={`p-4 rounded-lg border-2 text-left transition-all flex items-center justify-between cursor-pointer ${includeFlights ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <div className="flex items-center">
                                        <Ship className="w-5 h-5 mr-3 text-blue-600"/>
                                        <div>
                                            <p className="font-semibold text-gray-800">Include Flight Estimates</p>
                                            <p className="text-sm text-gray-500">Approx. ₹15,000/person round-trip</p>
                                        </div>
                                    </div>
                                    <div className={`w-6 h-6 flex items-center justify-center rounded-full p-1 transition-colors text-white ${includeFlights ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                        {includeFlights && <Check size={16} />}
                                    </div>
                                </div>
                                 <div onClick={() => setIncludeInsurance(!includeInsurance)} className={`p-4 rounded-lg border-2 text-left transition-all flex items-center justify-between cursor-pointer ${includeInsurance ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <div className="flex items-center">
                                        <Umbrella className="w-5 h-5 mr-3 text-blue-600"/>
                                        <div>
                                            <p className="font-semibold text-gray-800">Add Travel Insurance</p>
                                            <p className="text-sm text-gray-500">Recommended for peace of mind</p>
                                        </div>
                                    </div>
                                    <div className={`w-6 h-6 flex items-center justify-center rounded-full p-1 transition-colors text-white ${includeInsurance ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                        {includeInsurance && <Check size={16} />}
                                    </div>
                                </div>
                            </div>
                        </Section>
                         <Section title="Miscellaneous & Shopping Buffer">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700">Buffer Percentage</label>
                                    <span className="px-2 py-1 text-sm font-bold bg-blue-100 text-blue-700 rounded-md">{miscBuffer}%</span>
                                </div>
                <input
                                    type="range"
                                    min="0"
                                    max="30"
                                    step="5"
                                    value={miscBuffer}
                                    onChange={(e) => setMiscBuffer(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>0%</span>
                                    <span>15%</span>
                                    <span>30%</span>
                                </div>
              </div>
                        </Section>
            </motion.div>
    );
            default:
                return null;
        }
  };

  return (
        <div className="min-h-screen bg-gray-50">
            <SEO title="Advanced Andaman Trip Calculator" description="Get a detailed, all-inclusive cost estimate for your dream Andaman vacation." keywords="andaman price calculator, andaman trip cost, andaman budget"/>
      <Header />
            <main className="container mx-auto px-4 py-12 pt-28 md:pt-32 mb-16">
                <motion.div variants={staggerContainer(0.2, 0.5)} initial="initial" animate="animate">
                    <motion.div variants={fadeInUp} className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Plan Your Perfect Andaman Trip</h1>
                        <p className="text-md text-gray-600 mt-2 max-w-2xl mx-auto">Customize your journey step-by-step for a detailed price estimate.</p>
                    </motion.div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                        {/* Left Column - Input Fields */}
                        <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <div className="p-1 mb-6 bg-gray-100 rounded-full grid grid-cols-4 gap-1">
                                <TabButton id="itinerary" activeTab={activeTab} setActiveTab={setActiveTab}>1. Trip</TabButton>
                                <TabButton id="accommodation" activeTab={activeTab} setActiveTab={setActiveTab}>2. Stay</TabButton>
                                <TabButton id="experiences" activeTab={activeTab} setActiveTab={setActiveTab}>3. Fun</TabButton>
                                <TabButton id="addons" activeTab={activeTab} setActiveTab={setActiveTab}>4. Extras</TabButton>
                            </div>
                            <AnimatePresence mode="wait">
                                {renderTabContent()}
                            </AnimatePresence>
          </motion.div>

                        {/* Right Column - Price Summary */}
                        <motion.div variants={fadeInUp} className="lg:col-span-2" style={{ perspective: '1000px' }}>
                            <motion.div 
                                className="relative w-full h-[550px]"
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front of Card - Summary */}
                                <div className="absolute inset-0 w-full h-full bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-600" style={{ backfaceVisibility: 'hidden' }}>
                                    <AnimatePresence>
                                        {showSuccess && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl z-20"
                                            >
                                                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                                                    <Check className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="mt-4 text-xl font-bold text-gray-800">Enquiry Sent!</h3>
                                                <p className="text-gray-600">We'll be in touch soon.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Your Trip Estimate</h2>
                                    <p className="text-sm text-gray-500 mb-4">An all-inclusive, detailed breakdown</p>
                                    
                                    <div className="text-right mb-4">
                                        <p className="text-4xl font-bold text-blue-600">{formatPrice(totalCost)}</p>
                                        <p className="text-xs text-gray-500">Total for {travelers} person{travelers > 1 && 's'} (incl. taxes)</p>
                </div>

                                    {totalCost > 0 && (
                                        <>
                                            <h3 className="font-semibold text-gray-800 mb-2">Cost Breakdown</h3>
                                            <div className="space-y-2 mb-4">
                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                    <div className="flex h-2.5">
                                                        {breakdown.map((item, index) => (
                                                            <div key={index} className={`first:rounded-l-full last:rounded-r-full ${['bg-sky-500', 'bg-teal-500', 'bg-emerald-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-red-500', 'bg-orange-500'][index % 8]}`} style={{ width: `${(item.amount / totalCost) * 100}%`}} title={`${item.category}: ${formatPrice(item.amount)}`}></div>
                    ))}
                  </div>
                </div>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                                                     {breakdown.map((item, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <div className={`w-2 h-2 rounded-full mr-2 ${['bg-sky-500', 'bg-teal-500', 'bg-emerald-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-red-500', 'bg-orange-500'][index % 8]}`}></div>
                                                            <span className="text-gray-600">{item.category}:</span>
                                                            <span className="font-medium text-gray-800 ml-auto">{formatPrice(item.amount)}</span>
                                                        </div>
                                                    ))}
                </div>
                </div>
                                        </>
                                    )}
                                    
                                    <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                                        <button onClick={() => setIsFlipped(true)} className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm">
                                            Book Now & Finalize
                                        </button>
                                        <button onClick={resetCalculator} className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center text-sm">
                                            <RefreshCw className="w-4 h-4 mr-2" /> Reset & Start Over
                  </button>
              </div>
                                </div>

                                {/* Back of Card - Enquiry Form */}
                                <EnquiryForm 
                                    planDetails={{
                                        totalCost,
                                        breakdown,
                                        selectedDestinations,
                                        travelers,
                                        duration,
                                        accommodationTier,
                                        roomType,
                                        mealPlan,
                                        selectedActivities,
                                        tourType,
                                        includeFlights,
                                        includeInsurance,
                                        miscBuffer
                                    }}
                                    onBack={() => setIsFlipped(false)}
                                    onSubmitSuccess={handleFormSubmit}
                                />
                            </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingCalculatorPage;