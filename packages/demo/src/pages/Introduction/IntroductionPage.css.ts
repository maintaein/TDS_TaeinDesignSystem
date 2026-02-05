import { style, globalStyle } from '@vanilla-extract/css';

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

export const hero = style({
  textAlign: 'center',
  padding: '4rem 0 6rem',
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 0 3rem',
    },
  },
});

export const heroContent = style({
  maxWidth: '800px',
  margin: '0 auto',
});

export const heroTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1.5rem',
});

export const heroTitleMain = style({
  fontSize: '4rem',
  fontWeight: 800,
  color: '#2563eb',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '3rem',
    },
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const heroTitleSub = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#6b7280',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.25rem',
    },
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const heroDescription = style({
  fontSize: '1.25rem',
  lineHeight: 1.8,
  color: '#4b5563',
  marginBottom: '2rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1rem',
    },
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const heroActions = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
    },
  },
});

export const section = style({
  marginBottom: '6rem',
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '4rem',
    },
  },
});

export const sectionTitle = style({
  fontSize: '2.25rem',
  fontWeight: 700,
  color: '#111827',
  marginBottom: '1rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.75rem',
    },
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const sectionDescription = style({
  fontSize: '1.125rem',
  color: '#6b7280',
  marginBottom: '2rem',
  lineHeight: 1.6,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const valuesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
});

export const valueCard = style({
  padding: '2rem',
  backgroundColor: '#f9fafb',
  borderRadius: '1rem',
  border: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
});

export const valueIcon = style({
  fontSize: '3rem',
  marginBottom: '1rem',
});

export const valueTitle = style({
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

export const valueDescription = style({
  fontSize: '1rem',
  color: '#6b7280',
  lineHeight: 1.6,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const featuresList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  marginTop: '2rem',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
    },
  },
});

export const featuresListItem = style({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: '2rem',
  padding: '1.5rem 2rem',
  borderBottom: '1px solid #e5e7eb',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '0.5rem',
    },
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#374151',
    },
  },
});

export const featureTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#2563eb',
  textAlign: 'left',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const featureDescription = style({
  fontSize: '0.9375rem',
  color: '#4b5563',
  lineHeight: 1.6,
  textAlign: 'left',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const preview = style({
  marginTop: '2rem',
});

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
});

export const statCard = style({
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#eff6ff',
  borderRadius: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1e3a8a',
    },
  },
});

export const statNumber = style({
  fontSize: '3rem',
  fontWeight: 800,
  color: '#2563eb',
  marginBottom: '0.5rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2.5rem',
    },
    '(prefers-color-scheme: dark)': {
      color: '#93c5fd',
    },
  },
});

export const statLabel = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#1e40af',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#bfdbfe',
    },
  },
});

export const nextStepsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
});

export const nextStepIcon = style({
  fontSize: '2.5rem',
  marginBottom: '0.75rem',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transformOrigin: 'top left',
  transform: 'translateY(0) translateX(0) scale(1)',
  willChange: 'transform',
  backfaceVisibility: 'hidden',
});

export const nextStepCard = style({
  height: '100%',
});

export const nextStepTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.5rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  willChange: 'transform, color',
  transform: 'translateX(0)',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const nextStepDescription = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.5,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  willChange: 'transform',
  WebkitFontSmoothing: 'antialiased',
  transform: 'translateX(0)',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const nextStepArrow = style({
  fontSize: '1.5rem',
  color: '#6b7280',
  opacity: 0,
  transform: 'translateX(-10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

// Card 호버 시 자식 요소 애니메이션
globalStyle(`${nextStepCard}:hover ${nextStepIcon}`, {
  transform: 'translateY(-4px) translateX(1px) scale(1.11)',
});

globalStyle(`${nextStepCard}:hover ${nextStepTitle}`, {
  color: '#2563eb',
  transform: 'translateX(2px)',
});

globalStyle(`${nextStepCard}:hover ${nextStepDescription}`, {
  color: '#4b5563',
  transform: 'translateX(2px)',
});

globalStyle(`${nextStepCard}:hover ${nextStepArrow}`, {
  opacity: 1,
  transform: 'translateX(0)',
});
