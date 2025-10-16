import { useLanguage } from "../../contexts/LanguageContext";

// Import the icon images
import visionIcon from "../../assets/images/who-we-are/Component 7.png";
import experienceIcon from "../../assets/images/who-we-are/Component 7-1.png";
import essenceIcon from "../../assets/images/who-we-are/Component 7-2.png";
import backgroundSvg from "../../assets/images/who-we-are/background.svg";

interface CardData {
  icon: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string[];
  descriptionEs: string[];
}

const cardsData: CardData[] = [
  {
    icon: visionIcon,
    titleEn: "Our Vision",
    titleEs: "Nuestra Visión",
    descriptionEn: [
      "To be the strategic partner that",
      "redefines how international brands",
      "connect with new markets,",
      "combining branding, innovation,",
      "and cultural knowledge to generate",
      "sustainable value and purposeful",
      "expansion."
    ],
    descriptionEs: [
      "Ser el socio estratégico que",
      "redefine cómo las marcas",
      "internacionales se conectan",
      "con nuevos mercados,",
      "combinando branding,",
      "innovación y conocimiento",
      "cultural para generar valor",
      "sostenible y expansión con",
      "propósito."
    ]
  },
  {
    icon: experienceIcon,
    titleEn: "Our Experience",
    titleEs: "Nuestra Experiencia",
    descriptionEn: [
      "The Solariis team has more than",
      "two decades of global experience",
      "in Branding, Strategy, Digital",
      "Design, UX/UI, Technology, and",
      "Communication. We have worked",
      "alongside leading brands and",
      "companies in Fintech, Blockchain,",
      "Consumer Goods, Health,",
      "Technology, and Entertainment,",
      "developing projects where",
      "creativity, strategy, and artificial",
      "intelligence converge to generate",
      "measurable and sustained growth."
    ],
    descriptionEs: [
      "El equipo de Solariis cuenta",
      "con más de dos décadas de",
      "trayectoria global en",
      "Branding, Estrategia, Diseño",
      "Digital, UX/UI, Tecnología y",
      "Comunicación. Hemos",
      "trabajado junto a marcas y",
      "empresas líderes en Fintech,",
      "Blockchain, Consumo",
      "Masivo, Salud, Tecnología y",
      "Entretenimiento,",
      "desarrollando proyectos",
      "donde la creatividad, la",
      "estrategia y la inteligencia",
      "artificial convergen para",
      "generar crecimiento",
      "medible y sostenido."
    ]
  },
  {
    icon: essenceIcon,
    titleEn: "Our Essence",
    titleEs: "Nuestra Esencia",
    descriptionEn: [
      "At Solariis, we transform",
      "experience into innovation.",
      "We design strategies, brands,",
      "and products driven by",
      "intelligence, creativity, and",
      "purpose, so that every",
      "expansion is a story of impact",
      "and genuine connection."
    ],
    descriptionEs: [
      "En Solariis, convertimos la",
      "experiencia en innovación.",
      "Diseñamos estrategias,",
      "marcas y productos",
      "impulsados por inteligencia,",
      "creatividad y propósito,",
      "para que cada expansión",
      "sea una historia de impacto",
      "y conexión real."
    ]
  }
];

const WhoWeAreSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <section className="relative w-full py-24 px-4 bg-[#f5f1ed] overflow-hidden">
      {/* Gradient overlay - from top left #F5F5F5 to bottom right #FFEDD5 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#FFEDD5] pointer-events-none" />

      {/* Background decorative element - SVG pattern stuck to right side, partially outside viewport */}
      <div className="absolute h-[1050px] -right-[400px] top-[33px] w-[1326px] pointer-events-none">
        <img
          src={backgroundSvg}
          alt=""
          className="block w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-heading text-[40px] font-semibold text-black text-center leading-tight">
            {isSpanish ? "Quiénes Somos" : "Who We Are"}
          </h2>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center mb-12 max-w-3xl mx-auto">
          <p className="font-body text-lg text-neutral-600 text-center leading-relaxed">
            {isSpanish ? (
              <>
                Solariis es una firma venezolana de expansión y representación de marcas internacionales.
                Unimos estrategia, creatividad y tecnología para ayudar a las marcas globales a
                establecerse, adaptarse y crecer en Venezuela, un mercado clave y en constante
                transformación dentro de Latinoamérica. Nuestro propósito: construir puentes entre lo
                global y lo local, con inteligencia, visión y autenticidad.
              </>
            ) : (
              <>
                Solariis is a Venezuelan firm specializing in expansion and representation of international brands.
                We unite strategy, creativity, and technology to help global brands establish themselves,
                adapt, and grow in Venezuela, a key and constantly evolving market within Latin America.
                Our purpose: to build bridges between the global and the local, with intelligence, vision,
                and authenticity.
              </>
            )}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8 pt-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[277px] min-h-[648px] p-8 flex flex-col items-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex-shrink-0">
                <img
                  src={card.icon}
                  alt={isSpanish ? card.titleEs : card.titleEn}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-body text-2xl text-black text-center mb-6 whitespace-pre-line">
                {isSpanish ? card.titleEs : card.titleEn}
              </h3>

              {/* Description */}
              <div className="font-body text-base text-neutral-600 text-center leading-6">
                {(isSpanish ? card.descriptionEs : card.descriptionEn).map((line, lineIndex) => (
                  <p key={lineIndex} className={lineIndex === card.descriptionEs.length - 1 ? "" : "mb-0"}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
