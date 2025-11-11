<template>
  <header class="h-12 flex justify-between bg-white dark:bg-primary sticky top-0">
    This is header
    <div>page sections</div>
    <div>
      <button @click="toggleTheme">🌓 {{ colorModeValue === 'dark' ? 'Dark' : 'Light' }}</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      colorMode: null,
    }
  },
  computed: {
    colorModeValue() {
      return this.colorMode?.value
    },
  },
  mounted() {
    const colorMode = useColorMode()
    this.colorMode = colorMode
  },
  methods: {
    toggleTheme() {
      if (!this.colorMode) return
      this.colorMode.preference = this.colorMode.value === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>
