
const PortfolioStrip = () => {
  const portfolioItems = [
    {
      image: "/lovable-uploads/7acb4e9d-c852-4bb5-afa9-9e91be10a7c0.png",
      title: "Brand Identity System",
      category: "Visual Identity"
    },
    {
      image: "/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png", 
      title: "Strategic Framework",
      category: "Strategy"
    },
    {
      image: "/lovable-uploads/432c0ff8-3f4f-4199-a36a-8d63f851bd8a.png",
      title: "Campaign Assets",
      category: "Content"
    },
    {
      image: "/lovable-uploads/bc578a58-dea8-4c91-9ac8-423c5d6b3ca4.png",
      title: "Product Integration",
      category: "Automation"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl lg:text-5xl text-gray-800 mb-6">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600">
            Brands we've brought to life with AI-enhanced creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`${item.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <p className="text-primary text-sm font-medium mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-heading text-lg text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStrip;
