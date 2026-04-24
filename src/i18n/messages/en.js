export default {
  nav: {
    aria: 'Primary navigation',
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    resume: 'Resume',
    language: 'Language',
  },
  common: {
    available: 'Available for hire',
    viewProjects: 'View Projects',
    viewProject: 'View Project',
    aboutMe: 'About Me',
    sourceCode: 'Source Code',
    viewLiveDemo: 'View Live Demo',
    comingSoon: 'Coming soon',
    caseStudy: 'Case Study',
  },
  home: {
    title: 'Building clean digital products with thoughtful code.',
    intro:
      'I create focused web experiences, scalable frontends, and technical case studies that explain not only what was built, but why it matters.',
    terminalRole: 'Full-Stack Developer',
    terminalFocus: ['Frontend', 'UX', 'Architecture'],
    capabilities: 'Capabilities',
    stackTitle: 'The Stack',
    stackDescription: 'Technologies selected for a portfolio that stays easy to maintain and deploy.',
    selectedWork: 'Selected Work',
    featuredProject: 'Featured Project',
  },
  about: {
    title: 'About me',
    intro:
      'I enjoy turning ambiguous product ideas into interfaces that feel clear, fast, and easy to extend. My work sits between frontend craft, product thinking, and practical engineering architecture.',
    biography: 'Biography',
    biographyTitle: 'Professional Biography',
    biographyParagraphs: [
      'I build web applications with a bias toward maintainability, readable code, and interfaces that respect the person using them. I prefer simple systems that are easy to evolve over clever systems that are hard to explain.',
      'This portfolio is designed as a living workspace: projects can be added in one data file, pages stay modular, and the visual system can grow without rewriting every view.',
    ],
    philosophy: 'Core Philosophy',
    philosophyTitle: 'Precision over haste',
    philosophyText: 'Ship work that looks intentional, behaves predictably, and remains easy to maintain.',
    journey: 'Journey',
    journeyTitle: 'Professional Journey',
    timeline: [
      {
        date: '2024 - Present',
        title: 'Frontend and Product Engineering',
        text: 'Building focused interfaces, project systems, and deployment-ready frontend apps.',
      },
      {
        date: '2022 - 2024',
        title: 'Full-Stack Development',
        text: 'Creating application flows, APIs, and reusable frontend foundations.',
      },
      {
        date: 'Earlier',
        title: 'Learning by shipping',
        text: 'Turning experiments into practical projects and sharpening technical judgment.',
      },
    ],
  },
  projectsPage: {
    eyebrow: 'Engineering Showcase',
    title: 'Projects',
    intro:
      'A curated set of technical projects focused on modular interfaces, maintainable systems, and clear case-study storytelling.',
    filterAria: 'Filter projects by technology',
    all: 'All',
  },
  projectDetail: {
    problemEyebrow: 'The Problem',
    problemTitle: 'The challenge',
    solutionEyebrow: 'The Solution',
    solutionTitle: 'The approach',
    techStack: 'Tech Stack',
    duration: 'Duration',
    role: 'Role',
    category: 'Category',
    impact: 'Impact',
    nextProject: 'Next Project',
    notFoundEyebrow: 'Project not found',
    notFoundTitle: 'This project does not exist yet.',
    notFoundText: 'Return to the projects page and choose one of the available case studies.',
    backToProjects: 'Back to Projects',
    codeDeployTarget: 'GitHub Pages',
  },
  footer: {
    text: 'Built with Vue, Vite, and a little engineering patience.',
    email: 'Email',
  },
  projects: {
    items: {
      'nexus-engine-v2': {
        title: 'Nexus Engine V2',
        category: 'Architecture',
        summary:
          'High-performance real-time data orchestration layer built for distributed microservices architecture.',
        description:
          'A technical case study focused on event processing, resilient services, and reliable observability for growing products.',
        role: 'Full-Stack Developer',
        duration: '4 Months',
        problem:
          'Product teams needed faster visibility into distributed events without adding more operational complexity to each service.',
        solution:
          'The project introduces a typed ingestion layer, queue-based processing, and focused dashboards that make system activity easier to reason about.',
        impact: [
          { label: 'Event visibility', value: '92%' },
          { label: 'Debugging time saved', value: '48%' },
        ],
      },
      'quant-analytics': {
        title: 'Quant Analytics',
        category: 'Dashboard',
        summary:
          'Financial analytics interface with responsive charts, metric panels, and clean reporting workflows.',
        description:
          'A polished dashboard concept designed for scanning trends, comparing datasets, and presenting technical insight clearly.',
        role: 'Frontend Developer',
        duration: '6 Weeks',
        problem:
          'Complex data views were difficult to scan quickly, especially on smaller screens and during stakeholder reviews.',
        solution:
          'The interface groups metrics by priority, uses responsive chart regions, and gives each report a direct path to deeper analysis.',
        impact: [
          { label: 'Report clarity', value: '87%' },
          { label: 'Review speed', value: '39%' },
        ],
      },
      'core-ui-system': {
        title: 'Core UI System',
        category: 'Design System',
        summary:
          'Reusable component system for product interfaces with consistent spacing, states, and accessibility patterns.',
        description:
          'A modular UI foundation that favors predictable components, pragmatic design tokens, and fast implementation.',
        role: 'UI Engineer',
        duration: '8 Weeks',
        problem:
          'Repeated interface work was slowing feature delivery and producing inconsistent states across the product.',
        solution:
          'The system defines shared layout primitives, card patterns, badges, buttons, and responsive behavior that can be reused across views.',
        impact: [
          { label: 'Component reuse', value: '76%' },
          { label: 'UI drift reduced', value: '64%' },
        ],
      },
    },
  },
}
