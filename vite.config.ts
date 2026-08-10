import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import vuetify from 'vite-plugin-vuetify'
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Example for Fluent UI
          isCustomElement: (tag) => tag.startsWith("fluent-"),
          // Example for Swiper
          // isCustomElement: (tag) => tag.includes("swiper"),
        },
      },
    }),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
      'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
      'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Italiana&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
    ]),
    vuetify({ autoImport: true }), // The plugin handles auto imports
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  server: {
    proxy: {
      '/db': {
        target: 'https://kristinalhall.net/db/endpoints', // Apache local URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/db/, '')
      }
    },
  },
  build: {
    cssMinify: 'esbuild',
    target: 'es2022'
  },
  css: {
    transformer: 'postcss',
    // preprocessorOptions: {
    //   scss: {
    //     api: 'modern-compiler'
    //   }
    // },
    postcss: {
      // If you are using custom PostCSS plugins, list them here
      plugins: [],
    },
  },
});
