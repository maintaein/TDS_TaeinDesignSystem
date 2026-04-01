import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 1.5rem',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
});

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const logo = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#2563eb',
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const searchWrapper = style({
  position: 'relative',
});

export const searchInputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.4375rem 0.75rem',
  width: '240px',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  transition: 'all 0.15s',
  selectors: {
    '&:focus-within': {
      backgroundColor: '#ffffff',
      borderColor: '#2563eb',
      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
    },
  },
  '@media': {
    '(max-width: 640px)': {
      width: '160px',
    },
  },
});

export const searchIcon = style({
  flexShrink: 0,
  color: '#9ca3af',
});

export const searchInput = style({
  flex: 1,
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: '#111827',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  '::placeholder': {
    color: '#9ca3af',
  },
});

export const githubLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.75rem',
  height: '2.75rem',
  borderRadius: '0.375rem',
  color: '#4b5563',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
  },
});
