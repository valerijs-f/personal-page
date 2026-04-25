import tailwindcss from '@tailwindcss/vite'

const googleFontsHref = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NUXT_DEVTOOLS_ENABLED === 'true' },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxtjs/color-mode', '@nuxt/hints'],
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Valerijs Farbtuhs | Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Valerijs Farbtuhs, a medior full stack developer building responsive, scalable, and accessible web applications.',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'style',
          href: googleFontsHref,
        },
        {
          rel: 'stylesheet',
          href: googleFontsHref,
          media: 'print',
          onload: "this.media='all'",
        },
      ],
    },
  },
})
