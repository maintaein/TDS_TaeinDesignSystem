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

export const fontFamilyGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
});

export const fontFamilyCard = style({
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

export const fontFamilyTitle = style({
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

export const fontFamilySample = style({
  fontSize: '1.25rem',
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const fontFamilyKorean = style({
  fontSize: '1.25rem',
  color: '#6b7280',
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const sizeScale = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const sizeRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1rem',
  backgroundColor: '#f9fafb',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
});

export const sizeLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
});

export const sizeName = style({
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

export const sizeValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const sizeSample = style({
  color: '#111827',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const weightGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
});

export const weightCard = style({
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

export const weightHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
});

export const weightName = style({
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

export const weightValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const weightSample = style({
  fontSize: '1.25rem',
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const weightDescription = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const lineHeightGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
});

export const lineHeightCard = style({
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

export const lineHeightHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
});

export const lineHeightName = style({
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

export const lineHeightValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const lineHeightSample = style({
  fontSize: '1rem',
  color: '#111827',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const lineHeightDescription = style({
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
