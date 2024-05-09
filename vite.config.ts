import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/app2/', //追加
  base: '/app2/', //追加
  plugins: [
    vue({
      script: {
        propsDestructure: true,
      },
    }),
		vuetify({ autoImport: true }),
  ],
  define: { 'process.env': {} },
  build: {
    outDir: './docs', 
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,
  },
})