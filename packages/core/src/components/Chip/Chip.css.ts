import { style, styleVariants, ComplexStyleRule } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

// Chip 기본 스타일
export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: themeContract.spacing[1],
  padding: `${themeContract.spacing[1]} ${themeContract.spacing[3]}`,
  border: 'none',
  borderRadius: themeContract.borderRadius.full,
  fontWeight: themeContract.font.weight.medium,
  fontSize: themeContract.font.size.sm,
  lineHeight: 1,
  userSelect: 'none',
  transition: 'all 0.2s ease',
  cursor: 'default',
  whiteSpace: 'nowrap',
})

// 크기 스타일
export const sizeStyles = styleVariants({
  sm: {
    padding: `${themeContract.spacing[1]} ${themeContract.spacing[2]}`,
    fontSize: themeContract.font.size.xs,
    gap: themeContract.spacing[1],
  },
  md: {
    padding: `${themeContract.spacing[1]} ${themeContract.spacing[3]}`,
    fontSize: themeContract.font.size.sm,
    gap: themeContract.spacing[1],
  },
  lg: {
    padding: `${themeContract.spacing[2]} ${themeContract.spacing[4]}`,
    fontSize: themeContract.font.size.base,
    gap: themeContract.spacing[2],
  },
})

// Variant 스타일 (filled, outlined)
const createVariantStyle = (
  backgroundColor: string,
  color: string,
  border?: string
): ComplexStyleRule => ({
  backgroundColor,
  color,
  border: border || 'none',
})

// Filled variant 색상
const filledVariants = {
  default: createVariantStyle(
    themeContract.color.surface.hover,
    themeContract.color.text.primary
  ),
  primary: createVariantStyle(
    themeContract.color.primary.main,
    themeContract.color.primary.contrast
  ),
  success: createVariantStyle(
    themeContract.color.success.main,
    themeContract.color.success.contrast
  ),
  error: createVariantStyle(
    themeContract.color.error.main,
    themeContract.color.error.contrast
  ),
  warning: createVariantStyle(
    themeContract.color.warning.main,
    themeContract.color.warning.contrast
  ),
}

// Outlined variant 색상
const outlinedVariants = {
  default: createVariantStyle(
    'transparent',
    themeContract.color.text.primary,
    `1px solid ${themeContract.color.border.default}`
  ),
  primary: createVariantStyle(
    'transparent',
    themeContract.color.primary.main,
    `1px solid ${themeContract.color.primary.main}`
  ),
  success: createVariantStyle(
    'transparent',
    themeContract.color.success.main,
    `1px solid ${themeContract.color.success.main}`
  ),
  error: createVariantStyle(
    'transparent',
    themeContract.color.error.main,
    `1px solid ${themeContract.color.error.main}`
  ),
  warning: createVariantStyle(
    'transparent',
    themeContract.color.warning.main,
    `1px solid ${themeContract.color.warning.main}`
  ),
}

// Variant 스타일 (복합)
export const variantStyles = styleVariants({
  filled: {},
  outlined: {},
})

// Color 스타일 (복합)
export const colorStyles = styleVariants({
  default: {},
  primary: {},
  success: {},
  error: {},
  warning: {},
})

// Filled + Color 조합
export const filledColorStyles = styleVariants(filledVariants)

// Outlined + Color 조합
export const outlinedColorStyles = styleVariants(outlinedVariants)

// 클릭 가능한 Chip
export const clickable = style({
  cursor: 'pointer',

  ':hover': {
    opacity: 0.9,
  },

  ':active': {
    opacity: 0.8,
  },

  ':focus-visible': {
    outline: `2px solid ${themeContract.color.border.focus}`,
    outlineOffset: '0px',
  },
})

// 선택된 상태 - 색상별로 동적으로 처리해야 하므로 기본 스타일만 제공
export const selected = style({
  // 색상별 border는 인라인 스타일로 처리
})

// 비활성화 상태
export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  pointerEvents: 'none',
})

// 라벨 스타일
export const label = style({
  lineHeight: 1,
})

// 아이콘/아바타 컨테이너
export const iconContainer = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

// 삭제 버튼
export const deleteButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: 'inherit',
  opacity: 0.7,
  transition: 'opacity 0.2s ease',
  flexShrink: 0,

  ':hover': {
    opacity: 1,
  },

  ':focus-visible': {
    outline: `2px solid currentColor`,
    borderRadius: '50%',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },
})

// 삭제 아이콘
export const deleteIcon = style({
  width: '18px',
  height: '18px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})
