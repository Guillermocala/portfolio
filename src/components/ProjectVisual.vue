<script setup>
defineProps({
  variant: {
    type: String,
    default: 'mesh',
  },
})
</script>

<template>
  <div class="project-visual" :class="`project-visual--${variant}`" aria-hidden="true">
    <div class="visual-grid"></div>
    <div class="visual-panel visual-panel--primary"></div>
    <div class="visual-panel visual-panel--secondary"></div>
    <div class="visual-orbit"></div>
  </div>
</template>
