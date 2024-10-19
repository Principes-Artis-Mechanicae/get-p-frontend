import { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { loadConfigFromFile } from "vite";

const config: StorybookConfig = {
    stories: [
        "../packages/stories/**/*.mdx",
        "../packages/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../packages/stories/**/*.story.@(js|jsx|mjs|ts|tsx)",
    ],

    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    docs: {},

    viteFinal: async (config) => {
        const newConfig = {
            ...config,
            resolve: {
                alias: [{ find: "get-p-design", replacement: path.resolve(__dirname, "../packages") }],
            },
        };
        return newConfig;
    },
};
export default config;
