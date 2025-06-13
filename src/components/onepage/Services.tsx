
const Services = () => {
  const services = [
    {
      title: "Brand & Identity",
      description: "Naming, logos, and brand systems — handled by your Brand Agent.",
      gradient: "from-green-400 to-blue-500",
      image: "https://cdn.midjourney.com/a5b8d896-9ca6-4e82-b720-43515bdae68f/0_1.png"
    },
    {
      title: "Research & Strategy", 
      description: "Market intelligence and positioning — powered by your Strategy Agent.",
      gradient: "from-blue-600 to-purple-600",
      image: "https://cdn.midjourney.com/92b920b5-90d3-45ad-8444-d683ca275ebd/0_2.png"
    },
    {
      title: "Content & Campaigns",
      description: "Headlines, launches, and voice — created with your Content Agent.",
      gradient: "from-pink-500 to-red-500", 
      image: "https://cdn.midjourney.com/3e2b91b7-2126-41c3-b287-861042855364/0_2.png"
    },
    {
      title: "Product & Automation",
      description: "Systems and solutions — built by your Automation Agent.",
      gradient: "from-purple-600 to-blue-600",
      image: "https://cdn.midjourney.com/184f8d3b-da4e-4fe4-83ed-b2bacda08af8/0_3.png"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            What we build
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Modular services that grow with your vision — from startup to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${service.gradient} rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                  src={service.image} 
                />
              </div>
              <div className="relative z-10">
                <div className="text-white/80 text-sm">Services</div>
              </div>
              <div className="space-y-2 relative z-10">
                <div className="text-white font-semibold">{service.title}</div>
                <div className="text-white/70 text-xs">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
