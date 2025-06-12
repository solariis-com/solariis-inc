
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import ProductCategory from "../ProductCategory";

const CategoryList = () => {
  const { language } = useLanguage();
  const t = translations[language].categories;

  const categories = [
    {
      title: t.skincare.title,
      description: t.skincare.description,
      imageSrc: "/lovable-uploads/7acb4e9d-c852-4bb5-afa9-9e91be10a7c0.png",
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
          title: "Brand Architecture & Naming",
          description: "Strategic brand structure development and creative naming solutions backed by trademark research and linguistic analysis."
        },
        {
          title: "Market Intelligence & Research",
          description: "Data-driven insights into target audiences, market trends, and competitive landscapes to inform strategic brand decisions."
        }
      ]
    },
    {
      title: t.haircare.title,
      description: t.haircare.description,
      imageSrc: "/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png",
      features: [
        {
          title: "Creative Naming Solutions",
          description: "AI-enhanced naming processes combined with human creativity to develop memorable, meaningful brand names with strong market appeal."
        },
        {
          title: "Logo & Visual Identity Design",
          description: "Distinctive logo creation and comprehensive visual identity systems that capture brand essence and resonate with target audiences."
        },
        {
          title: "Brand Guidelines & Standards",
          description: "Detailed brand style guides covering logo usage, color systems, typography, and application guidelines for consistent brand expression."
        },
        {
          title: "Asset Library Development",
          description: "Organized collections of brand assets, templates, and resources designed for easy access and consistent brand application across teams."
        }
      ]
    },
    {
      title: t.wellness.title,
      description: t.wellness.description,
      imageSrc: "/lovable-uploads/432c0ff8-3f4f-4199-a36a-8d63f851bd8a.png",
      features: [
        {
          title: "Content Strategy & Planning",
          description: "AI-optimized content calendars, messaging frameworks, and strategic content planning to maximize engagement and brand impact."
        },
        {
          title: "Campaign Development & Execution",
          description: "End-to-end campaign creation from concept to execution, leveraging AI insights for optimal messaging and creative performance."
        },
        {
          title: "Social Media & Digital Assets",
          description: "Platform-optimized content creation, social media strategies, and digital asset development for consistent brand presence online."
        },
        {
          title: "Performance Optimization",
          description: "Data-driven content optimization, A/B testing, and performance analytics to continuously improve content effectiveness and ROI."
        }
      ]
    },
    {
      title: t.makeup.title,
      description: t.makeup.description,
      imageSrc: "/lovable-uploads/bc578a58-dea8-4c91-9ac8-423c5d6b3ca4.png",
      features: [
        {
          title: "Design System Architecture",
          description: "Scalable design frameworks that establish visual consistency, improve workflow efficiency, and support rapid brand growth."
        },
        {
          title: "Component Libraries & Templates",
          description: "Modular design components, reusable templates, and standardized elements that accelerate creative production and maintain brand coherence."
        },
        {
          title: "Style Guides & Documentation",
          description: "Comprehensive style guides covering typography, color systems, spacing, and interaction patterns for consistent design implementation."
        },
        {
          title: "Scalable Creative Systems",
          description: "Flexible design frameworks that adapt to growing business needs while maintaining visual consistency across all brand touchpoints."
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
