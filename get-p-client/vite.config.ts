import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: "@getp", replacement: path.resolve(__dirname, "src") }],
    },
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
        }),
        visualizer({
            filename: ".stats/bundle.html",
            title: "GET-P Bundle",
            open: true,
        }) as PluginOption,
    ],
});
