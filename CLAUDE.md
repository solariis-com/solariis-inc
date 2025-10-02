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

```
src/
├── App.tsx                     # Root app component with providers
├── main.tsx                    # Vite entry point
├── components/                 # Shared components
│   ├── sections/               # Page sections (Hero, Features, Categories)
│   ├── ui/                     # shadcn/ui primitives
│   ├── Navbar.tsx              # Main navigation
│   ├── Footer.tsx              # Footer with contact info
│   └── ContactForm.tsx         # Contact form component
├── contexts/                   # React contexts
│   └── LanguageContext.tsx     # Language switching context
├── translations/               # Internationalization
│   ├── en.ts                   # English translations
│   ├── es.ts                   # Spanish translations
│   └── index.ts                # Translation exports
├── types/                      # TypeScript type definitions
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── integrations/               # Third-party integrations
│   └── supabase/               # Supabase client & types
├── services/                   # API calls & business logic
├── constants/                  # App-wide constants
├── assets/                     # Static assets (images, SVGs)
└── pages/                      # Page components
    └── Index.tsx               # Main landing page
```

### Core Application Flow

**Entry point:** `index.html` → `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`

**Key providers wrapping the app (in App.tsx):**
- `QueryClientProvider` (TanStack Query) for data fetching
- `LanguageProvider` for i18n state management
- `TooltipProvider` (Radix UI) for tooltip functionality

### Internationalization

The i18n system is managed through:
- `src/contexts/LanguageContext.tsx` - Language context & hook
- `src/translations/` - Translation files (en.ts, es.ts)
- Supported languages: `'en' | 'es'`

Components access translations:
```typescript
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const { language } = useLanguage();
const t = translations[language];
```

### Styling System

Tailwind CSS with extensive custom configuration:
- **Typography**: Rethink Sans (body), Julius Sans One (headings)
- **Color palette**:
  - Primary: #FF6A00 (orange)
  - Coral: #E56B55, #D04C30, #F7C7B6
  - Teal: #72C0A8, #5BA88F, #8FCEB9
  - Neutral: Beige (#EADCD4), Brown (#52342D)
- **Custom spacing**: 8px base grid system
- **Typography scale**: Responsive with clamp() for fluid sizing
- **Animations**: fade-up, fade-in keyframes

### Path Aliases

```typescript
@/            → src/
```

No other path aliases are currently configured. All imports use relative paths.

### Supabase Integration

Backend configured in `src/integrations/supabase/`:
- `client.ts` - Supabase client instance
- `types.ts` - Auto-generated database types

Import as: `import { supabase } from '@/integrations/supabase/client'`

### Key Libraries

- **React Router DOM** - Routing (currently single-route SPA)
- **TanStack Query** - Server state management
- **React Hook Form + Zod** - Form handling & validation
- **Radix UI** - Headless accessible components (via shadcn/ui)
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## Development Best Practices

1. **Component organization**: Section components go in `src/components/sections/`
2. **Reusable components**: Generic components in `src/components/`
3. **UI primitives**: shadcn/ui components in `src/components/ui/`
4. **Type definitions**: Centralize in `src/types/`
5. **Translations**: Add new strings to both `en.ts` and `es.ts`

## Environment Setup

Copy `.env.example` to `.env` and configure:
```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Development Notes

- Created with Lovable (lovable.dev) - changes via Lovable auto-commit to repo
- Vite dev server with React SWC plugin for fast refresh
- TypeScript strict mode enabled
- ESLint configured with React hooks rules
- Component tagging enabled in dev mode via `lovable-tagger`
- VS Code settings configured for team consistency (format on save, ESLint auto-fix)

## Important Instruction Reminders

- Do what has been asked; nothing more, nothing less
- NEVER create files unless they're absolutely necessary for achieving your goal
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (*.md) or README files unless explicitly requested by the user
