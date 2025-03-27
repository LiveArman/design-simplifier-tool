
import React from 'react';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import BottomButton from '../components/BottomButton';

interface LoanAmountPageProps {
  onNext: () => void;
  onBack: () => void;
}

const LoanAmountPage: React.FC<LoanAmountPageProps> = ({ onNext, onBack }) => {
  return (
    <div className="h-full flex flex-col animate-fade-in">
      <StatusBar />
      <Header title="লোন" onBack={onBack} />
      
      <div className="flex-1 overflow-auto pb-14">
        <div className="p-4 border-b">
          <p className="text-gray-500">লোনের স্কিম বেছে নিন</p>
        </div>
        
        <div className="p-4 border-b">
          <p className="text-gray-500 mb-2">সময়কাল</p>
          <div className="flex">
            <button className="bg-magenta text-white px-6 py-2 rounded-full text-sm font-medium">
              ৩ মাস
            </button>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <p className="text-gray-500 mb-4">পরিমাণ</p>
          
          <div className="text-center">
            <h2 className="text-6xl font-semibold text-magenta mb-6">৳30000</h2>
            
            <div className="mb-4">
              <p className="text-gray-500 text-sm">সর্বনিম্ন লোনের পরিমাণ ৳500</p>
              <p className="text-gray-500 text-sm">লিমিট ৳30,000</p>
            </div>
          </div>
        </div>
      </div>
      
      <BottomButton label="এগিয়ে যান" onClick={onNext} />
    </div>
  );
};

export default LoanAmountPage;
