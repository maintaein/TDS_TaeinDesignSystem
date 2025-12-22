import { style, styleVariants } from '@vanilla-extract/css'

// 전체 wrapper 스타일
export const wrapper = style({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

// label 스타일 (checkbox + 텍스트 포함)
export const checkboxLabel = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  userSelect: 'none',

  selectors: {
    '&:has(input:disabled)': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
})

// checkbox container 스타일
export const checkboxContainer = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

// size variants
export const size = styleVariants({
  sm: {
    width: '16px',
    height: '16px',
  },
  md: {
    width: '20px',
    height: '20px',
  },
  lg: {
    width: '24px',
    height: '24px',
  },
})

// checkbox 기본 스타일 (숨김)
export const checkbox = style({
  position: 'absolute',
  width: 0,
  height: 0,
  opacity: 0,
  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

// checkmark 스타일 (커스텀 checkbox)
export const checkmark = style({
  width: '100%',
  height: '100%',
  border: '2px solid #DDDDDD',
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  transition: 'all 150ms ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  selectors: {
    '&:hover': {
      borderColor: '#BBBBBB',
    },

    // checked 상태
    'input:checked + &': {
      backgroundColor: '#1E88E5',
      borderColor: '#1E88E5',
    },

    'input:checked + &::after': {
      content: '',
      position: 'absolute',
      display: 'block',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      width: '30%',
      height: '60%',
      border: 'solid #FFFFFF',
      borderWidth: '0 2px 2px 0',
    },

    // indeterminate 상태
    'input:indeterminate + &': {
      backgroundColor: '#1E88E5',
      borderColor: '#1E88E5',
    },

    'input:indeterminate + &::after': {
      content: '',
      position: 'absolute',
      display: 'block',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      height: '2px',
      backgroundColor: '#FFFFFF',
    },

    // focus 상태
    'input:focus + &': {
      borderColor: '#1E88E5',
      boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.1)',
    },

    // disabled 상태
    'input:disabled + &': {
      backgroundColor: '#F5F5F5',
      borderColor: '#DDDDDD',
      cursor: 'not-allowed',
    },

    'input:disabled:checked + &': {
      backgroundColor: '#BBBBBB',
      borderColor: '#BBBBBB',
    },
  },
})

// error 상태
export const error = style({
  borderColor: '#F04452 !important',

  selectors: {
    'input:focus + &': {
      borderColor: '#F04452 !important',
      boxShadow: '0 0 0 3px rgba(240, 68, 82, 0.1)',
    },
  },
})

// label text 스타일
export const labelText = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#333333',
  lineHeight: 1.5,
})

// required 표시
export const required = style({
  color: '#F04452',
  marginLeft: '0.25rem',
})

// helperText / errorMessage 스타일
export const helperText = style({
  fontSize: '0.75rem',
  color: '#666666',
  marginLeft: 'calc(16px + 0.5rem)', // checkbox 너비 + gap
})

export const errorMessage = style({
  fontSize: '0.75rem',
  color: '#F04452',
  marginLeft: 'calc(16px + 0.5rem)', // checkbox 너비 + gap
})
