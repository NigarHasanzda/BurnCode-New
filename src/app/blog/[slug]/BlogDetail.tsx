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
    image: "/blog1.jpg", // Öz şəkil yolunu bura qoy
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

    // Sosial media linkləri üçün mock data
    const socials = [
        { name: "facebook", icon: <FacebookIcon />, href: "https://facebook.com" },
        { name: "instagram", icon: <InstagramIcon />, href: "https://instagram.com" },
        { name: "linkedin", icon: <LinkedInIcon />, href: "https://linkedin.com" },
        { name: "twitter", icon: <TwitterIcon />, href: "https://twitter.com" },
    ];

    return (
        <main className={`bg-white min-h-screen ${poppins.className}`}>

            <DetailHeader
                title="Rəqəmsal Transformasiya"
                description="Layihənizi müzakirə etmək və ya suallarınızı cavablandırmaq üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk."
                breadcrumbPath={[{ name: 'Ana səhifə', link: '/' }, { name: 'Bloq', link: '/blog' }, { name: 'Rəqəmsal Transformasiya', link: null }]}
            />


            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* SOL TƏRƏF - Əsas Məzmun */}
                        <div className="w-full lg:w-[65%]">
                            {/* Əsas Şəkil */}
                            <div className="relative mb-12 overflow-hidden rounded-[32px] shadow-lg">
                                <img
                                    src={mockBlogDetail.image}
                                    alt={mockBlogDetail.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Məqalə Mətni */}
                            <article className="mb-16">
                                <div className="prose prose-lg max-w-none text-[#596063] leading-[1.8]   prose-p:mb-6   prose-strong:text-[#170F49]  [&>blockquote]:border-l-4 [&>blockquote]:border-[#6344F5] [&>blockquote]:bg-white [&>blockquote]:py-4 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#596063] [&>blockquote]:my-8">

                                    <p>Veb tətbiqləri geniş spektrli tapşırıq və problemlərə rahat və səmərəli həllər təqdim etməklə bizə müxtəlif yollarla kömək edə bilər...</p>

                                    <blockquote>
                                        "Performans artıq sadəcə bir seçim deyil, o, müasir veb tətbiqlərinin təməl sütunudur. 2024-cü ildə sürətli olmayan sayt, mövcud olmayan saytdır."
                                    </blockquote>

                                    <div dangerouslySetInnerHTML={{ __html: mockBlogDetail.body }} />
                                </div>
                            </article>

                            {/* Kateqoriyalar və Paylaşım (Sənin verdiyin hissə) */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-[#EFF0F6]">
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex items-center gap-4 text-[#9DA3A6] text-[13px]">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> 13.10.2004</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> 13:56</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#170F49] font-semibold">Paylaş:</span>
                                    <div className="flex gap-2">
                                        {socials.map((social) => (
                                            <a key={social.name} href={social.href} className="w-10 h-10 rounded-xl bg-[#F3F4FB] text-[#6344F5] flex items-center justify-center hover:bg-[#6344F5] hover:text-white transition-all shadow-sm">
                                                {React.cloneElement(social.icon, { fontSize: "inherit", className: "w-5 h-5" })}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SAĞ TƏRƏF - SİDEBAR (Ən çox oxunanlar) */}
                        <div className="w-full lg:w-[35%]">
                            <div className="sticky top-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-[2px] bg-[#6344F5]"></div>
                                    <h3 className="text-[#170F49] font-bold text-[18px] uppercase tracking-wider">Ən çox oxunanlar</h3>
                                </div>

                                <div className="space-y-8">
                                    {trendingPosts.map((post) => (
                                        <div key={post.id} className="flex gap-4 group cursor-pointer">
                                            <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                                                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col justify-between">
                                                <h4 className="text-[#170F49] font-medium text-[15px] line-clamp-2 group-hover:text-[#6344F5] transition-colors">
                                                    {post.title}
                                                </h4>
                                                <div className="flex items-center gap-4 text-[#9DA3A6] text-[13px]">
                                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


                        <section className='pt-30 '>
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