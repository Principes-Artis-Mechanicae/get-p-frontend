import { ApplyPeopleItem } from "./ApplyPeopleItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ApplyPeopleItem",
    component: ApplyPeopleItem,
} satisfies Meta<typeof ApplyPeopleItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 1,
        name: "방민혁",
        school: "한양대학교(서울)",
        education: "산업공학과 2학년",
    },
};
