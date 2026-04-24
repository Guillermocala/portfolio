<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const selectedTech = ref('All')
const techFilters = computed(() => ['All', ...new Set(projects.flatMap((project) => project.stack))])
const filteredProjects = computed(() => {
  if (selectedTech.value === 'All') return projects
  return projects.filter((project) => project.stack.includes(selectedTech.value))
})
</script>

<template>
  <main class="page">
    <section class="container page-header">
      <div class="availability">
        <span></span>
        Engineering Showcase
      </div>
      <h1>Projects</h1>
      <p>
        A curated set of technical projects focused on modular interfaces, maintainable
        systems, and clear case-study storytelling.
      </p>
    </section>

    <section class="container filter-row" aria-label="Filter projects by technology">
      <button
        v-for="tech in techFilters"
        :key="tech"
        class="filter-button"
        :class="{ 'filter-button--active': selectedTech === tech }"
        type="button"
        @click="selectedTech = tech"
      >
        {{ tech }}
      </button>
    </section>

    <section class="container project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </section>
  </main>
</template>
