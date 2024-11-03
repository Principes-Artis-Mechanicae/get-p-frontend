import { CheckBox } from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "CheckBox",
    component: CheckBox,
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "20px",
        height: "20px",
        children: "CheckBox Label",
    },
};
