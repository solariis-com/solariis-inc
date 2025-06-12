import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        heading: ['"Rethink Sans"', 'sans-serif'],
        body: ['"Rethink Sans"', 'sans-serif'],
        alt: ['"Julius Sans One"', 'sans-serif'], // For special cases
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6A00",
          dark: "#CC5500",
          light: "#FF8533",
        },
        coral: {
          DEFAULT: "#E56B55",
          dark: "#D04C30",
          light: "#F7C7B6",
        },
        teal: {
          DEFAULT: "#72C0A8",
          dark: "#5BA88F",
          light: "#8FCEB9",
        },
        neutral: {
          beige: "#EADCD4",
          brown: "#52342D",
        },
        text: {
          DEFAULT: "#2D3748", // Main text color
          light: "#7A5C55", // Secondary text
        },
        accent: {
          DEFAULT: "#FFFFFF", // Main background
          dark: "#F7F7F7", // Light background panels
        },
      },
      fontSize: {
        display: ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1', fontWeight: '500' }],
        h1: ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '500' }],
        h2: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2' }],
        h3: ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
        h4: ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6', fontWeight: '100' }],
        body: ['clamp(0.875rem, 1.25vw, 1.125rem)', { lineHeight: '1.5', fontWeight: '100' }],
        'body-sm': ['clamp(0.75rem, 1vw, 1rem)', { lineHeight: '1.4', fontWeight: '100' }],
        button: ['1rem', { lineHeight: '1.5', letterSpacing: '0.05em', textTransform: 'uppercase' }],
        caption: ['0.75rem', { lineHeight: '1.4' }],
        input: ['1rem', { lineHeight: '1.5' }],
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
