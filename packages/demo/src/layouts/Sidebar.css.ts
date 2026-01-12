import { style } from '@vanilla-extract/css';

export const sidebar = style({
  width: '280px',
  height: '100%',
  backgroundColor: '#ffffff',
  borderRight: '1px solid #e5e7eb',
  overflowY: 'auto',
  transition: 'transform 0.3s ease',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderRightColor: '#374151',
    },
    '(max-width: 768px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 50,
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
    },
  },
});

export const sidebarHidden = style({
  '@media': {
    '(max-width: 768px)': {
      transform: 'translateX(-100%)',
    },
  },
});

export const nav = style({
  padding: '1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const navSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const navItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem 1rem',
  margin: '0.25rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#4b5563',
  cursor: 'pointer',
  transition: 'all 0.2s',
  borderRadius: '0.375rem',
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

export const navItemActive = style({
  color: '#2563eb',
  backgroundColor: '#eff6ff',
  fontWeight: 600,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
      backgroundColor: '#1e3a8a',
    },
  },
});

export const navItemWithChildren = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const chevron = style({
  width: '1rem',
  height: '1rem',
  transition: 'transform 0.2s',
  transform: 'rotate(-90deg)',
});

export const chevronExpanded = style({
  transform: 'rotate(0deg)',
});

export const navChildren = style({
  paddingLeft: '1.5rem',
});

export const backdrop = style({
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 40,
    },
  },
});
