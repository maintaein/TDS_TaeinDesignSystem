import { style } from '@vanilla-extract/css';

export const codeBlock = style({
  width: '100%',
  marginBottom: '1.5rem',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  overflow: 'hidden',
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: '#374151',
    },
  },
});

export const fileName = style({
  padding: '0.75rem 1rem',
  backgroundColor: '#f9fafb',
  borderBottom: '1px solid #e5e7eb',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#374151',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderBottomColor: '#374151',
      color: '#d1d5db',
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 1rem',
  backgroundColor: '#f9fafb',
  borderBottom: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderBottomColor: '#374151',
    },
  },
});

export const language = style({
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#6b7280',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const copyButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  padding: '0.375rem 0.75rem',
  backgroundColor: 'transparent',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#374151',
  cursor: 'pointer',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#f3f4f6',
    borderColor: '#9ca3af',
  },
  ':active': {
    transform: 'scale(0.98)',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: '#4b5563',
      color: '#d1d5db',
      ':hover': {
        backgroundColor: '#374151',
        borderColor: '#6b7280',
      },
    },
  },
});

export const copyText = style({
  '@media': {
    '(max-width: 480px)': {
      display: 'none',
    },
  },
});

export const codeContainer = style({
  overflow: 'auto',
  maxHeight: '500px',
});
