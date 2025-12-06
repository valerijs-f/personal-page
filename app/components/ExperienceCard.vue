<template>
  <div
    class="bg-light-elevated dark:bg-elevated lg:hover:bg-light-elevated/90 lg:dark:hover:bg-elevated/90 group flex flex-col gap-4 rounded-sm p-4 transition-transform lg:flex-row lg:hover:scale-105"
  >
    <slot name="left-column"></slot>
    <div class="flex flex-col gap-2">
      <h3>
        {{ experience.role }}
        <span v-if="experience.company"
          >·
          <a
            v-if="experience.companyUrl"
            class="link inline-flex items-center gap-1"
            :href="experience.companyUrl"
            >{{ experience.company }}
            <ArrowRightIcon
              class="-rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <span v-else>{{ experience.company }}</span>
        </span>
      </h3>
      <div v-if="experience.location" class="dark:text-white">
        {{ experience.location }}
      </div>
      <p class="text-justify">
        {{ experience.description }}
      </p>
      <a
        v-if="experience.repository"
        :href="experience.repository.link"
        class="flew-row link flex gap-1"
      >
        <LinkIcon /> {{ experience.repository.text ?? 'Repository' }}
      </a>
      <tag-list v-if="experience.skills?.length" :tags="experience.skills" />
    </div>
  </div>
</template>

<script setup>
import TagList from './common/TagList.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import LinkIcon from './icons/LinkIcon.vue'

defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>
