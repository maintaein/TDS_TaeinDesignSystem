import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';

// wrapper 스타일
export const wrapper = style({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: 'fit-content',
});

export const fullWidth = style({
  width: '100%',
});

// label 스타일
export const label = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: themeContract.color.text.primary,
  marginBottom: '0.25rem',
});

export const required = style({
  color: themeContract.color.error.main,
  marginLeft: '0.25rem',
});

// input container 스타일
export const inputContainer = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: themeContract.color.surface.default,
  border: `1px solid ${themeContract.color.surface.default}`,
  borderRadius: '8px',
  transition: 'all 150ms ease-in-out',
  width: 'fit-content',

  selectors: {
    '&:has(input:disabled)': {
      backgroundColor: themeContract.color.surface.default,
      borderColor: themeContract.color.background.paper,
      cursor: 'not-allowed',
    },
    '&:has(input:read-only)': {
      backgroundColor: themeContract.color.surface.default,
      cursor: 'default',
    },
  },
});

// size variants
export const size = styleVariants({
  sm: {
    padding: '0.25rem',
  },
  md: {
    padding: '0.375rem',
  },
  lg: {
    padding: '0.5rem',
  },
});

export const clickPulse = keyframes({
  '0%': { transform: 'scale(1)' },
  '30%': { transform: 'scale(0.92)' },
  '60%': { transform: 'scale(1.06)' },
  '100%': { transform: 'scale(1)' },
});

export const input = style({
  border: `1px solid ${themeContract.color.border.default}`,
  outline: 'none',
  backgroundColor: themeContract.color.background.paper,
  color: themeContract.color.text.primary,
  fontFamily: 'inherit',
  textAlign: 'center',
  appearance: 'textfield',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '0.5rem 0',
  margin: '0 8px',
  borderRadius: '6px',
  transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.5, 1), background-color 0.2s ease, color 0.2s ease',

  selectors: {
    [`${inputContainer}:has(button:active:not(:disabled)) &`]: {
      animation: `${clickPulse} 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
      color: themeContract.color.primary.main,
      transition: 'none',
    },
    '&::placeholder': {
      color: themeContract.color.text.disabled,
    },
    '&:disabled': {
      color: themeContract.color.text.disabled,
      cursor: 'not-allowed',
      backgroundColor: themeContract.color.surface.default,
    },
    '&:read-only': {
      cursor: 'default',
    },
    '&:focus': {
      borderColor: themeContract.color.primary.main,
      boxShadow: `0 0 0 3px rgba(30, 136, 229, 0.1)`,
    },
    '&::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      appearance: 'none',
      margin: 0,
    },
  },
});

// input size variants
export const inputSize = styleVariants({
  sm: {
    width: '50px',
  },
  md: {
    width: '50px',
  },
  lg: {
    width: '60px',
  },
});

// button 공통 스타일
export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  color: themeContract.color.text.primary,
  cursor: 'pointer',
  transition: 'all 150ms ease-in-out',
  flexShrink: 0,
  padding: '0.5rem',
  borderRadius: '4px',

  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: themeContract.color.surface.hover,
      color: themeContract.color.primary.main,
    },
    '&:active:not(:disabled)': {
      backgroundColor: themeContract.color.surface.active,
      transform: 'scale(0.92)',
    },
    '&:disabled': {
      color: themeContract.color.text.disabled,
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outline: `2px solid ${themeContract.color.primary.main}`,
      outlineOffset: '2px',
    },
  },
});


export const buttonSize = styleVariants({
  sm: {
    width: '20px',
    height: '20px',
  },
  md: {
    width: '24px',
    height: '24px',
  },
  lg: {
    width: '28px',
    height: '28px',
  },
});

export const decrementButton = style({});
export const incrementButton = style({});

// error 상태
export const error = style({
  borderColor: `${themeContract.color.error.main} !important`,

  selectors: {
    '&:focus-within': {
      borderColor: `${themeContract.color.error.main} !important`,
      boxShadow: '0 0 0 3px rgba(240, 68, 82, 0.1)',
    },
  },
});

// helperText / errorMessage 스타일
export const helperText = style({
  fontSize: '0.75rem',
  color: themeContract.color.text.secondary,
  marginLeft: '0.25rem',
});

export const errorMessage = style({
  fontSize: '0.75rem',
  color: themeContract.color.error.main,
  marginLeft: '0.25rem',
});
