# API Contracts

## Base Configuration

```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

All requests authenticated via Supabase client with JWT token in headers.

## Authentication APIs

### POST `/auth/v1/signup`
**Create new user account**

```typescript
Request:
{
  email: string;
  password: string;
  options?: {
    data: {
      full_name?: string;
      company_name?: string;
      telegram_username?: string;
    }
  }
}

Response:
{
  user: User;
  session: Session;
}
```

### POST `/auth/v1/token?grant_type=password`
**Login with email/password**

```typescript
Request:
{
  email: string;
  password: string;
}

Response:
{
  access_token: string;
  refresh_token: string;
  user: User;
}
```

### POST `/auth/v1/logout`
**Sign out current user**

## Service Matrix APIs

### GET `/rest/v1/service_modules`
**Fetch all service modules**

```typescript
Query Params:
  - phase?: 'strategy' | 'creativity' | 'visual' | 'guidelines' | 'applications'
  - active=eq.true
  - select=*
  - order=display_order.asc

Response:
ServiceModule[]
```

### GET `/rest/v1/service_modules?id=eq.{id}`
**Fetch single service by ID**

```typescript
Response:
ServiceModule
```

## Subscription APIs

### GET `/rest/v1/subscription_plans`
**Fetch all subscription plans**

```typescript
Query Params:
  - active=eq.true
  - order=display_order.asc

Response:
SubscriptionPlan[]
```

### GET `/rest/v1/user_subscriptions?user_id=eq.{userId}`
**Fetch user's subscriptions**

```typescript
Query Params:
  - select=*,subscription_plans(*)
  - user_id=eq.{auth.uid()}

Response:
{
  id: string;
  status: 'active' | 'pending' | 'paused' | 'cancelled';
  hours_remaining: number;
  plan: SubscriptionPlan;
  ...
}[]
```

### POST `/rest/v1/user_subscriptions`
**Create new subscription** (admin only)

```typescript
Request:
{
  user_id: string;
  plan_id: string;
  status: 'active';
  hours_remaining: number;
  start_date: string;
  next_billing_date: string;
}

Response:
UserSubscription
```

## Project APIs

### GET `/rest/v1/projects?user_id=eq.{userId}`
**Fetch user's projects**

```typescript
Query Params:
  - user_id=eq.{auth.uid()}
  - archived=eq.false
  - select=*,project_tasks(*)
  - order=created_at.desc

Response:
Project[]
```

### POST `/rest/v1/projects`
**Create new project** (admin only)

```typescript
Request:
{
  user_id: string;
  subscription_id?: string;
  title: string;
  description?: string;
  stage: 'brief' | 'in_progress' | 'review' | 'delivered';
  estimated_hours?: number;
  deadline?: string;
}

Response:
Project
```

### PATCH `/rest/v1/projects?id=eq.{projectId}`
**Update project (e.g., change stage)**

```typescript
Request:
{
  stage?: 'brief' | 'in_progress' | 'review' | 'delivered';
  hours_spent?: number;
  completed_at?: string;
  ...
}

Response:
Project
```

### GET `/rest/v1/project_tasks?project_id=eq.{projectId}`
**Fetch tasks for a project**

```typescript
Query Params:
  - project_id=eq.{projectId}
  - order=display_order.asc

Response:
ProjectTask[]
```

### PATCH `/rest/v1/project_tasks?id=eq.{taskId}`
**Update task status or order**

```typescript
Request:
{
  status?: 'todo' | 'in_progress' | 'done';
  display_order?: number;
}

Response:
ProjectTask
```

## Inquiry APIs

### POST `/rest/v1/service_inquiries`
**Submit service inquiry (public)**

```typescript
Request:
{
  email: string;
  full_name: string;
  company_name?: string;
  service_modules: string[]; // Array of service IDs
  preferred_plan_id?: string;
  message?: string;
  telegram_username?: string;
}

Response:
ServiceInquiry
```

### GET `/rest/v1/service_inquiries` (admin only)
**Fetch all inquiries**

```typescript
Query Params:
  - status=eq.new
  - order=created_at.desc

Response:
ServiceInquiry[]
```

## Real-time Subscriptions

### Projects Channel
**Listen to project updates**

```typescript
supabase
  .channel('projects')
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'projects',
    filter: `user_id=eq.${userId}`
  }, (payload) => {
    // Handle project update
  })
  .subscribe();
```

## Error Responses

All errors follow Supabase format:

```typescript
{
  message: string;
  details: string;
  hint: string;
  code: string; // e.g., '23505' for unique violation
}
```

## Rate Limiting

- Supabase default: 100 requests/second per IP
- Auth endpoints: 30 requests/hour for signup
- Custom rate limiting via Edge Functions (future)

## Future Endpoints

- `POST /functions/v1/send-notification` - Email/push notifications
- `POST /functions/v1/stripe-webhook` - Payment webhooks
- `GET /functions/v1/generate-invoice` - PDF invoice generation