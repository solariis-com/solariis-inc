
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
      accent: "bg-gray-900",
      items: ["Workflow Automation", "Product Strategy", "Technical Support", "Scaling Operations"]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-gray-900 mb-6">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modular services that grow with your business, from startup to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${service.accent}`}></div>
                  <h3 className="font-heading text-2xl text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></div>
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
