import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { themeTokens } from './contract';

// 단일 라이트 테마를 :root에 전역 CSS 변수로 선언한다.
// 값 정의는 contract.ts 하나에만 둔다(문서 생성기가 같은 출처를 읽는다).
export const themeContract = createGlobalTheme(':root', themeTokens);

globalStyle(':root', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      vars: {
        [themeContract.animation.duration.fast]: '0.01ms',
        [themeContract.animation.duration.base]: '0.01ms',
        [themeContract.animation.duration.slow]: '0.01ms',
        [themeContract.animation.duration.slower]: '0.01ms',
      },
    },
  },
});
