import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
});

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
});

export const withDivider = style({});

globalStyle(`${withDivider} > li:not(:last-child)`, {
  borderBottom: `1px solid ${themeContract.color.border.default}`,
  paddingBottom: themeContract.spacing[4],
});

export const listItem = style({
  display: 'flex',
  width: '100%',
});

export const layoutStyles = styleVariants({
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
});

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
});

export const label = style({
  fontWeight: themeContract.font.weight.medium,
  color: themeContract.color.text.secondary,
  flexShrink: 0,
});

export const value = style({
  color: themeContract.color.text.primary,
  flex: 1,
});

export const horizontalGap = style({
  gap: themeContract.spacing[4],
});

export const verticalGap = style({
  gap: themeContract.spacing[1],
});
