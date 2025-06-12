
const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/lovable-uploads/7acb4e9d-c852-4bb5-afa9-9e91be10a7c0.png",
      alt: "Brand Identity System"
    },
    {
      image: "/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png", 
      alt: "Strategic Framework"
    },
    {
      image: "/lovable-uploads/432c0ff8-3f4f-4199-a36a-8d63f851bd8a.png",
      alt: "Campaign Assets"
    },
    {
      image: "/lovable-uploads/bc578a58-dea8-4c91-9ac8-423c5d6b3ca4.png",
      alt: "Product Integration"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent-dark">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 text-text mb-6">
            Recent Work
          </h2>
          <p className="text-body-lg text-text-light">
            Brands we've brought to life with AI-enhanced creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white border border-accent-dark hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`${item.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
