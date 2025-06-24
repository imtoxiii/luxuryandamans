import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationSelectorProps {
  selectedCountry: string;
  selectedState: string;
  onCountryChange: (countryCode: string) => void;
  onStateChange: (stateCode: string) => void;
}

const countries = [
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    states: ['California', 'New York', 'Texas', 'Florida']
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    states: ['England', 'Scotland', 'Wales', 'Northern Ireland']
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    states: [
      'Andaman and Nicobar Islands',
      'Delhi',
      'Maharashtra',
      'Tamil Nadu',
      'Karnataka',
      'West Bengal'
    ]
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia']
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    states: ['Singapore']
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    states: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman']
  }
];

const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedCountry,
  selectedState,
  onCountryChange,
  onStateChange
}) => {
  const country = countries.find(c => c.code === selectedCountry);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-night mb-2">Country</label>
        <div className="relative">
          <select
            value={selectedCountry}
            onChange={(e) => {
              onCountryChange(e.target.value);
              onStateChange('');
            }}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent appearance-none"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-azure" />
        </div>
      </div>

      {country && (
        <div>
          <label className="block text-night mb-2">State/Region</label>
          <select
            value={selectedState}
            onChange={(e) => onStateChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent"
          >
            <option value="">Select State/Region</option>
            {country.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;