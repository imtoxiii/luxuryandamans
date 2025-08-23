import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function RadhanagarBeachPage() {
  const destination = destinations.find(d => d.slug === 'radhanagar-beach');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


