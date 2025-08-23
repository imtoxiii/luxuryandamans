import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function NorthBayIslandPage() {
  const destination = destinations.find(d => d.slug === 'north-bay-island');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


