
import { useLanguage, translations } from "@/i18n";
import ProductCategory from "../ProductCategory";

const CategoryList = () => {
  const { language } = useLanguage();
  const t = translations[language].categories;

  const categories = [
    {
      title: t.skincare.title,
      description: t.skincare.description,
      imageSrc: "https://cdn.midjourney.com/a5b8d896-9ca6-4e82-b720-43515bdae68f/0_1.png",
      features: [
        {
          title: "Strategic Brand Positioning",
          description: "AI-driven market analysis and competitive research to identify unique positioning opportunities and develop compelling brand narratives."
        },
        {
          title: "Visual Identity Systems",
          description: "Comprehensive brand identity creation including logos, color palettes, typography, and visual guidelines that scale across all touchpoints."
        },
        {
          title: "Brand Architecture & Guidelines",
          description: "Strategic brand structure development and comprehensive guidelines backed by AI insights and senior creative direction."
        },
        {
          title: "Asset Library & Template Creation",
          description: "Organized collections of brand assets, templates, and resources designed for consistent application and team scalability."
        }
      ]
    },
    {
      title: t.haircare.title,
      description: t.haircare.description,
      imageSrc: "https://cdn.midjourney.com/92b920b5-90d3-45ad-8444-d683ca275ebd/0_2.png",
      features: [
        {
          title: "Market Intelligence & Analysis",
          description: "AI-enhanced market research combined with human strategic analysis to uncover opportunities and competitive advantages."
        },
        {
          title: "Competitive Landscape Mapping",
          description: "Comprehensive competitive analysis and positioning strategy to help your brand stand out in crowded markets."
        },
        {
          title: "Audience Research & Insights",
          description: "Deep audience analysis using AI-powered research tools combined with human behavioral expertise for precise targeting."
        },
        {
          title: "Strategic Positioning Framework",
          description: "Data-driven positioning strategies designed for market entry, brand evolution, and competitive differentiation."
        }
      ]
    },
    {
      title: t.wellness.title,
      description: t.wellness.description,
      imageSrc: "https://cdn.midjourney.com/3e2b91b7-2126-41c3-b287-861042855364/0_2.png",
      features: [
        {
          title: "Campaign Strategy & Development",
          description: "End-to-end campaign creation from concept to execution, leveraging AI insights for optimal messaging and creative performance."
        },
        {
          title: "Brand Naming & Messaging",
          description: "AI-enhanced naming processes and messaging frameworks that resonate with target audiences and support brand goals."
        },
        {
          title: "Content Creation & Planning",
          description: "Strategic content development, social media planning, and digital asset creation for consistent brand presence."
        },
        {
          title: "Launch Campaign Execution",
          description: "Comprehensive launch support including campaign management, performance optimization, and real-time adjustments."
        }
      ]
    },
    {
      title: t.makeup.title,
      description: t.makeup.description,
      imageSrc: "https://cdn.midjourney.com/184f8d3b-da4e-4fe4-83ed-b2bacda08af8/0_3.png",
      features: [
        {
          title: "Workflow Automation Systems",
          description: "AI-powered automation solutions that streamline creative processes, reduce manual tasks, and accelerate project delivery."
        },
        {
          title: "Product Strategy Support",
          description: "Strategic product development guidance, user experience optimization, and go-to-market planning for digital products."
        },
        {
          title: "Technical Implementation",
          description: "Support for technical execution including system integration, process optimization, and scalable infrastructure setup."
        },
        {
          title: "Scaling Operations Framework",
          description: "Modular systems and processes designed to support rapid growth while maintaining quality and brand consistency."
        }
      ]
    }
  ];

  return (
    <section id="categories" className="py-20 bg-neutral-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">{t.sectionTitle}</h2>
        <p className="text-body text-center max-w-3xl mx-auto mb-12">
          {t.sectionDescription}
        </p>
        
        <div className="grid grid-cols-1 gap-16 mb-20">
          {categories.map((category, index) => (
            <ProductCategory
              key={index}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
