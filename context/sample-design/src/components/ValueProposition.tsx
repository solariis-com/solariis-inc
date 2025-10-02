import { Users, Globe, Brain, Palette } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Cultural Bridge",
    description: "Connect with consumers through authentic cultural understanding and market insights."
  },
  {
    icon: Globe,
    title: "Regulatory Expertise", 
    description: "Navigate import regulations, customs, and compliance with confidence."
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Make smarter, faster decisions with data-driven insights and trend analysis."
  },
  {
    icon: Palette,
    title: "Creative Solutions",
    description: "Launch branding and marketing campaigns that resonate with local audiences."
  }
];

export function ValueProposition() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-8" style={{ color: '#000000', fontFamily: 'Julius Sans One, cursive', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: '400', lineHeight: '1.3' }}>
            Why Choose Solariis
          </h2>
          <p className="body-large max-w-2xl mx-auto" style={{ color: '#666666' }}>
            We combine global branding expertise with modern technology to help your brand succeed in Venezuela and Latin America.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-[#F8F8F8] hover:bg-[#F5F5F5] transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                   style={{ backgroundColor: index % 2 === 0 ? '#FF6A00' : '#000000' }}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="mb-3" style={{ color: '#000000' }}>
                {value.title}
              </h3>
              
              <p className="body-small" style={{ color: '#666666' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}