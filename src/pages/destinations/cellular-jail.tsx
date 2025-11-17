import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function CellularJailPage() {
  const destination = destinations.find(d => d.slug === 'cellular-jail');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


