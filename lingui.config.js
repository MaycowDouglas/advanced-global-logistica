module.exports = {
  locales: ['en', 'es', 'pt'],
  sourceLocale: 'pt',
  fallbackLocales: {
    default: 'pt',
  },
  catalogs: [
    {
      path: 'src/translations/locales/{locale}/messages',
      include: ['src/pages', 'src/components'],
    },
  ],
  format: 'po',
}
