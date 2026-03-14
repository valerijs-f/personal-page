<template>
  <header
    class="dark:bg-primary shadow-[0_4px_10px_theme(colors.accent/0.1)] sticky top-0 z-50 flex justify-between bg-white p-3 opacity-90"
  >
    <a class="flex flex-1 flex-row items-center" href="/">
      <LogoIcon />
    </a>
    <div class="flex flex-1 flex-row items-center justify-center gap-2">
      <a
        class="hover:bg-light-elevated dark:hover:bg-elevated rounded-sm p-1"
        href="https://github.com/valerijs-f"
        target="_blank"
        aria-label="GitHub profile"
      >
        <GithubIcon />
      </a>
      <a
        class="hover:bg-light-elevated dark:hover:bg-elevated rounded-sm p-1"
        href="https://linkedin.com/in/valerijs-farbtuhs"
        target="_blank"
        aria-label="LinkedIn profile"
      >
        <LinkedinIcon />
      </a>
      <a
        class="hover:bg-light-elevated dark:hover:bg-elevated rounded-sm p-1"
        href="mailto:val.codes.info+portfolio@gmail.com?subject=Portfolio%20Contact%20Request&body=Hi%20Valerijs%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards%2C%0A"
        target="_blank"
        aria-label="Contact via email"
      >
        <EnvelopeIcon />
      </a>
    </div>
    <div class="flex flex-1 flex-row items-center justify-end">
      <button
        class="hover:bg-light-elevated dark:hover:bg-elevated cursor-pointer rounded-sm p-1"
        @click="toggleTheme"
        aria-label="Toggle theme"
      >
        <MoonIcon v-if="isDarkTheme" class="text-white" />
        <SunIcon v-if="isLightTheme" class="text-black" />
      </button>
    </div>
  </header>
</template>

<script>
import EnvelopeIcon from '../icons/EnvelopeIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import LogoIcon from '../icons/LogoIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'
import SunIcon from '../icons/SunIcon.vue'
export default {
  name: 'Header',
  components: {
    GithubIcon,
    LinkedinIcon,
    EnvelopeIcon,
    LogoIcon,
    MoonIcon,
    SunIcon,
  },
  data() {
    return {
      colorMode: '',
    }
  },
  computed: {
    isDarkTheme() {
      return this.colorMode.value === 'dark'
    },
    isLightTheme() {
      return this.colorMode.value === 'light'
    },
  },
  mounted() {
    const colorMode = useColorMode()
    this.colorMode = colorMode
  },
  methods: {
    toggleTheme() {
      this.colorMode.preference = this.isDarkTheme ? 'light' : 'dark'
    },
  },
}
</script>
