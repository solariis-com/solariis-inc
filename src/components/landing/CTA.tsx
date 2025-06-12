
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="space-y-8">
          <h2 className="font-heading text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900">
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
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 text-xl font-medium transition-colors duration-200 mr-4"
            >
              Start Your Project
            </Link>
            
            <div className="inline-block ml-4">
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg underline decoration-2 underline-offset-4"
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

export default CTA;
