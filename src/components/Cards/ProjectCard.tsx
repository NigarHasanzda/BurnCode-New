import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CalendarDays, MoveRight, Monitor } from 'lucide-react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  path: string;
  category: string;
  technologies: string[];
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const ProjectCard = ({ image, title, description, date, path, category, technologies }: BlogCardProps) => {
  return (
    <div className={`${poppins.className} bg-white rounded-[17px] md:rounded-[19px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(23,15,73,0.08)] flex flex-col h-full group`}>
      
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-white/20">
          <Monitor size={14} className="text-[#6344F5]" />
          <span className={` ${poppins.className} text-[#170F49] text-[12px] md:text-[14px] font-regular`}>{category}</span>
        </div>
      </div>

      <div className="p-5 md:p-8 flex flex-col flex-grow">
        
        <div className="mb-6">
          <h3 className="text-[#170F49] text-[16px] md:text-[20px] font-semibold leading-[28px] mb-3 group-hover:text-[#6344F5] transition-colors duration-300  ">
            {title}
          </h3>
          <p className="text-[#596063] text-[16px] md:text-[16px] font-regular leading-[1.6] line-clamp-3 opacity-90">
            {description}
          </p>
        </div>
        <div className="mt-auto   flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex flex-wrap gap-2 max-w-full sm:max-w-[60%]">
            {technologies.slice(0, 2).map((tech, idx) => (
              <span 
                key={idx} 
                className="bg-[#EDEDF6] text-[#6F6C90] px-4 py-2 rounded-[23px] text-[10px] md:text-[14px] font-regular whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 2 && (
              <span className="text-[#6F6C90] text-[13px] self-center">+{technologies.length - 2}</span>
            )}
          </div>
          <Link
            href={path}
            className="inline-flex items-center  text-[#6344F5] font-semibold  text-[14px] group/link transition-all hover:opacity-80"
          >
            <span>Ətraflı</span>
            <div className="p-1.5  transition-all">
              <ArrowForwardIcon sx={{fontSize:18}} className="transition-transform group-hover/link:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;