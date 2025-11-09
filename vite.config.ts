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
          // Core React libraries - critical
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation libraries - defer loading
          'vendor-animations': ['framer-motion', 'gsap'],
          // UI components - split by priority
          'vendor-ui': ['lucide-react', 'react-hot-toast'],
          'vendor-seo': ['react-helmet-async'],
          // Below-fold components (lazy loaded) - aggressive splitting
          'components-testimonials': ['./src/components/Testimonials.tsx'],
          'components-instagram': ['./src/components/InstagramFeed.tsx'],
          'components-newsletter': ['./src/components/Newsletter.tsx'],
          'components-footer': ['./src/components/Footer.tsx'],
          'components-chat': ['./src/components/ChatWidget.tsx'],
        },
        // Optimize file naming for better caching
        chunkFileNames: (chunkInfo) => {
          // Different strategies for different chunk types
          if (chunkInfo.name.includes('vendor')) {
            return 'assets/vendor/[name]-[hash].js';
          }
          if (chunkInfo.name.includes('components')) {
            return 'assets/components/[name]-[hash].js';
          }
          return 'assets/js/[name]-[hash].js';
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Optimize asset organization
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        }
      }
    },
    chunkSizeWarningLimit: 800, // Stricter warning limit
    assetsInlineLimit: 2048, // Reduce inline limit for better caching
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Multiple compression passes for better results
        unsafe_arrows: true,
        unsafe_methods: true
      },
      format: {
        comments: false
      },
      mangle: {
        safari10: true // Better Safari compatibility
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