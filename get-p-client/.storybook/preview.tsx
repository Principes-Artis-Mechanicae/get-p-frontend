import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "../src/apps/styles/styles";
import { store } from "../src/store/store";
import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Provider store={store}>
                    <Story />
                    <GlobalStyles />
                </Provider>
            </BrowserRouter>
        ),
    ],
    tags: ["autodocs"],
};

export default preview;
