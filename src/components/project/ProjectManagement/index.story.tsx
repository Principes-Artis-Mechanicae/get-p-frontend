import { ProjectManagement } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectManagement",
    component: ProjectManagement,
} satisfies Meta<typeof ProjectManagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        clientAddress: {
            detail: "경북대학교",
            street: "대구광역시 북구",
        },
        likesCount: 0,
    },
};
