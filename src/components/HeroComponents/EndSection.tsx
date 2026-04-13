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
    <div className='max-w-[1560px] mx-auto px-5 md:px-12 py-10'>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full rounded-[30px] md:rounded-[40px] p-10 md:p-24 text-center overflow-hidden group"
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={bgImage} 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dekorativ Gradient */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#8E86FF,_transparent_60%)]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-white text-[28px] sm:text-[36px] md:text-[56px] font-bold leading-[1.1] ${poppins.className}`}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-[#f8f8ffb2] text-[14px] sm:text-[16px] md:text-[18px] max-w-[750px] leading-relaxed opacity-90 ${poppins.className}`}
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 md:mt-8"
          >
            <Link href={path}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white/10 border border-white/20 rounded-full text-[16px] md:text-[18px] font-medium text-white px-8 md:px-14 py-4 md:py-5 transition-all hover:bg-white/20 backdrop-blur-md cursor-pointer flex items-center gap-2 ${poppins.className}`}
              >
                {buttonText}
                <ArrowOutwardIcon sx={{ fontSize: { xs: 18, md: 22 }, color: 'white' }} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default EndSection;