# Design System

## Color Palette

### Brand Colors
- **Primary**: `#FF6A00` (Orange) - CTAs, links, highlights
- **Secondary**: `#E56B55` (Coral) - Accents, secondary actions
- **Text**: `#1A1A1A` (Dark Gray) - Body text
- **Text Light**: `#4A4A4A` - Secondary text, captions

### Semantic Colors
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)
- **Info**: `#3B82F6` (Blue)

### Neutral Palette
- **Background**: `#FFFFFF`
- **Muted**: `#F7F7F7` (Light gray backgrounds)
- **Border**: `#E5E7EB` (Dividers, card borders)

## Typography

### Font Families
- **Headings**: `'Rethink Sans', sans-serif`
- **Body**: `'Rethink Sans', sans-serif`
- **Alt/Display**: `'Julius Sans One', sans-serif`

### Type Scale
- **Display**: 64px (h1 on hero sections)
- **H1**: 48px
- **H2**: 36px
- **H3**: 30px
- **H4**: 24px
- **Body Large**: 18px
- **Body**: 16px (default)
- **Body Small**: 14px
- **Caption**: 12px

## Spacing Scale

```
xs: 4px
sm: 8px
md: 16px
lg: 32px
xl: 64px
2xl: 128px
```

## Component Patterns

### Button Variants
- **Primary**: Orange fill, white text, hover darken
- **Secondary**: Coral fill, white text
- **Outline**: Border, transparent bg, hover fill
- **Ghost**: Transparent, hover subtle bg
- **Link**: Text only, underline on hover

### Card Styles
- **Elevated**: Shadow-md, rounded-xl
- **Flat**: Border, rounded-lg
- **Interactive**: Hover shadow-lg + scale

### Kanban Board
- **Column**: Gray-100 bg, rounded-lg, min-height 500px
- **Card**: White, shadow-sm, hover shadow-md, drag cursor
- **Stage Badge**: Colored pill based on stage

### Service Matrix Grid
- **Grid**: 5 columns (desktop), 1-2 cols (mobile)
- **Service Card**: Hover lift effect, icon + title + hours
- **Phase Header**: Bold, uppercase, divider line

## Accessibility

- **Focus Rings**: 2px orange outline, 2px offset
- **Contrast Ratios**: WCAG AA minimum (4.5:1 for text)
- **Interactive Targets**: Min 44px touch target (mobile)
- **Screen Reader**: Semantic HTML, ARIA labels where needed

## Responsive Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Animation

- **Duration Fast**: 150ms (hover, focus)
- **Duration Normal**: 250ms (page transitions)
- **Duration Slow**: 350ms (modals, drawers)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Common Animations
- **Fade In**: Opacity 0 → 1, translateY(10px) → 0
- **Scale In**: Scale 0.95 → 1
- **Slide In**: translateX(100%) → 0

## Icon Usage

- **Library**: Lucide React
- **Default Size**: 24px (1.5rem)
- **Small**: 16px
- **Large**: 32px
- **Color**: Inherit from parent or use semantic colors