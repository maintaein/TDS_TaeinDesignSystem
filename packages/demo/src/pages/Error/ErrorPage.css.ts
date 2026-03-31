import { style, keyframes } from '@vanilla-extract/css';

// 애니메이션
const float = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  '33%': { transform: 'translateY(-20px) rotate(5deg)' },
  '66%': { transform: 'translateY(10px) rotate(-5deg)' },
});

const floatReverse = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  '33%': { transform: 'translateY(15px) rotate(-3deg)' },
  '66%': { transform: 'translateY(-15px) rotate(3deg)' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
  '50%': { opacity: 0.6, transform: 'scale(1.05)' },
});

const slideIn = keyframes({
  from: { opacity: 0, transform: 'translateY(30px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const rotate = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const scaleIn = keyframes({
  from: { transform: 'scale(0.8)', opacity: 0 },
  to: { transform: 'scale(1)', opacity: 1 },
});

export const container = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)',
  padding: '2rem',
});

// 백그라운드
export const backgroundShapes = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
});

const shapeBase = style({
  position: 'absolute',
  borderRadius: '12px',

});

export const shape1 = style([
  shapeBase,
  {
    width: '200px',
    height: '200px',
    top: '10%',
    left: '5%',
    opacity: 0.1,
    background: 'linear-gradient(135deg, #2196F3, #1976D2)',
    transform: 'translateY(0) rotate(0deg)',
    animation: `${float} 8s ease-in-out infinite`,
  },
]);

export const shape2 = style([
  shapeBase,
  {
    width: '150px',
    height: '150px',
    top: '60%',
    right: '10%',
    background: 'linear-gradient(135deg, #4CAF50, #388E3C)',
    opacity: 0.1,
    transform: 'translateY(0) rotate(0deg)',
    borderRadius: '50%',
    animation: `${floatReverse} 10s ease-in-out infinite`,
  },
]);

export const shape3 = style([
  shapeBase,
  {
    width: '120px',
    height: '120px',
    bottom: '15%',
    left: '15%',
    background: 'linear-gradient(135deg, #FF9800, #F57C00)',
    opacity: 0.1,
    transform: 'translateY(0) rotate(0deg)',
    animation: `${float} 12s ease-in-out infinite backwards`,
    animationDelay: '2s',
  },
]);

export const shape4 = style([
  shapeBase,
  {
    width: '180px',
    height: '180px',
    top: '30%',
    right: '25%',
    background: 'linear-gradient(135deg, #F44336, #D32F2F)',
    opacity: 0.3,
    transform: 'scale(1)',
    borderRadius: '50%',
    animation: `${pulse} 6s ease-in-out infinite`,
  },
]);

export const shape5 = style([
  shapeBase,
  {
    width: '100px',
    height: '100px',
    top: '5%',
    right: '5%',
    background: 'linear-gradient(135deg, #9C27B0, #7B1FA2)',
    opacity: 0.1,
    transform: 'translateY(0) rotate(0deg)',
    animation: `${floatReverse} 9s ease-in-out infinite`,
    animationDelay: '1s',
  },
]);

export const shape6 = style([
  shapeBase,
  {
    width: '140px',
    height: '140px',
    bottom: '25%',
    right: '8%',
    background: 'linear-gradient(135deg, #2196F3, #0D47A1)',
    opacity: 0.1,
    animation: `${float} 11s ease-in-out infinite backwards`,
    animationDelay: '3s',
  },
]);

export const shape7 = style([
  shapeBase,
  {
    width: '90px',
    height: '90px',
    bottom: '40%',
    left: '8%',
    background: 'linear-gradient(135deg, #00BCD4, #0097A7)',
    borderRadius: '50%',
    opacity: 0.3,
    transform: 'scale(1)',
    animation: `${pulse} 7s ease-in-out infinite`,
    animationDelay: '1.5s',
  },
]);

export const shape8 = style([
  shapeBase,
  {
    width: '160px',
    height: '160px',
    top: '45%',
    left: '30%',
    background: 'linear-gradient(135deg, #FFEB3B, #F57F17)',
    opacity: 0.1,
    transform: 'translateY(0) rotate(0deg)',
    animation: `${floatReverse} 10s ease-in-out infinite`,
    animationDelay: '2.5s',
  },
]);

// 메인컨텐츠들
export const content = style({
  position: 'relative',
  zIndex: 10,
  textAlign: 'center',
  maxWidth: '700px',
  padding: '4rem 2rem',
  animation: `${fadeIn} 0.8s ease-out`,
});

export const errorCode = style({
  fontSize: 'clamp(6rem, 20vw, 12rem)',
  fontWeight: 900,
  lineHeight: 1,
  background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 50%, #0D47A1 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0 10px 40px rgba(33, 150, 243, 0.3)',
  marginBottom: '1rem',
  fontFamily: '"Outfit", "Helvetica Neue", sans-serif',
  letterSpacing: '-0.05em',
  animation: `${scaleIn} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`,
});

export const errorSubtitle = style({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1.5rem',
  fontFamily: '"Outfit", "Helvetica Neue", sans-serif',
  letterSpacing: '-0.02em',
  animation: `${slideIn} 0.8s ease-out 0.2s backwards`,
});

export const errorMessage = style({
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  color: '#64748b',
  lineHeight: 1.8,
  marginBottom: '3rem',
  maxWidth: '600px',
  margin: '0 auto 3rem',
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 400,
  animation: `${slideIn} 0.8s ease-out 0.4s backwards`,
});

export const actions = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
  animation: `${slideIn} 0.8s ease-out 0.6s backwards`,
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
});

// 그리드 라인
export const gridLines = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.1,
});

export const gridLineHorizontal = style({
  position: 'absolute',
  top: '50%',
  left: '-10%',
  right: '-10%',
  height: '1px',
  background: 'linear-gradient(90deg, transparent, #2196F3, transparent)',
  animation: `${fadeIn} 2s ease-out 1s backwards`,
});

export const gridLineVertical = style({
  position: 'absolute',
  left: '50%',
  top: '-10%',
  bottom: '-10%',
  width: '1px',
  background: 'linear-gradient(180deg, transparent, #2196F3, transparent)',
  animation: `${fadeIn} 2s ease-out 1.2s backwards`,
});

// Floating component icons
export const floatingIcons = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 5,
});

const iconBase = style({
  position: 'absolute',
  width: '60px',
  height: '60px',
  color: '#2196F3',
  opacity: 0.15,
});

export const icon1 = style([
  iconBase,
  {
    top: '20%',
    left: '15%',
    animation: `${float} 8s ease-in-out infinite, ${rotate} 20s linear infinite`,
  },
]);

export const icon2 = style([
  iconBase,
  {
    bottom: '20%',
    right: '20%',
    animation: `${floatReverse} 10s ease-in-out infinite, ${rotate} 25s linear infinite reverse`,
  },
]);

export const icon3 = style([
  iconBase,
  {
    top: '15%',
    right: '15%',
    animation: `${float} 12s ease-in-out infinite, ${rotate} 30s linear infinite`,
    animationDelay: '2s',
  },
]);
