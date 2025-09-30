import { Mail, MessageCircle } from "lucide-react";
import { InlineWidget } from "react-calendly";

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-text mb-4 tracking-tight">
            Let's Build Smarter
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Schedule a meeting to discuss your project — we typically respond within 2-4 hours during business hours (EST).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Column: Calendly Widget */}
          <div className="lg:col-span-3">
            <div
              className="h-[700px] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              aria-label="Schedule a meeting calendar"
            >
              <InlineWidget url="https://calendly.com/solariis-info/30min" styles={{
                height: '100%',
                width: '100%'
              }} />
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-text mb-6">
                Direct Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text mb-1">Email</p>
                    <a href="mailto:contacto@solariis.com" className="text-text-light hover:text-primary transition-colors">
                      contacto@solariis.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/584120907684"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light hover:text-primary transition-colors"
                    >
                      +58 (412) 0907684
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-text text-lg mb-2">
                Response Time
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                We typically respond within 2-4 hours during business hours (EST).
                For urgent matters, WhatsApp is usually fastest.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg">
              <h3 className="font-semibold text-text text-lg mb-2">
                What to Expect
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Quick response from our team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Free consultation call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Custom proposal for your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
