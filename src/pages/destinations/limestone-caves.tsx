import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function LimestoneCavesPage() {
  const destination = destinations.find(d => d.slug === 'limestone-caves');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


