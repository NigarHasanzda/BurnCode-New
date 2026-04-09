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
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const BlogCard = ({ image, title, description, date, path }: BlogCardProps) => {
  return (
    <div className={`${poppins.className} bg-white rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col h-full group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]`}>
      
      {/* Şəkil Bölməsi */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Məzmun Bölməsi */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        
        {/* Başlıq və Açıqlama */}
        <div className="mb-6 flex-grow">
          <h3 className="text-[#170F49] text-[18px] md:text-[20px] font-semibold leading-tight mb-4 group-hover:text-[#6344F5] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#596063] font-regular text-[15px] md:text-[16px] leading-[1.6] line-clamp-3">
            {description}
          </p>
        </div>

        {/* Ayırıcı Xətt (Şəkildəki kimi zəif xətt) */}
        <div className="w-full h-[1px] bg-gray-100/60 mb-5"></div>

        {/* Footer Bölməsi: Tarix və Link */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Tarix */}
          <div className="flex items-center gap-2 text-[#595C5E] text-[10px] md:text-[12px]">
            <CalendarDays size={16} className="text-gray-400" />
            <span className="uppercase font-medium">{date}</span>
          </div>

          <Link
            href={path}
            className="flex items-center gap-2 text-[#6344F5] font-semibold text-[12px] md:text-[14px] transition-all hover:opacity-70"
          >
            <span>Davamını oxu</span>
            <MoveRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;