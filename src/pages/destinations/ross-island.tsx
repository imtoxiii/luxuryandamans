import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function RossIslandPage() {
  const destination = destinations.find(d => d.slug === 'ross-island');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


