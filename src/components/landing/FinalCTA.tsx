
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="space-y-8 animate-fade-up">
          <h2 className="font-heading text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-800">
            Let's build
            <br />
            your <span className="text-primary">brand</span>.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to move from idea to market? Start with a strategy session where we'll map your brand's future.
          </p>
          
          <div className="pt-8 space-y-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-10 py-5 text-xl font-medium transition-all duration-300 group mr-4"
            >
              Start Your Project
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <div className="inline-block ml-4">
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary transition-colors duration-300 text-lg underline decoration-2 underline-offset-4"
              >
                Learn more about us
              </Link>
            </div>
          </div>
          
          <div className="pt-12 text-gray-500 text-sm">
            <p>Trusted by startups building the future</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
