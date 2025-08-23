import DestinationTemplate from './DestinationTemplate';
import { destinations } from '../../data/destinations';

export default function NaturalBridgePage() {
  const destination = destinations.find(d => d.slug === 'natural-bridge');
  if (!destination) return null;
  return <DestinationTemplate destination={destination} />;
}


