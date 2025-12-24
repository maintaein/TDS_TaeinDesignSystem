import { style, styleVariants } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'
import { primary, gray, success, error, warning } from '../../tokens/colors.css'

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: themeContract.font.family.sans,
  fontWeight: themeContract.font.weight.semibold,
  borderRadius: '12px',
  whiteSpace: 'nowrap',
  transition: `all ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
  lineHeight: 1,
  minWidth: '20px',
})

export const variantStyles = styleVariants({
  primary: {
    backgroundColor: primary[600],
    color: '#FFFFFF',
  },
  secondary: {
    backgroundColor: gray[600],
    color: '#FFFFFF',
  },
  success: {
    backgroundColor: success[500],
    color: '#FFFFFF',
  },
  error: {
    backgroundColor: error[500],
    color: '#FFFFFF',
  },
  warning: {
    backgroundColor: warning[500],
    color: gray[900],
  },
})

export const sizeStyles = styleVariants({
  sm: {
    fontSize: '0.625rem',
    padding: '2px 6px',
    minWidth: '16px',
    height: '16px',
  },
  md: {
    fontSize: '0.75rem',
    padding: '3px 8px',
    minWidth: '20px',
    height: '20px',
  },
  lg: {
    fontSize: '0.875rem',
    padding: '4px 10px',
    minWidth: '24px',
    height: '24px',
  },
})

export const dotStyles = style({
  padding: 0,
  minWidth: '8px',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
})
