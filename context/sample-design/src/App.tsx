import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}