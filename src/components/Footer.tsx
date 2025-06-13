
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LogoSvg from "../assets/logo.svg";
import { InlineWidget } from "react-calendly";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text mb-4 tracking-tight">
            Let's Build Smarter
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Start your subscription today — or reach out with questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          
          {/* Calendly Widget */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold text-text mb-8">Schedule a Meeting</h3>
            <div className="h-[600px] bg-white border border-gray-200">
              <InlineWidget 
                url="https://calendly.com/solariis-info/30min"
                styles={{
                  height: '100%',
                  width: '100%'
                }}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-text mb-8">Direct Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">Email</p>
                  <a href="mailto:hello@solariis.agency" className="text-text-light hover:text-primary transition-colors">
                    hello@solariis.agency
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">WhatsApp</p>
                  <a 
                    href="https://wa.me/584120907684" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-light hover:text-primary transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-text-light">
                <span className="font-medium text-text">Response Time:</span><br />
                Usually within 2-4 hours during business hours (EST)
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src={LogoSvg} alt="Solariis Logo" className="w-32 h-auto" />
            </div>
            <p className="text-text-light text-sm">
              © 2025 Solariis Venezuela C.A. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
