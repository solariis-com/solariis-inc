import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LogoSvg from "../assets/logo.svg";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error: submissionError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.topic || 'General',
          message: formData.message,
        }]);

      if (submissionError) {
        throw submissionError;
      }

      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          name: formData.name,
          email: formData.email,
          subject: formData.topic || 'General',
          message: formData.message
        },
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        toast({
          title: "Message saved but email notification failed",
          description: "We received your message but couldn't send the email notification. We'll still get back to you soon.",
        });
      } else {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
      }
      
      setFormData({ name: "", email: "", topic: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-text mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Have questions before subscribing? Reach out — we usually reply within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold text-text mb-8">Send us a message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-white border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-text font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-text font-medium mb-2">Topic</label>
                <Select onValueChange={(value) => handleInputChange('topic', value)} value={formData.topic}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="pricing">Pricing & Plans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-text font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project or how we can help..."
                  className="min-h-[140px] bg-white border-gray-200"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="px-8 py-3 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-text mb-8">Direct Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">Email</p>
                  <a href="mailto:hello@solariis.agency" className="text-text-light hover:text-primary transition-colors">
                    hello@solariis.agency
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">WhatsApp</p>
                  <a 
                    href="https://wa.me/584120907684" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-light hover:text-primary transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-text-light">
                <span className="font-medium text-text">Response Time:</span><br />
                Usually within 2-4 hours during business hours (EST)
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src={LogoSvg} alt="Solariis Logo" className="w-32 h-auto" />
            </div>
            <p className="text-text-light text-sm">
              © 2025 Solariis Venezuela C.A. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
