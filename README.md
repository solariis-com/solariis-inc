# Solariis Inc - B2B Platform

A modern B2B web platform connecting international beauty and wellness brands with the Venezuelan market through a network of distributors and resellers.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Design System](#design-system)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API & Backend Services](#api--backend-services)
- [Deployment](#deployment)
- [Known Issues & Limitations](#known-issues--limitations)
- [Credits](#credits)
- [License](#license)

## Overview

Solariis Inc is a distribution platform designed to bridge international health, beauty, and wellness brands with Venezuelan consumers. The platform provides:

- **For Brands**: Market entry solutions, comprehensive distribution network, and local market expertise
- **For Distributors**: Access to premium international brands, partnership opportunities, and business growth tools
- **For End Users**: Information about product categories, brand partnerships, and contact channels

This is a multi-page, bilingual (English/Spanish) React application with a focus on user experience, accessibility, and modern web standards.

## Key Features

✨ **Core Functionality**
- **Multi-language Support**: Full English/Spanish translation system with context-based language switching
- **Responsive Design**: Mobile-first approach with fluid typography and adaptive layouts
- **Multiple Routes**: Home, About, Categories, and Contact pages
- **Contact Form**: Integrated form with Supabase backend for inquiries
- **Distributor Authentication**: Login portal for existing distributors and resellers
- **Appointment Scheduling**: Cal.com integration for partner meetings
- **Toast Notifications**: User feedback via Sonner toast library

🎨 **Design System**
- Custom color palette: Primary orange (#FF6A00), coral, teal, and neutral tones
- Typography: Julius Sans One (headings) + Rethink Sans (body)
- shadcn/ui component library with Radix UI primitives
- Custom animations: fade-up, fade-in transitions
- 8px grid spacing system

## Design System

A comprehensive design system built with Tailwind CSS, providing consistent visual language across the application.

### Color Palette

#### Primary Colors
- **Primary Orange**: `#FF6A00`
  - Dark: `#CC5500`
  - Light: `#FF8533`

#### Coral
- **Coral**: `#E56B55`
  - Dark: `#D04C30`
  - Light: `#F7C7B6`

#### Teal
- **Teal**: `#72C0A8`
  - Dark: `#5BA88F`
  - Light: `#8FCEB9`

#### Neutral Colors
- **Beige**: `#EADCD4`
- **Brown**: `#52342D`

#### Text Colors
- **Default Text**: `#52342D` (brown)
- **Light Text**: `#7A5C55`

#### Accent Colors
- **White**: `#FFFFFF`
- **Off-White**: `#F7F7F7`

#### System Colors (CSS Variables)
- **Border**: `hsl(var(--border))`
- **Input**: `hsl(var(--input))`
- **Ring**: `hsl(var(--ring))`
- **Background**: `hsl(var(--background))`
- **Foreground**: `hsl(var(--foreground))`

### Typography

#### Font Families
- **Headings**: Julius Sans One (sans-serif)
- **Body Text**: Rethink Sans (sans-serif)

#### Font Scale

All font sizes use responsive `clamp()` values for fluid typography:

| Style | Size | Line Height | Weight | Additional |
|-------|------|-------------|--------|------------|
| **Display** | `clamp(2rem, 5vw, 3rem)` | 1.1 | 500 | - |
| **H1** | `clamp(1.75rem, 4vw, 2.5rem)` | 1.2 | 500 | - |
| **H2** | `clamp(1.5rem, 3vw, 2rem)` | 1.2 | - | - |
| **H3** | `clamp(1.25rem, 2.5vw, 1.75rem)` | 1.3 | - | - |
| **H4** | `clamp(1.125rem, 2vw, 1.5rem)` | 1.4 | - | - |
| **Body Large** | `clamp(1rem, 1.5vw, 1.125rem)` | 1.6 | 100 | - |
| **Body** | `clamp(0.875rem, 1.25vw, 1.125rem)` | 1.5 | 100 | - |
| **Body Small** | `clamp(0.75rem, 1vw, 1rem)` | 1.4 | 100 | - |
| **Button** | `1rem` | 1.5 | - | Letter spacing: 0.05em, Uppercase |
| **Caption** | `0.75rem` | 1.4 | - | - |
| **Input** | `1rem` | 1.5 | - | - |

#### Usage in Tailwind

```jsx
// Headings
<h1 className="font-heading text-h1">Page Title</h1>
<h2 className="font-heading text-h2">Section Title</h2>

// Body text
<p className="font-body text-body">Regular paragraph text</p>
<p className="font-body text-body-lg">Large body text</p>
```

### Design Tokens

#### Spacing System
- **Base Grid**: 8px
- Tailwind's default spacing scale applies (4, 8, 12, 16, 24, 32, 40, 48, 64, etc.)

#### Animations

**Fade Up**
```css
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
```
- Duration: 0.5s
- Easing: ease-out
- Usage: `animate-fade-up`

**Fade In**
```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```
- Duration: 0.5s
- Easing: ease-out
- Usage: `animate-fade-in`

### Accessing the Design System

The complete design system configuration is defined in `tailwind.config.ts`. Import and use Tailwind utility classes throughout the application:

```tsx
import { cn } from "@/lib/utils"; // Tailwind class name helper

<div className="bg-primary text-white p-8">
  <h2 className="font-heading text-h2 text-coral">
    Design System
  </h2>
  <p className="font-body text-body text-neutral-brown">
    Consistent, beautiful interfaces.
  </p>
</div>
```

## Tech Stack

### Frontend
- **React** 18.3.1 - UI library
- **TypeScript** 5.5.3 - Type safety
- **Vite** 5.4.1 - Build tool with React SWC plugin for fast refresh
- **React Router DOM** 6.26.2 - Client-side routing

### Styling
- **Tailwind CSS** 3.4.11 - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Headless accessible components
- **tailwindcss-animate** - Animation utilities

### State & Data Management
- **TanStack Query** 5.56.2 - Server state management
- **React Context API** - Language preference management
- **React Hook Form** 7.53.0 - Form handling
- **Zod** 3.23.8 - Schema validation

### Backend & Services
- **Supabase** 2.47.12 - Authentication, database, and backend functions
- **Netlify** - Hosting and deployment platform
- **Cal.com** - Appointment scheduling integration

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Lovable Tagger** - Component tagging in development mode
- **PostCSS** + **Autoprefixer** - CSS processing

### UI Components & Icons
- **Lucide React** 0.462.0 - Icon library
- **Sonner** 1.5.0 - Toast notifications
- **cmdk** 1.0.0 - Command palette components
- **Recharts** 2.12.7 - Charting library
- **date-fns** 3.6.0 - Date utilities

## Installation

### Prerequisites
- **Node.js** 18+ (recommended: install via [nvm](https://github.com/nvm-sh/nvm))
- **npm** (comes with Node.js)
- **Git**

### Steps

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd solariis-inc

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start Vite dev server (port 8080)
npm run build        # Production build
npm run build:dev    # Development mode build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Environment Configuration

### Supabase Configuration

The Supabase client credentials are currently hardcoded in `src/integrations/supabase/client.ts`. For production environments or team development, you should use environment variables instead.

**Current Setup** (hardcoded):
```typescript
// src/integrations/supabase/client.ts
const SUPABASE_URL = "https://enimyfcidsobjasccpxw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
```

**Recommended Setup** (using `.env`):

Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=https://enimyfcidsobjasccpxw.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Then update `client.ts` to use:
```typescript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

> ⚠️ **Security Note**: Never commit `.env` files to version control. Add `.env` to `.gitignore`.

## Usage

### Accessing the Application

After running `npm run dev`, the application is available at `http://localhost:8080`

**Available Routes:**
- `/` - Home page (landing page with hero, features, categories)
- `/about` - About Solariis Inc
- `/categories` - Product categories showcase
- `/contact` - Contact form and information

### Language Switching

The application supports English and Spanish. Users can switch languages via the language toggle in the navigation bar.

**Default Language**: Spanish (configured in `src/contexts/LanguageContext.tsx:13`)

To change the default language, edit:
```typescript
// src/contexts/LanguageContext.tsx
const [language, setLanguage] = useState<Language>('en'); // Change 'es' to 'en'
```

### Contact Form

The contact form on `/contact` integrates with Supabase Edge Functions:
- Form validation via React Hook Form + Zod
- Backend processing through `supabase/functions/send-contact-email`
- Toast notifications for success/error feedback

### Distributor Login

Distributors can access their accounts via the login form in the footer:
- Authentication handled by Supabase Auth
- Session management
- Error handling with localized messages

## Project Structure

```
solariis-inc/
├── public/                          # Static assets
│   └── lovable-uploads/             # Uploaded images and media
├── src/
│   ├── main.tsx                     # Vite entry point
│   ├── App.tsx                      # Root component with providers & routing
│   ├── components/                  # React components
│   │   ├── sections/                # Page section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── CategoryList.tsx
│   │   │   ├── CategoryHero.tsx
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── PartnerWithUs.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   ├── ui/                      # shadcn/ui components (40+ components)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── Navbar.tsx               # Main navigation
│   │   ├── Footer.tsx               # Footer with login & links
│   │   └── ContactForm.tsx          # Contact form component
│   ├── pages/                       # Page components
│   │   ├── Index.tsx                # Home/landing page
│   │   ├── About.tsx                # About page
│   │   ├── Categories.tsx           # Categories page
│   │   └── Contact.tsx              # Contact page
│   ├── contexts/
│   │   └── LanguageContext.tsx      # i18n context & hook
│   ├── translations/                # Internationalization
│   │   ├── en.ts                    # English translations
│   │   ├── es.ts                    # Spanish translations
│   │   └── index.ts                 # Translation exports
│   ├── integrations/
│   │   └── supabase/                # Supabase integration
│   │       ├── client.ts            # Supabase client instance
│   │       └── types.ts             # Auto-generated DB types
│   ├── hooks/                       # Custom React hooks
│   ├── lib/                         # Utility functions
│   ├── types/                       # TypeScript type definitions
│   ├── services/                    # API calls & business logic
│   ├── constants/                   # App-wide constants
│   └── assets/                      # Images, SVGs, fonts
├── supabase/
│   └── functions/
│       └── send-contact-email/      # Edge function for contact form
├── index.html                       # HTML entry point
├── vite.config.ts                   # Vite configuration
├── tailwind.config.ts               # Tailwind + design system config
├── tsconfig.json                    # TypeScript configuration
├── netlify.toml                     # Netlify deployment config
├── package.json                     # Dependencies & scripts
├── CLAUDE.md                        # AI assistant instructions
└── README.md                        # This file
```

### Key Configuration Files

- **`vite.config.ts`**: Vite configuration with React SWC plugin, path aliases (`@/` → `src/`)
- **`tailwind.config.ts`**: Custom design system (colors, typography, animations)
- **`tsconfig.json`**: TypeScript compiler options
- **`netlify.toml`**: Netlify build settings (Node 18, `npm run build`)

## API & Backend Services

### Supabase Integration

The application uses Supabase for backend services:

**Supabase Client**: `src/integrations/supabase/client.ts`
```typescript
import { supabase } from "@/integrations/supabase/client";
```

**Features Utilized:**
- **Authentication**: Distributor/reseller login
- **Database**: Contact form submissions, user data
- **Edge Functions**: Email processing for contact form

### Edge Functions

**`send-contact-email`**: Serverless function that processes contact form submissions
- Location: `supabase/functions/send-contact-email/`
- Triggered on form submission from `/contact` page
- Handles email notifications and data storage

### Data Models

The application uses auto-generated TypeScript types from Supabase:
```typescript
import type { Database } from '@/integrations/supabase/types';
```

Key tables/collections (inferred from codebase):
- User authentication (Supabase Auth)
- Contact form submissions
- Distributor profiles

## Deployment

### Netlify (Recommended)

The project is configured for Netlify deployment via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

**Deployment Steps:**

1. **Connect Repository**: Link your Git repository to Netlify
2. **Configure Build Settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
3. **Set Environment Variables** (if using `.env` approach):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. **Deploy**: Push to main branch or click "Deploy site"

### Lovable Platform

You can also deploy directly through Lovable:

1. Visit your [Lovable project](https://lovable.dev/projects/5db303ad-eeaf-405a-a56a-661249937ce9)
2. Click **Share → Publish**
3. Lovable will handle deployment automatically

> **Note**: For custom domains, Lovable recommends using Netlify. See [Lovable docs on custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/).

### Manual Deployment

Build the project locally and deploy to any static hosting service:

```bash
npm run build  # Generates dist/ folder
```

Upload the `dist/` folder to:
- **Vercel**: `vercel --prod`
- **AWS S3 + CloudFront**
- **GitHub Pages**
- **Any static hosting provider**

### Production Checklist

- [ ] Set environment variables for Supabase
- [ ] Configure Supabase Edge Functions
- [ ] Set up custom domain (if needed)
- [ ] Configure CORS policies in Supabase
- [ ] Test contact form in production
- [ ] Verify distributor login functionality
- [ ] Check analytics integration (if applicable)

## Known Issues & Limitations

### Current Limitations

1. **Hardcoded Supabase Credentials**
   - **Issue**: Supabase URL and anon key are hardcoded in `src/integrations/supabase/client.ts`
   - **Impact**: Credentials are exposed in the codebase and bundled JavaScript
   - **Recommendation**: Migrate to environment variables (`.env` + Vite)
   - **Risk**: Low (anon key is designed to be public, but best practice is to use env vars)

2. **Default Language**
   - **Issue**: Default language is Spanish (`src/contexts/LanguageContext.tsx:13`)
   - **Impact**: English-speaking users see Spanish on first load
   - **Workaround**: Consider browser language detection or geo-IP based defaults

3. **No Environment Variable Template**
   - **Issue**: No `.env.example` file in the repository
   - **Impact**: New developers may not know which env vars are needed
   - **Recommendation**: Create `.env.example` with placeholder values

### Future Enhancements

- Add automated testing (Jest, React Testing Library, Playwright)
- Implement CI/CD pipeline (GitHub Actions)
- Add performance monitoring (Lighthouse CI)
- Implement SEO optimizations (meta tags, sitemap, robots.txt)
- Add analytics integration (Google Analytics, PostHog, etc.)
- Enhance accessibility (WCAG 2.1 AA compliance audit)
- Add admin dashboard for distributors
- Implement product catalog with search/filtering

## Credits

### Built With

- **[Lovable](https://lovable.dev)** - AI-powered development platform
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Supabase](https://supabase.com/)** - Open-source Firebase alternative
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[React](https://react.dev/)** - JavaScript library for building user interfaces

### Acknowledgements

- Typography: [Julius Sans One](https://fonts.google.com/specimen/Julius+Sans+One) and [Rethink Sans](https://fonts.google.com/specimen/Rethink+Sans) from Google Fonts
- Icons: [Lucide Icons](https://lucide.dev/)
- Toast notifications: [Sonner](https://sonner.emilkowal.ski/)

### Development

This project was created and is maintained using [Lovable](https://lovable.dev).

Changes made via Lovable are automatically committed to this repository.

## License

This project is proprietary software owned by Solariis Inc. All rights reserved.

For licensing inquiries, please contact the Solariis Inc team.

---

**Project Info**

- **Lovable Project URL**: https://lovable.dev/projects/5db303ad-eeaf-405a-a56a-661249937ce9
- **Repository**: [Your Git Repository URL]
- **Production URL**: [Your Production URL]

For questions, issues, or contributions, please contact the development team or open an issue in the repository.
