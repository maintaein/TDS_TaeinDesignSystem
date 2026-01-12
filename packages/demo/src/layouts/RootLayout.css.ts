import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
    },
  },
});

export const body = style({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

export const mainContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const content = style({
  flex: 1,
  padding: '2rem',
  overflowY: 'auto',
  color: '#1f2937',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f3f4f6',
    },
    '(max-width: 768px)': {
      padding: '1rem',
    },
  },
});
