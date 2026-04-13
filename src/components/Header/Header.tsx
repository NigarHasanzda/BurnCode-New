"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import { Menu, MoveUpRight, X } from 'lucide-react'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Ana səhifə', href: '/' },
    { name: 'Xidmətlər', href: '/services' },
    { name: 'Layihələr', href: '/projects' },
    { name: 'Bloq', href: '/blog' },
    { name: 'Əlaqə', href: '/contact' },
  ]

  return (
    <header className="w-full relative z-50 ">
      <div className="max-w-[1630px] mx-auto px-6 py-[32px] flex items-center justify-between">

        <div className="flex-shrink-0">
          <Logo />
        </div>
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1A1A37] text-[16px] font-medium hover:text-[#6366F1] transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex justify-center">
          <button className="bg-[#6344F5] hover:bg-[#4F35C9] text-white px-5 py-2 rounded-full font-medium text-[15px] flex items-center gap-2 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            İdarə paneli 
          </button>
        </div>
        <button
          className="lg:hidden text-[#1A1A37] z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`
        lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out shadow-lg
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1A1A37] text-lg font-medium hover:text-[#6366F1] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#6366F1] text-white py-4 rounded-xl text-center font-medium mt-2 active:scale-[0.98] transition-transform">
            Bizimlə əlaqə
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header