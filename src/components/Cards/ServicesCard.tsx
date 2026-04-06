import { Poppins } from 'next/font/google';
import React from 'react'

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
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <div className={`${poppins.className} bg-white p-10 rounded-[32px] border border-[#F1F1F1] shadow-[0_10px_30px_rgba(0,0,0,0.02)]  transition-all duration-300 flex flex-col gap-6 group`}>
      
      <div className="w-[50px] h-[50px] bg-[#EAE8FF] rounded-[14px] flex items-center justify-center text-[#6344F5] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className={`${poppins.className} text-[#1D164D] text-[20px] font-semibold leading-tight tracking-tight`}>
          {title}
        </h3>
        <p className="text-[#6F6C90] text-[15px] leading-[1.6] font-normal opacity-90">
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 mt-auto ">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-[#596063] text-[15px] font-[400] opacity-80">
            <span className="w-2 h-2 rounded-full bg-[#4f27ff]"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard;