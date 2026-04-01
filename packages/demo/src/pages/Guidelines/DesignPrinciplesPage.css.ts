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

export const dosDontsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
});

export const dosCard = style({
  padding: '1.5rem',
  backgroundColor: '#f0fdf4',
  borderRadius: '0.75rem',
  border: '1px solid #bbf7d0',
});

export const dontsCard = style({
  padding: '1.5rem',
  backgroundColor: '#fef2f2',
  borderRadius: '0.75rem',
  border: '1px solid #fecaca',
});

export const dosTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#166534',
  marginBottom: '1rem',
});

export const dontsTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#991b1b',
  marginBottom: '1rem',
});

export const dosDontsList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const dosDontsItemBase = style({
  fontSize: '0.875rem',
  color: '#374151',
  lineHeight: 1.6,
  paddingLeft: '1.25rem',
  position: 'relative',
});

export const dosItem = style([dosDontsItemBase, {
  '::before': {
    content: '"✓"',
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#16a34a',
    fontWeight: 700,
  },
}]);

export const dontsItem = style([dosDontsItemBase, {
  '::before': {
    content: '"✗"',
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#dc2626',
    fontWeight: 700,
  },
}]);

export const codeSnippet = style({
  display: 'inline',
  padding: '0.15rem 0.4rem',
  backgroundColor: '#f3f4f6',
  borderRadius: '0.25rem',
  fontSize: '0.8rem',
  fontFamily: 'monospace',
  color: '#374151',
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
