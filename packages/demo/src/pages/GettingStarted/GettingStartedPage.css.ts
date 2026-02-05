import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '1000px',
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
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const description = style({
  fontSize: '1.25rem',
  color: '#6b7280',
  marginBottom: '3rem',
  lineHeight: 1.6,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1rem',
    },
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
  fontSize: '1.75rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.75rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.5rem',
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

export const installTabs = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '1.5rem',
});

export const installOption = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const installTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#2563eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const codeExample = style({
  marginBottom: '2.5rem',
});

export const exampleTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const exampleDescription = style({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '1rem',
  lineHeight: 1.5,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const infoBox = style({
  padding: '1.5rem',
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '0.75rem',
  marginTop: '2rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1e3a8a',
      borderColor: '#1e40af',
    },
  },
});

export const infoTitle = style({
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

export const infoText = style({
  fontSize: '0.875rem',
  color: '#1e40af',
  lineHeight: 1.6,
  margin: 0,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#bfdbfe',
    },
  },
});

export const nextStepsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
});

export const nextStepCard = style({
  height: '100%',
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

export const nextStepTitle = style({
  fontSize: '1.125rem',
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

export const helpBox = style({
  textAlign: 'center',
  padding: '3rem 2rem',
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

export const helpTitle = style({
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

export const helpText = style({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '2rem',
  lineHeight: 1.6,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const helpActions = style({
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
