import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Logo from '../Logo/Logo';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`  pt-26 pb-8 ${poppins.className}`}>
            <div className="max-w-[1600px] border-t border-gray-100 pt-15 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brend və Haqqında */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Logo/>
                        </div>
                        <p className="text-[#6F6C90] text-[16px] leading-relaxed max-w-[300px]">
                            Biznesinizi rəqəmsal dünyaya ən qabaqcıl texnologiyalar və peşəkar dizaynla daşıyırıq.
                        </p>
                    </div>

                    {/* Səhifələr */}
                    <div>
                        <h4 className="text-[#170F49] font-bold text-[18px] mb-6">Səhifələr</h4>
                        <ul className="space-y-4">
                            {['Ana səhifə', 'Haqqımızda', 'Xidmətlər', 'Bloq', 'Əlaqə'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[#6F6C90] hover:text-[#6344F5] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Xidmətlər */}
                    <div>
                        <h4 className="text-[#170F49] font-bold text-[18px] mb-6">Xidmətlər</h4>
                        <ul className="space-y-4">
                            {['Veb İnkişafı', 'Mobil Tətbiqlər', 'UI/UX Dizayn', 'SEO & Marketing', 'Data Analitika'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[#6F6C90] hover:text-[#6344F5] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Əlaqə */}
                    <div>
                        <h4 className="text-[#170F49] font-bold text-[18px] mb-6">Əlaqə</h4>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-3 text-[#6F6C90]">
                                <MapPin size={20} className="text-[#6344F5]" />
                                <span>Xətai pr. 2a</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#6F6C90]">
                                <Phone size={20} className="text-[#6344F5]" />
                                <span>+994 55 368 93 93</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#6F6C90]">
                                <Mail size={20} className="text-[#6344F5]" />
                                <span>info@burncode.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Alt Hissə - Copyright */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#6F6C90] text-[14px]">
                        © {currentYear} Burncode. Bütün hüquqlar qorunur.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[#6F6C90] text-[14px] hover:text-[#6344F5]">Məxfilik Siyasəti</Link>
                        <Link href="#" className="text-[#6F6C90] text-[14px] hover:text-[#6344F5]">İstifadə Şərtləri</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;