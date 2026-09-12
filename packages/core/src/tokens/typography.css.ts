// 타이포그래피 토큰 정의
// 8pt Grid System 기반

export const fontFamily = {
  sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
} as const;

export const fontSize = {
  // 10px. Badge처럼 짧은 대문자 라벨 전용이다. 본문에 쓰면 읽기 어렵다.
  '2xs': '0.625rem', // 10px
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

// 자간. 숫자 열은 좁은 열에서 tight가 읽기 쉽고, 짧은 대문자 라벨(Badge 등)은
// 기본 자간으로 두면 글자가 뭉쳐서 wide가 필요하다.
export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.04em',
} as const;

export const lineHeight = {
  tight: '1.25',
  normal: '1.5',
  relaxed: '1.75',
} as const;

// 숫자 글리프 폭. 기본 비례 폰트는 '1'이 '8'보다 좁아서 숫자를 세로로 쌓으면
// 자릿수가 행마다 어긋난다. 표·지표처럼 숫자를 비교하는 자리에는 tabular를
// 쓴다. Pretendard Variable이 이 기능을 지원한다.
export const fontVariantNumeric = {
  normal: 'normal',
  tabular: 'tabular-nums',
} as const;
