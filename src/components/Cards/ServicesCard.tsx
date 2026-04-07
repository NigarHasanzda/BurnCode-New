import { Poppins } from 'next/font/google';
import React from 'react';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[]; // Texnologiyalar üçün yeni prop
  path?: string;
}

const ServiceCard = ({ title, description, icon, features, technologies, path }: ServiceCardProps) => {
  return (
    <div className={`${poppins.className} bg-white p-10 rounded-[32px] border border-[#F1F1F1] shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col gap-6 group`}>
      
      <div className="w-[50px] h-[50px] bg-[#EAE8FF] rounded-[14px] flex items-center justify-center text-[#6344F5] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[#1D164D] text-[20px] font-semibold leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-[#6F6C90] text-[16px] leading-[1.6] font-regular opacity-90">
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-[#596063] text-[16px] font-regular opacity-80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#596063]"></span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Texnologiya etiketləri (Badges) */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech, idx) => (
          <span 
            key={idx} 
            className="px-4 py-2 bg-[#F3F4F6] text-[#6F6C90] text-[14px] rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {path && (
        <Link 
          href={path} 
          className="mt-2 flex items-center gap-2 text-[#6344F5] font-medium text-[16px] hover:underline group/link"
        >
          Ətraflı bax
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      )}
    </div>
  )
}

export default ServiceCard;