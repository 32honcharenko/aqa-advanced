/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    retries: {
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});