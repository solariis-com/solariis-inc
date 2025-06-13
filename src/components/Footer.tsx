
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
    <footer id="contact" className="bg-accent border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl text-text mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Have questions before subscribing? Reach out — we usually reply within a few hours.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-text text-xl mb-6">Send us a message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>
                
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
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar - Contact Info & Login */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-text text-lg mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-text-light">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:hello@solariis.agency" className="hover:text-text transition-colors">
                    hello@solariis.agency
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-text-light">
                  <Phone size={18} className="text-primary" />
                  <span>+58 (412) 0907684</span>
                </div>
                <div className="flex items-center space-x-3 text-text-light">
                  <MapPin size={18} className="text-primary" />
                  <span>Nueva Esparta, Venezuela</span>
                </div>
                <div className="flex items-center space-x-3 text-text-light">
                  <MessageCircle size={18} className="text-primary" />
                  <a 
                    href="https://wa.me/584120907684" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-text transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-text-light">
                  <span className="font-medium">Response Time:</span> Usually within 2-4 hours during business hours (EST)
                </p>
              </div>
            </div>

            {/* Client Login */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-text text-lg mb-4">Client Login</h4>
              <p className="text-text-light text-sm mb-4">Access your client account</p>
              
              {error && (
                <div className="text-red-500 text-sm mb-4 p-3 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
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
