<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <strong>DevPortfolio</strong>
        <p>{{ t('footer.text') }}</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hello@example.com">{{ t('footer.email') }}</a>
      </div>
      <div class="status-pill">
        <span></span>
        {{ t('common.available') }}
      </div>
    </div>
  </footer>
</template>
