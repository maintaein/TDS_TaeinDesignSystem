import { style } from '@vanilla-extract/css';

export const skipToContent = style({
  position: 'absolute',
  top: '-100%',
  left: '1rem',
  zIndex: 9999,
  padding: '0.75rem 1.5rem',
  backgroundColor: '#6366f1',
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '0.875rem',
  borderRadius: '0 0 0.5rem 0.5rem',
  textDecoration: 'none',
  selectors: {
    '&:focus': {
      top: 0,
      outline: '3px solid #818cf8',
      outlineOffset: '2px',
    },
  },
});

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
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
  WebkitOverflowScrolling: 'touch',
  willChange: 'scroll-position',
  '@media': {
    '(max-width: 1024px)': {
      padding: '1rem',
    },
  },
});

// 모바일 사이드바 오버레이용 배경
export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 40,
});
