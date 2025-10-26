<template>
  <div class="flex">
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
