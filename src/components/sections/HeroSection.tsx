import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #FF6A00 0%, #E56B55 100%)'
        }}
      />

      {/* Optional Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_3fr] gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="display-text text-white mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-[64px]">
              {t.hero.title}
            </h1>

            <p className="body-large text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 text-sm md:text-base lg:text-lg">
              {t.hero.description}
            </p>

            <Button
              size="lg"
              className="bg-white text-[#FF6A00] hover:bg-[#000000] hover:text-white transition-all duration-300 px-8 py-4"
              onClick={scrollToContact}
            >
              {t.hero.cta.partner}
            </Button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center lg:justify-start order-1 md:order-2">
            <div
              className="relative w-full max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-2xl aspect-[4/3] overflow-hidden group hover:scale-105 transition-all duration-500 shadow-2xl"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'blob 8s ease-in-out infinite'
              }}
            >
              <img
                src="/lovable-uploads/2402b619-b4b5-464a-b073-a3f87599ae58.png"
                alt={t.hero.imageAlt || "Luxury beauty brand application showcasing premium cosmetics"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;