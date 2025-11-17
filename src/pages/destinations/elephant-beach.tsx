import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function ElephantBeachPage() {
  const destination = destinations.find(d => d.slug === 'elephant-beach');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


