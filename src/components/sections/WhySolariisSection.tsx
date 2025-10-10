import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import card1 from "../../assets/images/why-solariis/Card 1.png";
import card2 from "../../assets/images/why-solariis/Component 2.png";
import card3 from "../../assets/images/why-solariis/Component 12.png";
import card4 from "../../assets/images/why-solariis/Component 13.png";

const WhySolariisSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const cards = [
    {
      title: t.valueProposition.culturalBridge.title,
      description: t.valueProposition.culturalBridge.description,
      image: card1
    },
    {
      title: t.valueProposition.regulatoryExpertise.title,
      description: t.valueProposition.regulatoryExpertise.description,
      image: card2
    },
    {
      title: t.valueProposition.aiPowered.title,
      description: t.valueProposition.aiPowered.description,
      image: card3
    },
    {
      title: t.valueProposition.creativeSolutions.title,
      description: t.valueProposition.creativeSolutions.description,
      image: card4
    }
  ];

  return (
    <section id="why-solariis" className="bg-white w-full py-16 lg:py-[76px] px-4 sm:px-6 lg:px-[84px]">
      <div className="max-w-[1753px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-[100px] text-center">
          <h2 className="font-['Rethink_Sans'] font-semibold text-[clamp(2rem,5vw,3rem)] lg:text-[48px] leading-[1.2] lg:leading-[57.6px] text-black mb-6 lg:mb-[31.3px]">
            {t.valueProposition.title}
          </h2>
          <div className="max-w-[672px]">
            <p className="font-['Rethink_Sans'] font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28.8px] text-[#666666]">
              {t.valueProposition.subtitle}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[32px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-[32px] lg:gap-[50px] items-center"
            >
              {/* Card Image */}
              <div className="h-[300px] lg:h-[400px] w-full relative rounded-[12px] overflow-hidden">
                <div className="absolute inset-0 bg-white" />
                <img
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                  src={card.image}
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-[24px] lg:gap-[32px] items-center text-center w-full px-4">
                <h3 className="font-['Rethink_Sans'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[33.6px] text-black">
                  {card.title}
                </h3>
                <p className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolariisSection;
