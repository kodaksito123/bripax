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
      // Solo animaciones esenciales para producción
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-medium': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Solo transiciones esenciales
      transitionDuration: {
        'fast': '100ms',
        'medium': '200ms',
        'slow': '300ms',
      },
      // Solo transformaciones esenciales
      transform: {
        'hardware': 'translateZ(0)',
        'gpu': 'translate3d(0, 0, 0)',
      },
    },
  },
  plugins: [],
  // Configuración agresiva para producción
  corePlugins: {
    preflight: true,
    container: false,
    accessibility: false,
    // Deshabilitar utilidades que no usamos
    float: false,
    clear: false,
    objectFit: false,
    objectPosition: false,
    overscrollBehavior: false,
    scrollBehavior: false,
    scrollMargin: false,
    scrollPadding: false,
    scrollSnapAlign: false,
    scrollSnapStop: false,
    scrollSnapType: false,
    touchAction: false,
    userSelect: false,
    willChange: false,
  },
  // Configuración para producción
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColor: false,
    disableColorOpacityUtilitiesByDefault: false,
    relativeContentPathsByDefault: false,
  },
  // Optimizaciones de rendimiento
  experimental: {
    optimizeUniversalDefaults: true,
    optimizeStandardColors: true,
  },
  // Configuración de safelist para clases críticas
  safelist: [
    // Clases que siempre deben estar disponibles
    'fixed',
    'inset-0',
    '-z-10',
    'overflow-hidden',
    'w-full',
    'h-full',
    'absolute',
    'pointer-events-none',
    'bg-white',
    'rounded-full',
    'blur-sm',
    'animate-pulse',
    'delay-1000',
    'delay-500',
    'opacity-20',
    'opacity-30',
    'opacity-15',
    'bg-black',
    'text-white',
    'px-2',
    'py-1',
    'rounded',
    'text-xs',
    'z-50',
  ],
};
