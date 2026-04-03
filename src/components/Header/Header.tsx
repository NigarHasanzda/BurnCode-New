"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import { Menu, X } from 'lucide-react'
import Button from '../Button/Button'

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
    <header className="w-full bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 py-[32px] flex items-center justify-between">


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
        <div className="hidden lg:block">
          <Button
            text="Bizimlə əlaqə"
            className="px-4 py-2 text-[16px]"
          />
        </div>


        <button
          className="lg:hidden text-[#1A1A37]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`
        lg:hidden absolute top-full left-0 w-full bg-white border-t transition-all duration-300 overflow-hidden
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1A1A37] text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#6366F1] text-white py-4 rounded-xl text-center font-medium mt-2">
            Bizimlə əlaqə
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header