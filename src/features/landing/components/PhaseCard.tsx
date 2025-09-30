import { DesignPhase, getPhaseModuleCount } from '@/data/phaseData';

interface PhaseCardProps {
  phase: DesignPhase;
}

const PhaseCard = ({ phase }: PhaseCardProps) => {
  const moduleCount = getPhaseModuleCount(phase.slug);

  return (
    <div
      className={`bg-gradient-to-br ${phase.gradient} rounded-3xl p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
    >
      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white/80 text-sm font-medium">
            Phase {String(phase.id).padStart(2, '0')}
          </div>
          <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            {moduleCount} service{moduleCount !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 relative z-10 flex-grow">
        <h3 className="text-white font-heading text-2xl font-bold">
          {phase.name}
        </h3>

        <p className="text-white/90 text-sm leading-relaxed">
          {phase.description}
        </p>

        {/* Example Services */}
        <div className="pt-2">
          <p className="text-white/70 text-xs mb-2">Examples:</p>
          <ul className="space-y-1">
            {phase.exampleServices.slice(0, 4).map((service, index) => (
              <li key={index} className="text-white/80 text-xs flex items-start">
                <span className="text-white/60 mr-2">•</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>
    </div>
  );
};

export default PhaseCard;