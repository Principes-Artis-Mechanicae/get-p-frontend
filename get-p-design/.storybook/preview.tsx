import React from "react";
import { Fragment } from "react";

import { Global } from "@emotion/react";
import type { Preview } from "@storybook/react";

import { getpGlobalStyles } from "../packages/styles";

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
            <Fragment>
                <Story />
                <Global styles={[...getpGlobalStyles]} />
            </Fragment>
        ),
    ],

    tags: ["autodocs"],
};

export default preview;
