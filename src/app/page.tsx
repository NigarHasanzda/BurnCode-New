import Hero from "@/components/Sections/Home/Hero";
import LastProjects from "@/components/Sections/Home/LastProjects";
import Projects from "@/components/Sections/Home/Projects";
import Services from "@/components/Sections/Home/Services";
import WhyChooseUs from "@/components/Sections/Home/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (

    <>
    <Hero/>
    <WhyChooseUs/>
    <Services/>
    <LastProjects/>
    
    {/* <Projects/> */}
    </>
  );
}
