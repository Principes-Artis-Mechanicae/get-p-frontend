import { PeopleCard } from "./PeopleCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "PEOPLE/PeopleCard",
    component: PeopleCard,
} satisfies Meta<typeof PeopleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const People: Story = {
    args: {
        width: "522px",
        height: "110px",
        profileImageUri: "/src/assets/people/img_profile_default.png",
        nickname: "유진",
        comment: "안녕하세요. 경북대 컴퓨터학부 김유진입니다. 개발새발개발흐엥흐에엥",
        activityArea: "대구광역시 동구",
        hashtags: ["#ㅇㅇ", "#안녕하세요ㅋㅋ"],
        completeProjectsCount: 5,
    },
};
