import { NavBar } from "@getp/common/components/navigations/NavBar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "common/Navigations/NavBar",
    component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
