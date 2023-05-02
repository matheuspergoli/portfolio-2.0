import viteConfig from './vitest.config'
import { mergeConfig, defineConfig } from 'vitest/config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      watch: true,
      include: ['**/*.spec.tsx']
    }
  })
)
