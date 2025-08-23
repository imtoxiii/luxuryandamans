import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function CinqueIslandPage() {
  const destination = destinations.find(d => d.slug === 'cinque-island');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


