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

const mockBlogDetail = {
    id: 1,
    title: "NRICH ERP - İdman və Əyləncə Biznesləri üçün Ağıllı İdarəetmə Sistemi",
    image: "/blog1.jpg",
    body: `
    <h3 style="color: #170F49; font-weight: 600; margin-bottom: 12px; margin-top: 40px; font-family: inherit;">Layihə haqqında</h3>
    <p style="color: #596063; font-weight: 400; line-height: 1.8; margin-bottom: 24px;">NRICH ERP – İdman və Əyləncə Biznesləri üçün Ağıllı İdarəetmə Sistemi.</p>
    <p style="color: #596063; font-weight: 400; line-height: 1.8; margin-bottom: 24px;">NRICH ERP ABŞ-da uşaqlar və böyüklər üçün idman və əyləncə fəaliyyətləri təşkil edən şirkətlər üçün hazırlanmış müasir biznes idarəetmə platformasıdır.</p>

    <h3 style="color: #170F49; font-weight: 600; margin-bottom: 12px; margin-top: 40px; font-family: inherit;">Əsas funksiyalar</h3>
    <ul style="list-style: none; padding: 0; margin-bottom: 32px;">
        <li style="color: #596063; margin-bottom: 12px; padding-left: 28px; position: relative; line-height: 1.6;">
            <span style="position: absolute; left: 0; top: 10px; width: 8px; height: 8px; background-color: #6344F5; border-radius: 50%;"></span>
            Rezervasiya və tədbir idarəetməsi
        </li>
        <li style="color: #596063; margin-bottom: 12px; padding-left: 28px; position: relative; line-height: 1.6;">
            <span style="position: absolute; left: 0; top: 10px; width: 8px; height: 8px; background-color: #6344F5; border-radius: 50%;"></span>
            Müştəri idarəetməsi (CRM)
        </li>
    </ul>

    <h3 style="color: #170F49; font-weight: 600; margin-bottom: 12px; margin-top: 40px; font-family: inherit;">Problem</h3>
    <p style="color: #596063; font-weight: 400; line-height: 1.8; margin-bottom: 24px;">İdman və əyləncə sahəsində fəaliyyət göstərən bizneslər adətən əməliyyatlarını müxtəlif platformalar və ya manual üsullarla idarə edir.</p>
    `
};

export default function SingleBlog() {
    const socials = [
        { name: "facebook", icon: <FacebookIcon />, href: "#" },
        { name: "instagram", icon: <InstagramIcon />, href: "#" },
        { name: "linkedin", icon: <LinkedInIcon />, href: "#" },
        { name: "twitter", icon: <TwitterIcon />, href: "#" },
    ];

    return (
        <main className={`min-h-screen overflow-x-hidden ${poppins.className}`}>
            <DetailHeader
                title="Rəqəmsal Transformasiya"
                description="Layihənizi müzakirə etmək və ya suallarınızı cavablandırmaq üçün bizimlə əlaqə saxlayın."
                breadcrumbPath={[
                    { name: 'Ana səhifə', link: '/' }, 
                    { name: 'Layiheler', link: '/projects' }, 
                    { name: 'Rəqəmsal Transformasiya', link: null }
                ]}
            />

            <section className="py-8 md:py-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 items-start">
                        
                        {/* SOL TƏRƏF (Məzmun) */}
                        <div className="flex-1 w-full order-1">
                            {/* Ana Şəkil */}
                            <div className="relative mb-8 md:mb-12 overflow-hidden rounded-2xl md:rounded-[32px] shadow-sm aspect-video sm:aspect-[16/9] lg:max-h-[535px]">
                                <img
                                    src={mockBlogDetail.image}
                                    alt={mockBlogDetail.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Məqalə Body */}
                            <article className="mb-12">
                                <div className={`
                                    /* Mobildə fontları bir az kiçildir, desktopda (md) 20px və 18px edir */
                                    [&_h3]:text-[18px] md:[&_h3]:text-[20px] 
                                    [&_p]:text-[15px] md:[&_p]:text-[18px]
                                    [&_li]:text-[15px] md:[&_li]:text-[18px]
                                `}>
                                    <div dangerouslySetInnerHTML={{ __html: mockBlogDetail.body }} />
                                </div>
                            </article>

                        </div>

                        {/* SAĞ TƏRƏF (Sidebar) */}
                        <aside className="w-full lg:w-[380px] xl:w-[420px] order-2 lg:order-2">
                              <div className="sticky top-8 bg-white border border-[#EFF0F6] rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-sm">
                                <div className="space-y-5"> 
                                    <div className="space-y-1 pb-4 border-b border-[#EFF0F6]">
                                        <h4 className="text-[#1D165C] font-medium text-[13px] md:text-[16px] uppercase tracking-wider opacity-80">Müştəri</h4>
                                        <p className="text-[#6B7280] text-[15px] md:text-[18px]">Allan Flott</p>
                                    </div>
                                    <div className="space-y-1 pb-4 border-b border-[#EFF0F6]">
                                        <h4 className="text-[#1D165C] font-medium text-[13px] md:text-[16px] uppercase tracking-wider opacity-80">Xidmət</h4>
                                        <p className="text-[#6B7280] text-[15px] md:text-[18px]">Web & Mobile App</p>
                                    </div>
                                    <div className="space-y-1 pb-4 border-b border-[#EFF0F6]">
                                        <h4 className="text-[#1D165C] font-medium text-[13px] md:text-[16px] uppercase tracking-wider opacity-80">Texnologiyalar</h4>
                                        <p className="text-[#6B7280] text-[15px] md:text-[18px]">React, Node.js, Figma</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[#1D165C] font-medium text-[13px] md:text-[16px] uppercase tracking-wider opacity-80">Tarix</h4>
                                        <p className="text-[#6B7280] text-[15px] md:text-[18px]">5 Aprel, 2026</p>
                                    </div>
                                    <div className="pt-3">
                                        <button className="w-full flex items-center justify-center gap-2 bg-[#6344F5] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#4f35c9] active:scale-[0.98]">
                                            Veb sayta keçid
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <section className=' md:pb-15  '>
                <div className="max-w-[1480px] mx-auto">
                    <EndSection
                        title="Layihənizi müzakirə edək?"
                        description="Pulsuz məsləhət üçün bizimlə əlaqə saxlayın."
                        buttonText="Bizimlə Əlaqə"
                        path="/contact"
                    />
                </div>
            </section>
        </main>
    );
}