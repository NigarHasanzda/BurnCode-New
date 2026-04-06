import React from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Manrope, Poppins } from 'next/font/google';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  isReversed?: boolean; // Şəkildəki kimi 2-ci kartda TRUE göndərəcəksən
}


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})



const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800'],
  variable: '--font-manrope',
});

const ProjectCard = ({ title, category, description, tags, image, isReversed }: ProjectCardProps) => {
  return (
   <div className={`flex flex-col ${isReversed ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]`}>
      <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 scale-105"
        />
      </div>

      <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-8">
        <div className=" space-y-4">
          <span className={`${poppins.className} inline-block bg-[#EAE8FF] text-[#6344F5] px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide`}>
            {category}
          </span>
          <h3 className={`${manrope.className} text-[#1D164D] text-[28px] md:text-[36px] font-extrabold leading-tight`}>
            {title}
          </h3>
        </div>

        <p className={`${poppins.className} text-[#596063]  w-full md:w-[70%] text-[13px] md:text-[16px] leading-relaxed opacity-90`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[#F3F4F6] text-[#596063] px-5 py-2 rounded-full text-[14px] font-medium border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href="#" 
          className={`${poppins.className} flex items-center gap-2 text-[#6344F5] font-medium text-[18px] group mt-4 transition-all`}
        >
          Ətraflı bax 
          <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;