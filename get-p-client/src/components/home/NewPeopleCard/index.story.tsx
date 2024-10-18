import { NewPeopleCard, NewPeopleCardSkeleton } from "@getp/components/home/NewPeopleCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Home/NewPeopleCard",
    component: NewPeopleCard,
} satisfies Meta<typeof NewPeopleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        peopleId: 1,
        peopleName: "홍길동",
        projectCount: 3,

        hashTags: ["#ESTP", "#React"],
        likesCount: 20,
        region: "대구광역시",
    },
};

export const Skeleton = {
    render: () => {
        return <NewPeopleCardSkeleton />;
    },
};
