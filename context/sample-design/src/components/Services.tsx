import { Package, Truck, Palette, BarChart3, Megaphone, Search } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Import Services",
    description: "Seamless customs, compliance, and logistics for international products."
  },
  {
    icon: Truck,
    title: "Distribution Solutions", 
    description: "Build your market presence with retail and fulfillment partnerships."
  },
  {
    icon: Palette,
    title: "Branding & Localization", 
    description: "Adapt your brand voice and identity for local audiences."
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Understand consumer behavior and uncover growth opportunities."
  },
  {
    icon: Megaphone,
    title: "Creative & Digital Campaigns",
    description: "Engage audiences through integrated storytelling across channels."
  },
  {
    icon: Search,
    title: "AI-Powered Scouting",
    description: "Identify new opportunities with advanced market intelligence."
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#000000' }}>
            Our Services
          </h2>
          <p className="body-large max-w-3xl mx-auto" style={{ color: '#000000' }}>
            From market entry strategy to full-scale brand activation, we provide comprehensive solutions for international brands looking to grow in Venezuela and Latin America.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#FF6A00' }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 style={{ color: '#000000' }}>
                  {service.title}
                </h3>
              </div>
              
              <p className="body-small" style={{ color: '#666666' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}