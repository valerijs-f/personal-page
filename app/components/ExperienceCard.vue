<template>
  <div
    class="bg-bg-elevated group border-accent/50 flex flex-col gap-4 rounded-sm border-t-3 p-4 transition-shadow lg:flex-row lg:hover:shadow-[0_25px_50px_-12px_color-mix(in_srgb,var(--color-accent)_22%,transparent)]"
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
            :aria-label="text.experienceCard.ariaEmployerLink"
            >{{ experience.company }}
            <ArrowRightIcon
              class="-rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <span v-else>{{ experience.company }}</span>
        </span>
      </h3>
      <div v-if="experience.location" class="text-text-heading">
        {{ experience.location }}
      </div>
      <p class="text-justify">
        {{ experience.description }}
      </p>
      <a
        v-if="experience.repository"
        :href="experience.repository.link"
        class="flew-row link flex gap-1"
        :aria-label="text.experienceCard.ariaRepositoryLink"
      >
        <LinkIcon /> {{ experience.repository.text ?? text.experienceCard.repositoryDefault }}
      </a>
      <tag-list v-if="experience.skills?.length" :tags="experience.skills" />
    </div>
  </div>
</template>

<script setup>
import { text } from '~/content/text'
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
