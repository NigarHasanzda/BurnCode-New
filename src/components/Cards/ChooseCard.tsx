import React from 'react'



type ChooseCardProps = {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

const ChooseCard = ({ title, description, children, className = "" }: ChooseCardProps) => {
  return (
    <div className={`bg-white h-fit rounded-[32px] overflow-hidden flex flex-col border border-gray-100 shadow-[1px] transition-all hover:shadow-md ${className}`}>
      <div className="h-[190px] flex items-center justify-center  ">
        {children}
      </div>
      
      <div className="p-8 md:p-10 flex-grow">
        <h3 className="text-[#1D164D] text-[18px] md:text-[20px] font-semibold mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-[#596063] text-[14px] md:text-[16px] font-regular  leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ChooseCard