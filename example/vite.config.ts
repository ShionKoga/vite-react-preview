import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preview from '../plugin'

export default defineConfig({
  plugins: [react(), preview()]
})
