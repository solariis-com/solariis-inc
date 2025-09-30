export interface BrandBundle {
  id: string;
  slug: string;
  name: string;
  tier: 'streamlined' | 'standard' | 'premium' | 'full';
  description: string;
  longDescription: string;
  includedModules: string[]; // Module IDs (m1, m2, etc.)
  timeline: {
    weeks: number;
    description: string;
  };
  pricing?: {
    range?: string;
    note?: string;
  };
  bestFor: string[];
  featured: boolean;
  displayOrder: number;
}

export const brandBundles: BrandBundle[] = [
  {
    id: 'bundle-streamlined',
    slug: 'brand-identity-streamlined',
    name: 'Brand Identity Streamlined',
    tier: 'streamlined',
    description: 'Visual refresh without changing brand strategy',
    longDescription: 'A streamlined visual identity package for refreshing or extending an existing brand. Includes updated design elements and brand guidelines—without redefining strategy or creating a new logo from scratch.',
    includedModules: ['m4', 'm5'], // Visual Identity + Guidelines
    timeline: {
      weeks: 9,
      description: '6 weeks Visual + 2 weeks Guidelines + 1 week overlap'
    },
    bestFor: [
      'Visual refresh without changing brand strategy',
      'Client provides existing strategy or approved logo',
      'Visual cleanup for consistency across channels',
      'Projects with tight timelines and defined scope',
      'Early-stage startups or rebrands on tight timelines'
    ],
    featured: false,
    displayOrder: 1
  },
  {
    id: 'bundle-standard',
    slug: 'brand-identity-standard',
    name: 'Brand Identity Standard',
    tier: 'standard',
    description: 'New brand needing strategic foundations',
    longDescription: 'A full identity design system built on strategic foundations. Includes positioning, messaging, visual identity, and brand guidelines—ideal for brands that need clear articulation and professional execution.',
    includedModules: ['m3', 'm4', 'm5'], // Strategy + Visual + Guidelines
    timeline: {
      weeks: 12,
      description: 'Complete brand foundation with execution'
    },
    bestFor: [
      'New brand needing strategic foundations',
      'Startups entering the market',
      'Established brands undergoing repositioning',
      'To align internal teams and external partners',
      'Foundation for product, marketing, or fundraising efforts'
    ],
    featured: true,
    displayOrder: 2
  },
  {
    id: 'bundle-premium',
    slug: 'brand-identity-premium',
    name: 'Brand Identity Premium',
    tier: 'premium',
    description: 'Research-driven branding for evolving brands',
    longDescription: 'A research-driven branding solution. Combines stakeholder interviews, market insights, strategic positioning, and complete visual system development—built for evolving, merging, or misaligned brands.',
    includedModules: ['m1', 'm3', 'm4', 'm5'], // Audit + Strategy + Visual + Guidelines
    timeline: {
      weeks: 16,
      description: 'Comprehensive research-driven brand development'
    },
    bestFor: [
      'Established companies looking to shift brand direction',
      'Brand misalignment after market changes or growth',
      'Combining multiple perspectives into a unified brand',
      'When insight and validation are needed before strategy',
      'Rebrand with complexity where audit is required',
      'Companies entering new markets or raising investment'
    ],
    featured: true,
    displayOrder: 3
  },
  {
    id: 'bundle-full',
    slug: 'brand-identity-full-program',
    name: 'Brand Identity Full Program',
    tier: 'full',
    description: 'Complete brand creation from naming to guidelines',
    longDescription: 'A comprehensive brand creation program. Includes naming, brand strategy, visual identity, and brand guidelines—ideal for building or relaunching a brand with full alignment and long-term clarity.',
    includedModules: ['m1', 'm2', 'm3', 'm4', 'm5'], // All 5 modules
    timeline: {
      weeks: 22,
      description: 'Full end-to-end brand creation program'
    },
    bestFor: [
      'New companies building full brand system from scratch',
      'Full rebrand with new name and identity',
      'New brand from an existing business (product brand, sub-company)',
      'Comprehensive rebrand with strategic, verbal, and visual components',
      'High-stakes launches, fundraising, or go-to-market efforts',
      'When clarity, consistency, and scalability are top priorities'
    ],
    featured: true,
    displayOrder: 4
  }
];

// Helper functions
export const getBundleBySlug = (slug: string): BrandBundle | undefined => {
  return brandBundles.find(bundle => bundle.slug === slug);
};

export const getBundlesByTier = (tier: 'streamlined' | 'standard' | 'premium' | 'full'): BrandBundle[] => {
  return brandBundles.filter(bundle => bundle.tier === tier);
};

export const getFeaturedBundles = (): BrandBundle[] => {
  return brandBundles.filter(bundle => bundle.featured);
};

// Module inclusion checker
export const bundleIncludesModule = (bundleId: string, moduleId: string): boolean => {
  const bundle = brandBundles.find(b => b.id === bundleId);
  return bundle ? bundle.includedModules.includes(moduleId) : false;
};

// Get all bundles that include a specific module
export const getBundlesWithModule = (moduleId: string): BrandBundle[] => {
  return brandBundles.filter(bundle => bundle.includedModules.includes(moduleId));
};