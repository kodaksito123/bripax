/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      // Optimizaciones de animación para mejor rendimiento
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-medium': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Optimizaciones de transición
      transitionDuration: {
        'fast': '100ms',
        'medium': '200ms',
        'slow': '300ms',
      },
      // Optimizaciones de transformación
      transform: {
        'hardware': 'translateZ(0)',
        'gpu': 'translate3d(0, 0, 0)',
      },
    },
  },
  plugins: [],
  // Optimizaciones para producción
  corePlugins: {
    // Deshabilitar plugins que no usamos para reducir el bundle
    preflight: true,
    container: false, // Solo si no usas container
    accessibility: false, // Solo si no usas sr-only
  },
  // Configuración para producción
  future: {
    hoverOnlyWhenSupported: true, // Solo hover en dispositivos que lo soporten
  },
  // Optimizaciones de rendimiento
  experimental: {
    optimizeUniversalDefaults: true, // Optimizar valores por defecto
  },
};
