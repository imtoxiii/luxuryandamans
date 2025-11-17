import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function NorthBayIslandPage() {
  const destination = destinations.find(d => d.slug === 'north-bay-island');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


