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

const ServicesDetail = () => {
    const { slug } = useParams();

    const services = [
        {
            title: "Veb Sayt Hazırlanması",
            description: "Müasir, sürətli və SEO dostu veb həllər.",
            image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
            path: "web-development",
            body: `
                <p>Müasir rəqəmsal dünyada veb sayt biznesinizin simasıdır. Biz təkcə vizual olaraq gözəl deyil, həm də texniki cəhətdən qüsursuz saytlar hazırlayırıq.</p>
                <h3>Niyə professional veb sayt?</h3>
                <ul>
                    <li><strong>SEO Optimizasiya:</strong> Axtarış sistemlərində ön sıralarda olmaq üçün təmiz kod strukturundan istifadə edirik.</li>
                    <li><strong>Adaptiv Dizayn:</strong> Saytınız mobil, planşet və desktop cihazlarda mükəmməl görünəcək.</li>
                    <li><strong>Yüksək Sürət:</strong> İstifadəçilərin saytda qalması üçün yüklənmə sürətini minimuma endiririk.</li>
                </ul>
                <p>Bizim yanaşmamız müştəri ehtiyaclarını analiz etmək və ən son texnologiyalar (React, Next.js, Node.js) vasitəsilə ən effektiv həlli təqdim etməkdir.</p>
            `
        },
        {
            title: "Mobil Tətbiqlər",
            description: "iOS və Android üçün yüksək performanslı tətbiqlər.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            path: "mobile-apps",
            body: `
                <p>İstifadəçilərinizlə hər an əlaqədə olmaq üçün mobil tətbiqlər ən yaxşı vasitədir. Biz həm yerli (Native), həm də çarpaz platformalı (Cross-platform) tətbiqlər hazırlayırıq.</p>
                <h3>Xidmətlərimizə daxildir:</h3>
                <ul>
                    <li><strong>UI/UX Dizayn:</strong> İstifadəçi dostu və cəlbedici interfeyslər.</li>
                    <li><strong>Push Bildirişlər:</strong> Müştərilərinizi yeniliklərdən anında xəbərdar edin.</li>
                    <li><strong>Offline Rejim:</strong> İnternet bağlantısı olmadan da işləyə bilən funksionallıqlar.</li>
                </ul>
                <p>Flutter və React Native kimi müasir texnologiyalarla həm büdcənizə qənaət edirik, həm də yüksək keyfiyyətli məhsul təqdim edirik.</p>
            `
        },
        {
            title: "Masaüstü proqram təminatı",
            description: "Biznes proseslərin avtomatlaşdırılması üçün masaüstü həllər.",
            image: "https://images.unsplash.com/photo-1527443224154-c4c8b4b2b1c6",
            path: "desktop-software",
            body: `
                <p>Böyük həcmli data ilə işləyən və internet asılılığı olmayan güclü proqram təminatlarına ehtiyacınız var? Masaüstü tətbiqlər məhz bunun üçündür.</p>
                <p>Biz müəssisə daxili idarəetmə sistemləri, CRM və ERP proqramları hazırlayırıq ki, bu da sizin iş səmərəliliyinizi 2 qat artıracaqdır.</p>
            `
        },
        {
            title: "Mikroçip proqramlaşdırma",
            description: "Sənaye və məişət cihazları üçün daxili sistemlər.",
            image: "https://images.unsplash.com/photo-1581091215367-59ab6b4c1d3b",
            path: "microchip",
            body: `
                <p>Əşyaların interneti (IoT) və daxili sistemlərin (Embedded Systems) proqramlaşdırılması sahəsində peşəkar xidmət təklif edirik.</p>
                <ul>
                    <li>Arduino, Raspberry Pi və STM32 platformaları üzərində iş.</li>
                    <li>Sensor məlumatlarının emalı və uzaqdan idarəetmə sistemləri.</li>
                    <li>Sənaye avtomatlaşdırılması üçün fərdi həllər.</li>
                </ul>
            `
        },
        {
            title: "QA avtomatlaşdırılması",
            description: "Proqram təminatının keyfiyyətinə tam zəmanət.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
            path: "qa-automation",
            body: `
                <p>Manual testlərdən yorulmusunuz? QA avtomatlaşdırılması ilə xətaları insan müdaxiləsi olmadan, sürətli şəkildə aşkar edin.</p>
                <p>Biz Selenium, Cypress və Playwright kimi alətlərlə proqramınızın hər bir funksiyasını avtomatik test edən skriptlər yazırıq.</p>
            `
        },
        {
            title: "Data analitika",
            description: "Məlumatları gəlirə çevirən analiz həlləri.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            path: "data-analytics",
            body: `
                <p>Data müasir dövrün qızılıdır. Biz sizin yığılmış datalarınızı analiz edərək gələcək biznes strategiyanızı qurmağa kömək edirik.</p>
                <p>Vizuallaşdırma, proqnozlaşdırma və böyük məlumat bazaları ilə işləməklə, qərarlarınızı instinktlərə deyil, faktlara əsaslandırın.</p>
            `
        }
    ];

    const selectedService = services.find(
        (item) => item.path === slug
    );

    if (!selectedService) {
        return <div className="text-center mt-10 text-red-500 text-xl font-bold">Xidmət tapılmadı!</div>
    }

    return (
        <>
            <DetailHeader
                title={selectedService.title}
                description={selectedService.description}
                breadcrumbPath={[
                    { name: 'Ana səhifə', link: '/' },
                    { name: 'Xidmətlər', link: '/services' },
                    { name: selectedService.title, link: null }
                ]}
            />
            <div className="max-w-[1550px] mx-auto px-4 py-12 pt-20">

                <div className="rounded-4xl overflow-hidden shadow-lg mb-10">
                    <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-[650px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div
                    className={`
        ${poppins.className} 
        prose prose-lg max-w-none 
        text-[16px] font-medium text-[#6B7280] 
        leading-relaxed 
        prose-headings:text-gray-700 
        prose-headings:font-medium 
        
        prose-p:text-[#6B7280] 
        prose-li:text-[#6B7280] 
        prose-strong:text-gray-700 
        
    `}
                    dangerouslySetInnerHTML={{ __html: selectedService.body }}
                />
            </div>

            <EndSection
                title="Layihənizi müzakirə edək?"
                description="Pulsuz məsləhət üçün bizimlə əlaqə saxlayın. Ehtiyaclarınızı dinləyək və sizə ən uyğun həlli təklif edək."
                buttonText="Bizimlə Əlaqə"
                path="/contact"
            />
        </>
    )
}

export default ServicesDetail;