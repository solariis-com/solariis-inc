import { WhySolariis, WhoWeAre, OurServices1, Ideas, Contact, Footer } from "./imports/SectionsHomepage";
import Nav from "./components/Nav";
import HeroWithGradient from "./components/HeroWithGradient";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <Nav />
      
      <div className="w-full">
        {/* Hero Section */}
        <HeroWithGradient />
        
        {/* Why Solariis Section - "Por Qué Brillar con Solariis" */}
        <WhySolariis />
        
        {/* Who We Are Section - "Quiénes Somos" */}
        <WhoWeAre />
        
        {/* Our Services Section - "Nuestros Servicios" */}
        <OurServices1 />
        
        {/* Ideas Gallery Section - Interactive service cards */}
        <Ideas />
        
        {/* Contact Section - Contact form */}
        <Contact />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}
