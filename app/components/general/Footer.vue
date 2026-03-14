<template>
  <footer class="border-accent/20 border-t p-3">
    {{ text.footer.codedIn }}
    <a
      class="link font-bold"
      :href="text.footer.links.vsCode.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="text.footer.ariaVsCode"
    >
      {{ text.footer.linkText.vsCode }} </a
    >, {{ text.footer.using }}
    <a
      class="link font-bold"
      :href="text.footer.links.nuxt.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="text.footer.ariaNuxt"
    >
      {{ text.footer.linkText.nuxt }}
    </a>
    {{ text.footer.with }}
    <a
      class="link font-bold"
      :href="text.footer.links.vue.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="text.footer.ariaVue"
    >
      {{ text.footer.linkText.vue }}
    </a>
    {{ text.footer.andJavaScript }}, {{ text.footer.styledWith }}
    <a
      class="link font-bold"
      :href="text.footer.links.tailwind.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="text.footer.ariaTailwind"
    >
      {{ text.footer.linkText.tailwind }} </a
    >, {{ text.footer.andBuiltWith }}
    <a
      class="link font-bold"
      :href="text.footer.links.vite.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="text.footer.ariaVite"
    >
      {{ text.footer.linkText.vite }} </a
    >. {{ text.footer.deploymentHandledBy }}
    <a
      class="link font-bold"
      :href="text.footer.links.netlify.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="text.footer.ariaNetlify"
    >
      {{ text.footer.linkText.netlify }} </a
    >.
  </footer>
</template>

<script setup>
import { text } from '~/content/text'
</script>
