import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    port: 3000,
    open: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.manus.computer',
      '.sg1.manus.computer',
      '3000-il69wqc8v57qtbj7nasvw-fa7a28b6.sg1.manus.computer'
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
