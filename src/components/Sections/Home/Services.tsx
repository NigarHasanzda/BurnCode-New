import ServiceCard from '@/components/Cards/ServicesCard'
import { Poppins } from 'next/font/google'
import React from 'react'



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

const servicesData = [
  {
    title: "Web proqramlaşdırma",
    description: "Dinamik veb proqramlarımızla internetin gələcəyini yaşayın. Ehtiyaclarınıza uyğun olaraq, onlar məşğulluğu və məhsuldarlığı artırır."
  },
  {
    title: "Mobil proqramlaşdırma",
    description: "Mobil tətbiqetmə təcrübəmizlə biznesinizi gücləndirin. Biz yolda inkişaf etmiş əlaqə və səmərəlilik üçün uyğunlaşdırılmış həllər yaradırıq."
  },
  {
    title: "Masaüstü proqram təminatı hazırlanması",
    description: "Biz sizin unikal ehtiyaclarınıza uyğun gələn fərdi masa üstü proqramlar hazırlayırıq. Komandamız konsepsiyaları səmərəli."
  },
  {
    title: "Mikroçip proqramlaşdırma",
    description: "Mikroçip Proqramlaşdırma smartfonlardan tutmuş sənaye maşınlarına qədər gündəlik cihazların əsasını təşkil edən sistemlər üçün ixtisaslaşdırılmış proqram təminatıdır."
  },
  {
    title: "QA avtomatlaşdırılması",
    description: "QA avtomatlaşdırılması proqram təminatını sınaqdan keçirmək və onun keyfiyyətini və etibarlılığını təmin etmək üçün avtomatlaşdırılmış."
  },
  {
    title: "Data analitika",
    description: "Məlumat analitikası qərar qəbul etmək üçün dəyərli fikirlər əldə etmək üçün məlumatların təhlili prosesidir."
  }
]

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1490px] mx-auto px-6">

        <h2 className={`${poppins.className} text-[#170F49] text-[36px] md:text-[48px] font-semibold leading-[-1.2px] text-center mb-16`}>
          Xidmətlərimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services