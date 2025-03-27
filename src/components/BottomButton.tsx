
import React from 'react';
import { ArrowRightIcon } from './icons';

interface BottomButtonProps {
  label: string;
  onClick: () => void;
}

const BottomButton: React.FC<BottomButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-0 left-0 right-0 h-14 bg-magenta text-white flex items-center justify-between px-5 transition-transform hover:bg-lightMagenta active:bg-darkMagenta"
    >
      <span className="text-lg font-medium">{label}</span>
      <ArrowRightIcon className="w-6 h-6" />
    </button>
  );
};

export default BottomButton;
