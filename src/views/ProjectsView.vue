<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from '../components/ProjectCard.vue'
import { useLocalizedProjects } from '../composables/useLocalizedProjects'

const { t } = useI18n()
const { projects } = useLocalizedProjects()
const allFilter = 'All'
const selectedTech = ref(allFilter)
const techFilters = computed(() => [allFilter, ...new Set(projects.value.flatMap((project) => project.stack))])
const filteredProjects = computed(() => {
  if (selectedTech.value === allFilter) return projects.value
  return projects.value.filter((project) => project.stack.includes(selectedTech.value))
})
</script>

<template>
  <main class="page">
    <section class="container page-header">
      <div class="availability">
        <span></span>
        {{ t('projectsPage.eyebrow') }}
      </div>
      <h1>{{ t('projectsPage.title') }}</h1>
      <p>
        {{ t('projectsPage.intro') }}
      </p>
    </section>

    <section class="container filter-row" :aria-label="t('projectsPage.filterAria')">
      <button
        v-for="tech in techFilters"
        :key="tech"
        class="filter-button"
        :class="{ 'filter-button--active': selectedTech === tech }"
        type="button"
        @click="selectedTech = tech"
      >
        {{ tech === allFilter ? t('projectsPage.all') : tech }}
      </button>
    </section>

    <section class="container project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </section>
  </main>
</template>
