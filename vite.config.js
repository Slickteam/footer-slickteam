import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/footer-slickteam.js',
      name: 'FooterSlickteam'
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
