const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 3,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
