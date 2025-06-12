
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingHero from "../components/landing/LandingHero";
import WhySolariis from "../components/landing/WhySolariis";
import ConnectorRoles from "../components/landing/ConnectorRoles";
import ServicesGrid from "../components/landing/ServicesGrid";
import PortfolioStrip from "../components/landing/PortfolioStrip";
import FinalCTA from "../components/landing/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar />
      <LandingHero />
      <WhySolariis />
      <ConnectorRoles />
      <ServicesGrid />
      <PortfolioStrip />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
