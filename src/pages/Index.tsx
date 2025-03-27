
import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import LoanSummaryPage from './LoanSummaryPage';
import LoanDetailsPage from './LoanDetailsPage';
import LoanTermsPage from './LoanTermsPage';
import LoanAmountPage from './LoanAmountPage';
import LoanWelcomePage from './LoanWelcomePage';
import { ArrowRightIcon, ArrowLeftIcon } from '../components/icons';
import NumPad from '../components/NumPad';
import { toast } from '../components/ui/use-toast';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pinCode, setPinCode] = useState('');
  const [showNumPad, setShowNumPad] = useState(false);

  const handleBack = () => {
    if (showNumPad) {
      setShowNumPad(false);
      return;
    }
    
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage === 0 && !showNumPad) {
      setShowNumPad(true);
      return;
    }
    
    if (showNumPad) {
      if (pinCode.length === 4) {
        setShowNumPad(false);
        setCurrentPage(currentPage + 1);
        setPinCode('');
        
        toast({
          title: "PIN verified successfully",
          description: "Moving to next page",
        });
      } else {
        toast({
          title: "Invalid PIN",
          description: "Please enter a 4-digit PIN",
          variant: "destructive",
        });
      }
      return;
    }
    
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      // Restart the flow
      setCurrentPage(0);
      
      toast({
        title: "Loan application successful!",
        description: "Your loan has been processed",
      });
    }
  };

  const handleNumberPress = (num: string) => {
    if (pinCode.length < 4) {
      setPinCode(prev => prev + num);
    }
  };

  const handleBackspace = () => {
    setPinCode(prev => prev.slice(0, -1));
  };

  return (
    <div className="loan-app bg-white">
      {/* Main Page Container */}
      <div className="relative h-full">
        <PageTransition isActive={currentPage === 0 && !showNumPad}>
          <LoanSummaryPage onNext={handleNext} onBack={handleBack} />
        </PageTransition>
        
        <PageTransition isActive={currentPage === 1}>
          <LoanDetailsPage onNext={handleNext} onBack={handleBack} />
        </PageTransition>
        
        <PageTransition isActive={currentPage === 2}>
          <LoanTermsPage onNext={handleNext} onBack={handleBack} />
        </PageTransition>
        
        <PageTransition isActive={currentPage === 3}>
          <LoanAmountPage onNext={handleNext} onBack={handleBack} />
        </PageTransition>
        
        <PageTransition isActive={currentPage === 4}>
          <LoanWelcomePage onNext={handleNext} onBack={handleBack} />
        </PageTransition>
      </div>
      
      {/* PIN Numpad Overlay */}
      {showNumPad && (
        <div className="absolute inset-0 bg-white animate-slide-in flex flex-col">
          <div className="loan-header">
            <button 
              onClick={handleBack}
              className="mr-4 focus:outline-none"
              aria-label="Go back"
            >
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-lg font-medium flex-1 text-center">Enter PIN</h1>
            <div className="w-6"></div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="text-center mb-10">
              <p className="text-gray-500 mb-6">Please enter your 4-digit PIN</p>
              
              <div className="flex justify-center space-x-4 mb-6">
                {[0, 1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-5 h-5 border-2 rounded-full flex items-center justify-center"
                  >
                    {pinCode.length > i && (
                      <div className="w-3 h-3 bg-magenta rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <NumPad 
            onNumberPress={handleNumberPress} 
            onBackspace={handleBackspace}
            onDone={pinCode.length === 4 ? handleNext : undefined}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
