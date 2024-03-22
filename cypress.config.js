/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportHeight: 800,
    viewportWidth: 1300,
    experimentalStudio: true,
    retries: {
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
