const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://yaman.com.br/pt-br/contato',
    screenshotsFolder: "cypress/screenshots",
    video: false, // evita gravação de vídeos
    setupNodeEvents(on, config) {
      // configurações opcionais
    },
  },
});
