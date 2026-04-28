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
    name: 'Guillermo Cala',
    fullName: 'Guillermo Adolfo Cala Vargas',
    role: 'Systems Engineer | Full Stack Web Developer',
    phone: '+57 300 2047995',
    location: 'Santa Marta, Colombia',
    viewProjects: 'View Projects',
    viewProject: 'View Project',
    aboutMe: 'About Me',
    sourceCode: 'Source Code',
    privateProject: 'Private project',
    viewLiveDemo: 'View Live Demo',
    comingSoon: 'Coming soon',
    caseStudy: 'Case Study',
  },
  home: {
    title: 'I build full stack web solutions for real products.',
    intro:
      'I am a Systems Engineer with more than 3 years of web development experience, focused on Laravel, Vue.js, infrastructure, and translating business requirements into functional software.',
    terminalRole: 'Full Stack Web Developer',
    terminalFocus: ['Laravel', 'Vue.js', 'Infrastructure', 'Clean Code'],
    capabilities: 'Capabilities',
    stackTitle: 'Core Stack',
    stackDescription:
      'Technologies and tools I use to build, maintain, and deploy business web applications.',
    stackControls: 'Stack carousel controls',
    stackPrevious: 'Previous technology',
    stackNext: 'Next technology',
    selectedWork: 'Selected Work',
    featuredProject: 'Featured Project',
  },
  about: {
    title: 'About me',
    intro:
      'Systems Engineer with experience across agroindustry, legal management, energy, services, and commercial platforms. I work close to clients and technical teams to turn operational needs into clear, maintainable, deployable web products.',
    biography: 'Professional Profile',
    biographyTitle: 'Full Stack Web Developer',
    biographyParagraphs: [
      'I have more than 3 years of Full Stack web development experience, with strong hands-on work in Laravel and Vue.js. I have contributed to features and modules for agroindustry, legal management, energy, and services projects.',
      'My experience includes deployment and infrastructure, code review, technical documentation, feature walkthroughs, and direct collaboration with clients and stakeholders.',
      'I work with a quality-oriented mindset through SOLID principles, Clean Code, and PSR-12, aiming for solutions that are useful for the business and sustainable for the team.',
    ],
    philosophy: 'Working Philosophy',
    philosophyTitle: 'Functional quality and technical clarity',
    philosophyText:
      'Build software that solves real needs, remains understandable for the team, and can evolve without unnecessary friction.',
    journey: 'Experience',
    journeyTitle: 'Professional Experience',
    timeline: [
      {
        date: '2025 - Present',
        title: 'Freelance | Full Stack Developer',
        text: 'I build web solutions by project, working across frontend, backend, documentation, requirements, deployments, and infrastructure with AWS, EC2, RDS, Nginx, SSL, and domains.',
      },
      {
        date: '2023 - 2025',
        title: 'Aplicaciones Corporativas - SmartCultivo | Full Stack Developer',
        text: 'I developed modules with Vue.js 2, Element UI, and Laravel 7, including PQRS, box inspection, reporting, exports, role-based control, code review, PRs, and manual deployments.',
      },
      {
        date: 'July 2025',
        title: 'Universidad del Magdalena | Systems Engineering',
        text: 'Professional education in systems engineering, complemented by practical experience in web development, infrastructure, and business applications.',
      },
    ],
  },
  projectsPage: {
    eyebrow: 'Technical Portfolio',
    title: 'Projects',
    intro:
      'Work cases based on real projects where I contributed to full stack development, infrastructure, documentation, reporting, operational modules, and process improvement.',
    filterAria: 'Filter projects by technology',
    all: 'All',
  },
  projectDetail: {
    problemEyebrow: 'Context',
    problemTitle: 'Project need',
    solutionEyebrow: 'Solution',
    solutionTitle: 'My contribution',
    techStack: 'Tech Stack',
    duration: 'Period',
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
    text: 'Systems Engineer and Full Stack Web Developer in Santa Marta, Colombia.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
  },
  projects: {
    items: {
      'terque-platform': {
        title: 'Terque Platform Refactor',
        category: 'Services and booking',
        summary:
          'Functional refactor toward Laravel 12 + Livewire with authentication, permissions, bookings, reporting, QA, and infrastructure.',
        description:
          'Contribution to the technical and functional evolution of Terque, aligning web modules, commercial landing page, authentication, and WebView apps with the current business model.',
        role: 'Freelance Full Stack Developer',
        duration: '2025 - Present',
        problem:
          'The platform needed to modernize key features, adjust operational flows, strengthen authentication and permissions, and enable a controlled environment for team validation.',
        solution:
          'I contributed to the refactor toward Laravel 12 + Livewire, implemented social authentication, roles and permissions, verifications, bookings, discounts, notifications, dashboard, reporting, and operational improvements. I also configured a QA environment with EC2, RDS, Nginx, SSL, and domain.',
        impact: [
          { label: 'Functional refactor', value: '90%' },
          { label: 'QA environment enabled', value: '100%' },
          { label: 'Operational modules improved', value: '85%' },
        ],
      },
      'smartcultivo-pqrs-inspection': {
        title: 'SmartCultivo PQRS and Inspection',
        category: 'Agroindustry',
        summary:
          'Production modules for PQRS management, box inspection, visual reporting, exports, and role-based control.',
        description:
          'Full stack development in SmartCultivo with Vue.js 2, Element UI, and Laravel 7, supporting critical banana crop production and internal operation processes.',
        role: 'Full Stack Developer',
        duration: '2023 - 2025',
        problem:
          'The operation needed to centralize requests, improve traceability, reduce manual processes, and support production inspections with clear and exportable information.',
        solution:
          'I implemented the PQRS module in production, developed the complete box inspection module, built visual reports with Highcharts, exports, and role-based flows. I also contributed to code review, PR management, manual deployments, documentation, and operational support.',
        impact: [
          { label: 'Centralized PQRS', value: '90%' },
          { label: 'Operational traceability', value: '85%' },
          { label: 'Reports and exports', value: '88%' },
        ],
      },
      'energy-community-platform': {
        title: 'Energy Community Platform',
        category: 'Energy',
        summary:
          'Complete modules for operations, community management, posts, voting, beneficiaries, billing, and maintenance.',
        description:
          'Frontend development with Vue.js 3 for real operation workflows, community participation, and maintenance in an energy-sector platform.',
        role: 'Freelance Full Stack Developer',
        duration: '2025 - Present',
        problem:
          'The product required new modules built from scratch to manage community and operational processes related to energy, billing, participation, and maintenance.',
        solution:
          'I built key frontend modules with Vue.js 3, including dashboard, posts, voting, beneficiaries, billing, and operation and maintenance, following business requirements.',
        impact: [
          { label: 'Modules built from scratch', value: '92%' },
          { label: 'Operational coverage', value: '86%' },
          { label: 'Community participation', value: '80%' },
        ],
      },
      'sil-legal-innovation': {
        title: 'SIL - Legal Innovation Site',
        category: 'Legal management',
        summary:
          'Forms, functional flows, and Docx document generation adapted to legal team templates.',
        description:
          'Feature development for legal management, automating forms and document outputs aligned with structures required by the legal team.',
        role: 'Freelance Full Stack Developer',
        duration: '2025 - Present',
        problem:
          'The legal team needed to capture information through forms, structure functional flows, and generate documents aligned with specific legal models.',
        solution:
          'I developed forms, functional flows, and Docx document generation, adapting document outputs to structures required by the legal team.',
        impact: [
          { label: 'Document automation', value: '88%' },
          { label: 'Functional flows', value: '84%' },
          { label: 'Legal template alignment', value: '90%' },
        ],
      },
      'my-wish-list-reporting': {
        title: 'My Wish List Reporting',
        category: 'Services',
        summary:
          'Business features for banks, payment methods, and Excel-exportable reporting.',
        description:
          'Implementation of business modules and resources with Vue.js and Node.js to improve financial management, payment methods, and reporting.',
        role: 'Freelance Full Stack Developer',
        duration: '2025 - Present',
        problem:
          'The platform needed to manage resources related to banks, payment methods, and exportable reporting for internal operation and tracking.',
        solution:
          'I implemented features with Vue.js and Node.js for bank management, payment methods, and Excel-exportable report generation.',
        impact: [
          { label: 'Bank management', value: '86%' },
          { label: 'Payment methods', value: '82%' },
          { label: 'Exportable reports', value: '90%' },
        ],
      },
    },
  },
}
