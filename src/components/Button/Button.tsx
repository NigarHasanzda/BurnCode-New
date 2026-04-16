"use client";

import React, { useRef } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

interface ButtonProps {
  text?: string;
  path?: string; 
  className?: string;
  onClick?: () => void;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const Button = ({ text = "  ", path, className = "", onClick }: ButtonProps) => {

  const stableText = useRef(text);

  // w-full (mobildə 100%), sm:w-fit (tabletdən etibarən mətndən asılı ölçü)
  const buttonStyles = `inline-flex items-center justify-center gap-2 px-8 py-4 
  w-full sm:w-fit
  bg-[#6045FD] ${poppins.className}
  text-white rounded-full font-medium md:text-[15px] transition-all 
  active:scale-95 hover:brightness-110 ${className}`;

  const Icon = <ArrowOutwardIcon sx={{ fontSize: 20 }} />;

  if (path) {
    return (
      <Link href={path} className={buttonStyles}>
        {stableText.current} {Icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {stableText.current} {Icon}
    </button>
  )
}

export default Button;