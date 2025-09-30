export type ServicePhase =
  | 'strategy'
  | 'creativity'
  | 'visual'
  | 'guidelines'
  | 'applications';

export interface ServiceModule {
  id: string;
  slug: string;
  name: string;
  phase: ServicePhase;
  description: string;
  longDescription?: string;
  deliverables: string[];
  estimatedHours: number;
  dependencies?: string[];
  tags?: string[];
  featured?: boolean;
  icon?: string;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServicePhaseGroup {
  phase: ServicePhase;
  label: string;
  description: string;
  services: ServiceModule[];
}

export interface ServiceMatrixFilter {
  phase?: ServicePhase;
  tags?: string[];
  search?: string;
  featured?: boolean;
}

export interface ServiceInquiry {
  id?: string;
  userId?: string;
  email: string;
  fullName: string;
  companyName?: string;
  serviceModules: string[]; // Array of service IDs
  preferredPlanId?: string;
  message?: string;
  telegramUsername?: string;
  status?: 'new' | 'contacted' | 'converted' | 'rejected';
  createdAt?: string;
  updatedAt?: string;
}