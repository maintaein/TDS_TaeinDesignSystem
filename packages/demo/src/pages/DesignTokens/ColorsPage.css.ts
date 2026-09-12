import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
  '@media': {
    '(max-width: 768px)': {
      padding: '1rem',
    },
  },
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#2563eb',
  marginBottom: '0.5rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2rem',
    },
  },
});

export const description = style({
  fontSize: '1.125rem',
  color: '#6b7280',
  marginBottom: '3rem',
  lineHeight: 1.6,
});

export const section = style({
  marginBottom: '4rem',
});

export const sectionTitle = style({
  fontSize: '1.75rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
});

export const sectionDescription = style({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '1.5rem',
  lineHeight: 1.5,
});

export const semanticGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  marginTop: '1.5rem',
});

export const semanticTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.25rem',
});

export const semanticSubtitle = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  marginBottom: '1rem',
});

export const contrastTableWrapper = style({
  overflowX: 'auto',
  marginBottom: '1.5rem',
  border: '1px solid #e5e7eb',
  borderRadius: '0.75rem',
  backgroundColor: '#ffffff',
});

export const contrastTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.875rem',
});

export const contrastCaption = style({
  captionSide: 'top',
  textAlign: 'left',
  padding: '1rem 1rem 0.5rem',
  fontSize: '0.8125rem',
  color: '#6b7280',
});

export const contrastTh = style({
  textAlign: 'left',
  padding: '0.75rem 1rem',
  fontWeight: 600,
  color: '#111827',
  borderBottom: '1px solid #e5e7eb',
  whiteSpace: 'nowrap',
});

export const contrastThNumeric = style([
  contrastTh,
  {
    textAlign: 'right',
  },
]);

export const contrastTd = style({
  padding: '0.75rem 1rem',
  color: '#6b7280',
  borderBottom: '1px solid #f3f4f6',
  verticalAlign: 'middle',
});

// 대비 수치는 세로로 비교하는 값이므로 자릿수를 맞춘다(tabular-nums).
export const contrastTdNumeric = style([
  contrastTd,
  {
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
  },
]);

export const contrastTokenCell = style([
  contrastTd,
  {
    textAlign: 'left',
    fontFamily: 'monospace',
    fontWeight: 600,
    color: '#2563eb',
    whiteSpace: 'nowrap',
  },
]);

export const contrastValue = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontFamily: 'monospace',
  whiteSpace: 'nowrap',
});

export const contrastSwatch = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '0.25rem',
  border: '1px solid #e5e7eb',
  flexShrink: 0,
});

export const contrastNote = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.7,
  margin: '1.5rem 0 2.5rem',
});

export const guidelineList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  marginTop: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  //border: '1px solid #e5e7eb',
  overflow: 'hidden',
});

export const guidelineRow = style({
  display: 'grid',
  gridTemplateColumns: '160px 1fr',
  gap: '1.5rem',
  padding: '1.25rem 1.5rem',
  borderBottom: '1px solid #e5e7eb',
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(max-width: 640px)': {
      gridTemplateColumns: '1fr',
      gap: '0.5rem',
    },
  },
});

export const guidelineTitle = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#111827',
});

export const guidelineText = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.6,
});
