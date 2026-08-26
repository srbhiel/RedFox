export default defineNuxtConfig({
  compatibilityDate: '2026-08-26',
  devtools: { enabled: true },
  css: ['~/assets/css/all.css'],
  app: {
    head: {
      title: '11b',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})