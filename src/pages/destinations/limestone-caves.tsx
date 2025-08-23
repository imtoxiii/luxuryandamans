import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function LimestoneCavesPage() {
  const destination = destinations.find(d => d.slug === 'limestone-caves');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


