import { ServicePhase } from '@/types/service-matrix';
import { brandModules } from './brandModules';
import { productModules } from './productModules';
import { marketingModules } from './marketingModules';

export interface DesignPhase {
  id: number;
  slug: string;
  name: string;
  phase: ServicePhase;
  description: string;
  longDescription: string;
  exampleServices: string[];
  typicalDeliverables: string[];
  moduleIds: string[]; // IDs of modules that belong to this phase
  gradient: string; // Tailwind gradient classes
  displayOrder: number;
}

export const designPhases: DesignPhase[] = [
  {
    id: 1,
    slug: 'strategy',
    name: 'Strategy',
    phase: 'strategy',
    description: 'Foundational research, positioning, and planning to guide creative direction',
    longDescription: 'We start by understanding where you are and where you need to go. Through research, audits, and strategic planning, we build the foundation that informs all creative decisions.',
    exampleServices: [
      'Brand Audit',
      'Market Research',
      'UX/UI Audit',
      'Product Requirements',
      'User Journey Mapping',
      'Marketing Audit',
      'SEO Strategy'
    ],
    typicalDeliverables: [
      'Research Reports',
      'Personas',
      'Audit Reports',
      'Strategic Briefs',
      'Product Requirement Definitions',
      'Journey Maps'
    ],
    moduleIds: ['m1', 'm3', 'p1', 'p2', 'p4', 'dm1', 'dm2'], // 7 modules
    gradient: 'from-blue-500 to-indigo-600',
    displayOrder: 1
  },
  {
    id: 2,
    slug: 'creativity',
    name: 'Creativity',
    phase: 'creativity',
    description: 'Conceptual exploration and ideation across brand and product experiences',
    longDescription: 'Ideas take shape. We explore naming, concepts, and early-stage designs that bring your vision to life through creative exploration and rapid prototyping.',
    exampleServices: [
      'Brand Naming',
      'Creative Concepts',
      'Campaign Concepts',
      'MVP Design',
      'Wireframing',
      'Content Strategy'
    ],
    typicalDeliverables: [
      'Naming Options',
      'Creative Territories',
      'Wireframes',
      'Moodboards',
      'Low-Fi Prototypes',
      'Concept Decks'
    ],
    moduleIds: ['m2', 'p3', 'dm3'], // 3 modules
    gradient: 'from-purple-600 to-pink-600',
    displayOrder: 2
  },
  {
    id: 3,
    slug: 'visuals',
    name: 'Visuals',
    phase: 'visual',
    description: 'Execution of core brand, product, or campaign assets with visual excellence',
    longDescription: 'Concepts become reality. We design polished, production-ready visuals—from brand identities to product interfaces—that captivate and convert.',
    exampleServices: [
      'Brand Identity Design',
      'Website UI',
      'Product Mockups',
      'Mobile App Design',
      'Content Creation',
      'Data Visualization'
    ],
    typicalDeliverables: [
      'Logos',
      'UI Screens',
      'App Interfaces',
      'Visual Assets',
      'Deck Designs',
      'Motion Samples',
      'Marketing Collateral'
    ],
    moduleIds: ['m4', 'p5', 'p6', 'p8'], // 4 modules
    gradient: 'from-orange-600 to-red-600',
    displayOrder: 3
  },
  {
    id: 4,
    slug: 'guidelines',
    name: 'Guidelines',
    phase: 'guidelines',
    description: 'Systems and documentation for consistent application across platforms',
    longDescription: 'We document everything so your team can execute with confidence. From brand guidelines to design systems, we create the tools for scalable consistency.',
    exampleServices: [
      'Brand Guidelines',
      'Design Systems',
      'Component Libraries',
      'Content Styleguides',
      'Documentation'
    ],
    typicalDeliverables: [
      'Brand Books',
      'UI Kits',
      'Component Libraries',
      'Copy Guidelines',
      'Documentation PDFs',
      'Figma Libraries'
    ],
    moduleIds: ['m5', 'p7'], // 2 modules
    gradient: 'from-teal-700 to-teal-800',
    displayOrder: 4
  },
  {
    id: 5,
    slug: 'activation',
    name: 'Activation & Applications',
    phase: 'applications',
    description: 'Application, launch, and marketing of design work across platforms and channels',
    longDescription: 'Your brand goes live. We launch, optimize, and maintain your presence across digital channels, ensuring ongoing performance and quality.',
    exampleServices: [
      'Web Launch',
      'Social Media Management',
      'Campaign Management',
      'Email Campaigns',
      'QA Support',
      'Ongoing Maintenance'
    ],
    typicalDeliverables: [
      'Live Websites',
      'Campaign Rollout Kits',
      'Email Designs',
      'Analytics Dashboards',
      'Social Content',
      'QA Reports'
    ],
    moduleIds: ['p9', 'dm4', 'dm5'], // 3 modules
    gradient: 'from-emerald-600 to-cyan-600',
    displayOrder: 5
  }
];

// Helper function to get phase by slug
export const getPhaseBySlug = (slug: string): DesignPhase | undefined => {
  return designPhases.find(phase => phase.slug === slug);
};

// Helper function to get all modules for a phase
export const getModulesForPhase = (phaseSlug: string) => {
  const phase = getPhaseBySlug(phaseSlug);
  if (!phase) return [];

  const allModules = [...brandModules, ...productModules, ...marketingModules];
  return allModules.filter(module => phase.moduleIds.includes(module.id));
};

// Helper function to get module count for a phase
export const getPhaseModuleCount = (phaseSlug: string): number => {
  const phase = getPhaseBySlug(phaseSlug);
  return phase ? phase.moduleIds.length : 0;
};

// Helper function to check if a module belongs to a phase
export const moduleInPhase = (moduleId: string, phaseSlug: string): boolean => {
  const phase = getPhaseBySlug(phaseSlug);
  return phase ? phase.moduleIds.includes(moduleId) : false;
};