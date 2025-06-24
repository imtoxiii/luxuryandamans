import axios from 'axios';

interface FlightPrice {
  price: number;
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: number;
}

export const fetchFlightPrices = async (
  from: string,
  to: string,
  date: string,
  cabinClass: string
): Promise<FlightPrice[]> => {
  try {
    // This is a mock implementation since we don't have a real flight API
    // In a real application, you would make an API call here
    
    const mockPrices: FlightPrice[] = [
      {
        price: Math.round(12000 + Math.random() * 3000),
        airline: "Air India",
        departure: "10:00",
        arrival: "13:30",
        duration: "3h 30m",
        stops: 0
      },
      {
        price: Math.round(11000 + Math.random() * 2000),
        airline: "IndiGo",
        departure: "07:15",
        arrival: "11:00",
        duration: "3h 45m",
        stops: 1
      },
      {
        price: Math.round(13000 + Math.random() * 4000),
        airline: "Vistara",
        departure: "14:30",
        arrival: "18:00",
        duration: "3h 30m",
        stops: 0
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Adjust prices based on cabin class
    const multiplier = cabinClass === 'business' ? 3 : cabinClass === 'firstClass' ? 5 : 1;
    return mockPrices.map(flight => ({
      ...flight,
      price: flight.price * multiplier
    }));
  } catch (error) {
    console.error('Error fetching flight prices:', error);
    throw error;
  }
};