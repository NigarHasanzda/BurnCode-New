import { Poppins } from 'next/font/google';
import React from 'react'

interface ServiceCardProps {
  title: string;
  description: string;
  // Icon olaraq istənilən SVG və ya Lucide icon keçə bilərsən
  icon?: React.ReactNode; 
}



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})
const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-[24px] border border-[#F1F1F1] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-5">
      {/* İkon Konteyneri */}
      <div className="w-[56px] h-[56px] bg-[#EAE8FF] rounded-[12px] flex items-center justify-center text-[#4A3AFF]">
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        )}
      </div>

      {/* Mətn Bölməsi */}
      <div className="flex flex-col gap-3">
        <h3 className={`${poppins.className} text-[#170F49] text-[20px] font-semibold leading-tight`}>
          {title}
        </h3>
        <p className={`${poppins.className} text-[#6F6C90] text-[16px] leading-[1.6] font-normal`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard