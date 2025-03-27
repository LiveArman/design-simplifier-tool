
import React from 'react';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import BottomButton from '../components/BottomButton';

interface LoanWelcomePageProps {
  onNext: () => void;
  onBack: () => void;
}

const LoanWelcomePage: React.FC<LoanWelcomePageProps> = ({ onNext, onBack }) => {
  return (
    <div className="h-full flex flex-col animate-fade-in">
      <StatusBar />
      <Header title="লোন" onBack={onBack} />
      
      <div className="flex-1 overflow-auto pb-14">
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="p-6 flex justify-center">
              <div className="max-w-xs w-full">
                <img 
                  src="/lovable-uploads/098191e1-117b-467c-ba2c-c89a084b02b8.png" 
                  alt="Loan illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="flex">
              <div className="w-1/2 p-4 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-magenta">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M7 15h0"></path>
                    <path d="M2 9h20"></path>
                  </svg>
                </div>
                <span className="text-gray-600">কোনো লোন নেই</span>
              </div>
              
              <div className="w-1/2 p-4">
                <button className="w-full py-2 px-4 border-2 border-magenta text-magenta rounded-full text-center">
                  লোনের বিবরণী
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-magenta">
                  <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                  <path d="M12 12h.01"></path>
                  <path d="M17 12h.01"></path>
                  <path d="M7 12h.01"></path>
                </svg>
              </div>
              <span className="font-medium">এখন কিনুন পরে পেমেন্ট</span>
            </div>
            
            <p className="text-gray-600 text-sm">৭ দিনে 0% ইন্টারেস্ট অথবা ৩/৬ মাসে ইন্টারেস্টসহ</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <p className="text-gray-500 mb-2">MR, আপনার বর্তমান লোন লিমিট</p>
              <h2 className="text-4xl font-semibold">৳30,000</h2>
            </div>
            
            <button className="w-full py-3 bg-magenta text-white rounded-md text-center font-medium">
              লোন নিন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanWelcomePage;
