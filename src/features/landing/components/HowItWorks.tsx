
import { ArrowRight, CheckCircle2, Users, Zap, MessageSquare, FileText, Target, Rocket } from "lucide-react";
import { designPhases } from "@/data/phaseData";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      subtitle: "Share Your Vision",
      description: "We start by discussing your goals, challenges, and timeline. Our structured discovery helps us understand exactly what you need.",
      icon: MessageSquare
    },
    {
      number: "02",
      title: "Proposal",
      subtitle: "Choose Your Model",
      description: "We offer flexible engagement options: subscription plans for ongoing needs, fixed-price projects, or custom retainers.",
      icon: FileText
    },
    {
      number: "03",
      title: "Scoping",
      subtitle: "Plan & Prioritize",
      description: "We break down your project into phases and prioritized tasks, creating a clear roadmap with timelines and milestones.",
      icon: Target
    },
    {
      number: "04",
      title: "Iterative Delivery",
      subtitle: "Build & Refine",
      description: "We deliver in manageable stages with regular check-ins, allowing continuous feedback and optimization throughout.",
      icon: Rocket
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Transparency",
      description: "Regular updates keep you in control"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Phased delivery optimizes speed"
    },
    {
      icon: Users,
      title: "Flexibility",
      description: "Adapt as your needs evolve"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            From vision to launch, we guide you through every phase with clear communication and iterative progress.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Arrow (hidden on mobile, hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full -ml-4 z-0">
                  <ArrowRight className="w-8 h-8 text-primary/30 mx-auto" />
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = step.icon;
                      return <IconComponent className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl text-text font-bold">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-text-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 mb-16">
          <h3 className="text-center font-heading text-2xl text-text mb-8">
            Why Iterative Delivery Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">{benefit.title}</h4>
                    <p className="text-sm text-text-light">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase Timeline */}
        <div className="text-center">
          <p className="text-sm text-text-light mb-4">Our work flows through 5 core phases:</p>
          <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
            {designPhases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <div className={`bg-gradient-to-br ${phase.gradient} text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm`}>
                  {phase.name}
                </div>
                {index < designPhases.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-400 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
