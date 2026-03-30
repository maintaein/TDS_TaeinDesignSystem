import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';
import { primary, gray, error } from '../../tokens/colors.css';

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: themeContract.font.family.sans,
  border: 'none',
  cursor: 'pointer',
  transition: `all ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
  userSelect: 'none',
  position: 'relative',
  overflow: 'hidden',
  flexShrink: 0,

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  ':focus-visible': {
    outline: `2px solid ${themeContract.color.border.focus}`,
    outlineOffset: '2px',
  },
});

export const sizeVariants = styleVariants({
  sm: {
    width: '36px',
    height: '36px',
    borderRadius: themeContract.borderRadius.base,
  },
  md: {
    width: '44px',
    height: '44px',
    borderRadius: themeContract.borderRadius.md,
  },
  lg: {
    width: '52px',
    height: '52px',
    borderRadius: themeContract.borderRadius.md,
  },
  xl: {
    width: '60px',
    height: '60px',
    borderRadius: themeContract.borderRadius.lg,
  },
});

export const iconSizeVariants = styleVariants({
  sm: { fontSize: '1.125rem', lineHeight: 1 },
  md: { fontSize: '1.375rem', lineHeight: 1 },
  lg: { fontSize: '1.625rem', lineHeight: 1 },
  xl: { fontSize: '1.875rem', lineHeight: 1 },
});

export const fillVariants = styleVariants({
  primary: {
    backgroundColor: primary[600],
    color: '#FFFFFF',

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: primary[700],
      },
      '&:active:not(:disabled)': {
        backgroundColor: primary[800],
        transform: 'scale(0.95)',
      },
    },
  },
  dark: {
    backgroundColor: gray[700],
    color: '#FFFFFF',

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: gray[800],
      },
      '&:active:not(:disabled)': {
        backgroundColor: gray[900],
        transform: 'scale(0.95)',
      },
    },
  },
  danger: {
    backgroundColor: error[500],
    color: '#FFFFFF',

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: error[700],
      },
      '&:active:not(:disabled)': {
        opacity: 0.9,
        transform: 'scale(0.95)',
      },
    },
  },
  light: {
    backgroundColor: '#FFFFFF',
    color: primary[600],
    border: `2px solid ${primary[600]}`,

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: primary[50],
      },
      '&:active:not(:disabled)': {
        backgroundColor: primary[100],
        transform: 'scale(0.95)',
      },
    },
  },
});

export const ghostBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: themeContract.font.family.sans,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: `all ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
  userSelect: 'none',
  borderRadius: themeContract.borderRadius.base,
  color: gray[600],
  flexShrink: 0,

  selectors: {
    '&:hover:not(:disabled)': {
      color: gray[900],
      backgroundColor: gray[100],
    },
    '&:active:not(:disabled)': {
      color: gray[900],
      backgroundColor: gray[200],
      transform: 'scale(0.92)',
    },
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },

  ':focus-visible': {
    outline: `2px solid ${themeContract.color.border.focus}`,
    outlineOffset: '2px',
  },
});

export const ghostSizeVariants = styleVariants({
  sm: { padding: '0.25rem' },
  md: { padding: '0.375rem' },
  lg: { padding: '0.5rem' },
  xl: { padding: '0.625rem' },
});

export const weakVariants = styleVariants({
  primary: {
    backgroundColor: primary[50],
    color: primary[700],

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: primary[100],
      },
      '&:active:not(:disabled)': {
        backgroundColor: primary[200],
        transform: 'scale(0.95)',
      },
    },
  },
  dark: {
    backgroundColor: gray[200],
    color: gray[800],

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: gray[300],
      },
      '&:active:not(:disabled)': {
        backgroundColor: gray[400],
        transform: 'scale(0.95)',
      },
    },
  },
  danger: {
    backgroundColor: error[50],
    color: error[700],

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: error[100],
      },
      '&:active:not(:disabled)': {
        backgroundColor: error[100],
        transform: 'scale(0.95)',
      },
    },
  },
  light: {
    backgroundColor: primary[100],
    color: primary[700],

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: primary[200],
      },
      '&:active:not(:disabled)': {
        backgroundColor: primary[300],
        transform: 'scale(0.95)',
      },
    },
  },
});
