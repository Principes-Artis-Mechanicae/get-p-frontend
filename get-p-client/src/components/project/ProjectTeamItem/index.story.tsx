import { ProjectTeamItem } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectTeamItem",
    component: ProjectTeamItem,
    argTypes: {
        isAccepted: {
            options: [true, false],
            control: "radio",
        },
    },
} satisfies Meta<typeof ProjectTeamItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 1,
        name: "방민혁",
        email: "abcd1234@gmail.com",
        isAccepted: true,
    },
};
