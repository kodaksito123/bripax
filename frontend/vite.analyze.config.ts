import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';

// Configuración para análisis del bundle
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          shaders: ['@paper-design/shaders-react'],
          ui: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot'],
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
        },
      },
    },
  },
});
