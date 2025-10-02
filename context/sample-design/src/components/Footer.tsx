import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="mb-4" style={{ color: '#000000' }}>
              Solariis Import
            </h3>
            <p className="body-small mb-4" style={{ color: '#666666' }}>
              Your Partner for International Brand Expansion
            </p>
            <p className="body-small mb-6" style={{ color: '#666666' }}>
              Solariis is your trusted gateway for expanding into Venezuela and Latin America — combining cultural insight, regulatory expertise, and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" style={{ color: '#FF6A00' }} />
                <span className="body-small" style={{ color: '#000000' }}>
                  hello@solariis.com
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" style={{ color: '#FF6A00' }} />
                <span className="body-small" style={{ color: '#000000' }}>
                  +58 212 555 0123
                </span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" style={{ color: '#FF6A00' }} />
                <span className="body-small" style={{ color: '#000000' }}>
                  Caracas, Venezuela
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ color: '#000000' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="body-small hover:underline transition-colors duration-200"
                  style={{ color: '#666666' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="body-small hover:underline transition-colors duration-200"
                  style={{ color: '#666666' }}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="body-small hover:underline transition-colors duration-200"
                  style={{ color: '#666666' }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="body-small hover:underline transition-colors duration-200"
                  style={{ color: '#666666' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="mb-4" style={{ color: '#000000' }}>
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: '#FF6A00' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              
              <a 
                href="#" 
                className="p-2 rounded-lg hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: '#CC5500' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              
              <a 
                href="#" 
                className="p-2 rounded-lg hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: '#000000' }}
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
            <p className="body-small mb-4 md:mb-0" style={{ color: '#666666' }}>
              © 2024 Solariis Import. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="body-small hover:underline transition-colors duration-200"
                style={{ color: '#666666' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="body-small hover:underline transition-colors duration-200"
                style={{ color: '#666666' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}