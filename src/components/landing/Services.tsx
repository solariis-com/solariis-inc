
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-dark">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            Everything you need to build and scale
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Modular services that grow with your vision — from startup to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link 
            to="/categories"
            className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-white/80 text-sm">Services</div>
            <div className="text-white font-semibold">Brand & Identity</div>
          </Link>
          
          <Link 
            to="/categories"
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-white/80 text-sm">Strategy</div>
            <div className="text-white font-semibold">Research & Strategy</div>
          </Link>
          
          <Link 
            to="/categories"
            className="bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-white/80 text-sm">Content</div>
            <div className="text-white font-semibold">Content & Campaigns</div>
          </Link>
          
          <Link 
            to="/categories"
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-white/80 text-sm">Systems</div>
            <div className="text-white font-semibold">Product & Automation</div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            to="/categories"
            className="inline-flex items-center bg-primary text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
