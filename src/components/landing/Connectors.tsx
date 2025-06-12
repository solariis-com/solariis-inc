
const Connectors = () => {
  const features = [
    { title: "Design board", color: "bg-yellow-400", icon: "🎨" },
    { title: "Figma projects", color: "bg-blue-500", icon: "📐" },
    { title: "Fast delivery", color: "bg-purple-600", icon: "⚡" },
    { title: "Top-notch quality", color: "bg-pink-500", icon: "✨" },
    { title: "Flexible service", color: "bg-red-500", icon: "🔄" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
            It's
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Asynchronous, scalable, premium. The design team that's always on-demand when you need it, with fixed pricing. It's simply everything you need to level up your brand - no contracts, no employees.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className={`${feature.color} rounded-3xl h-32 w-full mb-4 flex items-center justify-center text-4xl`}>
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg text-text">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connectors;
