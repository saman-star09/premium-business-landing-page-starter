import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/, so production
// asset URLs need that prefix. Local dev keeps serving from the root.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/premium-business-landing-page-starter/' : '/',
}))
