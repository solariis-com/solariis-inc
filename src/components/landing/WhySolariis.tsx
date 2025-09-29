
const WhySolariis = () => {
  const values = [
    {
      badge: "01",
      title: "Human-Led, AI-Enhanced",
      copy: "Senior strategists and creatives use AI to move faster, not replace human insight."
    },
    {
      badge: "02", 
      title: "Built for Speed",
      copy: "From idea to market in weeks, not months. Our AI accelerates every step."
    },
    {
      badge: "03",
      title: "Living Systems",
      copy: "Brands that evolve with your business through modular, scalable design systems."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl lg:text-5xl text-gray-800 mb-6">
            Why Solariis?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another agency. We're a creative operating system for founders building the future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="space-y-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white font-bold text-lg rounded-full">
                {value.badge}
              </div>
              
              <h3 className="font-heading text-2xl text-gray-800">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolariis;
