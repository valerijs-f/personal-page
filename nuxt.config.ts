import tailwindcss from "@tailwindcss/vite";
import fs from 'fs';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
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
  }   
})
