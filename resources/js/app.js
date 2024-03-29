import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import DefaultLayout from './Components/Layouts/DefaultLayout.vue'
import { Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

import i18n from './plugins/i18n'

import '../css/app.css'

InertiaProgress.init()

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    if(!page.layout) page.layout = DefaultLayout

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n)
      .component('Link', Link)
      .mount(el)
  },
})
