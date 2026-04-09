"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Poppins } from 'next/font/google';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import DetailHeader from "@/components/HeroComponents/DeatilHeader";
import CheckIcon from '@mui/icons-material/Check';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});


const steps = [
    {
        id: "01",
        title: "Analiz",
        description: "Biznes hədəflərinizi, hədəf kütlənizi və rəqiblərinizi dərindən araşdırırıq.",
        icon: <Search size={20} />,
    },
    {
        id: "02",
        title: "Dizayn",
        description: "Modern UI/UX prinsipləri əsasında saytınızın estetik görünüşünü hazırlayırıq.",
        icon: <PenTool size={20} />,
    },
    {
        id: "03",
        title: "İnkişaf",
        description: "Təsdiq olunmuş dizaynı ən son texnologiyalarla funksional koda çeviririk.",
        icon: <Code2 size={20} />,
    },
    {
        id: "04",
        title: "Test & Start",
        description: "Hər bir detalı sınaqdan keçirib layihəni tam hazır vəziyyətdə təhvil veririk.",
        icon: <Rocket size={20} />,
    }
];

// ✅ Statik Mock Data (Dizaynı görmək üçün)
const mockProject = {
    name: "Web Proqramlaşdırma",
    image: "/blog1.jpg",
    description: "Veb tətbiqləri geniş spektrli tapşırıq və problemlərə rahat və səmərəli həllər təqdim etməklə bizə müxtəlif yollarla kömək edə bilər. Veb proqramlarının faydalı olacağı bəzi yollar bunlardır:",
    client_info: "BurnCode Tech",
    project_link: "https://burncode.org",
    features: [
        "WordPress Support & Maintenance",
        "1,000+ Completed Projects",
        "Content Migration",
        "Plugin Installation and Customization",
        "Fast Load Time",
        "Easy Back-End Admin Panel"
    ],
    body: `
        <div class="space-y-8">
            <section>
                <h4 class="font-bold text-[#170F49] mb-2">Əlçatanlıq:</h4>
                <p>Veb proqramları internet bağlantısı olan hər yerdən əldə edilə bilər ki, bu da onları qlobal auditoriya üçün əlçatan edir.</p>
            </section>
            <section>
                <h4 class="font-bold text-[#170F49] mb-2">Rahatlıq:</h4>
                <p>İstifadəçilər stolüstü kompüterlər, noutbuklar, planşetlər və smartfonlar daxil olmaqla müxtəlif cihazlardan veb proqramlara daxil ola bilərlər.</p>
            </section>
             <section>
                <h4 class="font-bold text-[#170F49] mb-2">Effektiv xərc:</h4>
                <p>Veb proqramları çox vaxt istifadəçilərin proqram təminatını yerli olaraq quraşdırması və saxlaması ehtiyacını aradan qaldırır.</p>
            </section>
        </div>
    `
};

export default function PortfolioDetails() {
    return (
        <main className={` min-h-screen ${poppins.className}`}>
            <DetailHeader
                title="Veb sayt hazırlanması"
                description="Layihənizi müzakirə etmək və ya suallarınızı cavablandırmaq üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk."
                breadcrumbPath={[{ name: 'Ana səhifə', link: '/' }, { name: 'Layihələr', link: '/projects' }, { name: 'Rəqəmsal Transformasiya', link: null }]}
            />

            {/* 2. MAIN SECTION */}
            <section className="py-16 md:py-24">
                <div className="max-w-[1560px] mx-auto px-4">

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className="rounded-[48px] overflow-hidden shadow-2xl mb-12">
                                <Image
                                    src={mockProject.image}
                                    alt={mockProject.name}
                                    width={1200}
                                    height={300}
                                    className="w-full object-cover"
                                />
                            </div>

                            <div className="max-w-[850px]">
                                <p className="text-[#6F6C90] text-[18px] leading-relaxed mb-10">
                                    {mockProject.description}
                                </p>

                                <div
                                    className="prose prose-lg max-w-none text-[#6F6C90]"
                                    dangerouslySetInnerHTML={{ __html: mockProject.body }}
                                />
                            </div>
                        </div>



                        <aside className="w-full lg:w-[460px] lg:sticky lg:top-24">
                            <div className="bg-white border border-[#EFF0F6] p-8 md:p-12 rounded-[40px] shadow-xl shadow-gray-200/50">
                                <h3 className={`text-[#1E293B] text-[30px] w-[320px]  font-semibold mb-8 ${poppins.className}`}>
                                    {mockProject.name}
                                </h3>
                                <ul className="space-y-3 mb-10">
                                    {mockProject.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 group">
                                            <div className="mt-2 w-[24px] h-[24px] flex align-center justify-center bg-[#6344F5] rounded-full ">
                                                <CheckIcon sx={{ fontSize: 16, margin: "auto" }} className="text-white" />
                                            </div>
                                            <span className={`text-[#64748B] text-[16px] mt-2 font-regular group-hover:text-[#170F49] transition-colors ${poppins.className}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-[50%] bg-[#6344F5] text-white py-3 rounded-full font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[#4F35C8] transition-all shadow-lg shadow-[#6344F5]/30 group">
                                    Bizimlə Əlaqə
                                    <ArrowUpRight size={18} className="group-hover:translate-x-1 font-medium  group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <section className={`py-[80px] overflow-hidden ${poppins.className}`}>
                <div className="max-w-[900px] mx-auto px-[15px]">

                    {/* Başlıq hissəsi */}
                    <div className="text-center mb-[60px]">
                        <h2 className="text-[#170F49] text-[48px] font-bold mb-[12px] leading-[1.2]">
                            İş Prosesimiz
                        </h2>
                        <p className="text-[#6F6C90] text-[18px] leading-[1.6]">
                            Layihənizi konseptdən reallığa necə çeviririk?
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">

                        {/* Mərkəzi Xətt */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1.5px] bg-[#EFF0F6] z-0 hidden lg:block"></div>

                        <div className="space-y-[40px] lg:space-y-0">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={`relative flex items-center justify-between w-full lg:mb-[60px] last:mb-0 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                                        }`}
                                >
                                    {/* Boş tərəf - Balans üçün */}
                                    <div className="hidden lg:block w-[50%]"></div>

                                    {/* Mərkəzi İkon */}
                                    <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
                                        <div className="w-[48px] h-[48px] bg-[#6344F5] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(99,68,245,0.3)] border-[4px] border-white">
                                            {React.cloneElement(step.icon, { size: 20 })}
                                        </div>
                                    </div>

                                    {/* Kart Hissəsi - Sabit ölçülər tətbiq edildi */}
                                    <div className={`w-full lg:w-[50%] flex ${index % 2 === 0 ? 'lg:justify-start lg:pr-[40px]' : 'lg:justify-end lg:pl-[40px]'
                                        } pl-[60px] lg:pl-0`}>
                                        <div className="bg-white p-[20px] md:p-[24px] w-full max-w-[370px] h-[160px] rounded-[30px] shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#F8F9FB] transition-all duration-300 hover:shadow-lg flex flex-col justify-center overflow-hidden">
                                            <span className="text-[#6344F5] font-bold text-[18px] mb-[8px] block">
                                                {step.id}. {step.title}
                                            </span>
                                            <p className="text-[#6F6C90] text-[14px] md:text-[15px] leading-[1.5] line-clamp-3">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}