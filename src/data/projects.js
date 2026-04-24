export const projects = [
  {
    title: 'Nexus Engine V2',
    slug: 'nexus-engine-v2',
    category: 'Architecture',
    summary:
      'High-performance real-time data orchestration layer built for distributed microservices architecture.',
    description:
      'A technical case study focused on event processing, resilient services, and reliable observability for growing products.',
    stack: ['Vue', 'Node.js', 'Redis', 'Kafka'],
    role: 'Full-Stack Developer',
    duration: '4 Months',
    repoUrl: 'https://github.com/',
    demoUrl: '',
    problem:
      'Product teams needed faster visibility into distributed events without adding more operational complexity to each service.',
    solution:
      'The project introduces a typed ingestion layer, queue-based processing, and focused dashboards that make system activity easier to reason about.',
    impact: [
      { label: 'Event visibility', value: '92%' },
      { label: 'Debugging time saved', value: '48%' },
    ],
    visual: 'mesh',
  },
  {
    title: 'Quant Analytics',
    slug: 'quant-analytics',
    category: 'Dashboard',
    summary:
      'Financial analytics interface with responsive charts, metric panels, and clean reporting workflows.',
    description:
      'A polished dashboard concept designed for scanning trends, comparing datasets, and presenting technical insight clearly.',
    stack: ['Vue', 'D3.js', 'Python', 'PostgreSQL'],
    role: 'Frontend Developer',
    duration: '6 Weeks',
    repoUrl: 'https://github.com/',
    demoUrl: '',
    problem:
      'Complex data views were difficult to scan quickly, especially on smaller screens and during stakeholder reviews.',
    solution:
      'The interface groups metrics by priority, uses responsive chart regions, and gives each report a direct path to deeper analysis.',
    impact: [
      { label: 'Report clarity', value: '87%' },
      { label: 'Review speed', value: '39%' },
    ],
    visual: 'dashboard',
  },
  {
    title: 'Core UI System',
    slug: 'core-ui-system',
    category: 'Design System',
    summary:
      'Reusable component system for product interfaces with consistent spacing, states, and accessibility patterns.',
    description:
      'A modular UI foundation that favors predictable components, pragmatic design tokens, and fast implementation.',
    stack: ['Vue', 'Vite', 'CSS', 'TypeScript'],
    role: 'UI Engineer',
    duration: '8 Weeks',
    repoUrl: 'https://github.com/',
    demoUrl: '',
    problem:
      'Repeated interface work was slowing feature delivery and producing inconsistent states across the product.',
    solution:
      'The system defines shared layout primitives, card patterns, badges, buttons, and responsive behavior that can be reused across views.',
    impact: [
      { label: 'Component reuse', value: '76%' },
      { label: 'UI drift reduced', value: '64%' },
    ],
    visual: 'components',
  },
]

export const featuredProject = projects[0]

export function findProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
