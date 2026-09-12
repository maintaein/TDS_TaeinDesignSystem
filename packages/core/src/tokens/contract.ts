import { primary, gray, success, warning, error } from './colors.css';
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  fontVariantNumeric,
} from './typography.css';
import { spacing, borderRadius } from './spacing.css';
import { shadows } from './shadows.css';
import { duration, easing } from './animation.css';
import { zIndex } from './zIndex.css';

/**
 * 테마 계약의 값 정의. `theme.css.ts`가 이 객체를 `createGlobalTheme`에 넘겨
 * CSS 변수로 만든다.
 *
 * 계약 자체(`themeContract`)를 읽으면 값이 아니라 `var(--...)` 문자열이 나오므로,
 * 실제 색상값·간격값이 필요한 쪽(문서 생성기 등)은 이 객체를 참조한다. 문서와
 * 계약이 어긋나지 않게 하려면 이 파일이 유일한 출처여야 한다.
 */
export const themeTokens = {
  color: {
    primary: {
      main: primary[700],
      light: primary[400],
      dark: primary[800],
      contrast: '#FFFFFF',
    },
    text: {
      primary: gray[900],
      secondary: gray[600],
      disabled: gray[400],
    },
    background: {
      default: '#FFFFFF',
      paper: gray[50],
    },
    surface: {
      default: '#FFFFFF',
      hover: gray[100],
      active: gray[200],
    },
    border: {
      default: gray[300],
      focus: primary[700],
    },
    // semantic 4슬롯의 역할 구분:
    // - main    배경·UI 요소용 (대비 3:1 기준)
    // - light   연한 배경용. 위에 text.primary를 얹는다
    // - dark    흰 배경 위 본문 텍스트용 (대비 4.5:1 기준)
    // - contrast main 위에 얹는 글자색
    success: {
      main: success[500],
      light: success[100],
      dark: success[800],
      contrast: gray[900],
    },
    warning: {
      main: warning[500],
      light: warning[100],
      dark: warning[800],
      contrast: gray[900],
    },
    error: {
      main: error[700],
      light: error[100],
      dark: error[800],
      contrast: '#FFFFFF',
    },
    // Snackbar의 기본 severity가 info인데 계약에 뒷받침하는 토큰이 없어서
    // 컴포넌트가 primary를 빌려 쓰고 있었다. 어휘를 계약에 맞춘다.
    // 값은 의도적으로 primary와 같다 — info는 브랜드 블루로 표현한다.
    info: {
      main: primary[700],
      light: primary[100],
      dark: primary[800],
      contrast: '#FFFFFF',
    },
  },
  // 역할 기반 4슬롯(main/light/dark/contrast)으로 표현되지 않는, 상호작용
  // 상태별 세밀한 shade(hover/active 등)가 필요한 컴포넌트를 위한 원본 스케일
  // 노출. raw colors.css를 직접 import하는 대신 이 경로를 거치면 CSS 변수로
  // 감싸여 향후 다중 테마 도입 시에도 자동으로 반응한다.
  palette: {
    primary,
    gray,
    error,
  },
  spacing,
  borderRadius,
  shadow: shadows,
  font: {
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    lineHeight,
    variantNumeric: fontVariantNumeric,
  },
  animation: {
    duration,
    easing,
  },
  zIndex,
};
