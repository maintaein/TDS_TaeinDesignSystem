import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';
import { primary, gray, error } from '../../tokens/colors.css';

// Base Button 스타일
export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: themeContract.spacing[2],
  fontFamily: themeContract.font.family.sans,
  fontWeight: themeContract.font.weight.semibold,
  border: 'none',
  cursor: 'pointer',
  transition: `all ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
  userSelect: 'none',
  textDecoration: 'none',
  position: 'relative',
  overflow: 'hidden',

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  ':focus-visible': {
    outline: `2px solid ${themeContract.color.border.focus}`,
    outlineOffset: '2px',
  },
});

// Size Variants (Small, Medium, Large, XLarge)
export const sizeVariants = styleVariants({
  sm: {
    height: '36px',
    minWidth: '70px',
    padding: `0 ${themeContract.spacing[4]}`,
    fontSize: themeContract.font.size.sm,
    borderRadius: themeContract.borderRadius.md,
  },
  md: {
    height: '44px',
    minWidth: '100px',
    padding: `0 ${themeContract.spacing[5]}`,
    fontSize: themeContract.font.size.base,
    borderRadius: themeContract.borderRadius.lg,
  },
  lg: {
    height: '52px',
    minWidth: '120px',
    padding: `0 ${themeContract.spacing[6]}`,
    fontSize: themeContract.font.size.lg,
    borderRadius: themeContract.borderRadius.lg,
  },
  xl: {
    height: '60px',
    minWidth: '140px',
    padding: `0 ${themeContract.spacing[8]}`,
    fontSize: themeContract.font.size.xl,
    borderRadius: themeContract.borderRadius.xl,
  },
});

// Fill Variant Styles
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
        transform: 'scale(0.98)',
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
        transform: 'scale(0.98)',
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
        transform: 'scale(0.98)',
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
        transform: 'scale(0.98)',
      },
    },
  },
});

// Weak Variant Styles
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
        transform: 'scale(0.98)',
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
        transform: 'scale(0.98)',
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
        transform: 'scale(0.98)',
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
        transform: 'scale(0.98)',
      },
    },
  },
});

// Full Width
export const fullWidth = style({
  width: '100%',
});
