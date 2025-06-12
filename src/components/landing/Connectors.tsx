
import { Lightbulb, Palette, PenTool, Settings } from "lucide-react";

const Connectors = () => {
  const connectors = [
    { 
      title: "Brand Strategist Connector", 
      description: "Positioning, Naming",
      color: "bg-yellow-400", 
      icon: Lightbulb 
    },
    { 
      title: "Identity Designer Connector", 
      description: "Logos, Systems",
      color: "bg-blue-500", 
      icon: Palette 
    },
    { 
      title: "Content Connector", 
      description: "Campaigns, Voice, Copy",
      color: "bg-purple-600", 
      icon: PenTool 
    },
    { 
      title: "Systems Connector", 
      description: "Automation, Integrations",
      color: "bg-pink-500", 
      icon: Settings 
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            Meet the Connectors
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            GPT-powered agents supporting services delivered by senior creative experts. Each Connector specializes in accelerating specific aspects of your creative needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {connectors.map((connector, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${connector.color} rounded-3xl h-32 w-full mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                <connector.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-heading text-lg text-text mb-2">
                {connector.title}
              </h3>
              <p className="text-text-light text-sm">
                {connector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connectors;
