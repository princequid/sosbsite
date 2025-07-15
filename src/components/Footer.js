import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
// import logo from '../assets/logo.png';

const socialLinks = [
  { name: 'Facebook', url: '#', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.006 3.676 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.128 22 17.006 22 12z"/></svg>
  ) },
  { name: 'YouTube', url: '#', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.752 2.752 0 0 0-1.938-1.948C18.077 6 12 6 12 6s-6.077 0-7.862.053A2.752 2.752 0 0 0 2.2 8.001 28.634 28.634 0 0 0 2 12a28.634 28.634 0 0 0 .2 3.999 2.752 2.752 0 0 0 1.938 1.948C5.923 18 12 18 12 18s6.077 0 7.862-.053a2.752 2.752 0 0 0 1.938-1.948A28.634 28.634 0 0 0 22 12a28.634 28.634 0 0 0-.2-3.999zM10 15V9l6 3-6 3z"/></svg>
  ) },
  { name: 'Instagram', url: '#', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25zm5.5-.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
  ) },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Church Name */}
        <div className="flex flex-col items-start space-y-2">
          <Logo size="default" className="!text-gold" />
          {/* Removed the church name */}
          <span className="text-gold font-semibold">"In Silence, We Find Strength"</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-header text-gold mb-2">Quick Links</h4>
          <ul>
            {quickLinks.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gold transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div>
          <h4 className="font-header text-gold mb-2">Newsletter</h4>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-primary focus:outline-none" />
            <button type="submit" className="bg-gold text-primary font-bold px-3 py-2 rounded hover:bg-yellow-400 transition-colors duration-200">Subscribe</button>
          </form>
        </div>
        {/* Social Links */}
        <div>
          <h4 className="font-header text-gold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-300 mt-8">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 