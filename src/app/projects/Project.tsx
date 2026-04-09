"use client"
import ProjectCard from '@/components/Cards/ProjectCard';
import EndSection from '@/components/HeroComponents/EndSection'
import HeroComponent from '@/components/HeroComponents/HeroComponents'
import { Poppins } from 'next/font/google';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Oxlar üçün

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    display: 'swap',
});

const Project = () => {
    const [activeTab, setActiveTab] = useState("Hamısı");
    const [currentPage, setCurrentPage] = useState(1); // Pagination üçün state


    const projectdata = [
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

    return (
        <>
            <HeroComponent
                breadcrumbParent="Ana səhifə"
                breadcrumbCurrent="Layihələrimiz"
                titleNormal="Bizim"
                titleColored="Layihələrimiz"
                description="İdeyadan reallaşdırmaya qədər bütün mərhələlərdə peşəkar komandamız sizinlədir."
            />

            <section className='max-w-[1600px] mx-auto px-3 md:px-7'>

                <div className='w-full md:w-[70%] mx-auto mb-16 mt-3 flex flex-wrap justify-center items-center gap-3 md:gap-4'>
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(cat)}
                            className={`${poppins.className} px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 cursor-pointer
                                ${activeTab === cat
                                    ? "bg-[#6344F5] text-white shadow-lg shadow-[#6344F5]/20"
                                    : "bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectdata.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>


                <div className="flex justify-center items-center gap-2 mt-16">
                    <button className="w-12 h-12 flex items-center justify-center rounded-[12px] bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5] transition-all cursor-pointer">
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={() => setCurrentPage(1)}
                        className={`w-12 h-12 flex items-center justify-center rounded-[12px] text-[15px] font-semibold transition-all cursor-pointer
                        ${currentPage === 1 
                            ? "bg-[#6344F5] text-white shadow-lg shadow-[#6344F5]/20" 
                            : "bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5]"}`}
                    >
                        1
                    </button>

                    <button 
                        onClick={() => setCurrentPage(2)}
                        className={`w-12 h-12 flex items-center justify-center rounded-[12px] text-[15px] font-semibold transition-all cursor-pointer
                        ${currentPage === 2 
                            ? "bg-[#6344F5] text-white shadow-lg shadow-[#6344F5]/20" 
                            : "bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5]"}`}
                    >
                        2
                    </button>

                    <button 
                        onClick={() => setCurrentPage(3)}
                        className={`w-12 h-12 flex items-center justify-center rounded-[12px] text-[15px] font-semibold transition-all cursor-pointer
                        ${currentPage === 3 
                            ? "bg-[#6344F5] text-white shadow-lg shadow-[#6344F5]/20" 
                            : "bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5]"}`}
                    >
                        3
                    </button>

                    {/* İrəli düyməsi */}
                    <button className="w-12 h-12 flex items-center justify-center rounded-[12px] bg-[#F3F4FB] text-[#596063] hover:bg-[#E8E9F5] transition-all cursor-pointer">
                        <ChevronRight size={20} />
                    </button>
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
    )
}

export default Project;