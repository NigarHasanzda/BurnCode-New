"use client"
import BlogCard from '@/components/Cards/BlogCard';
import HeroComponent from '@/components/HeroComponents/HeroComponents';
import { Poppins } from 'next/font/google';
import React, { useState } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'; // İkonlar əlavə edildi
import EndSection from '@/components/HeroComponents/EndSection';

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


const categories = ["Hamısı", "Veb inkişaf", "Mobil tətbiq", "UI/UX Dizayn", "Rəqəmsal Marketinq"];

const Blog = () => {
    const [activeTab, setActiveTab] = useState("Hamısı");

    // Pagination üçün lazımi state-lər
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6; // Hər səhifədə göstəriləcək kart sayı

    // Səhifələmə məntiqi
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(blogData.length / postsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <HeroComponent
                breadcrumbParent="Ana səhifə"
                breadcrumbCurrent="Bloglar"
                titleNormal="Bizim"
                titleColored="Bloglarımız"
                description="İdeyadan reallaşdırmaya qədər bütün mərhələlərdə peşəkar komandamız sizinlədir."
            />

            <section className='max-w-[1550px] mx-auto'>
                <div>
                    <h2 className={`text-[#170F49] text-[24px] md:text-[32px] font-semibold leading-[4spx] mb-6 text-start  ${poppins.className}`}>
                        Ən Son Məqalələr
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogData.slice(0, 3).map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))}
                </div>
            </section>

            <section className='max-w-[1560px] mx-auto mt-22 px-4'>
                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-15'>
                    <div className="relative w-full md:w-[390px] ">
                        <span className="absolute inset-y-0 left-4 flex items-center pt-1">
                            <Search size={20} className="text-gray-400" />
                        </span>
                        <input
                            type="text"
                            placeholder="Məqalə axtar..."
                            className="w-full pl-12 pr-4 py-4 bg-white rounded-[12px] shadow-sm border border-transparent focus:border-[#6344F5] outline-none transition-all placeholder:text-[#9DA3A6] text-[16px] font-regular"
                        />
                    </div>
                    <div className='flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-3'>
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => { setActiveTab(cat); setCurrentPage(1); }}
                                className={`${poppins.className} px-7 py-3.5 rounded-4xl text-[14px] font-medium transition-all duration-300 cursor-pointer
                        ${activeTab === cat
                                        ? "bg-[#6344F5] text-white shadow-lg shadow-[#6344F5]/30"
                                        : "bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))}
                </div>

                {/* Pagination UI */}
                <div className="flex justify-center items-center gap-2 mt-16 mb-10">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-50 transition-all cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`w-12 h-12 rounded-xl font-medium transition-all cursor-pointer
                                ${currentPage === i + 1
                                    ? "bg-[#6344F5] text-white shadow-md"
                                    : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-50 transition-all cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>
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
        </>
    )
}

export default Blog;