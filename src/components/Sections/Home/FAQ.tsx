"use client"
import React, { useState } from 'react'; // useState əlavə edildi
import { Poppins } from 'next/font/google';
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
    <section className={`${poppins.className} py-24 bg-white`}>
      <div className="max-w-[1530px] mx-auto px-6">
        
        <div className={`text-center mb-16 ${poppins.className}`}>
          <h2 className="text-[#1D164D] text-[32px] md:text-[48px] font-bold">
            Suallarınız var? <br />
            <span className="text-[#6344F5]">Cavablar burada</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 mb-24">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer}
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(index)} 
            />
          ))}
        </div>

        <div className="relative w-full rounded-[40px] p-10 md:p-20 text-center overflow-hidden group">
          <img 
            src="/faqbg.png" 
            alt="Faq Background"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
          />
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#8E86FF,_transparent_60%)]"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className={`text-white text-[30px] md:text-[48px] font-bold leading-tight ${poppins.className}`}>
              Hələ də sualınız var?
            </h3>
            <p className={`text-[#f8f8ffb2] text-[16px] md:text-[18px] max-w-[650px] leading-relaxed opacity-90 ${poppins.className}`}>
              Əgər axtardığınızı tapa bilmədinizsə, dəstək komandamız 24/7 sizə kömək etməyə hazırdır. Bizimlə əlaqə saxlamaqdan çəkinməyin!
            </p>
            
            <div className="mt-6">
              <button className={`!bg-white/10 border-none rounded-full text-[18px] font-medium text-white px-12 py-5 transition-all hover:bg-white/20 backdrop-blur-md ${poppins.className}`}>
                Bizimlə Əlaqə
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;