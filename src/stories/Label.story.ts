import { Label } from "../common/form/Label";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "form/Label",
    component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "LABEL",
    },
};
