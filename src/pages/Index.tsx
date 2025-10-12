import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import WhySolariisSection from "../components/sections/WhySolariisSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { IdeasSection } from "../components/sections/IdeasSection";
import { ContactSection } from "../components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <HeroSection />
      <WhySolariisSection />
      <ServicesSection />
      <IdeasSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;