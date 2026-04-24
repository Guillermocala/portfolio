<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectVisual from '../components/ProjectVisual.vue'
import TechBadge from '../components/TechBadge.vue'
import { findProjectBySlug, projects } from '../data/projects'

const route = useRoute()
const project = computed(() => findProjectBySlug(route.params.slug))
const nextProject = computed(() => {
  if (!project.value) return projects[0]
  const index = projects.findIndex((item) => item.slug === project.value.slug)
  return projects[(index + 1) % projects.length]
})
</script>

<template>
  <main v-if="project" class="page">
    <section class="detail-hero">
      <ProjectVisual :variant="project.visual" />
      <div class="detail-hero__overlay"></div>
      <div class="container detail-hero__content">
        <div class="badge-row">
          <TechBadge :label="project.category" />
          <span class="status-pill"><span></span>Case Study</span>
        </div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="action-row">
          <a v-if="project.demoUrl" class="button button--primary" :href="project.demoUrl" target="_blank" rel="noreferrer">
            <span class="material-symbols-outlined">rocket_launch</span>
            View Live Demo
          </a>
          <button v-else class="button button--disabled" type="button" disabled>
            <span class="material-symbols-outlined">rocket_launch</span>
            View Live Demo
            <small>Coming soon</small>
          </button>
          <a class="button button--secondary" :href="project.repoUrl" target="_blank" rel="noreferrer">
            <span class="material-symbols-outlined">code</span>
            Source Code
          </a>
        </div>
      </div>
    </section>

    <section class="container detail-layout section-block">
      <div class="detail-main">
        <article>
          <span class="eyebrow">The Problem</span>
          <h2>The challenge</h2>
          <p>{{ project.problem }}</p>
        </article>
        <article>
          <span class="eyebrow">The Solution</span>
          <h2>The approach</h2>
          <p>{{ project.solution }}</p>
          <div class="code-card glass-card">
            <span class="material-symbols-outlined">terminal</span>
            <pre><code>const project = {
  stack: {{ JSON.stringify(project.stack) }},
  modular: true,
  deployTarget: 'GitHub Pages'
}</code></pre>
          </div>
        </article>
      </div>

      <aside class="detail-sidebar">
        <div class="glass-card content-card">
          <h2>Tech Stack</h2>
          <div class="badge-row">
            <TechBadge v-for="tech in project.stack" :key="tech" :label="tech" />
          </div>
          <dl class="meta-list">
            <div>
              <dt>Duration</dt>
              <dd>{{ project.duration }}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{{ project.category }}</dd>
            </div>
          </dl>
        </div>

        <div class="glass-card content-card">
          <h2>Impact</h2>
          <div v-for="metric in project.impact" :key="metric.label" class="metric">
            <div>
              <span>{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
            </div>
            <div class="metric-bar">
              <span :style="{ width: metric.value }"></span>
            </div>
          </div>
        </div>
      </aside>
    </section>

    <section class="container next-project glass-card">
      <div>
        <span class="eyebrow">Next Project</span>
        <h2>{{ nextProject.title }}</h2>
      </div>
      <RouterLink class="button button--secondary" :to="{ name: 'project-detail', params: { slug: nextProject.slug } }">
        View Project
        <span class="material-symbols-outlined">arrow_forward</span>
      </RouterLink>
    </section>
  </main>

  <main v-else class="page not-found">
    <section class="container glass-card content-card">
      <span class="eyebrow">Project not found</span>
      <h1>This project does not exist yet.</h1>
      <p>Return to the projects page and choose one of the available case studies.</p>
      <RouterLink class="button button--primary" to="/projects">Back to Projects</RouterLink>
    </section>
  </main>
</template>
