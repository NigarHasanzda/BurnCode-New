"use client";
import React from 'react';
import { Code2, Smartphone, Monitor, Cpu, Settings, BarChart3 } from 'lucide-react';
import ServiceCard from '@/components/Cards/ServicesCard';
import HeroComponent from '@/components/HeroComponents/HeroComponents';
import { Poppins } from 'next/font/google';
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
            description: "Müasir CEO dostu veb saytlar. Korporativ saytlar, e-ticarət platformaları.",
            icon: <Code2 size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/web-development"
        },
        {
            title: "Mobil Tətbiqlər",
            description: "Müasir CEO dostu veb saytlar. Korporativ saytlar, e-ticarət platformaları.",
            icon: <Smartphone size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/mobile-apps"
        },
        {
            title: "Masaüstü proqram təminatı",
            description: "Müasir CEO dostu veb saytlar. Korporativ saytlar, e-ticarət platformaları.",
            icon: <Monitor size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/desktop-software"
        },
        {
            title: "Mikroçip proqramlaşdırma",
            description: "Müasir CEO dostu veb saytlar. Korporativ saytlar, e-ticarət platformaları.",
            icon: <Cpu size={24} />,
            features: ["Responsiv dizayn", "CEO optimallaşdırma", "CMS İnteqrasiya"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/microchip"
        },
        {
            title: "QA avtomatlaşdırılması",
            description: "iOS və Android platformaları üçün yüksək performanslı mobil tətbiqlər hazırlayırıq.",
            icon: <Settings size={24} />,
            features: ["iOS & Android", "Cross-platform", "UI/UX Dizayn"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/qa-automation"
        },
        {
            title: "Data analitika",
            description: "iOS və Android platformaları üçün yüksək performanslı mobil tətbiqlər hazırlayırıq.",
            icon: <BarChart3 size={24} />,
            features: ["iOS & Android", "Cross-platform", "UI/UX Dizayn"],
            technologies: ["PostgreSQL", "Node.js", "Next.js"],
            path: "/data-analytics"
        }
    ];


    const steps = [
        {
            id: "01",
            title: "Analiz",
            description: "Tələblərin toplanması və analizi",
        },
        {
            id: "02",
            title: "Dizayn",
            description: "Tələblərin toplanması və analizi",
        },
        {
            id: "03",
            title: "İnkişaf",
            description: "Tələblərin toplanması və analizi",
        },
        {
            id: "04",
            title: "Dəstək",
            description: "Tələblərin toplanması və analizi",
        },
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
            <section className="py-20 ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                features={service.features}
                                path={service.path}
                                technologies={service.technologies}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${poppins.className}`}>
                <div className="max-w-[1550px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="bg-white p-10 rounded-[24px] border border-[#F1F1F1] shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                            >
                                <span className={`text-[#6344F5] text-[48px] font-medium leading-[36px] mb-4 ${poppins.className}`}>
                                    {step.id}
                                </span>
                                <h3 className="text-[#170F49] text-[20px] font-semibold leading-[28px] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-[#596063] text-[16px] font-regular leading-[26px] opacity-80">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='pt-30'>
                <EndSection

                    title="Layihənizi müzakirə edək?"
                    description="Pulsuz məsləhət üçün bizimlə əlaqə saxlayın. Ehtiyaclarınızı dinləyək və sizə ən uyğun həlli təklif edək."
                    buttonText="Bizimlə Əlaqə"
                    path="/contact"
                />
            </section>
        </>
    );
};

export default ServicesSection;