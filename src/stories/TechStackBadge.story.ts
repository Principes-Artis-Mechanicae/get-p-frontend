import { TechStackBadge } from "../components/people/TechStackBadge";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "People/TechStackBadge",
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
