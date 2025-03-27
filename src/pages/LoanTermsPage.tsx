
import React from 'react';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import BottomButton from '../components/BottomButton';
import { InfoIcon, CheckListIcon, WalletIcon, ClockIcon } from '../components/icons';

interface LoanTermsPageProps {
  onNext: () => void;
  onBack: () => void;
}

const LoanTermsPage: React.FC<LoanTermsPageProps> = ({ onNext, onBack }) => {
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
        
        <div className="p-4 border-b">
          <p className="text-right text-magenta">বাতিল</p>
        </div>
        
        <div className="p-4 border-b">
          <p className="font-medium mb-4">বিশেষ দৃষ্টি আকর্ষণ</p>
          
          <div className="flex mb-4">
            <InfoIcon className="w-8 h-8 text-magenta flex-shrink-0 mr-3" />
            <p className="text-gray-600 text-sm">
              লোন পরিশোধে ব্যর্থ হলে সিটি ব্যাংক প্রচলিত আইন অনুযায়ী প্রয়োজনীয় ব্যবস্থা গ্রহণ করবে। অনাকাঙ্ক্ষিত পরিস্থিতি এড়াতে লোন নিয়ে দায়িত্বের সাথে সময়মত পরিশোধ করুন।
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <p className="font-medium mb-4">লোন শর্তাবলী</p>
          
          <div className="flex mb-4">
            <CheckListIcon className="w-8 h-8 text-magenta flex-shrink-0 mr-3" />
            <p className="text-gray-600 text-sm">
              সিটি ব্যাংক প্রদত্ত লোন সার্ভিসের <span className="text-magenta">শর্তাবলী</span>-তে আমার সম্মতি আছে।
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <p className="font-medium mb-4">অটোমেটিক পরিশোধ</p>
          
          <div className="flex mb-4">
            <WalletIcon className="w-8 h-8 text-magenta flex-shrink-0 mr-3" />
            <p className="text-gray-600 text-sm">
              লোন পরিশোধের জন্য আপনার বিকাশ একাউন্ট থেকে পরিশোধের নির্দিষ্ট তারিখে অটোমেটিক টাকা কেটে নেয়া হবে। তবে, পরিশোধের তারিখের আগেও লোন পরিশোধ করতে পারবেন কোনো অতিরিক্ত ফি ছাড়াই।
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <p className="font-medium mb-4">দেরিতে পরিশোধে জরিমানা</p>
          
          <div className="flex mb-4">
            <ClockIcon className="w-8 h-8 text-magenta flex-shrink-0 mr-3" />
            <p className="text-gray-600 text-sm">
              কোনো কারণে লোন পরিশোধে দেরি বা ব্যর্থ হলে, অতিরিক্ত 1.5% p.a. হারে জরিমানা প্রযোজ্য হবে। জরিমানা এড়াতে, নির্ধারিত পরিশোধের তারিখে আপনার বিকাশ একাউন্টে পর্যাপ্ত ব্যালেন্স রাখুন।
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b">
          <p className="font-medium mb-4">একাউন্ট বছরের আগে সম্পূর্ণ লোন পরিশোধ</p>
          
          <div className="flex mb-4">
            <InfoIcon className="w-8 h-8 text-magenta flex-shrink-0 mr-3" />
            <p className="text-gray-600 text-sm">
              আপনি যদি বিকাশ একাউন্ট বন্ধ করতে চান, অথবা কোনো কারণে সম্পূর্ণ লোন পরিশোধ করতে চান, আপনি যেকোনো সময় তা করতে পারবেন। এক্ষেত্রে কোনো অতিরিক্ত চার্জ নেই।
            </p>
          </div>
        </div>
      </div>
      
      <BottomButton label="সম্মতি দিন" onClick={onNext} />
    </div>
  );
};

export default LoanTermsPage;
