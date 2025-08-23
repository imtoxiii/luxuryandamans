import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function SaddlePeakPage() {
  const destination = destinations.find(d => d.slug === 'saddle-peak');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


