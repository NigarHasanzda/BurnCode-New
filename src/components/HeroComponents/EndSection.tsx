"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

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
  bgImage?: string;
}

const EndSection = ({ 
  title, 
  description, 
  buttonText, 
  path, 
  bgImage = "/faqbg.png" 
}: EndSectionProps) => {
  return (
    <div className='max-w-[1620px] mx-auto px-4 sm:px-6 md:px-12 py-2 md:py-16'>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[48px] p-8 sm:p-12 md:p-24 text-center overflow-hidden group"
      >
        {/* Arxa fon şəkli */}
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={bgImage} 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        
        {/* Dekorativ Overlay & Gradient */}
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#8E86FF,_transparent_65%)]"></div>
        
        <div className="relative  z-10 flex flex-col py-12 items-center gap-4 md:gap-8">
          {/* Başlıq - Responsiv ölçülər tənzimləndi */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-white text-[25px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.2] md:leading-[1.1] max-w-[100%] ${poppins.className}`}
          >
            {title}
          </motion.h3>
          
          {/* Təsvir - Mobildə kənarlardan çox sıxılmaması üçün max-w tənzimləndi */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-[#f8f8ffb2] text-[14px] md:text-[18px] font-regular max-w-[320px] sm:max-w-[600px] md:max-w-[750px] leading-relaxed md:leading-loose opacity-90 ${poppins.className}`}
          >
            {description}
          </motion.p>
          
          {/* Düymə - Hover və Tap effektləri saxlanıldı */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 md:mt-2"
          >
            <Link href={path}>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white/10 border border-white/20 rounded-full text-[15px] md:text-[18px] font-medium text-white px-8 md:px-14 py-3.5 md:py-5 transition-all backdrop-blur-md cursor-pointer flex items-center gap-2 group/btn ${poppins.className}`}
              >
                {buttonText}
                {/* <ArrowOutwardIcon 
                  className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  sx={{ fontSize: { xs: 18, md: 24 }, color: 'white' }} 
                /> */}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default EndSection;