<script setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { resolveTechIcon } from '../data/techIcons'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'large'].includes(value),
  },
})

const techIcon = computed(() => resolveTechIcon(props.label))
</script>

<template>
  <span class="tech-icon" :class="`tech-icon--${size}`" aria-hidden="true">
    <Icon v-if="techIcon.icon" :icon="techIcon.icon" />
    <span v-else class="material-symbols-outlined">{{ techIcon.fallback }}</span>
  </span>
</template>
