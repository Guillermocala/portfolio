# Portfolio Vue + Vite

Portfolio modular basado en Vue 3, Vite y Vue Router, preparado para desplegarse en GitHub Pages.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura principal

- `src/views/`: vistas principales del portfolio.
- `src/components/`: navbar, footer, cards, badges y visuales reutilizables.
- `src/data/projects.js`: contenido centralizado de proyectos.
- `src/i18n/`: traducciones EN/ES y configuración de idioma.
- `public/.nojekyll`: evita procesamiento de Jekyll en GitHub Pages.

## Internacionalización

El portfolio usa `vue-i18n` con inglés (`en`) como idioma por defecto y español (`es`) como alternativa. El selector de idioma guarda la preferencia en `localStorage`.

Para agregar o editar textos, actualiza:

- `src/i18n/messages/en.js`
- `src/i18n/messages/es.js`

Los datos neutrales de proyectos, como slug, stack y URLs, se mantienen en `src/data/projects.js`.

## GitHub Pages

El router usa hash history para que las rutas funcionen bien en GitHub Pages sin configuración adicional de fallback.

Si publicas en un repositorio normal, configura el base path al construir:

```bash
$env:VITE_BASE_PATH="/nombre-del-repo/"
npm run build
```

Si publicas en `usuario.github.io`, puedes usar el valor por defecto `/`.
