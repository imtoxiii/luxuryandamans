import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Calendar, Hotel, Utensils, Ship, Camera, Check, Plus, Minus, RefreshCw, Sparkles, Trophy, Wind, Umbrella, ShoppingBag, Percent, ArrowLeft, ArrowRight, Mail, Phone, Calculator, Send, Loader2, User, Crown, Star, Fish, Waves, MapPin, HelpCircle, DollarSign
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { sendTelegramMessage, formatCalculatorMessage } from '../lib/telegram';
import toast, { Toaster } from 'react-hot-toast';

// --- DATA CONFIGURATION ---
// Updated 2025-2026 pricing based on actual Andaman market rates

const andamanDestinations = [
    { id: "PB", name: "Port Blair", description: "Capital & History Hub", nights: 1, image: "https://images.pexels.com/photos/19756138/pexels-photo-19756138.jpeg" },
    { id: "HV", name: "Havelock Island", description: "Beaches & Diving", nights: 2, image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg" },
    { id: "NL", name: "Neil Island", description: "Pristine & Serene", nights: 1, image: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg" },
    { id: "BR", name: "Baratang", description: "Caves & Mangroves", nights: 1, image: "https://images.pexels.com/photos/18694893/pexels-photo-18694893.jpeg" },
    { id: "DG", name: "Diglipur", description: "Nature & Turtle Nesting", nights: 2, image: "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg" },
    { id: "LA", name: "Little Andaman", description: "Surfing & Waterfalls", nights: 2, image: "https://images.pexels.com/photos/67566/palm-tree-palm-ocean-summer-67566.jpeg" },
];

// Accommodation pricing based on actual 2025-2026 Andaman hotel rates
// Note: Havelock & Neil Island hotels cost MORE than Port Blair city hotels
// Base prices below are for Port Blair. Islands have multiplier applied in calculation.
const accommodationTiers = [
    {
        id: 'budget', name: 'Budget (2★)',
        rooms: [
            { id: 'bgt-std', name: 'Basic Room', price: 1800 },
            { id: 'bgt-ac', name: 'AC Room', price: 2500 }
        ]
    },
    {
        id: 'standard', name: 'Standard (3★)',
        rooms: [
            { id: 'std-base', name: 'Standard Room', price: 3500 },
            { id: 'std-dlx', name: 'Deluxe Room', price: 4500 }
        ]
    },
    {
        id: 'premium', name: 'Premium (4★)',
        rooms: [
            { id: 'prm-dlx', name: 'Premium Deluxe', price: 6000 },
            { id: 'prm-sea', name: 'Sea View', price: 8000 }
        ]
    },
    {
        id: 'beachresort', name: 'Beach Resort (4★)',
        rooms: [
            { id: 'bch-cottage', name: 'Beach Cottage', price: 8500 },
            { id: 'bch-villa', name: 'Beach Villa', price: 12000 }
        ]
    },
    {
        id: 'luxury', name: 'Luxury (5★)',
        rooms: [
            { id: 'lux-suite', name: 'Junior Suite', price: 15000 },
            { id: 'lux-villa', name: 'Beachfront Villa', price: 22000 },
            { id: 'lux-pool', name: 'Private Pool Villa', price: 35000 }
        ]
    }
];

// Location-based hotel price multipliers (Havelock & Neil cost more)
const HOTEL_LOCATION_MULTIPLIERS: { [key: string]: number } = {
    PB: 1.0,    // Port Blair - base rate
    HV: 1.35,   // Havelock Island - 35% more expensive
    NL: 1.25,   // Neil Island - 25% more expensive
    BR: 1.0,    // Baratang - same as Port Blair
    DG: 1.15,   // Diglipur - 15% more
    LA: 1.2,    // Little Andaman - 20% more
};

// Meal plans - actual rates at Andaman hotels/restaurants
const mealPlans = [
    { id: 'none', name: 'No Meals', price: 0, description: 'Self-arranged meals' },
    { id: 'cp', name: 'Breakfast Only', price: 400, description: 'Morning breakfast at hotel' },
    { id: 'map', name: 'Breakfast & Dinner', price: 1200, description: 'Convenient half-board' },
    { id: 'ap', name: 'All Meals Included', price: 2000, description: 'Full board - carefree' },
];

const tourTypes = [
    { id: 'private', name: 'Private Tours', multiplier: 1.0, icon: <Crown className="w-5 h-5" />, description: "Exclusive vehicle & flexible" },
    { id: 'group', name: 'Group Tours', multiplier: 0.85, icon: <Users className="w-5 h-5" />, description: "Shared vehicle, lower cost" },
];

// Activity prices - updated per user specifications
const activities = [
    { id: 'scuba', name: 'Scuba Diving', icon: <Fish className="w-5 h-5" />, price: 5000, popular: true },
    { id: 'seawalk', name: 'Sea Walking', icon: <Sparkles className="w-5 h-5" />, price: 4000 },
    { id: 'snorkeling', name: 'Snorkeling', icon: <Waves className="w-5 h-5" />, price: 1500, popular: true },
    { id: 'parasail', name: 'Parasailing', icon: <Wind className="w-5 h-5" />, price: 3500 },
    { id: 'kayak', name: 'Night Kayaking', icon: <Ship className="w-5 h-5" />, price: 3500, popular: true },
    { id: 'glassboat', name: 'Glass Bottom Boat', icon: <Trophy className="w-5 h-5" />, price: 2500 },
    { id: 'jetski', name: 'Jet Ski Ride', icon: <Wind className="w-5 h-5" />, price: 1500 },
    { id: 'semisub', name: 'Semi Submarine', icon: <Ship className="w-5 h-5" />, price: 2500 },
    { id: 'sofa', name: 'Sofa Ride', icon: <Waves className="w-5 h-5" />, price: 1000 },
    { id: 'banana', name: 'Banana Ride', icon: <Waves className="w-5 h-5" />, price: 1000 },
    { id: 'candle-dinner', name: 'Candlelight Dinner', icon: <Utensils className="w-5 h-5" />, price: 8000 },
    { id: 'photo', name: 'Photography Tour', icon: <Camera className="w-5 h-5" />, price: 6000 },
];

// Real Andaman transport costs 2025-2026
const GST_RATE = 0.05; // 5% GST

// Progressive profit margin - increases with package value
// This ensures higher-value packages generate more profit while keeping prices competitive
const getProgressiveProfitMargin = (baseAmount: number): number => {
    if (baseAmount <= 30000) return 0.15;       // 15% for budget packages
    if (baseAmount <= 50000) return 0.18;       // 18% for standard packages
    if (baseAmount <= 80000) return 0.22;       // 22% for premium packages
    if (baseAmount <= 120000) return 0.25;      // 25% for luxury packages
    return 0.28;                                 // 28% for ultra-luxury packages
};

// Cab costs per day based on location (includes driver, fuel, parking)
const CAB_COSTS: { [key: string]: number } = {
    PB: 3500,   // Port Blair sightseeing
    HV: 3000,   // Havelock Island
    NL: 2500,   // Neil Island
    BR: 5500,   // Baratang (long drive, permit areas)
    DG: 20000,  // Diglipur (very remote, long distance, 2-day trip usually)
    LA: 4000,   // Little Andaman
};

// Ferry costs per person based on 2025-2026 rates
const FERRY_COSTS = {
    government: 600,    // ₹400-700 actual (basic, slow)
    private: 1800,      // ₹1,200-2,500 actual (Makruzz, Nautika, Green Ocean)
};

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
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-1.5 w-full shadow-sm">
        <button onClick={() => onChange(Math.max(min, value - 1))} className="p-3 rounded-lg hover:bg-gray-100 transition text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed" disabled={value <= min}>
            <Minus className="w-4 h-4" />
        </button>
        <span className="font-bold text-lg text-gray-800 tabular-nums">{value} <span className="text-sm font-medium text-gray-500 ml-1">{unit}{value > 1 ? 's' : ''}</span></span>
        <button onClick={() => onChange(Math.min(max, value + 1))} className="p-3 rounded-lg hover:bg-gray-100 transition text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed" disabled={value >= max}>
            <Plus className="w-4 h-4" />
        </button>
    </div>
);

// --- MAIN LOGIC HOOK ---

const useCalculator = () => {
    const [showForm, setShowForm] = useState(false);
    const [activeTab, setActiveTab] = useState('itinerary');
    // Default: Port Blair + Havelock + Neil Island (most common itinerary)
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['PB', 'HV', 'NL']);
    const [travelers, setTravelers] = useState(2);
    const [duration, setDuration] = useState(5);

    // Default: Standard 3-star accommodation (good balance of comfort & value)
    const [accommodationTier, setAccommodationTier] = useState('standard');
    const [roomType, setRoomType] = useState('std-dlx');
    // Default: Breakfast Only (most common real preference)
    const [mealPlan, setMealPlan] = useState('cp');

    const [selectedActivities, setSelectedActivities] = useState<string[]>(['snorkeling']);
    const [tourType, setTourType] = useState('private');
    // Default: Private ferry (most tourists prefer comfort)
    const [ferryType, setFerryType] = useState<'government' | 'private'>('private');

    const [includeFlights, setIncludeFlights] = useState(false);
    const [includeInsurance, setIncludeInsurance] = useState(false);
    const [miscBuffer, setMiscBuffer] = useState(5); // Reduced from 10% - more realistic

    const [totalCost, setTotalCost] = useState(0);
    const [breakdown, setBreakdown] = useState<{ category: string, amount: number }[]>([]);

    const calculateCost = useCallback(() => {
        // === ACCOMMODATION ===
        const tier = accommodationTiers.find(t => t.id === accommodationTier);
        const room = tier?.rooms.find(r => r.id === roomType);
        const baseRoomPrice = room?.price || 0;
        const nights = duration - 1; // Stays = days - 1
        const roomsNeeded = Math.ceil(travelers / 2); // 2 people per room
        
        // Calculate average location multiplier based on selected destinations
        let avgLocationMultiplier = 1.0;
        if (selectedDestinations.length > 0) {
            const totalMultiplier = selectedDestinations.reduce((sum, destId) => {
                return sum + (HOTEL_LOCATION_MULTIPLIERS[destId] || 1.0);
            }, 0);
            avgLocationMultiplier = totalMultiplier / selectedDestinations.length;
        }
        
        // Simple accommodation calculation: base price x nights x rooms x location factor
        const accommodationCost = baseRoomPrice * nights * roomsNeeded * avgLocationMultiplier;

        // === MEALS ===
        // Per person per day
        const meal = mealPlans.find(m => m.id === mealPlan);
        const mealCost = (meal?.price || 0) * travelers * duration;

        // === TRANSPORT (CABS) ===
        // Calculate based on days per destination
        let transportCost = 0;
        const vehiclesNeeded = Math.ceil(travelers / 6); // Standard vehicle fits 6 pax
        const destinationsCount = selectedDestinations.length || 1;
        const daysPerDest = Math.ceil(duration / destinationsCount);
        
        selectedDestinations.forEach(destId => {
            const cabCostPerDay = CAB_COSTS[destId] || 3000;
            transportCost += cabCostPerDay * daysPerDest * vehiclesNeeded;
        });

        // === FERRIES ===
        let ferryLegs = 0;
        const islandDestinations = selectedDestinations.filter(d => d !== 'PB');
        if (islandDestinations.length > 0) {
            ferryLegs = islandDestinations.length + 1; // to first island + between islands + return
        }
        
        const ferryRate = ferryType === 'private' ? FERRY_COSTS.private : FERRY_COSTS.government;
        const ferryCost = ferryLegs * ferryRate * travelers;

        // === ACTIVITIES ===
        // Activities are pass-through - NO profit margin (you earn from vendor commissions)
        // This ensures Scuba ₹5,000 x 2 persons = ₹10,000 exactly as shown
        const activitiesCost = selectedActivities.reduce((sum, id) => {
            const activity = activities.find(a => a.id === id);
            if (!activity) return sum;
            // Candlelight dinner is per couple, not per person
            const price = activity.id === 'candle-dinner'
                ? activity.price * Math.ceil(travelers / 2)
                : activity.price * travelers;
            return sum + price;
        }, 0);

        // === CORE SERVICES (apply profit margin only to these) ===
        const coreServicesCost = accommodationCost + mealCost + transportCost + ferryCost;
        const tourTypeMultiplier = tourTypes.find(t => t.id === tourType)?.multiplier || 1;
        let coreWithTourType = coreServicesCost * tourTypeMultiplier;
        
        // Apply progressive profit margin ONLY to core services
        const profitMargin = getProgressiveProfitMargin(coreWithTourType);
        const coreWithMargin = coreWithTourType * (1 + profitMargin);

        // === SUBTOTAL ===
        // Core services (with margin) + Activities (pass-through, no margin)
        const subTotal = coreWithMargin + activitiesCost;

        // === OPTIONAL ADD-ONS ===
        const flightCost = includeFlights ? 12000 * travelers : 0;
        const insuranceCost = includeInsurance ? 500 * travelers : 0;

        // Miscellaneous buffer
        const miscCost = subTotal * (miscBuffer / 100);

        // === GST ===
        const preTaxTotal = subTotal + flightCost + insuranceCost + miscCost;
        const gstAmount = preTaxTotal * GST_RATE;

        // === FINAL TOTAL ===
        const total = preTaxTotal + gstAmount;

        setTotalCost(total);
        setBreakdown([
            { category: 'Accommodation', amount: accommodationCost * tourTypeMultiplier * (1 + profitMargin) },
            { category: 'Meals', amount: mealCost * tourTypeMultiplier * (1 + profitMargin) },
            { category: 'Transfers (Cabs)', amount: transportCost * tourTypeMultiplier * (1 + profitMargin) },
            { category: 'Ferry Tickets', amount: ferryCost * tourTypeMultiplier * (1 + profitMargin) },
            { category: 'Activities', amount: activitiesCost }, // No margin on activities
            { category: 'Flights (Est.)', amount: flightCost },
            { category: 'Travel Insurance', amount: insuranceCost },
            { category: 'Misc. Budget', amount: miscCost },
            { category: 'GST (5%)', amount: gstAmount },
        ].filter(item => item.amount > 0));
    }, [selectedDestinations, travelers, duration, accommodationTier, roomType, mealPlan, selectedActivities, tourType, ferryType, includeFlights, includeInsurance, miscBuffer]);

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
        setSelectedDestinations(['PB', 'HV', 'NL']);
        setTravelers(2);
        setDuration(5);
        setAccommodationTier('standard');
        setRoomType('std-dlx');
        setMealPlan('cp');
        setSelectedActivities(['snorkeling']);
        setTourType('private');
        setFerryType('private');
        setIncludeFlights(false);
        setIncludeInsurance(false);
        setMiscBuffer(5);
        setShowForm(false);
    };

    return {
        activeTab, setActiveTab, selectedDestinations, travelers, duration, accommodationTier, roomType, mealPlan, selectedActivities, tourType, ferryType, includeFlights, includeInsurance, miscBuffer, totalCost, breakdown,
        showForm, setShowForm,
        setTravelers, setDuration, setAccommodationTier, setRoomType, setMealPlan, setTourType, setFerryType, setIncludeFlights, setIncludeInsurance, setMiscBuffer,
        toggleDestination: (item: string) => toggleSelection(setSelectedDestinations, item),
        toggleActivity: (item: string) => toggleSelection(setSelectedActivities, item),
        resetCalculator
    };
};

