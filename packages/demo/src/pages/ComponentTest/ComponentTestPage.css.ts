import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
});

export const title = style({
  fontSize: '2.25rem',
  fontWeight: 700,
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const description = style({
  fontSize: '1.125rem',
  color: '#6b7280',
  marginBottom: '3rem',
  lineHeight: '1.75',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const section = style({
  marginBottom: '4rem',
  paddingBottom: '4rem',
  borderBottom: '1px solid #e5e7eb',
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#374151',
    },
  },
});

export const sectionTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.75rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const sectionDescription = style({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '2rem',
  lineHeight: '1.5',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const demo = style({
  width: '100%',
});

export const notice = style({
  padding: '1.5rem',
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1e3a8a',
      borderColor: '#1e40af',
    },
  },
});

export const noticeTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#1e40af',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#93c5fd',
    },
  },
});

export const noticeText = style({
  fontSize: '0.875rem',
  color: '#1e40af',
  lineHeight: '1.5',
  margin: 0,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#bfdbfe',
    },
  },
});
