import { globalStyle, globalFontFace, globalKeyframes } from '@vanilla-extract/css';

const pretendard = 'Pretendard Variable';

globalFontFace(pretendard, {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2-variations")',
  fontWeight: '45 920',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  width: '100%',
  height: '100%',
  fontFamily: `"${pretendard}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root', {
  width: '100%',
  height: '100%',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalKeyframes('spin', {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});
