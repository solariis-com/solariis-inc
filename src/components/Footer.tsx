
import LogoSvg from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={LogoSvg} alt="Solariis Logo" className="w-32 h-auto" />
          </div>
          <p className="text-text-light text-sm">
            © 2025 Solariis Venezuela C.A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
