"use client";

import React, { useRef } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

interface ButtonProps {
  text?: string;
  path?: string; 
  className?: string;
  onClick?: () => void;
}

const Button = ({ text = "  ", path, className = "", onClick }: ButtonProps) => {

  const stableText = useRef(text);

  const buttonStyles = `inline-flex items-center justify-center gap-2 px-8 py-4 
  bg-[linear-gradient(0deg,rgba(74,58,255,1)_0%,rgba(137,127,255,0.94)_100%,rgba(255,255,255,1)_100%)] 
  text-white rounded-full font-[600] text-[15px] shadow-lg shadow-indigo-200/50 transition-all 
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