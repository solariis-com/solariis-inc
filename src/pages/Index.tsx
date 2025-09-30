
import { Navbar, Footer } from "@/components/layout";
import { Hero, HowItWorks, Services, Pricing, FAQ } from "@/features/landing";

const Index = () => {
  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
