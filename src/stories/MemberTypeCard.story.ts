import { MemberTypeCard } from "../components/auth/MemberTypeCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "auth/MemberTypeCard",
    component: MemberTypeCard,
} satisfies Meta<typeof MemberTypeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Client: Story = {
    args: {
        variant: "client",
        imgSrc: "", // 빈 문자열 또는 이미지 경로
        width: "208px",
        height: "208px",
        label: "의뢰자 회원",
        selected: true,
    },
};

export const People: Story = {
    args: {
        variant: "people",
        imgSrc: "", // 빈 문자열 또는 이미지 경로
        width: "208px",
        height: "208px",
        label: "피플 회원",
        selected: true,
    },
};
