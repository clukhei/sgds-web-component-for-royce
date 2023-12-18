/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['__tests__/**/*.test.ts'],
    root: './src/plugin/rollup-purgecss-spider'
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
})