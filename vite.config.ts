import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite carrega automaticamente, nesta ordem: .env, .env.local, .env.[mode], .env.[mode].local
// Apenas variáveis prefixadas com VITE_ são expostas ao client (import.meta.env).
export default defineConfig({
  envDir: '.',
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  server: { port: 3000 },
})
