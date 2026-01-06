import { style, styleVariants } from '@vanilla-extract/css';

// Wrapper
export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: 'fit-content',
});

// Switch Label
export const switchLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  cursor: 'pointer',
  userSelect: 'none',
});

// Label Text
export const labelText = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#212121',
  order: -1,
});

// Required Indicator
export const required = style({
  color: '#D32F2F',
  marginLeft: '0.125rem',
});

// Switch Container (Track)
export const switchContainer = style({
  position: 'relative',
  display: 'inline-block',
  flexShrink: 0,
});

// Hidden Native Input
export const switchInput = style({
  position: 'absolute',
  width: 0,
  height: 0,
  opacity: 0,
  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

// Size Variants for Container (Track)
const baseSizeContainer = {
  sm: {
    width: '36px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#DDDDDD',
    border: '2px solid transparent',
    transition: 'all 150ms ease-in-out',
  },
  md: {
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: '#DDDDDD',
    border: '2px solid transparent',
    transition: 'all 150ms ease-in-out',
  },
  lg: {
    width: '52px',
    height: '28px',
    borderRadius: '14px',
    backgroundColor: '#DDDDDD',
    border: '2px solid transparent',
    transition: 'all 150ms ease-in-out',
  },
};

export const size = styleVariants(baseSizeContainer, (baseStyle) => [
  baseStyle,
  {
    selectors: {
      // 체크된 상태 - 배경색 변경
      'input:checked ~ &': {
        backgroundColor: '#1E88E5',
        borderColor: '#1E88E5',
      },

      // Hover 상태
      'input:not(:disabled):hover ~ &': {
        backgroundColor: '#CCCCCC',
      },

      'input:checked:not(:disabled):hover ~ &': {
        backgroundColor: '#1976D2',
      },

      // Disabled 상태
      'input:disabled ~ &': {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        cursor: 'not-allowed',
      },

      'input:checked:disabled ~ &': {
        backgroundColor: '#BBDEFB',
        borderColor: '#BBDEFB',
      },

      // Focus 상태
      'input:focus ~ &': {
        borderColor: '#1E88E5',
        boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.1)',
      },
    },
  },
]);

// Thumb Size Variants
export const thumbSize = styleVariants({
  sm: {
    position: 'absolute' as const,
    top: '50%',
    left: '2px',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    transition: 'all 150ms ease-in-out',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',

    selectors: {
      // sm: Container 36px - border 4px - thumb 16px - padding 4px = 12px
      'input:checked + &': {
        transform: 'translate(14px, -50%)',
        backgroundColor: '#1E88E5',
      },

      'input:disabled + &': {
        backgroundColor: '#EEEEEE',
        boxShadow: 'none',
      },

      'input:checked:disabled + &': {
        backgroundColor: '#BBDEFB',
        boxShadow: 'none',
      },

      'input:focus + &': {
        boxShadow:
          '0 0 0 3px rgba(30, 136, 229, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  md: {
    position: 'absolute' as const,
    top: '50%',
    left: '2px',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    transition: 'all 150ms ease-in-out',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',

    selectors: {
      // md: Container 44px - border 4px - thumb 20px - padding 4px = 16px
      'input:checked + &': {
        transform: 'translate(18px, -50%)',
        backgroundColor: '#1E88E5',
      },

      'input:disabled + &': {
        backgroundColor: '#EEEEEE',
        boxShadow: 'none',
      },

      'input:checked:disabled + &': {
        backgroundColor: '#BBDEFB',
        boxShadow: 'none',
      },

      'input:focus + &': {
        boxShadow:
          '0 0 0 3px rgba(30, 136, 229, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  lg: {
    position: 'absolute' as const,
    top: '50%',
    left: '2px',
    transform: 'translateY(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    transition: 'all 150ms ease-in-out',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',

    selectors: {
      // lg: Container 52px - border 4px - thumb 24px - padding 4px = 20px
      'input:checked + &': {
        transform: 'translate(22px, -50%)',
        backgroundColor: '#1E88E5',
      },

      'input:disabled + &': {
        backgroundColor: '#EEEEEE',
        boxShadow: 'none',
      },

      'input:checked:disabled + &': {
        backgroundColor: '#BBDEFB',
        boxShadow: 'none',
      },

      'input:focus + &': {
        boxShadow:
          '0 0 0 3px rgba(30, 136, 229, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
});

// Error State
export const error = style({
  borderColor: '#D32F2F !important',

  selectors: {
    'input:focus ~ &': {
      borderColor: '#D32F2F !important',
      boxShadow: '0 0 0 3px rgba(211, 47, 47, 0.1) !important',
    },
  },
});

// Helper Text
export const helperText = style({
  fontSize: '0.75rem',
  color: '#666666',
  marginLeft: '0.25rem',
});

// Error Message
export const errorMessage = style({
  fontSize: '0.75rem',
  color: '#D32F2F',
  marginLeft: '0.25rem',
});
