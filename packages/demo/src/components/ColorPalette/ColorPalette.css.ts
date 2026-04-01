import { style } from '@vanilla-extract/css';

export const colorPalette = style({
  display: 'grid',
  gap: '1rem',
  width: '100%',
  marginBottom: '2rem',
});

export const colorItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'translateY(-2px)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
});

export const colorSwatch = style({
  position: 'relative',
  width: '100%',
  height: '100px',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  transition: 'box-shadow 0.2s',
  ':hover': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
});

export const copiedIndicator = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '50%',
  color: '#10b981',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

export const colorInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const colorName = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#111827',
});

export const colorHex = style({
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#6b7280',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
});

export const colorDescription = style({
  fontSize: '0.75rem',
  color: '#9ca3af',
  lineHeight: '1.4',
});
