import { style, styleVariants } from '@vanilla-extract/css';

export const livePreview = style({
  width: '100%',
  marginBottom: '2rem',
});

export const header = style({
  marginBottom: '1rem',
});

export const title = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const description = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: '1.5',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const preview = style({
  width: '100%',
  marginBottom: '1.5rem',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
});

export const previewCentered = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
});

export const previewPadding = styleVariants({
  none: {
    padding: 0,
  },
  sm: {
    padding: '1rem',
  },
  md: {
    padding: '2rem',
  },
  lg: {
    padding: '3rem',
  },
});
