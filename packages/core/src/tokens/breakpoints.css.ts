// 브레이크포인트 토큰 정의
//
// themeContract(createGlobalTheme) 안에 넣지 않는다. 계약의 값은 CSS 변수로
// 치환되는데 `@media (min-width: var(--x))`는 CSS 사양상 동작하지 않기 때문이다.
// 따라서 브레이크포인트는 빌드 타임 상수로만 존재하고, 테마로 바꿀 수 없다.
export const breakpoint = {
  sm: 360,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoint;

// `@media` 키에 그대로 넣는 문자열.
// up: 해당 폭 이상(모바일 우선 기본 방향)
// down: 해당 폭 미만. 0.02px을 빼는 것은 up과 경계에서 겹치지 않게 하기 위함이다
//       (브라우저가 소수 픽셀 폭을 가질 수 있어 1px을 빼면 틈이 생긴다).
const px = (n: number) => `${n}px`;

export const mediaQuery = {
  up: {
    sm: `screen and (min-width: ${px(breakpoint.sm)})`,
    md: `screen and (min-width: ${px(breakpoint.md)})`,
    lg: `screen and (min-width: ${px(breakpoint.lg)})`,
    xl: `screen and (min-width: ${px(breakpoint.xl)})`,
  },
  down: {
    sm: `screen and (max-width: ${px(breakpoint.sm - 0.02)})`,
    md: `screen and (max-width: ${px(breakpoint.md - 0.02)})`,
    lg: `screen and (max-width: ${px(breakpoint.lg - 0.02)})`,
    xl: `screen and (max-width: ${px(breakpoint.xl - 0.02)})`,
  },
} as const;
