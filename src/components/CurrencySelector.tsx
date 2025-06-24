import React from 'react';
import { Globe } from 'lucide-react';

interface CurrencySelectorProps {
  value: string;
  onChange: (currency: string) => void;
}

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', flag: '🇦🇪' }
];

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedCurrency = currencies.find(c => c.code === value) || currencies[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-azure focus:outline-none focus:ring-2 focus:ring-azure/20"
      >
        <Globe className="w-5 h-5 text-azure" />
        <span>{selectedCurrency.flag}</span>
        <span>{selectedCurrency.code}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-2 max-h-64 overflow-y-auto">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => {
                  onChange(currency.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-azure/5 ${
                  value === currency.code ? 'bg-azure/10 text-azure' : 'text-night'
                }`}
              >
                <span className="text-xl">{currency.flag}</span>
                <div className="text-left">
                  <div className="font-medium">{currency.code}</div>
                  <div className="text-sm text-night/60">{currency.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;