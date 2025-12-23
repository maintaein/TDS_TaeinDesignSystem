import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';
import { primary, gray, error } from '../../tokens/colors.css';

// Base IconButton 스타일
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

// Size Variants (정사각형 형태의 아이콘 버튼)
export const sizeVariants = styleVariants({
  sm: {
    width: '36px',
    height: '36px',
    borderRadius: themeContract.borderRadius.md,
  },
  md: {
    width: '44px',
    height: '44px',
    borderRadius: themeContract.borderRadius.lg,
  },
  lg: {
    width: '52px',
    height: '52px',
    borderRadius: themeContract.borderRadius.lg,
  },
  xl: {
    width: '60px',
    height: '60px',
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

// Loading Spinner Animation
const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

// Loading Spinner Container
export const loadingSpinner = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Spinner
export const spinner = style({
  width: '16px',
  height: '16px',
  border: '2px solid currentColor',
  borderTopColor: 'transparent',
  borderRadius: '50%',
  animation: `${spinAnimation} 0.6s linear infinite`,
});
