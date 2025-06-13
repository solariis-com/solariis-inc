
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in each plan?",
      answer: "Starter includes 1 active request with 3-5 day turnaround and access to 1 Agent. Growth includes unlimited sequential requests, 2-3 day turnaround, access to all 4 Agents, and dedicated creative lead support."
    },
    {
      question: "What if I need more than one type of service?",
      answer: "With Growth plan, you get access to all 4 Agents (Brand, Strategy, Content, Automation). You can submit different types of requests and we'll handle them sequentially. Starter plan focuses on one service area at a time."
    },
    {
      question: "How fast are tasks delivered?",
      answer: "Most requests are delivered within 2-5 business days. Complex projects may take longer, but we'll always communicate timelines upfront. Growth plan gets priority with 2-3 day average turnaround."
    },
    {
      question: "What are Agents?",
      answer: "Agents are our AI-enhanced specialists: Brand Agent (identity & visual systems), Strategy Agent (research & positioning), Content Agent (campaigns & messaging), and Automation Agent (systems & workflows). Each combines AI capabilities with senior human expertise."
    },
    {
      question: "Can I pause or cancel?",
      answer: "Yes! You can pause your subscription at any time and billing stops immediately. Cancel anytime with no penalties or long-term contracts. When you're ready to resume, just reactivate your subscription."
    },
    {
      question: "What if I don't like a deliverable?",
      answer: "We'll revise it until you're happy. Most projects include 2-3 rounds of revisions. If you're still not satisfied within the first week, we offer a money-back guarantee."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-background mb-6 tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-muted rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/10 transition-colors"
              >
                <span className="font-semibold text-background">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
