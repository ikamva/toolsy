module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: isProd,
    content: ['./apps/**/*.html', './libs/**/*.html', '**/*.ts'],
  },
  theme: {
    extend: {
      colors: {
        backdrop: '#0C121B9C',
        dialog: '#F2F2F2',
        tag: '#eff3f6',
      },
    }
  },
  variants: {
  },
  plugins: [],
});
