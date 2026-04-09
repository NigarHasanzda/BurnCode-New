"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/Cards/ServicesCard'
import Button from '@/components/Button/Button'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})

const servicesData = [
  {
    title: "Veb Sayt Hazırlanması",
    description: "Müasir CEO dostu veb saytlar. Korporativ saytlar, e-ticarət platformaları.",
    features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
    technologies: ["PostgreSQL", "Node.js", "Next.js"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    title: "Mobil Tətbiqlər",
    description: "iOS və Android platformaları üçün yüksək performanslı mobil tətbiqlər hazırlayırıq.",
    features: ["iOS & Android", "Cross-platform", "UI/UX Dizayn"],
    technologies: ["React Native", "Flutter", "Swift"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    )
  },
  {
    title: "Masaüstü proqram təminatı",
    description: "Biz sizin unikal ehtiyaclarınıza uyğun gələn fərdi masa üstü proqramlar hazırlayırıq.",
    features: ["Windows & MacOS", "Yüksək təhlükəsizlik", "Offline işləmə"],
    technologies: ["Electron", "C#", "Python"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    title: "Mikroçip proqramlaşdırma",
    description: "Smartfonlardan tutmuş sənaye maşınlarına qədər cihazların proqram təminatı.",
    features: ["Embedded systems", "IoT həlləri", "Aşağı enerji sərfi"],
    technologies: ["C++", "Arduino", "Raspberry Pi"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/>
      </svg>
    )
  },
  {
    title: "QA avtomatlaşdırılması",
    description: "Proqram təminatını sınaqdan keçirmək üçün avtomatlaşdırılmış test sistemləri.",
    features: ["Unit testing", "Automation tools", "Bug tracking"],
    technologies: ["Selenium", "Jest", "Cypress"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    title: "Data analitika",
    description: "Məlumatların təhlili prosesi ilə biznesiniz üçün dəyərli qərarlar verin.",
    features: ["Big Data", "Visual reports", "Predictive models"],
    technologies: ["Python", "Tableau", "SQL"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section className={`${poppins.className} py-16 md:py-24 overflow-hidden`}>
      <div className="max-w-[1530px] mx-auto px-6 md:px-12">

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#1D164D] text-[32px] md:text-[56px] font-bold text-center mb-12 md:mb-20 tracking-tight"
        >
          Xidmətlərimiz
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: "easeOut"
              }}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                features={service.features}
                technologies={service.technologies}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12 md:mt-20"
        >
         <Button
            text="Bütün xidmətlər"
            path="/services"
            className="px-8 md:px-10 py-4 md:py-5 text-[15px] md:text-[16px] font-bold"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Services;