
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="Solariis Logo" className="h-[61px] w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-text-light hover:text-text transition-colors"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-light hover:text-text transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-text-light hover:text-text transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-text-light hover:text-text transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-light hover:text-text transition-colors"
            >
              {t.nav.contact}
            </button>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-text-light hover:text-text transition-colors">
                <Globe size={20} />
                <span className="ml-1">{language.toUpperCase()}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="hover:bg-gray-100">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className="hover:bg-gray-100">
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-text hover:text-text-light transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-text-light hover:text-text transition-colors w-full text-left"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-text-light hover:text-text transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-text-light hover:text-text transition-colors w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-text-light hover:text-text transition-colors w-full text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-text-light hover:text-text transition-colors w-full text-left"
              >
                {t.nav.contact}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-text-light hover:text-text transition-colors ${
                      language === 'en' ? 'font-semibold text-text' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('es')}
                    className={`text-text-light hover:text-text transition-colors ${
                      language === 'es' ? 'font-semibold text-text' : ''
                    }`}
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
