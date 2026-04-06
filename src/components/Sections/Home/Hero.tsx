"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { MoveUpRight } from 'lucide-react'
import Button from '@/components/Button/Button'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})

const Hero = () => {
    return (
        // Bütün bölməyə Poppins tətbiq edildi
        <section className={`${poppins.className} bg-white min-h-[800px] flex items-center py-10 md:py-0`}>
            <div className='w-[90%] md:w-[80%] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center'>
                
                {/* SOL TƏRƏF: Content */}
                {/* items-center (mobildə mərkəz), lg:items-start (desktopda sol) */}
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-10 z-10'>
                    <div className='space-y-6'>
                        <h1 className='text-[40px] md:text-[64px] font-semibold text-[#1D164D] leading-[1.1] tracking-tight'>
                            Biznesinizi virtual <br className='hidden md:block' /> dünyaya daşıyın
                        </h1>
                        <p className='text-[16px] md:text-[18px] text-[#596063] max-w-[640px] leading-relaxed opacity-80'>
                            Burncode şirkəti artıq 5 ildən çoxdur ki, müştərilərinə xidmət göstərir. 
                            Bu müddət ərzində bir sıra kiçik və böyük layihələr həyata keçirmişik. 
                            Sizə həm keyfiyyətli iş, həm də münasib qiymət təklif edirik.
                        </p>
                    </div>

                    {/* Düymələr: Mobildə mərkəzləşdirildi */}
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 items-center'>
                        <Button
                            text="Bizimlə əlaqə"
                            path="/contact"
                            className="px-8 py-4 text-[16px] font-bold"
                        />
                        
                        <button className='bg-white border border-gray-200 text-[#1D164D] px-8 py-4 rounded-full font-bold text-[16px] hover:bg-gray-50 transition-all active:scale-95'>
                            Xidmətlərə bax
                        </button>
                    </div>

                    <div className='w-full h-[1px] bg-gray-100 mt-4'></div>

                    {/* Statistika: Mobildə mərkəz üçün gap nizamlandı */}
                    <div className='flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-16'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[32px] md:text-[36px] font-black text-[#6344F5] leading-none'>54+</span>
                            <span className='text-[13px] md:text-[14px] text-[#5A6064] font-medium'>Tamamlanmış layihə</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[32px] md:text-[36px] font-black text-[#6344F5] leading-none'>26+</span>
                            <span className='text-[13px] md:text-[14px] text-[#5A6064] font-medium'>Məmnun müştəri</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[32px] md:text-[36px] font-black text-[#6344F5] leading-none'>5+</span>
                            <span className='text-[13px] md:text-[14px] text-[#5A6064] font-medium'>İllik təcrübə</span>
                        </div>
                    </div>
                </div>

                {/* SAĞ TƏRƏF: Vizual Kod Kartı */}
                <div className='relative flex justify-center lg:justify-end group'>
                    <div className='absolute -right-4 -top-4 md:-right-8 md:-top-8 w-[120px] h-[110px] md:w-[170px] md:h-[160px] bg-[#6344F5]/10 rounded-[30px] md:rounded-[40px] -z-0'></div>
                    
                    <div className='w-full max-w-[660px] min-h-[350px] md:h-[400px] bg-white rounded-[32px] p-8 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-50 z-10 relative'>
                        <div className='flex gap-2 mb-4'>
                            <div className='w-3 h-3 rounded-full bg-[#ff0d00]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#ffb20b]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#08e228]'></div>
                        </div>

                        {/* Kod hissəsi (şrift ölçüsü mobildə bir az kiçildi ki, qırılmasın) */}
                        <div className='font-mono text-[12px] md:text-[13px] leading-loose text-slate-500 overflow-x-auto'>
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
                </div>

            </div>
        </section>
    )
}

export default Hero