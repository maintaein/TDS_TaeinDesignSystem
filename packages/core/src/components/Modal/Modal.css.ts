import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const slideIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-20px) scale(0.95)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
})

export const modalContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1400,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: themeContract.spacing[10],
  overflowY: 'auto',
})

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  animation: `${fadeIn} 0.2s ${themeContract.animation.easing.easeOut}`,
  zIndex: -1,
})

export const modalDialog = style({
  position: 'relative',
  backgroundColor: themeContract.color.background.default,
  borderRadius: themeContract.borderRadius.lg,
  boxShadow: themeContract.shadow.xl,
  maxWidth: '100%',
  animation: `${slideIn} 0.25s ${themeContract.animation.easing.easeOut}`,
  outline: 'none',
  margin: 'auto 0',
  
  ':focus': {
    outline: 'none',
  },
})

export const sizeStyles = styleVariants({
  sm: {
    width: '400px',
  },
  md: {
    width: '600px',
  },
  lg: {
    width: '800px',
  },
  xl: {
    width: '1000px',
  },
  full: {
    width: 'calc(100vw - 64px)',
    maxHeight: 'calc(100vh - 64px)',
  },
})
