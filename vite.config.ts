import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), VueRouter({
    routesFolder: {
      src: 'src/pages',
      path: '',
      filePatterns: (filePatterns) => filePatterns,
    },
    filePatterns: ['**/*'],
    extensions: ["vue"],
    dts: "typed-router.d.ts",
    
  }), vue()],
  base: '/portfolio/',
});