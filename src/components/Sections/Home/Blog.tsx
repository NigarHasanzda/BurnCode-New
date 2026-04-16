"use client"
import React, { useEffect } from 'react';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import BlogCard from '@/components/Cards/BlogCard';
import Button from '@/components/Button/Button';
import { getBlogPosts } from '@/services/Blog';

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
];

const BlogSection = () => {

  useEffect(() => {
     const fetchData = async () => {
       try {
         const data = await getBlogPosts(1, "en");
         console.log("BLOG DATA:", data.data);
       } catch (error) {
         console.error("ERROR:", error);
       }
     };
  
     fetchData();
   }, []);
  return (
    <section className={`${poppins.className} py-15 md:py-24 bg-[#F8F9FB] overflow-hidden`}>
      <div className="max-w-[1530px] mx-auto px-6 md:px-12">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#1D164D] text-[35px] md:text-[48px] font-semibold text-center mb-16 tracking-tight"
          >
          Bloq
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index % 3 * 0.15, // Grid sətirləri üçün ardıcıl delay
                ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out
              }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-20"
        >
          <Button
            text="Bütün bloglar"
            path="/blog"
            className="px-10 py-5 text-[16px] font-bold"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;