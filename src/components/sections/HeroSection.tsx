import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import heroImage from "../../assets/images/hero/hero.png";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-[32px] pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] lg:pt-[150px] lg:pb-[100px]">
      {/* Background Images */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={heroImage}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-orange-400/30 to-transparent" data-name="Gradient" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px]">
        <div className="flex gap-[48px] items-center justify-center w-full">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-[24px] items-start w-full lg:w-[492.8px]">
            <h1 className="font-['Rethink_Sans'] font-extrabold text-black text-[clamp(3rem,10vw,8rem)] lg:text-[128px] leading-[1.04] lg:leading-[133px] whitespace-pre-line">
              {t.hero.title}
            </h1>

            <div className="w-full max-w-[555px] pb-[8px]">
              <p className="font-['Rethink_Sans'] font-normal text-[clamp(1rem,1.5vw,1.125rem)] lg:text-[18px] leading-[28px] text-black">
                {t.hero.description}
              </p>
            </div>

            <Button
              className="bg-white text-black hover:bg-gray-100 h-[44px] px-[32px] py-[16px] text-[14px] leading-[20px] font-medium rounded-[6px] transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              {t.hero.cta.partner}
            </Button>
          </div>

          {/* Right side spacer - only visible on large screens */}
          <div className="hidden lg:block flex-1 min-h-px min-w-px" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;