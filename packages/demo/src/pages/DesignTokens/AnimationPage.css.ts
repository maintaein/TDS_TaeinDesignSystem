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

export const durationGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
});

export const durationCard = style({
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

export const durationHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
});

export const durationName = style({
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

export const durationValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const durationDescription = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  marginBottom: '1rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const easingList = style({
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

export const easingRow = style({
  display: 'grid',
  gridTemplateColumns: '180px 120px 1fr 120px',
  gap: '1.5rem',
  padding: '1.25rem 1.5rem',
  alignItems: 'center',
  borderBottom: '1px solid #e5e7eb',
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
    },
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#374151',
    },
  },
});

export const easingName = style({
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

export const easingValue = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace',
  padding: '0.25rem 0.5rem',
  backgroundColor: '#f3f4f6',
  borderRadius: '0.25rem',
  display: 'inline-block',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
      backgroundColor: '#374151',
    },
  },
});

export const easingDescription = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  '@media': {
    '(max-width: 768px)': {
      gridColumn: '1 / -1',
      order: 3,
    },
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

export const easingCurve = style({
  width: '120px',
  height: '60px',
  backgroundColor: '#f9fafb',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
      gridColumn: '1 / -1',
      order: 4,
    },
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1f2937',
    },
  },
});

export const easingCurveSvg = style({
  width: '100%',
  height: '100%',
});

export const demoContainer = style({
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

export const demoControls = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginBottom: '2rem',
});

export const demoControlGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const demoControlTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#111827',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
    },
  },
});

export const demoButtonGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
});

export const demoPlayground = style({
  height: '120px',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  marginBottom: '1.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#111827',
      borderColor: '#374151',
    },
  },
});

export const demoBox = style({
  width: '64px',
  height: '64px',
  backgroundColor: '#2563eb',
  borderRadius: '0.5rem',
  transition: 'transform',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#60a5fa',
    },
  },
});

export const demoBoxAnimated = style({
  width: '64px',
  height: '64px',
  backgroundColor: '#2563eb',
  borderRadius: '0.5rem',
  transition: 'transform',
  transform: 'translateX(200px)',
  '@media': {
    '(max-width: 768px)': {
      transform: 'translateX(100px)',
    },
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#60a5fa',
    },
  },
});

export const demoAction = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1.5rem',
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
