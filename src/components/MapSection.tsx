import React from 'react';
import InteractiveMap from './InteractiveMap';

const MapSection = () => {
  const locations = [
    {
      name: "Havelock Island",
      coordinates: [11.9673, 92.9916],
      description: "Home to the famous Radhanagar Beach",
      type: "beach"
    },
    {
      name: "Neil Island",
      coordinates: [11.8311, 93.0375],
      description: "Perfect for nature lovers and peace seekers",
      type: "beach"
    },
    {
      name: "Port Blair",
      coordinates: [11.6234, 92.7265],
      description: "The gateway to the Andaman Islands",
      type: "attraction"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-night mb-8 text-center">
            Explore Our Destinations
          </h2>
          <InteractiveMap
            locations={locations}
            center={[11.7401, 92.6586]}
            zoom={9}
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;