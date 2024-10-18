import { NavBarProfileDropDown } from "@getp/common/components/navigations/NavBarProfileDropDown";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "common/Navigations/NavBarProfileDropDown",
    component: NavBarProfileDropDown,
} satisfies Meta<typeof NavBarProfileDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
