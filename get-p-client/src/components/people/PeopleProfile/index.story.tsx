import { PeopleProfile } from "@getp/components/people/PeopleProfile";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/People/PeopleProfile",
    component: PeopleProfile,
} satisfies Meta<typeof PeopleProfile>;

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
