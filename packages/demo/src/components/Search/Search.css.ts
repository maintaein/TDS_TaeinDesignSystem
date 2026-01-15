import { style } from '@vanilla-extract/css';

export const searchContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '400px',
});

export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const searchIcon = style({
  position: 'absolute',
  left: '0.75rem',
  color: '#9ca3af',
  pointerEvents: 'none',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#6b7280',
    },
  },
});

export const input = style({
  width: '100%',
  padding: '0.625rem 1rem 0.625rem 2.5rem',
  fontSize: '0.875rem',
  color: '#111827',
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '0.5rem',
  transition: 'all 0.2s',
  ':focus': {
    outline: 'none',
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  },
  '::placeholder': {
    color: '#9ca3af',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
      backgroundColor: '#1f2937',
      borderColor: '#4b5563',
      ':focus': {
        borderColor: '#3b82f6',
        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      },
      '::placeholder': {
        color: '#6b7280',
      },
    },
  },
});

export const resultsList = style({
  position: 'absolute',
  top: 'calc(100% + 0.5rem)',
  left: 0,
  width: '100%',
  maxHeight: '300px',
  overflowY: 'auto',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  listStyle: 'none',
  padding: '0.25rem',
  margin: 0,
  zIndex: 50,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
});

export const resultItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0.625rem 0.75rem',
  fontSize: '0.875rem',
  color: '#374151',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '0.375rem',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#f3f4f6',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
      ':hover': {
        backgroundColor: '#374151',
      },
    },
  },
});

export const resultItemSelected = style({
  backgroundColor: '#eff6ff',
  color: '#2563eb',
  fontWeight: 500,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1e3a8a',
      color: '#60a5fa',
    },
  },
});

export const resultLabel = style({
  flex: 1,
});

export const resultCategory = style({
  fontSize: '0.75rem',
  color: '#9ca3af',
  backgroundColor: '#f3f4f6',
  padding: '0.125rem 0.5rem',
  borderRadius: '0.25rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#6b7280',
      backgroundColor: '#4b5563',
    },
  },
});
