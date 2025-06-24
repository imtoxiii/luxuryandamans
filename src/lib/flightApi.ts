// Using Amadeus API (free tier)
import axios from 'axios';

interface FlightOffer {
  price: {
    total: string;
    currency: string;
  };
  itineraries: Array<{
    duration: string;
    segments: Array<{
      departure: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      arrival: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      carrierCode: string;
      number: string;
      aircraft: {
        code: string;
      };
      operating: {
        carrierCode: string;
      };
      duration: string;
      id: string;
      numberOfStops: number;
      blacklistedInEU: boolean;
    }>;
  }>;
}

export const searchFlights = async (
  origin: string,
  destination: string,
  departureDate: string,
  adults: number = 1,
  travelClass: string = 'ECONOMY'
): Promise<FlightOffer[]> => {
  try {
    // For development, return mock data
    const mockPrices = {
      ECONOMY: {
        domestic: 15000,
        international: 75000
      },
      BUSINESS: {
        domestic: 45000,
        international: 250000
      },
      FIRST: {
        domestic: 85000,
        international: 450000
      }
    };

    const isDomestic = origin.startsWith('I') && destination.startsWith('I');
    const priceCategory = isDomestic ? 'domestic' : 'international';
    const basePrice = mockPrices[travelClass as keyof typeof mockPrices][priceCategory];

    return [{
      price: {
        total: basePrice.toString(),
        currency: 'INR'
      },
      itineraries: [{
        duration: 'PT4H',
        segments: [{
          departure: {
            iataCode: origin,
            at: `${departureDate}T10:00:00`
          },
          arrival: {
            iataCode: destination,
            at: `${departureDate}T14:00:00`
          },
          carrierCode: 'AI',
          number: '123',
          aircraft: { code: '320' },
          operating: { carrierCode: 'AI' },
          duration: 'PT4H',
          id: '1',
          numberOfStops: 0,
          blacklistedInEU: false
        }]
      }]
    }];
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error;
  }
};