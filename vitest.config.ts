import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    globals: true,
    coverage: {
      enabled: true,
      provider: 'c8'
    },
    setupFiles: './src/tests/setup.ts',
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist/**']
  }
})
