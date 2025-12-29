import { createVar, style, styleVariants } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

const borderW = createVar();
const borderS = createVar();

export const border = style({
  display: 'block',
  borderWidth: 0,
  borderStyle: 'none',
  vars: {
    [borderW]: '1px',
    [borderS]: 'solid'
  }
})

export const sidesStyles = styleVariants({
  all: { 
    borderWidth: borderW, 
    borderStyle: borderS 
  },
  top: { 
    borderTopWidth: borderW, 
    borderTopStyle: borderS 
  },
  right: { 
    borderRightWidth: borderW, 
    borderRightStyle: borderS 
  },
  bottom: { 
    borderBottomWidth: borderW, 
    borderBottomStyle: borderS 
  },
  left: { 
    borderLeftWidth: borderW, 
    borderLeftStyle: borderS 
  },
  horizontal: {
    borderTopWidth: borderW,
    borderTopStyle: borderS,
    borderBottomWidth: borderW,
    borderBottomStyle: borderS,
  },
  vertical: {
    borderLeftWidth: borderW,
    borderLeftStyle: borderS,
    borderRightWidth: borderW,
    borderRightStyle: borderS,
  },
})

export const widthStyles = styleVariants({
  thin: { vars: { [borderW]: '1px' } },
  medium: { vars: { [borderW]: '2px' } },
  thick: { vars: { [borderW]: '4px' } },
})

export const variantStyles = styleVariants({
  solid: { vars: { [borderS]: 'solid' } },
  dashed: { vars: { [borderS]: 'dashed' } },
  dotted: { vars: { [borderS]: 'dotted' } },
})

export const colorStyles = styleVariants({
  default: {
    borderColor: themeContract.color.border.default,
  },
  primary: {
    borderColor: themeContract.color.primary.main,
  },
  success: {
    borderColor: themeContract.color.success.main,
  },
  error: {
    borderColor: themeContract.color.error.main,
  },
  warning: {
    borderColor: themeContract.color.warning.main,
  },
})

export const roundedStyles = styleVariants({
  none: {
    borderRadius: '0',
  },
  sm: {
    borderRadius: themeContract.borderRadius.sm,
  },
  md: {
    borderRadius: themeContract.borderRadius.base,
  },
  lg: {
    borderRadius: themeContract.borderRadius.lg,
  },
  full: {
    borderRadius: themeContract.borderRadius.xl,
  },
})

export const paddingStyles = styleVariants({
  none: {
    padding: '0',
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
