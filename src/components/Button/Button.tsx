import React from 'react'

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text = "Bizimlə əlaqə", className = "", onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      // Sənin verdiyin 0.94 opacity-li yeni gradient:
      className={`bg-[linear-gradient(0deg,rgba(74,58,255,1)_0%,rgba(137,127,255,0.94)_100%,rgba(255,255,255,1)_100%)] text-white rounded-full font-[600] shadow-lg shadow-indigo-200/50 transition-all active:scale-95 hover:brightness-110 ${className}`}
    >
      {text}
    </button>
  )
}

export default Button