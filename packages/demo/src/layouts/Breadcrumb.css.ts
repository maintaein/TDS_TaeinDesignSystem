import { style } from '@vanilla-extract/css';

export const breadcrumb = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '1rem 1.5rem',
  fontSize: '0.875rem',
  color: '#6b7280',
  borderBottom: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
      borderBottomColor: '#374151',
    },
  },
});

export const breadcrumbItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const breadcrumbLink = style({
  color: '#6b7280',
  transition: 'color 0.2s',
  ':hover': {
    color: '#2563eb',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
      ':hover': {
        color: '#60a5fa',
      },
    },
  },
});

export const breadcrumbCurrent = style({
  color: '#1f2937',
  fontWeight: 500,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f3f4f6',
    },
  },
});

export const separator = style({
  color: '#d1d5db',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#4b5563',
    },
  },
});
