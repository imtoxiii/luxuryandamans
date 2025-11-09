import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      '/backend': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
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
        // Optimized manual chunking for better caching and performance
        manualChunks: {
          // Core React libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation and UI libraries
          'vendor-animations': ['framer-motion', 'gsap'],
          // UI components
          'vendor-ui': ['lucide-react', 'react-hot-toast', 'react-helmet-async'],
          // Below-fold components (lazy loaded)
          'components-lazy': [
            './src/components/Testimonials.tsx',
            './src/components/InstagramFeed.tsx',
            './src/components/Newsletter.tsx',
            './src/components/Footer.tsx'
          ],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      format: {
        comments: false
      }
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'gsap',
      'lucide-react',
      'react-hot-toast',
      'react-helmet-async'
    ],
    exclude: ['@emailjs/browser']
  }
});