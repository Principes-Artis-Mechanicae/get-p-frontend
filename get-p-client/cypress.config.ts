import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "http://localhost:5173",
        env: {
            PEOPLE_ID: "people@get-p.princip.es",
            PEOPLE_PW: "qwer1234!",

            CLIENT_ID: "client@get-p.princip.es",
            CLIENT_PW: "qwer1234!",
        },
    },
});
