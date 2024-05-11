import { Profile } from "./Profile";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "People/Profile",
    component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "268px",
        height: "283px",
        nickname: "People01",
        likeCount: 14,
        completeProjectsCount: 2,
    },
};
