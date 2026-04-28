<script setup>
import TechIcon from './TechIcon.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="tech-badge">
    <TechIcon :label="label" />
    {{ label }}
  </span>
</template>
