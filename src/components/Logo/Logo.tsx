import React from 'react'

const Logo = () => {
  return (
    <div className='w-fit flex items-center justify-center gap-2 cursor-pointer'>
        <div className='relative w-[28px] h-[28px] md:w-[42px] md:h-[42px]'>
          <img 
            src="/logo.png" 
            alt="Burncode Logo"  
            className='w-full h-full'
          />
        </div>

        <h1 className='font-bold text-[20px] md:text-[28px] tracking-tight text-[#1A1A37]'>
          burncode
        </h1>
    </div>
  )
}

export default Logo