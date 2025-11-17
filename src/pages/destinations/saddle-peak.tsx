import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import { destinations } from '../../data/destinations';

export default function SaddlePeakPage() {
  const destination = destinations.find(d => d.slug === 'saddle-peak');
  if (!destination) return null;
  return <DestinationDetailEnhanced destination={destination} />;
}


