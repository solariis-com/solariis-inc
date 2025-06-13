
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl lg:text-5xl text-text mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
            Have questions before subscribing? Reach out — we usually reply within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-text mb-2">
                Topic (Optional)
              </label>
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
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project or how we can help..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-text text-lg mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text">Email</p>
                    <a href="mailto:hello@solariis.agency" className="text-text-light hover:text-primary transition-colors">
                      hello@solariis.agency
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle size={20} className="text-primary mt-1 flex-shrink-0" />
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
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-text text-lg mb-2">
                Response Time
              </h3>
              <p className="text-text-light text-sm">
                We typically respond within 2-4 hours during business hours (EST). 
                For urgent matters, WhatsApp is usually fastest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
