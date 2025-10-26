<template>
  <div class="bg-white dark:bg-primary dark:text-white h-svh">
    <header class="h-1/10 bg-white dark:bg-primary flex justify-between sticky top-0">
      This is header
      <div>
        page sections
      </div>
      <div>
        theme selector
      </div>
    </header>
    <main>
      <h1> Hi, Val's page here </h1>
      <div class="p-3 mb-2">
        <h2>Bio</h2>
        <div class="border-1 border-accent rounded-sm p-2">
          <p>Here is my bio</p>
        </div>
      </div>
      <div class="p-3 mb-2">
        <h2>Experience</h2>
        <div class="border-1 border-accent rounded-sm p-2 mb-1">
          <h3>El Nino</h3>
          <p>description</p>
          <tag-list :tags="['Vue.js', 'Laravel', 'PHP', 'Tailwind', 'Cypress']" />
        </div>
        <div class="border-1 border-accent rounded-sm p-2">
          <h3>Teaching assistant</h3>
          <p>description</p>
          <tag-list :tags="['Java', 'UML', 'OOP']" />
        </div>
      </div>
      <div class="p-3">
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
    </main>
    <footer>
      This is footer
    </footer>
  </div>
</template>

<script setup>
import TagList from "./components/card-components/TagList.vue";

</script>

