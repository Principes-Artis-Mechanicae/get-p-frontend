import { Profile } from "./Profile";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "form/Profile",
    component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
