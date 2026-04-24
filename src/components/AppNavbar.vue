<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale, supportedLocales } from '../i18n'

const { locale, t } = useI18n()

const navItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.projects', to: '/projects' },
  { labelKey: 'nav.about', to: '/about' },
]
</script>

<template>
  <header class="site-header">
    <nav class="navbar container">
      <RouterLink class="brand" to="/">
        <span class="material-symbols-outlined">terminal</span>
        <span>DevPortfolio</span>
      </RouterLink>

      <div class="nav-links" :aria-label="t('nav.aria')">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ t(item.labelKey) }}
        </RouterLink>
      </div>

      <div class="nav-actions">
        <div
          class="language-switcher"
          :class="`language-switcher--${locale}`"
          :aria-label="t('nav.language')"
          role="group"
        >
          <span class="language-switcher__thumb" aria-hidden="true"></span>
          <button
            v-for="availableLocale in supportedLocales"
            :key="availableLocale"
            type="button"
            :aria-pressed="locale === availableLocale"
            :class="{ 'language-switcher__button--active': locale === availableLocale }"
            class="language-switcher__button"
            @click="setLocale(availableLocale)"
          >
            {{ availableLocale.toUpperCase() }}
          </button>
        </div>

        <a class="resume-button" href="#" aria-disabled="true" @click.prevent>
          {{ t('nav.resume') }}
        </a>
      </div>
    </nav>
  </header>
</template>
