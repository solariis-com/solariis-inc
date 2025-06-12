
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-gray-900 mb-6">
            Meet Your Connectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI agents specialized in different aspects of brand building, guided by senior human expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {connectors.map((connector, index) => (
            <div 
              key={index}
              className="bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 group-hover:bg-primary/5 rounded-full transition-colors duration-200">
                  <connector.icon className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors duration-200" />
                </div>
                
                <h3 className="font-heading text-xl text-gray-900">
                  {connector.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
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
