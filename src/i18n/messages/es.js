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
    name: 'Guillermo Cala',
    fullName: 'Guillermo Adolfo Cala Vargas',
    role: 'Ingeniero de Sistemas | Desarrollador Full Stack Web',
    phone: '+57 300 2047995',
    location: 'Santa Marta, Colombia',
    viewProjects: 'Ver proyectos',
    viewProject: 'Ver proyecto',
    aboutMe: 'Sobre mí',
    sourceCode: 'Código fuente',
    privateProject: 'Proyecto privado',
    viewLiveDemo: 'Ver demo en vivo',
    comingSoon: 'Próximamente',
    caseStudy: 'Caso de estudio',
  },
  home: {
    title: 'Construyo soluciones web full stack para productos reales.',
    intro:
      'Soy Ingeniero de Sistemas con más de 3 años de experiencia en desarrollo web, especializado en Laravel, Vue.js, infraestructura y traducción de requerimientos de negocio en soluciones funcionales.',
    terminalRole: 'Desarrollador Full Stack Web',
    terminalFocus: ['Laravel', 'Vue.js', 'Infraestructura', 'Clean Code'],
    capabilities: 'Capacidades',
    stackTitle: 'Stack principal',
    stackDescription:
      'Tecnologías y herramientas que uso para construir, mantener y desplegar aplicaciones web de negocio.',
    stackControls: 'Controles del carrusel de stack',
    stackPrevious: 'Tecnología anterior',
    stackNext: 'Siguiente tecnología',
    selectedWork: 'Trabajo seleccionado',
    featuredProject: 'Proyecto destacado',
  },
  about: {
    title: 'Sobre mí',
    intro:
      'Ingeniero de Sistemas con experiencia en sectores como agroindustria, gestión legal, energía, servicios y plataformas comerciales. Trabajo cerca de clientes y equipos técnicos para convertir necesidades operativas en productos web claros, mantenibles y desplegables.',
    biography: 'Perfil profesional',
    biographyTitle: 'Desarrollador Full Stack Web',
    biographyParagraphs: [
      'Cuento con más de 3 años de experiencia en desarrollo web Full Stack, con dominio de Laravel y Vue.js. He participado en funcionalidades y módulos para proyectos de agroindustria, gestión legal, energía y servicios.',
      'Tengo experiencia en despliegue e infraestructura, revisión de código, documentación técnica, socialización de desarrollos y acompañamiento directo a clientes y stakeholders.',
      'Mi trabajo está orientado a la calidad mediante principios SOLID, Clean Code y PSR-12, buscando soluciones funcionales que sean sostenibles para el equipo y útiles para el negocio.',
    ],
    philosophy: 'Forma de trabajo',
    philosophyTitle: 'Calidad funcional y claridad técnica',
    philosophyText:
      'Construir software que resuelva necesidades reales, sea comprensible para el equipo y pueda evolucionar sin fricción innecesaria.',
    journey: 'Experiencia',
    journeyTitle: 'Experiencia profesional',
    timeline: [
      {
        date: '2025 - Presente',
        title: 'Freelance | Desarrollador Full Stack',
        text: 'Desarrollo soluciones web por proyecto, trabajando en frontend, backend, documentación, requerimientos, despliegues e infraestructura con AWS, EC2, RDS, Nginx, SSL y dominios.',
      },
      {
        date: '2023 - 2025',
        title: 'Aplicaciones Corporativas - SmartCultivo | Desarrollador Full Stack',
        text: 'Desarrollé módulos con Vue.js 2, Element UI y Laravel 7, incluyendo PQRS, inspección de cajas, reportería, exportaciones, control por roles, code review, PRs y despliegues manuales.',
      },
      {
        date: 'Julio 2025',
        title: 'Universidad del Magdalena | Ingeniería de Sistemas',
        text: 'Formación profesional en ingeniería de sistemas, complementada con experiencia práctica en desarrollo web, infraestructura y aplicaciones de negocio.',
      },
    ],
  },
  projectsPage: {
    eyebrow: 'Portafolio técnico',
    title: 'Proyectos',
    intro:
      'Casos de trabajo basados en proyectos reales donde participé en desarrollo full stack, infraestructura, documentación, reportería, módulos operativos y mejora de procesos.',
    filterAria: 'Filtrar proyectos por tecnología',
    all: 'Todos',
  },
  projectDetail: {
    problemEyebrow: 'Contexto',
    problemTitle: 'Necesidad del proyecto',
    solutionEyebrow: 'Solución',
    solutionTitle: 'Mi aporte',
    techStack: 'Stack técnico',
    duration: 'Periodo',
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
    text: 'Ingeniero de Sistemas y Desarrollador Full Stack Web en Santa Marta, Colombia.',
    email: 'Correo',
    phone: 'Teléfono',
    location: 'Ubicación',
  },
  projects: {
    items: {
      'terque-platform': {
        title: 'Terque Platform Refactor',
        category: 'Servicios y reservas',
        summary:
          'Refactorización funcional hacia Laravel 12 + Livewire con autenticación, permisos, reservas, reportería, QA e infraestructura.',
        description:
          'Participación en la evolución técnica y funcional de Terque, alineando módulos web, landing comercial, autenticación y aplicaciones WebView con el nuevo modelo del negocio.',
        role: 'Desarrollador Full Stack Freelance',
        duration: '2025 - Presente',
        problem:
          'La plataforma requería modernizar funcionalidades clave, ajustar flujos operativos, reforzar autenticación y permisos, y habilitar un entorno controlado para validación técnica del equipo.',
        solution:
          'Participé en la refactorización hacia Laravel 12 + Livewire, implementé autenticación social, roles y permisos, verificaciones, reservas, descuentos, notificaciones, dashboard, reportería y mejoras operativas. También configuré un entorno QA con EC2, RDS, Nginx, SSL y dominio.',
        impact: [
          { label: 'Refactor funcional', value: '90%' },
          { label: 'Entorno QA habilitado', value: '100%' },
          { label: 'Módulos operativos mejorados', value: '85%' },
        ],
      },
      'smartcultivo-pqrs-inspection': {
        title: 'SmartCultivo PQRS e Inspección',
        category: 'Agroindustria',
        summary:
          'Módulos productivos para gestión PQRS, inspección de cajas, reportería visual, exportables y control por roles.',
        description:
          'Desarrollo full stack en SmartCultivo con Vue.js 2, Element UI y Laravel 7, apoyando procesos críticos del cultivo de banano y la operación interna.',
        role: 'Desarrollador Full Stack',
        duration: '2023 - 2025',
        problem:
          'La operación necesitaba centralizar solicitudes, mejorar trazabilidad, reducir procesos manuales y soportar inspecciones productivas con información clara y exportable.',
        solution:
          'Implementé el módulo de PQRS en producción, desarrollé el módulo de inspección de cajas, construí reportes visuales con Highcharts, exportables y flujos con control por roles. También participé en code review, PRs, despliegues manuales, documentación y soporte operativo.',
        impact: [
          { label: 'PQRS centralizadas', value: '90%' },
          { label: 'Trazabilidad operativa', value: '85%' },
          { label: 'Reporterías y exportables', value: '88%' },
        ],
      },
      'energy-community-platform': {
        title: 'Energy Community Platform',
        category: 'Energía',
        summary:
          'Construcción de módulos completos para operación, gestión comunitaria, publicaciones, votaciones, beneficiarios y facturación.',
        description:
          'Desarrollo de funcionalidades frontend con Vue.js 3 orientadas a operación real, participación comunitaria y mantenimiento de una plataforma del sector energético.',
        role: 'Desarrollador Full Stack Freelance',
        duration: '2025 - Presente',
        problem:
          'El producto requería módulos nuevos desde cero para gestionar procesos comunitarios y operativos vinculados a energía, facturación, participación y mantenimiento.',
        solution:
          'Construí módulos clave del frontend con Vue.js 3, incluyendo dashboard, publicaciones, votaciones, beneficiarios, facturación y operación y mantenimiento, siguiendo requerimientos funcionales del negocio.',
        impact: [
          { label: 'Módulos construidos desde cero', value: '92%' },
          { label: 'Cobertura operativa', value: '86%' },
          { label: 'Participación comunitaria', value: '80%' },
        ],
      },
      'sil-legal-innovation': {
        title: 'SIL - Sitio de Innovación Legal',
        category: 'Gestión legal',
        summary:
          'Formularios, flujos funcionales y generación documental con Docx ajustada a modelos del equipo legal.',
        description:
          'Desarrollo de funcionalidades para gestión legal, automatizando formularios y salidas documentales alineadas a estructuras requeridas por el equipo jurídico.',
        role: 'Desarrollador Full Stack Freelance',
        duration: '2025 - Presente',
        problem:
          'El equipo legal necesitaba capturar información mediante formularios, estructurar flujos funcionales y generar documentos acordes a modelos específicos.',
        solution:
          'Desarrollé formularios, flujos funcionales y generación de documentos con Docx, adaptando las salidas documentales a las estructuras requeridas por el equipo legal.',
        impact: [
          { label: 'Automatización documental', value: '88%' },
          { label: 'Flujos funcionales', value: '84%' },
          { label: 'Ajuste a modelos legales', value: '90%' },
        ],
      },
      'my-wish-list-reporting': {
        title: 'My Wish List Reporting',
        category: 'Servicios',
        summary:
          'Funcionalidades de negocio para bancos, métodos de pago y generación de reportes exportables en Excel.',
        description:
          'Implementación de módulos y recursos de negocio usando Vue.js y Node.js para mejorar gestión financiera, métodos de pago y reportería.',
        role: 'Desarrollador Full Stack Freelance',
        duration: '2025 - Presente',
        problem:
          'La plataforma necesitaba administrar recursos asociados a bancos, métodos de pago y reportería exportable para operación y seguimiento interno.',
        solution:
          'Implementé funcionalidades con Vue.js y Node.js para gestión de bancos, métodos de pago y generación de reportes exportables en Excel.',
        impact: [
          { label: 'Gestión de bancos', value: '86%' },
          { label: 'Métodos de pago', value: '82%' },
          { label: 'Reportes exportables', value: '90%' },
        ],
      },
    },
  },
}
