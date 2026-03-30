import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';

// input container 스타일
export const inputContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

// size variants
export const size = styleVariants({
  sm: {
    height: '36px',
    fontSize: '0.875rem',
  },
  md: {
    height: '44px',
    fontSize: '1rem',
  },
  lg: {
    height: '52px',
    fontSize: '1.125rem',
  },
});

// input 기본 스타일
export const input = style({
  width: '100%',
  padding: '0 1rem',
  border: `1px solid ${themeContract.color.border.default}`,
  borderRadius: '8px',
  backgroundColor: themeContract.color.background.paper,
  color: themeContract.color.text.primary,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 150ms ease-in-out',

  selectors: {
    '&::placeholder': {
      color: themeContract.color.text.disabled,
    },
    '&:hover:not(:disabled)': {
      borderColor: themeContract.color.text.disabled,
    },
    '&:disabled': {
      backgroundColor: themeContract.color.surface.default,
      color: themeContract.color.text.disabled,
      cursor: 'not-allowed',
    },
    '&:read-only': {
      backgroundColor: themeContract.color.surface.default,
      cursor: 'default',
    },
  },
});

// error 상태
export const error = style({
  borderColor: `${themeContract.color.error.main} !important`,

  selectors: {
    '&:focus': {
      borderColor: `${themeContract.color.error.main} !important`,
      boxShadow: '0 0 0 3px rgba(240, 68, 82, 0.1)',
    },
  },
});
