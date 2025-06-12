
import { Link } from "react-router-dom";

const CTA = () => {
  const faqs = [
    "How does AI enhance the creative process?",
    "What's the typical turnaround time?",
    "What if I need both brand and systems support?",
    "Can I pause or switch plans?",
    "How do the Connectors work with your team?",
    "What's included in each service tier?",
    "Do you work with early-stage startups?",
    "How do I provide feedback and revisions?",
    "What makes you different from other agencies?",
    "Can I see examples of your work?",
    "How does the subscription model work?",
    "What if I only need one-time project help?",
    "Do you offer custom enterprise solutions?",
    "How quickly can we get started?",
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
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Book a 15-min strategy call</h3>
              <p className="text-white/80 text-sm mb-6">Learn how Solariis can accelerate your creative vision with AI-enhanced services.</p>
              <Link
                to="/contact"
                className="bg-white text-text px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-block"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-32 bg-text rounded-3xl p-16 text-center text-white">
          <h2 className="font-heading text-5xl lg:text-6xl mb-8 tracking-tight max-w-4xl mx-auto">
            Ready to build with Solariis?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Join visionary teams using AI-enhanced creativity to move faster from idea to impact.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Let's Build the Future Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
