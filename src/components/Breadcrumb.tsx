import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            to="/"
            className="text-gray-500 hover:text-turquoise transition-colors flex items-center"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
            {index === items.length - 1 ? (
              <span className="text-turquoise font-medium">{item.name}</span>
            ) : (
              <Link 
                to={item.path}
                className="text-gray-500 hover:text-turquoise transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;