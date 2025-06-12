
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-heading text-7xl lg:text-8xl leading-tight text-gray-900">
              We build
              <br />
              <span className="text-primary">living</span>
              <br />
              brands.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              AI-enhanced creative agency for founders who need brands that move as fast as their vision.
            </p>
            
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium transition-colors duration-200"
              >
                Start Your Brand
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/2402b619-b4b5-464a-b073-a3f87599ae58.png"
                alt="Creative Core AI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
