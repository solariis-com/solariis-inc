
import { Brain, Target, TrendingUp, Palette, Zap } from "lucide-react";

const Connectors = () => {
  const connectors = [
    {
      icon: Brain,
      title: "Strategist",
      description: "Market positioning and brand strategy"
    },
    {
      icon: Palette,
      title: "Creative",
      description: "Visual identity and design systems"
    },
    {
      icon: TrendingUp,
      title: "Market Pulse",
      description: "Competitive intelligence and trends"
    },
    {
      icon: Target,
      title: "Design",
      description: "UI/UX and product design"
    },
    {
      icon: Zap,
      title: "AI Ops",
      description: "Automation and workflow optimization"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent-dark">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 text-text mb-6">
            Meet Your Connectors
          </h2>
          <p className="text-body-lg text-text-light max-w-3xl mx-auto">
            AI agents specialized in different aspects of brand building, guided by senior human expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {connectors.map((connector, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-transparent hover:border-primary hover:ring-2 hover:ring-primary/20 transition-all duration-300 group"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-dark group-hover:bg-primary/10 rounded-full transition-colors duration-300">
                  <connector.icon className="w-8 h-8 text-text group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="font-heading text-h4 text-text">
                  {connector.title}
                </h3>
                
                <p className="text-body-sm text-text-light leading-relaxed">
                  {connector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connectors;
