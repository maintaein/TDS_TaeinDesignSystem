import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { primary, gray, success, warning, error } from './colors.css';
import { fontFamily, fontSize, fontWeight, lineHeight } from './typography.css';
import { spacing, borderRadius } from './spacing.css';
import { shadows } from './shadows.css';
import { duration, easing } from './animation.css';

// Theme Contract 정의
export const themeContract = createThemeContract({
  color: {
    // Primary 색상
    primary: {
      main: '',
      light: '',
      dark: '',
      contrast: '',
    },
    // Text 색상
    text: {
      primary: '',
      secondary: '',
      disabled: '',
    },
    // Background 색상
    background: {
      default: '',
      paper: '',
    },
    // Surface 색상
    surface: {
      default: '',
      hover: '',
      active: '',
    },
    // Border 색상
    border: {
      default: '',
      focus: '',
    },
    // Semantic 색상
    success: {
      main: '',
      light: '',
      contrast: '',
    },
    warning: {
      main: '',
      light: '',
      contrast: '',
    },
    error: {
      main: '',
      light: '',
      contrast: '',
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

// Light Theme
export const lightTheme = createTheme(themeContract, {
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

// Dark Theme
export const darkTheme = createTheme(themeContract, {
  color: {
    primary: {
      main: primary[400],
      light: primary[300],
      dark: primary[600],
      contrast: gray[900],
    },
    text: {
      primary: gray[50],
      secondary: gray[400],
      disabled: gray[600],
    },
    background: {
      default: gray[900],
      paper: gray[800],
    },
    surface: {
      default: gray[800],
      hover: gray[700],
      active: gray[600],
    },
    border: {
      default: gray[700],
      focus: primary[400],
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
