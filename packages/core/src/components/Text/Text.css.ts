import { style, styleVariants } from '@vanilla-extract/css';

// 기본 스타일
export const base = style({
  margin: 0,
  padding: 0,
  fontFamily: 'inherit',
  lineHeight: 1.5,
});

// variant 스타일
export const variant = styleVariants({
  h1: {
    fontSize: '2.5rem', // 40px
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2rem', // 32px
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '1.75rem', // 28px
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body3: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.5,
  },
});

// color 스타일
export const color = styleVariants({
  primary: {
    color: '#000000',
  },
  secondary: {
    color: '#666666',
  },
  success: {
    color: '#00C73C',
  },
  error: {
    color: '#F04452',
  },
  disabled: {
    color: '#CCCCCC',
  },
});

// weight 스타일
export const weight = styleVariants({
  regular: {
    fontWeight: 400,
  },
  medium: {
    fontWeight: 500,
  },
  semibold: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
});

// align 스타일
export const align = styleVariants({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

// truncate 스타일
export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});
