import { Package, Truck, Palette, BarChart3, Megaphone, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Package,
      title: t.services.import.title,
      description: t.services.import.description
    },
    {
      icon: Truck,
      title: t.services.distribution.title,
      description: t.services.distribution.description
    },
    {
      icon: Palette,
      title: t.services.branding.title,
      description: t.services.branding.description
    },
    {
      icon: BarChart3,
      title: t.services.marketAnalysis.title,
      description: t.services.marketAnalysis.description
    },
    {
      icon: Megaphone,
      title: t.services.creative.title,
      description: t.services.creative.description
    },
    {
      icon: Search,
      title: t.services.aiScouting.title,
      description: t.services.aiScouting.description
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-black font-heading text-h2">
            {t.services.title}
          </h2>
          <p className="body-large max-w-3xl mx-auto text-[#666666]">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FF6A00] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-black font-heading text-h4 leading-tight">
                  {service.title}
                </h3>
              </div>

              <p className="body-small text-[#666666] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
