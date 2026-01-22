import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';

// CardRoot 기본 스타일
export const cardRoot = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: themeContract.color.background.paper,
  borderRadius: themeContract.borderRadius.lg,
  overflow: 'hidden',
  transition: 'all 0.2s ease',
  border: 'none',
  textAlign: 'left',
  width: '100%',
});

// Variant 스타일
export const variantStyles = styleVariants({
  outlined: {
    border: `1px solid ${themeContract.color.border.default}`,
    boxShadow: 'none',
  },
  elevated: {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
  },
  filled: {
    backgroundColor: themeContract.color.surface.hover,
    border: 'none',
    boxShadow: 'none',
  },
});

// 클릭 가능한 Card
export const clickable = style({
  cursor: 'pointer',

  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  ':active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },

  ':focus-visible': {
    outline: `3px solid ${themeContract.color.border.focus}`,
    outlineOffset: '2px',
  },
});

// 비활성화 상태
export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  pointerEvents: 'none',

  ':hover': {
    transform: 'none',
    boxShadow: 'none',
  },
});

// CardImage 래퍼
export const cardImageWrapper = style({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  flexShrink: 0,
});

// CardImage 스타일
export const cardImage = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover',
});

// CardImageOverlay 스타일
export const cardImageOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  color: '#fff',
});

// CardHeader 스타일
export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: themeContract.spacing[4],
  borderBottom: `1px solid ${themeContract.color.border.default}`,
  gap: themeContract.spacing[2],
});

// CardTitle 스타일
export const cardTitle = style({
  margin: 0,
  fontSize: themeContract.font.size.lg,
  fontWeight: themeContract.font.weight.semibold,
  color: themeContract.color.text.primary,
  lineHeight: themeContract.font.lineHeight.tight,
});

// CardBody 스타일
export const cardBody = style({
  flex: 1,
});

// Padding 스타일
export const paddingStyles = styleVariants({
  none: {
    padding: 0,
  },
  sm: {
    padding: themeContract.spacing[2],
  },
  md: {
    padding: themeContract.spacing[4],
  },
  lg: {
    padding: themeContract.spacing[6],
  },
});

// CardFooter 스타일
export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: themeContract.spacing[4],
  borderTop: `1px solid ${themeContract.color.border.default}`,
  gap: themeContract.spacing[2],
});
