import { ServiceModule, ServicePhase } from '@/types/service-matrix';

export const brandModules: ServiceModule[] = [
  {
    id: 'm1',
    slug: 'audit-market-research',
    name: 'Audit & Market Research',
    phase: 'strategy',
    description: 'Brand and competitor research, audience profiling',
    longDescription: 'We learn about your audience, and study your competitors to understand how your brand is seen today—and where there are opportunities to stand out. We turn those insights into a report that guides everything we create next.',
    deliverables: [
      'Market research report',
      'Competitor analysis',
      'Audience personas',
      'Research process documentation',
      'Positioning and perceptions analysis',
      'Brand evaluation and analysis',
      'Leadership perception analysis',
      'Strategic recommendations'
    ],
    estimatedHours: 160, // 4 weeks
    dependencies: [],
    tags: ['research', 'strategy', 'audit', 'competitive-analysis'],
    featured: true,
    displayOrder: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'm2',
    slug: 'naming-creative-concept',
    name: 'Naming / Creative Concept',
    phase: 'creativity',
    description: 'Development of brand or product names',
    longDescription: 'We help you find the right name—one that fits your voice, makes sense in your space, and stands out. We show you multiple options, refine based on feedback, and check what\'s available.',
    deliverables: [
      'Name options (20-25 initial directions)',
      'Trademark check',
      'Naming guidelines',
      'Naming criteria & tone alignment',
      'Refined naming candidates (2-3 finalists)',
      'Final name recommendation with rationale',
      'Availability overview (domains, social handles)'
    ],
    estimatedHours: 240, // 6 weeks
    dependencies: [],
    tags: ['naming', 'creative', 'branding'],
    featured: true,
    displayOrder: 2,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'm3',
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    phase: 'strategy',
    description: 'Definition of positioning, values, messaging',
    longDescription: 'This is where we help you define what your brand stands for, who you\'re speaking to, and how you sound. We shape your story, messaging, and tone so that everything you say feels consistent, compelling, and true to you.',
    deliverables: [
      'Brand strategy deck',
      'Messaging framework',
      'Brand purpose & vision',
      'Brand positioning statement',
      'Target audience overview',
      'Value proposition',
      'Brand personality & values',
      'Messaging pillars',
      'Brand narrative',
      'Tone of voice guidelines',
      'Brand architecture (if applicable)'
    ],
    estimatedHours: 160, // 4 weeks (3 weeks in some docs)
    dependencies: [],
    tags: ['strategy', 'positioning', 'messaging'],
    featured: true,
    displayOrder: 3,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'm4',
    slug: 'visual-identity',
    name: 'Visual Identity',
    phase: 'visual',
    description: 'Creation of brand visual system',
    longDescription: 'Your visual identity is the most immediate expression of your brand. This module translates your strategy into a cohesive design system — creating a visual language that is recognizable, consistent, and scalable across all brand touchpoints.',
    deliverables: [
      'Logo system (primary, secondary, icons)',
      'Color palette',
      'Typography system',
      'Brand assets',
      'Graphic elements (patterns, shapes, visual motifs)',
      'Photography & imagery style guide',
      'Brand guidelines document',
      'Templates (presentations, social media, collateral)'
    ],
    estimatedHours: 240, // 6 weeks
    dependencies: ['m3'], // Ideally after brand strategy
    tags: ['design', 'visual', 'identity', 'logo'],
    featured: true,
    displayOrder: 4,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'm5',
    slug: 'guidelines',
    name: 'Brand Guidelines',
    phase: 'guidelines',
    description: 'Documentation of brand usage rules',
    longDescription: 'Brand guidelines ensure your brand is applied consistently and correctly, no matter who\'s using it. This module delivers a detailed, user-friendly reference that documents your brand\'s strategic and visual foundations.',
    deliverables: [
      'Brand guidelines PDF',
      'Brand strategy overview',
      'Visual identity system documentation',
      'Tone of voice & messaging guidelines',
      'Application examples',
      'Usage rules & best practices',
      'Web-based guidelines (optional)'
    ],
    estimatedHours: 80, // 2 weeks
    dependencies: ['m4'], // Requires visual identity to be complete
    tags: ['documentation', 'guidelines', 'standards'],
    featured: false,
    displayOrder: 5,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Helper function to get modules by phase
export const getBrandModulesByPhase = (phase: ServicePhase): ServiceModule[] => {
  return brandModules.filter(module => module.phase === phase);
};

// Helper function to get featured modules
export const getFeaturedBrandModules = (): ServiceModule[] => {
  return brandModules.filter(module => module.featured);
};

// Helper function to get module by slug
export const getBrandModuleBySlug = (slug: string): ServiceModule | undefined => {
  return brandModules.find(module => module.slug === slug);
};