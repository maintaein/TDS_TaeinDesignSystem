import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';
import { primary, gray } from '../../tokens/colors.css';

// Container 스타일
export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: gray[100],
  borderRadius: themeContract.borderRadius.lg,
  padding: '1px',
  gap: '4px',
  width: 'fit-content',
  position: 'relative',
});

export const activeIndicator = style({
  position: 'absolute',
  top: '3px',
  left: 0,
  height: 'calc(100% - 6px)',
  borderRadius: themeContract.borderRadius.md,
  backgroundColor: primary[500],
  boxShadow: '0 2px 8px rgba(0, 102, 255, 0.25)',
  transition: `
    transform 0.25s cubic-bezier(0.25, 1, 0.5, 1),
    width 0.25s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.25s ease
  `,
  zIndex: 0,
});

// Size Variants
export const sizeVariants = styleVariants({
  sm: {
    height: '36px',
  },
  md: {
    height: '44px',
  },
  lg: {
    height: '52px',
  },
});

// Full Width
export const fullWidth = style({
  width: '100%',
});

// Button (label) 스타일
export const button = style({
  flex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  border: 'none',
  backgroundColor: 'transparent',
  color: gray[600],
  fontSize: themeContract.font.size.sm,
  fontWeight: themeContract.font.weight.medium,
  fontFamily: themeContract.font.family.sans,
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  borderRadius: themeContract.borderRadius.md,
  height: '85%',
  userSelect: 'none',
  outline: 'none',
  transition: 'color 0.25s ease, transform 0.15s ease',

  selectors: {
    '&:hover:not(.disabled):not(.selected)': {
      color: gray[900],
    },

    // ✅ 중첩 대신 조합형 selector로 표현
    '&.selected': {
      color: '#FFFFFF',
      fontWeight: themeContract.font.weight.semibold,
      transform: 'scale(1)',
      transition: 'transform 0.25s ease, text-shadow 0.25s ease',
    },
    '&.selected:hover': {
      textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
    },
    '&.selected:active': {
      textShadow: 'none',
    },

    '&.disabled': {
      color: gray[400],
      cursor: 'not-allowed',
      opacity: 0.5,
      transform: 'none',
    },
    '&.iconOnly': {
      minWidth: '40px',
      padding: '0 12px',
    },
  },
});

// Button Content
export const buttonContent = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
});

// Icon Wrapper
export const iconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.25em',
});

// Label Text
export const labelText = style({
  whiteSpace: 'nowrap',
});

// Radio Input (숨김)
export const radioInput = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
