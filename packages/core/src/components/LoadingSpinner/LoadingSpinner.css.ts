import { style, styleVariants, keyframes } from '@vanilla-extract/css'

// 회전 애니메이션 (spinner용)
const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

// 페이드 인아웃 애니메이션 (dots용)
const fadeInOut = keyframes({
  '0%, 100%': {
    opacity: 0.2,
    transform: 'translateY(0)',
  },
  '50%': {
    opacity: 1,
  },
})

// 컨테이너 (wrapper)
export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

// Spinner 스타일
export const spinner = style({
  border: '3px solid',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderTopColor: 'var(--spinner-color)',
  borderRadius: '50%',
  animation: `${spin} 0.8s linear infinite`,
  boxSizing: 'border-box',
})

// Dots 컨테이너
export const dotsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

// Dot 스타일
export const dot = style({
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--spinner-color)',
  borderRadius: '50%',
  animation: `${fadeInOut} 1.4s infinite ease-in-out both`,
})

// 크기 변형
export const sizeStyles = styleVariants({
  sm: {
    width: '16px',
    height: '16px',
  },
  md: {
    width: '24px',
    height: '24px',
  },
  lg: {
    width: '32px',
    height: '32px',
  },
  xl: {
    width: '48px',
    height: '48px',
  },
})

// Dots 크기 변형
export const dotSizeStyles = styleVariants({
  sm: { width: '4px', height: '4px' },
  md: { width: '8px', height: '8px' },
  lg: { width: '10px', height: '10px' },
  xl: { width: '12px', height: '12px' },
})

// Dot 애니메이션 지연
export const dotDelayStyles = styleVariants({
  first: { animationDelay: '0s' },
  second: { animationDelay: '0.2s' },
  third: { animationDelay: '0.4s' },
})
