
import { Brain, Target, TrendingUp, Palette, Zap } from "lucide-react";

const ConnectorRoles = () => {
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
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl lg:text-5xl text-gray-800 mb-6">
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
              className="bg-white p-8 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 group-hover:bg-primary/10 rounded-full transition-colors duration-300">
                  <connector.icon className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="font-heading text-xl text-gray-800">
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

export default ConnectorRoles;
