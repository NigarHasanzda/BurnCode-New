import React from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const DetailHeader = ({ title, description, breadcrumbPath }: { title: string; description: string; breadcrumbPath: { name: string; link: string | null }[] }) => {
    return (
        <header className={`w-full pt-16 md:pt-29 text-center ${poppins.className}`}>
            <div className="max-w-[1200px] mx-auto px-4"> 
                <nav className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-[#EFF0F6] rounded-full mb-10 shadow-sm">
                    <ul className="flex items-center font-regular gap-2 text-[12px] md:text-[14px]">
                        {breadcrumbPath?.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {item.link ? (
                                    <>
                                        <Link 
                                            href={item.link} 
                                            className="text-[#596063] hover:text-[#6344F5] transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                        <span className="text-[#596063] text-[12px]">/</span>
                                    </>
                                ) : (
                                    <span className="text-[#170F49] font-medium">
                                        {item.name}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <h1 className="text-[#111827] text-[36px] md:text-[64px] font-semibold leading-tight mb-5">
                    {title}
                </h1>
                <p className="max-w-[800px] mx-auto text-[#6B7280] text-[14px] md:text-[18px] font-regular leading-relaxed">
                    {description}
                </p>

            </div>
        </header>
    );
};

export default DetailHeader;