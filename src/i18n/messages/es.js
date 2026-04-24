export default {
  nav: {
    aria: 'Navegación principal',
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    resume: 'Resume',
    language: 'Idioma',
  },
  common: {
    available: 'Disponible para trabajar',
    viewProjects: 'Ver proyectos',
    viewProject: 'Ver proyecto',
    aboutMe: 'Sobre mí',
    sourceCode: 'Código fuente',
    viewLiveDemo: 'Ver demo en vivo',
    comingSoon: 'Próximamente',
    caseStudy: 'Caso de estudio',
  },
  home: {
    title: 'Construyendo productos digitales limpios con código bien pensado.',
    intro:
      'Creo experiencias web enfocadas, frontends escalables y casos de estudio técnicos que explican no solo qué se construyó, sino por qué importa.',
    terminalRole: 'Desarrollador Full-Stack',
    terminalFocus: ['Frontend', 'UX', 'Arquitectura'],
    capabilities: 'Capacidades',
    stackTitle: 'El Stack',
    stackDescription: 'Tecnologías elegidas para un portfolio fácil de mantener y desplegar.',
    selectedWork: 'Trabajo seleccionado',
    featuredProject: 'Proyecto destacado',
  },
  about: {
    title: 'Sobre mí',
    intro:
      'Disfruto convertir ideas de producto ambiguas en interfaces claras, rápidas y fáciles de extender. Mi trabajo vive entre el detalle frontend, el criterio de producto y la arquitectura práctica.',
    biography: 'Biografía',
    biographyTitle: 'Biografía profesional',
    biographyParagraphs: [
      'Construyo aplicaciones web con foco en mantenibilidad, código legible e interfaces que respetan a quien las usa. Prefiero sistemas simples que evolucionan fácil antes que sistemas ingeniosos difíciles de explicar.',
      'Este portfolio está diseñado como un espacio vivo: los proyectos se agregan desde un archivo de datos, las páginas permanecen modulares y el sistema visual puede crecer sin reescribir cada vista.',
    ],
    philosophy: 'Filosofía central',
    philosophyTitle: 'Precisión antes que prisa',
    philosophyText:
      'Entregar trabajo que se vea intencional, se comporte de forma predecible y siga siendo fácil de mantener.',
    journey: 'Trayectoria',
    journeyTitle: 'Trayectoria profesional',
    timeline: [
      {
        date: '2024 - Presente',
        title: 'Ingeniería Frontend y de Producto',
        text: 'Construcción de interfaces enfocadas, sistemas de proyectos y apps frontend listas para desplegar.',
      },
      {
        date: '2022 - 2024',
        title: 'Desarrollo Full-Stack',
        text: 'Creación de flujos de aplicación, APIs y bases frontend reutilizables.',
      },
      {
        date: 'Antes',
        title: 'Aprender construyendo',
        text: 'Convertir experimentos en proyectos prácticos y afinar el criterio técnico.',
      },
    ],
  },
  projectsPage: {
    eyebrow: 'Muestra de ingeniería',
    title: 'Proyectos',
    intro:
      'Una selección de proyectos técnicos enfocados en interfaces modulares, sistemas mantenibles y casos de estudio claros.',
    filterAria: 'Filtrar proyectos por tecnología',
    all: 'Todos',
  },
  projectDetail: {
    problemEyebrow: 'El problema',
    problemTitle: 'El reto',
    solutionEyebrow: 'La solución',
    solutionTitle: 'El enfoque',
    techStack: 'Stack técnico',
    duration: 'Duración',
    role: 'Rol',
    category: 'Categoría',
    impact: 'Impacto',
    nextProject: 'Siguiente proyecto',
    notFoundEyebrow: 'Proyecto no encontrado',
    notFoundTitle: 'Este proyecto todavía no existe.',
    notFoundText: 'Vuelve a la página de proyectos y elige uno de los casos disponibles.',
    backToProjects: 'Volver a proyectos',
    codeDeployTarget: 'GitHub Pages',
  },
  footer: {
    text: 'Construido con Vue, Vite y un poco de paciencia ingenieril.',
    email: 'Correo',
  },
  projects: {
    items: {
      'nexus-engine-v2': {
        title: 'Nexus Engine V2',
        category: 'Arquitectura',
        summary:
          'Capa de orquestación de datos en tiempo real y alto rendimiento para arquitecturas de microservicios distribuidos.',
        description:
          'Un caso de estudio técnico enfocado en procesamiento de eventos, servicios resilientes y observabilidad confiable para productos en crecimiento.',
        role: 'Desarrollador Full-Stack',
        duration: '4 meses',
        problem:
          'Los equipos de producto necesitaban visibilidad más rápida sobre eventos distribuidos sin sumar complejidad operativa a cada servicio.',
        solution:
          'El proyecto introduce una capa de ingestión tipada, procesamiento basado en colas y dashboards enfocados que facilitan entender la actividad del sistema.',
        impact: [
          { label: 'Visibilidad de eventos', value: '92%' },
          { label: 'Tiempo de depuración ahorrado', value: '48%' },
        ],
      },
      'quant-analytics': {
        title: 'Quant Analytics',
        category: 'Dashboard',
        summary:
          'Interfaz de analítica financiera con gráficos responsivos, paneles de métricas y flujos claros de reportes.',
        description:
          'Un concepto de dashboard pulido para revisar tendencias, comparar datasets y presentar insights técnicos con claridad.',
        role: 'Desarrollador Frontend',
        duration: '6 semanas',
        problem:
          'Las vistas de datos complejas eran difíciles de escanear rápidamente, especialmente en pantallas pequeñas y revisiones con stakeholders.',
        solution:
          'La interfaz agrupa métricas por prioridad, usa áreas de gráficos responsivas y da a cada reporte un camino directo hacia análisis más profundo.',
        impact: [
          { label: 'Claridad de reportes', value: '87%' },
          { label: 'Velocidad de revisión', value: '39%' },
        ],
      },
      'core-ui-system': {
        title: 'Core UI System',
        category: 'Sistema de diseño',
        summary:
          'Sistema de componentes reutilizables para interfaces de producto con espaciado, estados y patrones accesibles consistentes.',
        description:
          'Una base UI modular que prioriza componentes predecibles, tokens de diseño prácticos e implementación rápida.',
        role: 'Ingeniero UI',
        duration: '8 semanas',
        problem:
          'El trabajo repetido de interfaz estaba frenando la entrega de features y generando estados inconsistentes en el producto.',
        solution:
          'El sistema define primitivas de layout, patrones de cards, badges, botones y comportamiento responsivo reutilizable entre vistas.',
        impact: [
          { label: 'Reutilización de componentes', value: '76%' },
          { label: 'Deriva visual reducida', value: '64%' },
        ],
      },
    },
  },
}
