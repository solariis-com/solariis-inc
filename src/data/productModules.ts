import { ServiceModule, ServicePhase } from '@/types/service-matrix';

export const productModules: ServiceModule[] = [
  {
    id: 'p1',
    slug: 'ux-ui-audit-research',
    name: 'UX/UI Audit & Research',
    phase: 'strategy',
    description: 'Evaluation of current product usability and interface through user research, audits, and competitive benchmarking',
    longDescription: 'This one-time audit identifies usability issues and experience gaps across your digital product. Through structured research and interface evaluation, we assess how well your product meets user expectations and business goals.',
    deliverables: [
      'Audit report',
      'User personas',
      'Usability findings',
      'Annotated screenshots',
      'UX recommendations',
      'Audience & persona insights',
      'Competitor benchmarking (SWOT & heuristic analysis)',
      'Issue prioritization',
      'Strategic recommendations'
    ],
    estimatedHours: 160, // 2-3 weeks
    dependencies: [],
    tags: ['ux', 'ui', 'research', 'audit', 'usability'],
    featured: true,
    displayOrder: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p2',
    slug: 'product-requirements-definition',
    name: 'Product Requirements Definition (PRD)',
    phase: 'strategy',
    description: 'Translate goals into technical and user documentation: features, journeys, and dependencies',
    longDescription: 'Product Requirements Definition provides a strategic foundation for product execution by aligning business goals with user needs. This module translates ideas into actionable features and user flows, serving as the bridge between product vision and development.',
    deliverables: [
      'Feature list',
      'User stories',
      'User journeys',
      'Timeline estimates',
      'Tech dependencies documentation'
    ],
    estimatedHours: 120, // 2-3 weeks
    dependencies: [],
    tags: ['prd', 'requirements', 'documentation', 'planning'],
    featured: true,
    displayOrder: 2,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p3',
    slug: 'mvp-design',
    name: 'MVP Design',
    phase: 'creativity',
    description: 'Design and prototype of a minimum viable product focused on core user flows and features',
    longDescription: 'Design and prototype of a minimum viable product focused on core user flows and features. We transform your product vision into tangible designs that validate your concept and guide development.',
    deliverables: [
      'Wireframes',
      'Mockups',
      'Clickable prototype of MVP',
      'High-fidelity designs',
      'Interaction specifications'
    ],
    estimatedHours: 200, // 3-5 weeks
    dependencies: ['p2'], // Ideally after PRD
    tags: ['mvp', 'design', 'prototype', 'wireframes'],
    featured: true,
    displayOrder: 3,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p4',
    slug: 'user-journey-mapping-wireframes',
    name: 'User Journey Mapping & Wireframes',
    phase: 'strategy',
    description: 'Mapping of user flows and creation of low-fidelity wireframes to define key experiences',
    longDescription: 'We map out how users interact with your product from start to finish, identifying key touchpoints and creating wireframes that establish the foundation for intuitive user experiences.',
    deliverables: [
      'User journey maps',
      'Low-fidelity wireframes for key screens',
      'Flow diagrams',
      'Use case documentation'
    ],
    estimatedHours: 80, // 1-2 weeks
    dependencies: [],
    tags: ['wireframes', 'user-journey', 'ux', 'flows'],
    featured: false,
    displayOrder: 4,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p5',
    slug: 'product-mockups-prototypes',
    name: 'Product Mockups & Prototypes',
    phase: 'visual',
    description: 'Design high-fidelity visual mockups and build interactive prototypes for testing and review',
    longDescription: 'Transform wireframes into polished, pixel-perfect designs with interactive prototypes that bring your product to life. Perfect for stakeholder review, user testing, and developer handoff.',
    deliverables: [
      'UI mockups',
      'Design assets',
      'Interactive prototype (Figma or similar)',
      'Design specifications',
      'Asset library'
    ],
    estimatedHours: 160, // 2-4 weeks
    dependencies: ['p4'], // After wireframes
    tags: ['mockups', 'prototype', 'ui', 'design'],
    featured: true,
    displayOrder: 5,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p6',
    slug: 'mobile-app-design',
    name: 'Mobile App Design',
    phase: 'visual',
    description: 'Design tailored interfaces and interactions for mobile iOS and Android experiences',
    longDescription: 'Native-feeling mobile experiences designed specifically for iOS and Android platforms. We follow platform guidelines while maintaining your brand identity and creating intuitive touch interactions.',
    deliverables: [
      'Mobile UI mockups',
      'Platform-specific components',
      'Screen flows',
      'Interaction patterns',
      'Responsive designs'
    ],
    estimatedHours: 160, // 3-4 weeks
    dependencies: [],
    tags: ['mobile', 'ios', 'android', 'app-design'],
    featured: true,
    displayOrder: 6,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p7',
    slug: 'design-system-components',
    name: 'Design System & Components',
    phase: 'guidelines',
    description: 'Creation of scalable UI components, tokens, and design documentation for consistent execution',
    longDescription: 'Build a comprehensive design system that ensures consistency across your product. Includes reusable components, design tokens, and documentation that empowers your team to design and build faster.',
    deliverables: [
      'Component library',
      'Design tokens',
      'Figma files',
      'Usage documentation',
      'Code snippets (optional)',
      'Component variations'
    ],
    estimatedHours: 240, // 4-6 weeks
    dependencies: ['p5'], // After initial UI is established
    tags: ['design-system', 'components', 'documentation', 'figma'],
    featured: true,
    displayOrder: 7,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p8',
    slug: 'data-visualization-dashboards',
    name: 'Data Visualization & Dashboards',
    phase: 'visual',
    description: 'Design of interactive dashboards and visual systems for complex data and reporting',
    longDescription: 'Transform complex data into clear, actionable insights through thoughtfully designed dashboards and data visualizations. We make numbers meaningful and decisions easier.',
    deliverables: [
      'Data dashboard mockups',
      'Chart components',
      'Responsive screens',
      'Data visualization patterns',
      'Interactive elements'
    ],
    estimatedHours: 120, // 2-3 weeks
    dependencies: [],
    tags: ['dashboards', 'data-viz', 'analytics', 'reporting'],
    featured: false,
    displayOrder: 8,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p9',
    slug: 'product-maintenance-qa-support',
    name: 'Product Maintenance & QA Support',
    phase: 'applications',
    description: 'Ongoing design support for improvements, edge case fixes, and UI QA review post-launch',
    longDescription: 'Keep your product polished and consistent post-launch. We provide ongoing design support, QA reviews, and continuous improvements to ensure your product stays pixel-perfect.',
    deliverables: [
      'Design revisions',
      'Annotated fixes',
      'QA reports',
      'Edge case solutions',
      'Improvement recommendations'
    ],
    estimatedHours: 0, // Ongoing/variable
    dependencies: [],
    tags: ['maintenance', 'qa', 'support', 'ongoing'],
    featured: false,
    displayOrder: 9,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Helper function to get modules by phase
export const getProductModulesByPhase = (phase: ServicePhase): ServiceModule[] => {
  return productModules.filter(module => module.phase === phase);
};

// Helper function to get featured modules
export const getFeaturedProductModules = (): ServiceModule[] => {
  return productModules.filter(module => module.featured);
};

// Helper function to get module by slug
export const getProductModuleBySlug = (slug: string): ServiceModule | undefined => {
  return productModules.find(module => module.slug === slug);
};