import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://long-leaf-1490.fly.dev',
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': {
           target: 'https://localhost:8000',
           changeOrigin: true,
           secure: false,      
           ws: true,
       }
    }
  }
})
