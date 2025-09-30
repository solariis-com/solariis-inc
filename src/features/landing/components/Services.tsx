import { designPhases } from "@/data/phaseData";
import PhaseCard from "./PhaseCard";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            Everything you need to build and scale
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Modular services that grow with your vision — from startup to scale.
          </p>
        </div>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {designPhases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center bg-primary text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Go to contact section"
          >
            Get Started
          </button>
        </div>

        {/* Progressive Journey Text */}
        <div className="mt-16 text-center">
          <p className="text-text-light text-sm max-w-2xl mx-auto">
            Each phase builds on the last — from strategic foundation to creative exploration,
            visual execution, systematic documentation, and ongoing activation.
            Mix and match services based on your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;