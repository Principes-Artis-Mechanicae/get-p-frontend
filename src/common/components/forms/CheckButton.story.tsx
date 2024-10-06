import { CheckButton } from "./CheckButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "common/Forms/CheckButton",
    component: CheckButton,
} satisfies Meta<typeof CheckButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "350px",
        height: "50px",
        children: "팀으로 지원하기",
    },
};
