const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://yaman.com.br/pt-br/contato', // Corrigido
    screenshotsFolder: "cypress/screenshots",
    setupNodeEvents(on, config) {
      // Configurações adicionais se necessário
    },
  },
});
