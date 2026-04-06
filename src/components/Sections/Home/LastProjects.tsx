"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import ProjectCard from '@/components/Cards/ProjectCard'
import Button from '@/components/Button/Button'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
})

const projectsData = [
  {
    title: "NRICH Dashboard",
    category: "Veb Sayt",
    description: "Azərbaycanda ilk tam avtomatlaşdırılmış e-ticarət həlli. 100K+ aktiv istifadəçi.",
    tags: ["Node.js", "Nextjs", "PostgreSQL"],
    image: "/projects.png", 
    isReversed: false
  },
  {
    title: "Burncode App",
    category: "Veb Sayt",
    description: "Azərbaycanda ilk tam avtomatlaşdırılmış e-ticarət həlli. 100K+ aktiv istifadəçi.",
    tags: ["Nextjs", "Node.js", "PostgreSQL"],
    image: "/projects.png",
    isReversed: true
  },
  {
    title: "Kaktus Booking App",
    category: "Veb Sayt",
    description: "Azərbaycanda ilk tam avtomatlaşdırılmış e-ticarət həlli. 100K+ aktiv istifadəçi.",
    tags: ["Node.js", "Nextjs", "PostgreSQL"],
    image: "/projects.png",
    isReversed: false
  }
]

const LastProjects = () => {
  return (
    <section className={`${poppins.className} py-24 bg-white`}>
      <div className="max-w-[1530px] mx-auto px-6 md:px-12">

        <div className="text-center mb-20">
          <h2 className={`text-[#1D164D] text-[36px] md:text-[48px] font-semibold tracking-tight ${poppins.className}`}>
            Son layihələrimiz
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Button text="Bütün layihələr" path="/projects" className="px-12 py-5" />
        </div>

      </div>
    </section>
  )
}

export default LastProjects;