import { Users, Globe, Brain, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export function ValueProposition() {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: Users,
      title: t.valueProposition.culturalBridge.title,
      description: t.valueProposition.culturalBridge.description
    },
    {
      icon: Globe,
      title: t.valueProposition.regulatoryExpertise.title,
      description: t.valueProposition.regulatoryExpertise.description
    },
    {
      icon: Brain,
      title: t.valueProposition.aiPowered.title,
      description: t.valueProposition.aiPowered.description
    },
    {
      icon: Palette,
      title: t.valueProposition.creativeSolutions.title,
      description: t.valueProposition.creativeSolutions.description
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-8 text-black font-heading" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: '400', lineHeight: '1.3' }}>
            {t.valueProposition.title}
          </h2>
          <p className="body-large max-w-2xl mx-auto text-[#666666]">
            {t.valueProposition.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-[#F8F8F8] hover:bg-[#F5F5F5] transition-all duration-300 group"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: index % 2 === 0 ? '#FF6A00' : '#000000' }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="mb-3 text-black font-heading text-h4">
                {value.title}
              </h3>

              <p className="body-small text-[#666666]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
