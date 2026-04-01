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

export const principleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
});

export const principleCard = style({
  padding: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
});

export const principleIcon = style({
  fontSize: '2rem',
  marginBottom: '0.75rem',
});

export const principleTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.5rem',
});

export const principleDescription = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.6,
});

export const guidelineList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  marginTop: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
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

export const contrastTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
});

export const tableHeader = style({
  backgroundColor: '#f9fafb',
  textAlign: 'left',
  padding: '1rem 1.5rem',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
});

export const tableCell = style({
  padding: '1rem 1.5rem',
  fontSize: '0.875rem',
  color: '#6b7280',
  borderBottom: '1px solid #e5e7eb',
  selectors: {
    'tr:last-child &': {
      borderBottom: 'none',
    },
  },
});

export const keyboardTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
});

export const keyBadge = style({
  display: 'inline-block',
  padding: '0.25rem 0.5rem',
  backgroundColor: '#f3f4f6',
  borderRadius: '0.25rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  fontFamily: 'monospace',
  color: '#374151',
  marginRight: '0.5rem',
});

export const infoBox = style({
  padding: '1.5rem',
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '0.75rem',
  marginTop: '2rem',
});

export const infoTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#1e40af',
  marginBottom: '0.5rem',
});

export const infoText = style({
  fontSize: '0.875rem',
  color: '#1e40af',
  lineHeight: 1.6,
  margin: 0,
});

export const subSectionTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '1rem',
  marginTop: '2rem',
});
