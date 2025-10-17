import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MessageCircle, Loader2 } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || formData.name.length < 2) {
      toast.error(t.contact.form.errors.nameRequired);
      return;
    }

    if (!formData.brand.trim() || formData.brand.length < 2) {
      toast.error(t.contact.form.errors.brandRequired);
      return;
    }

    if (!formData.country.trim() || formData.country.length < 2) {
      toast.error(t.contact.form.errors.countryRequired);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t.contact.form.errors.emailInvalid);
      return;
    }

    // Start submission
    setIsSubmitting(true);

    try {
      // Get form element and prepare data
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);

      // Try Netlify Forms submission
      const response = await fetch(formElement.action || window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      // Accept both success responses and redirects
      if (response.ok || response.status === 303 || response.status === 301 || response.status === 302) {
        // Success
        console.log('Form submitted successfully');
        toast.success(t.contact.form.successMessage || "Thank you for your interest! We'll get back to you soon.");

        // Clear form
        setFormData({
          name: "",
          brand: "",
          country: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Show a more helpful error message
      toast.error(language === 'es'
        ? 'Hubo un problema al enviar el formulario. Por favor, intenta contactarnos por WhatsApp.'
        : 'There was a problem submitting the form. Please try contacting us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-16 lg:py-[95px] px-4 sm:px-6 lg:px-[120px] xl:px-[200px] bg-black">
      <div className="max-w-[896px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-[48px]">
          <h2 className="font-['Rethink_Sans'] font-normal text-[28px] lg:text-[32px] leading-[36.4px] lg:leading-[38.4px] text-white mb-4 lg:mb-[15px]">
            {t.contact.title}
          </h2>
          <div className="max-w-[672px] mx-auto">
            <p className="font-['Rethink_Sans'] font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28.8px] text-white/90">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[48px]">
          {/* Contact Form */}
          <div className="bg-white p-[32px] rounded-[12px] w-full">
            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-[24px]"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              {/* Name and Brand row */}
              <div className="flex gap-[16px]">
                <div className="flex flex-col gap-[9px] flex-1 pt-[5px]">
                  <Label htmlFor="name" className="font-['Rethink_Sans'] font-medium text-[14px] leading-[14px] text-black">
                    {t.contact.form.name} *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-[40px] bg-[#F8F8F8] border-[#E0E0E0] rounded-[6px] px-[13px] py-[11px]"
                  />
                </div>

                <div className="flex flex-col gap-[9px] flex-1 pt-[5px]">
                  <Label htmlFor="brand" className="font-['Rethink_Sans'] font-medium text-[14px] leading-[14px] text-black">
                    {t.contact.form.brand} *
                  </Label>
                  <Input
                    id="brand"
                    name="brand"
                    type="text"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="h-[40px] bg-[#F8F8F8] border-[#E0E0E0] rounded-[6px] px-[13px] py-[11px]"
                  />
                </div>
              </div>

              {/* Country and Email row */}
              <div className="flex gap-[16px]">
                <div className="flex flex-col gap-[9px] flex-1 pt-[5px]">
                  <Label htmlFor="country" className="font-['Rethink_Sans'] font-medium text-[14px] leading-[14px] text-black">
                    {t.contact.form.country} *
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="h-[40px] bg-[#F8F8F8] border-[#E0E0E0] rounded-[6px] px-[13px] py-[11px]"
                  />
                </div>

                <div className="flex flex-col gap-[9px] flex-1 pt-[5px]">
                  <Label htmlFor="email" className="font-['Rethink_Sans'] font-medium text-[14px] leading-[14px] text-black">
                    {t.contact.form.email} *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[40px] bg-[#F8F8F8] border-[#E0E0E0] rounded-[6px] px-[13px] py-[11px]"
                  />
                </div>
              </div>

              {/* Message textarea */}
              <div className="flex flex-col gap-[9px] pt-[5px]">
                <Label htmlFor="message" className="font-['Rethink_Sans'] font-medium text-[14px] leading-[14px] text-black">
                  {t.contact.form.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.placeholder || "Cuéntanos sobre tu marca, tus objetivos y cómo visualizas tu expansión..."}
                  className="min-h-[98px] bg-[#F8F8F8] border-[#E0E0E0] rounded-[6px] px-[13px] py-[9px] font-['Rethink_Sans'] text-[14px] resize-none"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[40px] bg-[#FF6A00] text-white hover:bg-[#CC5500] disabled:opacity-50 disabled:cursor-not-allowed rounded-[6px] font-['Rethink_Sans'] font-medium text-[14px] leading-[20px] flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {isSubmitting
                  ? (language === 'es' ? 'Enviando...' : 'Sending...')
                  : t.contact.form.submit
                }
              </Button>
            </form>
          </div>

          {/* WhatsApp Option */}
          <div className="relative w-full h-[438px]">
            <div className="absolute inset-0 backdrop-blur-[2px] bg-[#FF6A00] rounded-[12px] flex flex-col items-center justify-center p-[32px]">
              {/* WhatsApp Icon */}
              <div className="size-[64px] mb-[24px]">
                <MessageCircle className="w-full h-full text-white" strokeWidth={2.2} />
              </div>

              {/* Heading */}
              <h3 className="font-['Rethink_Sans'] font-medium text-[24px] lg:text-[28px] leading-[33.6px] lg:leading-[36.4px] text-white text-center mb-[16px]">
                {t.contact.whatsapp.title}
              </h3>

              {/* Description */}
              <div className="max-w-[360px] mb-[32px]">
                <p className="font-['Rethink_Sans'] font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28.8px] text-white/90 text-center">
                  {t.contact.whatsapp.description}
                </p>
              </div>

              {/* Button */}
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="h-[40px] bg-transparent border border-white text-white hover:bg-white hover:text-[#FF6A00] rounded-[6px] px-[17px] py-[9px] font-['Rethink_Sans'] font-medium text-[14px] leading-[20px] transition-all duration-300"
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
