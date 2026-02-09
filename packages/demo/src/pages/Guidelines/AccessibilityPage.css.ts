import { style } from '@vanilla-extract/css';

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

export const principleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
});

export const principleCard = style({
  padding: '1.5rem',
  backgroundColor: '#f9fafb',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const principleDescription = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.6,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const checklistSection = style({
  marginTop: '2rem',
});

export const checklistTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const checklistGrid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
  overflow: 'hidden',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
});

export const checklistItem = style({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: '1.5rem',
  padding: '1.25rem 1.5rem',
  borderBottom: '1px solid #e5e7eb',
  ':last-child': {
    borderBottom: 'none',
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

export const checklistLabel = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#374151',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const checklistValue = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  lineHeight: 1.5,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const contrastTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
});

export const tableHeader = style({
  backgroundColor: '#f9fafb',
  textAlign: 'left',
  padding: '1rem 1.5rem',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      color: '#d1d5db',
      borderBottomColor: '#374151',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
      borderBottomColor: '#374151',
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#374151',
      color: '#d1d5db',
    },
  },
});

export const infoBox = style({
  padding: '1.5rem',
  backgroundColor: '#fef3c7',
  border: '1px solid #fcd34d',
  borderRadius: '0.75rem',
  marginTop: '2rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#78350f',
      borderColor: '#92400e',
    },
  },
});

export const infoTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#92400e',
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#fcd34d',
    },
  },
});

export const infoText = style({
  fontSize: '0.875rem',
  color: '#92400e',
  lineHeight: 1.6,
  margin: 0,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#fde68a',
    },
  },
});

export const resourceList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '2rem',
});

export const resourceLink = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '1rem 1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  textDecoration: 'none',
  color: '#2563eb',
  fontSize: '0.875rem',
  fontWeight: 500,
  transition: 'border-color 0.2s, background-color 0.2s',
  ':hover': {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
      color: '#60a5fa',
      ':hover': {
        borderColor: '#60a5fa',
        backgroundColor: '#1e3a8a',
      },
    },
  },
});
