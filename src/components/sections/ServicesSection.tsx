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
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-black">
            {t.services.title}
          </h2>
          <p className="body-large max-w-3xl mx-auto text-black">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#FF6A00' }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-black font-heading text-h4">
                  {service.title}
                </h3>
              </div>

              <p className="body-small text-[#666666]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
