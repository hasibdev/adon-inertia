import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import DefaultLayout from './Components/Layouts/DefaultLayout.vue'
import { Link } from '@inertiajs/inertia-vue3'

import '../css/app.css'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    if(!page.layout) page.layout = DefaultLayout

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .mount(el)
  },
})
