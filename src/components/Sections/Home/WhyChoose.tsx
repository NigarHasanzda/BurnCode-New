"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import ChooseCard from '@/components/Cards/ChooseCard'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})

const WhyChooseUs = () => {
    return (
        <section className={`${poppins.className} bg-white py-12 md:py-20 px-6 md:px-12`}>
            <div className="max-w-[1430px] mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[#170F49] text-[30px] md:text-[48px] font-semibold leading-tight">
                        Niyə şirkətlər <br className="hidden md:block" />
                        <span className="text-[#6045FD]">Burncode</span>-u seçir?
                    </h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">



                    <ChooseCard
                        title="Fərdi yanaşma və dəstək"
                        description="Hər layihəyə fərdi yanaşır və ehtiyaclarınıza uyğun həllər təqdim edirik. Sizə ayrılmış mütəxəssis ilə birbaşa əlaqə saxlayaraq prosesi rahatlıqla idarə edə bilərsiniz."
                    >
                        <div className="rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <img src="/card1.png" alt="Card" className="max-w-full h-auto" />
                        </div>
                    </ChooseCard>



                    <ChooseCard
                        title="Hər addımda sizinlə"
                        description="Şəffaf kommunikasiya ilə layihənin hər mərhələsində sizi məlumatlandırırıq. Bütün addımlar sizinlə koordinasiyalı şəkildə icra olunur."
                    >
                        <div className="flex flex-col pt-6 gap-2 w-full md:w-[87%] mx-auto">
                            <img src="/chats.png" alt="Chats" className="max-w-full h-auto" />
                        </div>
                    </ChooseCard>




                    <ChooseCard
                        title="Nəticəyə yönəlmiş həllər"
                        description="Hazırladığımız saytlar yalnız vizual deyil, həm də biznes nəticələrinə fokuslanır. Daha yaxşı istifadəçi təcrübəsi ilə ziyarətçiləri müştəriyə çevirməyə kömək edirik."
                    >
                        <div className="flex items-end h-[100px] md:h-[132px] -mb-[40px] md:-mb-[60px] gap-1 md:gap-0">
                            <div className="w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[40%]"></div>
                            <div className="w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[60%]"></div>
                            <div className="w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[50%]"></div>
                            <div className="w-12 md:w-16 bg-[#D7D9F9] border-t border-l border-r border-[#8e86ff8f] rounded-t-md h-[65%]"></div>
                            <div className="w-12 md:w-16 bg-[#8E86FF] rounded-t-md h-full shadow-lg shadow-indigo-100"></div>
                        </div>
                    </ChooseCard>



                    <ChooseCard
                        title="Gələcəyə hazır həllər"
                        description="İnkişaf edən texnologiya və bazarla birlikdə böyüyə bilən miqyası olan arxitektura üzərində qurulub."
                    >
                        <div className="relative flex w-[90%] mx-auto pt-6 md:pt-10 md:pl-10 items-end gap-3">
                            <img src="/statistic.png" alt="Card" className='w-full md:w-[88%] h-auto' />
                        </div>
                    </ChooseCard>



                    <ChooseCard
                        className="lg:col-span-2"
                        title="Şəffaf proses"
                        description="İş axınımızı tam şəffaf şəkildə təqdim edirik, hər mərhələdə sizi məlumatlandırırıq. Beləliklə, prosesin hər addımına nəzarət edir və gözləntilərinizin tam qarşılandığından əmin olursunuz."
                    >
                        <div className="flex flex-wrap justify-center gap-3 p-4 md:p-8 pt-10 md:pt-30">
                            <img src="/chooosestatistic.png" alt="Choose Statistic" className="max-w-full h-auto" />
                        </div>
                    </ChooseCard>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs