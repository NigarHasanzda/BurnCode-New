import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

interface HeroComponentProps {
  breadcrumbParent: string;
  breadcrumbCurrent: string;
  titleNormal: string;
  titleColored: string;
  description: string;
}

const HeroComponent = ({
  breadcrumbParent,
  breadcrumbCurrent,
  titleNormal,
  titleColored,
  description
}: HeroComponentProps) => {
  return (
    <section className={`${poppins.className} py-16 md:py-24  bg-[#F8F9FB] flex flex-col items-center text-center  px-4`}>
      
      <div className="inline-flex items-center bg-white gap-2 px-6 py-2 border border-[#F1F1F1] rounded-full mb-10 shadow-sm">
        <Link href="/" className="text-[#596063] text-[14px] md:text-[16px] hover:text-[#6344F5] transition-colors">
          {breadcrumbParent}
        </Link>
        <span className="text-[#D1D1D1]">/</span>
        <span className="text-[#170F49] font-medium text-[14px] md:text-[16px]">
          {breadcrumbCurrent}
        </span>
      </div>

      {/* Main Title - Böyük Başlıq */}
      <h1 className={`text-[#1D164D] text-[40px] md:text-[68px] font-semibold leading-[78px] tracking-tight mb-6 ${poppins.className}`}>
        {titleNormal} <span className="text-[#7C5CFC]">{titleColored}</span>
      </h1>

      {/* Description - Alt mətn */}
      <p className="max-w-[560px] text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed opacity-90">
        {description}
      </p>

    </section>
  );
};

export default HeroComponent;