<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProjectVisual from '../components/ProjectVisual.vue'
import TechBadge from '../components/TechBadge.vue'
import { useLocalizedProjects } from '../composables/useLocalizedProjects'

const route = useRoute()
const { t } = useI18n({ useScope: 'global' })
const { projects, findProjectBySlug } = useLocalizedProjects()
const project = computed(() => findProjectBySlug(route.params.slug))
const nextProject = computed(() => {
  if (!project.value) return projects.value[0]
  const index = projects.value.findIndex((item) => item.slug === project.value.slug)
  return projects.value[(index + 1) % projects.value.length]
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
          <span class="status-pill"><span></span>{{ t('common.caseStudy') }}</span>
        </div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="action-row">
          <a v-if="project.demoUrl" class="button button--primary" :href="project.demoUrl" target="_blank" rel="noreferrer">
            <span class="material-symbols-outlined">rocket_launch</span>
            {{ t('common.viewLiveDemo') }}
          </a>
          <button v-else class="button button--disabled" type="button" disabled>
            <span class="material-symbols-outlined">rocket_launch</span>
            {{ t('common.viewLiveDemo') }}
            <small>{{ t('common.comingSoon') }}</small>
          </button>
          <a
            v-if="project.repoUrl"
            class="button button--secondary"
            :href="project.repoUrl"
            target="_blank"
            rel="noreferrer"
          >
            <span class="material-symbols-outlined">code</span>
            {{ t('common.sourceCode') }}
          </a>
          <button v-else class="button button--disabled" type="button" disabled>
            <span class="material-symbols-outlined">lock</span>
            {{ t('common.sourceCode') }}
            <small>{{ t('common.privateProject') }}</small>
          </button>
        </div>
      </div>
    </section>

    <section class="container detail-layout section-block">
      <div class="detail-main">
        <article>
          <span class="eyebrow">{{ t('projectDetail.problemEyebrow') }}</span>
          <h2>{{ t('projectDetail.problemTitle') }}</h2>
          <p>{{ project.problem }}</p>
        </article>
        <article>
          <span class="eyebrow">{{ t('projectDetail.solutionEyebrow') }}</span>
          <h2>{{ t('projectDetail.solutionTitle') }}</h2>
          <p>{{ project.solution }}</p>
          <div class="code-card glass-card">
            <span class="material-symbols-outlined">terminal</span>
            <pre><code>const project = {
  stack: {{ JSON.stringify(project.stack) }},
  modular: true,
  deployTarget: '{{ t('projectDetail.codeDeployTarget') }}'
}</code></pre>
          </div>
        </article>
      </div>

      <aside class="detail-sidebar">
        <div class="glass-card content-card">
          <h2>{{ t('projectDetail.techStack') }}</h2>
          <div class="badge-row">
            <TechBadge v-for="tech in project.stack" :key="tech" :label="tech" />
          </div>
          <dl class="meta-list">
            <div>
              <dt>{{ t('projectDetail.duration') }}</dt>
              <dd>{{ project.duration }}</dd>
            </div>
            <div>
              <dt>{{ t('projectDetail.role') }}</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div>
              <dt>{{ t('projectDetail.category') }}</dt>
              <dd>{{ project.category }}</dd>
            </div>
          </dl>
        </div>

        <div class="glass-card content-card">
          <h2>{{ t('projectDetail.impact') }}</h2>
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
        <span class="eyebrow">{{ t('projectDetail.nextProject') }}</span>
        <h2>{{ nextProject.title }}</h2>
      </div>
      <RouterLink class="button button--secondary" :to="{ name: 'project-detail', params: { slug: nextProject.slug } }">
        {{ t('common.viewProject') }}
        <span class="material-symbols-outlined">arrow_forward</span>
      </RouterLink>
    </section>
  </main>

  <main v-else class="page not-found">
    <section class="container glass-card content-card">
      <span class="eyebrow">{{ t('projectDetail.notFoundEyebrow') }}</span>
      <h1>{{ t('projectDetail.notFoundTitle') }}</h1>
      <p>{{ t('projectDetail.notFoundText') }}</p>
      <RouterLink class="button button--primary" to="/projects">{{ t('projectDetail.backToProjects') }}</RouterLink>
    </section>
  </main>
</template>
