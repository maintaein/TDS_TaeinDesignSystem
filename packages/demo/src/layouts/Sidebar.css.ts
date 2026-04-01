import { style } from '@vanilla-extract/css';

// ─── 기본 사이드바 (데스크톱: 전체 폭) ─────────────────────────────

export const sidebar = style({
  width: '280px',
  height: '100%',
  backgroundColor: '#ffffff',
  borderRight: '1px solid #e5e7eb',
  overflowY: 'auto',
  flexShrink: 0,
});

// 1024px 이하: 고정 위치, 왼쪽에서 슬라이드
export const sidebarOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 50,
  height: '100vh',
  boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
});

// 오버레이 모드에서 사이드바 숨김
export const sidebarHidden = style({
  transform: 'translateX(-100%)',
});

// ─── 네비게이션 ─────────────────────────────────────────────────────

export const nav = style({
  padding: '1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const navSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const navItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem 1rem',
  margin: '0.25rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#4b5563',
  cursor: 'pointer',
  transition: 'all 0.2s',
  borderRadius: '0.375rem',
  textDecoration: 'none',
  minHeight: '44px',
  ':hover': {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
  },
});

export const navItemActive = style({
  color: '#2563eb',
  backgroundColor: '#eff6ff',
  fontWeight: 600,
});

export const chevron = style({
  width: '1rem',
  height: '1rem',
  transition: 'transform 0.2s',
  transform: 'rotate(-90deg)',
});

export const chevronExpanded = style({
  transform: 'rotate(0deg)',
});

export const navChildren = style({
  paddingLeft: '1.5rem',
});
