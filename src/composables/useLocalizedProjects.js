import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projectMeta } from '../data/projects'

export function useLocalizedProjects() {
  const { locale, tm } = useI18n()

  const projects = computed(() => {
    locale.value
    return projectMeta.map((project) => ({
      ...project,
      ...tm(`projects.items.${project.slug}`),
    }))
  })

  const featuredProject = computed(() => projects.value[0])

  function findProjectBySlug(slug) {
    return projects.value.find((project) => project.slug === slug)
  }

  return {
    projects,
    featuredProject,
    findProjectBySlug,
  }
}
