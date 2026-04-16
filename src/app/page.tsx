import EndSection from "@/components/HeroComponents/EndSection";
import BlogSection from "@/components/Sections/Home/Blog";
import FaqSection from "@/components/Sections/Home/FAQ";
import Hero from "@/components/Sections/Home/Hero";
import ProjectSection from "@/components/Sections/Home/Projects";
import Projects from "@/components/Sections/Home/Projects";
import Services from "@/components/Sections/Home/Services";
import WhyChooseUs from "@/components/Sections/Home/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (

    <section className="bg-[F8F9FB]">
      <Hero />
      <WhyChooseUs />
      <Services />

      <ProjectSection />
      <BlogSection />
      <FaqSection />
      <div className="md:px-48">
        <EndSection
          title="Hələ də sualınız var?"
          description="Əgər axtardığınızı tapa bilmədinizsə, dəstək komandamız 24/7 sizə kömək etməyə hazırdır. Bizimlə əlaqə saxlamaqdan çəkinməyin!"
          buttonText="Bizimlə Əlaqə"
          path="/contact"
        />
      </div>
    </section>
  );
}
