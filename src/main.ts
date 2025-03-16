import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App)
  .use(Particles, {
    init: async engine => {
      await loadFull(engine);
    },
  })
  .mount('#app');
