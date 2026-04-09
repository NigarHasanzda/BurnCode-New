"use client"
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className={`transition-all duration-300 rounded-[16px] md:rounded-[20px] overflow-hidden ${
      isOpen ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]' : 'bg-[#F9F9FF]'
    }`}>
      <button 
        onClick={onClick}
        className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left gap-4"
      >
        <span className={`text-[#1D164D] text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-snug ${poppins.className}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 shadow-sm ${
          isOpen ? 'rotate-180' : ''
        }`}>
          <ChevronDown size={18} className="text-[#6344F5] md:w-[20px] md:h-[20px]" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={`px-5 pb-5 md:px-8 md:pb-8 pt-0 text-[#596063] text-[14px] md:text-[15px] leading-relaxed ${poppins.className}`}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;