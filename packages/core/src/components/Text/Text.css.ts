import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';

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
//
// semantic 색상은 main이 아니라 dark 슬롯을 쓴다. main은 배경·UI 요소 기준(3:1)
// 이라서 흰 배경 위 본문 텍스트로 쓰면 대비가 부족하다. 특히 success.main
// (#4CAF50)은 2.78:1, warning.main(#FF9800)은 2.16:1로 AA(4.5:1)에 크게 못 미친다.
// dark 슬롯은 본문 텍스트용으로 잡은 값이다.
export const color = styleVariants({
  primary: {
    color: themeContract.color.text.primary,
  },
  secondary: {
    color: themeContract.color.text.secondary,
  },
  success: {
    color: themeContract.color.success.dark,
  },
  warning: {
    color: themeContract.color.warning.dark,
  },
  error: {
    color: themeContract.color.error.dark,
  },
  info: {
    color: themeContract.color.info.dark,
  },
  disabled: {
    color: themeContract.color.text.disabled,
  },
});

// 고정폭 숫자.
// 비례 폰트는 '1'이 '8'보다 좁아서 숫자를 여러 행에 쌓으면 자릿수가 행마다
// 어긋난다. 표·지표·카운터처럼 숫자를 위아래로 비교하는 자리에 쓴다.
export const tabularNums = style({
  fontVariantNumeric: themeContract.font.variantNumeric.tabular,
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
