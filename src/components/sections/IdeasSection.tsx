import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import project1 from "../../assets/images/ideas/Component 14.png";
import project2 from "../../assets/images/ideas/Component 6.png";
import project3 from "../../assets/images/ideas/Component 9.png";
import project4 from "../../assets/images/ideas/Component 15.png";
import project5 from "../../assets/images/ideas/Component 8.png";
import project6 from "../../assets/images/ideas/Component 10.png";

interface ProjectCard {
  tag: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export function IdeasSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects: ProjectCard[] = [
    {
      tag: language === 'es' ? "Identidad de Marca" : "Brand Identity",
      title: language === 'es' ? "Identidad de Marca" : "Brand Identity",
      description: language === 'es'
        ? "Creamos identidades visuales únicas que conectan con tu audiencia"
        : "We create unique visual identities that connect with your audience",
      image: project1,
      gradient: "from-orange-600/90 to-red-600/90"
    },
    {
      tag: language === 'es' ? "Modelos Generados por IA" : "AI-Generated Models",
      title: language === 'es' ? "Modelos Generados por IA" : "AI-Generated Models",
      description: language === 'es'
        ? "Creación de modelos visuales únicos usando inteligencia artificial de última generación"
        : "Creation of unique visual models using cutting-edge artificial intelligence",
      image: project2,
      gradient: "from-purple-600/90 to-pink-600/90"
    },
    {
      tag: language === 'es' ? "Campañas de Social Media" : "Social Media Campaigns",
      title: language === 'es' ? "Campañas de Social Media" : "Social Media Campaigns",
      description: language === 'es'
        ? "Estrategias digitales que conectan con tu audiencia y generan engagement real"
        : "Digital strategies that connect with your audience and generate real engagement",
      image: project3,
      gradient: "from-blue-600/90 to-cyan-600/90"
    },
    {
      tag: "Fluid Branding",
      title: "Fluid Branding",
      description: language === 'es'
        ? "Identidades visuales dinámicas que se adaptan a diferentes contextos y plataformas"
        : "Dynamic visual identities that adapt to different contexts and platforms",
      image: project4,
      gradient: "from-emerald-600/90 to-teal-600/90"
    },
    {
      tag: language === 'es' ? "Imágenes Generadas por IA" : "AI-Generated Images",
      title: language === 'es' ? "Imágenes Generadas por IA" : "AI-Generated Images",
      description: language === 'es'
        ? "Contenido visual personalizado creado con tecnología de inteligencia artificial"
        : "Personalized visual content created with artificial intelligence technology",
      image: project5,
      gradient: "from-rose-600/90 to-pink-600/90"
    },
    {
      tag: language === 'es' ? "Campañas Creativas" : "Creative Campaigns",
      title: language === 'es' ? "Campañas Creativas" : "Creative Campaigns",
      description: language === 'es'
        ? "Conceptos innovadores que capturan la atención y dejan huella en tu audiencia"
        : "Innovative concepts that capture attention and leave a mark on your audience",
      image: project6,
      gradient: "from-amber-600/90 to-orange-600/90"
    }
  ];

  const ProjectCard = ({ project }: { project: ProjectCard; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative h-[400px] lg:h-[568px] rounded-[22px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.15)] hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[22px]">
          <div className="absolute bg-[#f2f4f7] inset-0 rounded-[22px]" />
          <img
            alt={project.title}
            className={`absolute max-w-none object-cover rounded-[22px] size-full transition-all duration-500 ${
              isHovered ? 'brightness-75 blur-[2px]' : ''
            }`}
            src={project.image}
          />
        </div>

        {/* Tag - Hidden on hover */}
        <div
          className={`absolute left-[32px] top-[32px] transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <div className="bg-white h-[26px] rounded-[50px] px-[16.5px] flex items-center">
            <span className="font-['Rethink_Sans'] font-normal text-[11px] leading-[16px] text-black">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Enhanced text - Shown on hover */}
        <div
          className={`absolute left-[32px] right-[32px] top-[50%] translate-y-[-50%] transition-all duration-700 ease-out ${
            isHovered
              ? 'opacity-100 translate-x-0 blur-0'
              : 'opacity-0 translate-x-[-40px] blur-sm pointer-events-none'
          }`}
        >
          <div
            className={`backdrop-blur-md bg-gradient-to-r ${project.gradient} rounded-[20px] px-[32px] lg:px-[40px] py-[24px] lg:py-[32px] shadow-2xl border border-white/20`}
          >
            <h3 className="text-white text-[24px] lg:text-[32px] font-['Rethink_Sans'] font-semibold leading-[1.2] mb-2 lg:mb-3">
              {project.title}
            </h3>
            <p className="text-white/95 text-[14px] lg:text-[17px] font-['Rethink_Sans'] font-normal leading-[1.6]">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="ideas" className="bg-white py-16 lg:py-[95px] px-4 sm:px-6 lg:px-[120px] xl:px-[200px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-[64px]">
          <h2 className="font-['Rethink_Sans'] font-medium text-[32px] lg:text-[40px] leading-[1.3] lg:leading-[51.7px] text-[#1d2029] tracking-tight">
            {language === 'es'
              ? 'Ideas que Hacen Brillar tu Marca'
              : 'Ideas that Make Your Brand Shine'}
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[32px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
