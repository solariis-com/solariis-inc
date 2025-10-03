import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Brain, Palette, Globe } from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 text-black">
          {t.about.title}
        </h2>

        <p className="body-large text-[#666666] max-w-3xl mx-auto">
          {t.about.description}
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-[#FF6A00]" />
            </div>
            <div className="display-text mb-3 text-[#FF6A00]" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
              {t.about.features.aiDriven.title}
            </div>
            <p className="body-small text-[#666666]">{t.about.features.aiDriven.description}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-8 h-8 text-[#000000]" />
            </div>
            <div className="display-text mb-3 text-black" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
              {t.about.features.creative.title}
            </div>
            <p className="body-small text-[#666666]">{t.about.features.creative.description}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-[#FF6A00]" />
            </div>
            <div className="display-text mb-3 text-[#FF6A00]" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
              {t.about.features.alwaysOn.title}
            </div>
            <p className="body-small text-[#666666]">{t.about.features.alwaysOn.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
