<template>
  <header
    class="bg-bg shadow-[0_4px_10px_theme(colors.accent/0.1)] sticky top-0 z-50 flex justify-between p-3 opacity-90"
  >
    <a class="flex flex-1 flex-row items-center" href="/" :aria-label="text.header.ariaHome">
      <LogoIcon />
    </a>
    <div class="flex flex-1 flex-row items-center justify-center gap-2">
      <a
        class="hover:bg-bg-elevated rounded-sm p-1"
        href="https://github.com/valerijs-f"
        target="_blank"
        :aria-label="text.header.ariaGitHub"
      >
        <GithubIcon />
      </a>
      <a
        class="hover:bg-bg-elevated rounded-sm p-1"
        href="https://linkedin.com/in/valerijs-farbtuhs"
        target="_blank"
        :aria-label="text.header.ariaLinkedIn"
      >
        <LinkedinIcon />
      </a>
      <a
        class="hover:bg-bg-elevated rounded-sm p-1"
        href="mailto:val.codes.info+portfolio@gmail.com?subject=Portfolio%20Contact%20Request&body=Hi%20Valerijs%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards%2C%0A"
        target="_blank"
        :aria-label="text.header.ariaEmail"
      >
        <EnvelopeIcon />
      </a>
    </div>
    <div class="flex flex-1 flex-row items-center justify-end">
      <button
        class="hover:bg-bg-elevated cursor-pointer rounded-sm p-1"
        @click="toggleTheme"
        :aria-label="text.header.ariaToggleTheme"
      >
        <MoonIcon v-if="isDarkTheme" class="text-white" />
        <SunIcon v-if="isLightTheme" class="text-black" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { text } from '~/content/text'
import EnvelopeIcon from '~/components/icons/EnvelopeIcon.vue'
import GithubIcon from '~/components/icons/GithubIcon.vue'
import LinkedinIcon from '~/components/icons/LinkedinIcon.vue'
import LogoIcon from '~/components/icons/LogoIcon.vue'
import MoonIcon from '~/components/icons/MoonIcon.vue'
import SunIcon from '~/components/icons/SunIcon.vue'

const colorMode = ref(null)

onMounted(() => {
  colorMode.value = useColorMode()
})

const isDarkTheme = computed(() => colorMode.value?.value === 'dark')
const isLightTheme = computed(() => colorMode.value?.value === 'light')

function toggleTheme() {
  if (colorMode.value) {
    colorMode.value.preference = isDarkTheme.value ? 'light' : 'dark'
  }
}
</script>
