
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        '0': '0',
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '2rem',
        'xl': '4rem',
        '2xl': '8rem',
        '3xl': '12rem',
        '4xl': '16rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'focus': '0 0 0 3px rgba(255, 106, 0, 0.5)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      zIndex: {
        'behind': '-1',
        'default': '1',
        'dropdown': '10',
        'sticky': '20',
        'fixed': '30',
        'modal': '40',
        'popover': '50',
        'toast': '60',
        'tooltip': '70',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      fontFamily: {
        heading: ['"Rethink Sans"', 'sans-serif'],
        body: ['"Rethink Sans"', 'sans-serif'],
        alt: ['"Julius Sans One"', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
        'button': ['0.875rem', { lineHeight: '1.25', fontWeight: '500' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6A00",
          foreground: "#FFFFFF",
          dark: "#CC5500",
        },
        secondary: {
          DEFAULT: "#E56B55",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#D04C30",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7F7F7",
          foreground: "#7A5C55",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        text: "#1A1A1A",
        "text-light": "#4A4A4A",
        coral: "#E56B55",
        teal: "#72C0A8",
      },
      outlineColor: {
        'focus': '#FF6A00',
      },
      outlineOffset: {
        'focus': '2px',
      },
      outlineWidth: {
        'focus': '2px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-up": "fade-up 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents, theme }) {
      addComponents({
        // Button Components
        '.btn-base': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.sm'),
          whiteSpace: 'nowrap',
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.button[0]'),
          lineHeight: theme('fontSize.button[1].lineHeight'),
          fontWeight: theme('fontSize.button[1].fontWeight'),
          fontFamily: theme('fontFamily.body'),
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.normal'),
          transitionTimingFunction: theme('transitionTimingFunction.default'),
          cursor: 'pointer',
          '&:focus-visible': {
            outline: 'none',
            ringWidth: '2px',
            ringColor: theme('colors.ring'),
            ringOffsetWidth: '2px',
          },
          '&:disabled': {
            pointerEvents: 'none',
            opacity: '0.5',
          },
        },
        
        '.btn-primary': {
          '@apply btn-base': {},
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.primary.foreground'),
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('spacing.10'),
          '&:hover': {
            backgroundColor: theme('colors.primary.dark'),
          },
        },
        
        '.btn-secondary': {
          '@apply btn-base': {},
          backgroundColor: theme('colors.secondary.DEFAULT'),
          color: theme('colors.secondary.foreground'),
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('spacing.10'),
          '&:hover': {
            backgroundColor: 'hsl(var(--secondary) / 0.8)',
          },
        },
        
        '.btn-destructive': {
          '@apply btn-base': {},
          backgroundColor: theme('colors.destructive.DEFAULT'),
          color: theme('colors.destructive.foreground'),
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('spacing.10'),
          '&:hover': {
            backgroundColor: 'hsl(var(--destructive) / 0.9)',
          },
        },
        
        '.btn-outline': {
          '@apply btn-base': {},
          borderWidth: '1px',
          borderColor: theme('colors.input'),
          backgroundColor: theme('colors.background'),
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('spacing.10'),
          '&:hover': {
            backgroundColor: theme('colors.accent.DEFAULT'),
            color: theme('colors.accent.foreground'),
          },
        },
        
        '.btn-ghost': {
          '@apply btn-base': {},
          backgroundColor: 'transparent',
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('spacing.10'),
          '&:hover': {
            backgroundColor: theme('colors.accent.DEFAULT'),
            color: theme('colors.accent.foreground'),
          },
        },
        
        '.btn-link': {
          '@apply btn-base': {},
          color: theme('colors.primary.DEFAULT'),
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
          backgroundColor: 'transparent',
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('spacing.10'),
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        
        // Button Sizes
        '.btn-sm': {
          height: theme('spacing.9'),
          borderRadius: theme('borderRadius.md'),
          padding: `0 ${theme('spacing.3')}`,
        },
        
        '.btn-lg': {
          height: theme('spacing.11'),
          borderRadius: theme('borderRadius.md'),
          padding: `0 ${theme('spacing.8')}`,
        },
        
        '.btn-icon': {
          height: theme('spacing.10'),
          width: theme('spacing.10'),
        },
        
        // Card Components
        '.card-base': {
          backgroundColor: theme('colors.card.DEFAULT'),
          color: theme('colors.card.foreground'),
          borderRadius: theme('borderRadius.xl'),
          borderWidth: '1px',
          borderColor: theme('colors.border'),
          boxShadow: theme('boxShadow.md'),
        },
        
        // Input Components
        '.input-base': {
          backgroundColor: theme('colors.background'),
          borderWidth: '1px',
          borderColor: theme('colors.input'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          fontSize: theme('fontSize.body[0]'),
          lineHeight: theme('fontSize.body[1].lineHeight'),
          transitionProperty: 'colors',
          transitionDuration: theme('transitionDuration.fast'),
          '&:focus': {
            outline: 'none',
            ringWidth: '2px',
            ringColor: theme('colors.primary.DEFAULT'),
            borderColor: theme('colors.primary.DEFAULT'),
          },
        },
        
        // Utility Components
        '.focus-ring': {
          '&:focus': {
            outline: 'none',
            ringWidth: '2px',
            ringColor: theme('colors.primary.DEFAULT'),
            ringOffsetWidth: '2px',
          },
        },
        
        '.hover-scale': {
          transitionProperty: 'transform',
          transitionDuration: theme('transitionDuration.normal'),
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        
        '.story-link': {
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            transform: 'scaleX(0)',
            height: '2px',
            bottom: '0',
            left: '0',
            backgroundColor: theme('colors.primary.DEFAULT'),
            transformOrigin: 'bottom right',
            transition: 'transform 0.3s ease-out',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        },
      });
    },
  ],
};

export default config;
