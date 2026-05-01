import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    // Allows imports like: import { Foo } from '@/components/...'
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Split GSAP into its own chunk so it can be cached independently
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
        },
      },
    },
    // No sourcemaps in production builds
    sourcemap: false,
  },
});
