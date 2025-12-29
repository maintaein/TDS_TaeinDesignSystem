import { style, styleVariants } from '@vanilla-extract/css'
import { themeContract } from '../../tokens/theme.css'

export const divider = style({
  display: 'flex',
  alignItems: 'center',
  border: 0,
  color: themeContract.color.text.secondary,
  fontSize: themeContract.font.size.sm,
  fontWeight: themeContract.font.weight.medium,
})

export const orientationStyles = styleVariants({
  horizontal: {
    width: '100%',
    flexDirection: 'row',
    borderTop: `1px solid ${themeContract.color.border.default}`,
  },
  vertical: {
    height: '100%',
    flexDirection: 'column',
    borderLeft: `1px solid ${themeContract.color.border.default}`,
    minHeight: '100px',
  },
})

export const variantStyles = styleVariants({
  solid: {
    borderStyle: 'solid',
  },
  dashed: {
    borderStyle: 'dashed',
  },
  dotted: {
    borderStyle: 'dotted',
  },
})

export const spacingStyles = styleVariants({
  sm: {
    margin: `${themeContract.spacing[2]} 0`,
  },
  md: {
    margin: `${themeContract.spacing[4]} 0`,
  },
  lg: {
    margin: `${themeContract.spacing[6]} 0`,
  },
})

export const textAlignStyles = styleVariants({
  left: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
})

export const dividerWithText = style({
  borderTop: 0,
  borderLeft: 0,
  position: 'relative',
})

export const line = style({
  flex: 1,
  borderTop: `1px solid ${themeContract.color.border.default}`,
})

export const lineVertical = style({
  borderTop: 0,
  borderLeft: `1px solid ${themeContract.color.border.default}`,
})

export const textContent = style({
  padding: `0 ${themeContract.spacing[3]}`,
  whiteSpace: 'nowrap',
})

export const textContentVertical = style({
  padding: `${themeContract.spacing[3]} 0`,
  whiteSpace: 'nowrap',
})
