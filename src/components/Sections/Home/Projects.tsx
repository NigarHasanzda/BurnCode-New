"use client"
import React from 'react';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import BlogCard from '@/components/Cards/BlogCard';
import ProjectCard from '@/components/Cards/ProjectCard';
import Button from '@/components/Button/Button';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const projectdata = [
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/projects/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/projects/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/projects/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/projects/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/projects/nrich-dashboard"
    },
    {
        image: "/blog1.jpg",
        title: "NRICH Dashboard",
        category: "Veb inkişaf",
        technologies: ["Next.js", "Node.js"],
        description: "Bizneslər üçün idarəetmə dashboard platformasıdır; əməliyyatları, müştəriləri və performansı bir yerdən izləməyə imkan verir.",
        date: "8 MART 2026",
        path: "/projects/nrich-dashboard"
    }
];

const ProjectSection = () => {
  return (
    <section className={`${poppins.className} py-18 bg-[#F8F9FB] overflow-hidden`}>
      <div className="max-w-[1530px] mx-auto px-6 md:px-12">

        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#1D164D] text-[35px] md:text-[48px] font-bold text-center mb-16 tracking-tight"
        >
          Son Layihələrimiz
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectdata.map((project, index) => (
            <motion.div
              key={index}
              // Tək indeksli kartlar (0, 2, 4) soldan (-50px), cüt indeksli kartlar (1, 3, 5) sağdan (50px) gəlir
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, // Stagger effekti
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-20"
        >
          <Button
            text="Bütün Layihelər"
            path="/projects"
            className="px-10 py-5 text-[16px] font-bold"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;