import { MemberTypeCard } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Auth/MemberTypeCard",
    component: MemberTypeCard,
    argTypes: {
        variant: {
            options: ["client", "people"],
            control: "radio",
        },
    },
} satisfies Meta<typeof MemberTypeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "client",
        width: "208px",
        height: "208px",
        selected: true,
    },
};
