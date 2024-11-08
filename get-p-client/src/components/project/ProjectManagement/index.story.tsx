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
        nickname: "경북대학교",
        clientAddress: {
            detail: "북구",
            street: "대구광역시",
        },
        likesCount: 0,
    },
};
