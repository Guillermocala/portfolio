<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import TechBadge from '../components/TechBadge.vue'
import { featuredProject, projects } from '../data/projects'

const stack = ['Vue', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'GitHub Pages']
</script>

<template>
  <main class="page">
    <section class="container hero-grid">
      <div class="hero-copy">
        <div class="availability">
          <span></span>
          Available for hire
        </div>
        <h1>Building clean digital products with thoughtful code.</h1>
        <p>
          I create focused web experiences, scalable frontends, and technical case studies
          that explain not only what was built, but why it matters.
        </p>
        <div class="action-row">
          <RouterLink class="button button--primary" to="/projects">
            View Projects
            <span class="material-symbols-outlined">arrow_forward</span>
          </RouterLink>
          <RouterLink class="button button--secondary" to="/about">About Me</RouterLink>
        </div>
      </div>

      <div class="terminal-card glass-card">
        <div class="terminal-card__top">
          <span></span><span></span><span></span>
          <small>portfolio.vue</small>
        </div>
        <pre><code>const developer = {
  role: 'Full-Stack Developer',
  focus: ['Frontend', 'UX', 'Architecture'],
  tools: ['Vue', 'Vite', 'CSS'],
  shipping: true
}</code></pre>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <span class="eyebrow">Capabilities</span>
        <h2>The Stack</h2>
        <p>Technologies selected for a portfolio that stays easy to maintain and deploy.</p>
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
        <span class="eyebrow">Selected Work</span>
        <h2>Featured Project</h2>
      </div>
      <ProjectCard :project="featuredProject" />
      <div class="compact-projects">
        <ProjectCard v-for="project in projects.slice(1)" :key="project.slug" :project="project" />
      </div>
    </section>
  </main>
</template>
