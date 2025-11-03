<template>
  <div>
    <v-header/>
    <slot />
    <v-footer/>
  </div>
</template>

<script setup>
import VHeader from '~/components/general/Header.vue';
import VFooter from '~/components/general/Footer.vue';

</script>