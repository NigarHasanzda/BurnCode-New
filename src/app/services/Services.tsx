"use client";
import React from 'react';
import { Code2, Smartphone, Monitor, Cpu, Settings, BarChart3 } from 'lucide-react';
import ServiceCard from '@/components/Cards/ServicesCard';
import HeroComponent from '@/components/HeroComponents/HeroComponents';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion'
import EndSection from '@/components/HeroComponents/EndSection';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const ServicesSection = () => {
    const services = [
        {
            title: "Veb Sayt Hazırlanması",
            description: "Müasir SEO dostu veb saytlar. Korporativ saytlar, e-ticarət platformaları.",
            icon: <Code2 size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/web-development"
        },
        {
            title: "Mobil Tətbiqlər",
            description: "iOS və Android platformaları üçün yüksək performanslı mobil tətbiqlər hazırlayırıq.",
            icon: <Smartphone size={24} />,
            features: ["iOS & Android", "Cross-platform", "UI/UX Dizayn"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/mobile-apps"
        },
        {
            title: "Masaüstü proqram təminatı",
            description: "Effektiv və sürətli masaüstü tətbiqlərin hazırlanması.",
            icon: <Monitor size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/desktop-software"
        },
        {
            title: "Mikroçip proqramlaşdırma",
            description: "Aşağı səviyyəli proqramlaşdırma və aparat təminatı həlləri.",
            icon: <Cpu size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/microchip"
        },
        {
            title: "QA avtomatlaşdırılması",
            description: "Proqram təminatının keyfiyyətinə tam nəzarət.",
            icon: <Settings size={24} />,
            features: ["Test Automation", "Manual Testing", "Security"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/qa-automation"
        },
        {
            title: "Data analitika",
            description: "Məlumatların analizi və biznes qərarlarının dəstəklənməsi.",
            icon: <BarChart3 size={24} />,
            features: ["Big Data", "Visualisation", "AI Insights"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/data-analytics"
        }
    ];

    const steps = [
        { id: "01", title: "Analiz", description: "Tələblərin toplanması və analizi" },
        { id: "02", title: "Dizayn", description: "İstifadəçi təcrübəsi və vizual dizayn" },
        { id: "03", title: "İnkişaf", description: "Kodlaşdırma və texniki reallaşdırma" },
        { id: "04", title: "Dəstək", description: "Layihənin idarə olunması və texniki dəstək" },
    ];

    return (
        <>
            <HeroComponent
                breadcrumbParent="Ana səhifə"
                breadcrumbCurrent="Xidmətlərimiz"
                titleNormal="Bizim"
                titleColored="Xidmətlərimiz"
                description="İdeyadan reallaşdırmaya qədər bütün mərhələlərdə peşəkar komandamız sizinlədir."
            />

            <section className={`py-12 md:py-24 px-4 ${poppins.className} `}>
                <div className="max-w-[1550px] mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#1D164D] text-[28px] md:text-[56px] font-semibold text-center mb-10 md:mb-20 tracking-tight"
                    >
                        Xidmətlərimiz
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <section className={`${poppins.className} py-10 md:py-20`}>
                <div className="max-w-[1620px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="bg-white p-8 md:p-12 rounded-[32px] border border-[#F1F1F1] shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <span className={`text-[#6344F5] text-[40px] md:text-[48px] font-medium leading-none mb-4 md:mb-6 ${poppins.className}`}>
                                    {step.id}
                                </span>
                                <h3 className="text-[#170F49] text-[20px] md:text-[22px] font-semibold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[#596063] text-[14px] md:text-[16px] font-regular leading-[24px] md:leading-[28px] opacity-80">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='pt-12 md:pt-30'>
                <EndSection
                    title="Hələ də sualınız var?"
                    description="Əgər axtardığınızı tapa bilmədinizsə, dəstək komandamız 24/7 sizə kömək etməyə hazırdır. Bizimlə əlaqə saxlamaqdan çəkinməyin!"
                    buttonText="Bizimlə Əlaqə"
                    path="/contact"
                />
            </section>
        </>
    );
};

export default ServicesSection;