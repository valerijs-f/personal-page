import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NUXT_DEVTOOLS_ENABLED === 'true' },
  css: ['~/assets/css/main.css'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:300,400,700"
        }
      ]
    }
  }
})
