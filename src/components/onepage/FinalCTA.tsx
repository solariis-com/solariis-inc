
const FinalCTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-text">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="space-y-8">
          <h2 className="font-heading text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Let's Build Smarter
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Start your subscription today — or reach out with questions.
          </p>
          
          <div className="space-y-4 pt-4">
            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center bg-primary text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Start Your Subscription
            </button>
            
            <div>
              <a 
                href="mailto:hello@solariis.agency"
                className="text-white/80 hover:text-white transition-colors duration-200 text-base underline"
              >
                Need a custom quote?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
