import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-block bg-gold rounded-full p-6">
            <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 19l3-3m0 0l-3-3m3 3H9"/>
            </svg>
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="font-header text-6xl font-extrabold text-primary mb-4 tracking-wide">404</h1>
        <h2 className="font-header text-2xl font-bold text-charcoal mb-4 tracking-wide">Page Not Found</h2>
        <p className="font-body text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Navigation */}
        <div className="space-y-4">
          <Link 
            to="/" 
            className="font-header bg-gold text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-200 text-lg tracking-wide inline-block transform hover:scale-105"
          >
            Go Home
          </Link>
          <div className="text-sm text-gray-500">
            Or try one of these pages:
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/about" className="text-primary hover:text-gold transition-colors">About</Link>
            <Link to="/events" className="text-primary hover:text-gold transition-colors">Events</Link>
            <Link to="/sermons" className="text-primary hover:text-gold transition-colors">Sermons</Link>
            <Link to="/contact" className="text-primary hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 