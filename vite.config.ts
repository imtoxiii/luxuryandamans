import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    host: true,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    target: 'es2015',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          // Animation libraries
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap')) {
            return 'animations';
          }
          // Map libraries
          if (id.includes('node_modules/leaflet') || id.includes('node_modules/react-leaflet')) {
            return 'maps';
          }
          // UI libraries
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/swiper')) {
            return 'ui-components';
          }
          // Database and utilities
          if (id.includes('node_modules/sql.js') || id.includes('node_modules/axios')) {
            return 'database-utils';
          }
          // Email and external services
          if (id.includes('node_modules/@emailjs') || id.includes('node_modules/@supabase')) {
            return 'external-services';
          }
          // Other vendor packages
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId 
            ? chunkInfo.facadeModuleId.split('/').pop()
                .replace(/\.[^/.]+$/, '')
                .replace(/[\[\]]/g, 'slug')
                .replace(/[^a-zA-Z0-9_-]/g, '-')
            : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          const info = name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        }
      }
    },
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'lucide-react'
    ],
    exclude: ['@emailjs/browser']
  }
});