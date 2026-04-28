import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projectMeta } from '../data/projects'

export function useLocalizedProjects() {
  const { locale, tm } = useI18n({ useScope: 'global' })

  const projects = computed(() => {
    locale.value
    return projectMeta.map((project) => ({
      ...project,
      ...getProjectTranslation(tm(`projects.items.${project.slug}`)),
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

function getProjectTranslation(message) {
  if (!message || typeof message !== 'object') {
    return {
      title: '',
      category: '',
      summary: '',
      description: '',
      role: '',
      duration: '',
      problem: '',
      solution: '',
      impact: [],
    }
  }

  return {
    title: message.title || '',
    category: message.category || '',
    summary: message.summary || '',
    description: message.description || '',
    role: message.role || '',
    duration: message.duration || '',
    problem: message.problem || '',
    solution: message.solution || '',
    impact: Array.isArray(message.impact) ? message.impact : [],
  }
}
