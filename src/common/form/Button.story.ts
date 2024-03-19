import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "form/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        width: "250px",
        height: "50px",
        children: "Button",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        width: "250px",
        height: "50px",
        children: "Button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        width: "250px",
        height: "50px",
        children: "Button",
    },
};

export const Disabled: Story = {
    args: {
        variant: "disabled",
        width: "250px",
        height: "50px",
        children: "Button",
    },
};
