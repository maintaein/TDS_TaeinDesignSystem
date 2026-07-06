import { createGlobalTheme } from '@vanilla-extract/css';
import { primary, gray, success, warning, error } from './colors.css';
import { fontFamily, fontSize, fontWeight, lineHeight } from './typography.css';
import { spacing, borderRadius } from './spacing.css';
import { shadows } from './shadows.css';
import { duration, easing } from './animation.css';

// 단일 라이트 테마를 :root에 전역 CSS 변수로 선언한다.
export const themeContract = createGlobalTheme(':root', {
  color: {
    primary: {
      main: primary[600],
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
      focus: primary[600],
    },
    success: {
      main: success[500],
      light: success[100],
      contrast: '#FFFFFF',
    },
    warning: {
      main: warning[500],
      light: warning[100],
      contrast: '#FFFFFF',
    },
    error: {
      main: error[500],
      light: error[100],
      contrast: '#FFFFFF',
    },
  },
  spacing,
  borderRadius,
  shadow: shadows,
  font: {
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    lineHeight,
  },
  animation: {
    duration,
    easing,
  },
});
