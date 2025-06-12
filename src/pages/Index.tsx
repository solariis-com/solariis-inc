
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Values from "../components/landing/Values";
import Services from "../components/landing/Services";
import Portfolio from "../components/landing/Portfolio";
import CTA from "../components/landing/CTA";

const Index = () => {
  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar />
      <Hero />
      <Values />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
