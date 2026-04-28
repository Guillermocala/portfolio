<script setup>
import { computed } from 'vue'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from '../components/ProjectCard.vue'
import TechIcon from '../components/TechIcon.vue'
import { useLocalizedProjects } from '../composables/useLocalizedProjects'

const { locale, t, tm } = useI18n({ useScope: 'global' })
const { featuredProject, projects } = useLocalizedProjects()
const stack = ['Laravel', 'Vue.js', 'Livewire', 'Node.js', 'MySQL', 'AWS']
const [stackEmblaRef, stackEmblaApi] = useEmblaCarousel({
  align: 'start',
  containScroll: 'trimSnaps',
  loop: true,
  slidesToScroll: 1,
}, [
  Autoplay({
    delay: 2800,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  }),
])
const terminalFocus = computed(() => {
  locale.value
  return tm('home.terminalFocus')
})

function scrollStack(direction) {
  if (direction < 0) {
    stackEmblaApi.value?.scrollPrev()
    return
  }

  stackEmblaApi.value?.scrollNext()
}
</script>

<template>
  <main class="page">
    <section class="container hero-grid">
      <div class="hero-copy">
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
  name: '{{ t('common.fullName') }}',
  role: '{{ t('home.terminalRole') }}',
  focus: {{ JSON.stringify(terminalFocus) }},
  tools: ['Laravel', 'Vue.js', 'AWS'],
  shipping: true
}</code></pre>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <div>
          <span class="eyebrow">{{ t('home.capabilities') }}</span>
          <h2>{{ t('home.stackTitle') }}</h2>
          <p>{{ t('home.stackDescription') }}</p>
        </div>
      </div>
      <div class="stack-carousel-shell">
        <div class="carousel-controls" :aria-label="t('home.stackControls')">
          <button class="carousel-button" type="button" :aria-label="t('home.stackPrevious')" @click="scrollStack(-1)">
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
        </div>
        <div ref="stackEmblaRef" class="stack-carousel" tabindex="0">
          <div class="stack-carousel__track">
            <div v-for="tech in stack" :key="tech" class="stack-slide">
              <div class="stack-item glass-card">
                <TechIcon :label="tech" size="large" />
                <strong>{{ tech }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-controls" :aria-label="t('home.stackControls')">
          <button class="carousel-button" type="button" :aria-label="t('home.stackNext')" @click="scrollStack(1)">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
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
