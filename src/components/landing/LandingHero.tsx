
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const LandingHero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <h1 className="font-heading text-6xl lg:text-7xl xl:text-8xl leading-tight text-gray-800">
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
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg font-medium transition-all duration-300 group"
            >
              Start Your Brand
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-square bg-gradient-to-br from-primary/10 to-teal/20 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/2402b619-b4b5-464a-b073-a3f87599ae58.png"
              alt="Creative Core AI"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
