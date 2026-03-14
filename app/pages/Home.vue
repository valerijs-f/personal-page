<template>
  <div>
    <main class="flex justify-center px-8 py-2">
      <div class="flex flex-col gap-4 lg:w-4/5">
        <div class="text-center">
          <h1 class="mb-2">Valerijs Farbtuhs</h1>
          <p class="text-text-heading mb-1 text-xl">Medior Full Stack developer</p>
          <p class="text-lg">I build responsive, scalable and accessible applications.</p>
        </div>
        <div>
          <h2>About me</h2>
          <div class="flex flex-col gap-1">
            <p>
              I discovered my passion for creating things through code when I took Harvard's CS50
              course — a general introduction to computer science where I built my very first web
              app as a final project. That moment of turning an idea into something real, something
              interactive, instantly hooked me. Since then, I've been fascinated by how web
              development blends logic and creativity to shape experiences that people actually use.
            </p>
            <p>
              During my university years, I dove deeper into programming, constantly learning and
              experimenting to bring my ideas to life. After graduating, I was lucky to turn this
              passion into a career, applying my skills across diverse projects and domains — from
              <a
                class="link font-bold underline"
                href="https://www.thuisbezorgd.nl/en/courier"
                target="_blank"
                >recruitment</a
              >
              and
              <a class="link font-bold underline" href="https://zorgselect.nl/" target="_blank"
                >healtcare</a
              >
              to
              <a
                class="link font-bold underline"
                href="https://vrm.victronenergy.com/"
                target="_blank"
                >energy management</a
              >
              — each one teaching me something new about people, technology, and impact.
            </p>
            <p>
              Outside of work, I enjoy staying active through sports, particularly beach volleyball,
              going to the gym, and occasionally playing racket sports.
            </p>
          </div>
        </div>
        <div>
          <h2>Experience</h2>
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
          <h2>Projects</h2>
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
import ExperienceCard from '../components/ExperienceCard.vue'
import TrackerImage from '~/assets/img/tracker-logo.png'

definePageMeta({
  layout: 'default',
  path: '/',
})

const experiences = [
  {
    period: '2023 - present',
    role: 'Fullstack Developer',
    company: 'El Niño',
    companyUrl: 'https://elnino.tech/',
    location: 'Enschede, Netherlands',
    skills: [
      'Vue',
      'React',
      'Angular',
      'Laravel',
      'PHP',
      'Python',
      'MySQL',
      'Tailwind',
      'Cypress',
      'Docker',
    ],
    description: `I build and maintain responsive web applications using Vue,
      while also working with Angular and React on various projects. Alongside frontend development, I occasionally
      contribute to backend tasks using Laravel, Laravel Nova, and PHP, as well as Python for internal administration
      and support tools. Collaborating closely with designers, developers, and product owners, I focus on delivering
      clean, accessible, and user-centered digital experiences.`,
  },
  {
    period: '2022 - 2024',
    role: 'Teaching Assistant',
    company: 'University of Twente',
    companyUrl: 'https://www.utwente.nl/en/',
    location: 'Enschede, Netherlands',
    skills: ['Java', 'UML', 'OOP'],
    description: `I supported students in developing strong programming and problem-solving skills through hands-on Java labs and personalized
      guidance. I provided real-time debugging help, explained core object-oriented programming concepts, and gave
      detailed feedback on assignments to help students improve both their technical and analytical thinking.`,
  },
]

const projects = [
  {
    role: 'Portfolio Site',
    skills: ['Nuxt.js', 'Vue', 'Tailwind'],
    icon: LogoMinimalIcon,
    repository: {
      link: 'https://github.com/valerijs-f/personal-page',
    },
    description: `This very portfolio site is my first publicly available project, built to showcase my skills, experience,
       and personal approach to development. I implemented it from scratch, focusing on clean UI,
       accessibility, responsive layout, and a smooth user experience. It serves as both a practical demonstration
       of my abilities and a foundation I plan to expand as I grow professionally.`,
  },
  {
    role: 'Telegram Expense Tracker',
    company: 'Telegram Bot',
    companyUrl: 'https://t.me/valcodes_expense_tracker_bot',
    skills: ['Nuxt.js', 'TypeScript', 'Telegram Mini App', 'Google Sheets API', 'Service Accounts'],
    image: TrackerImage,
    repository: {
      link: 'https://github.com/valerijs-f/expense-tracker',
    },
    description: `A personal Telegram Mini App created to simplify everyday expense tracking for me and my girlfriend.
      It replaces a manual Google Sheets workflow we had been using for years, making it faster and easier to log expenses in daily life.
      The project is built around convenience and consistency, turning a repetitive task into a lightweight, habit-friendly process.`,
  },
]
</script>
