import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function RossIslandPage() {
  const destination = destinations.find(d => d.slug === 'ross-island');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


