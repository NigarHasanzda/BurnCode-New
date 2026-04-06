import React from 'react';
import { CalendarDays, MoveRight } from 'lucide-react';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  path: string;
}

const BlogCard = ({ image, title, description, date, path }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] flex flex-col h-full group">
      
      {/* Şəkil Hissəsi */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Mətn Bölməsi */}
      <div className="p-6 md:p-8 flex flex-col flex-grow gap-4">
        <h3 className="text-[#1D164D] text-[20px] font-bold leading-tight group-hover:text-[#6344F5] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-[#6F6C90] text-[14px] md:text-[15px] leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Alt Hissə: Tarix və Link */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center gap-2 text-[#6F6C90] text-[13px] font-medium uppercase tracking-wider">
            <CalendarDays size={16} className="text-[#6344F5]" />
            {date}
          </div>
          
          <Link 
            href={path} 
            className="flex items-center gap-2 text-[#6344F5] font-bold text-[14px] group/link"
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