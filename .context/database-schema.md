# Database Schema

## Overview

Supabase PostgreSQL database schema for Solariis platform.

## Tables

### 1. `users` (Supabase Auth)
Managed by Supabase Auth, extended with metadata.

```sql
-- Supabase Auth table (managed automatically)
-- Extended via profiles table or user_metadata
```

### 2. `profiles`
Extended user information beyond auth.

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  company_name TEXT,
  role TEXT DEFAULT 'client', -- 'client' | 'admin'
  avatar_url TEXT,
  telegram_username TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policy: Users can only read/update their own profile
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);
```

### 3. `service_modules`
Service Matrix content (Strategy, Creativity, Visual, Guidelines, Applications).

```sql
CREATE TABLE service_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL, -- e.g., 'strategy-brand-strategy'
  name TEXT NOT NULL,
  phase TEXT NOT NULL CHECK (phase IN ('strategy', 'creativity', 'visual', 'guidelines', 'applications')),
  description TEXT NOT NULL,
  long_description TEXT,
  deliverables JSONB DEFAULT '[]'::jsonb, -- Array of strings
  estimated_hours INTEGER NOT NULL,
  dependencies JSONB DEFAULT '[]'::jsonb, -- Array of service_module IDs
  tags JSONB DEFAULT '[]'::jsonb, -- Array of strings
  featured BOOLEAN DEFAULT FALSE,
  icon TEXT, -- Lucide icon name or emoji
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policy: Public read access (no auth required)
ALTER TABLE service_modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service modules are publicly readable"
  ON service_modules FOR SELECT
  USING (active = TRUE);

-- Admin-only write access (future)
CREATE POLICY "Only admins can modify services"
  ON service_modules FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );
```

### 4. `subscription_plans`
Available subscription tiers.

```sql
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL, -- e.g., 'starter', 'essential'
  name TEXT NOT NULL, -- 'Starter', 'Essential', etc.
  description TEXT,
  hours_per_month INTEGER NOT NULL,
  price_monthly DECIMAL(10, 2),
  price_yearly DECIMAL(10, 2),
  features JSONB DEFAULT '[]'::jsonb, -- Array of feature strings
  recommended BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policy: Public read
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Plans are publicly readable"
  ON subscription_plans FOR SELECT
  USING (active = TRUE);
```

### 5. `user_subscriptions`
User's active or past subscriptions.

```sql
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES subscription_plans(id),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'paused', 'cancelled', 'expired')),
  hours_remaining INTEGER, -- Tracks unused hours for current billing period
  billing_cycle TEXT DEFAULT 'monthly' CHECK (billing_cycle IN ('monthly', 'yearly')),
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  next_billing_date TIMESTAMP WITH TIME ZONE,
  stripe_subscription_id TEXT, -- For payment integration (future)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policy: Users can only see their own subscriptions
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
  ON user_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON user_subscriptions FOR UPDATE
  USING (auth.uid() = user_id);
```

### 6. `projects`
Client projects tracked in the dashboard.

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES user_subscriptions(id),
  title TEXT NOT NULL,
  description TEXT,
  stage TEXT NOT NULL DEFAULT 'brief' CHECK (stage IN ('brief', 'in_progress', 'review', 'delivered')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  estimated_hours INTEGER,
  hours_spent INTEGER DEFAULT 0,
  deadline DATE,
  notes TEXT, -- Internal notes (admin-visible)
  client_notes TEXT, -- Client-facing notes
  archived BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Indexes for performance
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_stage ON projects(stage);
CREATE INDEX idx_projects_archived ON projects(archived);

-- RLS Policy: Users can only see their own projects
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own projects"
  ON projects FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects"
  ON projects FOR UPDATE
  USING (auth.uid() = user_id);
```

### 7. `project_tasks`
Subtasks within a project (for Kanban granularity).

```sql
CREATE TABLE project_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'done')),
  display_order INTEGER DEFAULT 0, -- For drag-and-drop ordering
  assigned_to UUID REFERENCES auth.users(id), -- For team collaboration (future)
  due_date DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for performance
CREATE INDEX idx_project_tasks_project_id ON project_tasks(project_id);

-- RLS Policy: Inherit from projects table
ALTER TABLE project_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view tasks for own projects"
  ON project_tasks FOR SELECT
  USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can modify tasks for own projects"
  ON project_tasks FOR ALL
  USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );
```

### 8. `service_inquiries`
Tracks user interest in services (before becoming a project).

```sql
CREATE TABLE service_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  email TEXT, -- For non-authenticated inquiries
  full_name TEXT,
  company_name TEXT,
  service_modules JSONB DEFAULT '[]'::jsonb, -- Array of service_module IDs
  preferred_plan_id UUID REFERENCES subscription_plans(id),
  message TEXT,
  telegram_username TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for admin dashboard
CREATE INDEX idx_inquiries_status ON service_inquiries(status);

-- RLS Policy: Users can create inquiries, admins can read all
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create inquiry"
  ON service_inquiries FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "Users can view own inquiries"
  ON service_inquiries FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all inquiries"
  ON service_inquiries FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );
```

### 9. `contact_submissions` (existing)
Keep existing contact form table, already in use.

## Relationships

```
profiles (1) ────────────> user_subscriptions (many)
   │                              │
   │                              │
   └──────────────────> projects (many)
                              │
                              │
                              └──────────> project_tasks (many)

subscription_plans (1) ──> user_subscriptions (many)

service_modules (many) <──> service_inquiries (many)
```

## Indexes

```sql
-- Performance indexes
CREATE INDEX idx_projects_user_stage ON projects(user_id, stage);
CREATE INDEX idx_tasks_project_order ON project_tasks(project_id, display_order);
CREATE INDEX idx_subscriptions_user_status ON user_subscriptions(user_id, status);
```

## Functions & Triggers

### Auto-update `updated_at` timestamp

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all relevant tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_project_tasks_updated_at BEFORE UPDATE ON project_tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Repeat for other tables...
```

### Auto-create profile on user signup

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## Migration Strategy

1. **Initial migration**: Create all tables
2. **Seed data**: Insert default subscription_plans and service_modules
3. **RLS policies**: Apply all row-level security policies
4. **Indexes**: Create performance indexes
5. **Triggers**: Setup auto-update triggers

## Future Enhancements

- **`deliverables`** table: Track files uploaded for each project
- **`comments`** table: Feedback/revision system
- **`notifications`** table: User notifications for project updates
- **`teams`** table: Multi-user collaboration
- **`invoices`** table: Billing history
- **`time_logs`** table: Track hours per project/task