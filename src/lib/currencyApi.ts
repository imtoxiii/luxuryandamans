import axios from 'axios';

export interface ExchangeRates {
  [key: string]: number;
}

export const fetchExchangeRates = async (baseCurrency: string = 'INR'): Promise<ExchangeRates> => {
  try {
    // For development, return static rates
    return {
      INR: 1,
      USD: 0.012,
      EUR: 0.011,
      GBP: 0.0095,
      AUD: 0.018,
      SGD: 0.016,
      AED: 0.044,
      JPY: 1.32,
      CAD: 0.016,
      CHF: 0.011,
      CNY: 0.086
    };
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};