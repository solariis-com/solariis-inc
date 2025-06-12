
export const createComponentsPlugin = (theme: any) => {
  return {
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
  };
};
