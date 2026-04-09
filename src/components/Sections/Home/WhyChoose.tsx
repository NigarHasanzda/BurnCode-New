"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'
import ChooseCard from '@/components/Cards/ChooseCard'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})

const WhyChooseUs = () => {
    return (
        <section className={`${poppins.className} py-12 md:py-24 px-5 md:px-12 overflow-hidden`}>
            <div className="max-w-[1430px] mx-auto">

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-[#170F49] text-[28px] sm:text-[34px] md:text-[48px] font-semibold leading-tight px-4">
                        Niyə şirkətlər <br className="hidden md:block" />
                        <span className="text-[#6045FD]"> Burncode</span>-u seçir?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* KART 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <ChooseCard
                            title="Fərdi yanaşma və dəstək"
                            description="Hər layihəyə fərdi yanaşır və ehtiyaclarınıza uyğun həllər təqdim edirik. Sizə ayrılmış mütəxəssis ilə birbaşa əlaqə saxlayaraq prosesi rahatlıqla idarə edə bilərsiniz."
                        >
                            <div className="rounded-2xl flex items-center justify-center gap-3 mt-4">
                                <img src="/card1.png" alt="Card" className="max-w-[130%] md:max-w-full h-[210px] " />
                            </div>
                        </ChooseCard>
                    </motion.div>

                    {/* KART 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ChooseCard
                            title="Hər addımda sizinlə"
                            description="Şəffaf kommunikasiya ilə layihənin hər mərhələsində sizi məlumatlandırırıq. Bütün addımlar sizinlə koordinasiyalı şəkildə icra olunur."
                        >
                            <div className="flex flex-col pt-6 gap-2 w-full md:w-[87%] mx-auto items-center">
                                <img src="/chats.png" alt="Chats" className="max-w-[95%] md:max-w-full h-auto" />
                            </div>
                        </ChooseCard>
                    </motion.div>

                    {/* KART 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <ChooseCard
                            title="Nəticəyə yönəlmiş həllər"
                            description="Hazırladığımız saytlar yalnız vizual deyil, həm də biznes nəticələrinə fokuslanır. Daha yaxşı istifadəçi təcrübəsi ilə ziyarətçiləri müştəriyə çevirməyə kömək edirik."
                        >
                            <div className="flex items-end h-[100px] md:h-[132px] mt-6 -mb-[30px] md:-mb-[60px] gap-1 md:gap-0 justify-center">
                                <div className="w-10 sm:w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[40%]"></div>
                                <div className="w-10 sm:w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[60%]"></div>
                                <div className="w-10 sm:w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[50%]"></div>
                                <div className="w-10 sm:w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[65%]"></div>
                                <div className="w-10 sm:w-12 md:w-16 bg-[#8E86FF] rounded-t-md h-full shadow-lg shadow-indigo-100"></div>
                            </div>
                        </ChooseCard>
                    </motion.div>

                    {/* KART 4 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <ChooseCard
                            title="Gələcəyə hazır həllər"
                            description="İnkişaf edən texnologiya və bazarla birlikdə böyüyə bilən miqyası olan arxitektura üzərində qurulub."
                        >
                            <div className="relative flex w-full justify-center md:w-[90%] mx-auto pt-8 md:pt-10 md:pl-10 items-end">
                                <img src="/statistic.png" alt="Card" className='w-[90%] md:w-[88%] h-auto' />
                            </div>
                        </ChooseCard>
                    </motion.div>

                    {/* KART 5 (Large) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <ChooseCard
                            title="Şəffaf proses"
                            description="İş axınımızı tam şəffaf şəkildə təqdim edirik, hər mərhələdə sizi məlumatlandırırıq. Beləliklə, prosesin hər addımına nəzarət edir və gözləntilərinizin tam qarşılandığından əmin olursunuz."
                        >
                            <div className="flex flex-wrap justify-center gap-3 p-4 md:p-8 pt-8 md:pt-20 lg:pt-30">
                                <img src="/chooosestatistic.png" alt="Choose Statistic" className="max-w-full h-auto object-contain" />
                            </div>
                        </ChooseCard>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs