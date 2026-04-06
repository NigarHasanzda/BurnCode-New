import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Poppins } from 'next/font/google';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean; 
  onClick: () => void; 
}


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className={`transition-all duration-300 rounded-[20px] overflow-hidden ${
      isOpen ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]' : 'bg-[#F9F9FF]'
    }`}>
      <button 
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <span className={`text-[#1D164D] text-[20px] font-medium  ${poppins.className}`}>{question}</span>
        <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 shadow-sm ${
          isOpen ? 'rotate-180' : ''
        }`}>
          <ChevronDown size={20} className="text-[#6344F5]" />
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-8 pb-8 pt-0 text-[#596063] text-[15px] leading-relaxed ${poppins.className}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;