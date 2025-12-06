<template>
  <div class="bg-accent/20 border-accent max-w-fit rounded-sm border-1 p-1 text-xs">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
