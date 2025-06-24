import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Calendar, Building, ChevronDown, RefreshCw, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';

// A simple debounce function
function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Custom hook to fetch countries and states
const useLocationData = () => {
  const [countries, setCountries] = useState<{ name: string; iso2: string }[]>([]);
  const [states, setStates] = useState<{ name: string; iso2: string }[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingStates, setLoadingStates] = useState(false);

  const API_KEY = import.meta.env.VITE_CSC_API_KEY;
  const API_URL = 'https://api.countrystatecity.in/v1';

  useEffect(() => {
    const fetchCountries = async () => {
      if (!API_KEY) {
        console.error("API Key for Country/State is missing.");
        setLoadingCountries(false);
        return;
      }
      setLoadingCountries(true);
      try {
        const response = await fetch(`${API_URL}/countries`, {
          headers: { 'X-CSCAPI-KEY': API_KEY },
        });
        const data = await response.json();
        if (Array.isArray(data)) {
          setCountries(data.map((c: any) => ({ name: c.name, iso2: c.iso2 })));
        } else {
          setCountries([]);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
        }
      setLoadingCountries(false);
    };
    fetchCountries();
  }, [API_KEY]);

  const fetchStates = useCallback(async (countryCode: string) => {
    if (!countryCode || !API_KEY) {
      setStates([]);
      return;
    }
    setLoadingStates(true);
    try {
      const response = await fetch(`${API_URL}/countries/${countryCode}/states`, {
        headers: { 'X-CSCAPI-KEY': API_KEY },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setStates(data.map((s: any) => ({ name: s.name, iso2: s.iso2 })));
      } else {
        setStates([]);
    }
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
    setLoadingStates(false);
  }, [API_KEY]);

  return { countries, states, loadingCountries, loadingStates, fetchStates };
};

const NumberInput = ({ value, onChange, min, max, unit, label }: { value: number, onChange: (val: number) => void, min: number, max: number, unit: string, label: string }) => (
  <div>
    <h2 className="text-xl font-bold text-night flex items-center mb-4">{label}</h2>
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
      <button onClick={() => onChange(Math.max(min, value - 1))} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        <Minus className="w-4 h-4 text-night/70" />
      </button>
      <span className="font-semibold text-lg text-night">{value} {unit}{value > 1 ? 's' : ''}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        <Plus className="w-4 h-4 text-night/70" />
      </button>
    </div>
  </div>
);

// Main Component
const PricingCalculatorPage = () => {
  const { countries, states, loadingCountries, loadingStates, fetchStates } = useLocationData();

  const [selectedCountry, setSelectedCountry] = useState<{ name: string; iso2: string } | null>(null);
  const [selectedState, setSelectedState] = useState<{ name: string; iso2: string } | null>(null);
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState(7);
  const [accommodation, setAccommodation] = useState('premium');
  
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = useCallback(() => {
    if (!selectedCountry || !selectedState) {
      setTotalCost(0);
      return;
    }

    const countryFactor = selectedCountry.name.length % 5 + 1; // Arbitrary factor
    const stateFactor = selectedState.name.length % 5 + 1; // Arbitrary factor
    
    const baseCost = 5000;
    const accommodationCost = { standard: 1, premium: 1.8, luxury: 3.5 }[accommodation] || 1;
    
    const cost = baseCost * travelers * duration * accommodationCost * (countryFactor + stateFactor) / 2;
    
    setTotalCost(cost);
  }, [selectedCountry, selectedState, travelers, duration, accommodation]);

  useEffect(() => {
    const debouncedCalculate = debounce(calculateCost, 300);
    debouncedCalculate();
  }, [calculateCost]);
  
  useEffect(() => {
    if (selectedCountry) {
      fetchStates(selectedCountry.iso2);
      setSelectedState(null);
    }
  }, [selectedCountry, fetchStates]);

  const resetCalculator = () => {
    setSelectedCountry(null);
    setSelectedState(null);
    setTravelers(2);
    setDuration(7);
    setAccommodation('premium');
  };

  const Selector = ({ label, value, options, onSelect, placeholder, loading }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredOptions = options.filter((opt: any) =>
      opt.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="relative">
        <label className="block text-sm font-medium text-night/70 mb-2">{label}</label>
        <button
          type="button"
          className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-left flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
          disabled={loading || !options.length}
        >
          <span className={value ? 'text-night' : 'text-night/50'}>
            {value ? value.name : placeholder}
          </span>
          {loading ? <RefreshCw className="w-4 h-4 text-night/50 animate-spin" /> : <ChevronDown className={`w-5 h-5 text-night/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto"
            >
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ul>
                {filteredOptions.length > 0 ? filteredOptions.map((opt: any) => (
                  <li
                    key={opt.iso2}
                    className="px-4 py-2 hover:bg-azure/10 cursor-pointer"
                    onClick={() => {
                      onSelect(opt);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    {opt.name}
                  </li>
                )) : <li className="px-4 py-2 text-night/50">No results</li>}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Modern Travel Price Calculator"
        description="Estimate the cost of your next luxury trip with our dynamic and modern travel price calculator. Select any destination and customize your journey."
        keywords="travel calculator, price estimator, luxury travel, dynamic calculator"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div variants={staggerContainer(0.2, 0.5)} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-night">Travel Price Calculator</h1>
            <p className="text-lg text-night/70 mt-2">Craft your dream journey and get an instant estimate.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
              
              {/* Destination */}
                  <div>
                <h2 className="text-xl font-bold text-night flex items-center mb-4"><MapPin className="mr-2 text-azure"/> Destination</h2>
                <div className="space-y-4">
                  <Selector
                    label="Country"
                    value={selectedCountry}
                    options={countries}
                    onSelect={setSelectedCountry}
                    placeholder="Select a country"
                    loading={loadingCountries}
                  />
                  <Selector
                    label="State / Region"
                    value={selectedState}
                    options={states}
                    onSelect={setSelectedState}
                    placeholder={selectedCountry ? "Select a state" : "First select a country"}
                    loading={loadingStates}
                    />
                  </div>
                </div>

              <NumberInput 
                label={<><Users className="mr-2 text-azure"/> Travelers</>}
                value={travelers}
                onChange={setTravelers}
                min={1} max={10} unit="person"
              />
              
              <NumberInput
                label={<><Calendar className="mr-2 text-azure"/> Duration</>}
                value={duration}
                onChange={setDuration}
                min={1} max={30} unit="day"
                        />

                {/* Accommodation */}
                <div>
                 <h2 className="text-xl font-bold text-night flex items-center mb-4"><Building className="mr-2 text-azure"/> Accommodation</h2>
                 <div className="grid grid-cols-3 gap-2">
                   {['standard', 'premium', 'luxury'].map(level => (
                     <button
                       key={level}
                       onClick={() => setAccommodation(level)}
                       className={`p-3 rounded-lg text-center text-sm capitalize font-medium transition ${accommodation === level ? 'bg-azure text-white shadow-md' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
                     >
                       {level}
                     </button>
                    ))}
                  </div>
                </div>

            </motion.div>

            <motion.div variants={fadeInUp} className="sticky top-24">
              <div className="bg-night text-pearl p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-2">Your Estimate</h2>
                <p className="text-pearl/70 mb-6">This is a ballpark figure for your reference.</p>
                
                <div className="text-center my-8">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={totalCost}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-azure to-sunset bg-clip-text text-transparent"
                    >
                      {totalCost > 0 ? `₹${Math.round(totalCost).toLocaleString()}` : '₹--'}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-pearl/50 mt-1">Total Estimated Cost (INR)</p>
                </div>

                <div className="border-t border-pearl/20 pt-6">
                  <h3 className="font-semibold mb-3">Your Trip:</h3>
                  <ul className="text-pearl/80 space-y-2 text-sm">
                    <li className="flex justify-between"><span>Destination:</span> <strong>{selectedCountry && selectedState ? `${selectedState.name}, ${selectedCountry.name}`: 'Not selected'}</strong></li>
                    <li className="flex justify-between"><span>Travelers:</span> <strong>{travelers}</strong></li>
                    <li className="flex justify-between"><span>Duration:</span> <strong>{duration} days</strong></li>
                    <li className="flex justify-between"><span>Accommodation:</span> <strong className="capitalize">{accommodation}</strong></li>
                  </ul>
                </div>

                  <button
                  onClick={resetCalculator}
                  className="w-full mt-8 bg-pearl/10 hover:bg-pearl/20 text-pearl rounded-lg py-3 flex items-center justify-center transition"
                  >
                  <RefreshCw className="w-4 h-4 mr-2"/>
                  Reset
                  </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingCalculatorPage;