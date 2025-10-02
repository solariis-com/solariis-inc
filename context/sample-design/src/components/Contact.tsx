import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    country: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! We'll get back to you soon.");
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
    const message = encodeURIComponent("Hello! I'm interested in learning more about Solariis services for my brand.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Ready to grow your brand in Venezuela & Latin America?
          </h2>
          <p className="body-large text-white/90 max-w-2xl mx-auto">
            Let's explore how Solariis can support your expansion. Fill out the form below or connect with us directly on WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" style={{ color: '#000000' }}>Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    style={{ backgroundColor: '#F8F8F8', borderColor: '#E0E0E0' }}
                  />
                </div>
                
                <div>
                  <Label htmlFor="brand" style={{ color: '#000000' }}>Brand/Company *</Label>
                  <Input
                    id="brand"
                    name="brand"
                    type="text"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="mt-1"
                    style={{ backgroundColor: '#F8F8F8', borderColor: '#E0E0E0' }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country" style={{ color: '#000000' }}>Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1"
                    style={{ backgroundColor: '#F8F8F8', borderColor: '#E0E0E0' }}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" style={{ color: '#000000' }}>Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    style={{ backgroundColor: '#F8F8F8', borderColor: '#E0E0E0' }}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" style={{ color: '#000000' }}>Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand and expansion goals..."
                  className="mt-1"
                  style={{ backgroundColor: '#F8F8F8', borderColor: '#E0E0E0' }}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                style={{ 
                  backgroundColor: '#FF6A00',
                  color: 'white'
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* WhatsApp Option */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-white mb-4">
                Prefer to Chat?
              </h3>
              <p className="body-large text-white/90 mb-6">
                Connect with us directly on WhatsApp for immediate assistance and quick answers.
              </p>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF6A00]"
              >
                Talk with us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}