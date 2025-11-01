<template>
  <div class="flex flex-wrap gap-2">
    <tag
      v-for="tag in tags"
      :text="tag"
    />
  </div>
</template>

<script setup>
import Tag from "./Tag.vue"

defineProps({
  tags: {
    type: Array,
    required: true
  },
})
</script>
