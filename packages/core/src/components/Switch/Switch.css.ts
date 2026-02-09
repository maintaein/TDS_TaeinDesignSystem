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
  sm: { width: '36px', height: '20px', borderRadius: '10px' },
  md: { width: '44px', height: '24px', borderRadius: '12px' },
  lg: { width: '52px', height: '28px', borderRadius: '14px' },
};

export const size = styleVariants(baseSizeContainer, (baseStyle) => [
  baseStyle,
  {
    backgroundColor: '#DDDDDD', // 기본 회색 (Off 상태)
    border: '2px solid transparent',
    transition: 'all 150ms ease-in-out',
    position: 'relative',
    display: 'inline-block',
    flexShrink: 0,
    cursor: 'pointer',

    selectors: {
      // ON 상태: 배경을 파란색으로
      [`&:has(input:checked)`]: {
        backgroundColor: '#1E88E5',
      },

      // Disabled 상태
      [`&:has(input:disabled)`]: {
        backgroundColor: '#F5F5F5',
        cursor: 'not-allowed',
      },
      
      // Disabled + Checked 상태
      [`&:has(input:checked:disabled)`]: {
        backgroundColor: '#BBDEFB',
      },
    },
  },
]);

// Thumb Size Variants
export const thumbSize = styleVariants({
  sm: { width: '16px', height: '16px', offset: '14px' },
  md: { width: '20px', height: '20px', offset: '18px' },
  lg: { width: '24px', height: '24px', offset: '22px' },
}, (config) => ({
  position: 'absolute',
  top: '50%',
  left: '2px',
  transform: 'translateY(-50%)',
  width: config.width,
  height: config.height,
  borderRadius: '50%',
  backgroundColor: '#FFFFFF', // 항상 흰색 유지
  transition: 'all 150ms ease-in-out',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',

  selectors: {
    // ON 상태: 위치만 이동, 색상은 변경 없음
    [`input:checked + &`]: {
      transform: `translate(${config.offset}, -50%)`,
    },

    // Disabled 상태의 Thumb 색상 (약간 흐리게 조정 가능)
    [`input:disabled + &`]: {
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
      opacity: 0.8,
    },
  },
}));

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
