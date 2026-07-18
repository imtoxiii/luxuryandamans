import { Link } from 'react-router-dom';
import { Compass, MapPin, Package, BookOpen, ArrowRight, Home } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Page Not Found | Luxury Andamans"
        description="The page you’re looking for doesn’t exist. Explore Andaman packages, destinations, and travel guides on Luxury Andamans."
        pathname="/404"
        noindex={true}
      />
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 mb-8">
            <Compass className="w-4 h-4" />
            <span className="text-sm font-bold tracking-widest uppercase">404</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display tracking-tight">
            This island isn’t on the map
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            The page you’re looking for doesn’t exist or may have moved.
            Head back home or explore our most popular sections below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <Link
              to="/packages"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <Package className="w-6 h-6 text-blue-700 mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                Packages
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Browse honeymoon, family, and luxury Andaman tour packages.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-800">
                View packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/destinations"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <MapPin className="w-6 h-6 text-blue-700 mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                Destinations
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Explore Havelock, Neil, Port Blair, Baratang, and more.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-800">
                View destinations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/blog"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <BookOpen className="w-6 h-6 text-blue-700 mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                Blog
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Travel tips, itineraries, and Andaman planning guides.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-800">
                Read the blog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
