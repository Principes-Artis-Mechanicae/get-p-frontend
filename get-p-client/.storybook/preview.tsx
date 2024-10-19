import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { getpGlobalStyles } from "../../get-p-design/packages/styles";
import { store } from "../src/store/store";
import { Global } from "@emotion/react";
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
                    <Global styles={[...getpGlobalStyles]} />
                </Provider>
            </BrowserRouter>
        ),
    ],
    tags: ["autodocs"],
};

export default preview;
