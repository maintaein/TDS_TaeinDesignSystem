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
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2rem',
    },
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const description = style({
  fontSize: '1.125rem',
  color: '#6b7280',
  marginBottom: '3rem',
  lineHeight: 1.6,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
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
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const sectionDescription = style({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '1.5rem',
  lineHeight: 1.5,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
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
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const spacingValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const spacingVisual = style({
  width: '100%',
  backgroundColor: '#e5e7eb',
  borderRadius: '0.25rem',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#374151',
    },
  },
});

export const spacingBar = style({
  height: '100%',
  backgroundColor: '#2563eb',
  borderRadius: '0.25rem',
  minWidth: '2px',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#60a5fa',
    },
  },
});

export const infoBox = style({
  padding: '1.5rem',
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '0.75rem',
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#bfdbfe',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#60a5fa',
    },
  },
});

export const radiusValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#60a5fa',
    },
  },
});

export const radiusDescription = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  textAlign: 'center',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
});

export const exampleTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const exampleVisual = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#f9fafb',
  borderRadius: '0.5rem',
  marginTop: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#60a5fa',
      color: '#111827',
      ':hover': {
        backgroundColor: '#3b82f6',
      },
    },
  },
});

export const exampleCardVisual = style({
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  width: '100%',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
});

export const exampleCardTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#111827',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const exampleCardContent = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const guidelineList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  marginTop: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
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
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#374151',
    },
  },
});

export const guidelineTitle = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#111827',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const guidelineText = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.6,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});
