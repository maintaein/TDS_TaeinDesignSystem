import { style, styleVariants, globalStyle } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

// List 기본 스타일
export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
})

// List spacing 스타일
export const spacingStyles = styleVariants({
  none: {
    gap: '0',
  },
  sm: {
    gap: themeContract.spacing[2],
  },
  md: {
    gap: themeContract.spacing[4],
  },
  lg: {
    gap: themeContract.spacing[6],
  },
})

// List with divider 스타일
export const withDivider = style({})

// withDivider의 자식 li 스타일
globalStyle(`${withDivider} > li:not(:last-child)`, {
  borderBottom: `1px solid ${themeContract.color.border.default}`,
  paddingBottom: themeContract.spacing[4],
})

// ListItem 기본 스타일
export const listItem = style({
  display: 'flex',
  width: '100%',
})

// ListItem layout 스타일
export const layoutStyles = styleVariants({
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
})

// ListItem align 스타일
export const alignStyles = styleVariants({
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  baseline: {
    alignItems: 'baseline',
  },
})

// Label 스타일
export const label = style({
  fontWeight: themeContract.font.weight.medium,
  color: themeContract.color.text.secondary,
  flexShrink: 0,
})

// Value 스타일
export const value = style({
  color: themeContract.color.text.primary,
  flex: 1,
})

// Horizontal layout에서 label과 value 간격
export const horizontalGap = style({
  gap: themeContract.spacing[4],
})

// Vertical layout에서 label과 value 간격
export const verticalGap = style({
  gap: themeContract.spacing[1],
})
