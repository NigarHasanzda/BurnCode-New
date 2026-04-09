"use client"
import HeroComponent from '@/components/HeroComponents/HeroComponents'
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Poppins } from 'next/font/google';
import EndSection from '@/components/HeroComponents/EndSection';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});
const Contact = () => {
    return (
        <>
            <HeroComponent
                breadcrumbParent="Ana səhifə"
                breadcrumbCurrent="Əlaqə"
                titleNormal="Bizimlə"
                titleColored="Əlaqə"
                description="İdeyadan reallaşdırmaya qədər bütün mərhələlərdə peşəkar komandamız sizinlədir."
            />

            <section className={`max-w-[1560px] mx-auto py-20 px-4 ${poppins.className}`}>
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sol Tərəf: Əlaqə Məlumatları */}
                    <div className="flex-1">
                        <h2 className="text-[#170F49] text-[36px] font-semibold leading-[48px] mb-4">Əlaqə Məlumatları</h2>
                        <p className="text-[#6F6C90] text-[18px] font-regular mb-10 max-w-[450px]">
                            Bizimlə əlaqə saxlayın və layihənizi rəqəmsal dünyaya daşımaq üçün ilk addımı atın.
                        </p>

                        <div className="space-y-6">
                            {/* Telefon */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#F3F1FF] rounded-full flex items-center justify-center text-[#6344F5]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[#170F49] font-medium text-[18px]">Telefon</h4>
                                    <p className="text-[#6F6C90] text-[16px] font-regular ">+994 50 123 45 67</p>
                                </div>
                            </div>

                            {/* E-poçt */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#F3F1FF] rounded-full flex items-center justify-center text-[#6344F5]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[#170F49] font-medium text-[18px]">E-poçt</h4>
                                    <p className="text-[#6F6C90] text-[16px] font-regular ">info@burncode.org</p>
                                </div>
                            </div>

                            {/* Ünvan */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#F3F1FF] rounded-full flex items-center justify-center text-[#6344F5]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[#170F49] font-medium text-[18px]">Ünvan</h4>
                                    <p className="text-[#6F6C90] text-[16px] font-regular ">Bakı ş., Nizami küç. 203, AF Business House</p>
                                </div>
                            </div>

                            {/* İş Saatları */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#F3F1FF] rounded-full flex items-center justify-center text-[#6344F5]">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[#170F49] font-medium text-[18px]">İş Saatları</h4>
                                    <p className="text-[#6F6C90] text-[16px] font-regular ">Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Xəritə Bölməsi */}
                        <div className="mt-10 bg-[#F3F1FF] p-6 rounded-[24px]">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-[#170F49] font-bold text-[18px]">Xəritə görüntüsü</h4>
                                <div className="w-8 h-8 bg-[#6344F5] rounded-full flex items-center justify-center text-white">
                                    <MapPin size={16} />
                                </div>
                            </div>
                            <div className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48623.00342374154!2d49.8192!3d40.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bdad344cf%3A0x13d2944c66046e96!2sBaku!5e0!3m2!1sen!2saz!4v1712660000000!5m2!1sen!2saz"
                                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"

                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Tərəf: Form */}
                    <div className="flex-1 bg-white p-8 md:p-12 rounded-[32px] shadow-xl border border-gray-50">
                        <h3 className="text-[#170F49] text-[30px] font-semibold mb-8">Pulsuz Konsultasiya Alın</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {/* Rəng #484555 olaraq hər yerdə eyniləşdirildi */}
                                    <label className="text-[#484555] font-medium text-[16px]">Ad</label>
                                    <input type="text" placeholder="Adınız" className="w-full p-4 bg-white border border-[#EFF0F6] mt-3 rounded-[12px] text-[#596063] text-[16px] font-regular outline-none focus:border-[#6344F5] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#484555] font-medium text-[16px]">Soyad</label>
                                    <input type="text" placeholder="Soyadınız" className="w-full p-4 bg-white border text-[#596063] text-[16px] font-regular border-[#EFF0F6] mt-3 rounded-[12px] outline-none focus:border-[#6344F5] transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#484555] font-medium text-[16px]">Telefon</label>
                                    <input type="text" placeholder="+994 XX XXX XX XX" className="w-full p-4 bg-white mt-3 border border-[#EFF0F6] rounded-[12px] outline-none focus:border-[#6344F5] transition-all text-[#596063] text-[16px] font-regular" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#484555] font-medium text-[16px]">E-poçt</label>
                                    <input type="email" placeholder="email@nümunə.com" className="w-full p-4 bg-white mt-3 border border-[#EFF0F6] rounded-[12px] outline-none focus:border-[#6344F5] transition-all text-[#596063] text-[16px] font-regular" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[#484555] font-medium text-[16px]">Mesajınız</label>
                                <textarea placeholder="Layihəniz haqqında qısa məlumat..." className="w-full p-4 min-h-[160px] bg-white border mt-6 border-[#EFF0F6] rounded-[12px] outline-none text-[#596063] text-[16px] font-regular focus:border-[#6344F5] transition-all resize-none"></textarea>
                            </div>

                            <button className="w-full bg-[#6344F5] text-white py-5 mt-19 rounded-full font-bold text-[18px] flex items-center justify-center gap-3 hover:bg-[#4F35C8] transition-all shadow-lg shadow-[#6344F5]/30 group">
                                Göndər
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>


            <section className='pt-30 '>
                <EndSection
                    title="Layihənizi müzakirə edək?"
                    description="Pulsuz məsləhət üçün bizimlə əlaqə saxlayın. Ehtiyaclarınızı dinləyək və sizə ən uyğun həlli təklif edək."
                    buttonText="Bizimlə Əlaqə"
                    path="/contact"
                />
            </section>

        </>
    )
}

export default Contact