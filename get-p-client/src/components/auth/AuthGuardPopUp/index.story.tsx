import { AuthGuardPopUp } from "@/components/auth/AuthGuardPopUp";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Auth/AuthGuardPopUp",
    component: AuthGuardPopUp,
} satisfies Meta<typeof AuthGuardPopUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
