import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // hooks/node events se precisar
    },
    baseUrl: 'https://front.serverest.dev', 
    testIsolation: false,
    defaultCommandTimeout: 20000,
    env: {
      apiBaseUrl: 'https://serverest.dev'   
    }
  },
});
