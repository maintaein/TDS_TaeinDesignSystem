import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssMinify: true,
    modulePreload: {
      resolveDependencies: (_url, deps) => {
        // syntax-highlighter와 code-editor는 lazy import이므로 초기 preload에서 제외
        return deps.filter((dep) => !dep.includes('syntax-highlighter'));
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('react-syntax-highlighter') ||
            id.includes('prismjs')
          ) {
            return 'syntax-highlighter';
          }
          if (id.includes('react-router-dom') || id.includes('@remix-run')) {
            return 'router';
          }
          if (
            id.includes('react-dom') ||
            (id.includes('react') && !id.includes('react-'))
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
