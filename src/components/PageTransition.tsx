
import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isActive: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, isActive }) => {
  return (
    <div 
      className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ${
        isActive 
          ? 'transform-none opacity-100 z-10' 
          : 'transform translate-x-full opacity-0 -z-10'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
