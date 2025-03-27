
import React from 'react';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import BottomButton from '../components/BottomButton';
import { LockIcon } from '../components/icons';

interface LoanSummaryPageProps {
  onNext: () => void;
  onBack: () => void;
}

const LoanSummaryPage: React.FC<LoanSummaryPageProps> = ({ onNext, onBack }) => {
  return (
    <div className="h-full flex flex-col animate-fade-in">
      <StatusBar />
      <Header title="লোন" onBack={onBack} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-4 border-b text-gray-500">
          <p>যার জন্য</p>
        </div>
        
        <div className="flex items-center p-4 border-b">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
            <img 
              src="/lovable-uploads/098191e1-117b-467c-ba2c-c89a084b02b8.png" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium">MR ARMAN</h2>
            <p className="text-gray-500">01614946747</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 border-b">
          <div className="p-4 border-r">
            <p className="text-gray-500 text-sm mb-1">লোন নিয়েছেন</p>
            <p className="font-semibold">৳30,000.00</p>
          </div>
          <div className="p-4 border-r">
            <p className="text-gray-500 text-sm mb-1">ইন্টারেস্ট</p>
            <p className="font-semibold">+ ৳461.18</p>
          </div>
          <div className="p-4">
            <p className="text-gray-500 text-sm mb-1">মোট পরিশোধযোগ্য</p>
            <p className="font-semibold">৳30,461.18</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 border-b">
          <div className="p-4 border-r">
            <p className="text-gray-500 text-sm mb-1">প্রাপ্ত অ্যামাউন্ট</p>
            <p className="font-semibold">৳29,827.50</p>
          </div>
          <div className="p-4">
            <p className="text-gray-500 text-sm mb-1">ব্যাংকের প্রসেসিং ফি</p>
            <p className="font-semibold">৳172.50</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-6 border-b">
          <LockIcon className="w-8 h-8 text-magenta mr-2" />
          <span className="text-gray-500">পিন নাম্বার দিন</span>
        </div>
      </div>
      
      <BottomButton label="পিন কনফার্ম করুন" onClick={onNext} />
    </div>
  );
};

export default LoanSummaryPage;
