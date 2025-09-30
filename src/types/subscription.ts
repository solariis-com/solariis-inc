export interface SubscriptionPlan {
  id: string;
  slug: string;
  name: string;
  description?: string;
  hoursPerMonth: number;
  priceMonthly?: number;
  priceYearly?: number;
  features: string[];
  recommended?: boolean;
  active: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export type SubscriptionStatus =
  | 'pending'
  | 'active'
  | 'paused'
  | 'cancelled'
  | 'expired';

export type BillingCycle = 'monthly' | 'yearly';

export interface UserSubscription {
  id: string;
  userId: string;
  planId: string;
  plan?: SubscriptionPlan; // Populated via join
  status: SubscriptionStatus;
  hoursRemaining: number | null;
  billingCycle: BillingCycle;
  startDate: string;
  endDate?: string | null;
  nextBillingDate?: string | null;
  stripeSubscriptionId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SubscriptionUsage {
  totalHoursIncluded: number;
  hoursUsed: number;
  hoursRemaining: number;
  percentageUsed: number;
  renewalDate: string | null;
}