
import React from 'react';
import { BackspaceIcon } from './icons';

interface NumPadProps {
  onNumberPress: (num: string) => void;
  onBackspace: () => void;
  onDone?: () => void;
}

const NumPad: React.FC<NumPadProps> = ({ onNumberPress, onBackspace, onDone }) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'back'];
  
  const handleButtonClick = (value: string) => {
    if (value === 'clear') {
      // Clear functionality
    } else if (value === 'back') {
      onBackspace();
    } else {
      onNumberPress(value);
    }
  };

  return (
    <div className="bg-grayLight">
      <div className="grid grid-cols-3 gap-1 p-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className={`numpad-button h-16 flex items-center justify-center rounded-md bg-white text-gray-600 ${
              btn === 'clear' ? 'text-center' : ''
            }`}
          >
            {btn === 'back' ? (
              <BackspaceIcon className="w-6 h-6 text-gray-500" />
            ) : btn === 'clear' ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">{btn}</span>
            )}
          </button>
        ))}
      </div>
      {onDone && (
        <div className="p-2 bg-gray-200">
          <button
            onClick={onDone}
            className="w-full h-12 bg-magenta text-white rounded-md flex items-center justify-center"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NumPad;
