<template>
    <div class="flex flex-col lg:flex-row gap-4 rounded-sm p-4 bg-light-elevated dark:bg-elevated lg:hover:scale-105 lg:hover:bg-light-elevated/90 lg:dark:hover:bg-elevated/90 transition-transform">
        <div v-if="experience.period" class="flex-basis-1/5">
            {{ experience.period }}
        </div>
        <div>
            <h3>{{ experience.role }} 
                <span v-if="experience.company">· 
                    <a v-if="experience.companyUrl" class="link" :href="experience.companyUrl">{{experience.company}}</a>
                    <span v-else>{{experience.company}}</span>
                </span> 
            </h3>
            <div v-if="experience.location" class="mb-2 dark:text-white">
                {{ experience.location }}
            </div>
            <p class="text-justify mb-2">
                {{ experience.description }}
            </p>
            <tag-list v-if="experience.skills?.length" :tags="experience.skills" />
        </div>
    </div>
</template>

<script setup>
import TagList from "./common/TagList.vue";


defineProps({
  experience: {
    type: Object,
    required: true
  },
})
</script>
