import { style, styleVariants } from '@vanilla-extract/css';

// textarea container 스타일
export const textareaContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

// size variants
export const size = styleVariants({
  sm: {
    fontSize: '0.875rem',
    padding: '0.5rem 0.75rem',
  },
  md: {
    fontSize: '1rem',
    padding: '0.75rem 1rem',
  },
  lg: {
    fontSize: '1.125rem',
    padding: '1rem 1.25rem',
  },
});

// textarea 기본 스타일
export const textarea = style({
  width: '100%',
  border: '1px solid #DDDDDD',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
  color: '#000000',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 150ms ease-in-out',
  lineHeight: 1.5,
  resize: 'none',

  selectors: {
    '&::placeholder': {
      color: '#999999',
    },
    '&:hover:not(:disabled)': {
      borderColor: '#BBBBBB',
    },
    '&:focus': {
      borderColor: '#1E88E5',
      boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.1)',
    },
    '&:disabled': {
      backgroundColor: '#F5F5F5',
      color: '#999999',
      cursor: 'not-allowed',
    },
    '&:read-only': {
      backgroundColor: '#FAFAFA',
      cursor: 'default',
    },
  },
});

// error 상태
export const error = style({
  borderColor: '#F04452 !important',

  selectors: {
    '&:focus': {
      borderColor: '#F04452 !important',
      boxShadow: '0 0 0 3px rgba(240, 68, 82, 0.1)',
    },
  },
});
