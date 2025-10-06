import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
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
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-black font-heading text-h4">
              {t.footer.companyInfo.title}
            </h3>
            <p className="body-small mb-4 text-[#666666] leading-relaxed">
              {t.footer.companyInfo.tagline}
            </p>
            <p className="body-small mb-6 text-[#666666] leading-relaxed">
              {t.footer.companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[#FF6A00]" />
                <span className="body-small text-black">
                  {t.footer.contact.email}
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-[#FF6A00]" />
                <span className="body-small text-black">
                  {t.footer.contact.phone}
                </span>
              </div>

              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-[#FF6A00]" />
                <span className="body-small text-black">
                  {t.footer.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-black font-heading text-h5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="body-small hover:text-[#FF6A00] transition-colors duration-300 text-[#666666]"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="body-small hover:text-[#FF6A00] transition-colors duration-300 text-[#666666]"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="body-small hover:text-[#FF6A00] transition-colors duration-300 text-[#666666]"
                >
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="body-small hover:text-[#FF6A00] transition-colors duration-300 text-[#666666]"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-black font-heading text-h5">
              {t.footer.social.title}
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg hover:scale-110 transition-all duration-300 bg-[#FF6A00] hover:bg-[#CC5500]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg hover:scale-110 transition-all duration-300 bg-[#FF6A00] hover:bg-[#CC5500]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg hover:scale-110 transition-all duration-300 bg-[#000000] hover:bg-[#FF6A00]"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#52342D]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="body-small mb-4 md:mb-0 text-[#666666]">
              {t.footer.copyright}
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="body-small hover:text-[#FF6A00] transition-colors duration-300 text-[#666666]"
              >
                {t.footer.privacyPolicy}
              </a>
              <a
                href="#"
                className="body-small hover:text-[#FF6A00] transition-colors duration-300 text-[#666666]"
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
