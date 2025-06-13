
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setError("Incorrect email or password");
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    }
  };

  return (
    <footer id="contact" className="bg-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl lg:text-5xl text-text mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
            Have questions before subscribing? Reach out — we usually reply within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">Send us a message</h4>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <Select onValueChange={(value) => handleInputChange('topic', value)} value={formData.topic}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="pricing">Pricing & Plans</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us about your project or how we can help..."
                className="min-h-[100px]"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.contact}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-text-light">
                <Mail size={16} />
                <span>hello@solariis.agency</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <Phone size={16} />
                <span>+58 (412) 0907684</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MapPin size={16} />
                <span>Nueva Esparta, Campiña, T-5, Venezuela</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MessageCircle size={16} />
                <a 
                  href="https://wa.me/584120907684" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="bg-white p-4 rounded-lg mt-4">
              <h5 className="font-semibold text-text text-sm mb-2">Response Time</h5>
              <p className="text-text-light text-xs">
                We typically respond within 2-4 hours during business hours (EST).
              </p>
            </div>
          </div>

          {/* Client Login */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">Client Login</h4>
            <p className="text-text-light">Access your client account</p>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex items-end">
              <img src={LogoSvg} alt="Solariis Logo" className="w-36 h-auto" />
            </div>
          </div>
          <p className="text-center text-text-light text-body-sm">
            © 2025 Solariis Venezuela C.A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
