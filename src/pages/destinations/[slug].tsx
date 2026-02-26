import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { destinations } from '../../data/destinations';
import DestinationDetailEnhanced from './DestinationDetailEnhanced';
import SEO from '../../components/SEO';

const DestinationPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.slug === slug);

  // Redirect invalid destination slugs to /destinations to avoid Soft 404s in Google
  useEffect(() => {
    if (!destination) {
      navigate('/destinations', { replace: true });
    }
  }, [destination, navigate]);

  if (!destination) {
    return (
      <>
        <SEO
          title="Redirecting to Destinations"
          description=""
          pathname={`/destinations/${slug}`}
          noindex={true}
        />
        <div className="min-h-screen bg-pearl flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-night mb-4">Redirecting to Destinations...</h1>
          </div>
        </div>
      </>
    );
  }

  return <DestinationDetailEnhanced destination={destination} />;
};

export default DestinationPage;