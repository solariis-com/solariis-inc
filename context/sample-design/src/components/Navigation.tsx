import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from 'figma:asset/d594796c144c809d4bf868f60096e2a73e6761cc.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <div 
        className={`transition-all duration-500 ease-out transform ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-2xl border border-black/5 scale-95' 
            : 'bg-transparent border-transparent shadow-none'
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
                  src={logoImage}
                  alt="Solariis Complete Logo with Artistic Element"
                  className="h-full w-auto object-contain"
                  style={{
                    filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20"
                style={{ 
                  fontFamily: 'Rethink Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: '0.9rem',
                  color: isScrolled ? '#000000' : '#FFFFFF'
                }}
              >
                {item.label}
              </button>
            ))}
            
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-2 rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                backgroundColor: isScrolled ? '#FF6A00' : '#FFFFFF',
                color: isScrolled ? '#FFFFFF' : '#FF6A00',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                if (isScrolled) {
                  e.currentTarget.style.backgroundColor = '#CC5500';
                  e.currentTarget.style.color = '#FFFFFF';
                } else {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.color = '#FFFFFF';
                }
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? '#FF6A00' : '#FFFFFF';
                e.currentTarget.style.color = isScrolled ? '#FFFFFF' : '#FF6A00';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Start Your Expansion
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full transition-all duration-200 hover:bg-white/20"
              style={{ color: isScrolled ? '#000000' : '#FFFFFF' }}
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
            className={`transition-all duration-300 transform ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-2xl border border-black/5' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg'
            } rounded-2xl p-6`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 rounded-xl transition-all duration-200 hover:bg-white/20"
                  style={{ 
                    fontFamily: 'Rethink Sans, sans-serif',
                    fontWeight: '400',
                    color: isScrolled ? '#000000' : '#FFFFFF'
                  }}
                >
                  {item.label}
                </button>
              ))}
              
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 rounded-xl"
                style={{
                  backgroundColor: '#FF6A00',
                  color: '#FFFFFF'
                }}
              >
                Start Your Expansion
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}