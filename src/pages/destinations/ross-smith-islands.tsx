import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function RossSmithIslandsPage() {
  const destination = destinations.find(d => d.slug === 'ross-smith-islands');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


