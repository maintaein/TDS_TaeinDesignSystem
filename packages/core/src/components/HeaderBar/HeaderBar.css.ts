import { style, styleVariants } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

export const headerBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: themeContract.spacing[4],
  padding: `${themeContract.spacing[4]} ${themeContract.spacing[6]}`,
  transition: `box-shadow ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
  zIndex: 100,

  '@media': {
    '(max-width: 768px)': {
      padding: `${themeContract.spacing[3]} ${themeContract.spacing[4]}`,
      gap: themeContract.spacing[3],
    },
  },
})

export const variantStyles = styleVariants({
  default: {
    backgroundColor: themeContract.color.background.default,
    color: themeContract.color.text.primary,
  },
  dark: {
    backgroundColor: themeContract.color.primary.dark,
    color: themeContract.color.primary.contrast,
  },
  transparent: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: themeContract.color.text.primary,
  },
})

export const stickyStyles = styleVariants({
  true: {
    position: 'sticky',
    top: 0,
  },
  false: {
    position: 'relative',
  },
})

export const elevationStyles = styleVariants({
  true: {
    boxShadow: themeContract.shadow.md,
  },
  false: {
    boxShadow: 'none',
  },
})

export const borderStyles = styleVariants({
  true: {
    borderBottom: `1px solid ${themeContract.color.border.default}`,
  },
  false: {
    borderBottom: 'none',
  },
})

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeContract.spacing[3],
  flexShrink: 0,
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  maxHeight: '32px',

  '@media': {
    '(max-width: 768px)': {
      maxHeight: '28px',
    },
  },
})

export const title = style({
  fontSize: themeContract.font.size.lg,
  fontWeight: themeContract.font.weight.semibold,
  lineHeight: themeContract.font.lineHeight.tight,
  margin: 0,

  '@media': {
    '(max-width: 768px)': {
      fontSize: themeContract.font.size.base,
    },
  },
})

export const centerSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeContract.spacing[4],
  flex: 1,
  justifyContent: 'center',

  '@media': {
    '(max-width: 768px)': {
      gap: themeContract.spacing[2],
    },
  },
})

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeContract.spacing[3],
  flexShrink: 0,

  '@media': {
    '(max-width: 768px)': {
      gap: themeContract.spacing[2],
    },
  },
})
