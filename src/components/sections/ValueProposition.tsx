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
        <div className="text-center mb-12">
          <h2 className="mb-6 text-black font-heading text-h2">
            {t.valueProposition.title}
          </h2>
          <p className="body-large max-w-3xl mx-auto text-[#666666]">
            {t.valueProposition.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-[#FAFAFA] hover:shadow-md transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#000000] mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="mb-4 text-black font-heading text-h4">
                {value.title}
              </h3>

              <p className="body-small text-[#666666] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
