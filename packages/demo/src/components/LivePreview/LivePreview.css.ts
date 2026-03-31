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
});

export const description = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap',
});

export const preview = style({
  width: '100%',
  marginBottom: '1.5rem',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
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

export const previewEmpty = style({
  minHeight: '80px',
});

export const errorBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.625rem 1rem',
  backgroundColor: '#ef4444',
  color: '#ffffff',
  fontSize: '0.8125rem',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  lineHeight: '1.4',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  borderRadius: '0 0 0.5rem 0.5rem',
});

export const errorIcon = style({
  flexShrink: 0,
  width: '16px',
  height: '16px',
});
