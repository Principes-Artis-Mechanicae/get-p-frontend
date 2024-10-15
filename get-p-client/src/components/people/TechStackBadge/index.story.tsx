import { TechStackBadge } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/People/TechStackBadge",
    component: TechStackBadge,
} satisfies Meta<typeof TechStackBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "JavaScript",
        isInput: true,
    },
};

export const Input: Story = {
    args: {
        text: "JavaScript",
        isInput: false,
    },
};
