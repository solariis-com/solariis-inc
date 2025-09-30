# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Lovable-based React/TypeScript single-page application for Solariis Inc, featuring a multi-section landing page with internationalization support (English/Spanish). The project uses Vite, React, shadcn/ui components, and Supabase for backend services.

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Project Structure

The project follows a **feature-based architecture** for better scalability and Claude Code operations:

```
src/
├── app/                        # Application entry points
│   ├── App.tsx                 # Root app component with providers
│   └── main.tsx                # Vite entry point
├── features/                   # Feature-based modules
│   ├── landing/                # Landing page feature
│   │   ├── components/         # Hero, Services, Pricing, FAQ, etc.
│   │   └── index.ts            # Feature exports
│   └── contact/                # Contact form feature
│       ├── components/         # ContactForm
│       └── index.ts            # Feature exports
├── components/                 # Shared/generic components
│   ├── layout/                 # Layout components (Navbar, Footer)
│   └── ui/                     # shadcn/ui primitives
├── i18n/                       # Internationalization
│   ├── locales/                # Translation files (en.ts, es.ts)
│   ├── LanguageContext.tsx     # Language context & hook
│   ├── translations.ts         # Translations aggregator
│   └── index.ts                # Public i18n exports
├── types/                      # TypeScript type definitions
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── integrations/               # Third-party integrations (Supabase)
├── services/                   # API calls & business logic (empty for now)
├── constants/                  # App-wide constants (empty for now)
└── pages/                      # Page components (Index.tsx)
```

### Core Application Flow

**Entry point:** `index.html` → `src/app/main.tsx` → `src/app/App.tsx` → `src/pages/Index.tsx`

**Key providers wrapping the app (in App.tsx):**
- `QueryClientProvider` (TanStack Query) for data fetching
- `LanguageProvider` for i18n state management
- `TooltipProvider` (Radix UI) for tooltip functionality

### Feature Modules

Features are self-contained modules with their own components and logic:

- **`features/landing/`** - All landing page sections (Hero, HowItWorks, Services, Pricing, FAQ, Contact)
- **`features/contact/`** - Contact form functionality

Each feature exports its public API through an `index.ts` file. Import from features like:
```typescript
import { Hero, Services, Pricing } from '@/features/landing';
import { ContactForm } from '@/features/contact';
```

### Internationalization

The i18n system is centralized in `src/i18n/`:
- Language context provides `useLanguage()` hook
- Supported languages: `'en' | 'es'`
- Translation files in `i18n/locales/`
- Import as: `import { useLanguage, translations } from '@/i18n'`

Components access translations:
```typescript
const { language } = useLanguage();
const t = translations[language];
```

### Styling System

Tailwind CSS with extensive custom configuration:
- **Custom design tokens**: spacing, border-radius, shadows, z-index, transitions
- **Typography**: Rethink Sans (heading/body), Julius Sans One (alt)
- **Color palette**: Primary (#FF6A00), Secondary (#E56B55)
- **Component classes**: `.btn-primary`, `.btn-secondary`, `.card-base`, `.input-base`, etc.

Prefer using custom Tailwind classes over inline styles for consistency.

### Path Aliases

```typescript
@/            → src/
@/app         → src/app
@/features    → src/features
@/components  → src/components
@/hooks       → src/hooks
@/lib         → src/lib
@/i18n        → src/i18n
@/types       → src/types
```

### Supabase Integration

Backend configured in `src/integrations/supabase/`:
- `client.ts` - Supabase client instance
- `types.ts` - Auto-generated database types

Import as: `import { supabase } from '@/integrations/supabase/client'`

### Key Libraries

- **React Router DOM** - Routing (single-route SPA)
- **TanStack Query** - Server state management
- **React Hook Form + Zod** - Form handling & validation
- **Radix UI** - Headless accessible components (via shadcn/ui)
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Cal.com Embed** - Calendar scheduling

## Development Best Practices

1. **Feature-based organization**: New features go in `src/features/` with their own directory
2. **Barrel exports**: Each feature/module should export through an `index.ts`
3. **Path aliases**: Always use `@/` imports for consistency
4. **Component placement**:
   - Feature-specific → `features/[feature]/components/`
   - Reusable across features → `components/`
   - UI primitives → `components/ui/`
5. **Type definitions**: Centralize in `src/types/` and export through `index.ts`

## Environment Setup

Copy `.env.example` to `.env` and configure:
```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Development Notes

- Created with Lovable (lovable.dev) - changes via Lovable auto-commit to repo
- Vite dev server with React SWC plugin for fast refresh
- TypeScript strict mode with path aliases
- ESLint configured with React hooks rules
- Component tagging enabled in dev mode via `lovable-tagger`
- VS Code settings configured for team consistency (format on save, ESLint auto-fix)