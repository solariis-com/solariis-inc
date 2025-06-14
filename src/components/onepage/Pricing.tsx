
import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = {
    starter: {
      name: "Starter",
      description: "For solo founders or early-stage startups",
      monthly: { price: 2500, display: "$2,500" },
      quarterly: { price: 2250, display: "$2,250", total: "$6,750" },
      features: [
        "1 active request at a time",
        "Access to 1 Agent per cycle",
        "3–5 day turnaround",
        "Pause or cancel anytime",
        "AI-enhanced output with expert oversight",
        "Dedicated creative lead"
      ],
      cta: "Start with Starter",
      popular: false
    },
    growth: {
      name: "Growth",
      description: "For scaling brands and product teams",
      monthly: { price: 4800, display: "$4,800" },
      quarterly: { price: 4320, display: "$4,320", total: "$12,960" },
      features: [
        "2 active requests at a time",
        "Access to all 4 Agents: Brand, Strategy, Content & Automation",
        "2–3 day average turnaround",
        "Async strategy support",
        "Optional Slack or Notion integration",
        "AI-enhanced output with expert oversight",
        "Dedicated creative lead"
      ],
      cta: "Start with Growth",
      popular: true
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            Choose the plan that fits your scale and ambitions. Pause anytime. No contract.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-accent text-text shadow-sm'
                  : 'text-text-light hover:text-text'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'quarterly'
                  ? 'bg-accent text-text shadow-sm'
                  : 'text-text-light hover:text-text'
              }`}
            >
              Quarterly billing
              <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Starter Plan */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 relative">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-text mb-2">
                {plans.starter.name}
              </h3>
              <p className="text-text-light mb-6">
                {plans.starter.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-text">
                    {billingCycle === 'monthly' ? plans.starter.monthly.display : plans.starter.quarterly.display}
                  </span>
                  <span className="text-lg text-text-light ml-1">/mo</span>
                </div>
                {billingCycle === 'quarterly' && (
                  <p className="text-sm text-text-light mt-1">
                    Billed quarterly ({plans.starter.quarterly.total})
                  </p>
                )}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plans.starter.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-text-light">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollToSection('final-cta')}
              className="w-full bg-text text-white py-3 px-6 rounded-lg font-semibold hover:bg-text/90 transition-colors text-center block"
            >
              {plans.starter.cta}
            </button>
          </div>

          {/* Growth Plan */}
          <div className="bg-text rounded-3xl p-8 text-white relative">
            {plans.growth.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold mb-2">
                {plans.growth.name}
              </h3>
              <p className="text-white/80 mb-6">
                {plans.growth.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    {billingCycle === 'monthly' ? plans.growth.monthly.display : plans.growth.quarterly.display}
                  </span>
                  <span className="text-lg text-white/80 ml-1">/mo</span>
                </div>
                {billingCycle === 'quarterly' && (
                  <p className="text-sm text-white/70 mt-1">
                    Billed quarterly ({plans.growth.quarterly.total})
                  </p>
                )}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plans.growth.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollToSection('final-cta')}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center block"
            >
              {plans.growth.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
