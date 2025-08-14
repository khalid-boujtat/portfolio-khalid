import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remplace 'mon-repo' par le nom EXACT de ton repo GitHub
export default defineConfig({
  plugins: [react()],
  base: '/mon-repo/',
})

