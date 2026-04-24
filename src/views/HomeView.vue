<script setup>
import { useI18n } from 'vue-i18n'
import ProjectCard from '../components/ProjectCard.vue'
import { useLocalizedProjects } from '../composables/useLocalizedProjects'

const { t, tm } = useI18n()
const { featuredProject, projects } = useLocalizedProjects()
const stack = ['Vue', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'GitHub Pages']
</script>

<template>
  <main class="page">
    <section class="container hero-grid">
      <div class="hero-copy">
        <div class="availability">
          <span></span>
          {{ t('common.available') }}
        </div>
        <h1>{{ t('home.title') }}</h1>
        <p>
          {{ t('home.intro') }}
        </p>
        <div class="action-row">
          <RouterLink class="button button--primary" to="/projects">
            {{ t('common.viewProjects') }}
            <span class="material-symbols-outlined">arrow_forward</span>
          </RouterLink>
          <RouterLink class="button button--secondary" to="/about">{{ t('common.aboutMe') }}</RouterLink>
        </div>
      </div>

      <div class="terminal-card glass-card">
        <div class="terminal-card__top">
          <span></span><span></span><span></span>
          <small>portfolio.vue</small>
        </div>
        <pre><code>const developer = {
  role: '{{ t('home.terminalRole') }}',
  focus: {{ JSON.stringify(tm('home.terminalFocus')) }},
  tools: ['Vue', 'Vite', 'CSS'],
  shipping: true
}</code></pre>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <span class="eyebrow">{{ t('home.capabilities') }}</span>
        <h2>{{ t('home.stackTitle') }}</h2>
        <p>{{ t('home.stackDescription') }}</p>
      </div>
      <div class="stack-grid">
        <div v-for="tech in stack" :key="tech" class="stack-item glass-card">
          <span class="material-symbols-outlined">deployed_code</span>
          <strong>{{ tech }}</strong>
        </div>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <span class="eyebrow">{{ t('home.selectedWork') }}</span>
        <h2>{{ t('home.featuredProject') }}</h2>
      </div>
      <ProjectCard :project="featuredProject" />
      <div class="compact-projects">
        <ProjectCard v-for="project in projects.slice(1)" :key="project.slug" :project="project" />
      </div>
    </section>
  </main>
</template>
