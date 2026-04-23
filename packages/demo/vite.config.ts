import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

function deferNonCriticalCss(patterns: string[]): Plugin {
  return {
    name: 'defer-non-critical-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        (match, href) => {
          if (patterns.some((p) => href.includes(p))) {
            return `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`;
          }
          return match;
        }
      );
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    deferNonCriticalCss(['design-system']),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssMinify: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('react-syntax-highlighter') ||
            id.includes('prismjs')
          ) {
            return 'syntax-highlight';
          }
          if (id.includes('react-router-dom') || id.includes('@remix-run')) {
            return 'router';
          }
          if (
            id.includes('/react@') ||
            id.includes('/react-dom@') ||
            id.includes('/scheduler@')
          ) {
            return 'react-vendor';
          }
          if (
            id.includes('@taein-designsystem') ||
            id.includes('packages/core') ||
            id.includes('packages\\core')
          ) {
            return 'design-system';
          }
        },
      },
    },
  },
});
