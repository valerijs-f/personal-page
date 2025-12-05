<template>
  <div>
    <main class="px-8 py-2 flex justify-center">
      <div class="lg:w-4/5">
        <div class="text-center">
          <h1 class="mb-2">Valerijs Farbtuhs</h1>
          <p class="text-xl dark:text-white mb-1">Medior Full Stack developer</p>
          <p class="text-lg">I build responsive, scalable and accessible applications.</p>
        </div>
        <div class="mb-4">
          <h2>About me</h2>
          <div class="">
            <p class="mb-1">
              I discovered my passion for creating things through code when I took Harvard's CS50 course
              — a general introduction to computer science where I built my very first web app as
              a final project. That moment of turning an idea into something real, something interactive,
              instantly hooked me. Since then, I've been fascinated by how web development blends logic 
              and creativity to shape experiences that people actually use.
            </p>
            <p class="mb-1">
              During my university years, I dove deeper into programming, constantly learning and
              experimenting to bring my ideas to life. After graduating, I was lucky to turn this passion
              into a career, applying my skills across diverse projects and domains — from 
              <a class="font-bold link" href="https://www.thuisbezorgd.nl/en/courier" target="_blank">recruitment</a> 
              and <a class="font-bold link" href="https://zorgselect.nl/" target="_blank">healtcare</a> to 
              <a class="font-bold link" href="https://vrm.victronenergy.com/" target="_blank">energy management</a>
              — each one teaching me something new about people, technology, and impact.
            </p>
            <p class="mb-1">
              Outside of work, I enjoy staying active through sports, particularly beach volleyball, going to 
              the gym, and occasionally playing racket sports.
            </p>
          </div>
        </div>
        <div class="mb-4">
          <h2>Experience</h2>
          <div class="flex flex-col gap-4">
            <experience-card
              v-for="(exp, i) in experiences"
              :key="i"
              :experience="exp"
            />
          </div> 
        </div>
        <div class="">
          <h2>Projects</h2>
          <div class="border-1 border-accent rounded-sm p-2 mb-1">
            <h3>Personal page</h3>
            <p>this very page</p>
          </div>
          <div class="border-1 border-accent rounded-sm p-2">
            <h3>Some other project</h3>
            <p>this very page</p>
          </div>
          <div class="border-1 border-accent rounded-sm p-2 mb-1">
            <h3>Some other project</h3>
            <p>this very page</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import ExperienceCard from "../components/ExperienceCard.vue";

definePageMeta({
  layout: 'default',
  path: '/',
})

const experiences = [
  {
    period: "2023 - present",
    role: "Fullstack Developer",
    company: "El Niño",
    companyUrl: "https://elnino.tech/",
    location: "Enschede, Netherlands (Remote)",
    skills: ["Vue", "React", "Angular", "Laravel", "PHP", "Python", "MySQL", "Tailwind", "Cypress", "Docker"],
    description:
      `I build and maintain responsive web applications using Vue,
      while also working with Angular and React on various projects. Alongside frontend development, I occasionally
      contribute to backend tasks using Laravel, Laravel Nova, and PHP, as well as Python for internal administration
      and support tools. Collaborating closely with designers, developers, and product owners, I focus on delivering
      clean, accessible, and user-centered digital experiences.`
  },
  {
    period: "2022 - 2024",
    role: "Teaching Assistant",
    company: "University of Twente",
    companyUrl: "https://www.utwente.nl/en/",
    location: "Enschede, Netherlands",
    skills: ["Java", "UML", "OOP"],
    description:
      `I supported students in developing strong programming and problem-solving skills through hands-on Java labs and personalized 
      guidance. I provided real-time debugging help, explained core object-oriented programming concepts, and gave
      detailed feedback on assignments to help students improve both their technical and analytical thinking.`
  }
]

</script>