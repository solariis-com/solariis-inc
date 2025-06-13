
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTA = () => {
  const faqs = [
    {
      question: "How fast will I receive my designs?",
      answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
    },
    {
      question: "How does onboarding work?",
      answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock.\n\nFurther instructions on how to use the Trello board to request designs can be found on the board itself."
    },
    {
      question: "Who are the designers?",
      answer: "Designjoy is a one-man agency, ran by Brett, the founder. Designjoy does not employ other designers, or outsource work to any other entity. You'll work directly with me through the entirety of your experience."
    },
    {
      question: "Is there a limit to how many requests I can make?",
      answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
    },
    {
      question: "How does the pause feature work?",
      answer: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.\n\nBilling cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
    },
    {
      question: "How do you handle larger requests?",
      answer: "Larger requests are broken down on Designjoy's end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done."
    },
    {
      question: "What programs do you design in?",
      answer: "Most requests are designed using Figma."
    },
    {
      question: "How does Webflow development work?",
      answer: "Webflow development is included with all subscriptions and is simply treated as a design request. As long as your website can be supported by the Webflow platform, Designjoy will take care of the development to ensure maximum fidelity when it comes to the final product.\n\nOnce the website is fully developed, the site will be transferred to your account, where you will own it from that point forward. Therefore, a Designjoy subscription is not necessary to maintain your website."
    },
    {
      question: "How will I request designs?",
      answer: "Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game."
    },
    {
      question: "What if I don't like the design?",
      answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
    },
    {
      question: "Are there any requests you don't support?",
      answer: "Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.), and Adobe InDesign documents."
    },
    {
      question: "What if I only have a single request?",
      answer: "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
    },
    {
      question: "Are there any refunds?",
      answer: "Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work."
    },
    {
      question: "Can I use Designjoy for just a month?",
      answer: "For sure. Whether you need Designjoy for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-5xl lg:text-6xl text-text mb-8 tracking-tight">
              Frequently asked questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-accent-dark">
                  <AccordionTrigger className="text-left text-text hover:text-primary transition-colors py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-light pb-4">
                    {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
