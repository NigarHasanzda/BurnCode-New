"use client"
import React from 'react';
import { Poppins } from 'next/font/google';
import BlogCard from '@/components/Cards/BlogCard';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const blogData = [
  {
    image: "/blog1.jpg",
    title: "Rəqəmsal Transformasiya",
    description: "Biznesinizi müasir texnologiyalarla gücləndirin və rəqabətdə bir addım öndə olun. Rəqəmsallaşma gələcəyin açarıdır.",
    date: "8 MART 2026",
    path: "/blog/reqemsal-transformasiya"
  },
  {
    image: "/blog1.jpg",
    title: "Süni İntellekt Trendləri",
    description: "2026-cı ildə AI dünyasında bizi nələr gözləyir? Ən son yeniliklər və biznesə təsirləri haqqında ətraflı.",
    date: "12 MART 2026",
    path: "/blog/ai-trendleri"
  },
  {
    image: "/blog1.jpg",
    title: "Kibertəhlükəsizlik",
    description: "Məlumatlarınızı qorumaq üçün ən effektiv üsullar. Müasir dövrün ən böyük təhdidlərinə qarşı hazır olun.",
    date: "15 MART 2026",
    path: "/blog/kibertehlukesizlik"
  },
    {
    image: "/blog1.jpg",
    title: "Rəqəmsal Transformasiya",
    description: "Biznesinizi müasir texnologiyalarla gücləndirin və rəqabətdə bir addım öndə olun. Rəqəmsallaşma gələcəyin açarıdır.",
    date: "8 MART 2026",
    path: "/blog/reqemsal-transformasiya"
  },
  {
    image: "/blog1.jpg",
    title: "Süni İntellekt Trendləri",
    description: "2026-cı ildə AI dünyasında bizi nələr gözləyir? Ən son yeniliklər və biznesə təsirləri haqqında ətraflı.",
    date: "12 MART 2026",
    path: "/blog/ai-trendleri"
  },
  {
    image: "/blog1.jpg",
    title: "Kibertəhlükəsizlik",
    description: "Məlumatlarınızı qorumaq üçün ən effektiv üsullar. Müasir dövrün ən böyük təhdidlərinə qarşı hazır olun.",
    date: "15 MART 2026",
    path: "/blog/kibertehlukesizlik"
  }
];

const BlogSection = () => {
  return (
    <section className={`${poppins.className} py-24 `}>
      <div className="max-w-[1530px] mx-auto px-6 md:px-12">
        
        <h2 className={`text-[#1D164D] text-[35px] md:text-[48px] font-semibold text-center mb-16 tracking-tight  ${poppins.className}`}>
          Bloq
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard 
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              path={blog.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;