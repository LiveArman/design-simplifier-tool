
import React from 'react';
import { ArrowLeftIcon } from './icons';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <div className="loan-header">
      {onBack && (
        <button 
          onClick={onBack}
          className="mr-4 focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
      )}
      <h1 className="text-lg font-medium flex-1 text-center">{title}</h1>
      <div className="w-6"></div> {/* Spacer for alignment */}
      <div className="absolute right-4">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Header;
