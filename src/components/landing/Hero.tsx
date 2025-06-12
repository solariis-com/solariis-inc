
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-6xl lg:text-7xl leading-tight text-text tracking-tight max-w-4xl">
                AI-powered creative systems for visionary teams.
              </h1>
              
              <p className="text-xl text-text-light max-w-lg leading-relaxed mt-8">
                Strategic design, brand thinking, and automation — available in modular tiers.
              </p>
            </div>
            
            <div className="pt-4 space-y-4">
              <Link to="/categories" className="inline-flex items-center bg-text text-white px-8 py-4 text-lg font-medium hover:bg-text/90 transition-colors duration-200">
                Start Your Subscription
              </Link>
              
              <div className="space-y-2">
                <Link to="/categories" className="block text-text-light hover:text-text transition-colors duration-200 text-base underline">
                  See how it works
                </Link>
                
                <p className="text-sm text-text-light">
                  Flexible plans. Human taste. AI speed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary via-coral to-teal rounded-3xl overflow-hidden p-2">
              <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4">
                <img 
                  alt="Solariis Creative AI" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl" 
                  src="https://cdn.midjourney.com/795a7848-c6a6-4065-a97a-594117557ea3/0_2.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
