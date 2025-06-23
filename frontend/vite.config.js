import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // 👈 change if Laravel runs on another port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
