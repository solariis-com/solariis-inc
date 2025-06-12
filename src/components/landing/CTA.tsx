
import { Link } from "react-router-dom";

const CTA = () => {
  const faqs = [
    "How fast will I receive my designs?",
    "How does the pause feature work?",
    "What is 'subscription-style' design?",
    "How do I request designs and provide feedback?",
    "How does the queue feature work?",
    "How are you different from freelance designers?",
    "What programs do you design in?",
    "How do I refer others and earn?",
    "Why wouldn't I just hire a designer?",
    "What if I'm not happy with the design?",
    "What if I only have a single request?",
    "Are there any design areas you don't cover?",
    "Are there any refunds if I don't like the service?",
    "Can I get designs for just one brand?",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
              Frequently asked questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-accent-dark pb-3">
                  <button className="text-left text-text hover:text-primary transition-colors w-full">
                    {faq}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 rounded-3xl p-8 text-center max-w-md">
              <div className="text-6xl mb-4">😊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Book a 15-min intro call</h3>
              <p className="text-white/80 text-sm mb-6">Learn more about how Designjoy works and how it can help you.</p>
              <button className="bg-white text-text px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Book a call
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 bg-text rounded-3xl p-16 text-center text-white">
          <h2 className="font-heading text-5xl lg:text-6xl mb-8 tracking-tight max-w-4xl mx-auto">
            See if Designjoy is the right fit for you
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Good design leads to higher conversions, higher revenue and lower acquisition costs. Let's get your brand to the next level.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
