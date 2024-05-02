import { TechStackAccordion } from "./TechStackAccordion";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "People/TechStackAccordion",
    component: TechStackAccordion,
} satisfies Meta<typeof TechStackAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "300px",
        groupName: "IT 프로그래밍",
        groupItems: ["JavaScript", "TypeScript", "Python", "PHP"],
    },
};
