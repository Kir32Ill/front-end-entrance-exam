import { defineConfig } from 'vite'

export default defineConfig({
  base: '/front-end-entrance-exam/', // Обратите внимание на слэши
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
