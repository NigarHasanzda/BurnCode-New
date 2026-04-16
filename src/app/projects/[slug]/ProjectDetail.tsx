"use client";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Poppins } from 'next/font/google';
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
                    {/* Ana konteyner flex-col (mobildə) və lg:flex-row (desktopda) */}
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        
                        {/* 1. ŞƏKİL - Mobildə ən yuxarıda (order-1) */}
                        <div className="w-full lg:flex-1 order-1">
                            <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] shadow-sm aspect-video sm:aspect-[16/9] lg:max-h-[535px]">
                                <img
                                    src={mockBlogDetail.image}
                                    alt={mockBlogDetail.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* 2. SİDEBAR KARTI - Mobildə şəklin altında (order-2), Desktopda sağda duracaq */}
                        <aside className="w-full lg:w-[380px] xl:w-[420px] order-2 lg:order-last">
                            <div className="lg:sticky lg:top-8 bg-white border border-[#EFF0F6] rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-sm">
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
                                        <button className="w-full bg-[#6344F5] text-white py-3.5 rounded-full text-sm font-medium hover:bg-[#4f35c9] transition-all">
                                            Veb sayta keçid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* 3. MƏTN (BODY) - Mobildə kartın altında (order-3), Desktopda isə şəklin altına keçməsi üçün */}
                        {/* Desktop üçün xüsusi tənzimləmə: lg:absolute və ya grid istifadə etmək olar, 
                            amma ən təmiz yol bu div-i lg:flex-1 içində şəkillə birgə saxlamaqdır.
                            Aşağıdakı həll həm mobil ardıcıllığı, həm desktop görünüşünü təmin edir. */}
                        
                        <div className="w-full lg:hidden order-3">
                             <article className="mb-12">
                                <div className="[&_h3]:text-[18px] [&_p]:text-[15px] [&_li]:text-[15px]">
                                    <div dangerouslySetInnerHTML={{ __html: mockBlogDetail.body }} />
                                </div>
                            </article>
                        </div>

                    </div>

                    {/* Desktop Body (Şəklin altında qalması üçün yalnız lg-də görünür) */}
                    <div className="hidden lg:block w-full lg:max-w-[calc(100%-420px-2.5rem)]">
                        <article className="mt-12 mb-12">
                            <div className="[&_h3]:text-[20px] [&_p]:text-[18px] [&_li]:text-[18px]">
                                <div dangerouslySetInnerHTML={{ __html: mockBlogDetail.body }} />
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className='md:pb-15'>
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