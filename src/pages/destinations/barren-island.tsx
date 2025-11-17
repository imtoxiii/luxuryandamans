import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function BarrenIslandPage() {
  const destination = destinations.find(d => d.slug === 'barren-island');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


