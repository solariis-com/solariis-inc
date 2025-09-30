
import LogoSvg from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={LogoSvg} alt="Solariis Logo" className="h-8 w-auto" />
          </div>
          <p className="text-text-light text-sm">
            © {new Date().getFullYear()} Solariis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
