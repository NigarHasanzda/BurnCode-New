"use client";
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
    <section className={`${poppins.className} py-18 md:py-28  flex flex-col items-center text-center px-4`}>
      
      <div className="inline-flex items-center bg-[#ffffff4f] gap-2 px-4 py-1.5 md:px-6 md:py-2 border border-[#00000017] rounded-full mb-6 md:mb-10 shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[#596063] text-[13px] md:text-[16px] hover:text-[#6344F5] transition-colors">
          {breadcrumbParent}
        </Link>
        <span className="text-[#D1D1D1]">/</span>
        <span className="text-[#170F49] font-medium text-[13px] md:text-[16px]">
          {breadcrumbCurrent}
        </span>
      </div>

      <h1 className="text-[#1D164D] text-[32px] sm:text-[40px] md:text-[68px] font-semibold leading-[1.2] md:leading-[78px] tracking-tight mb-4 md:mb-6 max-w-[900px]">
        {titleNormal} <span className="text-[#7C5CFC]">{titleColored}</span>
      </h1>

      {/* Description - Mobildə max-width və font tənzimləndi */}
      <p className="max-w-[320px] sm:max-w-[450px] md:max-w-[560px] text-[#6B7280] text-[15px] md:text-[18px] leading-relaxed opacity-90">
        {description}
      </p>

    </section>
  );
};

export default HeroComponent;