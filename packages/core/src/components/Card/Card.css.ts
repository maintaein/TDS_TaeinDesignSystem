import { style, styleVariants } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

// Card 기본 스타일
export const card = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: themeContract.color.background.paper,
  borderRadius: themeContract.borderRadius.lg,
  overflow: 'hidden',
  transition: 'all 0.2s ease',
  border: 'none',
  textAlign: 'left',
  width: '100%',
})

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
})

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
})

// 비활성화 상태
export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  pointerEvents: 'none',

  ':hover': {
    transform: 'none',
    boxShadow: 'none',
  },
})

// 이미지 컨테이너
export const imageContainer = style({
  width: '100%',
  overflow: 'hidden',
  flexShrink: 0,
})

// 이미지 스타일
export const image = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover',
})

// Header 스타일
export const header = style({
  padding: themeContract.spacing[4],
  borderBottom: `1px solid ${themeContract.color.border.default}`,
})

// Content 스타일 (padding 포함)
export const content = style({
  flex: 1,
})

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
})

// Footer 스타일
export const footer = style({
  padding: themeContract.spacing[4],
  borderTop: `1px solid ${themeContract.color.border.default}`,
})
