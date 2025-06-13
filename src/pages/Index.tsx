
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/onepage/Hero";
import HowItWorks from "../components/onepage/HowItWorks";
import Services from "../components/onepage/Services";
import Pricing from "../components/onepage/Pricing";
import FAQ from "../components/onepage/FAQ";
import FinalCTA from "../components/onepage/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
