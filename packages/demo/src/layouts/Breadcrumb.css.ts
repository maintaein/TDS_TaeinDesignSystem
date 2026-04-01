import { style } from '@vanilla-extract/css';

export const breadcrumb = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '1rem 1.5rem',
  fontSize: '0.875rem',
  color: '#6b7280',
  borderBottom: '1px solid #e5e7eb',
});

export const breadcrumbItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const breadcrumbText = style({
  color: '#6b7280',
});

export const breadcrumbCurrent = style({
  color: '#1f2937',
  fontWeight: 500,
});

export const separator = style({
  color: '#d1d5db',
});
