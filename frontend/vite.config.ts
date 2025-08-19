import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
    devSourcemap: false, // Deshabilitar sourcemaps en desarrollo para mejor rendimiento
  },
  // Optimizaciones para dispositivos de baja gama
  build: {
    target: 'es2015', // Compatibilidad con navegadores más antiguos
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        toplevel: true, // Mangle de nivel superior para mejor compresión
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          shaders: ['@paper-design/shaders-react'],
          ui: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot'],
        },
        // Optimizar nombres de archivos para caché
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
      // Optimizar el bundle
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    // Optimizaciones de CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Optimizaciones de assets
    assetsInlineLimit: 4096, // Inline assets pequeños
    chunkSizeWarningLimit: 1000, // Aumentar límite de warning
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: false, // Deshabilitar overlay de errores para mejor rendimiento
    },
  },
  // Optimizaciones de CSS
  css: {
    postcss: "./postcss.config.js",
    devSourcemap: false, // Deshabilitar sourcemaps en desarrollo para mejor rendimiento
  },
  // Optimizaciones de pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@paper-design/shaders-react',
    ],
    exclude: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot'],
  },
  // Configuración de preview para testing
  preview: {
    port: 4173,
    host: true,
  },
});
