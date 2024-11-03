export const createIndexFileContent = (name: string) =>
    `import * as Styles from "./index.style";\n
export interface ${name + "Props"} {}
export const ${name} = ({} : ${name + "Props"}) => {};
`;

export const createStyleFileContent = () => `import styled from "@emotion/styled"`;

export const createStoryBookFileContent = (name: string) =>
    `import { ${name} } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "",
    component: ${name},
} satisfies Meta<typeof ${name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
`;
