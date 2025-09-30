# Service Matrix Schema

## Overview

The Service Matrix is the core discovery mechanism for Solariis services. It organizes modular design services into **5 phases** that represent the typical design agency workflow:

1. **Strategy** - Research, planning, and strategic foundation
2. **Creativity** - Conceptual development and ideation
3. **Visual** - Design execution and visual identity
4. **Guidelines** - Documentation and system creation
5. **Applications** - Implementation across touchpoints

## Data Structure

### ServiceModule Type

```typescript
interface ServiceModule {
  id: string;                    // Unique identifier (e.g., "strategy-brand-strategy")
  name: string;                  // Display name (e.g., "Brand Strategy")
  phase: ServicePhase;           // One of the 5 phases
  description: string;           // 1-2 sentence overview
  longDescription?: string;      // Detailed explanation (for modal/detail view)
  deliverables: string[];        // List of outputs (e.g., ["Brand positioning doc", "Messaging framework"])
  estimatedHours: number;        // Typical time investment (for subscription hour logic)
  dependencies?: string[];       // IDs of prerequisite services (e.g., brand strategy before logo design)
  tags?: string[];               // Searchable keywords (e.g., ["branding", "research"])
  featured?: boolean;            // Highlight in UI
  icon?: string;                 // Lucide icon name or emoji
}

type ServicePhase =
  | 'strategy'
  | 'creativity'
  | 'visual'
  | 'guidelines'
  | 'applications';
```

## Service Matrix Examples

### Strategy Phase
Services that establish foundation and direction:

- **Brand Strategy**
  - Deliverables: Brand positioning, Value proposition, Target audience definition
  - Hours: 20-30

- **Market Research**
  - Deliverables: Competitive analysis, Market trends report, User personas
  - Hours: 15-20

- **Content Strategy**
  - Deliverables: Content pillars, Editorial calendar, SEO strategy
  - Hours: 10-15

### Creativity Phase
Conceptual and ideation work:

- **Concept Development**
  - Deliverables: Creative concepts (3 directions), Mood boards, Concept rationale
  - Hours: 15-25

- **Copywriting**
  - Deliverables: Taglines, Brand voice guide, Key messaging
  - Hours: 10-15

- **Naming**
  - Deliverables: Name options (10-15), Domain availability check, Trademark screening
  - Hours: 15-20

### Visual Phase
Design execution:

- **Logo Design**
  - Deliverables: Primary logo, Logo variations, Usage guidelines
  - Hours: 20-30
  - Dependencies: Brand Strategy, Concept Development

- **UI/UX Design**
  - Deliverables: Wireframes, High-fidelity mockups, Interactive prototypes
  - Hours: 40-60

- **Brand Identity**
  - Deliverables: Color palette, Typography system, Visual elements
  - Hours: 30-40

### Guidelines Phase
Documentation and systematization:

- **Brand Guidelines**
  - Deliverables: Brand manual (PDF), Logo usage rules, Color/typography specs
  - Hours: 15-20
  - Dependencies: Logo Design, Brand Identity

- **Design System**
  - Deliverables: Component library, Token system, Documentation site
  - Hours: 50-80

- **Style Guide**
  - Deliverables: Editorial style guide, Tone of voice examples, Writing standards
  - Hours: 10-15

### Applications Phase
Implementation across touchpoints:

- **Website Development**
  - Deliverables: Responsive website, CMS integration, SEO optimization
  - Hours: 80-120
  - Dependencies: UI/UX Design, Design System (optional)

- **Print Collateral**
  - Deliverables: Business cards, Letterhead, Presentation template
  - Hours: 15-25

- **Social Media Templates**
  - Deliverables: Post templates, Story templates, Brand kit for Canva
  - Hours: 10-15

- **Packaging Design**
  - Deliverables: Packaging mockups, Dieline specifications, Production files
  - Hours: 30-50

## Service Relationships

### Dependencies
Some services naturally follow others:
- **Logo Design** requires **Brand Strategy** (identity reflects positioning)
- **Website Development** requires **UI/UX Design** (implementation needs designs)
- **Brand Guidelines** requires **Logo Design** + **Brand Identity** (documents the system)

### Bundled Services
Common service combinations (inform subscription package creation):
- **Startup Brand Package**: Brand Strategy + Logo Design + Brand Identity + Brand Guidelines
- **Digital Presence**: UI/UX Design + Website Development + Social Media Templates
- **Content Launch**: Content Strategy + Copywriting + Style Guide

## Usage in Subscription Plans

Subscription hours map to service modules:

| Plan | Hours/Month | Example Services |
|------|-------------|------------------|
| **Starter** | 10 | 1 small service (e.g., Social Media Templates) |
| **Essential** | 20 | 1 medium service (e.g., Logo Design) OR 2 small |
| **Advanced** | 40 | 1 large service (e.g., UI/UX Design) OR 2 medium |
| **Premium** | 80 | Multiple services or complex project (e.g., full rebrand) |

## UI Display Guidelines

### Matrix Grid View
- Group services by phase (5 columns or accordion sections)
- Show name, icon, brief description, estimated hours
- Click to expand details modal

### Service Detail Modal
- Full description
- Deliverables checklist
- Dependencies (if any)
- Estimated hours
- CTA: "Add to Inquiry" or "Select Subscription"

### Phase Filtering
- Toggle to show/hide phases
- Filter by tags (e.g., show only "branding" services)
- Search by service name

## Data Storage

### During MVP (Dummy Data)
- JSON file: `src/features/service-matrix/data/services.json`
- Imported directly in components

### Production (Supabase)
- Table: `service_modules`
- Queried via `matrix.service.ts`
- Cached with TanStack Query
- Admin UI for managing services (future)

## Future Enhancements

1. **Service Customization**: Let clients modify deliverables for custom quotes
2. **Hour Tracking**: Show remaining hours in subscription against selected services
3. **Add-ons**: Micro-services that don't fit phases (e.g., "Rush Delivery +50% hours")
4. **Service Templates**: Pre-built bundles for common needs ("Startup Launch", "Rebrand")
5. **AI Recommendations**: Suggest services based on client industry or goals