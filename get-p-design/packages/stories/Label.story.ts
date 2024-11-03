import { Label } from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Label",
    component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "LABEL",
    },
};
