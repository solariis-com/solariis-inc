import type { User, Session } from '@supabase/supabase-js';

export type { User, Session };

export interface Profile {
  id: string;
  full_name: string | null;
  company_name: string | null;
  role: 'client' | 'admin';
  avatar_url: string | null;
  telegram_username: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthContextValue {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, metadata?: SignUpMetadata) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
}

export interface SignUpMetadata {
  full_name?: string;
  company_name?: string;
  telegram_username?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  companyName?: string;
  telegramUsername?: string;
}