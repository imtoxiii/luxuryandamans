import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function BharatpurBeachPage() {
  const destination = destinations.find(d => d.slug === 'bharatpur-beach');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


