<script setup>
import ProjectVisual from './ProjectVisual.vue'
import TechBadge from './TechBadge.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink class="project-card glass-card" :to="{ name: 'project-detail', params: { slug: project.slug } }">
    <ProjectVisual :variant="project.visual" />
    <div class="project-card__body">
      <span class="eyebrow">{{ project.category }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <div class="badge-row">
        <TechBadge v-for="tech in project.stack.slice(0, 3)" :key="tech" :label="tech" />
      </div>
    </div>
  </RouterLink>
</template>
