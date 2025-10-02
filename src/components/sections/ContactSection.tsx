import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { toast } from "sonner";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    country: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || formData.name.length < 2) {
      toast.error("Name must be at least 2 characters long");
      return;
    }

    if (!formData.brand.trim() || formData.brand.length < 2) {
      toast.error("Brand/Company name is required");
      return;
    }

    if (!formData.country.trim() || formData.country.length < 2) {
      toast.error("Country is required");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Handle form submission
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    toast.success(t.contact.form.successMessage || "Thank you for your interest! We'll get back to you soon.");
    setFormData({
      name: "",
      brand: "",
      country: "",
      email: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.contact.whatsapp.defaultMessage || "Hello! I'm interested in learning more about Solariis services for my brand.");
    window.open(`https://wa.me/584120907684?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="body-large text-white/90 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-black">{t.contact.form.name} *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 bg-[#F8F8F8] border-[#E0E0E0]"
                  />
                </div>

                <div>
                  <Label htmlFor="brand" className="text-black">{t.contact.form.brand} *</Label>
                  <Input
                    id="brand"
                    name="brand"
                    type="text"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="mt-1 bg-[#F8F8F8] border-[#E0E0E0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country" className="text-black">{t.contact.form.country} *</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 bg-[#F8F8F8] border-[#E0E0E0]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-black">{t.contact.form.email} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 bg-[#F8F8F8] border-[#E0E0E0]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-black">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.placeholder || "Tell us about your brand and expansion goals..."}
                  className="mt-1 bg-[#F8F8F8] border-[#E0E0E0]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF6A00] text-white hover:bg-[#CC5500]"
              >
                {t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* WhatsApp Option */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-white mb-4">
                {t.contact.whatsapp.title}
              </h3>
              <p className="body-large text-white/90 mb-6">
                {t.contact.whatsapp.description}
              </p>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF6A00]"
              >
                {t.contact.whatsapp.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
