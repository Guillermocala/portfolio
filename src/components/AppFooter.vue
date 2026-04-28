<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <strong>{{ t('common.fullName') }}</strong>
        <p>{{ t('footer.text') }}</p>
      </div>
      <div class="footer-links">
        <a href="mailto:Guillermo.cala7@gmail.com">Guillermo.cala7@gmail.com</a>
        <a href="tel:+573002047995">{{ t('common.phone') }}</a>
        <span>{{ t('common.location') }}</span>
      </div>
    </div>
  </footer>
</template>
