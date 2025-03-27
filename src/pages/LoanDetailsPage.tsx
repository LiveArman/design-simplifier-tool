
import React from 'react';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import BottomButton from '../components/BottomButton';
import { InfoIcon, CheckListIcon, WalletIcon, ClockIcon } from '../components/icons';

interface LoanDetailsPageProps {
  onNext: () => void;
  onBack: () => void;
}

const LoanDetailsPage: React.FC<LoanDetailsPageProps> = ({ onNext, onBack }) => {
  return (
    <div className="h-full flex flex-col animate-fade-in">
      <StatusBar />
      <Header title="লোন" onBack={onBack} />
      
      <div className="flex-1 overflow-auto pb-14">
        <div className="flex items-center p-4 border-b">
          <div className="mr-4">
            <p className="text-gray-500">লোন দিচ্ছে</p>
          </div>
          <div className="flex items-center ml-auto">
            <img 
              src="/lovable-uploads/098191e1-117b-467c-ba2c-c89a084b02b8.png" 
              alt="City Bank" 
              className="h-6 mr-2"
            />
            <span>City Bank</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 border-b">
          <div className="p-4 border-r">
            <p className="text-gray-500">পরিশোধের তারিখ</p>
          </div>
          <div className="p-4">
            <p className="text-gray-500">প্রতিমাসের 27 তারিখ</p>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <p className="text-gray-500 mb-4">অ্যামাউন্ট বিস্তারিত</p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">লোন নিয়েছেন</span>
            <span className="font-medium">৳30,000.00</span>
          </p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">ব্যাংকের প্রসেসিং ফি</span>
            <span className="font-medium">৳172.50</span>
          </p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">প্রাপ্ত অ্যামাউন্ট</span>
            <span className="font-medium">৳29,827.50</span>
          </p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">কিস্তি পরিশোধের প্ল্যান</span>
          </p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">মোট পরিশোধযোগ্য অ্যামাউন্ট</span>
            <span className="font-medium">৳30,461.18</span>
          </p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">মোট ইন্টারেস্ট</span>
            <span className="font-medium">৳461.18</span>
          </p>
          
          <p className="flex justify-between py-2">
            <span className="text-gray-500">ইন্টারেস্ট রেট</span>
            <span className="font-medium">0.75% (per month)</span>
          </p>
        </div>
        
        <div className="p-4 border-b">
          <div className="flex items-center py-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <p className="font-medium">Apr 27</p>
          </div>
          <div className="pl-4 ml-0.5 border-l-2 border-gray-300 py-2">
            <p className="text-gray-500">2025</p>
            <p className="font-medium">৳10,153.73</p>
            <p className="text-gray-500">আসল ৳9,921.23 + ইন্টারেস্ট ৳232.50</p>
          </div>
          
          <div className="flex items-center py-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <p className="font-medium">May 27</p>
          </div>
          <div className="pl-4 ml-0.5 border-l-2 border-gray-300 py-2">
            <p className="text-gray-500">2025</p>
            <p className="font-medium">৳10,153.73</p>
            <p className="text-gray-500">আসল ৳10,003.14 + ইন্টারেস্ট ৳150.59</p>
          </div>
          
          <div className="flex items-center py-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <p className="font-medium">Jun 27</p>
          </div>
          <div className="pl-4 ml-0.5 py-2">
            <p className="text-gray-500">2025</p>
            <p className="font-medium">৳10,153.72</p>
            <p className="text-gray-500">আসল ৳10,075.63 + ইন্টারেস্ট ৳78.09</p>
          </div>
        </div>
      </div>
      
      <BottomButton label="এগিয়ে যান" onClick={onNext} />
    </div>
  );
};

export default LoanDetailsPage;
