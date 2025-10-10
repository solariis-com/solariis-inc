import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { StarIcon, MiscIcon, MoonIcon, CodeIcon, TriangleIcon, EllipseIcon } from "../icons/ServiceIcons";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      Icon: StarIcon,
      tag: "Brand Strategy",
      title: t.services.import.title,
      description: t.services.import.description
    },
    {
      Icon: MiscIcon,
      tag: "Fluid Branding",
      title: t.services.distribution.title,
      description: t.services.distribution.description
    },
    {
      Icon: MoonIcon,
      tag: "UX/UI Web & Mobile Apps",
      title: t.services.branding.title,
      description: t.services.branding.description
    },
    {
      Icon: CodeIcon,
      tag: "Creative & Content Lab",
      title: t.services.marketAnalysis.title,
      description: t.services.marketAnalysis.description
    },
    {
      Icon: TriangleIcon,
      tag: "AI & Innovation",
      title: t.services.creative.title,
      description: t.services.creative.description
    },
    {
      Icon: EllipseIcon,
      tag: "Brand Expansion & Partnerships",
      title: t.services.aiScouting.title,
      description: t.services.aiScouting.description
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-[95px] px-4 sm:px-6 lg:px-[120px] xl:px-[200px] bg-white overflow-clip">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 lg:mb-[64px]">
          <h2 className="mb-4 lg:mb-[15.405px] text-black font-['Rethink_Sans'] font-bold text-[32px] lg:text-[40px] leading-[38.4px]">
            {t.services.title}
          </h2>
          <p className="font-['Rethink_Sans'] font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28.8px] text-black max-w-[768px] mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-[24px] lg:gap-x-[32px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f2f4f7] p-8 lg:px-[32px] lg:py-[32px] lg:pb-[48px] rounded-[22px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 group flex flex-col gap-[15px] min-h-[384px]"
            >
              {/* Tag */}
              <div className="flex gap-[10px] items-start w-full">
                <div className="h-[34px] relative flex-shrink-0 max-w-full">
                  <div className="bg-white h-[26px] rounded-[50px] px-[12px] sm:px-[16.5px] flex items-center overflow-hidden max-w-full">
                    <ul className="list-disc list-inside">
                      <li className="font-['Rethink_Sans'] font-normal text-[9px] sm:text-[11px] leading-[16px] text-black truncate">
                        {service.tag}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="flex flex-col gap-[10px] h-[70px] items-center justify-center w-full">
                <div className="flex items-center justify-center">
                  <service.Icon />
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-[10px] items-center text-center">
                <h3 className="font-['Rethink_Sans'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[33.6px] text-black">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex flex-col items-start">
                <p className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
