import { keyframes, style, styleVariants } from '@vanilla-extract/css';

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
  color: '#333333',
  marginBottom: '0.25rem',
});

export const required = style({
  color: '#F04452',
  marginLeft: '0.25rem',
});

// input container 스타일
export const inputContainer = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: '#F0F0F0',
  border: '1px solid #F0F0F0',
  borderRadius: '8px',
  transition: 'all 150ms ease-in-out',
  width: 'fit-content',

  selectors: {
    '&:has(input:disabled)': {
      backgroundColor: '#F5F5F5',
      borderColor: '#FFFFFF',
      cursor: 'not-allowed',
    },
    '&:has(input:read-only)': {
      backgroundColor: '#FAFAFA',
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
  border: '1px solid #E5E7EB',
  outline: 'none',
  backgroundColor: '#FFFFFF',
  color: '#000000',
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
      color: '#1E88E5',
      transition: 'none',
    },
    '&::placeholder': {
      color: '#999999',
    },
    '&:disabled': {
      color: '#999999',
      cursor: 'not-allowed',
      backgroundColor: '#F5F5F5',
    },
    '&:read-only': {
      cursor: 'default',
    },
    '&:focus': {
      borderColor: '#1E88E5',
      boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.1)',
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
  color: '#333333',
  cursor: 'pointer',
  transition: 'all 150ms ease-in-out',
  flexShrink: 0,
  padding: '0.5rem',
  borderRadius: '4px',

  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#F5F5F5',
      color: '#1E88E5',
    },
    '&:active:not(:disabled)': {
      backgroundColor: '#EEEEEE',
      transform: 'scale(0.92)',
    },
    '&:disabled': {
      color: '#CCCCCC',
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outline: '2px solid #1E88E5',
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
  borderColor: '#F04452 !important',

  selectors: {
    '&:focus-within': {
      borderColor: '#F04452 !important',
      boxShadow: '0 0 0 3px rgba(240, 68, 82, 0.1)',
    },
  },
});

// helperText / errorMessage 스타일
export const helperText = style({
  fontSize: '0.75rem',
  color: '#666666',
  marginLeft: '0.25rem',
});

export const errorMessage = style({
  fontSize: '0.75rem',
  color: '#F04452',
  marginLeft: '0.25rem',
});
