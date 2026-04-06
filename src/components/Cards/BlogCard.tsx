import React from 'react';
import { CalendarDays, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  path: string;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const BlogCard = ({ image, title, description, date, path }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] flex flex-col h-full group">
      
      <div className="relative h-[230px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
        />
      </div>


      <div className="p-6 md:p-8 flex flex-col flex-grow gap-4">
        <h3 className={`${poppins.className} text-[#1D164D] text-[20px] font-semibold leading-tight group-hover:text-[#6344F5] transition-colors duration-300`}>
          {title}
        </h3>
        
        <p className={`${poppins.className} text-[#6F6C90] text-[14px] md:text-[16px] leading-relaxed md:w-[90%] line-clamp-3`}>
          {description}
        </p>

        <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center gap-2 text-[#6F6C90] text-[13px]  uppercase tracking-wider">
            <CalendarDays size={16}  />
            {date}
          </div>
          
          <Link 
            href={path} 
            className={`${poppins.className} flex items-center gap-2 text-[#6344F5] font-semibold text-[14px] group/link`}
          >
            Davamını oxu 
            <MoveRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;