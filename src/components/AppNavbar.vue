<script setup>
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <header class="site-header">
    <nav class="navbar container">
      <RouterLink class="brand" to="/">
        <span class="material-symbols-outlined">terminal</span>
        <span>DevPortfolio</span>
      </RouterLink>

      <div class="nav-links" aria-label="Primary navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <a class="resume-button" href="#" aria-disabled="true" @click.prevent>
        Resume
      </a>
    </nav>
  </header>
</template>
