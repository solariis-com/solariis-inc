
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="space-y-8">
          <h2 className="font-heading text-display leading-tight text-text">
            Let's build
            <br />
            your <span className="text-primary">brand</span>.
          </h2>
          
          <p className="text-body-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Ready to move from idea to market? Start with a strategy session where we'll map your brand's future.
          </p>
          
          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-text hover:bg-primary text-white px-10 py-5 text-lg font-medium transition-colors duration-200 border-2 border-transparent hover:border-primary"
            >
              Start Your Project
            </Link>
          </div>
          
          <div className="pt-12 text-text-light text-caption">
            <p>Trusted by startups building the future</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
