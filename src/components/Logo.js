import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'default', className = '', icon = false, to }) => {
  const sizeClasses = {
    small: 'text-lg',
    default: 'text-xl md:text-2xl',
    large: 'text-3xl md:text-4xl',
  };

  const logoContent = icon ? (
    <span className={`inline-flex items-center justify-center bg-gold rounded-full ${size === 'small' ? 'w-10 h-10' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12'} ${className}`}>
      <span className="font-header font-extrabold tracking-wider text-primary text-base md:text-lg">SOSB</span>
    </span>
  ) : (
    <div className={`font-header font-extrabold tracking-wider text-primary ${sizeClasses[size]} ${className}`}>
      SOSB
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="focus:outline-none">
        {logoContent}
      </Link>
    );
  }
  return logoContent;
};

export default Logo; 