import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'
import { success, error, warning, primary, gray } from '../../tokens/colors.css'

// 애니메이션 정의
const slideInFromTop = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

const slideInFromBottom = keyframes({
  '0%': {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

// center 위치용 애니메이션 (translateX(-50%) 포함)
const slideInFromTopCenter = keyframes({
  '0%': {
    transform: 'translateX(-50%) translateY(-100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(-50%) translateY(0)',
    opacity: 1,
  },
})

const slideInFromBottomCenter = keyframes({
  '0%': {
    transform: 'translateX(-50%) translateY(100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(-50%) translateY(0)',
    opacity: 1,
  },
})

// 기본 스타일
export const snackbar = style({
  position: 'fixed',
  zIndex: 1400,
  display: 'flex',
  alignItems: 'center',
  padding: themeContract.spacing[3],
  borderRadius: themeContract.borderRadius.base,
  boxShadow: themeContract.shadow.lg,
  minWidth: '288px',
  maxWidth: '568px',
  fontFamily: themeContract.font.family.sans,
  fontSize: themeContract.font.size.sm,
  fontWeight: themeContract.font.weight.medium,
  lineHeight: themeContract.font.lineHeight.normal,
  color: '#FFFFFF',
})

// Severity 스타일
export const severityStyles = styleVariants({
  success: {
    backgroundColor: success[500],
  },
  error: {
    backgroundColor: error[500],
  },
  warning: {
    backgroundColor: warning[500],
    color: gray[900],
  },
  info: {
    backgroundColor: primary[600],
  },
})

// Position 스타일 (각 위치에 맞는 애니메이션 적용)
export const positionStyles = styleVariants({
  'top-left': {
    top: themeContract.spacing[6],
    left: themeContract.spacing[6],
    animation: `${slideInFromTop} 0.3s ${themeContract.animation.easing.easeOut}`,
  },
  'top-center': {
    top: themeContract.spacing[6],
    left: '50%',
    transform: 'translateX(-50%)',
    animation: `${slideInFromTopCenter} 0.3s ${themeContract.animation.easing.easeOut}`,
  },
  'top-right': {
    top: themeContract.spacing[6],
    right: themeContract.spacing[6],
    animation: `${slideInFromTop} 0.3s ${themeContract.animation.easing.easeOut}`,
  },
  'bottom-left': {
    bottom: themeContract.spacing[6],
    left: themeContract.spacing[6],
    animation: `${slideInFromBottom} 0.3s ${themeContract.animation.easing.easeOut}`,
  },
  'bottom-center': {
    bottom: themeContract.spacing[6],
    left: '50%',
    transform: 'translateX(-50%)',
    animation: `${slideInFromBottomCenter} 0.3s ${themeContract.animation.easing.easeOut}`,
  },
  'bottom-right': {
    bottom: themeContract.spacing[6],
    right: themeContract.spacing[6],
    animation: `${slideInFromBottom} 0.3s ${themeContract.animation.easing.easeOut}`,
  },
})

// Content 스타일
export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: themeContract.spacing[3],
})

// Message 스타일
export const message = style({
  flex: 1,
})

// Actions 스타일
export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeContract.spacing[2],
  marginLeft: 'auto',
})

// Close button 스타일
export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: 'inherit',
  fontSize: '16px',
  lineHeight: 1,
  cursor: 'pointer',
  opacity: 0.8,
  transition: `opacity ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,

  ':hover': {
    opacity: 1,
  },

  ':focus-visible': {
    outline: '2px solid currentColor',
    outlineOffset: '2px',
    borderRadius: themeContract.borderRadius.sm,
  },
})
