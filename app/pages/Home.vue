<template>
  <div>
    <main class="flex justify-center px-8 py-2">
      <div class="flex flex-col gap-4 lg:w-4/5">
        <div class="text-center">
          <h1 class="mb-2">{{ text.home.name }}</h1>
          <p class="text-text-heading mb-1 text-xl">{{ text.home.tagline }}</p>
          <p class="text-lg">{{ text.home.subtitle }}</p>
        </div>
        <div>
          <h2>{{ text.home.about.title }}</h2>
          <div class="flex flex-col gap-1">
            <p>{{ text.home.about.paragraph1 }}</p>
            <p>
              <template v-for="(segment, i) in text.home.about.paragraph2Parts" :key="i">
                <template v-if="typeof segment === 'string'">{{ segment }}</template>
                <a
                  v-else
                  class="link font-bold underline"
                  :href="segment.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ segment.text }}
                </a>
              </template>
            </p>
            <p>{{ text.home.about.paragraph3 }}</p>
          </div>
        </div>
        <div>
          <h2>{{ text.home.experience.title }}</h2>
          <div class="flex flex-col gap-4">
            <experience-card
              v-for="(experience, i) in experiences"
              :key="i"
              :experience="experience"
            >
              <template v-slot:left-column>
                <div class="flex-basis-1/5">
                  {{ experience.period }}
                </div>
              </template>
            </experience-card>
          </div>
        </div>
        <div>
          <h2>{{ text.home.projects.title }}</h2>
          <div class="flex flex-col gap-4">
            <experience-card v-for="(project, i) in projects" :key="i" :experience="project">
              <template v-slot:left-column>
                <div class="flex-basis-1/5">
                  <div class="flex h-8 w-8 items-center justify-center">
                    <component v-if="project.icon" :is="project.icon" class="h-8 w-8" />
                    <img
                      v-else-if="project.image"
                      :src="project.image"
                      :alt="`${project.role} logo`"
                      class="h-8 w-8 rounded-sm"
                    />
                  </div>
                </div>
              </template>
            </experience-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import LogoMinimalIcon from '~/components/icons/LogoMinimalIcon.vue'
import ExperienceCard from '~/components/ExperienceCard.vue'
import TrackerImage from '~/assets/img/tracker-logo.png'
import { text } from '~/content/text'

definePageMeta({
  layout: 'default',
  path: '/',
})

const experiences = text.home.experiences

const iconByKey = { LogoMinimalIcon }
const imageByKey = { 'tracker-logo': TrackerImage }

const projects = text.home.projectsList.map((p) => ({
  ...p,
  icon: p.icon ? iconByKey[p.icon] : undefined,
  image: p.image ? imageByKey[p.image] : undefined,
}))
</script>
