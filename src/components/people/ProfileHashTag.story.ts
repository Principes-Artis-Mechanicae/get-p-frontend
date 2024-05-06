import { ProfileHashTag } from "./ProfileHashTag";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "People/HashTag",
    component: ProfileHashTag,
} satisfies Meta<typeof ProfileHashTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "268px",
        minHeight: "120px",
    },
};
