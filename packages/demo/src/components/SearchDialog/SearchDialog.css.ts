import { style, keyframes, globalStyle } from '@vanilla-extract/css';

const slideDown = keyframes({
  from: { opacity: 0, transform: 'translateY(-4px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  right: 0,
  marginTop: '0.5rem',
  width: '420px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  border: '1px solid #e5e7eb',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  animation: `${slideDown} 0.15s ease-out`,
  zIndex: 200,
  '@media': {
    '(max-width: 640px)': {
      width: '320px',
      right: '-0.5rem',
    },
  },
});

export const resultsList = style({
  maxHeight: '400px',
  overflowY: 'auto',
  padding: '0.375rem',
  scrollbarWidth: 'thin',
  scrollbarColor: '#d1d5db transparent',
});

globalStyle(`${resultsList}::-webkit-scrollbar`, {
  width: '5px',
});

globalStyle(`${resultsList}::-webkit-scrollbar-track`, {
  backgroundColor: 'transparent',
});

globalStyle(`${resultsList}::-webkit-scrollbar-thumb`, {
  backgroundColor: '#d1d5db',
  borderRadius: '3px',
});

export const categoryGroup = style({
  selectors: {
    '& + &': {
      marginTop: '0.25rem',
      paddingTop: '0.25rem',
      borderTop: '1px solid #f3f4f6',
    },
  },
});

export const categoryLabel = style({
  padding: '0.375rem 0.625rem',
  fontSize: '0.6875rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#9ca3af',
});

export const resultItem = style({
  display: 'block',
  width: '100%',
  padding: '0.5rem 0.625rem',
  textAlign: 'left',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.1s',
  ':hover': {
    backgroundColor: '#f3f4f6',
  },
});

export const resultItemSelected = style({
  backgroundColor: '#eff6ff',
  selectors: {
    '&:hover': {
      backgroundColor: '#eff6ff',
    },
  },
});

export const resultHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.125rem',
});

export const resultTitle = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#2563eb',
  lineHeight: 1.4,
});

export const resultDescription = style({
  fontSize: '0.8125rem',
  color: '#6b7280',
  lineHeight: 1.5,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const sectionsList = style({
  marginTop: '0.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
});

export const sectionItem = style({
  fontSize: '0.75rem',
  color: '#4b5563',
  lineHeight: 1.5,
  padding: '0.0625rem 0',
});

export const sectionTitle = style({
  fontWeight: 600,
  color: '#2563eb',
});

export const highlight = style({
  backgroundColor: '#fef08a',
  color: '#92400e',
  fontWeight: 600,
  borderRadius: '2px',
  padding: '0 1px',
});
