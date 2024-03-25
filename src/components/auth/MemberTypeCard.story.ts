import { MemberTypeCard } from "./MemberTypeCard";
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
        asset: "",
        width: "208px",
        height: "208px",
        children: "의뢰자 회원",
    },
};

export const People: Story = {
    args: {
        variant: "people",
        asset: "",
        width: "208px",
        height: "208px",
        children: "피플 회원",
    },
};
