import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function MudVolcanoPage() {
  const destination = destinations.find(d => d.slug === 'mud-volcano');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


