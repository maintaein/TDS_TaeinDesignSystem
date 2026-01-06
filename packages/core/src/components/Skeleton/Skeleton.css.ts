import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'
import { gray } from '../../tokens/colors.css'

// 애니메이션 정의
const wave = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '50%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
})

const pulse = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 1,
  },
})

// 기본 스타일
export const skeleton = style({
  display: 'inline-block',
  backgroundColor: gray[200],
  position: 'relative',
  overflow: 'hidden',

  // 다크모드 대응
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: gray[700],
    },
  },
})

// Variant 스타일
export const variantStyles = styleVariants({
  text: {
    height: '1em',
    width: '100%',
    borderRadius: themeContract.borderRadius.sm,
    transform: 'scale(1, 0.60)',
    transformOrigin: '0 60%',
  },
  rect: {
    width: '100%',
    height: '100%',
    borderRadius: themeContract.borderRadius.sm,
  },
  circle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  rounded: {
    width: '100%',
    height: '100%',
    borderRadius: themeContract.borderRadius.md,
  },
})

// Animation 스타일
export const animationStyles = styleVariants({
  wave: {
    selectors: {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateX(-100%)',
        backgroundImage: `linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
        )`,
        animation: `${wave} 1.6s linear 0.5s infinite`,
      },
      '[data-theme="dark"] &::after': {
        backgroundImage: `linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.1),
          transparent
        )`,
      },
    },
  },
  pulse: {
    animation: `${pulse} 1.5s ease-in-out 0.5s infinite`,
  },
})
