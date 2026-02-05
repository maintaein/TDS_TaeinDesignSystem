import { style, globalStyle } from '@vanilla-extract/css';

// Container
export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '3rem 2rem',
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 1rem',
    },
  },
});

// Header Section
export const header = style({
  marginBottom: '4rem',
  paddingBottom: '3rem',
  borderBottom: '1px solid #e5e7eb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#374151',
    },
  },
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#1a2332',
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
    '(max-width: 768px)': {
      fontSize: '2rem',
    },
  },
});

export const description = style({
  fontSize: '1.125rem',
  lineHeight: 1.7,
  color: '#6b7280',
  maxWidth: '800px',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

// Quick Reference Section
export const quickReference = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginBottom: '6rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const quickRefCard = style({
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: '#f59e0b',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
});

export const quickRefTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#1a2332',
  marginBottom: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

// Section
export const section = style({
  marginBottom: '6rem',
});

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

// Examples
export const example = style({
  marginBottom: '3rem',
});

export const exampleTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#1a2332',
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

// Props Table
export const propsTableWrapper = style({
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.75rem',
  padding: '1.5rem',
  overflow: 'auto',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
      borderColor: '#374151',
    },
  },
});

// Guidelines List
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
  gridTemplateColumns: '200px 1fr',
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

globalStyle(`${guidelineText} code`, {
  padding: '0.125rem 0.375rem',
  fontSize: '0.875rem',
  fontFamily: 'inherit', // Pretendard 폰트 유지
  backgroundColor: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '0.25rem',
  color: '#dc2626',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#0f172a',
      borderColor: '#334155',
      color: '#f87171',
    },
  },
});

// Best Practices Grid
export const practicesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const practiceHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '1.5rem',
});

export const practiceIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#059669',
  backgroundColor: '#d1fae5',
  borderRadius: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#10b981',
      backgroundColor: '#064e3b',
    },
  },
});

export const practiceIconError = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#dc2626',
  backgroundColor: '#fee2e2',
  borderRadius: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f87171',
      backgroundColor: '#7f1d1d',
    },
  },
});

export const practiceTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#1a2332',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const practiceList = style({
  marginTop: '1.5rem',
  fontSize: '0.9375rem',
  lineHeight: 1.6,
  color: '#475569',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#cbd5e1',
    },
  },
});
