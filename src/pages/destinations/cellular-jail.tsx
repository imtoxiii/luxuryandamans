import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function CellularJailPage() {
  const destination = destinations.find(d => d.slug === 'cellular-jail');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


