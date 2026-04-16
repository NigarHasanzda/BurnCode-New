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
import BlogCard from "@/components/Cards/BlogCard";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    display: 'swap',
});
const blogData = [
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/blog/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/blog/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/blog/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/blog/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/blog/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/blog/nrich-dashboard"
    },

];


const content = {
    header: {
        title: "Rəqəmsal Transformasiya",
        description: "Layihənizi müzakirə etmək və ya suallarınızı cavablandırmaq üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk.",
        breadcrumb: [
            { name: 'Ana səhifə', link: '/' },
            { name: 'Bloq', link: '/blog' },
            { name: 'Rəqəmsal Transformasiya', link: null }
        ]
    },
    sidebarTitle: "Ən çox oxunanlar",
    shareText: "Paylaş:",
    endSection: {
        title: "Layihənizi müzakirə edək?",
        description: "Pulsuz məsləhət üçün bizimlə əlaqə saxlayın. Ehtiyaclarınızı dinləyək və sizə ən uyğun həlli təklif edək.",
        buttonText: "Bizimlə Əlaqə",
        path: "/contact"
    },
    staticBodyText: "Veb tətbiqləri geniş spektrli tapşırıq və problemlərə rahat və səmərəli həllər təqdim etməklə bizə müxtəlif yollarla kömək edə bilər...",
    quote: "Performans artıq sadəcə bir seçim deyil, o, müasir veb tətbiqlərinin təməl sütunudur. 2024-cü ildə sürətli olmayan sayt, mövcud olmayan saytdır."
};

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
                title={content.header.title}
                description={content.header.description}
                breadcrumbPath={content.header.breadcrumb}
            />

            <section className="py-16 md:py-24 ">
                <div className="max-w-[1460px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        <div className="w-full lg:w-[65%]">
                            <div className="relative mb-12 overflow-hidden rounded-[32px] shadow-lg">
                                <img
                                    src={mockBlogDetail.image}
                                    alt={mockBlogDetail.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <article className="mb-16">
                                {/* Mobildə p mətni 14px edildi */}
                                <div className="prose prose-lg max-w-none text-[#596063] leading-[1.8] prose-p:mb-6 prose-p:text-[14px] md:prose-p:text-[18px] prose-strong:text-[#170F49] [&>blockquote]:border-l-4 [&>blockquote]:border-[#6344F5] [&>blockquote]:bg-white [&>blockquote]:py-4 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#596063] [&>blockquote]:my-8">
                                    <p className="text-[14px] md:text-[18px]">{content.staticBodyText}</p>

                                    <blockquote className="bg-none">
                                        "{content.quote}"
                                    </blockquote>

                                    <div dangerouslySetInnerHTML={{ __html: mockBlogDetail.body }} />
                                </div>
                            </article>

                            {/* Mobildə items-start (sola) çəkildi, mərkəzdən çıxarıldı */}
                            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6 pt-5 md:pt-10 border-t border-[#EFF0F6]">
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex items-center gap-4 text-[#9DA3A6] text-[14px]">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> 13.10.2004</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> 13:56</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#596063] text-[16px] md:text-[16px] font-regular">{content.shareText}</span>
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

                        <div className={`hidden lg:block w-full lg:w-[30%] ${poppins.className} `}>
                            <div className="sticky top-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-[2px] bg-[#6344F5]"></div>
                                    <h3 className={`${poppins.className} text-[#170F49] font-medium text-[20px] uppercase tracking-wider`}>
                                        {content.sidebarTitle}
                                    </h3>
                                </div>

                                <div className="space-y-8 p-4 rounded-3xl bg-[#FFFFFF] ">
                                    {trendingPosts.map((post) => (
                                        <div key={post.id} className="flex gap-4 group cursor-pointer">
                                            <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                                                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col justify-between">
                                                <h4 className="text-[#170F49] font-regular text-[14px] line-clamp-2 group-hover:text-[#6344F5] transition-colors">
                                                    {post.title}
                                                </h4>
                                                <div className="flex items-center gap-4 text-[#9DA3A6] text-[12px] font-regular">
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

            <section className='max-w-[1500px] mx-auto px-4 md:px-6 lg:px-8'>
                <div className="mt-10 md:mt-16">
                    <h2 className={`text-[#170F49] text-[24px] md:text-[32px] font-semibold mb-6 text-start ${poppins.className}`}>
                        Ən Son Məqalələr
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {blogData.slice(0, 3).map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>
            </section>

            <section className='pt-12 md:pt-30'>
                <EndSection
                    title={content.endSection.title}
                    description={content.endSection.description}
                    buttonText={content.endSection.buttonText}
                    path={content.endSection.path}
                />
            </section>
        </main>
    );
}