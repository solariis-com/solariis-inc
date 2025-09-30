import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DesignPhase, getPhaseModuleCount } from '@/data/phaseData';

interface PhaseCardProps {
  phase: DesignPhase;
  onClick?: () => void;
}

const PhaseCard = ({ phase, onClick }: PhaseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const moduleCount = getPhaseModuleCount(phase.slug);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${phase.gradient} rounded-3xl p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden ${
        isExpanded ? 'row-span-2' : ''
      }`}
      onClick={handleClick}
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
            {phase.exampleServices.slice(0, isExpanded ? undefined : 4).map((service, index) => (
              <li key={index} className="text-white/80 text-xs flex items-start">
                <span className="text-white/60 mr-2">•</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expand Indicator */}
      <div className="relative z-10 pt-4 flex items-center justify-center">
        <ChevronDown
          className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        />
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