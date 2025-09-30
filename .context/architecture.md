# System Architecture

## Overview

Solariis Inc is a full-stack design services platform that enables:
1. Public service discovery via an interactive Service Matrix
2. Subscription-based service packages
3. Authenticated client dashboard for project tracking

## Tech Stack

### Frontend
- **React 18** with **TypeScript** - Component-based UI with type safety
- **Vite** - Fast build tool and dev server with HMR
- **React Router v6** - Client-side routing with protected routes
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library built on Radix UI
- **TanStack Query** - Server state management, caching, optimistic updates
- **Lucide React** - Icon library

### Backend
- **Supabase** - PostgreSQL database, authentication, real-time subscriptions
  - **Auth**: Email/password, OAuth providers
  - **Database**: Relational data with Row Level Security (RLS)
  - **Edge Functions**: Serverless functions for business logic
  - **Storage**: File uploads (future: deliverable previews)

### State Management Strategy
- **Authentication**: React Context (`AuthContext`) + Supabase session
- **Server State**: TanStack Query for API data (services, projects, subscriptions)
- **UI State**: Local `useState` and `useReducer` for component-level state
- **Form State**: React Hook Form + Zod validation
- **Future**: Consider Zustand if Kanban drag-and-drop state becomes complex

### Why This Stack?

**React over Next.js:**
- SPA architecture fits the use case (no SEO requirements for authenticated pages)
- Simpler deployment and dev experience
- Vite provides excellent DX with faster builds

**Supabase over custom backend:**
- Built-in auth reduces implementation time
- PostgreSQL provides relational data modeling
- Real-time updates ideal for Kanban board
- Row Level Security for multi-tenant data isolation

**TanStack Query:**
- Automatic caching and invalidation
- Optimistic updates for better UX
- Built-in loading/error states

## Architecture Patterns

### Feature-Based Structure
```
features/
  ├── auth/           # Self-contained authentication module
  ├── service-matrix/ # Service discovery feature
  ├── subscriptions/  # Subscription plans and CTAs
  ├── dashboard/      # Client portal and Kanban
  ├── landing/        # Marketing pages
  └── contact/        # Contact form
```

Each feature exports a public API via `index.ts` (barrel exports).

### Component Hierarchy
1. **Pages** (`src/pages/`) - Route-level components
2. **Features** (`src/features/`) - Feature-specific components and logic
3. **Shared Components** (`src/components/`) - Reusable across features
4. **UI Primitives** (`src/components/ui/`) - Base design system components

### Data Flow

```
User Action
  ↓
Component Event Handler
  ↓
React Query Mutation/Query
  ↓
API Service Layer (src/services/)
  ↓
Supabase Client
  ↓
PostgreSQL / Auth / Storage
  ↓
React Query Cache Update
  ↓
Component Re-render
```

### Authentication Flow

1. User submits login form
2. `auth.service.ts` calls Supabase Auth
3. Session stored in `AuthContext` + localStorage
4. `ProtectedRoute` checks auth state
5. Redirect to dashboard or login page

### Service Matrix Discovery Flow

1. User lands on `/matrix` page
2. Component fetches services via `matrix.service.ts`
3. TanStack Query caches response
4. User filters by phase (Strategy, Creativity, etc.)
5. Service cards render with details
6. Click service → Modal with full details + deliverables

### Subscription Selection Flow

1. User browses plans on `/subscriptions`
2. Selects plan tier (Starter, Essential, Advanced, Premium)
3. CTA button opens Telegram or contact form
4. (Future) Checkout flow for payment processing

### Client Dashboard Flow

1. Authenticated user navigates to `/dashboard`
2. `useProjects()` hook fetches user's projects
3. Projects displayed in Kanban columns by stage:
   - Brief Received
   - In Progress
   - Review
   - Delivered
4. Drag-and-drop updates project stage
5. Optimistic update via TanStack Query mutation

## Security Considerations

### Row Level Security (RLS)
- Users can only access their own projects and subscriptions
- Service matrix data is public
- Admin role for managing service modules

### Authentication
- Supabase handles password hashing, session management
- JWT tokens with automatic refresh
- Protected routes validate auth state

### API Security
- All mutations require authentication
- Input validation via Zod schemas
- Rate limiting on Edge Functions (future)

## Performance Optimizations

1. **Code Splitting**: React Router lazy loading for routes
2. **Image Optimization**: WebP format, lazy loading
3. **Caching**: TanStack Query aggressive caching strategy
4. **Bundle Size**: Tree-shaking unused components
5. **Real-time Updates**: Supabase subscriptions only for active dashboard

## Scalability Considerations

### Future Enhancements
- **Deliverable Previews**: S3-style storage for files
- **Feedback System**: Comments/revisions on project tasks
- **Team Collaboration**: Multiple users per project
- **Analytics Dashboard**: Usage metrics for admins
- **Payment Integration**: Stripe for subscription billing
- **Notification System**: Email/push notifications for project updates

### Database Scaling
- Supabase automatically scales PostgreSQL
- Indexing on frequently queried fields (user_id, project_id)
- Consider read replicas if analytics queries become heavy

### Frontend Scaling
- CDN deployment (Netlify, Vercel, Cloudflare)
- Separate admin panel if management features grow complex

## Development Workflow

1. **Local Development**: `npm run dev` with Supabase local instance
2. **Database Migrations**: `supabase migration new` for schema changes
3. **Type Generation**: `supabase gen types typescript` for DB types
4. **Testing**: Vitest for unit tests, Playwright for E2E (future)
5. **Deployment**: Git push → Netlify auto-deploy → Supabase production

## Internationalization (i18n)

- **Current**: English/Spanish via custom `LanguageContext`
- **Future**: Consider `react-i18next` if more languages added
- Service matrix content should be translatable
- Dashboard UI strings in translation files

## Design System

- **Tailwind Config**: Custom design tokens in `tailwind.config.ts`
- **Component Library**: shadcn/ui for consistent UI patterns
- **Icons**: Lucide React (consistent icon style)
- **Typography**: Rethink Sans (body/headings), Julius Sans One (accents)
- **Colors**: Primary #FF6A00, Secondary #E56B55