
export const animations = {
  // Motion/Transition System
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
  
  // Focus States
  outlineColor: {
    'focus': 'hsl(var(--primary))',
  },
  outlineOffset: {
    'focus': '2px',
  },
  outlineWidth: {
    'focus': '2px',
  },
  
  // Animation System
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
      "0%": {
        opacity: "0",
        transform: "translateY(10px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "fade-up": {
      "0%": {
        opacity: "0",
        transform: "translateY(20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "scale-in": {
      "0%": {
        transform: "scale(0.95)",
        opacity: "0",
      },
      "100%": {
        transform: "scale(1)",
        opacity: "1",
      },
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
};
