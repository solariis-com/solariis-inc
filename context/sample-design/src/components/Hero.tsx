import { Button } from "./ui/button";
import heroImage from 'figma:asset/1cff92535a64d6759d99b71e48f7dcabf4874b71.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #FF6A00 0%, #E56B55 100%)'
        }}
      />
      
      {/* Optional Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="display-text text-white mb-6 text-[64px]">
              Your Gateway to Venezuela & Latin America
            </h1>
            
            <p className="body-large text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              We help international brands expand with cultural insight, strategic partnerships, and AI-powered intelligence.
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-[#FF6A00] hover:bg-[#000000] hover:text-white transition-all duration-300 px-8 py-4"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Expansion
            </Button>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="flex justify-center lg:justify-start">
            <div 
              className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden group hover:scale-105 transition-all duration-500 shadow-2xl"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'blob 8s ease-in-out infinite'
              }}
            >
              <img 
                src={heroImage}
                alt="Luxury beauty brand application showcasing premium cosmetics, representing high-end international brands expanding into Latin American markets"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <style jsx>{`
                @keyframes blob {
                  0% {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                  }
                  33% {
                    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                  }
                  66% {
                    border-radius: 70% 30% 60% 40% / 40% 50% 60% 50%;
                  }
                  100% {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}