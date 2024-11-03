import { DeadLineProjectCard, DeadLineProjectCardSkeleton } from "@getp/components/home/DeadLineProjectCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Home/DeadLineProjectCard",
    component: DeadLineProjectCard,
} satisfies Meta<typeof DeadLineProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        projectId: 1,
        profileImg: "https://example.com/profile.jpg",
        deadline: 10,
        // location: "대구광역시 북구 산격동",
        title: "사업계획서 Word 작업",
        hashtags: ["#설계", "#기획", "#서류작업"],
        payment: 1000000,
        likes: 13,
        expectedDuration: 0,
        meetingType: "온라인",
    },
};

export const Skeleton = {
    render: () => {
        return <DeadLineProjectCardSkeleton />;
    },
};
