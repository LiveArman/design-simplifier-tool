
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-2 py-1 bg-darkMagenta text-white text-xs">
      <div>21:48</div>
      <div className="flex items-center space-x-2">
        <div className="flex h-4 items-end">
          <div className="signal-bar h-1"></div>
          <div className="signal-bar h-2"></div>
          <div className="signal-bar h-3"></div>
          <div className="signal-bar h-4"></div>
        </div>
        <div className="flex h-4 items-end ml-1">
          <div className="signal-bar h-1"></div>
          <div className="signal-bar h-2"></div>
          <div className="signal-bar h-3"></div>
          <div className="signal-bar h-4"></div>
        </div>
        <div className="ml-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 17.4 13.5 22 12 22C10.5 22 3 17.4 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2Z" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="battery-indicator ml-1">
          <div className="battery-level"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
