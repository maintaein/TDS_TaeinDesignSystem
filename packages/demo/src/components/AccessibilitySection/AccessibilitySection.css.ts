import { style, globalStyle } from '@vanilla-extract/css';

// Section
export const accessibilitySection = style({
  marginBottom: '6rem',
});

// Header
export const sectionHeader = style({
  marginBottom: '3rem',
  paddingLeft: '1rem',
  borderLeft: '4px solid #f59e0b',
});

export const sectionTitle = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: '#1a2332',
  marginBottom: '0.5rem',
  letterSpacing: '-0.01em',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const sectionDescription = style({
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '#6b7280',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

// Subsection
export const subsection = style({
  marginBottom: '3rem',
  ':last-child': {
    marginBottom: 0,
  },
});

export const subsectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '1.5rem',
});

export const subsectionTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#1a2332',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const subsectionIntro = style({
  fontSize: '0.9375rem',
  lineHeight: 1.8,
  color: '#4b5563',
  marginBottom: '2rem',
  padding: '1rem 1.25rem',
  backgroundColor: '#f9fafb',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
      color: '#d1d5db',
    },
  },
});

// Table
export const accessibilityTable = style({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
});

export const tableHeader = style({
  backgroundColor: '#f9fafb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
    },
  },
});

export const tableHeaderCell = style({
  padding: '1rem 1.25rem',
  textAlign: 'left',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#6b7280',
  borderBottom: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
      borderBottomColor: '#374151',
    },
  },
});

export const tableRow = style({
  selectors: {
    '&:hover': {
      backgroundColor: '#f9fafb',
    },
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      selectors: {
        '&:hover': {
          backgroundColor: '#111827',
        },
      },
    },
  },
});

export const tableCell = style({
  padding: '1rem 1.25rem',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: '#374151',
  borderBottom: '1px solid #f3f4f6',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
      borderBottomColor: '#374151',
    },
  },
  selectors: {
    [`${tableRow}:last-child &`]: {
      borderBottom: 'none',
    },
  },
});

export const attributeCell = style({
  fontWeight: 600,
  color: '#1a2332',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const effectCell = style({
  color: '#059669',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#34d399',
    },
  },
});

// Additional Accessibility Section
export const additionalSection = style({
  marginTop: '2rem',
});

export const additionalContent = style({
  fontSize: '0.9375rem',
  lineHeight: 1.8,
  color: '#4b5563',
  marginBottom: '2rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const guidanceBlock = style({
  marginBottom: '2rem',
  ':last-child': {
    marginBottom: 0,
  },
});

export const guidanceTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#1a2332',
  marginBottom: '0.75rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const guidanceText = style({
  fontSize: '0.875rem',
  lineHeight: 1.7,
  color: '#4b5563',
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const codeExample = style({
  marginTop: '1rem',
});

// Code inline highlighting
globalStyle(`${tableCell} code`, {
  padding: '0.125rem 0.375rem',
  fontSize: '0.875em',
  fontFamily: 'inherit',
  backgroundColor: '#fef3c7',
  border: '1px solid #fde68a',
  borderRadius: '0.25rem',
  color: '#92400e',
  fontWeight: 600,
});

globalStyle(`${subsectionIntro} code`, {
  padding: '0.125rem 0.375rem',
  fontSize: '0.875em',
  fontFamily: 'inherit',
  backgroundColor: '#fef3c7',
  border: '1px solid #fde68a',
  borderRadius: '0.25rem',
  color: '#92400e',
  fontWeight: 600,
});

globalStyle(`${guidanceText} code`, {
  padding: '0.125rem 0.375rem',
  fontSize: '0.875em',
  fontFamily: 'inherit',
  backgroundColor: '#fef3c7',
  border: '1px solid #fde68a',
  borderRadius: '0.25rem',
  color: '#92400e',
  fontWeight: 600,
});
