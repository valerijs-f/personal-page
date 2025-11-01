<template>
  <div class="bg-accent/20 border-1 border-accent rounded-sm p-1 max-w-fit text-xs">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
})
</script>
