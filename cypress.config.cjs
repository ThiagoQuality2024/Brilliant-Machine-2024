const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos aqui
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // Configurações adicionais para interceptar ou ignorar solicitações
      });
    },
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 12000,
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/Relatorios-Testes-HTML',
      overwrite: false,
      html: true,
      json: false,
      charts: true,
      timestamp: "mmddyyyy_HHMMss"
    }
  }
});