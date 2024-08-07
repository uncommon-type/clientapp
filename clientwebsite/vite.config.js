import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import { postcss } from './postcss.config';

export default defineConfig({
  plugins: [react()],
  root: 'src',
  resolve: {
    alias: {
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@network': path.resolve(__dirname, 'src/network'),
    },
  },
  css: { postcss },
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
