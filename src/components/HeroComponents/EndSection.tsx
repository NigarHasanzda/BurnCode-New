"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

interface EndSectionProps {
  title: string;
  description: string;
  buttonText: string;
  path: string;
  bgImage?: string; // İstəyə bağlı: Arxa fon şəkli üçün
}

const EndSection = ({ 
  title, 
  description, 
  buttonText, 
  path, 
  bgImage = "/faqbg.png" 
}: EndSectionProps) => {
  return (
    <div className='max-w-[1530px] mx-auto px-6'>
      <div className="relative w-full rounded-[40px] p-10 md:p-20 text-center overflow-hidden group">
        <img 
          src={bgImage} 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        />
        {/* Dekorativ Gradient */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#8E86FF,_transparent_60%)]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h3 className={`text-white text-[30px] md:text-[48px] font-bold leading-tight ${poppins.className}`}>
            {title}
          </h3>
          <p className={`text-[#f8f8ffb2] text-[16px] md:text-[18px] max-w-[650px] leading-relaxed opacity-90 ${poppins.className}`}>
            {description}
          </p>
          
          <div className="mt-6">
            <Link href={path}>
              <button className={`bg-white/10 border-none rounded-full text-[18px] font-medium text-white px-12 py-5 transition-all hover:bg-white/20 backdrop-blur-md cursor-pointer ${poppins.className}`}>
                {buttonText}
              <ArrowOutwardIcon sx={{ fontSize: 20, color: 'white', marginLeft: "8px" }} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndSection;