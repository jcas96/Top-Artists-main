import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext', // or 'chrome93', 'firefox90', etc.
  },
});