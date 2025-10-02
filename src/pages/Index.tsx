import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import { ValueProposition } from "../components/sections/ValueProposition";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ContactSection } from "../components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;