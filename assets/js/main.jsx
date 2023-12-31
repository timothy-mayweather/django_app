import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress';
import Layout from './components/Layout.jsx';
import '../css/style.css'

const pages = import.meta.glob('./pages/**/*.jsx')

const appName = 'Django_app'

document.addEventListener('DOMContentLoaded', () => {
  InertiaProgress.init();

  createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async name => {
      const page = (await pages[`./pages/${name}.jsx`]()).default;
      page.layout = page.layout || Layout

      return page
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },
  })
});