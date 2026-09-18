import { useParams } from 'react-router-dom';
import { destinations } from '../../data/destinations';
import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import NotFound from '../NotFound';

const DestinationPage = () => {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return <NotFound />;
  }

  return <DestinationDetailEnhanced destination={destination} />;
};

export default DestinationPage;