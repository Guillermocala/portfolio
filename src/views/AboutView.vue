<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <main class="page">
    <section class="container split-hero">
      <div>
        <div class="availability">
          <span></span>
          {{ t('common.available') }}
        </div>
        <h1>{{ t('about.title') }}</h1>
        <p>
          {{ t('about.intro') }}
        </p>
      </div>
      <div class="portrait-card glass-card">
        <span class="material-symbols-outlined">fingerprint</span>
      </div>
    </section>

    <section class="container about-grid section-block">
      <article class="glass-card content-card">
        <span class="eyebrow">{{ t('about.biography') }}</span>
        <h2>{{ t('about.biographyTitle') }}</h2>
        <p v-for="paragraph in tm('about.biographyParagraphs')" :key="paragraph">
          {{ paragraph }}
        </p>
      </article>

      <aside class="glass-card content-card">
        <span class="eyebrow">{{ t('about.philosophy') }}</span>
        <h2>{{ t('about.philosophyTitle') }}</h2>
        <p>{{ t('about.philosophyText') }}</p>
      </aside>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <span class="eyebrow">{{ t('about.journey') }}</span>
        <h2>{{ t('about.journeyTitle') }}</h2>
      </div>
      <div class="timeline">
        <article v-for="item in tm('about.timeline')" :key="item.title" class="timeline-item glass-card">
          <time>{{ item.date }}</time>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>
  </main>
</template>
