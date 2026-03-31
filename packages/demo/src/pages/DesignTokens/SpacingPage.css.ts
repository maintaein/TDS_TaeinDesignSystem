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

export const spacingScale = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '2rem',
});

export const spacingRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '1rem',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#f9fafb',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const spacingLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const spacingName = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#2563eb',
  fontFamily: 'monospace',
});

export const spacingValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
});

export const spacingVisual = style({
  width: '100%',
  backgroundColor: '#e5e7eb',
  borderRadius: '0.25rem',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
});

export const spacingBar = style({
  height: '100%',
  backgroundColor: '#2563eb',
  borderRadius: '0.25rem',
  minWidth: '2px',
});

export const infoBox = style({
  padding: '1.5rem',
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '0.75rem',
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
});

export const radiusGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  gap: '1.5rem',
});

export const radiusCard = style({
  padding: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
});

export const radiusHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  marginBottom: '1rem',
});

export const radiusName = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#2563eb',
  fontFamily: 'monospace',
});

export const radiusValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
});

export const radiusVisualContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '0.75rem',
  minHeight: '80px',
});

export const radiusVisual = style({
  width: '64px',
  height: '64px',
  backgroundColor: '#2563eb',
});

export const radiusDescription = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  textAlign: 'center',
});

export const exampleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
});

export const exampleCard = style({
  padding: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
});

export const exampleTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '1rem',
});

export const exampleVisual = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#f9fafb',
  borderRadius: '0.5rem',
  marginTop: '1rem',
});

export const exampleButton = style({
  backgroundColor: '#2563eb',
  color: '#ffffff',
  border: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#1d4ed8',
  },
});

export const exampleCardVisual = style({
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  width: '100%',
});

export const exampleCardTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#111827',
});

export const exampleCardContent = style({
  fontSize: '0.875rem',
  color: '#6b7280',
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
