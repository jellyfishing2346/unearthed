import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist', // Output to client/dist for deployment
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
      }
    }
  }
})
