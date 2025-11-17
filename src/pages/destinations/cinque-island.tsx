import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function CinqueIslandPage() {
  const destination = destinations.find(d => d.slug === 'cinque-island');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


