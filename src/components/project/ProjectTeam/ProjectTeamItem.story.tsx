import { ProjectTeamItem } from "./ProjectTeamItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectTeamItem",
    component: ProjectTeamItem,
} satisfies Meta<typeof ProjectTeamItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accepted: Story = {
    args: {
        id: 1,
        name: "방민혁",
        email: "abcd1234@gmail.com",
        isAccepted: true,
    },
};

export const NotAccepted: Story = {
    args: {
        id: 1,
        name: "방민혁",
        email: "abcd1234@gmail.com",
        isAccepted: false,
    },
};
