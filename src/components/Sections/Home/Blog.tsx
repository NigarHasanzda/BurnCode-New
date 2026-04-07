"use client"
import React from 'react';
import { Poppins } from 'next/font/google';
import BlogCard from '@/components/Cards/BlogCard';
import Button from '@/components/Button/Button';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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
  
  
  // Digər datalar da eyni formatda...
];

const BlogSection = () => {
  return (
    <section className={`${poppins.className} py-24 bg-[#F8F9FB]`}>
      <div className="max-w-[1530px] mx-auto px-6 md:px-12">
        
        <h2 className="text-[#1D164D] text-[35px] md:text-[48px] font-bold text-center mb-16 tracking-tight">
          Bloq
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog, index) => (
            <BlogCard 
              key={index}
              {...blog} 
            />
          ))}
        </div>

                <div className="flex justify-center mt-20">
         <Button
            text="Bütün bloglar"
            path="/services"
            className="px-10 py-5 text-[16px] font-bold"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;