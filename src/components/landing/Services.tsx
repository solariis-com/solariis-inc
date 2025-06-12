
import { Link } from "react-router-dom";
const Services = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-dark">
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
          <Link to="/categories" className="bg-green-500 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img alt="Brand & Identity" className="w-full h-full object-cover" src="https://cdn.midjourney.com/a5b8d896-9ca6-4e82-b720-43515bdae68f/0_1.png" />
            </div>
            <div className="relative z-10">
              <div className="text-white/80 text-sm">Services</div>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="text-white font-semibold">Brand & Identity</div>
              <div className="text-white/70 text-xs">Led by your Brand Agent — combining visual craft with strategic clarity.</div>
            </div>
          </Link>
          
          <Link to="/categories" className="bg-blue-600 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img alt="Research & Strategy" className="w-full h-full object-cover" src="https://cdn.midjourney.com/92b920b5-90d3-45ad-8444-d683ca275ebd/0_2.png" />
            </div>
            <div className="relative z-10">
              <div className="text-white/80 text-sm">Strategy</div>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="text-white font-semibold">Research & Strategy</div>
              <div className="text-white/70 text-xs">Powered by your Strategy Agent — delivering insight and positioning fast.</div>
            </div>
          </Link>
          
          <Link to="/categories" className="bg-pink-500 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img alt="Content & Campaigns" className="w-full h-full object-cover" src="https://cdn.midjourney.com/3e2b91b7-2126-41c3-b287-861042855364/0_2.png" />
            </div>
            <div className="relative z-10">
              <div className="text-white/80 text-sm">Content</div>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="text-white font-semibold">Content & Campaigns</div>
              <div className="text-white/70 text-xs">Created with your Content Agent — for headlines, launches, and voice.</div>
            </div>
          </Link>
          
          <Link to="/categories" className="bg-purple-600 rounded-3xl aspect-square p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img alt="Product & Automation" className="w-full h-full object-cover" src="https://cdn.midjourney.com/184f8d3b-da4e-4fe4-83ed-b2bacda08af8/0_3.png" />
            </div>
            <div className="relative z-10">
              <div className="text-white/80 text-sm">Systems</div>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="text-white font-semibold">Product & Automation</div>
              <div className="text-white/70 text-xs">Built by your Automation Agent — turning systems into solutions.</div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/categories" className="inline-flex items-center bg-primary text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>;
};
export default Services;
