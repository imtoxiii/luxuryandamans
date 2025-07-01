import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticHeaders from 'vite-plugin-static-headers';

export default defineConfig({
  plugins: [
    react(),
    staticHeaders({
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  ],
  server: {
    port: 5173,
    host: true,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});