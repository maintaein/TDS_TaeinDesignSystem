import { style, styleVariants } from '@vanilla-extract/css';

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
  backgroundColor: '#FFFFFF',
  border: '1px solid #DDDDDD',
  borderRadius: '8px',
  transition: 'all 150ms ease-in-out',
  width: 'fit-content',

  selectors: {
    '&:hover:not(:has(input:disabled))': {
      borderColor: '#BBBBBB',
    },
    '&:focus-within': {
      borderColor: '#1E88E5',
      boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.1)',
    },
    '&:has(input:disabled)': {
      backgroundColor: '#F5F5F5',
      borderColor: '#EEEEEE',
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

// input 스타일
export const input = style({
  minWidth: '30px',
  maxWidth: '120px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  color: '#000000',
  fontFamily: 'inherit',
  textAlign: 'center',
  appearance: 'textfield',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '0.5rem 0.5rem',

  selectors: {
    '&::placeholder': {
      color: '#999999',
    },
    '&:disabled': {
      color: '#999999',
      cursor: 'not-allowed',
    },
    '&:read-only': {
      cursor: 'default',
    },
    // number input 화살표 제거
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
