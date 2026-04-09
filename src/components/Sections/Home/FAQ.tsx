"use client"
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import FaqItem from '@/components/Cards/FaqItem';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const faqData = [
  {
    question: "Burncode nə edir?",
    answer: "Burncode bizneslər üçün veb saytlar, mobil tətbiqlər və xüsusi proqram həlləri hazırlayır. Məqsədimiz ideyanızı işlək, funksional və tam istifadəçi dostu məhsula çevirmək, həmçinin sizin biznesinizi rəqəmsal mühitdə gücləndirmək və istifadəçilər üçün unikal təcrübə yaratmaqdır."
  },
  {
    question: "Hansı xidmətləri təqdim edirsiniz?",
    answer: "Veb proqramlaşdırma, mobil tətbiqlərin yaradılması, QA avtomatlaşdırılması və data analitika xidmətləri təqdim edirik."
  },
  {
    question: "Layihə prosesi necə gedir?",
    answer: "Proses analizlə başlayır, strateji planlama, dizayn, texniki icra və test mərhələləri ilə şəffaf şəkildə davam edir."
  },
  {
    question: "Layihə nə qədər vaxt aparır?",
    answer: "Layihənin mürəkkəbliyindən asılı olaraq müddət dəyişir. Biz hər mərhələdə sizi vaxt barədə məlumatlandırırıq."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className={`${poppins.className} py-16 md:py-24 overflow-hidden`}>
      <div className="max-w-[1000px] mx-auto px-5 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Mobildə 28px, planşetdə 36px, desktopda 48px olaraq tənzimləndi */}
          <h2 className="text-[#1D164D] text-[26px] sm:text-[32px] md:text-[48px] font-bold leading-tight">
            Suallarınız var? <br  />
            <span className="text-[#6344F5] md:ml-2">Cavablar burada</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3 md:gap-4 mb-12 md:mb-24">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <FaqItem 
                question={item.question} 
                answer={item.answer}
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(index)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;