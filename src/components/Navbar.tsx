import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../assets/logo.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.products },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <div
        className={`transition-all duration-500 ease-out transform bg-white/90 backdrop-blur-md shadow-2xl border border-black/5 ${isScrolled ? 'scale-95' : ''
          } rounded-full px-6 py-3 max-w-4xl w-full`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center group"
            >
              <div className="h-14 transition-all duration-300 group-hover:scale-105">
                <img
                  src={logo}
                  alt="Solariis Complete Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20 font-body"
                style={{
                  fontWeight: '400',
                  fontSize: '0.9rem',
                  color: '#000000'
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20"
                style={{ color: '#000000' }}>
                <Globe size={18} />
                <span className="ml-1 text-sm">{language.toUpperCase()}</span>
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

            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-2 rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                backgroundColor: '#FF6A00',
                color: '#FFFFFF',
                fontSize: '0.9rem'
              }}
            >
              {t.nav.partnerWithUs}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full transition-all duration-200 hover:bg-white/20"
              style={{ color: '#000000' }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="fixed top-20 left-4 right-4 md:hidden">
          <div
            className="transition-all duration-300 transform bg-white/95 backdrop-blur-md shadow-2xl border border-black/5 rounded-2xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 rounded-xl transition-all duration-200 hover:bg-white/20 font-body"
                  style={{
                    fontWeight: '400',
                    color: '#000000'
                  }}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-4 px-4 py-3">
                <button
                  onClick={() => setLanguage('en')}
                  className={`font-body transition-colors ${language === 'en' ? 'font-semibold' : ''
                    }`}
                  style={{ color: '#000000' }}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`font-body transition-colors ${language === 'es' ? 'font-semibold' : ''
                    }`}
                  style={{ color: '#000000' }}
                >
                  Español
                </button>
              </div>

              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 rounded-xl"
                style={{
                  backgroundColor: '#FF6A00',
                  color: '#FFFFFF'
                }}
              >
                {t.nav.partnerWithUs}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;