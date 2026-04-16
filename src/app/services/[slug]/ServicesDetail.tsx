"use client"
import React from 'react'
import DetailHeader from '@/components/HeroComponents/DeatilHeader';
import { useParams } from 'next/navigation';
import { Poppins } from 'next/font/google';
import EndSection from '@/components/HeroComponents/EndSection';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const commonServiceBody = `
    <div style="display: flex; flex-direction: column; gap: 24px;">
        <p>Veb tətbiqləri geniş spektrli tapşırıq və problemlərə rahat və səmərəli həllər təqdim etməklə bizə müxtəlif yollarla kömək edə bilər. Veb proqramlarının faydalı olacağı bəzi yollar bunlardır:</p>
        
        <p><strong style="color: #170F49;">Əlçatanlıq:</strong> Veb proqramları internet bağlantısı olan hər yerdən əldə edilə bilər ki, bu da onları qlobal auditoriya üçün əlçatan edir. Bu əlçatanlıq bizneslərə coğrafi sərhədlər boyunca müştərilər və istifadəçilərlə əlaqə saxlamağa imkan verir.</p>
        
        <p><strong style="color: #170F49;">Rahatlıq:</strong> İstifadəçilər masaüstü kompüterlər, noutbuklar, planşetlər və smartfonlar daxil olmaqla müxtəlif cihazlardan veb proqramlara daxil ola bilər. Bu çeviklik istifadəçilərin üstünlük verdiyi platformada proqramla qarşılıqlı əlaqədə olmasını rahat edir.</p>
        
        <p><strong style="color: #170F49;">Effektiv xərc:</strong> Veb proqramları çox vaxt istifadəçilərin proqram təminatını yerli olaraq quraşdırması və saxlaması ehtiyacını aradan qaldırır. Bu, həm müəssisələr, həm də fiziki şəxslər üçün xərcləri azalda bilər, çünki proqram təminatı mərkəzləşdirilmiş şəkildə idarə olunur və yenilənir.</p>
        
        <p>Veb proqramları çox vaxt istifadəçilərin proqram təminatını yerli olaraq quraşdırması və saxlaması ehtiyacını aradan qaldırır. Bu, həm müəssisələr, həm də fiziki şəxslər üçün xərcləri azalda bilər, çünki proqram təminatı mərkəzləşdirilmiş şəkildə idarə olunur və yenilənir.</p>

        <p><strong style="color: #170F49;">Effektiv xərc:</strong> Veb proqramları çox vaxt istifadəçilərin proqram təminatını yerli olaraq quraşdırması və saxlaması ehtiyacını aradan qaldırır. Bu, həm müəssisələr, həm də fiziki şəxslər üçün xərcləri azalda bilər, çünki proqram təminatı mərkəzləşdirilmiş şəkildə idarə olunur və yenilənir.</p>
    </div>
`;

const ServicesDetail = () => {
    const { slug } = useParams();

    const services = [
        {
            title: "Veb Sayt Hazırlanması",
            description: "Layihənizi müzakirə etmək və ya suallarınızı cavablandırmaq üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk.",
            image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
            path: "web-development",
            body: commonServiceBody
        },
        // Digər xidmətlər bura əlavə oluna bilər...
    ];

    const selectedService = services.find((item) => item.path === slug) || services[0];

    return (
        <main className={` ${poppins.className}`}>
            <DetailHeader
                title={selectedService.title}
                description={selectedService.description}
                breadcrumbPath={[
                    { name: 'Ana səhifə', link: '/' },
                    { name: 'Xidmətlər', link: '/services' },
                    { name: selectedService.title, link: null }
                ]}
            />
            
            <div className="flex flex-col items-center px-4 py-12 md:py-20">
                <div className="w-full max-w-[1420px] h-[300px] sm:h-[450px] md:h-[613px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-sm mb-12">
                    <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>

                {/* Mətn - Şəkillə eyni genişlikdə (1320px) */}
                <div className="w-full max-w-[1420px]">
                    <article
                        className={`
                            prose prose-lg max-w-none 
                            text-[15px] md:text-[16px] leading-[1.8] text-[#596063]
                            prose-p:mb-0
                            text-left
                        `}
                        dangerouslySetInnerHTML={{ __html: selectedService.body }}
                    />
                </div>
            </div>

            <section className="pt-10">
                <EndSection
                    title="Layihənizi müzakirə edək?"
                    description="Pulsuz məsləhət üçün bizimlə əlaqə saxlayın. Ehtiyaclarınızı dinləyək və sizə ən uyğun həlli təklif edək."
                    buttonText="Bizimlə Əlaqə"
                    path="/contact"
                />
            </section>
        </main>
    )
}

export default ServicesDetail;