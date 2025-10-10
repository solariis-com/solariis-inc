import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 lg:py-[47px] px-4 sm:px-6 lg:px-[120px] xl:px-[200px] bg-neutral-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 font-['Rethink_Sans'] font-normal text-[24px] lg:text-[28px] leading-[33.6px] lg:leading-[36.4px] text-black">
              {t.footer.companyInfo.title}
            </h3>
            <p className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666] mb-4">
              {t.footer.companyInfo.tagline}
            </p>
            <p className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666] mb-6">
              {t.footer.companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6A00]" />
                <span className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-black">
                  {t.footer.contact.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6A00]" />
                <span className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-black">
                  {t.footer.contact.phone}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FF6A00]" />
                <span className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-black">
                  {t.footer.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-['Rethink_Sans'] font-normal text-[20px] lg:text-[24px] leading-[28px] lg:leading-[33.6px] text-black">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666] hover:text-[#FF6A00] transition-colors duration-300"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666] hover:text-[#FF6A00] transition-colors duration-300"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666] hover:text-[#FF6A00] transition-colors duration-300"
                >
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-['Rethink_Sans'] font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-[#666666] hover:text-[#FF6A00] transition-colors duration-300"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Rethink_Sans'] font-normal text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-[#666666]">
              {t.footer.copyright}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <a
                href="#"
                className="font-['Rethink_Sans'] font-normal text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-[#666666] hover:text-[#FF6A00] transition-colors duration-300"
              >
                {t.footer.privacyPolicy}
              </a>
              <a
                href="#"
                className="font-['Rethink_Sans'] font-normal text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-[#666666] hover:text-[#FF6A00] transition-colors duration-300"
              >
                {t.footer.termsOfService}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
