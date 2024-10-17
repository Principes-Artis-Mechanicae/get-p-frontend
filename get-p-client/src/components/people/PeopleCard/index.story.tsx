import { PeopleCard, PeopleCardSkeleton } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/PEOPLE/PeopleCard",
    component: PeopleCard,
} satisfies Meta<typeof PeopleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        profileImageUri: undefined,
        nickname: "유진",
        introduction: "안녕하세요. 경북대 컴퓨터학부 김유진입니다. 개발새발개발흐엥흐에엥",
        activityArea: "대구광역시 동구",
        hashtags: ["#안녕하세요", "#ENTP"],
        completeProjectsCount: 5,
    },
};

export const Skeleton = {
    render: () => <PeopleCardSkeleton />,
};
