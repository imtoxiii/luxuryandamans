import React from 'react';
import { Cloud, Sun, Droplets } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-turquoise mb-4">Current Weather</h3>
      <div className="flex items-center space-x-4">
        <Sun className="w-12 h-12 text-coral" />
        <div>
          <p className="text-2xl font-bold text-turquoise">28°C</p>
          <p className="text-seafoam">Partly Cloudy</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <Cloud className="w-6 h-6 mx-auto text-seafoam mb-1" />
          <p className="text-sm text-turquoise">82%</p>
          <p className="text-xs text-gray-500">Humidity</p>
        </div>
        <div className="text-center">
          <Droplets className="w-6 h-6 mx-auto text-seafoam mb-1" />
          <p className="text-sm text-turquoise">20%</p>
          <p className="text-xs text-gray-500">Rain</p>
        </div>
        <div className="text-center">
          <Sun className="w-6 h-6 mx-auto text-seafoam mb-1" />
          <p className="text-sm text-turquoise">UV 7</p>
          <p className="text-xs text-gray-500">UV Index</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;