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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderBottomColor: '#374151',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const menuButton = style({
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
    },
  },
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const githubLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '0.375rem',
  color: '#4b5563',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
      ':hover': {
        backgroundColor: '#374151',
        color: '#f3f4f6',
      },
    },
  },
});
