import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

// 아코디언 아이템 컨테이너
export const boardRow = style({
  borderRadius: themeContract.borderRadius.md,
  overflow: 'hidden',
})

// variant 스타일
export const variantStyles = styleVariants({
  default: {
    backgroundColor: 'transparent',
  },
  outlined: {
    border: `1px solid ${themeContract.color.border.default}`,
  },
  filled: {
    backgroundColor: themeContract.color.background.paper,
  },
})

// 헤더 버튼
export const header = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: themeContract.spacing[3],
  padding: themeContract.spacing[4],
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: themeContract.font.size.base,
  fontWeight: themeContract.font.weight.medium,
  color: themeContract.color.text.primary,
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  ':hover': {
    backgroundColor: themeContract.color.background.paper,
  },

  ':focus-visible': {
    outline: `3px solid ${themeContract.color.border.focus}`,
    outlineOffset: '-3px',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
    backgroundColor: 'transparent',
  },
})

// 제목 영역
export const title = style({
  flex: 1,
})

// 아이콘 컨테이너
export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  flexShrink: 0,
  transition: 'transform 0.2s ease',
})

// 펼쳐진 상태의 아이콘 (180도 회전)
export const iconExpanded = style({
  transform: 'rotate(180deg)',
})

// 컨텐츠 영역 래퍼
export const contentWrapper = style({
  overflow: 'hidden',
})

// 슬라이드 다운 애니메이션
const slideDown = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

// 슬라이드 업 애니메이션
const slideUp = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
})

// 컨텐츠 영역
export const content = style({
  padding: `0 ${themeContract.spacing[4]} ${themeContract.spacing[4]}`,
  color: themeContract.color.text.secondary,
  fontSize: themeContract.font.size.sm,
  lineHeight: themeContract.font.lineHeight.relaxed,
})

// 펼쳐진 상태의 컨텐츠
export const contentExpanded = style({
  animation: `${slideDown} 0.2s ease`,
})

// 접힌 상태의 컨텐츠
export const contentCollapsed = style({
  animation: `${slideUp} 0.2s ease`,
  display: 'none',
})
