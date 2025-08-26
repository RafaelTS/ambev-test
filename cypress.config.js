import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {      
    },
    baseUrl: 'https://front.serverest.dev/', 
    testIsolation: false,
    defaultCommandTimeout: 20000, 
  },
});
