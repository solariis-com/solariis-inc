
const Values = () => {
  const values = [
    {
      title: "Human-Led, AI-Enhanced",
      copy: "Senior strategists and creatives use AI to move faster, not replace human insight."
    },
    {
      title: "Built for Speed", 
      copy: "From idea to market in weeks, not months. Our AI accelerates every step."
    },
    {
      title: "Living Systems",
      copy: "Brands that evolve with your business through modular, scalable design systems."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 text-text mb-6">
            Why Solariis?
          </h2>
          <p className="text-body-lg text-text-light max-w-3xl mx-auto">
            We're not just another agency. We're a creative operating system for founders building the future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 divide-x divide-accent-dark">
          {values.map((value, index) => (
            <div key={index} className="space-y-6 px-6 first:pl-0 last:pr-0">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              
              <h3 className="font-heading text-h3 text-text">
                {value.title}
              </h3>
              
              <p className="text-body text-text-light leading-relaxed">
                {value.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
