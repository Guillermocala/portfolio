const techIcons = {
  laravel: { icon: 'logos:laravel', fallback: 'terminal' },
  vue: { icon: 'logos:vue', fallback: 'deployed_code' },
  livewire: { icon: 'simple-icons:livewire', fallback: 'dynamic_form' },
  node: { icon: 'logos:nodejs-icon', fallback: 'dns' },
  mysql: { icon: 'logos:mysql-icon', fallback: 'database' },
  aws: { icon: 'logos:aws', fallback: 'cloud' },
  nginx: { icon: 'logos:nginx', fallback: 'router' },
  tailwind: { icon: 'logos:tailwindcss-icon', fallback: 'palette' },
  vite: { icon: 'logos:vitejs', fallback: 'bolt' },
  bitbucket: { icon: 'logos:bitbucket', fallback: 'account_tree' },
  blade: { icon: 'simple-icons:laravel', fallback: 'data_object' },
  element: { icon: 'simple-icons:element', fallback: 'widgets' },
  highcharts: { icon: '', fallback: 'monitoring' },
  docx: { icon: '', fallback: 'description' },
  excel: { icon: 'vscode-icons:file-type-excel', fallback: 'table_chart' },
}

export function resolveTechIcon(label) {
  const key = normalizeTechLabel(label)
  return techIcons[key] || { icon: '', fallback: 'deployed_code' }
}

function normalizeTechLabel(label) {
  return String(label)
    .toLowerCase()
    .replace(/\d+/g, '')
    .replace(/\./g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^vue(js)?$/, 'vue')
    .replace(/^laravel$/, 'laravel')
    .replace(/^nodejs$/, 'node')
    .replace(/^node js$/, 'node')
    .replace(/^tailwind css$/, 'tailwind')
    .replace(/^excel reports$/, 'excel')
    .replace(/^element ui$/, 'element')
    .replace(/^ec$/, 'aws')
    .replace(/^rds$/, 'aws')
}
