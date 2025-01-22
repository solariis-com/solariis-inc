import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Leaf, ShoppingBag, ShieldCheck, Truck } from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/98af4ef5-abb3-49be-b3b8-f7d69d917f30.png")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up space-y-6 py-12 md:py-16 lg:py-20">
            <h1 className="font-heading text-display text-white mb-4 px-4">
              {t.about.hero.title}
            </h1>
            <p className="text-body-lg text-white/90 max-w-3xl mx-auto px-4">
              {t.about.hero.description}
            </p>
            <div className="space-x-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">{t.nav.contact}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                <a href="#learn-more">{t.hero.cta.learnMore}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Who We Are */}
        <section id="learn-more" className="mb-20 animate-fade-up">
          <h2 className="font-heading text-h2 text-text mb-6">{t.about.whoWeAre.title}</h2>
          <p className="text-body text-text-light">
            {t.about.whoWeAre.description}
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section className="animate-fade-up">
            <h2 className="font-heading text-h2 text-text mb-6">{t.about.mission.title}</h2>
            <p className="text-body text-text-light">
              {t.about.mission.description}
            </p>
          </section>
          <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-heading text-h2 text-text mb-6">{t.about.vision.title}</h2>
            <p className="text-body text-text-light">
              {t.about.vision.description}
            </p>
          </section>
        </div>

        {/* What We Do */}
        <section className="mb-20">
          <h2 className="font-heading text-h2 text-text mb-8">{t.about.whatWeDo.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <Leaf className="w-12 h-12 text-primary mb-4" strokeWidth={0.75} />
              <h3 className="font-heading text-h4 text-text mb-3">{t.about.whatWeDo.items.brandRepresentation.title}</h3>
              <p className="text-body text-text-light">
                {t.about.whatWeDo.items.brandRepresentation.description}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Truck className="w-12 h-12 text-primary mb-4" strokeWidth={0.75} />
              <h3 className="font-heading text-h4 text-text mb-3">{t.about.whatWeDo.items.importDistribution.title}</h3>
              <p className="text-body text-text-light">
                {t.about.whatWeDo.items.importDistribution.description}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <ShoppingBag className="w-12 h-12 text-primary mb-4" strokeWidth={0.75} />
              <h3 className="font-heading text-h4 text-text mb-3">{t.about.whatWeDo.items.marketing.title}</h3>
              <p className="text-body text-text-light">
                {t.about.whatWeDo.items.marketing.description}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <ShieldCheck className="w-12 h-12 text-primary mb-4" strokeWidth={0.75} />
              <h3 className="font-heading text-h4 text-text mb-3">{t.about.whatWeDo.items.regulatory.title}</h3>
              <p className="text-body text-text-light">
                {t.about.whatWeDo.items.regulatory.description}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Solariis */}
        <section className="mb-20">
          <h2 className="font-heading text-h2 text-text mb-8">{t.about.whyChooseUs.title}</h2>
          <p className="text-body text-text-light mb-8">
            {t.about.whyChooseUs.description}
          </p>
          <div className="space-y-6">
            {t.about.whyChooseUs.items.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-h4 text-text mb-2">{item.title}</h3>
                  <p className="text-body text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-muted p-12 rounded-2xl animate-fade-up">
          <h2 className="font-heading text-h2 text-text mb-6">{t.about.cta.title}</h2>
          <p className="text-body text-text-light mb-8 max-w-2xl mx-auto">
            {t.about.cta.description}
          </p>
          <p className="text-body-lg text-text mb-8">{t.about.cta.subtitle}</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link to="/contact">{t.about.cta.button}</Link>
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