// --- UI COMPONENTS ---

const TabButton = ({ id, activeTab, setActiveTab, children }: { id: string, activeTab: string, setActiveTab: (id: string) => void, children: React.ReactNode }) => (
    <button onClick={() => setActiveTab(id)} className={`relative py-3 px-4 rounded-xl text-sm font-bold transition-all w-full ${activeTab === id ? 'text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:bg-gray-100'}`}>
        {activeTab === id && <motion.div layoutId="tab-highlighter" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl z-0" />}
        <span className="relative z-10">{children}</span>
    </button>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center font-display">
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-3"></div>
            {title}
        </h3>
        {children}
    </div>
);

const PricingGuide = () => (
    <div className="mt-20 border-t border-gray-100 pt-16">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">How Much Does Andaman Trip Cost? Complete Budget Guide 2025-2026</h2>
                <p className="text-gray-600 leading-relaxed">
                    Wondering how much money is required for an Andaman trip? Here's a detailed breakdown of Andaman vacation costs for couples, families, and solo travelers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-blue-50 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                        Average Trip Cost (Per Person)
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Budget (4-5 Days)</span>
                            <span className="font-bold text-gray-900">₹18,000 - ₹28,000</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Standard (5-6 Days)</span>
                            <span className="font-bold text-gray-900">₹32,000 - ₹45,000</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Luxury (6-7 Days)</span>
                            <span className="font-bold text-gray-900">₹65,000+</span>
                        </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">*Excluding flights. Prices vary by season.</p>
                </div>
                <div className="bg-cyan-50 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-cyan-600" />
                        Activity Prices (2025-26)
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Scuba Diving</span>
                            <span className="font-bold text-gray-900">₹5,000</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Sea Walking</span>
                            <span className="font-bold text-gray-900">₹4,000</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Snorkeling</span>
                            <span className="font-bold text-gray-900">₹1,500</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Glass Bottom Boat</span>
                            <span className="font-bold text-gray-900">₹2,500</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center"><Hotel className="w-4 h-4 mr-2 text-green-600" /> Hotel Rates/Night</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span className="text-gray-600">Budget (2★)</span><span className="font-semibold">₹1,800 - ₹2,500</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Standard (3★)</span><span className="font-semibold">₹3,500 - ₹4,500</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Beach Resort (4★)</span><span className="font-semibold">₹8,500 - ₹12,000</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Luxury (5★)</span><span className="font-semibold">₹15,000 - ₹35,000</span></li>
                        <p className="text-xs text-gray-500 mt-2">*Havelock & Neil +25-35% extra</p>
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center"><Ship className="w-4 h-4 mr-2 text-purple-600" /> Ferry Costs/Person</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span className="text-gray-600">Government</span><span className="font-semibold">₹400 - ₹700</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Makruzz</span><span className="font-semibold">₹1,200 - ₹2,500</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Nautika</span><span className="font-semibold">₹1,500 - ₹3,000</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Green Ocean</span><span className="font-semibold">₹1,000 - ₹2,200</span></li>
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center"><MapPin className="w-4 h-4 mr-2 text-orange-600" /> Cab Rates/Day</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span className="text-gray-600">Port Blair</span><span className="font-semibold">₹3,500/day</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Havelock</span><span className="font-semibold">₹3,000/day</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Neil Island</span><span className="font-semibold">₹2,500/day</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Baratang</span><span className="font-semibold">₹5,500/day</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Diglipur</span><span className="font-semibold">₹20,000 (full trip)</span></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Budget for Your Andaman Trip</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Your total budget will largely depend on three factors: <strong>Accommodation</strong>, <strong>Transfers</strong>, and <strong>Activities</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li><strong>Accommodation:</strong> Ranges from ₹1,800/night for budget rooms to ₹28,000+ for private pool villas.</li>
                        <li><strong>Transfers:</strong> Private cabs cost ₹2,000-5,000 per day depending on island. Ferries between islands range from ₹600-2,500 per person per trip.</li>
                        <li><strong>Activities:</strong> Water sports are a major attraction. Budget ₹8,000-15,000 per person if you plan to do Scuba, Sea Walk, and Kayaking.</li>
                        <li><strong>Meals:</strong> Breakfast at hotels costs ₹300-500/day. Dining out averages ₹500-1,000/day per person.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center"><HelpCircle className="w-4 h-4 mr-2 text-blue-500" /> Is Andaman expensive for tourists?</h4>
                            <p className="text-gray-600 text-sm">Andaman can be tailored to any budget. While luxury resorts and private charters are expensive, budget travelers can enjoy the islands for as low as ₹15,000 - ₹20,000 per person by choosing standard hotels and government ferries.</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center"><HelpCircle className="w-4 h-4 mr-2 text-blue-500" /> What is the best time to visit for low prices?</h4>
                            <p className="text-gray-600 text-sm">The off-season (June to September) offers the lowest prices on hotels and sometimes flights, although rain might affect some water activities.</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center"><HelpCircle className="w-4 h-4 mr-2 text-blue-500" /> Do I need to book ferries in advance?</h4>
                            <p className="text-gray-600 text-sm">Yes, especially for private ferries like Makruzz or Nautika. In peak season (Dec-Jan), tickets sell out weeks in advance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const EnquiryForm = ({ planDetails, onBack, onSubmitSuccess }: { planDetails: any, onBack: () => void, onSubmitSuccess: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate inputs
        if (!name.trim()) {
            toast.error('Please enter your name.');
            return;
        }
        if (!email.trim() && !phone.trim()) {
            toast.error('Please provide either an email or a phone number.');
            return;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        // Show loading toast
        const loadingToast = toast.loading('📤 Sending your enquiry...');

        try {
            const destinationNames: string[] = (planDetails.selectedDestinations || [])
                .map((id: string) => andamanDestinations.find(d => d.id === id)?.name || id);

            const payload = {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                selectedDestinationNames: destinationNames,
                ...planDetails
            };

            const message = formatCalculatorMessage(payload);

            // Try sending with timeout
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Request timeout')), 10000)
            );

            const success = await Promise.race([
                sendTelegramMessage(message),
                timeoutPromise
            ]) as boolean;

            if (success) {
                toast.success('✅ Enquiry sent successfully! We\'ll contact you soon.', {
                    id: loadingToast,
                    duration: 4000,
                });
                onSubmitSuccess();
                setName('');
                setEmail('');
                setPhone('');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting pricing calculator enquiry:', error);
            toast.error('❌ Failed to send. Please try again or contact us directly.', {
                id: loadingToast,
                duration: 4000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
        >
            <div className="flex items-center justify-between mb-6">
                <button onClick={onBack} className="flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors group px-3 py-2 rounded-lg hover:bg-gray-50 -ml-2">
                    <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to Estimate
                </button>
                <h3 className="text-lg font-bold text-gray-800 font-display">Finalize Enquiry</h3>
            </div>

            <div className="text-center mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 shadow-sm">
                <p className="text-sm text-gray-500 font-medium mb-1">Estimated Total</p>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-display">{formatPrice(planDetails.totalCost)}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
                <input type="hidden" name="form_type" value="pricing_calculator" />

                <div className="space-y-5">
                    <div className="group">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block flex items-center">
                            <User className="w-4 h-4 mr-2 text-blue-500" />
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all bg-white shadow-sm text-base placeholder:text-gray-400"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-blue-500" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all bg-white shadow-sm text-base placeholder:text-gray-400"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-blue-500" />
                            Phone Number
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-4 text-sm font-medium text-gray-600 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl">+91</span>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="w-full px-4 py-3.5 border border-gray-200 rounded-r-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all bg-white shadow-sm text-base placeholder:text-gray-400"
                                placeholder="98765 43210"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-[1.02] transition-all group relative disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                    >
                        {isSubmitting && (
                            <div className="absolute inset-0 bg-blue-700/20 animate-pulse"></div>
                        )}
                        <div className="relative flex items-center justify-center space-x-3">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Enquiry</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </div>
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        We respect your privacy. No spam, ever.
                    </p>
                </div>
            </form>
        </motion.div>
    );
};

const PricingCalculatorPage = () => {
    const {
        activeTab, setActiveTab, selectedDestinations, travelers, duration, accommodationTier, roomType, mealPlan, selectedActivities, tourType, ferryType, includeFlights, includeInsurance, miscBuffer, totalCost, breakdown,
        showForm, setShowForm,
        setTravelers, setDuration, setAccommodationTier, setRoomType, setMealPlan, setTourType, setFerryType, setIncludeFlights, setIncludeInsurance, setMiscBuffer,
        toggleDestination, toggleActivity, resetCalculator
    } = useCalculator();

    const [showSuccess, setShowSuccess] = useState(false);

    const handleFormSubmit = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowForm(false);
        }, 2000);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2500);
    };

    const currentTier = accommodationTiers.find(t => t.id === accommodationTier);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'itinerary':
                return (
                    <motion.div key="itinerary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Section title="Where do you want to go?">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {andamanDestinations.map(dest => {
                                    const cabCost = CAB_COSTS[dest.id] || 3000;
                                    return (
                                        <div key={dest.id} onClick={() => toggleDestination(dest.id)} className={`relative rounded-2xl p-3 border-2 cursor-pointer transition-all duration-300 group overflow-hidden ${selectedDestinations.includes(dest.id) ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                            <div className="flex items-center relative z-10">
                                                <img src={dest.image} className="w-12 h-12 rounded-xl mr-3 object-cover shadow-sm" alt={dest.name} />
                                                <div>
                                                    <p className={`font-bold text-sm ${selectedDestinations.includes(dest.id) ? 'text-blue-700' : 'text-gray-700'}`}>{dest.name}</p>
                                                    <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{dest.description}</p>
                                                    <p className="text-[10px] text-green-600 font-medium mt-0.5">Cab: ₹{cabCost.toLocaleString()}/day</p>
                                                </div>
                                            </div>
                                            {selectedDestinations.includes(dest.id) && (
                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2 bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-full shadow-sm z-10">
                                                    <Check size={12} />
                                                </motion.div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </Section>
                        <Section title="Trip Details">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 block mb-3 flex items-center">
                                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                                        How many travelers?
                                    </label>
                                    <NumberInput value={travelers} onChange={setTravelers} min={1} max={20} unit="person" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 block mb-3 flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                        How long is your trip?
                                    </label>
                                    <NumberInput value={duration} onChange={setDuration} min={3} max={15} unit="day" />
                                </div>
                            </div>
                        </Section>
                    </motion.div>
                );
            case 'accommodation':
                return (
                    <motion.div key="accommodation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Section title="Accommodation Style">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {accommodationTiers.map(tier => (
                                    <button key={tier.id} onClick={() => setAccommodationTier(tier.id)} className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${accommodationTier === tier.id ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                        <Hotel className={`w-8 h-8 mx-auto mb-2 ${accommodationTier === tier.id ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <p className={`font-bold text-sm ${accommodationTier === tier.id ? 'text-blue-700' : 'text-gray-700'}`}>{tier.name}</p>
                                    </button>
                                ))}
                            </div>
                        </Section>
                        {currentTier && (
                            <Section title="Room Type">
                                <div className="grid grid-cols-2 gap-4">
                                    {currentTier.rooms.map(room => (
                                        <button key={room.id} onClick={() => setRoomType(room.id)} className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${roomType === room.id ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                            <p className={`font-bold ${roomType === room.id ? 'text-blue-700' : 'text-gray-700'}`}>{room.name}</p>
                                            <p className="text-sm text-gray-500 mt-1">+{formatPrice(room.price)}/night</p>
                                        </button>
                                    ))}
                                </div>
                            </Section>
                        )}
                        <Section title="Meal Plan">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {mealPlans.map(plan => (
                                    <button key={plan.id} onClick={() => setMealPlan(plan.id)} className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${mealPlan === plan.id ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                        <Utensils className={`w-6 h-6 mb-3 ${mealPlan === plan.id ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <p className={`font-bold text-sm ${mealPlan === plan.id ? 'text-blue-700' : 'text-gray-700'}`}>{plan.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">{plan.description}</p>
                                    </button>
                                ))}
                            </div>
                        </Section>
                    </motion.div>
                );
            case 'experiences':
                return (
                    <motion.div key="experiences" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Section title="Tour Preference">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {tourTypes.map(type => (
                                    <button key={type.id} onClick={() => setTourType(type.id)} className={`p-5 rounded-2xl border-2 text-center transition-all duration-300 ${tourType === type.id ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                        <div className={`flex justify-center mb-3 ${tourType === type.id ? 'text-blue-600' : 'text-gray-400'}`}>{type.icon}</div>
                                        <p className={`font-bold ${tourType === type.id ? 'text-blue-700' : 'text-gray-700'}`}>{type.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                                    </button>
                                ))}
                            </div>
                        </Section>
                        <Section title="Experiences & Activities">
                            <div className="grid grid-cols-2 gap-4">
                                {activities.map(act => (
                                    <button key={act.id} onClick={() => toggleActivity(act.id)} className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 flex items-center space-x-4 ${selectedActivities.includes(act.id) ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                        {act.popular && (
                                            <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center">
                                                <Star className="w-3 h-3 mr-0.5 fill-current" /> Popular
                                            </div>
                                        )}
                                        <div className={`p-2 rounded-lg ${selectedActivities.includes(act.id) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>{act.icon}</div>
                                        <div>
                                            <p className={`font-bold text-sm ${selectedActivities.includes(act.id) ? 'text-blue-700' : 'text-gray-700'}`}>{act.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">+{formatPrice(act.price)}{act.id !== 'candle-dinner' && '/person'}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </Section>
                    </motion.div>
                );
            case 'addons':
                return (
                    <motion.div key="addons" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Section title="Ferry Type">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <button
                                    onClick={() => setFerryType('private')}
                                    className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${ferryType === 'private' ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}
                                >
                                    <div className="flex items-center mb-2">
                                        <Ship className={`w-5 h-5 mr-2 ${ferryType === 'private' ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <p className={`font-bold ${ferryType === 'private' ? 'text-blue-700' : 'text-gray-700'}`}>Private Ferry</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Makruzz, Nautika, Green Ocean</p>
                                    <p className="text-sm font-semibold text-gray-700 mt-1">₹1,800/person</p>
                                    <p className="text-xs text-green-600 mt-1">Fast & Comfortable</p>
                                </button>
                                <button
                                    onClick={() => setFerryType('government')}
                                    className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${ferryType === 'government' ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}
                                >
                                    <div className="flex items-center mb-2">
                                        <Ship className={`w-5 h-5 mr-2 ${ferryType === 'government' ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <p className={`font-bold ${ferryType === 'government' ? 'text-blue-700' : 'text-gray-700'}`}>Govt. Ferry</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basic amenities</p>
                                    <p className="text-sm font-semibold text-gray-700 mt-1">₹600/person</p>
                                    <p className="text-xs text-orange-600 mt-1">Budget Option</p>
                                </button>
                            </div>
                        </Section>
                        <Section title="Travel Essentials">
                            <div className="space-y-4">
                                <div onClick={() => setIncludeFlights(!includeFlights)} className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${includeFlights ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                    <div className="flex items-center">
                                        <div className={`p-2 rounded-lg mr-4 ${includeFlights ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                            <Ship className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className={`font-bold ${includeFlights ? 'text-blue-700' : 'text-gray-700'}`}>Include Flight Estimates</p>
                                            <p className="text-sm text-gray-500">Approx. ₹12,000/person round-trip</p>
                                        </div>
                                    </div>
                                    <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${includeFlights ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                                        {includeFlights && <Check size={18} />}
                                    </div>
                                </div>
                                <div onClick={() => setIncludeInsurance(!includeInsurance)} className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${includeInsurance ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                    <div className="flex items-center">
                                        <div className={`p-2 rounded-lg mr-4 ${includeInsurance ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                            <Umbrella className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className={`font-bold ${includeInsurance ? 'text-blue-700' : 'text-slate-700'}`}>Add Travel Insurance</p>
                                            <p className="text-sm text-slate-500">₹500/person - Recommended</p>
                                        </div>
                                    </div>
                                    <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${includeInsurance ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                                        {includeInsurance && <Check size={18} />}
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section title="Miscellaneous Budget">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-sm font-bold text-slate-700 flex items-center">
                                        <ShoppingBag className="w-4 h-4 mr-2 text-blue-500" />
                                        Extra Budget (Shopping, Tips, Snacks)
                                    </label>
                                    <span className="px-3 py-1 text-sm font-bold bg-blue-100 text-blue-700 rounded-lg">{miscBuffer}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="20"
                                    step="5"
                                    value={miscBuffer}
                                    onChange={(e) => setMiscBuffer(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>0%</span>
                                    <span>10%</span>
                                    <span>20%</span>
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
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <SEO
                title="How Much Does Andaman Trip Cost? | Andaman Tour Budget Calculator 2025-2026"
                description="Calculate how much an Andaman trip costs for couples, families & solo travelers. Get instant budget estimate for 5-day trip to Andaman with hotels, scuba diving, ferries & activities. Average cost: ₹25,000-65,000 per person."
                keywords="how much does andaman cost, andaman trip cost for couple, andaman tour budget 2025, andaman trip cost calculator, how much money required for andaman trip, andaman nicobar trip cost, havelock island trip cost, andaman honeymoon cost, andaman family trip budget, 5 days andaman trip cost, andaman tour package price, scuba diving cost andaman, ferry cost andaman, port blair trip budget, neil island trip cost, andaman vacation cost, cheap andaman trip, luxury andaman cost"
                pathname="/calculator"
                type="website"
                targetAudience="all"
                faqData={[
                    {
                        question: "How much does an Andaman trip cost for a couple?",
                        answer: "An Andaman trip for a couple typically costs ₹50,000-90,000 for 5-6 days excluding flights. This includes 3-star hotels (₹3,500-4,500/night), private ferry tickets (₹1,800/person), cab transfers (₹2,500-3,500/day), and activities like scuba diving (₹5,000/person). Budget trips can start from ₹35,000 while luxury packages can go up to ₹1,50,000+."
                    },
                    {
                        question: "What is the average daily budget for Andaman?",
                        answer: "The average daily budget for Andaman is ₹5,000-8,000 per person for mid-range travel. This includes accommodation (₹2,500-3,500), meals (₹800-1,200), local transport (₹1,000-1,500), and activities. Budget travelers can manage with ₹3,000-4,000/day while luxury travelers should budget ₹12,000-20,000/day."
                    },
                    {
                        question: "How much does scuba diving cost in Andaman?",
                        answer: "Scuba diving in Andaman costs ₹3,500-5,500 per person for a beginner's introductory dive (Discover Scuba Diving). This includes equipment, instructor, and underwater photos. Certified divers pay ₹3,000-4,500 per dive. Sea walking costs around ₹3,500-4,000 per person."
                    },
                    {
                        question: "What is the ferry cost from Port Blair to Havelock?",
                        answer: "Ferry cost from Port Blair to Havelock ranges from ₹600-700 for government ferries to ₹1,200-2,500 for private ferries (Makruzz, Nautika, Green Ocean). Private ferries are faster (90 mins vs 2.5 hours), more comfortable, and recommended for tourists. Book 2-3 weeks in advance during peak season."
                    },
                    {
                        question: "Is Andaman expensive for tourists?",
                        answer: "Andaman is moderately priced compared to international beach destinations. A 5-day trip costs ₹25,000-45,000 per person for standard travel, making it affordable. However, being an island, some items cost more than mainland. Hotels in Havelock and Neil Island are 25-35% more expensive than Port Blair. Budget travelers can save by using government ferries and choosing guesthouses."
                    },
                    {
                        question: "How much money is required for a 5-day Andaman trip?",
                        answer: "For a 5-day Andaman trip, budget ₹25,000-35,000 per person for standard travel or ₹45,000-65,000 for premium experience (excluding flights). This covers 4 nights accommodation, meals, ferry tickets to Havelock/Neil, cab transfers, and 2-3 water activities. Add ₹10,000-15,000 per person for round-trip flights from major cities."
                    }
                ]}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Andaman Trip Cost Calculator",
                    "description": "Free online calculator to estimate Andaman tour cost for couples, families, and solo travelers. Get instant budget for hotels, ferries, activities, and transfers.",
                    "url": "https://luxuryandamans.com/calculator",
                    "applicationCategory": "TravelApplication",
                    "operatingSystem": "Any",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "INR"
                    },
                    "provider": {
                        "@type": "TravelAgency",
                        "name": "Luxury Andamans",
                        "url": "https://luxuryandamans.com"
                    },
                    "featureList": [
                        "Calculate Andaman trip cost for 2-20 travelers",
                        "Estimate hotel costs for Budget to Luxury stays",
                        "Get ferry prices for Port Blair, Havelock, Neil Island",
                        "Calculate scuba diving and water sports cost",
                        "Instant price breakdown with GST"
                    ]
                }}
            />
            <Toaster position="top-right" />
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b z-10" />
                    <img
                        src="https://images.pexels.com/photos/10818863/pexels-photo-10818863.jpeg"
                        alt="Andaman Calculator Background"
                        className="w-full h-full object-cover object-[50%_40%]"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6 border border-white/20 shadow-2xl">
                            <Calculator className="w-8 h-8 text-cyan-300" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight font-display">
                            How Much Does <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300">Andaman Cost?</span>
                        </h1>
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                            Calculate your Andaman trip budget for couple, family or solo travel. Get instant cost estimate for 2025-2026 including hotels, ferries & activities.
                        </p>
                    </motion.div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12 -mt-20 relative z-20 mb-20">
                <motion.div variants={staggerContainer(0.1, 0.1)} initial="initial" animate="animate">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column - Input Fields */}
                        <motion.div variants={fadeInUp} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                            <div className="p-1.5 mb-8 bg-gray-50 rounded-2xl grid grid-cols-4 gap-1 border border-gray-100">
                                <TabButton id="itinerary" activeTab={activeTab} setActiveTab={setActiveTab}>Trip</TabButton>
                                <TabButton id="accommodation" activeTab={activeTab} setActiveTab={setActiveTab}>Stay</TabButton>
                                <TabButton id="experiences" activeTab={activeTab} setActiveTab={setActiveTab}>Fun</TabButton>
                                <TabButton id="addons" activeTab={activeTab} setActiveTab={setActiveTab}>Extras</TabButton>
                            </div>
                            <AnimatePresence mode="wait">
                                {renderTabContent()}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
                                <button
                                    onClick={() => {
                                        const tabs = ['itinerary', 'accommodation', 'experiences', 'addons'];
                                        const currentIndex = tabs.indexOf(activeTab);
                                        if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
                                    }}
                                    disabled={activeTab === 'itinerary'}
                                    className="px-6 py-3 rounded-xl text-gray-600 font-semibold hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => {
                                        const tabs = ['itinerary', 'accommodation', 'experiences', 'addons'];
                                        const currentIndex = tabs.indexOf(activeTab);
                                        if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
                                    }}
                                    disabled={activeTab === 'addons'}
                                    className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center"
                                >
                                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Column - Price Summary */}
                        <motion.div variants={fadeInUp} className="lg:col-span-5 sticky top-28">
                            <motion.div
                                layout
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl shadow-blue-900/5 border border-gray-100 overflow-hidden relative"
                            >
                                <AnimatePresence>
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-50"
                                        >
                                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                                <Check className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 font-display">Enquiry Sent!</h3>
                                            <p className="text-gray-500 mt-2">We'll be in touch soon.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    {!showForm ? (
                                        <motion.div
                                            key="summary"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="flex flex-col h-full"
                                        >
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <h2 className="text-2xl font-bold text-gray-900 font-display">Your Estimate</h2>
                                                    <p className="text-sm text-gray-500">Detailed cost breakdown</p>
                                                </div>
                                                <div className="bg-blue-50 p-3 rounded-2xl">
                                                    <Percent className="w-6 h-6 text-blue-600" />
                                                </div>
                                            </div>

                                            <div className="text-center mb-6 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white relative shadow-lg overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-500/30 transition-colors duration-500"></div>
                                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -ml-20 -mb-20 group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
                                                <p className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Total Estimated Cost</p>
                                                <p className="text-4xl md:text-5xl font-bold relative z-10 font-display tracking-tight">{formatPrice(totalCost)}</p>
                                            </div>

                                            {totalCost > 0 && (
                                                <div className="space-y-6 mb-8">
                                                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden flex">
                                                        {breakdown.map((item, index) => (
                                                            <div key={index} className={`h-full ${['bg-blue-500', 'bg-cyan-500', 'bg-teal-500', 'bg-indigo-500', 'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500'][index % 8]}`} style={{ width: `${(item.amount / totalCost) * 100}%` }} title={`${item.category}: ${formatPrice(item.amount)}`}></div>
                                                        ))}
                                                    </div>
                                                    <div className="space-y-3">
                                                        {breakdown.map((item, index) => (
                                                            <div key={index} className="flex items-center justify-between text-sm group hover:bg-gray-50 p-2 rounded-lg transition-colors -mx-2">
                                                                <div className="flex items-center">
                                                                    <div className={`w-2.5 h-2.5 rounded-full mr-3 ${['bg-blue-500', 'bg-cyan-500', 'bg-teal-500', 'bg-indigo-500', 'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500'][index % 8]}`}></div>
                                                                    <span className="text-gray-600 font-medium">{item.category}</span>
                                                                </div>
                                                                <span className="font-bold text-gray-900">{formatPrice(item.amount)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mt-auto space-y-3">
                                                <button
                                                    onClick={() => setShowForm(true)}
                                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-[1.02] transition-all group relative overflow-hidden"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center">
                                                        Book Now & Finalize
                                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </button>
                                                <button onClick={resetCalculator} className="w-full py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 hover:text-gray-900 transition-all flex items-center justify-center text-sm">
                                                    <RefreshCw className="w-4 h-4 mr-2" /> Reset Calculator
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <EnquiryForm
                                            key="form"
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
                                            onBack={() => setShowForm(false)}
                                            onSubmitSuccess={handleFormSubmit}
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* SEO Content Section */}
                    <PricingGuide />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default PricingCalculatorPage;