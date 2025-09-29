
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

const CategoryHero = () => {
  const { language } = useLanguage();
  const t = translations[language].categories;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/d29aa07d-0654-4c3a-80be-33656915a549.png")',
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <div className="animate-fade-up space-y-8 max-w-4xl text-center">
          <h1 className="font-heading text-display text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
