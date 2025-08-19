export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {
      // Configuración optimizada para producción
      flexbox: 'no-2009', // Solo soporte moderno
      grid: 'autoplace', // Grid moderno
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ],
    },
    // Solo en producción para comprimir CSS
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: true,
        }],
      },
    }),
  },
};
