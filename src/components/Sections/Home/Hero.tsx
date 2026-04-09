"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion' // Animasiya üçün
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})

const Hero = () => {
    // Animasiya tənzimləmələri
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    }

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
    }

    return (
        <section className={`${poppins.className} min-h-[800px] flex items-center  md:py-0 overflow-hidden`}>
            <div className='w-[95%] md:w-[80%] mx-auto px-4 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center'>
                
                {/* SOL TƏRƏF - Animasiyalı */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className='flex flex-col items-center lg:items-start text-center lg:text-left gap-10 z-10'
                >
                    <div className='space-y-6'>
                        <motion.h1 variants={itemVariants} className='text-[35px] md:text-[64px] font-semibold text-[#1D164D] leading-[1.1] tracking-tight'>
                            Biznesinizi virtual <br className='hidden md:block' /> dünyaya daşıyın
                        </motion.h1>
                        <motion.p variants={itemVariants} className={`text-[14px] md:text-[18px] text-[#596063] font-regular max-w-[640px] leading-relaxed opacity-80`}>
                            Burncode şirkəti artıq 5 ildən çoxdur ki, müştərilərinə xidmət göstərir. 
                            Bu müddət ərzində bir sıra kiçik və böyük layihələr həyata keçirmişik. 
                            Sizə həm keyfiyyətli iş, həm də münasib qiymət təklif edirik.
                        </motion.p>
                    </div>

                    <motion.div variants={itemVariants} className='flex flex-wrap justify-center lg:justify-start gap-4 items-center w-full sm:w-auto'>
                        
                        <button className='bg-[#6045FD] border border-gray-200 text-white px-8 py-4 rounded-full font-medium text-[12px] md:text-[16px] transition-all active:scale-95'>
                            Bizimlə əlaqə 
                            <ArrowOutwardIcon sx={{fontSize:17}} className='ml-2 text-sm' />
                        </button>
                        <button className='bg-white border border-gray-200 text-[#1D164D] px-8 py-4 rounded-full font-medium text-[12px] md:text-[16px] hover:bg-gray-50 transition-all active:scale-95'>
                            Xidmətlərə bax
                        </button>
                    </motion.div>

                    <motion.div variants={itemVariants} className='w-full h-[1px] bg-gray-100 mt-4'></motion.div>

                    <motion.div variants={itemVariants} className='flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-16'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[28px] md:text-[36px] font-semibold text-[#6344F5] leading-none'>54+</span>
                            <span className='text-[12px] md:text-[14px] text-[#5A6064] font-regular'>Tamamlanmış layihə</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[28px] md:text-[36px] font-semibold text-[#6344F5] leading-none'>26+</span>
                            <span className='text-[12px] md:text-[14px] text-[#5A6064] font-regular'>Məmnun müştəri</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[28px] md:text-[36px] font-semibold text-[#6344F5] leading-none'>5+</span>
                            <span className='text-[12px] md:text-[14px] text-[#5A6064] font-regular'>İllik təcrübə</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* SAĞ TƏRƏF - Kart sağdan gəlir */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className='relative flex justify-center lg:justify-end group w-full'
                >
                    <div className='absolute -right-2 -top-2 md:-right-8 md:-top-8 w-[100px] h-[90px] md:w-[170px] md:h-[160px] bg-[#6344F5]/10 rounded-[25px] md:rounded-[40px] -z-0'></div>
                    
                    <div className='w-full max-w-[660px] min-h-[350px] md:h-[400px] bg-white rounded-[32px] p-6 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50 z-10 relative'>
                        <div className='flex gap-2 mb-4'>
                            <div className='w-3 h-3 rounded-full bg-[#ff0d00]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#ffb20b]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#08e228]'></div>
                        </div>

                        <div className='font-mono text-[11px] sm:text-[12px] md:text-[13px] leading-loose text-slate-500 overflow-x-auto'>
                            <p><span className='text-slate-400'>const</span> <span className='text-indigo-600'>DigiTech</span> = &#123;</p>
                            <p className='pl-6'>mission: <span className='text-emerald-500'>"İnnovasiya"</span>,</p>
                            <p className='pl-6'>services: [</p>
                            <p className='pl-12 text-emerald-500'>"Web Development",</p>
                            <p className='pl-12 text-emerald-500'>"Mobile Apps",</p>
                            <p className='pl-12 text-emerald-500'>"AI Solutions",</p>
                            <p className='pl-12 text-emerald-500'>"Cloud Services"</p>
                            <p className='pl-6'>],</p>
                            <p className='pl-6'>location: <span className='text-emerald-500'>"Bakı, Azərbaycan"</span></p>
                            <p>&#125;;</p>
                            <br />
                            <p><span className='text-indigo-600 font-bold'>console</span>.log(<span className='text-emerald-500'>"Gələcəyə hazırıq!"</span>);</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero