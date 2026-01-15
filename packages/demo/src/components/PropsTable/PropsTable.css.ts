import { style } from '@vanilla-extract/css';

export const tableContainer = style({
  width: '100%',
  overflowX: 'auto',
  marginBottom: '2rem',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: '#374151',
    },
  },
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.875rem',
});

export const thead = style({
  backgroundColor: '#f9fafb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
    },
  },
});

export const th = style({
  padding: '0.75rem 1rem',
  textAlign: 'left',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#374151',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  borderBottom: '2px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
      borderBottomColor: '#374151',
    },
  },
  ':first-child': {
    borderTopLeftRadius: '0.5rem',
  },
  ':last-child': {
    borderTopRightRadius: '0.5rem',
  },
});

export const tbody = style({
  backgroundColor: '#ffffff',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
    },
  },
});

export const tr = style({
  borderBottom: '1px solid #e5e7eb',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#f9fafb',
  },
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#374151',
      ':hover': {
        backgroundColor: '#1f2937',
      },
    },
  },
});

export const td = style({
  padding: '0.75rem 1rem',
  verticalAlign: 'top',
});

export const propName = style({
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#2563eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const required = style({
  marginLeft: '0.25rem',
  color: '#dc2626',
  fontWeight: 700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f87171',
    },
  },
});

export const propType = style({
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '0.813rem',
  color: '#059669',
  backgroundColor: '#f0fdf4',
  padding: '0.125rem 0.375rem',
  borderRadius: '0.25rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#34d399',
      backgroundColor: '#064e3b',
    },
  },
});

export const propDefault = style({
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '0.813rem',
  color: '#7c3aed',
  backgroundColor: '#f5f3ff',
  padding: '0.125rem 0.375rem',
  borderRadius: '0.25rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#a78bfa',
      backgroundColor: '#4c1d95',
    },
  },
});

export const noDefault = style({
  color: '#9ca3af',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#6b7280',
    },
  },
});

export const description = style({
  color: '#374151',
  lineHeight: '1.5',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});
