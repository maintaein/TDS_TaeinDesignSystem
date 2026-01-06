import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../../tokens/theme.css';
import { primary, gray } from '../../tokens/colors.css';

// Container
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
});

// Label Container
export const labelContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.25rem',
});

// Label
export const label = style({
  fontSize: themeContract.font.size.sm,
  fontWeight: themeContract.font.weight.medium,
  color: gray[900],
  fontFamily: themeContract.font.family.sans,
});

// Required
export const required = style({
  color: '#EF4444',
  marginLeft: '0.25rem',
});

// Value Display
export const valueDisplay = style({
  fontSize: themeContract.font.size.sm,
  fontWeight: themeContract.font.weight.semibold,
  color: primary[700],
  fontFamily: themeContract.font.family.sans,
  minWidth: '3rem',
  textAlign: 'right',
});

// Slider Wrapper
export const sliderWrapper = style({
  position: 'relative',
  width: '100%',
  alignItems: 'center',
});

// Slider Track
export const sliderTrack = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: '4px',
  backgroundColor: gray[200],
  borderRadius: '2px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
});

// Slider Input
export const slider = style({
  width: '100%',
  height: '20px',
  backgroundColor: 'transparent',
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  margin: 0,

  selectors: {
    // Webkit thumb
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: primary[600],
      border: `2px solid ${primary[600]}`,
      cursor: 'pointer',
      transition: `all ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
      marginTop: '-6px',
    },
    '&:hover::-webkit-slider-thumb': {
      backgroundColor: primary[700],
      borderColor: primary[700],
      transform: 'scale(1.1)',
    },
    '&:active::-webkit-slider-thumb': {
      backgroundColor: primary[800],
      borderColor: primary[800],
      transform: 'scale(1)',
    },
    '&:focus-visible::-webkit-slider-thumb': {
      outline: `2px solid ${themeContract.color.border.focus}`,
      outlineOffset: '2px',
    },
    '&:disabled::-webkit-slider-thumb': {
      backgroundColor: gray[400],
      borderColor: gray[400],
      cursor: 'not-allowed',
    },

    // Firefox thumb
    '&::-moz-range-thumb': {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: primary[600],
      border: `2px solid ${primary[600]}`,
      cursor: 'pointer',
      transition: `all ${themeContract.animation.duration.base} ${themeContract.animation.easing.easeInOut}`,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    },
    '&:hover::-moz-range-thumb': {
      backgroundColor: primary[700],
      borderColor: primary[700],
      transform: 'scale(1.1)',
    },
    '&:active::-moz-range-thumb': {
      backgroundColor: primary[800],
      borderColor: primary[800],
      transform: 'scale(1)',
    },
    '&:focus-visible::-moz-range-thumb': {
      outline: `2px solid ${themeContract.color.border.focus}`,
      outlineOffset: '2px',
    },
    '&:disabled::-moz-range-thumb': {
      backgroundColor: gray[400],
      borderColor: gray[400],
      cursor: 'not-allowed',
    },

    // Tracks
    '&::-webkit-slider-runnable-track': {
      height: '4px',
      backgroundColor: 'transparent',
    },
    '&::-moz-range-track': {
      height: '4px',
      backgroundColor: 'transparent',
    },

    // Disabled
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    // Focus
    '&:focus-visible': {
      outline: 'none',
    },
  },
});

// Size Variants
export const sizeVariants = styleVariants({
  sm: {},
  md: {},
  lg: {},
});

// Helper Text
export const helperText = style({
  fontSize: themeContract.font.size.xs,
  color: gray[600],
  fontFamily: themeContract.font.family.sans,
  marginTop: '0.25rem',
});

// Marks Container
export const marksContainer = style({
  position: 'relative',
  width: '100%',
  height: '20px',
  marginTop: '0.25rem',
});

// Mark
export const mark = style({
  position: 'absolute',
  top: 0,
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

// Mark Label
export const markLabel = style({
  fontSize: themeContract.font.size.xs,
  color: gray[600],
  fontFamily: themeContract.font.family.sans,
  whiteSpace: 'nowrap',
  marginTop: '0.25rem',
});
