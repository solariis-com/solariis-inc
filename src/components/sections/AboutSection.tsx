import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Brain, Palette, Globe } from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FEF9F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mb-6 text-black font-heading text-h2">
            {t.about.title}
          </h2>
          <p className="body-large text-[#666666] max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Nuestra Visión */}
          <div className="bg-white p-8 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFE5D3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-[#FF6A00]" />
            </div>
            <h3 className="mb-4 text-black font-heading text-h4">
              {t.about.features.aiDriven.title}
            </h3>
            <p className="body-small text-[#666666] leading-relaxed">
              {t.about.features.aiDriven.description}
            </p>
          </div>

          {/* Card 2 - Nuestra Experiencia */}
          <div className="bg-white p-8 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F0F0F0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-8 h-8 text-[#000000]" />
            </div>
            <h3 className="mb-4 text-black font-heading text-h4">
              {t.about.features.creative.title}
            </h3>
            <p className="body-small text-[#666666] leading-relaxed">
              {t.about.features.creative.description}
            </p>
          </div>

          {/* Card 3 - Nuestra Esencia */}
          <div className="bg-white p-8 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFE5D3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-[#FF6A00]" />
            </div>
            <h3 className="mb-4 text-black font-heading text-h4">
              {t.about.features.alwaysOn.title}
            </h3>
            <p className="body-small text-[#666666] leading-relaxed">
              {t.about.features.alwaysOn.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
