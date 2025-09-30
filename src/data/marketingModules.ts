import { ServiceModule, ServicePhase } from '@/types/service-matrix';

export const marketingModules: ServiceModule[] = [
  {
    id: 'dm1',
    slug: 'marketing-audit-research',
    name: 'Marketing Audit & Research',
    phase: 'strategy',
    description: 'Audit of digital presence and competitors',
    longDescription: 'We analyze your current digital marketing performance, competitive landscape, and identify opportunities for growth. This audit provides a clear picture of where you stand and where you should focus your efforts.',
    deliverables: [
      'Digital audit report',
      'Channel analysis',
      'SEO audit',
      'Performance benchmarking',
      'Competitive landscape analysis',
      'Marketing recommendations'
    ],
    estimatedHours: 120, // 2-3 weeks
    dependencies: [],
    tags: ['marketing', 'audit', 'seo', 'analytics'],
    featured: true,
    displayOrder: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'dm2',
    slug: 'digital-seo-strategy',
    name: 'Digital & SEO Strategy',
    phase: 'strategy',
    description: 'Development of marketing strategy',
    longDescription: 'Comprehensive marketing strategy that aligns your business goals with the right channels, messaging, and SEO approach. We create a roadmap for sustainable growth and visibility.',
    deliverables: [
      'Marketing strategy deck',
      'SEO plan',
      'Channel plan',
      'Content strategy',
      'Messaging framework',
      'KPI dashboard'
    ],
    estimatedHours: 160, // 3-4 weeks
    dependencies: ['dm1'], // Ideally after audit
    tags: ['strategy', 'seo', 'marketing', 'planning'],
    featured: true,
    displayOrder: 2,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'dm3',
    slug: 'content-creation',
    name: 'Content Creation',
    phase: 'creativity',
    description: 'Creation of copy, visuals, and motion content',
    longDescription: 'From compelling copy to eye-catching visuals and engaging videos, we create content that resonates with your audience and drives action. All aligned with your brand voice and marketing goals.',
    deliverables: [
      'Content calendar',
      'Copywriting',
      'Designed assets',
      'Videos / motion graphics',
      'Social media content',
      'Blog posts / articles',
      'Email templates'
    ],
    estimatedHours: 200, // 4-6 weeks
    dependencies: ['dm2'], // After strategy is defined
    tags: ['content', 'copywriting', 'creative', 'video'],
    featured: true,
    displayOrder: 3,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'dm4',
    slug: 'social-media-management',
    name: 'Social Media Management',
    phase: 'applications',
    description: 'Management of organic & paid campaigns',
    longDescription: 'End-to-end social media management including content planning, creation, scheduling, community management, and paid advertising. We keep your brand active and engaged across all relevant platforms.',
    deliverables: [
      'Scheduled posts',
      'Ad campaigns',
      'Performance reports',
      'Community management',
      'Content calendar',
      'Ad creative',
      'Analytics dashboard'
    ],
    estimatedHours: 0, // Ongoing
    dependencies: ['dm3'], // After initial content is created
    tags: ['social-media', 'advertising', 'management', 'ongoing'],
    featured: true,
    displayOrder: 4,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'dm5',
    slug: 'campaign-design-reporting',
    name: 'Campaign Design & Reporting',
    phase: 'applications',
    description: 'End-to-end campaign execution & measurement',
    longDescription: 'From concept to launch to analysis, we handle complete campaign execution. We design compelling campaigns, manage their rollout across channels, and provide detailed reporting on performance and ROI.',
    deliverables: [
      'Campaign creative',
      'Launch assets',
      'Analytics reports',
      'A/B test results',
      'Performance optimization recommendations',
      'Campaign deck'
    ],
    estimatedHours: 240, // 4-8 weeks
    dependencies: ['dm2'], // After strategy
    tags: ['campaigns', 'reporting', 'analytics', 'marketing'],
    featured: true,
    displayOrder: 5,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Helper function to get modules by phase
export const getMarketingModulesByPhase = (phase: ServicePhase): ServiceModule[] => {
  return marketingModules.filter(module => module.phase === phase);
};

// Helper function to get featured modules
export const getFeaturedMarketingModules = (): ServiceModule[] => {
  return marketingModules.filter(module => module.featured);
};

// Helper function to get module by slug
export const getMarketingModuleBySlug = (slug: string): ServiceModule | undefined => {
  return marketingModules.find(module => module.slug === slug);
};