"use client";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import EducationDetails from "./components/EducationDetails";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import FunCorner from "./components/FunCorner";
import Navbar from "./components/Navbar";
import TechnicalStacks from "./components/TechnicalStacks";
import WhoAmI from "./components/WhoAmI";
import WorkExperience from "./components/WorkExperience";
import { useScroll } from "./context/ScrollContext";

export default function Home() {
  const {aboutRef, projectsRef, experienceRef, contactRef} = useScroll();
  return (
    <div className="flex flex-col">
      <div className="w-full h-full bg-gradient-to-b from-black to-[#171717] flex flex-col items-center px-6">
        <div className="py-4 sticky top-0">
          <Navbar/>
        </div>
        <About/>
      </div>
      <div ref={aboutRef} className="bg-[#262626] md:flex md:justify-center">
        <WhoAmI/>
      </div>
      <div>
        <TechnicalStacks/>
      </div>
      <div ref={experienceRef}>
        <WorkExperience/>
      </div>
      <div ref={projectsRef}>
        <FeaturedProjects/>
      </div>
      <div>
        <EducationDetails/>
      </div>
      <div>
        <FunCorner/>
      </div>
      <div ref={contactRef}>
        <ContactSection/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
