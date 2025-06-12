
const Services = () => {
  const services = [
    {
      title: "Brand & Identity",
      description: "Strategy, visual identity, and brand systems that scale with your vision.",
      accent: "bg-primary",
      items: ["Brand Strategy", "Visual Identity", "Design Systems", "Brand Guidelines"]
    },
    {
      title: "Content & Campaigns", 
      description: "Compelling campaigns and content that convert prospects into believers.",
      accent: "bg-coral",
      items: ["Campaign Strategy", "Content Creation", "Brand Messaging", "Launch Support"]
    },
    {
      title: "Research & Strategy",
      description: "Market intelligence and positioning strategy powered by AI insights.",
      accent: "bg-teal",
      items: ["Market Research", "Competitive Analysis", "Strategic Positioning", "User Research"]
    },
    {
      title: "Product & Automation",
      description: "Technical implementation and automation to scale your operations.",
      accent: "bg-neutral-beige",
      items: ["Workflow Automation", "Product Strategy", "Technical Support", "Scaling Operations"]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 text-text mb-6">
            What We Build
          </h2>
          <p className="text-body-lg text-text-light max-w-3xl mx-auto">
            Modular services that grow with your business, from startup to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-accent-dark shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Color swatch top section */}
              <div className={`h-3 w-full ${service.accent}`}></div>
              
              <div className="p-8 space-y-6">
                <h3 className="font-heading text-h3 text-text">
                  {service.title}
                </h3>
                
                <p className="text-body text-text-light leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-body text-text-light">
                      <div className="w-1.5 h-1.5 bg-text-light rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
