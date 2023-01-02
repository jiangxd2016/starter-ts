import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['index.ts']
    },
    exclude: ['playground/**/*', 'node_modules/**/*'],
    globals: true,
  },
});
