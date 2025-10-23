import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: '/',
    proxy: {
      '/graphql': 'http://localhost:3001'
    }
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'cloudinary-react']
  },
  resolve: {
    alias: {
      'cloudinary-react': 'cloudinary-react/dist/cloudinary-react'
    }
  }
})
