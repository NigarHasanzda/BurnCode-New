"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import Button from '@/components/Button/Button'

// Fontu komponent daxilində çağırırıq
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

const Hero = () => {
    return (
        <section className={`${poppins.className} bg-[url(/background.png)] bg-no-repeat bg-center bg-cover border-b border-gray-100`}>
            <div className='max-w-[1440px] mx-auto px-6 py-[120px] md:py-[190px] flex flex-col items-center gap-8 text-center'>
                <h1 className='text-[36px] md:text-[84px] font-semibold text-[#170F49] leading-tight max-w-[1100px]'>
                    Biznesinizi virtual dünyaya daşıyın
                </h1>
                <p className={`text-[14px] md:text-[19px] text-[#596063] opacity-90 max-w-[800px] leading-relaxed ${poppins.className}`}>
                Burncode şirkəti artıq 5 ildən çoxdur ki, müştərilərinə xidmət göstərir. Bu müddət ərzində bir sıra kiçik və böyük layihələr həyata keçirmişik. Sizə həm keyfiyyətli iş, həm də münasib qiymət təklif edirik.
                </p>
                <Button
                    text="Bizimlə əlaqə"
                    className="px-6 py-3.5 text-[17px]"
                />
            </div>
        </section>
    )
}

export default Hero