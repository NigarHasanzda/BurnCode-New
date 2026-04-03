"use client"
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@/components/Button/Button'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

const projectsData = [
  {
    id: 1,
    title: "NRICH Dashboard",
    category: "Dashboard",
    description: "Burncode şirkəti artıq 5 ildən çoxdur ki, müştərilərinə xidmət göstərir. Bu müddət ərzində bir sıra kiçik və böyük layihələr həyata keçirmişik. Sizə həm keyfiyyətli iş, həm də münasib qiymət təklif edirik.",
    image: "/projects.png" 
  },
  {
    id: 2,
    title: "Kord AI Platform",
    category: "AI Solution",
    description: "Süni intellekt əsaslı vakansiya və təcrübə proqramları platforması. İstifadəçilərin bacarıqlarını analiz edərək ən uyğun işləri təklif edir.",
    image: "/projects.png"
  }
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
  }

  const currentProject = projectsData[currentIndex]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1490px] mx-auto px-4 md:px-6">
        <h2 className={`${poppins.className} text-[#170F49] text-[32px] md:text-[48px] font-semibold text-center mb-10 md:mb-16`}>
          Layihələrimiz
        </h2>

        {/* Kart Konteyneri */}
        <div className="bg-[#F9F9FF] rounded-[30px] md:rounded-[40px] p-6 md:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 min-h-fit lg:min-h-[500px]">
          
          {/* Şəkil - Mobildə yuxarıda görünməsi üçün order-first istifadə olundu */}
          <div className="flex-1 w-full order-first lg:order-last">
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl md:shadow-2xl">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mətn hissəsi */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <h3 className="text-[#4A3AFF] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
              {currentProject.title}
            </h3>
            
            <div className="inline-block px-6 py-2 border border-[#4A3AFF] text-[#4A3AFF] rounded-full text-sm font-medium">
              {currentProject.category}
            </div>

            <p className="text-[#6F6C90] text-[16px] md:text-[18px] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
              {currentProject.description}
            </p>

            <div className="pt-4">
                <Button 
                text="Layihəyə bax" 
                className="px-8 md:px-10 py-3 md:py-4 text-[16px] w-full sm:w-auto" 
                />
            </div>
          </div>
        </div>

        {/* Naviqasiya */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button 
            onClick={prevSlide}
            className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#4A3AFF] hover:bg-[#4A3AFF] hover:text-white transition-all active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {projectsData.map((_, index) => (
              <div 
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-[#4A3AFF]' : 'w-2.5 bg-[#D1D1D1]'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#4A3AFF] hover:bg-[#4A3AFF] hover:text-white transition-all active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects