import { useParams, Link } from 'react-router-dom';
import { destinations } from '../../data/destinations';
import DestinationDetailEnhanced from './DestinationDetailEnhanced';

const DestinationPage = () => {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-night mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-azure hover:underline text-lg">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return <DestinationDetailEnhanced destination={destination} />;
};

export default DestinationPage;