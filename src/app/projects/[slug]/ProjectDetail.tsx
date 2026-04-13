"use client";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Poppins } from 'next/font/google';
import { Calendar, Clock } from 'lucide-react';
import DetailHeader from "@/components/HeroComponents/DeatilHeader";
import EndSection from "@/components/HeroComponents/EndSection";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const trendingPosts = [
    { id: 1, title: "Lorem ipsum dolor sit amet consectetur. Rhoncus dui interdum amet ac congue.", date: "25 aprel, 2026", readTime: "14:50", image: "/blog1.jpg" },
    { id: 2, title: "Lorem ipsum dolor sit amet consectetur. Rhoncus dui interdum amet ac congue.", date: "25 aprel, 2026", readTime: "14:50", image: "/blog1.jpg" },
    { id: 3, title: "Lorem ipsum dolor sit amet consectetur. Rhoncus dui interdum amet ac congue.", date: "25 aprel, 2026", readTime: "14:50", image: "/blog1.jpg" },
    { id: 4, title: "Lorem ipsum dolor sit amet consectetur. Rhoncus dui interdum amet ac congue.", date: "25 aprel, 2026", readTime: "14:50", image: "/blog1.jpg" },
];

const mockBlogDetail = {
    id: 1,
    title: "Rəqəmsal Transformasiyada Dashboard-ların Önəmi",
    image: "/blog1.jpg",
    date: "8 MART 2026",
    body: `
    <p>Müasir biznes dünyasında məlumatların idarə edilməsi uğurun əsas açarıdır. Dashboard-lar mürəkkəb məlumatları vizuallaşdıraraq qərar qəbul etmə prosesini sürətləndirir.</p>
    <h3>Niyə Next.js və Node.js?</h3>
    <p>Performans və sürət baxımından bu texnologiyalar yüksək yüklü sistemlər üçün ideal seçimdir. Biz NRICH layihəsində məhz bu stack-dən istifadə edərək maksimal səmərəlilik əldə etdik.</p>
    <ul>
      <li>Real-vaxt rejimində monitorinq</li>
      <li>Fərdiləşdirilmiş hesabatlar</li>
      <li>Yüksək təhlükəsizlik standartları</li>
    </ul>
  `,
    author: "BurnCode Team"
};

const mockCategories = [
    { id: 1, name: "Veb inkişaf", slug: "veb-inkisaf" },
    { id: 2, name: "Texnologiya", slug: "texnologiya" },
    { id: 3, name: "UI/UX Dizayn", slug: "ui-ux" }
];

export default function SingleBlog() {

    const socials = [
        { name: "facebook", icon: <FacebookIcon />, href: "https://facebook.com" },
        { name: "instagram", icon: <InstagramIcon />, href: "https://instagram.com" },
        { name: "linkedin", icon: <LinkedInIcon />, href: "https://linkedin.com" },
        { name: "twitter", icon: <TwitterIcon />, href: "https://twitter.com" },
    ];

    return (
        <main className={` min-h-screen ${poppins.className}`}>

            <DetailHeader
                title="Rəqəmsal Transformasiya"
                description="Layihənizi müzakirə etmək və ya suallarınızı cavablandırmaq üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk."
                breadcrumbPath={[{ name: 'Ana səhifə', link: '/' }, { name: 'Bloq', link: '/blog' }, { name: 'Rəqəmsal Transformasiya', link: null }]}
            />


            <section className="py-16 md:py-24 ">
                <div className="max-w-[1500px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* SOL TƏRƏF - Əsas Məzmun */}
                        <div className="w-full lg:w-[65%]">
                            <div className="relative mb-12 h-[535px] overflow-hidden rounded-[32px] shadow-lg">
                                <img
                                    src={mockBlogDetail.image}
                                    alt={mockBlogDetail.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <article className="mb-16">
                                <div className="prose prose-lg max-w-none text-[#596063] leading-[1.8]   prose-p:mb-6   prose-strong:text-[#170F49]  [&>blockquote]:border-l-4 [&>blockquote]:border-[#6344F5] [&>blockquote]:bg-white [&>blockquote]:py-4 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#596063] [&>blockquote]:my-8">

                                    <p>Veb tətbiqləri geniş spektrli tapşırıq və problemlərə rahat və səmərəli həllər təqdim etməklə bizə müxtəlif yollarla kömək edə bilər...</p>

                                    <blockquote className="bg-none">
                                        "Performans artıq sadəcə bir seçim deyil, o, müasir veb tətbiqlərinin təməl sütunudur. 2024-cü ildə sürətli olmayan sayt, mövcud olmayan saytdır."
                                    </blockquote>

                                    <div dangerouslySetInnerHTML={{ __html: mockBlogDetail.body }} />
                                </div>
                            </article>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-[#EFF0F6]">
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex items-center gap-4 text-[#9DA3A6] text-[13px]">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> 13.10.2004</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> 13:56</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#596063] text-[16px] font-regular">Paylaş:</span>
                                    <div className="flex gap-2">
                                        {socials.map((social) => (
                                            <a key={social.name} href={social.href} className="w-8 h-8 rounded-[80px] bg-[#6045FD] text-[#ffffff] flex items-center justify-center hover:bg-[#6344F5] hover:text-white transition-all shadow-sm">
                                                {React.cloneElement(social.icon, { fontSize: "inherit", className: "w-5 h-5" })}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SAĞ TƏRƏF - SİDEBAR (Ən çox oxunanlar) */}
                        <div className={`w-full rounded-[32px] h-fit bg-white border border-gray-100 p-12 shadow-sm lg:w-[470px] lg:h-[530px] ${poppins.className}`}>
                            <div className="space-y-6">

                                {/* Müştəri */}
                                <div className="space-y-1">
                                    <h4 className="text-[#1D165C] font-medium text-[16px]">Müştəri</h4>
                                    <p className="text-[#6B7280] text-[18px] font-regular">Allan Flott</p>
                                    <div className="pt-4 border-b border-gray-100"></div>
                                </div>

                                {/* Xidmət */}
                                <div className="space-y-1">
                                    <h4 className="text-[#1D165C] font-medium text-[16px]">Xidmət</h4>
                                    <p className="text-[#6B7280] text-[18px] font-regular">Web & Mobile App</p>
                                    <div className="pt-4 border-b border-gray-100"></div>
                                </div>

                                {/* Texnologiyalar */}
                                <div className="space-y-1">
                                    <h4 className="text-[#1D165C] font-medium text-[16px]">Texnologiyalar</h4>
                                    <p className="text-[#6B7280] text-[18px] font-regular">React, Node.js, Figma</p>
                                    <div className="pt-4 border-b border-gray-100"></div>
                                </div>

                                {/* Tarix */}
                                <div className="space-y-1">
                                    <h4 className="text-[#1D165C] font-medium text-[16px]">Tarix</h4>
                                    <p className="text-[#6B7280] text-[18px] font-regular">5 Aprel, 2026</p>
                                </div>

                                {/* Düymə */}
                                <div className="pt-4">
                                    <button className="flex items-center justify-center gap-2 bg-[#6344F5] text-white px-6 py-3 rounded-full text-[14px] font-medium transition-all hover:bg-[#4f35c9] hover:shadow-lg w-fit">
                                        Veb sayta keçid
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='pt-30 px-42 '>
                <EndSection
                    title="Layihənizi müzakirə edək?"
                    description="Pulsuz məsləhət üçün bizimlə əlaqə saxlayın. Ehtiyaclarınızı dinləyək və sizə ən uyğun həlli təklif edək."
                    buttonText="Bizimlə Əlaqə"
                    path="/contact"
                />
            </section>
        </main>
    );
}