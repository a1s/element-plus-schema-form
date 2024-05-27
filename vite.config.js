import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: './',
  root: process.cwd(),
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true
      }
    },
    brotliSize: false,
    chunkSizeWarningLimit: 1500
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
