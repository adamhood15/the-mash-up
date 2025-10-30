import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    
    open: '/',
    proxy: {
      '/graphql': 'http://localhost:3001'
    }
    
  },
  
  plugins: [
    react(),
    tailwindcss()
  ],
  
})
