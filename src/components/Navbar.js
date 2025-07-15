import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

// Placeholder for logo import
// import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Youth', path: '/youth' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Logo size="default" icon={true} to="/" />
        {/* Logo and Church Name */}
        <div className="flex items-center space-x-3 ml-4">
          <span className="font-header text-xl md:text-2xl font-extrabold text-primary tracking-wide">
            SACRED ORDER OF THE <span className="text-gold">SILENT BROTHERHOOD</span>
          </span>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-body text-lg hover:text-gold transition-colors duration-200 ${location.pathname === link.path ? 'text-gold font-semibold' : 'text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 font-body text-lg hover:text-gold transition-colors duration-200 ${location.pathname === link.path ? 'text-gold font-semibold' : 'text-primary'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 