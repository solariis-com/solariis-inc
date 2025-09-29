
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Subscribe to a plan",
      description: "Choose Starter or Growth based on your needs and team size."
    },
    {
      number: "02", 
      title: "Add tasks to your board",
      description: "Submit unlimited requests through your dedicated project board."
    },
    {
      number: "03",
      title: "Work delivered in days",
      description: "Get high-quality deliverables in 2-5 days, not weeks."
    },
    {
      number: "04",
      title: "Revise or pause anytime",
      description: "Request changes or pause your subscription when needed."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            How it works
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Everything is handled by your creative Agents — AI-powered, human-guided.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {step.number}
              </div>
              <h3 className="font-heading text-xl text-text">
                {step.title}
              </h3>
              <p className="text-text-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
