/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportHeight: 800,
    viewportWidth: 1300,
    experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    retries: {
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
