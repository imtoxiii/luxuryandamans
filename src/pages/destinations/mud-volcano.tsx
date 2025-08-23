import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function MudVolcanoPage() {
  const destination = destinations.find(d => d.slug === 'mud-volcano');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


