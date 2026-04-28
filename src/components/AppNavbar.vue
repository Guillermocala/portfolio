<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, supportedLocales } from '../i18n'

const { locale, t } = useI18n({ useScope: 'global' })
const currentLocale = computed(() => locale.value)

const navItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.projects', to: '/projects' },
  { labelKey: 'nav.about', to: '/about' },
]

function handleLocaleChange(nextLocale) {
  setLocale(nextLocale)
}
</script>

<template>
  <header class="site-header">
    <nav class="navbar container">
      <RouterLink class="brand" to="/">
        <span class="material-symbols-outlined">terminal</span>
        <span>{{ t('common.name') }}</span>
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
          :class="`language-switcher--${currentLocale}`"
          :aria-label="t('nav.language')"
          role="group"
        >
          <span class="language-switcher__thumb" aria-hidden="true"></span>
          <button
            v-for="availableLocale in supportedLocales"
            :key="availableLocale"
            type="button"
            :aria-pressed="currentLocale === availableLocale"
            :class="{ 'language-switcher__button--active': currentLocale === availableLocale }"
            class="language-switcher__button"
            @click="handleLocaleChange(availableLocale)"
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
